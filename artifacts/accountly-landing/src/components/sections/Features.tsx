import { useLanguage } from '../LanguageProvider';
import { motion } from 'framer-motion';
import { ShoppingCart, ShoppingBag, Package, FileText, Users, PieChart, Truck, Factory } from 'lucide-react';

export function Features() {
  const { t, isRtl } = useLanguage();

  const modules = [
    { 
      id: 1, 
      icon: ShoppingCart, 
      arName: 'المبيعات والعملاء', 
      enName: 'Sales & CRM',
      arDesc: 'إدارة دورة المبيعات كاملة، عروض الأسعار، الفواتير، ومتابعة مديونيات العملاء بدقة.',
      enDesc: 'Manage full sales cycle, quotations, invoices, and track customer receivables accurately.'
    },
    { 
      id: 2, 
      icon: ShoppingBag, 
      arName: 'المشتريات والموردين', 
      enName: 'Purchasing & Suppliers',
      arDesc: 'أوامر الشراء، استلام البضائع، إدارة حسابات الموردين والدفعات المستحقة.',
      enDesc: 'Purchase orders, goods receipt, managing supplier accounts and due payments.'
    },
    { 
      id: 3, 
      icon: Package, 
      arName: 'المستودعات والمخزون', 
      enName: 'Warehouses & Inventory',
      arDesc: 'مستودعات متعددة، تتبع الكميات لحظياً، جرد، وتنبيهات النواقص التلقائية.',
      enDesc: 'Multiple warehouses, real-time quantity tracking, stocktaking, and low stock alerts.'
    },
    { 
      id: 4, 
      icon: FileText, 
      arName: 'المحاسبة والقيود', 
      enName: 'Accounting & Ledgers',
      arDesc: 'شجرة حسابات مرنة، قيود يومية، مراكز تكلفة، ميزانية، وأرباح وخسائر.',
      enDesc: 'Flexible chart of accounts, journal entries, cost centers, balance sheet, and P&L.'
    },
    { 
      id: 5, 
      icon: Users, 
      arName: 'الموارد البشرية والرواتب', 
      enName: 'HR & Payroll',
      arDesc: 'إدارة الموظفين، الحضور والانصراف، البدلات والاقتطاعات، ومسيرات الرواتب.',
      enDesc: 'Employee management, attendance, allowances/deductions, and payroll processing.'
    },
    { 
      id: 6, 
      icon: PieChart, 
      arName: 'التقارير والتحليلات', 
      enName: 'Reports & Analytics',
      arDesc: '+50 تقرير مالي وإداري مفصل لاتخاذ قرارات مبنية على بيانات دقيقة.',
      enDesc: '50+ detailed financial and admin reports for data-driven decision making.'
    },
    { 
      id: 7, 
      icon: Truck, 
      arName: 'المندوبين والتوزيع', 
      enName: 'Reps & Distribution',
      arDesc: 'تتبع المبيعات الخارجية، مسارات المندوبين، العمولات، وتطبيق الموبايل للمندوب.',
      enDesc: 'Track field sales, rep routes, commissions, and mobile app for field agents.'
    },
    { 
      id: 8, 
      icon: Factory, 
      arName: 'التصنيع والإنتاج', 
      enName: 'Manufacturing',
      arDesc: 'معادلات التصنيع (BOM)، أوامر الإنتاج، حساب التكلفة المباشرة وغير المباشرة.',
      enDesc: 'Bill of Materials (BOM), production orders, direct and indirect costing.'
    }
  ];

  return (
    <section id="features" className="py-24 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="block text-[12px] font-bold text-[var(--color-brand-accent)] tracking-[2.5px] uppercase mb-2.5">
            {t('الأنظمة المتوفرة', 'AVAILABLE MODULES')}
          </span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] font-black text-foreground leading-[1.25] mb-3.5">
            {t('نظام واحد لجميع أقسامك', 'One System For All Departments')}
          </h2>
          <p className="text-[16px] text-[var(--color-muted-foreground)] leading-[1.8] max-w-[520px] mx-auto">
            {t('وحدات مترابطة تعمل معاً لتمنحك رؤية شاملة وتحكماً كاملاً في كل صغيرة وكبيرة في شركتك.', 'Integrated modules working together to give you comprehensive visibility and full control over every detail of your company.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {modules.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-border rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group hover:border-transparent hover:shadow-[0_20px_55px_rgba(0,8,119,0.11)] hover:-translate-y-1"
            >
              <div className={`absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-cyan)] scale-x-0 transition-transform duration-350 ${isRtl ? 'origin-right' : 'origin-left'} group-hover:scale-x-100`} />
              
              <div className="w-[50px] h-[50px] rounded-[13px] bg-gradient-to-br from-[rgba(0,8,119,0.07)] to-[rgba(1,162,255,0.09)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[var(--color-brand-primary)] group-hover:to-[var(--color-brand-accent)]">
                <mod.icon className="w-[22px] h-[22px] text-[var(--color-brand-primary)] transition-colors duration-300 group-hover:text-white" />
              </div>
              
              <h3 className="text-[15px] font-bold text-foreground mb-2">{t(mod.arName, mod.enName)}</h3>
              <p className="text-[13px] text-[var(--color-muted-foreground)] leading-[1.7]">{t(mod.arDesc, mod.enDesc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
