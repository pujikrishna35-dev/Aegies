import React from 'react';
import { Link } from 'react-router-dom';

export const UniversityCard: React.FC<{ name: string; country: string; city: string; rank: number; tuition: string }> = (props) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">Rank #{props.rank}</span>
    <h3 className="font-bold text-lg text-slate-900">{props.name}</h3>
    <p className="text-xs text-slate-500 mt-0.5">{props.city}, {props.country}</p>
    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-600">
      <span>{props.tuition}</span>
      <Link to="/universities" className="text-[#8A1538] font-bold hover:underline">View Programs →</Link>
    </div>
  </div>
);
