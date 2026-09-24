import React from 'react';
import { Link } from 'react-router-dom';

export const TestCard: React.FC<{ name: string; desc: string; slug: string }> = ({ name, desc, slug }) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
    <div>
      <h3 className="font-extrabold text-2xl text-[#8A1538]">{name}</h3>
      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
    </div>
    <div className="mt-6 pt-3 border-t border-slate-100">
      <Link to={`/test-preparation/${slug}`} className="text-xs font-bold text-[#8A1538] hover:underline">Coaching Details →</Link>
    </div>
  </div>
);
