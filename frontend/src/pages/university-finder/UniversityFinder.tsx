import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UniversityFinder as UniversityFinderComponent } from '../../components/home/UniversityFinder';
import { Sparkles, ShieldCheck, Award, GraduationCap } from 'lucide-react';

export const UniversityFinderPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Find Your Best University Matches | Aegis Overseas';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 pb-16 bg-[#FDFBF7] min-h-screen">
      {/* Top Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <Link to="/" className="hover:text-[#071228]">Home</Link>
          <span>/</span>
          <span className="text-[#071228] font-bold">University & Program Matcher</span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-[#071228] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>AI-POWERED RECOMMENDATION SYSTEM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228] tracking-tight">
            Find Your Best University Matches
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Tell Aegis your study preferences. Our intelligent matching engine evaluates academic criteria, test scores, tuition budgets, and visa viability across 8 global destinations.
          </p>
        </div>
      </div>

      {/* University Finder Engine Component */}
      <UniversityFinderComponent />

      {/* Trust & Methodology Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-[#071228] mb-1">
              Transparent Scoring
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every recommendation explains why it was selected, breaking down course match, budget fit, and admission prerequisites.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-[#071228] mb-1">
              Zero Fake Rankings
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never invent university requirements, tuition figures, or admission rates. All metrics are vetted by Aegis research analysts.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-[#071228] mb-1">
              1-on-1 Certified Counseling
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Found your preferred universities? Book a free strategy session with our certified advisors in Nellore, Tirupati, or online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityFinderPage;
