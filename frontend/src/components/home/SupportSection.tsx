import React from 'react';
import { 
  Compass, UserCheck, BookOpen, School, FileSignature, 
  Award, MailCheck, ShieldCheck, Home as HomeIcon, Banknote, 
  Plane, Compass as CompassIcon, GraduationCap 
} from 'lucide-react';

export const SupportSection: React.FC = () => {
  const steps = [
    { title: 'Career Planning', icon: Compass },
    { title: 'Profile Evaluation', icon: UserCheck },
    { title: 'Course Selection', icon: BookOpen },
    { title: 'University Selection', icon: School },
    { title: 'Application', icon: FileSignature },
    { title: 'Scholarship / Loan', icon: Award },
    { title: 'Offer Letter', icon: MailCheck },
    { title: 'Visa', icon: ShieldCheck },
    { title: 'Accommodation', icon: HomeIcon },
    { title: 'Forex', icon: Banknote },
    { title: 'Flight', icon: Plane },
    { title: 'Pre-Departure', icon: CompassIcon },
    { title: 'International Education', icon: GraduationCap }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#071228] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              360° SUPPORT
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              FROM YOUR FIRST QUESTION <br className="hidden sm:block" />
              TO YOUR FIRST DAY ABROAD.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
              A complete support system for your global journey.
            </p>
          </div>

          {/* Right Script & Airplane */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="font-script text-2xl text-[#E2C474] font-bold">
              Every Step With You
            </span>
            <Plane className="w-5 h-5 text-[#C5A059] rotate-45" />
          </div>
        </div>

        {/* 13 Horizontal Step Nodes along Dotted Line */}
        <div className="relative pt-6 pb-2 overflow-x-auto no-scrollbar">
          {/* Connecting Dotted Line */}
          <div className="absolute top-[38px] left-6 right-6 h-[1.5px] border-t-2 border-dashed border-[#C5A059]/40 z-0 hidden lg:block" />

          <div className="flex items-start justify-between min-w-[950px] relative z-10 gap-2">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center flex-1 group">
                  {/* Circle Node */}
                  <div className="w-10 h-10 rounded-full bg-[#0E213D] border-2 border-[#C5A059] text-[#E2C474] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-[#071228] transition-all duration-200">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title */}
                  <span className="text-[10px] font-bold text-slate-200 mt-2.5 leading-tight max-w-[70px] group-hover:text-amber-300">
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
