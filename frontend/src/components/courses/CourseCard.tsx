import React from 'react';
import { Link } from 'react-router-dom';

export const CourseCard: React.FC<{ title: string; category: string; duration: string }> = ({ title, category, duration }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
    <span className="text-xs font-bold text-amber-700 uppercase">{category}</span>
    <h3 className="font-bold text-lg text-slate-900 mt-1">{title}</h3>
    <p className="text-xs text-slate-500 mt-1">{duration}</p>
    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
      <span className="font-semibold text-emerald-700">Top Employment ROI</span>
      <Link to="/courses" className="text-[#8A1538] font-bold hover:underline">Details →</Link>
    </div>
  </div>
);
