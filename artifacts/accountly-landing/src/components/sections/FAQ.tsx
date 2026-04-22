import { useState } from 'react';
import { useLanguage } from '../LanguageProvider';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      arQ: 'هل يمكنني ربط النظام بفروع متعددة؟',
      enQ: 'Can I link the system with multiple branches?',
      arA: 'نعم بالتأكيد، كون النظام سحابي يمكنك ربط عدد غير محدود من الفروع والمستودعات ونقاط البيع وإدارتها جميعاً من شاشة واحدة مركزية ببيانات متزامنة لحظياً.',
      enA: 'Yes absolutely, since the system is cloud-based you can link an unlimited number of branches, warehouses, and POS and manage them all from one central screen with real-time data.'
    },
    {
      arQ: 'هل النظام معتمد من ضريبة الدخل والمبيعات الأردنية؟',
      enQ: 'Is the system approved by Jordanian Tax Department?',
      arA: 'نعم، النظام مصمم ليتوافق تماماً مع متطلبات دائرة ضريبة الدخل والمبيعات، ومجهز للربط مع نظام الفوترة الإلكترونية الوطني (جو-فواتير).',
      enA: 'Yes, the system is designed to fully comply with the Income and Sales Tax Department requirements, and is ready for integration with the national e-invoicing system (Jo-Fawateer).'
    },
    {
      arQ: 'هل يمكن الدخول على النظام من الويب فقط؟',
      enQ: 'Can I only access the system from the web?',
      arA: 'لا، الوصول لا يقتصر على المتصفح. بالإضافة إلى واجهة الويب الكاملة، نوفر لعملائنا تطبيقات موبايل متخصصة متاحة على iOS وAndroid — مثل تطبيق المندوب، تطبيق نقطة البيع، وتطبيق المستودعات — لتتمكن من إدارة عملك أينما كنت.',
      enA: 'No, access is not limited to the browser. In addition to the full web interface, we provide our clients with specialized mobile apps available on iOS and Android — such as the Sales Rep app, POS app, and Warehouse app — so you can manage your business from anywhere.'
    },
    {
      arQ: 'كيف يتم نقل بياناتنا من نظامنا القديم إلى أكاونتلي؟',
      enQ: 'How is our data migrated from our old system to Accountly?',
      arA: 'يوفر فريقنا التقني خدمة نقل البيانات (الأرصدة الافتتاحية، العملاء، الموردين، المواد) من أي نظام سابق (إكسل أو قواعد بيانات أخرى) مجاناً عند الاشتراك لضمان انتقال سلس.',
      enA: 'Our technical team provides free data migration service (opening balances, customers, suppliers, items) from any previous system (Excel or other DBs) upon subscription to ensure a smooth transition.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-5 bg-white">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-14">
          <span className="block text-[12px] font-bold text-[var(--color-brand-accent)] tracking-[2.5px] uppercase mb-2.5">
            {t('الأسئلة الشائعة', 'FAQS')}
          </span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] font-black text-foreground leading-[1.25] mb-3.5">
            {t('كل ما تحتاج معرفته', 'Everything You Need To Know')}
          </h2>
        </div>

        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-[14px] overflow-hidden transition-all duration-300 ${isOpen ? 'border-[rgba(1,162,255,0.35)] shadow-[0_4px_20px_rgba(1,162,255,0.09)]' : 'border-border'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-[19px_22px] gap-3.5 text-start cursor-pointer select-none bg-white"
                >
                  <span className="text-[15px] font-bold text-foreground">{t(faq.arQ, faq.enQ)}</span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[var(--color-brand-primary)] rotate-45 text-white' : 'bg-[var(--color-muted)] text-foreground'}`}>
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-[22px] pb-[18px] text-[14px] text-[var(--color-muted-foreground)] leading-[1.8]">
                        {t(faq.arA, faq.enA)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
