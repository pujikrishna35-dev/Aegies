import React from 'react';
import { Users, Globe2, School, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Users, value: "3,500+", label: "Successful Students", subtext: "Admitted worldwide" },
  { icon: Globe2, value: "11+", label: "Countries", subtext: "Global study destinations" },
  { icon: School, value: "100+", label: "Partner Universities", subtext: "Direct institutional ties" },
  { icon: ShieldCheck, value: "360°", label: "End-to-End Support", subtext: "Counselling to campus" }
];

export const TrustStats: React.FC = () => {
  return (
    <section className="py-16 bg-[#FDFBF7] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#8A1538] mb-3 shadow-xs group-hover:scale-110 transition duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
