import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export const StudentSuccessSection: React.FC = () => {
  const students = [
    {
      name: 'Riya Sharma',
      uni: 'University of Melbourne',
      course: "Master's in Data Science",
      quote: "Aegis guided me at every step. Today, I'm living my dream in Australia!",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Arjun Nair',
      uni: 'University of Toronto',
      course: 'MSc in Computer Science',
      quote: 'From counselling to visa, the Aegis team was always there. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Sneha Patel',
      uni: 'University of Birmingham',
      course: 'MBA',
      quote: 'Their scholarship guidance and genuinely caring staff made it possible!',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop'
    }
  ];

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
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                STUDENT SUCCESS STORIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228] tracking-tight">
                REAL STUDENTS. REAL JOURNEYS. REAL IMPACT.
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Their dreams took flight. Yours can too.
              </p>

              {/* 3 Student Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
                {students.map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full overflow-hidden mb-3 border border-slate-100 shadow-2xs">
                        <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-bold text-xs text-[#071228] leading-snug">{s.name}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">{s.uni}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{s.course}</p>
                      <p className="text-[11px] text-slate-600 mt-3 leading-relaxed italic line-clamp-3">
                        "{s.quote}"
                      </p>
                    </div>

                    <div className="mt-4 pt-2 flex justify-end">
                      <div className="w-6 h-6 rounded-full bg-[#FDF2D9] text-[#071228] flex items-center justify-center border border-[#C5A059]/40 text-xs font-bold">
                        →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination / Arrows */}
            <div className="flex items-center gap-2 mt-6">
              <button className="w-7 h-7 rounded-full border border-slate-300 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 text-xs">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-1.5 px-2">
                <span className="w-2 h-2 rounded-full bg-[#071228]" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
              <button className="w-7 h-7 rounded-full border border-slate-300 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 text-xs">
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
