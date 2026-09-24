import React from 'react';

export const ScholarshipCard: React.FC<{ title: string; amount: string; country: string }> = ({ title, amount, country }) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
    <span className="text-xs font-bold text-amber-700 uppercase">{country}</span>
    <h3 className="font-bold text-lg text-slate-900 mt-1">{title}</h3>
    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
      <span className="font-extrabold text-[#8A1538]">{amount}</span>
      <button className="px-3 py-1 bg-amber-400 text-slate-950 font-bold rounded-lg hover:bg-amber-300">Apply</button>
    </div>
  </div>
);
