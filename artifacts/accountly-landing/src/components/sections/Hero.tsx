import { useLanguage } from '../LanguageProvider';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, BarChart3, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

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

      <div className="max-w-[1200px] mx-auto px-5 py-[80px] grid md:grid-cols-2 gap-16 items-center relative z-10 w-full">
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
            <a href="#contact" className="inline-flex items-center gap-2.5 bg-[var(--color-brand-primary)] text-white px-[26px] py-[13px] rounded-xl text-[15px] font-bold transition-all hover:bg-[#03034A] hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(0,8,119,0.22)]">
              {t('احجز عرض تجريبي', 'Book a Demo')}
              <ArrowRight className={`w-[18px] h-[18px] ${isRtl ? 'rotate-180' : ''}`} />
            </a>
            <a href="https://wa.me/962000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-[var(--color-brand-wa)] text-white px-[26px] py-[13px] rounded-xl text-[15px] font-bold transition-all hover:bg-[#1da851] hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(37,211,102,0.3)]">
              <MessageCircle className="w-[18px] h-[18px]" />
              {t('تواصل معنا', 'Contact Us')}
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-11 pt-7 border-t border-border justify-center md:justify-start w-full">
            <div className="flex flex-col">
              <span className="text-[30px] font-black text-[var(--color-brand-primary)] leading-none">+<em className="text-[var(--color-brand-accent)] not-italic">200</em></span>
              <span className="text-[13px] text-[var(--color-muted-foreground)] font-semibold mt-1">{t('شركة أردنية', 'Jordanian Companies')}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[30px] font-black text-[var(--color-brand-primary)] leading-none"><em className="text-[var(--color-brand-accent)] not-italic">8</em></span>
              <span className="text-[13px] text-[var(--color-muted-foreground)] font-semibold mt-1">{t('أنظمة متكاملة', 'Integrated Modules')}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[30px] font-black text-[var(--color-brand-primary)] leading-none">+<em className="text-[var(--color-brand-accent)] not-italic">7</em></span>
              <span className="text-[13px] text-[var(--color-muted-foreground)] font-semibold mt-1">{t('سنوات خبرة', 'Years Experience')}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Mock Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
          className="relative"
        >
          <div className="bg-white rounded-[20px] shadow-[0_32px_80px_rgba(0,8,119,0.14),0_0_0_1px_rgba(0,8,119,0.04)] overflow-hidden">
            {/* Window header */}
            <div className="bg-[var(--color-brand-primary)] px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 h-[26px] bg-white/10 rounded-md flex items-center justify-center text-[11px] text-white/60 font-semibold">
                app.accountly.jo
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-4 bg-[#f7f9ff]">
              {/* KPIs */}
              <div className="grid grid-cols-3 gap-2.5 mb-3.5">
                <div className="bg-white rounded-[11px] p-3 border border-border">
                  <div className="text-[9px] text-[var(--color-muted-foreground)] font-bold mb-1.5 flex items-center justify-between">
                    {t('المبيعات', 'Sales')}
                    <DollarSign className="w-3 h-3 text-[var(--color-brand-accent)]" />
                  </div>
                  <div className="text-[16px] font-black text-[var(--color-brand-accent)]">JD 24,500</div>
                  <div className="text-[9px] text-green-500 font-bold mt-1">+12% {t('هذا الشهر', 'this month')}</div>
                </div>
                <div className="bg-white rounded-[11px] p-3 border border-border">
                  <div className="text-[9px] text-[var(--color-muted-foreground)] font-bold mb-1.5 flex items-center justify-between">
                    {t('المشتريات', 'Purchases')}
                    <Activity className="w-3 h-3 text-[var(--color-brand-primary)]" />
                  </div>
                  <div className="text-[16px] font-black text-[var(--color-brand-primary)]">JD 12,340</div>
                  <div className="text-[9px] text-red-500 font-bold mt-1">-2% {t('هذا الشهر', 'this month')}</div>
                </div>
                <div className="bg-white rounded-[11px] p-3 border border-border">
                  <div className="text-[9px] text-[var(--color-muted-foreground)] font-bold mb-1.5 flex items-center justify-between">
                    {t('العملاء', 'Customers')}
                    <Users className="w-3 h-3 text-[#00b8be]" />
                  </div>
                  <div className="text-[16px] font-black text-[#00b8be]">1,284</div>
                  <div className="text-[9px] text-green-500 font-bold mt-1">+8 {t('جدد', 'new')}</div>
                </div>
              </div>

              {/* Chart & Mini Cards */}
              <div className="bg-white rounded-[11px] p-3.5 border border-border mb-3">
                <div className="text-[10px] font-bold text-[var(--color-muted-foreground)] mb-2.5 flex justify-between items-center">
                  {t('إيرادات آخر 6 أشهر', 'Revenue Last 6 Months')}
                  <BarChart3 className="w-3 h-3 text-[var(--color-brand-primary)]" />
                </div>
                <div className="flex items-end gap-2 h-[72px]">
                  {[40, 60, 45, 80, 55, 95].map((height, i) => (
                    <div key={i} className="flex-1 h-full flex flex-col justify-end gap-[3px]">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className={`rounded-t-sm w-full ${height > 75 ? 'bg-gradient-to-b from-[var(--color-brand-cyan)] to-[var(--color-brand-accent)]' : 'bg-gradient-to-b from-[var(--color-brand-accent)] to-[var(--color-brand-primary)]'}`}
                      />
                      <div className="text-[8px] text-[var(--color-muted-foreground)] text-center">{['M1', 'M2', 'M3', 'M4', 'M5', 'M6'][i]}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white rounded-[11px] p-3 border border-border">
                  <div className="text-[9px] font-bold text-[var(--color-muted-foreground)] mb-2">{t('أحدث الفواتير', 'Recent Invoices')}</div>
                  <div className="flex justify-between py-1 border-b border-border/50 text-[9px]">
                    <span className="font-semibold">INV-2024-001</span>
                    <span className="font-bold text-[var(--color-brand-primary)]">JD 450</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50 text-[9px]">
                    <span className="font-semibold">INV-2024-002</span>
                    <span className="font-bold text-[var(--color-brand-primary)]">JD 1,200</span>
                  </div>
                  <div className="flex justify-between py-1 text-[9px]">
                    <span className="font-semibold">INV-2024-003</span>
                    <span className="font-bold text-[var(--color-brand-primary)]">JD 320</span>
                  </div>
                </div>
                <div className="bg-white rounded-[11px] p-3 border border-border">
                  <div className="text-[9px] font-bold text-[var(--color-muted-foreground)] mb-2">{t('نواقص المستودع', 'Low Stock Items')}</div>
                  <div className="flex justify-between py-1 border-b border-border/50 text-[9px]">
                    <span className="font-semibold">Item A-12</span>
                    <span className="font-bold text-red-500">5 pcs</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50 text-[9px]">
                    <span className="font-semibold">Item B-45</span>
                    <span className="font-bold text-red-500">2 pcs</span>
                  </div>
                  <div className="flex justify-between py-1 text-[9px]">
                    <span className="font-semibold">Item C-99</span>
                    <span className="font-bold text-red-500">0 pcs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute -top-[18px] -right-[18px] bg-white rounded-xl p-2.5 shadow-[0_10px_32px_rgba(0,8,119,0.14)] items-center gap-2.5 z-20"
          >
            <div className="w-[30px] h-[30px] rounded-lg bg-green-100 flex items-center justify-center text-[15px] text-green-600">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[12px] font-bold text-foreground leading-tight">{t('تمت التسوية', 'Reconciled')}</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)] mt-0.5">{t('قبل دقيقتين', '2 mins ago')}</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="hidden md:flex absolute bottom-[28px] -left-[28px] bg-white rounded-xl p-2.5 shadow-[0_10px_32px_rgba(0,8,119,0.14)] items-center gap-2.5 z-20"
          >
            <div className="w-[30px] h-[30px] rounded-lg bg-blue-100 flex items-center justify-center text-[15px] text-[var(--color-brand-primary)]">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[12px] font-bold text-foreground leading-tight">{t('مستخدم جديد', 'New User')}</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)] mt-0.5">{t('صلاحية المبيعات', 'Sales Access')}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
