import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  Target, 
  Calendar, 
  GraduationCap, 
  Monitor, 
  FileCheck, 
  HelpCircle,
  BarChart3,
  Users
} from 'lucide-react';
import { TEST_PREP, TestPrepData } from '../../data/tests';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const TestPreparation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestName, setSelectedTestName] = useState('');

  const filteredTests = useMemo(() => {
    return TEST_PREP.filter((test) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'english' && test.category !== 'English Language Proficiency') {
          return false;
        }
        if (selectedCategory === 'grad' && test.category !== 'Standardized Graduate Admissions') {
          return false;
        }
        if (selectedCategory === 'undergrad' && test.category !== 'Undergraduate Entrance') {
          return false;
        }
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = test.name.toLowerCase().includes(q);
        const matchFull = test.fullName.toLowerCase().includes(q);
        const matchDesc = test.shortDesc.toLowerCase().includes(q);
        if (!matchName && !matchFull && !matchDesc) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleBookMock = (testName?: string) => {
    setSelectedTestName(testName || 'Free Diagnostic Mock Test');
    setIsModalOpen(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Test Preparation</span>
        </div>

        {/* Hero Section */}
        <div className="relative bg-[#071228] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl mb-12 border border-[#C5A059]/20">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 bottom-0 opacity-10 hidden lg:block pointer-events-none">
            <BookOpen className="w-80 h-80 text-[#C5A059]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#E6C687] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Certified IDP • British Council • ETS Accredited Training
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Achieve Your Dream Band & Score with <span className="text-[#C5A059]">Expert Coaching</span>
            </h1>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Comprehensive test preparation for IELTS, PTE, TOEFL, GRE, GMAT, SAT, and Duolingo. Learn from master trainers, practice on AI diagnostic software, and receive personalized speaking & writing rubrics.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#E6C687]">98.4%</p>
                <p className="text-xs text-slate-400 mt-1">First Attempt Pass Rate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-white">8.0+</p>
                <p className="text-xs text-slate-400 mt-1">Average IELTS Band</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#E6C687]">322+</p>
                <p className="text-xs text-slate-400 mt-1">Average GRE Score</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-white">25,000+</p>
                <p className="text-xs text-slate-400 mt-1">Mock Exams Administered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search exam (e.g., IELTS, PTE, GRE, GMAT)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
              />
            </div>

            {/* Category selector */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] bg-white text-neutral-700"
              >
                <option value="all">All Exams</option>
                <option value="english">English Proficiency (IELTS, PTE, TOEFL, DET)</option>
                <option value="grad">Graduate Admissions (GRE, GMAT)</option>
                <option value="undergrad">Undergraduate Admissions (SAT)</option>
              </select>
            </div>

          </div>

          {/* Quick Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-100">
            {[
              { id: 'all', label: 'All Exams' },
              { id: 'english', label: 'English Proficiency (IELTS / PTE / TOEFL)' },
              { id: 'grad', label: 'Graduate Admissions (GRE / GMAT)' },
              { id: 'undergrad', label: 'Undergraduate Entrance (SAT)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#071228] text-[#E6C687] shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTests.map((test) => (
            <div
              key={test.slug}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Header */}
                <div className="p-6 border-b border-neutral-100">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xl font-bold font-display text-[#071228] group-hover:text-amber-700 transition-colors">
                      {test.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                      {test.badge}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-500 font-medium">
                    {test.fullName}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  {/* Score Scale & Competitive Target */}
                  <div className="bg-[#FAF7F0] p-3.5 rounded-xl border border-[#E6C687]/30 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-500">Scoring Scale:</span>
                      <span className="font-bold text-[#071228]">{test.scoreScale}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1.5 border-t border-[#E6C687]/20">
                      <span className="text-[#A07A2B] font-bold">Top Uni Target:</span>
                      <span className="font-extrabold text-[#071228]">{test.competitiveTarget}</span>
                    </div>
                  </div>

                  {/* Duration & Mode */}
                  <div className="space-y-1.5 text-xs text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span><strong>Duration:</strong> {test.testDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span><strong>Format:</strong> {test.testMode}</span>
                    </div>
                  </div>

                  {/* Overview description */}
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {test.shortDesc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                    {test.aegisTrainingFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <Link
                  to={`/test-preparation/${test.slug}`}
                  className="flex-1 text-center py-2.5 px-3 rounded-xl border border-neutral-200 text-xs font-bold text-[#071228] hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1"
                >
                  Syllabus & Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleBookMock(test.name)}
                  className="py-2.5 px-4 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] text-xs font-bold transition-all shadow-xs"
                >
                  Free Diagnostic
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Coaching Pedagogy */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Our Training Pedagogy
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              The Aegis High-Score Methodology
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-2">
              Proven 5-stage framework designed to build test stamina, eliminate recurring mistakes, and achieve target percentiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#E6C687]/30 text-center">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-xs flex items-center justify-center mx-auto mb-3">
                01
              </span>
              <h3 className="text-xs font-bold text-[#071228] mb-1">Free Diagnostic Test</h3>
              <p className="text-[11px] text-neutral-600">Pinpoint your baseline band/score and identify section weaknesses.</p>
            </div>

            <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#E6C687]/30 text-center">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-xs flex items-center justify-center mx-auto mb-3">
                02
              </span>
              <h3 className="text-xs font-bold text-[#071228] mb-1">Custom Study Plan</h3>
              <p className="text-[11px] text-neutral-600">Personalized weekly study roadmap based on your admission deadlines.</p>
            </div>

            <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#E6C687]/30 text-center">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-xs flex items-center justify-center mx-auto mb-3">
                03
              </span>
              <h3 className="text-xs font-bold text-[#071228] mb-1">Concept Masterclasses</h3>
              <p className="text-[11px] text-neutral-600">Live sessions with British Council and ETS master trainers.</p>
            </div>

            <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#E6C687]/30 text-center">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-xs flex items-center justify-center mx-auto mb-3">
                04
              </span>
              <h3 className="text-xs font-bold text-[#071228] mb-1">1-on-1 Evaluations</h3>
              <p className="text-[11px] text-neutral-600">Personalized speaking interviews and line-by-line essay feedback.</p>
            </div>

            <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#E6C687]/30 text-center">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-xs flex items-center justify-center mx-auto mb-3">
                05
              </span>
              <h3 className="text-xs font-bold text-[#071228] mb-1">Simulated Computer Mocks</h3>
              <p className="text-[11px] text-neutral-600">Full timed exams replicating official Pearson, IDP, and ETS portals.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#071228] via-[#0E1E38] to-[#071228] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-[#C5A059]/30">
          <div className="max-w-2xl mx-auto relative z-10">
            <Target className="w-12 h-12 text-[#E6C687] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Test Your Readiness With a Free Diagnostic Test
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 mb-6 leading-relaxed">
              Book a complimentary diagnostic test for IELTS, PTE, or GRE. Receive an instant section-wise scorecard and a customized score-improvement plan from our master trainers.
            </p>
            <button
              onClick={() => handleBookMock('General Diagnostic Test')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5A059] text-[#071228] font-bold text-sm hover:bg-[#E6C687] transition-all shadow-lg hover:scale-105"
            >
              Book Free Diagnostic Test
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConsultationForm 
          initialNotes={`Interested in test prep coaching: ${selectedTestName}`}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default TestPreparation;
