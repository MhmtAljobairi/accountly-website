import { useLanguage } from '../LanguageProvider';
import { motion } from 'framer-motion';
import { ShieldCheck, CloudLightning, HeadphonesIcon, Settings2, BadgeDollarSign } from 'lucide-react';

export function Why() {
  const { t } = useLanguage();

  const points = [
    {
      icon: ShieldCheck,
      arTitle: 'أمان وموثوقية عالية',
      enTitle: 'High Security & Reliability',
      arDesc: 'نسخ احتياطي يومي مشفر وتوافر بنسبة 99.9% لتضمن استمرارية عملك.',
      enDesc: 'Encrypted daily backups and 99.9% uptime to ensure business continuity.'
    },
    {
      icon: CloudLightning,
      enTitle: 'سحابي 100%',
      arTitle: '100% Cloud Based',
      enDesc: 'Access your system from anywhere, any device. No servers or maintenance needed.',
      arDesc: 'ادخل لنظامك من أي مكان وأي جهاز. لا حاجة لسيرفرات أو صيانة معقدة.'
    },
    {
      icon: Settings2,
      enTitle: 'Customized for Jordan',
      arTitle: 'مخصص للسوق الأردني',
      enDesc: 'Fully compliant with Jordanian tax laws, e-invoicing, and local business practices.',
      arDesc: 'متوافق تماماً مع ضريبة المبيعات، الفوترة الإلكترونية، وطبيعة العمل المحلي.'
    },
    {
      icon: HeadphonesIcon,
      enTitle: 'Local Technical Support',
      arTitle: 'دعم فني محلي',
      enDesc: 'A Jordanian team ready to assist you by phone, field visits, or remote sessions.',
      arDesc: 'فريق أردني جاهز لخدمتك هاتفياً، ميدانياً، أو عن بعد لتذليل أي عقبات.'
    },
    {
      icon: BadgeDollarSign,
      enTitle: 'No Hidden Costs',
      arTitle: 'لا مصاريف مخفية',
      enDesc: 'Transparent pricing with no surprises — what you see is exactly what you pay.',
      arDesc: 'أسعار شفافة بدون أي مفاجآت — ما تراه هو ما تدفعه بالضبط، لا رسوم إضافية مخفية.'
    }
  ];

  return (
    <section id="why" className="py-24 px-5 bg-[var(--color-muted)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <span className="block text-[12px] font-bold text-[var(--color-brand-accent)] tracking-[2.5px] uppercase mb-2.5">
            {t('لماذا أكاونتلي؟', 'WHY ACCOUNTLY?')}
          </span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] font-black text-foreground leading-[1.25] mb-3.5">
            {t('أكثر من مجرد برنامج', 'More Than Just Software')}
          </h2>
          <p className="text-[16px] text-[var(--color-muted-foreground)] leading-[1.8] max-w-[520px]">
            {t('نحن شريكك التقني الذي يفهم تحديات السوق الأردني ويقدم لك الأدوات لتجاوزها.', 'We are your technical partner who understands the challenges of the Jordanian market and provides tools to overcome them.')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Points */}
          <div className="flex flex-col gap-4">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-3.5 items-start bg-white rounded-[14px] p-[18px_20px] border border-border transition-all duration-300 hover:border-[rgba(1,162,255,0.3)] hover:shadow-[0_8px_28px_rgba(1,162,255,0.1)]"
              >
                <div className="w-11 h-11 rounded-xl shrink-0 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] flex items-center justify-center text-white">
                  <point.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-foreground mb-1">{t(point.arTitle, point.enTitle)}</h4>
                  <p className="text-[13px] text-[var(--color-muted-foreground)] leading-[1.65]">{t(point.arDesc, point.enDesc)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Big Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-brand-primary)] rounded-[22px] p-10 text-white relative overflow-hidden"
          >
            <div className="absolute -top-[70px] -right-[70px] w-[220px] h-[220px] rounded-full bg-[rgba(1,230,255,0.09)]" />
            <div className="absolute -bottom-[50px] -left-[50px] w-[180px] h-[180px] rounded-full bg-[rgba(1,162,255,0.1)]" />
            
            <div className="relative z-10">
              <div className="text-[72px] font-black text-[var(--color-brand-cyan)] leading-none mb-2">#1</div>
              <div className="text-[18px] font-bold mb-1">{t('النظام الأول في السوق الأردني', 'Jordan\'s #1 ERP System')}</div>
              <div className="text-[13px] text-white/60 mb-5">{t('مُصمَّم خصيصاً لتجار الجملة والتجزئة والمصانع والموزعين في الأردن', 'Purpose-built for Jordanian wholesalers, retailers, factories & distributors')}</div>
              
              <div className="grid grid-cols-2 gap-2.5 mt-5">
                <div className="bg-white/5 rounded-xl p-4 text-center backdrop-blur-sm">
                  <div className="text-[22px] font-black">+350</div>
                  <div className="text-[11px] text-white/60 mt-0.5">{t('عميل يثق بنا', 'Trusted Clients')}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center backdrop-blur-sm">
                  <div className="text-[22px] font-black">24/7</div>
                  <div className="text-[11px] text-white/60 mt-0.5">{t('مراقبة وحماية', 'Monitoring & Protection')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
