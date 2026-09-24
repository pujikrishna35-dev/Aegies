import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Monitor, 
  CheckCircle2, 
  Calendar, 
  Award, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { TEST_PREP, TestPrepData } from '../../data/tests';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const TestDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Find test
  const test = TEST_PREP.find((t) => t.slug === slug) || TEST_PREP[0];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/test-preparation" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Test Preparation
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Link to="/" className="hover:text-neutral-800">Home</Link>
            <span>/</span>
            <Link to="/test-preparation" className="hover:text-neutral-800">Coaching</Link>
            <span>/</span>
            <span className="text-[#071228] font-bold">{test.name}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden border border-[#C5A059]/30 shadow-2xl">
          <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold border border-[#C5A059]/30">
                {test.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                {test.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {test.name} Comprehensive Coaching
            </h1>

            <p className="mt-2 text-base text-slate-300">
              {test.fullName}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 max-w-4xl">
              <div>
                <span className="text-xs text-slate-400 block">Scoring Scale</span>
                <p className="text-base font-bold text-[#E6C687] mt-0.5">{test.scoreScale}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Competitive Target</span>
                <p className="text-base font-bold text-white mt-0.5">{test.competitiveTarget}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Test Duration</span>
                <p className="text-base font-bold text-[#E6C687] mt-0.5">{test.testDuration}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Score Validity</span>
                <p className="text-base font-bold text-white mt-0.5">{test.validity}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C5A059]" />
                Exam Overview & Global Recognition
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {test.overview}
              </p>
              <div className="mt-4 p-4 rounded-xl bg-[#FAF7F0] border border-[#E6C687]/30 text-xs text-neutral-700">
                <strong className="text-[#071228]">Accepted by:</strong> {test.acceptedBy}
              </div>
            </div>

            {/* Section Breakdown */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#C5A059]" />
                Test Format & Section Breakdown
              </h2>

              <div className="space-y-4">
                {test.sections.map((sec, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#C5A059]/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-[#071228] flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#071228] text-[#E6C687] text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        {sec.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 font-semibold text-neutral-600">
                          ⏱ {sec.duration}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 font-semibold text-amber-800">
                          {sec.questionsCount}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed mt-2 pl-8">
                      {sec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Aegis Training Features */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                What's Included in Aegis Coaching
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {test.aegisTrainingFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High Scorers Hall of Fame */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C5A059]" />
                Recent Student Scorecards & University Placements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {test.sampleResults.map((res, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E6C687]/30 text-center">
                    <span className="text-sm font-bold text-[#071228] block">{res.studentName}</span>
                    <span className="inline-block my-1.5 px-2.5 py-0.5 rounded-full bg-[#071228] text-[#E6C687] text-xs font-bold">
                      {res.score}
                    </span>
                    <span className="text-[11px] text-neutral-500 block">Admitted: {res.admittedTo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C5A059]" />
                Frequently Asked Questions about {test.name}
              </h2>
              <div className="space-y-3">
                {test.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-neutral-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#071228] hover:bg-neutral-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 bg-[#FAF7F0]/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-sm sticky top-28">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C5A059] block mb-1">
                Next Batch Enrollments
              </span>
              <h3 className="text-lg font-display font-bold text-[#071228]">
                Enroll in {test.name} Batch
              </h3>

              <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2 text-xs text-neutral-700">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Duration:</span>
                  <span className="font-bold">{test.batchDetails.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Hours:</span>
                  <span className="font-bold">{test.batchDetails.hours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Batch Type:</span>
                  <span className="font-bold">{test.batchDetails.classType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Mock Tests:</span>
                  <span className="font-bold text-amber-700">{test.batchDetails.mockTests}</span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 py-3.5 px-4 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Book Free Diagnostic Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-neutral-400 text-center mt-2">
                Includes free score assessment & study plan
              </p>

              {/* Other Tests */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <span className="text-xs font-bold text-[#071228] block mb-3">
                  Other Test Prep Programs
                </span>
                <div className="space-y-2">
                  {TEST_PREP.filter(t => t.slug !== test.slug).slice(0, 4).map((item) => (
                    <Link
                      key={item.slug}
                      to={`/test-preparation/${item.slug}`}
                      className="block p-2.5 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all text-xs"
                    >
                      <span className="font-bold text-[#071228]">{item.name}</span>
                      <span className="text-[11px] text-neutral-500 block">{item.fullName}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConsultationForm 
          initialNotes={`Interested in enrolling for ${test.name} coaching`}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default TestDetails;
