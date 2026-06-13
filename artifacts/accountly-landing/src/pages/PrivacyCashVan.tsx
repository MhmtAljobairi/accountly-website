import logoImg from '../assets/accountly-logo.png';

const LAST_UPDATED = 'May 4, 2025';
const CONTACT_EMAIL = 'support@accountly.me';
const COMPANY_NAME = 'Accountly';
const APP_NAME = 'Accountly CashVan';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-[20px] font-bold text-[#000877] mb-4 pb-2 border-b border-gray-100">
        {title}
      </h2>
      <div className="text-[15px] text-gray-600 leading-[1.85] space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyCashVan() {
  return (
    <div className="min-h-screen bg-gray-50 font-[Poppins,Inter,sans-serif]" dir="ltr">
      {/* Header */}
      <header className="bg-[#000877] py-5 px-6 shadow-lg">
        <div className="max-w-[820px] mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center no-underline">
            <img src={logoImg} alt="Accountly" className="h-9 w-auto object-contain brightness-0 invert" />
          </a>
          <span className="text-white/60 text-[13px]">Privacy Policy</span>
        </div>
      </header>

      {/* Hero strip */}
      <div className="bg-gradient-to-br from-[#000877] to-[#0b1d8f] py-12 px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-wide mb-4">
          📱 {APP_NAME}
        </div>
        <h1 className="text-[clamp(26px,4vw,40px)] font-black mb-2">Privacy Policy</h1>
        <p className="text-white/60 text-[14px]">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* Content */}
      <main className="max-w-[820px] mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,8,119,0.06)] p-10">

          {/* Intro */}
          <p className="text-[15px] text-gray-600 leading-[1.9] mb-10 p-5 bg-blue-50 border-l-4 border-[#000877] rounded-lg">
            This Privacy Policy describes how <strong>{COMPANY_NAME}</strong> ("<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>") collects, uses, and protects information obtained through the <strong>{APP_NAME}</strong> mobile application ("App"). By downloading or using the App, you agree to the practices described in this policy.
          </p>

          <Section title="1. About CashVan">
            <p>
              {APP_NAME} is a field sales management application designed for sales representatives who operate as part of the Accountly ERP ecosystem. The App enables sales reps to manage customer visits, record orders, issue invoices, collect payments, and sync data in real time with the main Accountly platform.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect the following categories of information when you use {APP_NAME}:</p>

            <div className="mt-4 space-y-4">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">📍 Location Data</h3>
                <p>We collect your precise GPS location while using the App to track field visits, optimize routes, and verify customer check-ins. Location is collected only while the App is in use (foreground) unless you explicitly enable background location for route tracking features.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">👤 Account & Profile Information</h3>
                <p>Your name, employee ID, email address, and role within your organization — provided by your employer during account setup.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">🛒 Sales & Transaction Data</h3>
                <p>Orders, invoices, payment collections, customer interactions, visit notes, and product data created or accessed through the App during your work activities.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">📱 Device Information</h3>
                <p>Device model, operating system version, unique device identifiers, and app version — used for troubleshooting and ensuring compatibility.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">📷 Camera & Storage</h3>
                <p>The App may request camera access to scan barcodes/QR codes on products or capture delivery confirmation photos. Storage access is requested only to save or share documents generated within the App.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">🌐 Usage & Log Data</h3>
                <p>App usage patterns, feature interactions, error logs, and session timestamps — used to improve App performance and diagnose issues.</p>
              </div>
            </div>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Authenticate your identity and authorize access to your organization's Accountly account.</li>
              <li>Sync field sales data (orders, visits, payments) with the Accountly ERP platform in real time.</li>
              <li>Track and display your sales routes, visit history, and performance metrics.</li>
              <li>Generate invoices, receipts, and delivery confirmations on behalf of your organization.</li>
              <li>Send push notifications for assigned tasks, alerts, and important updates from your manager.</li>
              <li>Diagnose technical issues and improve App stability and performance.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing & Disclosure">
            <p>We do <strong>not</strong> sell your personal data. We may share information in the following limited circumstances:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Your Employer / Organization:</strong> All sales and location data collected through the App is accessible to your employer through the Accountly ERP dashboard, as the App functions as a business tool.</li>
              <li><strong>Service Providers:</strong> We may engage trusted third-party providers (e.g., cloud hosting, analytics) who are contractually bound to protect your data and use it only for specified purposes.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or governmental authority.</li>
              <li><strong>Business Transfer:</strong> In the event of a merger or acquisition, data may be transferred to the successor entity under equivalent protections.</li>
            </ul>
          </Section>

          <Section title="5. Location Data — Additional Details">
            <p>
              Location tracking is a core feature of {APP_NAME}. Here is how we handle it:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Foreground location is used for real-time map display and customer check-ins.</li>
              <li>Background location (if enabled) is used solely for route recording during active work sessions.</li>
              <li>You may disable location access via your device settings; however, core features such as visit check-ins and route tracking will not function without it.</li>
              <li>Location history is stored securely and accessible only by authorized personnel within your organization.</li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal data for as long as your employment account is active within the Accountly platform. Upon account deactivation, personal data is retained for a period of <strong>90 days</strong> to allow for operational continuity and then permanently deleted, unless legal obligations require longer retention.
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Encrypted data transmission using HTTPS/TLS.</li>
              <li>Secure cloud storage with access controls and audit logs.</li>
              <li>Regular security assessments and vulnerability testing.</li>
              <li>Employee access restricted on a need-to-know basis.</li>
            </ul>
            <p className="mt-3">
              No system is 100% secure. If you suspect a security issue, please contact us immediately at <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#000877] font-medium underline">{CONTACT_EMAIL}</a>.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal and contractual obligations).</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for optional data processing at any time.</li>
              <li><strong>Objection:</strong> Object to processing of your data in certain circumstances.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#000877] font-medium underline">{CONTACT_EMAIL}</a>. Note that some requests may be handled through your employer as the primary data controller.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              {APP_NAME} is intended for use by business professionals and is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal data, please contact us immediately.
            </p>
          </Section>

          <Section title="10. Third-Party Services">
            <p>
              The App may integrate with third-party services (such as mapping providers for route display). These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page and notify users through the App or via email. Continued use of the App after changes constitutes your acceptance of the revised policy.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <div className="mt-4 bg-gray-50 rounded-xl p-6 space-y-2">
              <p><strong className="text-gray-800">Company:</strong> {COMPANY_NAME}</p>
              <p><strong className="text-gray-800">Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#000877] underline">{CONTACT_EMAIL}</a></p>
              <p><strong className="text-gray-800">WhatsApp:</strong> <a href="https://wa.me/962795319308" className="text-[#000877] underline">+962 795 319 308</a></p>
              <p><strong className="text-gray-800">Website:</strong> <a href="https://accountly.me" target="_blank" rel="noopener noreferrer" className="text-[#000877] underline">accountly.me</a></p>
            </div>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#03034A] text-center py-6 px-5">
        <p className="text-white/40 text-[13px]">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
