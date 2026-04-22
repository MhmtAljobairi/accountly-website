import { useLanguage } from '../LanguageProvider';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#03034A] pt-14 pb-7 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-10 pb-10 border-b border-white/5">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5 no-underline">
              <div className="w-10 h-10 bg-white/10 rounded-[10px] flex flex-col items-center justify-center gap-1.5">
                <span className="w-[22px] h-[2.5px] bg-[var(--color-brand-cyan)] rounded-[2px]" />
                <span
                  className={`w-[14px] h-[2.5px] bg-[var(--color-brand-accent)] rounded-[2px] ${
                    language === 'ar' ? 'self-end mr-1' : 'self-start ml-1'
                  }`}
                />
              </div>
              <span className="text-[22px] font-bold text-white">
                account<b className="font-black text-[var(--color-brand-accent)]">ly</b>
              </span>
            </a>
            <p className="text-[13px] text-white/50 mt-3 max-w-[280px] leading-[1.7]">
              {t(
                'نظام ERP سحابي متكامل مبني لتمكين الشركات الأردنية وتسهيل إدارة عملياتها اليومية بكفاءة عالية.',
                'An integrated cloud ERP built to empower Jordanian companies and streamline their daily operations efficiently.'
              )}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 flex-wrap">
            <div>
              <h5 className="text-[12px] font-bold text-white/45 tracking-[1.5px] uppercase mb-4">
                {t('الأنظمة', 'Modules')}
              </h5>
              <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                <li><a href="#" className="text-[14px] text-white/65 hover:text-[var(--color-brand-cyan)] transition-colors">{t('المبيعات', 'Sales')}</a></li>
                <li><a href="#" className="text-[14px] text-white/65 hover:text-[var(--color-brand-cyan)] transition-colors">{t('المشتريات', 'Purchases')}</a></li>
                <li><a href="#" className="text-[14px] text-white/65 hover:text-[var(--color-brand-cyan)] transition-colors">{t('المستودعات', 'Inventory')}</a></li>
                <li><a href="#" className="text-[14px] text-white/65 hover:text-[var(--color-brand-cyan)] transition-colors">{t('المحاسبة', 'Accounting')}</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[12px] font-bold text-white/45 tracking-[1.5px] uppercase mb-4">
                {t('الشركة', 'Company')}
              </h5>
              <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                <li><a href="#why" className="text-[14px] text-white/65 hover:text-[var(--color-brand-cyan)] transition-colors">{t('عن أكاونتلي', 'About Us')}</a></li>
                <li><a href="#features" className="text-[14px] text-white/65 hover:text-[var(--color-brand-cyan)] transition-colors">{t('المميزات', 'Features')}</a></li>
                <li><a href="#contact" className="text-[14px] text-white/65 hover:text-[var(--color-brand-cyan)] transition-colors">{t('احجز عرض', 'Book Demo')}</a></li>
                <li><a href="#" className="text-[14px] text-white/65 hover:text-[var(--color-brand-cyan)] transition-colors">{t('الدعم الفني', 'Support')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-[22px] flex justify-between items-center flex-wrap gap-2.5">
          <div className="text-[13px] text-white/40">
            {t('© 2024 أكاونتلي. جميع الحقوق محفوظة.', '© 2024 Accountly. All rights reserved.')}
          </div>
          <div className="flex gap-2">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/55 transition-all hover:bg-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] hover:text-white"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
