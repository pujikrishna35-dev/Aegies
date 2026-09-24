import React from 'react';

export const SectionHeading: React.FC<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}> = ({ eyebrow, title, subtitle, center = false }) => (
  <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">{eyebrow}</span>}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-950 leading-tight">{title}</h2>
    {subtitle && <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">{subtitle}</p>}
  </div>
);
