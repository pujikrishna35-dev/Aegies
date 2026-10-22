import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GENUINE_REVIEWS } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  const handlePrevReview = () => {
    setCurrentReviewIdx((prev) => (prev === 0 ? GENUINE_REVIEWS.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setCurrentReviewIdx((prev) => (prev === GENUINE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = GENUINE_REVIEWS[currentReviewIdx];

  const faqs = [
    { q: 'Which country is best for my profile?', a: 'Our certified counselors assess your academic scores, budget, and career goals to identify your highest-probability destination.' },
    { q: 'How much does studying abroad cost?', a: 'Total costs range from ₹15L to ₹45L per year depending on the destination, program, and living expenses.' },
    { q: 'Can I get an education loan?', a: 'Yes! Aegis partners with major Indian banks and NBFCs to offer collateralized and non-collateral education loans with quick sanction.' },
    { q: 'Which universities accept my IELTS/PTE score?', a: 'Hundreds of prestigious universities in the UK, USA, Canada, and Australia accept scores starting from IELTS 6.0 or PTE 50.' },
    { q: 'Do you assist with post-study work visas?', a: 'Yes, we provide end-to-end guidance for post-study work permits (2-4 years depending on country).' },
    { q: 'Can Aegis help with accommodation?', a: 'Our pre-departure team secures safe student residences, homestays, and shared apartments before you fly.' }
  ];


  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: TESTIMONIALS */}
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-2xs h-full min-h-[380px]">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-[#92600E] uppercase tracking-[0.2em]">
                  TESTIMONIALS
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Review
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight mb-4">
                WHAT OUR STUDENTS SAY
              </h3>

              {/* Large Gold Quote Mark */}
              <div className="text-4xl font-serif text-[#C5A059] leading-none mb-1 select-none">
                “
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal line-clamp-5">
                "{activeReview.reviewText}"
              </p>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-500 mt-3 mb-4">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-[11px] text-slate-500 font-semibold ml-1.5">
                  5.0 on Google
                </span>
              </div>
            </div>

            {/* Student Avatar & Arrows */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <Link
                to={`/student-stories/${activeReview.storySlug || activeReview.id.replace('review-', '')}`}
                className="flex items-center gap-3 group cursor-pointer"
              >
                {activeReview.avatarUrl ? (
                  <img
                    src={activeReview.avatarUrl}
                    alt={activeReview.reviewerName}
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover border border-[#C5A059]/40 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#071228] text-[#C5A059] flex items-center justify-center font-bold text-xs border border-[#C5A059]/40 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    {activeReview.avatarText}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-xs text-[#071228] group-hover:text-amber-700 transition-colors">{activeReview.reviewerName}</h4>
                  <p className="text-[10px] text-slate-500">{activeReview.tagline}</p>
                </div>
              </Link>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-slate-500 mr-1">
                  {currentReviewIdx + 1}/{GENUINE_REVIEWS.length}
                </span>
                <button
                  type="button"
                  onClick={handlePrevReview}
                  aria-label="Previous review"
                  className="w-6 h-6 rounded-full border border-slate-300 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 text-xs cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={handleNextReview}
                  aria-label="Next review"
                  className="w-6 h-6 rounded-full border border-slate-300 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 text-xs cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: FREQUENTLY ASKED QUESTIONS */}
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-2xs h-full min-h-[380px]">
            <div>
              <span className="text-[11px] font-bold text-[#92600E] uppercase tracking-[0.2em] block mb-1">
                FAQ
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h3>

              {/* Accordion list */}
              <div className="space-y-2">
                {faqs.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 bg-white rounded-xl overflow-hidden transition-all text-left"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-3.5 py-2.5 flex items-center justify-between gap-2 text-left"
                      >
                        <span className="text-[11px] font-bold text-slate-800 leading-snug">
                          {item.q}
                        </span>
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3 text-[10px] text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200">
              <Link
                to="/faq"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#92600E] hover:text-[#071228] transition-colors"
              >
                <span>View All FAQs</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
