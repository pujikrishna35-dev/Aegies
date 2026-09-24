'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Building2, MapPin, DollarSign, Award, ArrowUpRight } from 'lucide-react';

const UNIVERSITIES_DATA = [
  {
    id: 'mit-usa',
    name: 'Massachusetts Institute of Technology (MIT)',
    country: 'USA',
    flag: '🇺🇸',
    city: 'Cambridge, MA',
    ranking: 'QS #1 Globally',
    tuition: '$57,000 / year',
    ielts: '7.5',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800&auto=format&fit=crop',
    popular: 'AI, Computer Science, Engineering, MBA'
  },
  {
    id: 'oxford-uk',
    name: 'University of Oxford',
    country: 'UK',
    flag: '🇬🇧',
    city: 'Oxford, England',
    ranking: 'QS #3 Globally',
    tuition: '£28,000 / year',
    ielts: '7.5',
    image: 'https://images.unsplash.com/photo-1548625361-195fe578cb26?q=80&w=800&auto=format&fit=crop',
    popular: 'Economics, Public Policy, Advanced Computing'
  },
  {
    id: 'toronto-canada',
    name: 'University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    city: 'Toronto, Ontario',
    ranking: 'QS #21 Globally',
    tuition: 'CAD $38,000 / year',
    ielts: '7.0',
    image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fa1?q=80&w=800&auto=format&fit=crop',
    popular: 'Data Analytics, Rotman MBA, Software Systems'
  },
  {
    id: 'melbourne-aus',
    name: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    city: 'Melbourne, Victoria',
    ranking: 'QS #13 Globally',
    tuition: 'AUD $36,000 / year',
    ielts: '6.5',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    popular: 'Information Technology, Management, Health Sciences'
  },
  {
    id: 'tum-germany',
    name: 'Technical University of Munich (TUM)',
    country: 'Germany',
    flag: '🇩🇪',
    city: 'Munich, Bavaria',
    ranking: 'QS #28 Globally',
    tuition: '€0 - €4,000 (Nominal)',
    ielts: '6.5',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    popular: 'Robotics, Informatics, Automotive Engineering'
  },
  {
    id: 'tcd-ireland',
    name: 'Trinity College Dublin',
    country: 'Ireland',
    flag: '🇮🇪',
    city: 'Dublin',
    ranking: 'QS #81 Globally',
    tuition: '€16,000 / year',
    ielts: '6.5',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=800&auto=format&fit=crop',
    popular: 'Data Science, Finance, Silicon Docks Tech'
  },
  {
    id: 'birmingham-uk',
    name: 'University of Birmingham',
    country: 'UK',
    flag: '🇬🇧',
    city: 'Birmingham, England',
    ranking: 'QS Top 100',
    tuition: '£21,000 / year',
    ielts: '6.5',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop',
    popular: 'Computer Science, Business Analytics, Law'
  },
  {
    id: 'asu-usa',
    name: 'Arizona State University',
    country: 'USA',
    flag: '🇺🇸',
    city: 'Tempe, AZ',
    ranking: '#1 for Innovation',
    tuition: '$31,000 / year',
    ielts: '6.5',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    popular: 'Software Engineering, Global Management, Supply Chain'
  }
];

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const filtered = UNIVERSITIES_DATA.filter((uni) => {
    const matchesSearch =
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.popular.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || uni.country.toLowerCase() === selectedCountry.toLowerCase();
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            GLOBAL RECRUITMENT PARTNERS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Top International Universities
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Search our network of over 100+ world-ranked institutions across USA, UK, Canada, Australia, Germany, and Europe.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl p-4 shadow-luxury border border-neutral-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search university or field of study..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['all', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland'].map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCountry === country
                    ? 'bg-navy-950 text-gold-300 shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {country === 'all' ? 'All Countries' : country}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filtered.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-card-elevated hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/70 backdrop-blur-md text-white text-xs font-semibold">
                      <span>{uni.flag}</span>
                      <span>{uni.country}</span>
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full bg-gold-400 text-navy-950 text-[10px] font-bold uppercase">
                      {uni.ranking}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-display text-lg font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                    {uni.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span>{uni.city}</span>
                  </div>

                  <div className="text-xs text-neutral-600 pt-2 border-t border-neutral-100 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Est. Tuition:</span>
                      <span className="font-semibold text-navy-900">{uni.tuition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">IELTS Score:</span>
                      <span className="font-semibold text-navy-900">{uni.ielts} Min</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-500 pt-1">
                    <strong>Popular:</strong> {uni.popular}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/919246220044?text=Hi%20Aegis%20Overseas,%20I%20want%20to%20apply%20to%20${encodeURIComponent(uni.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold bg-ivory-100 hover:bg-gold-500 hover:text-navy-950 text-navy-900 border border-neutral-200 transition-colors"
                >
                  <span>Apply via Aegis Overseas</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
