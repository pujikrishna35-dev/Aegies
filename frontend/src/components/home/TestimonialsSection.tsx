import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Plus, Minus, ArrowRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: 'Which country is best for my profile?', a: 'Our certified counselors assess your academic scores, budget, and career goals to identify your highest-probability destination.' },
    { q: 'How much does studying abroad cost?', a: 'Total costs range from ₹15L to ₹45L per year depending on the destination, program, and living expenses.' },
    { q: 'Can I get an education loan?', a: 'Yes! Aegis partners with major Indian banks and NBFCs to offer collateralized and non-collateral education loans with quick sanction.' },
    { q: 'Which universities accept my IELTS/PTE score?', a: 'Hundreds of prestigious universities in the UK, USA, Canada, and Australia accept scores starting from IELTS 6.0 or PTE 50.' },
    { q: 'Do you assist with post-study work visas?', a: 'Yes, we provide end-to-end guidance for post-study work permits (2-4 years depending on country).' },
    { q: 'Can Aegis help with accommodation?', a: 'Our pre-departure team secures safe student residences, homestays, and shared apartments before you fly.' }
  ];

  const blogPosts = [
    {
      title: 'Top 10 Universities in the UK for 2025',
      category: 'Study Abroad',
      date: 'Jan 15, 2025',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=200&auto=format&fit=crop'
    },
    {
      title: 'How to Get a Student Visa for Canada',
      category: 'Student Visa',
      date: 'Jan 12, 2025',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=200&auto=format&fit=crop'
    },
    {
      title: 'Scholarships for International Students',
      category: 'Scholarships',
      date: 'Jan 10, 2025',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: TESTIMONIALS */}
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-2xs h-full min-h-[380px]">
            <div>
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                TESTIMONIALS
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight mb-5">
                WHAT OUR STUDENTS SAY
              </h3>

              {/* Large Gold Quote Mark */}
              <div className="text-5xl font-serif text-[#C5A059] leading-none mb-2 select-none">
                “
              </div>

              <p className="text-sm text-slate-700 leading-relaxed italic font-normal">
                Aegis Overseas made my dream a reality. Their guidance, support and professionalism are unmatched!
              </p>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-500 mt-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Student Avatar & Arrows */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                  alt="Karan Mehta"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-xs text-[#071228]">Karan Mehta</h4>
                  <p className="text-[10px] text-slate-500">University of Sydney, Master's in Engineering</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button className="w-6 h-6 rounded-full border border-slate-300 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 text-xs">
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button className="w-6 h-6 rounded-full border border-slate-300 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 text-xs">
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: FREQUENTLY ASKED QUESTIONS */}
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-2xs h-full min-h-[380px]">
            <div>
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
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
                          <Minus className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0" />
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
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] hover:text-[#071228] transition-colors"
              >
                <span>View All FAQs</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Column 3: BLOG */}
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-2xs h-full min-h-[380px]">
            <div>
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                BLOG
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight">
                YOUR GUIDE TO STUDYING ABROAD
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 mb-4">
                Insights, tips and updates for your global journey.
              </p>

              {/* 3 Articles */}
              <div className="space-y-3">
                {blogPosts.map((post, idx) => (
                  <Link
                    key={idx}
                    to="/blog"
                    className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200 hover:border-[#C5A059] transition-all group"
                  >
                    <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-[#071228] group-hover:text-[#C5A059] transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-[9px] font-semibold text-slate-400">
                        <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800">{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] hover:text-[#071228] transition-colors"
              >
                <span>View All Articles</span>
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
