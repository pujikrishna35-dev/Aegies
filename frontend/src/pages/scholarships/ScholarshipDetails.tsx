import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Award, 
  ArrowLeft, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  GraduationCap, 
  Sparkles, 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  HelpCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SCHOLARSHIPS, ScholarshipData } from '../../data/scholarships';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const ScholarshipDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find scholarship
  const scholarship = SCHOLARSHIPS.find((s) => s.slug === slug || s.id === slug) || SCHOLARSHIPS[0];

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/scholarships" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Scholarships
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Link to="/" className="hover:text-neutral-800">Home</Link>
            <span>/</span>
            <Link to="/scholarships" className="hover:text-neutral-800">Scholarships</Link>
            <span>/</span>
            <span className="text-[#071228] font-bold truncate max-w-[200px]">{scholarship.title}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden border border-[#C5A059]/30 shadow-2xl">
          <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm">
                <span>{scholarship.flag}</span>
                <span>{scholarship.country}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold border border-[#C5A059]/30">
                {scholarship.providerType} Fellowship
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                {scholarship.coverageType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight max-w-4xl">
              {scholarship.title}
            </h1>

            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
              Offered by <strong className="text-white">{scholarship.provider}</strong>
            </p>

            {/* Value Callout Banner */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6C687] block">
                  Total Financial Coverage & Grant
                </span>
                <p className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  {scholarship.awardAmount}
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-3 rounded-xl bg-[#C5A059] hover:bg-[#E6C687] text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
              >
                Apply With Aegis Advisor
              </button>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview Section */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                Program Overview
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {scholarship.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-100">
                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E6C687]/30">
                  <span className="text-xs font-bold text-[#071228] block">Application Deadlines</span>
                  <p className="text-xs text-neutral-600 mt-1">{scholarship.deadline}</p>
                </div>
                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E6C687]/30">
                  <span className="text-xs font-bold text-[#071228] block">Annual Cycle</span>
                  <p className="text-xs text-neutral-600 mt-1">{scholarship.applicationCycle}</p>
                </div>
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {scholarship.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits & Inclusions */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C5A059]" />
                Scholarship Benefits & Allowances
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scholarship.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Checklist */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C5A059]" />
                Mandatory Documentation Checklist
              </h2>
              <p className="text-xs text-neutral-500 mb-4">
                Aegis Overseas assists you in formatting, authenticating, and polishing all required dossier submissions:
              </p>
              <ul className="space-y-3">
                {scholarship.documentsRequired.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                    <FileText className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selection Process Stages */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C5A059]" />
                Selection & Evaluation Timeline
              </h2>
              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-neutral-200">
                {scholarship.selectionProcess.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-[#071228] text-[#E6C687] text-xs font-bold flex items-center justify-center shrink-0 z-10">
                      {idx + 1}
                    </span>
                    <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 flex-1">
                      <p className="text-xs sm:text-sm text-neutral-700 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Apply with Aegis */}
            <div className="bg-[#FAF7F0] rounded-2xl border border-[#E6C687]/40 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#C5A059]" />
                How Aegis Mentors Guide Your Application
              </h2>
              <div className="space-y-3">
                {scholarship.howToApply.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                    <span className="w-5 h-5 rounded-full bg-[#C5A059] text-[#071228] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-6">
            
            {/* Action Box */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-sm sticky top-28">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C5A059] block mb-1">
                Aegis Scholarship Mentorship
              </span>
              <h3 className="text-lg font-display font-bold text-[#071228]">
                Get Your Profile Assessed
              </h3>
              <p className="text-xs text-neutral-500 mt-1.5 mb-6 leading-relaxed">
                Connect with an advisor who has placed students into {scholarship.title} and other prestigious fellowship schemes.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mb-4"
              >
                <span>Book Free Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free Initial Profile Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SOP & Essay Brainstorming</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>University Offer Alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mock High Commission Panels</span>
                </div>
              </div>

              {/* Other Related Scholarships */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <span className="text-xs font-bold text-[#071228] block mb-3">
                  Other Prestigious Grants
                </span>
                <div className="space-y-2.5">
                  {SCHOLARSHIPS.filter(s => s.id !== scholarship.id).slice(0, 3).map((item) => (
                    <Link
                      key={item.id}
                      to={`/scholarships/${item.slug}`}
                      className="block p-3 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all text-xs"
                    >
                      <span className="font-bold text-[#071228] block truncate">{item.title}</span>
                      <span className="text-[11px] text-neutral-500 mt-0.5 block">{item.country} • {item.coverageType}</span>
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
          initialNotes={`Interested in applying for ${scholarship.title}`}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ScholarshipDetails;
