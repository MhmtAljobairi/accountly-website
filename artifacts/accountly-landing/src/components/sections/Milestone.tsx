import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageProvider';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  animatedValue?: number;
  suffix?: string;
  label: string;
  subLabel: string;
  accent?: boolean;
  delay?: number;
  started: boolean;
}

function StatCard({ icon: Icon, value, animatedValue, suffix = '', label, subLabel, accent, delay = 0, started }: StatCardProps) {
  const counted = useCountUp(animatedValue ?? 0, 2200, started && !!animatedValue);
  const displayVal = animatedValue ? counted.toLocaleString() : value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative rounded-2xl p-7 flex flex-col gap-3 overflow-hidden ${
        accent
          ? 'bg-gradient-to-br from-[var(--color-brand-primary)] to-[#0b1d8f] text-white'
          : 'bg-white border border-gray-100 shadow-[0_4px_28px_rgba(0,8,119,0.07)]'
      }`}
    >
      {accent && (
        <>
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[rgba(1,230,255,0.12)] pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-[rgba(1,162,255,0.1)] pointer-events-none" />
        </>
      )}
      <div className="relative z-10">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${accent ? 'bg-[var(--color-brand-cyan)]/20' : 'bg-[var(--color-brand-primary)]/8'}`}>
          <Icon className={`w-5 h-5 ${accent ? 'text-[var(--color-brand-cyan)]' : 'text-[var(--color-brand-primary)]'}`} />
        </div>
        <div className={`text-[clamp(36px,4vw,52px)] font-black leading-none mb-1.5 ${accent ? 'text-[var(--color-brand-cyan)]' : 'text-[var(--color-brand-primary)]'}`}>
          +{displayVal}{suffix}
        </div>
        <div className={`text-[16px] font-bold mb-1 ${accent ? 'text-white' : 'text-gray-800'}`}>{label}</div>
        <div className={`text-[13px] leading-[1.6] ${accent ? 'text-white/60' : 'text-gray-400'}`}>{subLabel}</div>
      </div>
    </motion.div>
  );
}

export function Milestone() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-5 bg-[#F5F7FF] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,8,119,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(1,230,255,0.06) 0%, transparent 55%)' }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[12px] font-bold text-[var(--color-brand-primary)] tracking-[2.5px] uppercase mb-3 px-4 py-1.5 rounded-full bg-[var(--color-brand-primary)]/8">
            {t('بالأرقام', 'BY THE NUMBERS')}
          </span>
          <h2 className="text-[clamp(26px,3vw,42px)] font-black text-[var(--color-brand-primary)] leading-[1.2] mb-4">
            {isRtl ? (
              <>أرقام حقيقية،<br /><span className="text-[var(--color-brand-accent)]"> ثقة مكتسبة</span></>
            ) : (
              <>Real Numbers,<br /><span className="text-[var(--color-brand-accent)]">Earned Trust</span></>
            )}
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-[1.8]">
            {t(
              'أكاونتلي لم يكن مجرد نظام — كان شريكاً فعلياً في نمو عشرات الشركات الأردنية.',
              'Accountly wasn\'t just software — it was a real partner in the growth of dozens of Jordanian businesses.'
            )}
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          <StatCard
            icon={TrendingUp}
            animatedValue={2500000}
            label={t('حركة مالية مُعالَجة', 'Financial Transactions')}
            subLabel={t('فواتير، مدفوعات، وحركات مخزنية أدارها النظام بدقة تامة', 'Invoices, payments & stock movements handled with full accuracy')}
            accent
            delay={0}
            started={inView}
            suffix=""
            value=""
          />
          <StatCard
            icon={Users}
            value="350"
            label={t('شركة تثق بنا', 'Companies Trust Us')}
            subLabel={t('من تجار الجملة والتجزئة والمصانع والموزعين في الأردن', 'Wholesalers, retailers, factories & distributors across Jordan')}
            delay={0.1}
            started={inView}
          />
          <StatCard
            icon={Star}
            value="22"
            suffix={t(' سنة', ' yrs')}
            label={t('سنة خبرة في السوق', 'Years of Market Experience')}
            subLabel={t('نفهم تحديات الأعمال الأردنية من الداخل', 'We understand Jordanian business challenges from the inside')}
            delay={0.2}
            started={inView}
          />
          <StatCard
            icon={Clock}
            value="99.9"
            suffix="%"
            label={t('استقرار النظام', 'System Uptime')}
            subLabel={t('لا توقف، لا بطء — عملك يستمر على مدار الساعة', 'No downtime, no slowdowns — your business runs around the clock')}
            delay={0.3}
            started={inView}
          />
        </div>

        {/* Tagline banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-8 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: 'linear-gradient(135deg, var(--color-brand-primary) 0%, #0b1d8f 100%)' }}
        >
          <div className={`text-white ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="text-[18px] font-black mb-1">
              {t('كل حركة. كل فاتورة. كل قرار.', 'Every transaction. Every invoice. Every decision.')}
            </div>
            <div className="text-[14px] text-white/65">
              {t('أكاونتلي يوثّق كل شيء ويعطيك السيطرة الكاملة على أعمالك.', 'Accountly documents everything and gives you full control over your business.')}
            </div>
          </div>
          <a
            href="https://wa.me/962795319308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--color-brand-cyan)] text-[var(--color-brand-primary)] font-black rounded-xl px-6 py-3 text-[14px] no-underline transition-all hover:brightness-110 hover:-translate-y-0.5 whitespace-nowrap"
          >
            {t('ابدأ الآن مجاناً', 'Start Free Now')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
