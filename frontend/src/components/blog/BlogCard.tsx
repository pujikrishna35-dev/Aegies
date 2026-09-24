import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard: React.FC<{ title: string; category: string; date: string; img: string }> = ({ title, category, date, img }) => (
  <Link to="/blog" className="block bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
    <img src={img} alt={title} className="w-full h-44 object-cover" />
    <div className="p-5">
      <span className="text-xs font-bold text-amber-600 uppercase">{category}</span>
      <h3 className="font-bold text-base text-slate-900 mt-1 leading-snug">{title}</h3>
      <p className="text-xs text-slate-400 mt-3">{date}</p>
    </div>
  </Link>
);
