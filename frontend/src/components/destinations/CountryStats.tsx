import React from 'react';

export const CountryStats: React.FC<{ stats: { label: string; value: string }[] }> = ({ stats }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    {stats.map((s, idx) => (
      <div key={idx} className="text-center">
        <div className="text-xl sm:text-2xl font-black text-[#8A1538]">{s.value}</div>
        <div className="text-xs text-slate-500 mt-1">{s.label}</div>
      </div>
    ))}
  </div>
);
