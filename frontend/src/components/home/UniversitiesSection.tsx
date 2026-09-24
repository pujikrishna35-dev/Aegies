import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const UniversitiesSection: React.FC = () => {
  const universities = [
    { name: 'University of Toronto', country: 'Canada', color: 'text-[#002A5C]' },
    { name: 'University of Melbourne', country: 'Australia', color: 'text-[#094183]' },
    { name: 'UNSW Sydney', country: 'Australia', color: 'text-[#F5B800]' },
    { name: 'University of Birmingham', country: 'UK', color: 'text-[#A00000]' },
    { name: 'University of Auckland', country: 'New Zealand', color: 'text-[#00467F]' },
    { name: 'Trinity College Dublin', country: 'Ireland', color: 'text-[#0F2D52]' },
    { name: 'UMass Amherst', country: 'USA', color: 'text-[#881C1C]' }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              PARTNER UNIVERSITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228] tracking-tight">
              YOUR FUTURE STARTS AT THE RIGHT UNIVERSITY
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Explore leading global universities and find the right fit for your goals.
            </p>
          </div>
          <Link
            to="/universities"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] hover:text-[#071228] transition-colors"
          >
            <span>View All Universities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Carousel Row with Arrows */}
        <div className="relative flex items-center justify-between gap-4">
          <button
            className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 shadow-2xs shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex-1 overflow-x-auto no-scrollbar py-2">
            <div className="flex items-center justify-between gap-6 min-w-[700px]">
              {universities.map((u, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#FDFBF7] border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#C5A059] transition-all duration-200 w-36 h-24 text-center shrink-0"
                >
                  <span className={`font-display font-black text-sm ${u.color} tracking-tight leading-tight`}>
                    {u.name}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 font-medium">
                    {u.country}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 shadow-2xs shrink-0"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
