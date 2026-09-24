import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialCard: React.FC<{ name: string; text: string; uni: string }> = ({ name, text, uni }) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex gap-1 text-amber-400 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-xs text-slate-600 italic">"{text}"</p>
    </div>
    <div className="mt-4 pt-3 border-t border-slate-100">
      <h4 className="font-bold text-sm text-slate-900">{name}</h4>
      <p className="text-[11px] text-slate-400">{uni}</p>
    </div>
  </div>
);
