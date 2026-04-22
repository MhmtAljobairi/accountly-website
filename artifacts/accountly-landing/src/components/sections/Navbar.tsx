import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', ar: 'الرئيسية', en: 'Home' },
    { href: '#features', ar: 'المميزات', en: 'Features' },
    { href: '#why', ar: 'لماذا نحن؟', en: 'Why Us?' },
    { href: '#faq', ar: 'الأسئلة الشائعة', en: 'FAQ' },
    { href: '#contact', ar: 'تواصل معنا', en: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-[0_4px_30px_rgba(0,8,119,0.09)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2.5 no-underline">
          <div className="w-10 h-10 bg-[var(--color-brand-primary)] rounded-[10px] flex flex-col items-center justify-center gap-1.5">
            <span className="w-[22px] h-[2.5px] bg-[var(--color-brand-cyan)] rounded-[2px]" />
            <span
              className={`w-[14px] h-[2.5px] bg-[var(--color-brand-accent)] rounded-[2px] ${
                language === 'ar' ? 'self-end mr-1' : 'self-start ml-1'
              }`}
            />
          </div>
          <span className="text-[22px] font-bold text-[var(--color-brand-primary)]">
            account<b className="font-black text-[var(--color-brand-accent)]">ly</b>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[14px] font-semibold text-foreground relative py-1 transition-colors hover:text-[var(--color-brand-primary)] group"
              >
                {t(link.ar, link.en)}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-cyan)] transition-all duration-300 group-hover:w-full rounded-[1px]" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="hidden md:block bg-[var(--color-background)] border border-border rounded-lg px-4 py-1.5 text-[13px] font-bold text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-brand-primary)] hover:text-white"
          >
            {language === 'ar' ? 'EN' : 'AR'}
          </button>
          
          <a
            href="https://app.accountly.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-[7px] bg-[var(--color-brand-primary)] text-white rounded-[10px] px-4 py-2 text-[13px] font-bold transition-all hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,8,119,0.25)] hover:bg-[#0b1d8f] whitespace-nowrap"
          >
            <LogIn className="w-[16px] h-[16px]" />
            {t('تسجيل الدخول', 'Login')}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--color-brand-primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-semibold text-foreground hover:text-[var(--color-brand-primary)]"
                >
                  {t(link.ar, link.en)}
                </a>
              ))}
              <div className="h-[1px] bg-border my-2" />
              <button
                onClick={() => {
                  setLanguage(language === 'ar' ? 'en' : 'ar');
                  setMobileMenuOpen(false);
                }}
                className="self-start bg-[var(--color-background)] border border-border rounded-lg px-4 py-2 text-[13px] font-bold text-[var(--color-brand-primary)]"
              >
                {language === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
              </button>
              <a
                href="https://app.accountly.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-[7px] bg-[var(--color-brand-primary)] text-white rounded-[10px] px-4 py-3 text-[15px] font-bold"
              >
                <LogIn className="w-[18px] h-[18px]" />
                {t('تسجيل الدخول', 'Login')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
