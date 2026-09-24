import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Sparkles, 
  GraduationCap, 
  Award, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  Briefcase, 
  ShieldCheck, 
  FileCheck2,
  Filter
} from 'lucide-react';
import { STUDENT_STORIES, StudentStory } from '../../data/studentStories';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const StudentStories: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStories = useMemo(() => {
    return STUDENT_STORIES.filter((story) => {
      // Country filter
      if (selectedCountry !== 'all') {
        if (!story.country.toLowerCase().includes(selectedCountry.toLowerCase())) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = story.name.toLowerCase().includes(q);
        const matchUni = story.university.toLowerCase().includes(q);
        const matchProg = story.program.toLowerCase().includes(q);
        const matchCountry = story.country.toLowerCase().includes(q);
        if (!matchName && !matchUni && !matchProg && !matchCountry) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCountry]);

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Student Success Stories</span>
        </div>

        {/* Hero Section */}
        <div className="relative bg-[#071228] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl mb-12 border border-[#C5A059]/20">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 bottom-0 opacity-10 hidden lg:block pointer-events-none">
            <Users className="w-80 h-80 text-[#C5A059]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#E6C687] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Real Students • Real Admits • Verified Visas
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Real Journeys to the World’s <span className="text-[#C5A059]">Top Universities</span>
            </h1>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Every student faces unique challenges: academic gaps, test score hurdles, or visa apprehensions. Read how our personalized mentorship turned aspirations into reality at Imperial, Toronto, TUM, Melbourne, and Northeastern.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#E6C687]">5,000+</p>
                <p className="text-xs text-slate-400 mt-1">Students Guided</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-white">99.2%</p>
                <p className="text-xs text-slate-400 mt-1">Visa Success Record</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#E6C687]">$14.5M+</p>
                <p className="text-xs text-slate-400 mt-1">Scholarships Awarded</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1">Transparent Guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search student name, university, or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
              />
            </div>

            {/* Country Selector */}
            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] bg-white text-neutral-700"
              >
                <option value="all">All Study Destinations</option>
                <option value="United Kingdom">United Kingdom 🇬🇧</option>
                <option value="United States">United States 🇺🇸</option>
                <option value="Canada">Canada 🇨🇦</option>
                <option value="Australia">Australia 🇦🇺</option>
                <option value="Germany">Germany 🇩🇪</option>
                <option value="Ireland">Ireland 🇮🇪</option>
              </select>
            </div>

          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Card Header with Avatar */}
                <div className="p-6 border-b border-neutral-100 flex items-center gap-4">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#C5A059] shadow-xs"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-lg">{story.flag}</span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                        {story.country}
                      </span>
                    </div>
                    <h2 className="text-base font-bold font-display text-[#071228] group-hover:text-amber-700 transition-colors">
                      <Link to={`/student-stories/${story.slug}`}>
                        {story.name}
                      </Link>
                    </h2>
                    <p className="text-xs text-neutral-500 font-medium">
                      {story.intake} Admit
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Program & Uni */}
                  <div>
                    <span className="text-xs font-bold text-[#071228] block">
                      {story.program}
                    </span>
                    <span className="text-xs text-amber-700 font-semibold block mt-0.5">
                      {story.university}
                    </span>
                  </div>

                  {/* Scholarship Pill */}
                  {story.scholarshipReceived && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-[11px] font-bold text-emerald-800 line-clamp-1">
                        {story.scholarshipReceived}
                      </span>
                    </div>
                  )}

                  {/* Test Scores */}
                  <div className="flex flex-wrap gap-1.5">
                    {story.testScores.map((score, idx) => (
                      <span
                        key={idx}
                        className="bg-neutral-100 text-neutral-700 text-[11px] font-semibold px-2.5 py-1 rounded-md"
                      >
                        {score.test}: {score.score}
                      </span>
                    ))}
                  </div>

                  {/* Student Quote */}
                  <div className="bg-[#FAF7F0] p-3.5 rounded-xl border border-[#E6C687]/30 relative">
                    <Quote className="w-4 h-4 text-[#C5A059] mb-1 opacity-60" />
                    <p className="text-xs text-neutral-700 italic line-clamp-3">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Current Outcome */}
                  <div className="pt-2 border-t border-neutral-100 flex items-start gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-600">
                      <strong className="text-neutral-700">Now:</strong> {story.currentRole}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Link
                  to={`/student-stories/${story.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-neutral-200 text-xs font-bold text-[#071228] hover:bg-[#071228] hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Read Full Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Markers */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              The Aegis Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              Why Our Students Achieve Unmatched Admission Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <FileCheck2 className="w-8 h-8 text-[#C5A059] mb-4" />
              <h3 className="text-base font-bold text-[#071228] mb-2">Zero Template Applications</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Every Statement of Purpose, resume, and letter of recommendation is custom tailored to the specific admission criteria of the university department.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-base font-bold text-[#071228] mb-2">Rigorous Visa Defense</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We simulate real consulate interviews, audit financial paperwork with certified chartered accountants, and resolve potential red flags beforehand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <Award className="w-8 h-8 text-[#C5A059] mb-4" />
              <h3 className="text-base font-bold text-[#071228] mb-2">Scholarship Prioritization</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We actively target institutional fellowships, department waivers, and international grants so our students graduate with minimal student debt.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#071228] via-[#0E1E38] to-[#071228] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-[#C5A059]/30">
          <div className="max-w-2xl mx-auto relative z-10">
            <GraduationCap className="w-12 h-12 text-[#E6C687] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Ready to Write Your Own Global Success Story?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 mb-6 leading-relaxed">
              Book a free consultation today. Let our experienced mentors map your profile to top international universities matching your career goals.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5A059] text-[#071228] font-bold text-sm hover:bg-[#E6C687] transition-all shadow-lg hover:scale-105"
            >
              Start Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Consultation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConsultationForm 
          initialNotes="Inspired by Student Stories - seeking admission mentorship"
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default StudentStories;
