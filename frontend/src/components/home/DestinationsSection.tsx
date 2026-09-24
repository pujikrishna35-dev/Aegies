import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const DestinationsSection: React.FC = () => {
  const destinations = [
    {
      country: 'United Kingdom',
      flag: '/flags/uk.svg',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop',
      desc: 'Top-ranked universities, rich culture, global careers.',
      slug: 'uk'
    },
    {
      country: 'United States',
      flag: '/flags/usa.svg',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=400&auto=format&fit=crop',
      desc: 'Innovation, diversity and endless possibilities.',
      slug: 'usa'
    },
    {
      country: 'Canada',
      flag: '/flags/canada.svg',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=400&auto=format&fit=crop',
      desc: 'Welcoming country with a bright future.',
      slug: 'canada'
    },
    {
      country: 'Australia',
      flag: '/flags/australia.svg',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=400&auto=format&fit=crop',
      desc: 'World-class education and lifestyle.',
      slug: 'australia'
    },
    {
      country: 'Germany',
      flag: '/flags/germany.svg',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=400&auto=format&fit=crop',
      desc: 'Quality education with affordable tuition.',
      slug: 'germany'
    },
    {
      country: 'Ireland',
      flag: '/flags/ireland.svg',
      image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=400&auto=format&fit=crop',
      desc: 'A global hub for education and career growth.',
      slug: 'ireland'
    },
    {
      country: 'New Zealand',
      flag: '/flags/new-zealand.svg',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400&auto=format&fit=crop',
      desc: 'Safe, friendly and future-focused.',
      slug: 'new-zealand'
    },
    {
      country: 'Europe',
      flag: '/flags/europe.svg',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400&auto=format&fit=crop',
      desc: 'Explore multiple countries, one incredible experience.',
      slug: 'europe'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
              DESTINATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
              EXPLORE YOUR DREAM DESTINATION
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
              World-class education. Global opportunities. A brighter you.
            </p>
          </div>
          <Link
            to="/destinations"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C5A059] hover:text-[#071228] transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              to={`/destinations/${dest.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all duration-300 flex flex-col"
            >
              {/* Image thumbnail with flag circle badge */}
              <div className="h-28 sm:h-32 w-full relative overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Circular Flag overlapping bottom-left */}
                <div className="absolute -bottom-2.5 left-2.5 w-6 h-6 rounded-full border-2 border-white overflow-hidden shadow-sm bg-white">
                  <img src={dest.flag} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-4 p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#071228] group-hover:text-[#C5A059] transition-colors leading-tight">
                    {dest.country}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {dest.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1 text-[10px] font-bold text-[#C5A059] group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
