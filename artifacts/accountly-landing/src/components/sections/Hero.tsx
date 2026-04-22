import { useLanguage } from '../LanguageProvider';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, TrendingUp, Users, CheckCircle2, BarChart2 } from 'lucide-react';
import screenshotImg from '@assets/Screenshot_2026-04-22_at_5.15.04_PM_1776867312226.png';

export function Hero() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="hero" className="min-h-screen pt-[72px] flex items-center relative overflow-hidden bg-gradient-to-br from-[#f6f8ff] via-[#eef2ff] to-[#f0fbff]">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[90px] opacity-[0.12] bg-[var(--color-brand-accent)] -top-[250px] -left-[180px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[90px] opacity-[0.12] bg-[var(--color-brand-cyan)] -bottom-[150px] -right-[100px]" />
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.08] bg-[var(--color-brand-primary)] top-[40%] right-[25%]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,8,119,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,8,119,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 py-[80px] grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-start"
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(1,162,255,0.09)] border border-[rgba(1,162,255,0.22)] rounded-full px-4 py-1.5 text-[13px] font-bold text-[var(--color-brand-accent)] mb-6">
            <span className="w-[7px] h-[7px] rounded-full bg-[var(--color-brand-accent)] animate-[blink_2s_infinite]" />
            {t('النظام الأول في الأردن', 'The #1 System in Jordan')}
          </div>

          <h1 className="text-[clamp(34px,4.2vw,54px)] font-black leading-[1.22] text-foreground mb-5">
            {t('أدِر كل عمليات شركتك ', 'Manage All Operations ')}
            <br />
            <span className="text-[var(--color-brand-primary)] relative inline-block">
              {t('من مكان واحد', 'From One Place')}
              <span className="absolute bottom-[1px] right-0 left-0 h-1 bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-cyan)] rounded-sm opacity-70" />
            </span>
          </h1>

          <p className="text-[16.5px] text-[var(--color-muted-foreground)] leading-[1.85] mb-9 max-w-[460px]">
            {t(
              'نظام ERP سحابي مصمم خصيصاً للسوق الأردني — متكامل بالكامل مع احتياجات تجار الجملة، التجزئة، المصانع، والموزعين.',
              'A cloud ERP built specifically for the Jordanian market — fully tailored for wholesalers, retailers, factories, and distributors.'
            )}
          </p>

          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
            <a
              href="#contact"
              data-testid="btn-hero-demo"
              className="inline-flex items-center gap-2.5 bg-[var(--color-brand-primary)] text-white px-[26px] py-[13px] rounded-xl text-[15px] font-bold transition-all hover:bg-[#03034A] hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(0,8,119,0.22)]"
            >
              {t('احجز عرض تجريبي', 'Book a Demo')}
              <ArrowRight className={`w-[18px] h-[18px] ${isRtl ? 'rotate-180' : ''}`} />
            </a>
            <a
              href="https://wa.me/962XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="btn-hero-whatsapp"
              className="inline-flex items-center gap-2.5 bg-[var(--color-brand-wa)] text-white px-[26px] py-[13px] rounded-xl text-[15px] font-bold transition-all hover:bg-[#1da851] hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              {t('تواصل معنا', 'Contact Us')}
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-11 pt-7 border-t border-border justify-center md:justify-start w-full">
            <div className="flex flex-col">
              <span className="text-[30px] font-black text-[var(--color-brand-primary)] leading-none">+<em className="text-[var(--color-brand-accent)] not-italic">350</em></span>
              <span className="text-[13px] text-[var(--color-muted-foreground)] font-semibold mt-1">{t('شركة أردنية', 'Jordanian Companies')}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[30px] font-black text-[var(--color-brand-primary)] leading-none"><em className="text-[var(--color-brand-accent)] not-italic">8</em></span>
              <span className="text-[13px] text-[var(--color-muted-foreground)] font-semibold mt-1">{t('أنظمة متكاملة', 'Integrated Modules')}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[30px] font-black text-[var(--color-brand-primary)] leading-none"><em className="text-[var(--color-brand-accent)] not-italic">22</em></span>
              <span className="text-[13px] text-[var(--color-muted-foreground)] font-semibold mt-1">{t('سنوات خبرة', 'Years Experience')}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Real System Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
          className="relative hidden md:block"
        >
          {/* Glow behind the card */}
          <div className="absolute inset-4 rounded-[28px] bg-[var(--color-brand-accent)] opacity-10 blur-[40px] -z-10" />

          {/* Browser frame */}
          <div className="bg-white rounded-[20px] shadow-[0_40px_100px_rgba(0,8,119,0.18),0_0_0_1px_rgba(0,8,119,0.06)] overflow-hidden">
            {/* Window chrome */}
            <div className="bg-[var(--color-brand-primary)] px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 h-[26px] bg-white/10 rounded-md flex items-center justify-center text-[11px] text-white/60 font-semibold tracking-wide">
                app.accountly.jo
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>

            {/* Screenshot image */}
            <div className="relative overflow-hidden" style={{ maxHeight: '420px' }}>
              <img
                src={screenshotImg}
                alt={t('لوحة تحكم أكاونتلي', 'Accountly Dashboard')}
                className="w-full object-cover object-top"
                style={{ objectPosition: 'top center' }}
                data-testid="img-dashboard-screenshot"
              />
              {/* Subtle fade at bottom so it blends gracefully */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating badge — top */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[18px] -right-[18px] bg-white rounded-xl px-3 py-2.5 shadow-[0_10px_32px_rgba(0,8,119,0.16)] flex items-center gap-2.5 z-20 border border-border/50"
          >
            <div className="w-[30px] h-[30px] rounded-lg bg-green-100 flex items-center justify-center text-green-600">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[12px] font-bold text-foreground leading-tight">{t('فاتورة مؤكدة', 'Invoice Confirmed')}</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)] mt-0.5">JD 2,450.00</div>
            </div>
          </motion.div>

          {/* Floating badge — bottom-left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[28px] -left-[28px] bg-white rounded-xl px-3 py-2.5 shadow-[0_10px_32px_rgba(0,8,119,0.16)] flex items-center gap-2.5 z-20 border border-border/50"
          >
            <div className="w-[30px] h-[30px] rounded-lg bg-blue-100 flex items-center justify-center text-[var(--color-brand-primary)]">
              <BarChart2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[12px] font-bold text-foreground leading-tight">{t('تقرير شهري جاهز', 'Monthly Report Ready')}</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)] mt-0.5">{t('ديسمبر 2024', 'December 2024')}</div>
            </div>
          </motion.div>

          {/* Floating badge — mid-right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-[40%] -right-[22px] bg-white rounded-xl px-3 py-2.5 shadow-[0_10px_32px_rgba(0,8,119,0.14)] flex items-center gap-2.5 z-20 border border-border/50"
          >
            <div className="w-[30px] h-[30px] rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[12px] font-bold text-foreground leading-tight">{t('المبيعات ↑ 12%', 'Sales ↑ 12%')}</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)] mt-0.5">{t('هذا الشهر', 'This month')}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
