import React from 'react';
import { Link } from 'react-router-dom';

const DESTINATION_TAGS = [
  { name: 'UK', flag: '🇬🇧', slug: 'uk' },
  { name: 'USA', flag: '🇺🇸', slug: 'usa' },
  { name: 'CANADA', flag: '🇨🇦', slug: 'canada' },
  { name: 'AUSTRALIA', flag: '🇦🇺', slug: 'australia' },
  { name: 'GERMANY', flag: '🇩🇪', slug: 'germany' },
  { name: 'IRELAND', flag: '🇮🇪', slug: 'ireland' },
  { name: 'NEW ZEALAND', flag: '🇳🇿', slug: 'new-zealand' },
  { name: 'EUROPE', flag: '🇪🇺', slug: 'europe' },
];

export const HeroDestinations: React.FC = () => {
  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 hidden md:block">
          Featured Destinations:
        </span>
        <div className="flex items-center gap-2 sm:gap-3 w-full justify-between">
          {DESTINATION_TAGS.map((d) => (
            <Link
              key={d.slug}
              to={`/destinations/${d.slug}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-50 hover:bg-amber-50 hover:border-amber-300 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-800 transition duration-200 shrink-0"
            >
              <span>{d.flag}</span>
              <span>{d.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDestinations;
