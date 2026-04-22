import { useLanguage } from '../LanguageProvider';

export function Industries() {
  const { t } = useLanguage();

  const tags = [
    { ar: 'تجار الجملة', en: 'Wholesalers' },
    { ar: 'قطاع التجزئة', en: 'Retail Sector' },
    { ar: 'المصانع والإنتاج', en: 'Factories & Production' },
    { ar: 'شركات التوزيع', en: 'Distribution Cos.' },
    { ar: 'إدارة المندوبين', en: 'Sales Reps Management' }
  ];

  return (
    <div className="py-9 px-5 bg-[var(--color-brand-primary)]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-4 flex-wrap">
        <span className="text-white/55 text-[13px] font-bold whitespace-nowrap">
          {t('مصمم خصيصاً لـ:', 'Built for:')}
        </span>
        <div className="flex gap-2 flex-wrap justify-center">
          {tags.map((tag, idx) => (
            <div 
              key={idx} 
              className="bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors hover:bg-[rgba(1,230,255,0.18)] hover:border-[var(--color-brand-cyan)] hover:text-[var(--color-brand-cyan)] cursor-default"
            >
              {t(tag.ar, tag.en)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
