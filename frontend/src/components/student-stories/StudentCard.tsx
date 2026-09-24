import React from 'react';

export const StudentCard: React.FC<{ name: string; uni: string; quote: string; img: string }> = ({ name, uni, quote, img }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
    <img src={img} alt={name} className="w-full h-48 object-cover" />
    <div className="p-5">
      <p className="text-xs text-slate-600 italic leading-relaxed">"{quote}"</p>
      <div className="mt-4 pt-3 border-t border-slate-100">
        <h4 className="font-bold text-sm text-slate-900">{name}</h4>
        <p className="text-xs text-amber-700">{uni}</p>
      </div>
    </div>
  </div>
);
