import React from 'react';
import { Link } from 'react-router-dom';
import { DestinationData } from '@/data/destinations';

export const DestinationCard: React.FC<{ destination: DestinationData }> = ({ destination: d }) => (
  <Link to={`/destinations/${d.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300">
    <div className="h-48 overflow-hidden relative">
      <img src={d.image} alt={d.country} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold text-slate-800">
        {d.flag} {d.country}
      </span>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#8A1538] transition">{d.country}</h3>
      <p className="text-xs text-slate-500 italic mt-0.5">"{d.phrase}"</p>
      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between text-xs text-slate-600">
        <span>{d.universitiesCount} Unis</span>
        <span className="font-semibold text-emerald-700">{d.workRights}</span>
      </div>
    </div>
  </Link>
);
