import { useState } from 'react';
import { useLanguage } from '../LanguageProvider';
import { MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const WA_NUMBER = '962795319308';

export function Contact() {
  const { t, isRtl } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    industry: '',
    notes: '',
  });

  const industryLabel = (val: string) => {
    const map: Record<string, { ar: string; en: string }> = {
      wholesale: { ar: 'تجارة جملة / توزيع', en: 'Wholesale / Distribution' },
      retail:    { ar: 'تجارة تجزئة / معارض', en: 'Retail / Showrooms' },
      manufacturing: { ar: 'مصنع / إنتاج', en: 'Manufacturing / Production' },
      other:     { ar: 'أخرى', en: 'Other' },
    };
    return val ? (isRtl ? map[val]?.ar : map[val]?.en) ?? val : '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = isRtl
      ? [
          `مرحباً، أرغب في طلب عرض تجريبي على نظام أكاونتلي 🙌`,
          ``,
          `👤 الاسم: ${form.name || '—'}`,
          `🏢 الشركة: ${form.company || '—'}`,
          `📞 الهاتف: ${form.phone || '—'}`,
          `🏭 مجال العمل: ${industryLabel(form.industry) || '—'}`,
          form.notes ? `📝 ملاحظات: ${form.notes}` : '',
        ]
      : [
          `Hello, I'd like to request a free demo of Accountly ERP 🙌`,
          ``,
          `👤 Name: ${form.name || '—'}`,
          `🏢 Company: ${form.company || '—'}`,
          `📞 Phone: ${form.phone || '—'}`,
          `🏭 Industry: ${industryLabel(form.industry) || '—'}`,
          form.notes ? `📝 Notes: ${form.notes}` : '',
        ];

    const message = lines.filter((l) => l !== null).join('\n');
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'bg-white/10 border border-white/15 rounded-lg px-3.5 py-2.5 text-[14px] text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/30 w-full';

  return (
    <section id="contact" className="py-24 px-5 bg-gradient-to-br from-[#03034A] via-[#000877] to-[#0b1d8f] relative overflow-hidden">
      <div className="absolute -top-[120px] -right-[120px] w-[450px] h-[450px] rounded-full bg-[rgba(1,230,255,0.05)] pointer-events-none" />
      <div className="absolute -bottom-[90px] -left-[90px] w-[360px] h-[360px] rounded-full bg-[rgba(1,162,255,0.07)] pointer-events-none" />

      <div className="max-w-[820px] mx-auto text-center relative z-10">
        <div className="mb-10">
          <span className="block text-[12px] font-bold text-[var(--color-brand-cyan)] tracking-[2.5px] uppercase mb-2.5">
            {t('احصل على عرض', 'GET A DEMO')}
          </span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] font-black text-white leading-[1.25] mb-3.5">
            {t('جاهز لنقل شركتك للمستوى التالي؟', 'Ready to take your business to the next level?')}
          </h2>
          <p className="text-[16px] text-white/70 leading-[1.8] max-w-[520px] mx-auto">
            {t(
              'اترك بياناتك وسيقوم فريقنا بالتواصل معك لترتيب عرض توضيحي مجاني للنظام.',
              'Leave your details and our team will contact you to arrange a free system demo.'
            )}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-[20px] p-[34px] backdrop-blur-sm"
        >
          <form className="grid md:grid-cols-2 gap-4 text-start" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-white/80">{t('الاسم الكريم', 'Full Name')}</label>
              <input
                data-testid="input-contact-name"
                type="text"
                placeholder={t('أحمد محمد', 'Ahmad Mohammad')}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-white/80">{t('اسم الشركة', 'Company Name')}</label>
              <input
                data-testid="input-contact-company"
                type="text"
                placeholder={t('شركة التقدم للتجارة', 'Progress Trading Co.')}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-white/80">{t('رقم الهاتف', 'Phone Number')}</label>
              <input
                data-testid="input-contact-phone"
                type="tel"
                placeholder="07X XXX XXXX"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`${inputClass} text-left`}
                dir="ltr"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-white/80">{t('مجال العمل', 'Industry')}</label>
              <select
                data-testid="select-contact-industry"
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className="bg-[#0b1d8f]/50 border border-white/15 rounded-lg px-3.5 py-2.5 text-[14px] text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors appearance-none w-full"
              >
                <option className="bg-[#03034A] text-white" value="">{t('اختر مجال شركتك', 'Select your industry')}</option>
                <option className="bg-[#03034A] text-white" value="wholesale">{t('تجارة جملة / توزيع', 'Wholesale / Distribution')}</option>
                <option className="bg-[#03034A] text-white" value="retail">{t('تجارة تجزئة / معارض', 'Retail / Showrooms')}</option>
                <option className="bg-[#03034A] text-white" value="manufacturing">{t('مصنع / إنتاج', 'Manufacturing / Production')}</option>
                <option className="bg-[#03034A] text-white" value="other">{t('أخرى', 'Other')}</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-[13px] font-bold text-white/80">{t('ملاحظات إضافية (اختياري)', 'Additional Notes (Optional)')}</label>
              <textarea
                data-testid="input-contact-notes"
                placeholder={t('ما هي التحديات التي تواجهها حالياً؟', 'What challenges are you currently facing?')}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className={`${inputClass} h-[88px] resize-none`}
              />
            </div>

            <div className="md:col-span-2 flex flex-wrap justify-center gap-3 mt-2">
              <button
                data-testid="btn-contact-submit"
                type="submit"
                className="inline-flex items-center gap-2.5 bg-[var(--color-brand-wa)] text-white border-none rounded-xl px-[30px] py-[13px] text-[15px] font-bold cursor-pointer transition-all hover:bg-[#1da851] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(37,211,102,0.3)]"
              >
                <Send className="w-[18px] h-[18px]" />
                {t('إرسال عبر واتساب', 'Send via WhatsApp')}
              </button>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="btn-contact-whatsapp"
                className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white rounded-xl px-[26px] py-[13px] text-[15px] font-bold no-underline transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-[19px] h-[19px]" />
                {t('تواصل مباشر', 'Direct Chat')}
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
