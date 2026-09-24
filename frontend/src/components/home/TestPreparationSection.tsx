import React from 'react';
import { Link } from 'react-router-dom';
import { TEST_PREP } from '@/data/tests';

export const TestPreparationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Exam Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
            PREPARE. PERFORM. GET THERE.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Expert certified coaching for IELTS, PTE, TOEFL, GRE, GMAT, SAT, OET, and Duolingo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {TEST_PREP.map((t) => (
            <Link
              key={t.slug}
              to={`/test-preparation/${t.slug}`}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-amber-300 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl font-black text-[#8A1538] block mb-2 group-hover:scale-105 transition-transform">
                  {t.name}
                </span>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{t.shortDesc || t.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-bold text-[#8A1538] flex items-center justify-between">
                <span>Course Details</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestPreparationSection;
