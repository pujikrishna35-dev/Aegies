import React from 'react';
import { GraduationCap, ShieldCheck, Award, Landmark, Calendar, HeartHandshake } from 'lucide-react';

export const TrustStatsSection: React.FC = () => {
  const stats = [
    {
      icon: GraduationCap,
      value: '5,000+',
      label: 'Successful Students',
      sub: 'Top global university admits'
    },
    {
      icon: ShieldCheck,
      value: '99.2%',
      label: 'Visa Success Record',
      sub: 'Consistent approval track'
    },
    {
      icon: Award,
      value: '$14.5M+',
      label: 'Scholarships Won',
      sub: 'Merit & government grants'
    },
    {
      icon: Landmark,
      value: '850+',
      label: 'Partner Universities',
      sub: 'UK, US, Canada, EU & Aus'
    },
    {
      icon: Calendar,
      value: '15+ Yrs',
      label: 'Ethical Mentoring',
      sub: 'Trusted advisory since 2008'
    },
    {
      icon: HeartHandshake,
      value: '360°',
      label: 'End-to-End Support',
      sub: 'Loans, forex & housing'
    }
  ];

  return (
    <section className="relative z-20 bg-[#071228] text-white py-10 sm:py-14 border-y border-[#C5A059]/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 6 Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-left">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[#C5A059]/50 transition-all duration-300 group shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#E2C474] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg sm:text-xl font-extrabold text-white leading-tight">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-bold text-slate-200 truncate mt-0.5">
                    {s.label}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {s.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Representation & Accreditations Strip */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-300">Certified International Representation:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium text-slate-300">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="text-[#C5A059] font-bold">✓</span> British Council Certified
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="text-[#C5A059] font-bold">✓</span> IDP Education Partner
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="text-[#C5A059] font-bold">✓</span> ICEF Verified Agency
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="text-[#C5A059] font-bold">✓</span> ETS Official Associate
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="text-[#C5A059] font-bold">✓</span> NAFSA Member
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustStatsSection;
