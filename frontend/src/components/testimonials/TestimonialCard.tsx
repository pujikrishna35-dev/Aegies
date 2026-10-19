import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export const TestimonialCard: React.FC<{ name: string; text: string; uni: string; slug?: string }> = ({ name, text, uni, slug }) => {
  const card = (
    <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#C5A059]/60 transition-all h-full group">
      <div>
        <div className="flex gap-1 text-amber-400 mb-3">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <p className="text-xs text-slate-600 italic">"{text}"</p>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-100">
        <h4 className="font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors">{name}</h4>
        <p className="text-[11px] text-slate-400">{uni}</p>
      </div>
    </div>
  );

  if (slug) {
    return <Link to={`/student-stories/${slug}`} className="block h-full cursor-pointer">{card}</Link>;
  }
  return card;
};

