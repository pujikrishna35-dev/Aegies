import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { GENUINE_REVIEWS } from '../../data/testimonials';

export const StudentSuccessSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 3;
  const totalPages = Math.ceil(GENUINE_REVIEWS.length / pageSize);
  const currentReviews = GENUINE_REVIEWS.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const benefits = [
    'Student-Centric Approach',
    'Global Network',
    'Expert Counselors',
    'End-to-End Support'
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: STUDENT SUCCESS STORIES (6 cols / 50%) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em]">
                  STUDENT SUCCESS STORIES
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Reviews
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228] tracking-tight">
                REAL STUDENTS. REAL JOURNEYS. REAL IMPACT.
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Genuine feedback from students guided to global universities.
              </p>

              {/* 3 Student Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
                {currentReviews.map((s) => (
                  <Link
                    key={s.id}
                    to={`/student-stories/${s.storySlug || s.id.replace('review-', '')}`}
                    className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#C5A059]/60 transition-all flex flex-col justify-between group cursor-pointer h-[350px]"
                  >
                    <div>
                      {/* Avatar image or initial badge */}
                      {s.avatarUrl ? (
                        <img
                          src={s.avatarUrl}
                          alt={s.reviewerName}
                          className="w-11 h-11 rounded-full object-cover border border-[#C5A059]/40 shadow-2xs mb-3 group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-full bg-[#071228] text-[#C5A059] flex items-center justify-center font-bold text-xs border border-[#C5A059]/40 shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                          {s.avatarText}
                        </div>
                      )}
                      <h4 className="font-bold text-xs text-[#071228] group-hover:text-amber-700 transition-colors leading-snug line-clamp-2 h-8 flex items-center">{s.reviewerName}</h4>
                      <p className="text-[10px] text-amber-700 font-medium">{s.location}</p>
                      <p className="text-[10px] text-slate-400 font-medium line-clamp-1 h-3.5">{s.tagline}</p>
                      
                      <div className="flex items-center gap-0.5 text-amber-500 mt-2">
                        {[...Array(s.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>

                      <p className="text-[11px] text-slate-600 mt-2 leading-relaxed italic line-clamp-4 min-h-[4.5rem]">
                        "{s.shortQuote}"
                      </p>
                    </div>

                    <div className="mt-auto pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[9px] text-slate-400 group-hover:text-amber-700 transition-colors font-medium">Google Verified</span>
                      <div className="w-5 h-5 rounded-full bg-[#FDF2D9] text-[#071228] flex items-center justify-center border border-[#C5A059]/40 text-[10px] font-bold group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                        ★
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination / Arrows */}
            <div className="flex items-center gap-2 mt-6">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => (p === 0 ? totalPages - 1 : p - 1))}
                aria-label="Previous page"
                className="w-7 h-7 rounded-full border border-slate-300 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 text-xs cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-1.5 px-2">
                {[...Array(totalPages)].map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                      currentPage === i ? 'bg-[#071228] w-4' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => (p === totalPages - 1 ? 0 : p + 1))}
                aria-label="Next page"
                className="w-7 h-7 rounded-full border border-slate-300 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 text-xs cursor-pointer transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: ABOUT AEGIS (6 cols / 50%) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Text & Bullets (7 cols) */}
              <div className="sm:col-span-7">
                <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                  ABOUT AEGIS
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight mb-3">
                  YOUR TRUSTED PARTNER FOR GLOBAL EDUCATION
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  At Aegis Overseas, we believe education has the power to transform lives. We are committed to guiding students towards global opportunities with personalized counselling, expert support and end-to-end services.
                </p>

                {/* 4 Bullet Points */}
                <div className="space-y-2 mt-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] text-xs font-bold uppercase tracking-wider shadow-xs hover:brightness-105 transition-all"
                  >
                    <span>KNOW MORE ABOUT AEGIS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Building Image (5 cols) */}
              <div className="sm:col-span-5 relative rounded-xl overflow-hidden shadow-sm h-60 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
                  alt="Aegis Overseas Headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white italic drop-shadow-md">
                    Empowering Global Citizens
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentSuccessSection;
