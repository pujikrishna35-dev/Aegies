import React from 'react';
import { Link } from 'react-router-dom';

export const ServiceCard: React.FC<{ title: string; desc: string; slug: string }> = ({ title, desc, slug }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
    <div>
      <h3 className="font-bold text-lg text-slate-900">{title}</h3>
      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
    </div>
    <div className="mt-6 pt-3 border-t border-slate-100">
      <Link to={`/services/${slug}`} className="text-xs font-bold text-[#8A1538] hover:underline">Learn More →</Link>
    </div>
  </div>
);
