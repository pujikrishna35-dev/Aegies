import React from 'react';

export const DestinationHero: React.FC<{ title: string; subtitle: string; flag: string; bgImage: string }> = ({ title, subtitle, flag, bgImage }) => (
  <div className="relative h-80 flex items-center justify-center bg-[#071228] text-white overflow-hidden">
    <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-transparent to-transparent" />
    <div className="relative z-10 text-center max-w-2xl px-4">
      <span className="text-4xl block mb-2">{flag}</span>
      <h1 className="text-4xl sm:text-5xl font-display font-extrabold">{title}</h1>
      <p className="mt-3 text-slate-300 text-sm sm:text-base">{subtitle}</p>
    </div>
  </div>
);
