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
    <section className="py-14 sm:py-16 bg-[#FDFBF7] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-xs font-extrabold text-[#C5A059] uppercase tracking-[0.25em] block mb-2">
            WHY AEGIS
          </span>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-display font-black text-[#071228] tracking-tight leading-[1.15]">
              MORE THAN OVERSEAS EDUCATION.<br />
              WE BUILD GLOBAL FUTURES.
            </h2>
            <div className="hidden md:block w-[1.5px] h-11 bg-[#C5A059] self-center shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-snug">
              Comprehensive support<br className="hidden sm:inline" /> at every step.
            </p>
          </div>
        </div>

        {/* 9 Feature Tiles in a Single Row on Desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5 sm:gap-3">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.link}
                className="group flex flex-col items-center justify-center text-center p-3 sm:p-3.5 rounded-2xl border border-neutral-200/80 bg-white hover:border-[#C5A059] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 min-h-[114px] sm:min-h-[122px]"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-amber-300/80 bg-white flex items-center justify-center text-[#C5A059] group-hover:scale-105 group-hover:bg-[#C5A059] group-hover:text-white transition-all shadow-2xs mb-2.5 shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#071228] leading-tight">
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
