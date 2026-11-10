import { Router, type IRouter } from "express";
import { logger } from "../lib/logger";

// Receives demo-booking leads from the landing pages under /booking/* and
// forwards them to Slack. The webhook URL lives in the SLACK_WEBHOOK_URL
// environment variable (a Replit Secret) so it never ships to the browser or git.

const router: IRouter = Router();

const MAX = { name: 80, company: 120, reps: 40, method: 40, page: 80, source: 300 };

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

// Same rules as the page: 07XXXXXXXX, 7XXXXXXXX, +9627..., 009627...; returns 9 digits.
function normalizePhone(raw: unknown): string | null {
  let d = String(raw ?? "")
    .replace(/[٠-٩]/g, (c) => String("٠١٢٣٤٥٦٧٨٩".indexOf(c)))
    .replace(/[۰-۹]/g, (c) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(c)))
    .replace(/\D/g, "");
  if (d.startsWith("00962")) d = d.slice(5);
  else if (d.startsWith("962")) d = d.slice(3);
  if (d.startsWith("0")) d = d.slice(1);
  return /^7[789]\d{7}$/.test(d) ? d : null;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

router.post("/leads", async (req, res) => {
  const body = (req.body ?? {}) as Record<string, unknown>;

  // Honeypot: bots fill the hidden field. Pretend success, send nothing.
  if (clean(body["website"], 200)) {
    res.json({ ok: true });
    return;
  }

  const name = clean(body["name"], MAX.name);
  const company = clean(body["company"], MAX.company);
  const reps = clean(body["reps"], MAX.reps);
  const method = clean(body["method"], MAX.method);
  const page = clean(body["page"], MAX.page) || "صفحة حجز";
  const source = clean(body["source"], MAX.source) || "مباشر";
  const phone = normalizePhone(body["phone"]);

  if (!name || !company || !reps || !method || !phone) {
    res.status(400).json({ ok: false, error: "invalid" });
    return;
  }

  const webhook = process.env["SLACK_WEBHOOK_URL"];
  if (!webhook) {
    logger.error("SLACK_WEBHOOK_URL is not set; lead not delivered");
    res.status(500).json({ ok: false, error: "not_configured" });
    return;
  }

  const local = "0" + phone;
  const when = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Amman",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const message = {
    text: `ليد جديد: ${esc(name)} / ${esc(company)} / ${local}`,
    blocks: [
      { type: "header", text: { type: "plain_text", text: "ليد جديد: " + page } },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: "*الاسم:*\n" + esc(name) },
          { type: "mrkdwn", text: "*الشركة:*\n" + esc(company) },
          {
            type: "mrkdwn",
            text: `*الموبايل:*\n<tel:+962${phone}|${local}>  ·  <https://wa.me/962${phone}|واتساب>`,
          },
          { type: "mrkdwn", text: "*عدد المندوبين:*\n" + esc(reps) },
          { type: "mrkdwn", text: "*طريقة البيع:*\n" + esc(method) },
          { type: "mrkdwn", text: "*الوقت (عمّان):*\n" + when },
        ],
      },
      {
        type: "context",
        elements: [
          { type: "mrkdwn", text: "المصدر: " + esc(source) + "  ·  التواصل خلال ساعة إلى ساعتين" },
        ],
      },
    ],
  };

  try {
    const r = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
    if (!r.ok) {
      logger.error({ status: r.status, body: await r.text() }, "Slack rejected lead");
      res.status(502).json({ ok: false, error: "slack_failed" });
      return;
    }
    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Failed to reach Slack");
    res.status(502).json({ ok: false, error: "slack_unreachable" });
  }
});

export default router;
