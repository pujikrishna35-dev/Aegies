import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Search, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { matcherService, UniversityMatchResult } from '../../services/matcherService';

export const Universities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve default list
    matcherService.search({
      studyLevel: '',
      course: '',
      country: '',
      englishTest: 'NONE',
      budget: 'above50',
    }).then((res) => {
      setPrograms(res.results);
    });
  }, []);

  const filtered = programs.filter((p) => {
    const matchesCountry =
      selectedCountry === 'ALL' ||
      p.university.country.toLowerCase().includes(selectedCountry.toLowerCase());
    const matchesSearch =
      p.university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.program.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.university.city.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] min-h-screen">
      <div className="flex items-center justify-between gap-4 mb-6">
        <Link to="/" className="text-xs font-bold text-amber-600 uppercase tracking-widest hover:underline">
          ← Back to Home
        </Link>

        <Link
          to="/university-finder"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch University Matcher</span>
        </Link>
      </div>

      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
          Partner Universities & Institutions
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          Explore world-class academic institutions represented by Aegis Overseas across the UK, USA, Canada, Australia, Germany, Ireland, and New Zealand.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mt-8 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search university, course, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#C5A059]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {['ALL', 'UK', 'USA', 'Canada', 'Australia', 'Germany', 'Ireland'].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCountry(c)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCountry === c
                  ? 'bg-[#071228] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c === 'ALL' ? 'All Countries' : c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((item) => (
          <div
            key={item.program.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-300 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 p-1 overflow-hidden shrink-0 flex items-center justify-center">
                  {item.university.logo ? (
                    <img src={item.university.logo} alt={item.university.name} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Building2 className="w-6 h-6 text-slate-400" />
                  )}
                </div>

                {item.university.ranking && (
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                    Rank #{item.university.ranking}
                  </span>
                )}
              </div>

              <h4 className="text-base font-extrabold text-[#071228] mt-4 line-clamp-1">
                {item.university.name}
              </h4>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{item.university.city}, {item.university.country}</span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Featured Program</span>
                <span className="font-semibold text-slate-800 line-clamp-1">{item.program.courseName}</span>
                <span className="text-slate-500 text-[11px] block mt-0.5">
                  Tuition: {item.program.tuitionInrLakhs.max === 0 ? 'Tuition-Free' : `₹${item.program.tuitionInrLakhs.min}–${item.program.tuitionInrLakhs.max} Lakhs/yr`}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to={`/universities/${item.university.slug}`}
                className="text-xs font-bold text-[#071228] hover:text-amber-600 inline-flex items-center gap-1 uppercase tracking-wider"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
              </Link>

              <Link
                to="/university-finder"
                className="text-[11px] font-bold text-amber-700 hover:underline"
              >
                Check Match %
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;
