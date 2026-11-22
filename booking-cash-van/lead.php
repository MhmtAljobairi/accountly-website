<?php
/**
 * Receives demo-booking leads from index.html and forwards them to Slack.
 *
 * The Slack webhook URL is NOT stored in this file. It is read from:
 *   1. the SLACK_WEBHOOK_URL environment variable, or
 *   2. a .env file in the folder ABOVE this one (Forge: Site > Environment writes it there),
 *      containing a line like:  SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

// Places a .env file may live, nearest first. Covers Forge's plain layout
// (site/.env above public/) and its zero-downtime layout (site/shared/.env,
// symlinked into site/current/). The web root itself is checked last.
function env_candidates(): array
{
    $up1 = dirname(__DIR__);
    $up2 = dirname($up1);
    $up3 = dirname($up2);
    return array_values(array_unique([
        $up1 . '/.env',
        $up1 . '/shared/.env',
        $up2 . '/.env',
        $up2 . '/shared/.env',
        $up3 . '/shared/.env',
        __DIR__ . '/.env',
    ]));
}

function webhook_url(): string
{
    foreach (['SLACK_WEBHOOK_URL'] as $key) {
        $v = getenv($key) ?: ($_SERVER[$key] ?? ($_ENV[$key] ?? ''));
        if ($v) {
            return trim($v);
        }
    }
    foreach (env_candidates() as $envFile) {
        if (!is_readable($envFile)) {
            continue;
        }
        foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
            if (preg_match('/^\s*(?:export\s+)?SLACK_WEBHOOK_URL\s*=\s*["\']?(https:\/\/[^"\'\s]+)["\']?\s*$/', $line, $m)) {
                return $m[1];
            }
        }
    }
    return '';
}

function clean($value, int $max): string
{
    return is_string($value) ? mb_substr(trim($value), 0, $max) : '';
}

// Accepts 07XXXXXXXX, 7XXXXXXXX, +9627..., 009627..., Arabic/Persian digits too. Returns 9 digits or null.
function normalize_phone($raw): ?string
{
    $d = str_replace(
        ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        (string) $raw
    );
    $d = preg_replace('/\D/', '', $d);
    if (strpos($d, '00962') === 0) {
        $d = substr($d, 5);
    } elseif (strpos($d, '962') === 0) {
        $d = substr($d, 3);
    }
    if (strpos($d, '0') === 0) {
        $d = substr($d, 1);
    }
    return preg_match('/^7[789]\d{7}$/', $d) ? $d : null;
}

function esc(string $s): string
{
    return str_replace(['&', '<', '>'], ['&amp;', '&lt;', '&gt;'], $s);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$in = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($in)) {
    $in = $_POST;
}

// Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
if (clean($in['website'] ?? '', 200) !== '') {
    respond(200, ['ok' => true]);
}

$name    = clean($in['name'] ?? '', 80);
$company = clean($in['company'] ?? '', 120);
$job     = clean($in['job'] ?? '', 60);
$reps    = clean($in['reps'] ?? '', 40);
$page    = clean($in['page'] ?? '', 80) ?: 'صفحة حجز';
$source  = clean($in['source'] ?? '', 300) ?: 'مباشر';
$phone   = normalize_phone($in['phone'] ?? '');

if ($name === '' || $company === '' || $job === '' || $reps === '' || $phone === null) {
    respond(400, ['ok' => false, 'error' => 'invalid']);
}

$webhook = webhook_url();
if ($webhook === '') {
    error_log('lead.php: SLACK_WEBHOOK_URL not found. lead.php is in ' . __DIR__
        . '; looked for .env in: ' . implode(', ', env_candidates()));
    respond(500, ['ok' => false, 'error' => 'not_configured']);
}

$local = '0' . $phone;
$when  = (new DateTime('now', new DateTimeZone('Asia/Amman')))->format('j M Y, H:i');

$message = [
    'text'   => 'ليد جديد: ' . esc($name) . ' / ' . esc($company) . ' / ' . $local,
    'blocks' => [
        ['type' => 'header', 'text' => ['type' => 'plain_text', 'text' => 'ليد جديد: ' . $page]],
        ['type' => 'section', 'fields' => [
            ['type' => 'mrkdwn', 'text' => "*الاسم:*\n" . esc($name)],
            ['type' => 'mrkdwn', 'text' => "*الشركة:*\n" . esc($company)],
            ['type' => 'mrkdwn', 'text' => "*الموبايل:*\n<tel:+962{$phone}|{$local}>  ·  <https://wa.me/962{$phone}|واتساب>"],
            ['type' => 'mrkdwn', 'text' => "*المسمى الوظيفي:*\n" . esc($job)],
            ['type' => 'mrkdwn', 'text' => "*عدد المندوبين:*\n" . esc($reps)],
            ['type' => 'mrkdwn', 'text' => "*الوقت (عمّان):*\n" . $when],
        ]],
        ['type' => 'context', 'elements' => [
            ['type' => 'mrkdwn', 'text' => 'المصدر: ' . esc($source) . '  ·  التواصل خلال ساعة إلى ساعتين'],
        ]],
    ],
];

$ch = curl_init($webhook);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS     => json_encode($message, JSON_UNESCAPED_UNICODE),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 10,
]);
$result = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error  = curl_error($ch);
curl_close($ch);

if ($result === false || $status < 200 || $status >= 300) {
    error_log("lead.php: Slack failed (status {$status}) {$error} {$result}");
    respond(502, ['ok' => false, 'error' => 'slack_failed']);
}

respond(200, ['ok' => true]);
