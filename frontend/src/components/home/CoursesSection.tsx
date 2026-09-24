import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Award, Landmark, DollarSign } from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const coursesList = [
    'Computer Science & IT',
    'Engineering',
    'Business & Management',
    'Data Science & AI',
    'Healthcare',
    'Finance & Accounting',
    'Hospitality & Tourism',
    'Architecture & Design',
    'Law',
    'Life Sciences'
  ];

  const scholarshipsList = [
    { title: 'University Scholarships', icon: Landmark },
    { title: 'Merit Scholarships', icon: Award },
    { title: 'Government Scholarships', icon: GraduationCap },
    { title: 'Country Scholarships', icon: Award },
    { title: 'Tuition Discounts', icon: DollarSign }
  ];

  const testBadges = [
    { name: 'IELTS', color: 'bg-red-50 text-red-600 border-red-200' },
    { name: 'PTE', color: 'bg-sky-50 text-sky-600 border-sky-200' },
    { name: 'TOEFL', color: 'bg-teal-50 text-teal-600 border-teal-200' },
    { name: 'GRE', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { name: 'GMAT', color: 'bg-slate-100 text-slate-800 border-slate-300' },
    { name: 'SAT', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'OET', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { name: 'Duolingo', color: 'bg-lime-50 text-lime-700 border-lime-300' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Column 1: COURSES */}
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                COURSES
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight mb-5">
                FIND THE RIGHT COURSE <br />FOR YOUR FUTURE
              </h3>

              <div className="flex items-start gap-4">
                {/* 10 Courses list */}
                <div className="flex-1 space-y-1.5">
                  {coursesList.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-[9px] flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                {/* Student Photo */}
                <div className="w-28 sm:w-32 h-48 rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                    alt="International Student"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70">
              <Link
                to="/courses"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] text-xs font-bold uppercase tracking-wider shadow-xs hover:brightness-105 transition-all"
              >
                <span>EXPLORE ALL COURSES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: SCHOLARSHIPS */}
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                SCHOLARSHIPS
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight mb-5">
                YOUR DREAM EDUCATION <br />COULD COST LESS THAN YOU THINK.
              </h3>

              <div className="flex items-start gap-4">
                {/* 5 Scholarship items */}
                <div className="flex-1 space-y-2.5">
                  {scholarshipsList.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                        <div className="w-6 h-6 rounded-full bg-amber-100 text-[#C5A059] flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{s.title}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Coins / Cap Image */}
                <div className="w-28 sm:w-32 h-44 rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=300&auto=format&fit=crop"
                    alt="Scholarships and Funding"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70">
              <Link
                to="/scholarships"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] text-xs font-bold uppercase tracking-wider shadow-xs hover:brightness-105 transition-all"
              >
                <span>EXPLORE SCHOLARSHIPS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: TEST PREPARATION */}
          <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                TEST PREPARATION
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight mb-5">
                PREPARE. PERFORM. <br />GET THERE.
              </h3>

              {/* 8 Test tiles grid */}
              <div className="grid grid-cols-2 gap-3 my-4">
                {testBadges.map((t) => (
                  <div
                    key={t.name}
                    className={`py-3.5 px-3 rounded-xl border font-bold text-center text-xs tracking-wider shadow-2xs ${t.color}`}
                  >
                    {t.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70">
              <Link
                to="/test-preparation"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] text-xs font-bold uppercase tracking-wider shadow-xs hover:brightness-105 transition-all"
              >
                <span>EXPLORE TEST PREPARATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
