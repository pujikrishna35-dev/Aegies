import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, School, FileText, BadgeDollarSign, 
  Award, ShieldCheck, Home as HomeIcon, Banknote, PlaneTakeoff 
} from 'lucide-react';

export const WhyAegis: React.FC = () => {
  const services = [
    { title: 'Career Counselling', icon: Compass, link: '/services/counselling' },
    { title: 'University Selection', icon: School, link: '/services/university-selection' },
    { title: 'Application Assistance', icon: FileText, link: '/services/application-assistance' },
    { title: 'Education Loans', icon: BadgeDollarSign, link: '/services/education-loans' },
    { title: 'Scholarships', icon: Award, link: '/services/scholarships' },
    { title: 'Visa Assistance', icon: ShieldCheck, link: '/services/visa-assistance' },
    { title: 'Accommodation', icon: HomeIcon, link: '/services/accommodation' },
    { title: 'Forex', icon: Banknote, link: '/services/forex' },
    { title: 'Pre-Departure Support', icon: PlaneTakeoff, link: '/services/pre-departure' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              WHY AEGIS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
              MORE THAN OVERSEAS EDUCATION. <br />
              WE BUILD GLOBAL FUTURES.
            </h2>
          </div>
          <div className="mt-2 md:mt-0 text-xs sm:text-sm text-slate-500 font-normal">
            Comprehensive support at every step.
          </div>
        </div>

        {/* 9 Square Feature Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3 sm:gap-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.link}
                className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-xl border border-slate-200/90 bg-[#FDFBF7] hover:bg-white hover:border-[#C5A059] hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all shadow-2xs mb-2.5">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 group-hover:text-[#071228] leading-snug">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAegis;
