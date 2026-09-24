import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Briefcase, 
  Quote, 
  FileText, 
  Calendar, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';
import { STUDENT_STORIES, StudentStory } from '../../data/studentStories';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const StudentStoryDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find student story
  const story = STUDENT_STORIES.find((s) => s.slug === slug || s.id === slug) || STUDENT_STORIES[0];

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/student-stories" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Student Stories
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Link to="/" className="hover:text-neutral-800">Home</Link>
            <span>/</span>
            <Link to="/student-stories" className="hover:text-neutral-800">Stories</Link>
            <span>/</span>
            <span className="text-[#071228] font-bold">{story.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden border border-[#C5A059]/30 shadow-2xl">
          <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <img
              src={story.avatar}
              alt={story.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-[#C5A059] shadow-xl shrink-0"
            />

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm">
                  <span>{story.flag}</span>
                  <span>{story.country}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold border border-[#C5A059]/30">
                  {story.intake} Admit
                </span>
                {story.scholarshipReceived && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Scholarship Recipient</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                {story.name}
              </h1>
              
              <p className="text-base sm:text-lg text-[#E6C687] font-medium mt-1">
                {story.program}
              </p>

              <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#C5A059]" />
                <span>{story.university}</span>
              </p>

              {story.scholarshipReceived && (
                <div className="mt-4 p-3 bg-white/10 rounded-xl border border-white/15 inline-block text-xs font-semibold text-emerald-200">
                  🎉 Awarded: {story.scholarshipReceived}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Testimonial Quote */}
            <div className="bg-[#FAF7F0] rounded-2xl border border-[#E6C687]/40 p-6 sm:p-8 shadow-xs">
              <Quote className="w-8 h-8 text-[#C5A059] mb-3 opacity-70" />
              <p className="text-base sm:text-lg text-[#071228] font-medium italic leading-relaxed">
                "{story.quote}"
              </p>
              <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mt-4">
                — {story.name}, Class of {story.intake.split(' ')[1] || '2025'}
              </p>
            </div>

            {/* Profile Snapshot & Background */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#C5A059]" />
                Applicant Background & Academic Profile
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                    Undergraduate Degree
                  </span>
                  <p className="text-sm font-bold text-[#071228] mt-1">{story.previousEducation}</p>
                </div>

                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                    Undergrad Score / CGPA
                  </span>
                  <p className="text-sm font-bold text-[#071228] mt-1">{story.previousCGPA}</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                  Standardized Test Scores
                </span>
                <div className="flex flex-wrap gap-2">
                  {story.testScores.map((score, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold"
                    >
                      {score.test}: {score.score}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* The Challenge & The Strategy */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-display font-bold text-red-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">!</span>
                  The Challenge
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed bg-red-50/50 p-4 rounded-xl border border-red-100">
                  {story.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-emerald-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  The Aegis Strategy & Action Plan
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  {story.strategy}
                </p>
              </div>
            </div>

            {/* University Offers */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C5A059]" />
                University Admissions & Offers Received
              </h2>
              <div className="space-y-2.5">
                {story.admissionAdmits.map((admit, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border border-neutral-200 flex items-center justify-between bg-neutral-50"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#071228]">{admit}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Offer Confirmed
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visa Outcome */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Visa Clearance Outcome
              </h2>
              <p className="text-sm text-neutral-700 bg-emerald-50 p-4 rounded-xl border border-emerald-200 font-medium">
                {story.visaApprovalDays}
              </p>
            </div>

            {/* Advice for Future Aspirants */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                {story.name}'s Advice for Future Aspirants
              </h2>
              <div className="space-y-3">
                {story.adviceForAspirants.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-sm sticky top-28">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C5A059] block mb-1">
                Your Global Admission Journey
              </span>
              <h3 className="text-lg font-display font-bold text-[#071228]">
                Get Similar Guidance
              </h3>
              <p className="text-xs text-neutral-500 mt-1.5 mb-6 leading-relaxed">
                Connect with the exact mentors who formulated {story.name}'s strategy for {story.university}.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mb-4"
              >
                <span>Book Free Mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Honest Profile Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct University Selection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SOP & Resume Crafting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Visa File Preparation</span>
                </div>
              </div>

              {/* Other Stories Links */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <span className="text-xs font-bold text-[#071228] block mb-3">
                  More Inspiring Admits
                </span>
                <div className="space-y-3">
                  {STUDENT_STORIES.filter(s => s.id !== story.id).slice(0, 3).map((item) => (
                    <Link
                      key={item.id}
                      to={`/student-stories/${item.slug}`}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors"
                    >
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-10 h-10 rounded-full object-cover shrink-0 border border-neutral-200"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#071228] truncate">{item.name}</p>
                        <p className="text-[11px] text-neutral-500 truncate">{item.university}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Consultation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConsultationForm 
          initialNotes={`Inspired by ${story.name}'s story at ${story.university}`}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default StudentStoryDetails;
