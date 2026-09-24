import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  BookOpen, 
  GraduationCap, 
  FileCheck2, 
  Send, 
  Stamp, 
  Plane, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  DollarSign,
  Briefcase
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

export const StudyAbroad: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Profile Evaluation & Career Counseling',
      desc: 'Our senior counselors analyze your academic background, test scores, career ambitions, and budget to build a tailored study abroad strategy.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Test Preparation (IELTS / PTE / GRE)',
      desc: 'Custom study plans and rigorous mock drills for IELTS, TOEFL, PTE, GRE, and GMAT to secure required cutoffs for top universities.',
      icon: BookOpen
    },
    {
      num: '03',
      title: 'University & Course Shortlisting',
      desc: 'Scientific categorization of programs into Dream, Reach, and Safe institutions across the UK, US, Canada, Australia, and Europe.',
      icon: GraduationCap
    },
    {
      num: '04',
      title: 'SOP, LOR & Resume Crafting',
      desc: 'Expert editorial assistance to craft unique Statements of Purpose and Letters of Recommendation that spotlight your distinctive narrative.',
      icon: FileCheck2
    },
    {
      num: '05',
      title: 'Application Submission & Scholarship Grants',
      desc: 'Error-free application submission through official partner channels to unlock early admission offers and maximize scholarship eligibility.',
      icon: Send
    },
    {
      num: '06',
      title: 'Student Visa Filing & Financial Documentation',
      desc: '99.2% visa approval rate support: thorough proof-of-funds verification, mock visa interview drills, and biometric scheduling.',
      icon: Stamp
    },
    {
      num: '07',
      title: 'Pre-Departure Briefing & Relocation',
      desc: 'Assistance with flight bookings, forex cards, student health insurance, and vetted campus accommodation before you fly.',
      icon: Plane
    }
  ];

  const intakes = [
    {
      name: 'Fall Intake',
      period: 'August – October',
      status: 'Primary & Largest',
      highlight: true,
      desc: 'Highest number of course options, largest scholarship allocations, and maximum on-campus recruitment opportunities.',
      deadline: 'December – April prior'
    },
    {
      name: 'Spring Intake',
      period: 'January – February',
      status: 'Secondary Intake',
      highlight: false,
      desc: 'Ideal for students needing extra time for exams, test retakes, or completing undergraduate degree results.',
      deadline: 'August – November prior'
    },
    {
      name: 'Summer / Winter Intake',
      period: 'May – July',
      status: 'Specialized Intake',
      highlight: false,
      desc: 'Select programs, vocational diplomas, language pre-requisite courses, and specialized business executive cohorts.',
      deadline: 'January – March prior'
    }
  ];

  const checklist = [
    'Original Academic Transcripts & Degree Certificates',
    'Official English Proficiency Test Score (IELTS, TOEFL, or PTE)',
    'Standardized Test Score Reports (GRE / GMAT if applicable)',
    'Compelling Statement of Purpose (SOP) tailored to each program',
    '2 to 3 Letters of Recommendation (Academic & Professional)',
    'Updated Academic Curriculum Vitae (CV) / Resume',
    'Valid International Passport (min. 6 months validity)',
    'Financial Proof of Funds & Bank Sponsorship Affidavits',
    'Portfolio or Work Samples (for Design, Architecture & Fine Arts)'
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Study Abroad Guide</span>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#071228] via-[#0B1E3F] to-[#040A17] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-bold tracking-widest text-[#E2C474] uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#E2C474]" />
              End-to-End International Education Roadmap
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              Your Complete Step-by-Step <span className="text-gold-gradient">Study Abroad</span> Guide
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Navigating global university admissions doesn't have to be overwhelming. From course selection to visa approval, Aegis Overseas mentors you across every crucial milestone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F0CA65] via-[#E2B755] to-[#D4A03A] text-[#071228] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:brightness-105 transition-all flex items-center gap-2"
              >
                <span>Get Free 1-on-1 Mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/destinations"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>

        {/* 7-Step Admission Journey */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
              The Proven Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#071228]">
              The 7-Step Journey to Your Dream University
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              A structured, transparent methodology designed to maximize admission offers and visa success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300 relative group hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-display font-extrabold text-[#C5A059]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#071228] flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#071228] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Intakes & Timelines */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
              Application Windows
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#071228]">
              Understanding Global Intakes & Deadlines
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              Universities worldwide accept applications across distinct admission cycles. Plan 8 to 12 months ahead for ideal results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {intakes.map((intake) => (
              <div
                key={intake.name}
                className={`rounded-2xl p-7 border transition-all ${
                  intake.highlight
                    ? 'bg-gradient-to-b from-[#071228] to-[#0A1A38] text-white border-amber-400/40 shadow-xl'
                    : 'bg-white text-[#071228] border-neutral-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      intake.highlight
                        ? 'bg-amber-400/20 text-[#E2C474] border border-amber-400/30'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {intake.status}
                  </span>
                  <Calendar className={`w-4 h-4 ${intake.highlight ? 'text-amber-400' : 'text-neutral-400'}`} />
                </div>
                <h3 className="text-xl font-bold font-display mb-1">{intake.name}</h3>
                <div className={`text-sm font-semibold mb-4 ${intake.highlight ? 'text-amber-300' : 'text-amber-700'}`}>
                  {intake.period}
                </div>
                <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${intake.highlight ? 'text-slate-300' : 'text-neutral-600'}`}>
                  {intake.desc}
                </p>
                <div className={`pt-4 border-t text-xs ${intake.highlight ? 'border-white/15 text-slate-400' : 'border-neutral-100 text-neutral-500'}`}>
                  <span className="font-bold text-neutral-400">Typical Deadline:</span> {intake.deadline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Checklist */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-neutral-200/80 shadow-md mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
              Prerequisites
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#071228]">
              Essential Documents Required for Application
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Prepare these official documents early to ensure rapid application processing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/60">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#071228] mb-3">
            Ready to Start Your International Academic Journey?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-700 mb-6">
            Get personalized university recommendations, eligibility assessments, and fee breakdowns with our senior education counselors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setConsultationOpen(true)}
              className="px-7 py-3 rounded-xl bg-[#071228] hover:bg-[#0E213D] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all"
            >
              Book Free Consultation
            </button>
            <Link
              to="/university-finder"
              className="px-7 py-3 rounded-xl bg-white hover:bg-neutral-50 text-[#071228] border border-neutral-300 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
            >
              Try University Finder
            </Link>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <Modal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title="Book Your Free Study Abroad Counseling"
      >
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </div>
  );
};

export default StudyAbroad;
