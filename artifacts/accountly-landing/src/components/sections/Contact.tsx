import { useLanguage } from '../LanguageProvider';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-5 bg-gradient-to-br from-[#03034A] via-[#000877] to-[#0b1d8f] relative overflow-hidden">
      {/* Background circles */}
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
            {t('اترك بياناتك وسيقوم فريقنا بالتواصل معك لترتيب عرض توضيحي مجاني للنظام.', 'Leave your details and our team will contact you to arrange a free system demo.')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-[20px] p-[34px] backdrop-blur-sm"
        >
          <form className="grid md:grid-cols-2 gap-4 text-start" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-white/80">{t('الاسم الكريم', 'Full Name')}</label>
              <input 
                type="text" 
                placeholder={t('أحمد محمد', 'Ahmad Mohammad')}
                className="bg-white/10 border border-white/15 rounded-lg px-3.5 py-2.5 text-[14px] text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-white/80">{t('اسم الشركة', 'Company Name')}</label>
              <input 
                type="text" 
                placeholder={t('شركة التقدم للتجارة', 'Progress Trading Co.')}
                className="bg-white/10 border border-white/15 rounded-lg px-3.5 py-2.5 text-[14px] text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-white/80">{t('رقم الهاتف', 'Phone Number')}</label>
              <input 
                type="tel" 
                placeholder="07X XXX XXXX"
                className="bg-white/10 border border-white/15 rounded-lg px-3.5 py-2.5 text-[14px] text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/30 text-left dir-ltr"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-white/80">{t('مجال العمل', 'Industry')}</label>
              <select className="bg-[#0b1d8f]/50 border border-white/15 rounded-lg px-3.5 py-2.5 text-[14px] text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors appearance-none">
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
                placeholder={t('ما هي التحديات التي تواجهها حالياً؟', 'What challenges are you currently facing?')}
                className="bg-white/10 border border-white/15 rounded-lg px-3.5 py-2.5 text-[14px] text-white focus:outline-none focus:border-[var(--color-brand-cyan)] transition-colors placeholder:text-white/30 h-[88px] resize-none"
              />
            </div>
            
            <div className="md:col-span-2 flex flex-wrap justify-center gap-3 mt-2">
              <button className="bg-white text-[var(--color-brand-primary)] border-none rounded-xl px-[30px] py-[13px] text-[15px] font-bold cursor-pointer transition-all hover:bg-[var(--color-brand-cyan)] hover:text-[#03034A] hover:-translate-y-0.5">
                {t('إرسال الطلب', 'Submit Request')}
              </button>
              <a 
                href="https://wa.me/962795319308" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[var(--color-brand-wa)] text-white rounded-xl px-[26px] py-[13px] text-[15px] font-bold no-underline transition-all hover:bg-[#1da851] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-[19px] h-[19px]" />
                {t('تواصل واتساب', 'WhatsApp Us')}
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
