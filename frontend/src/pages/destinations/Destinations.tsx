import React from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '@/data/destinations';
import { ArrowRight, GraduationCap, Briefcase, Globe2 } from 'lucide-react';

export const Destinations: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Global Destinations</span>
        </div>

        {/* Header Banner */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
            Top Study Abroad Destinations
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228] tracking-tight">
            Explore Your Dream Country
          </h1>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Compare world-leading education hubs with verified information on tuition fees, post-study work rights, top universities, and high-demand courses.
          </p>
        </div>

        {/* Grid of Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.slug}
              to={`/destinations/${dest.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Country Image */}
              <div className="relative h-44 overflow-hidden bg-neutral-100">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <span>{dest.flag}</span>
                  <span className="text-[#071228] uppercase tracking-wider text-[10px]">{dest.country}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold font-display text-[#071228] group-hover:text-amber-700 transition-colors">
                    {dest.country}
                  </h2>
                  <p className="text-xs text-neutral-500 italic mt-0.5 mb-4">
                    "{dest.phrase}"
                  </p>

                  <div className="space-y-2 text-xs text-neutral-600 border-t border-neutral-100 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-neutral-400">
                        <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                        <span>Universities:</span>
                      </span>
                      <span className="font-bold text-[#071228]">{dest.universitiesCount}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-neutral-400">
                        <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                        <span>Post-Study Work:</span>
                      </span>
                      <span className="font-bold text-[#071228] text-right truncate max-w-[140px]">{dest.workRights}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-neutral-400">
                        <Globe2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>Tuition Range:</span>
                      </span>
                      <span className="font-bold text-[#071228] text-right truncate max-w-[140px]">{dest.tuition}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-amber-600 group-hover:text-amber-700">
                  <span>View Country Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
