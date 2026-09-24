import React from 'react';
import { Plane } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const milestones = [
    {
      step: '01',
      title: 'DISCOVER',
      desc: 'Understand your goals and evaluate your profile.'
    },
    {
      step: '02',
      title: 'CHOOSE',
      desc: 'Select country, course and university matched to you.'
    },
    {
      step: '03',
      title: 'APPLY',
      desc: 'Prepare and submit applications with precision.'
    },
    {
      step: '04',
      title: 'SECURE',
      desc: 'Receive your offer and funding guidance.'
    },
    {
      step: '05',
      title: 'VISA',
      desc: 'Complete your visa process with 99.4% success.'
    },
    {
      step: '06',
      title: 'FLY',
      desc: 'Start your international journey with pre-departure briefing.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              YOUR JOURNEY WITH AEGIS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
              A CLEARER PATH TO A BRIGHTER FUTURE
            </h2>
          </div>

          <div className="hidden sm:flex items-center text-[#071228]">
            <Plane className="w-8 h-8 text-[#071228] transform -rotate-12" />
          </div>
        </div>

        {/* 6 Connected Milestone Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Milestone Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#FDF2D9] text-[#071228] font-display font-black text-xs flex items-center justify-center border border-[#C5A059]/40">
                    {m.step}
                  </span>
                  <span className="font-extrabold text-xs tracking-wider text-[#071228] uppercase">
                    {m.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Phase 0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
