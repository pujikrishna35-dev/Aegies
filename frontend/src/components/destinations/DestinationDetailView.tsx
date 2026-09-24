import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Globe2, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  FileText, 
  Clock, 
  DollarSign, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Plane
} from 'lucide-react';
import { DESTINATIONS, DestinationData } from '../../data/destinations';
import { Modal } from '../ui/Modal';
import { ConsultationForm } from '../forms/ConsultationForm';

interface Props {
  slug: string;
}

export const DestinationDetailView: React.FC<Props> = ({ slug }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Match destination
  const dest = DESTINATIONS.find((d) => d.slug === slug) || DESTINATIONS[0];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/destinations" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Destinations
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Link to="/" className="hover:text-neutral-800">Home</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-neutral-800">Destinations</Link>
            <span>/</span>
            <span className="text-[#071228] font-bold">{dest.country}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="relative bg-[#071228] text-white rounded-3xl overflow-hidden shadow-2xl mb-12 border border-[#C5A059]/20">
          <div className="absolute inset-0 z-0">
            <img 
              src={dest.image} 
              alt={dest.country} 
              className="w-full h-full object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071228] via-[#071228]/90 to-[#071228]/60" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold mb-4 border border-white/10">
              <span className="text-base">{dest.flag}</span>
              <span className="uppercase tracking-wider">{dest.country} Study Guide</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Study in {dest.country}
            </h1>

            <p className="mt-2 text-base sm:text-lg text-[#E6C687] font-medium italic">
              "{dest.headline} — {dest.phrase}"
            </p>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {dest.overview}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-xs text-slate-400">Universities</p>
                <p className="text-lg font-bold text-white mt-0.5">{dest.universitiesCount}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Avg Tuition</p>
                <p className="text-lg font-bold text-[#E6C687] mt-0.5">{dest.tuition}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Post-Study Visa</p>
                <p className="text-lg font-bold text-white mt-0.5">{dest.workRights}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Living Costs</p>
                <p className="text-xs font-bold text-slate-200 mt-1 line-clamp-2">{dest.costOfLiving}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">

            {/* Key Facts */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                Key Study Abroad Facts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.keyFacts.map((fact, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                      {fact.label}
                    </span>
                    <p className="text-sm font-bold text-[#071228] mt-1">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Ranked Universities */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C5A059]" />
                Top Ranked Universities in {dest.country}
              </h2>
              <div className="space-y-3">
                {dest.topUniversities.map((uni, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#C5A059]/40 transition-colors"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-[#071228]">{uni.name}</h3>
                      <p className="text-xs text-neutral-500 mt-0.5">{uni.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shrink-0 self-start sm:self-center">
                      {uni.ranking}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Courses */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#C5A059]" />
                Popular Study Programs & High-Demand Fields
              </h2>
              <p className="text-xs text-neutral-500 mb-4">
                These disciplines offer the strongest graduate employment rates and work authorization sponsorship:
              </p>
              <div className="flex flex-wrap gap-2">
                {dest.popularCourses.map((course, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-[#FAF7F0] border border-[#E6C687]/40 text-[#071228] text-xs font-bold flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Admission Requirements */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C5A059]" />
                Admission & Eligibility Requirements
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <h3 className="text-xs font-bold text-[#071228] uppercase tracking-wider">Undergraduate Admissions (Bachelor's)</h3>
                  <p className="text-xs text-neutral-600 mt-1">{dest.admissionRequirements.ug}</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <h3 className="text-xs font-bold text-[#071228] uppercase tracking-wider">Postgraduate Admissions (Master's / MBA)</h3>
                  <p className="text-xs text-neutral-600 mt-1">{dest.admissionRequirements.pg}</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <h3 className="text-xs font-bold text-[#071228] uppercase tracking-wider">English Language Proficiency</h3>
                  <p className="text-xs text-neutral-600 mt-1">{dest.admissionRequirements.english}</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <h3 className="text-xs font-bold text-[#071228] uppercase tracking-wider">Primary Admission Intakes</h3>
                  <p className="text-xs text-neutral-600 mt-1">{dest.admissionRequirements.intakes}</p>
                </div>
              </div>
            </div>

            {/* Post-Study Work & Immigration */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#C5A059]" />
                Post-Study Work Authorization & Stay Back
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed bg-[#FAF7F0] p-5 rounded-2xl border border-[#E6C687]/40">
                {dest.workRightsDetail}
              </p>
            </div>

            {/* Visa Checklist */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Student Visa Checklist
              </h2>
              <ul className="space-y-3">
                {dest.visaChecklist.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Study Here */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                Top Reasons to Choose {dest.country}
              </h2>
              <div className="space-y-3">
                {dest.whyStudyHere.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                    <span className="w-5 h-5 rounded-full bg-[#071228] text-[#E6C687] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h2 className="text-xl font-display font-bold text-[#071228] mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C5A059]" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {dest.faqs.map((faq, idx) => (
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
                Aegis {dest.country} Desk
              </span>
              <h3 className="text-lg font-display font-bold text-[#071228]">
                Plan Your {dest.country} Admission
              </h3>
              <p className="text-xs text-neutral-500 mt-1.5 mb-6 leading-relaxed">
                Connect directly with our country specialist for university shortlisting, scholarship eligibility, and visa document verification.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mb-4"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free University Profile Match</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scholarship Strategy & Deadlines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Education Loan Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Visa Filing Support</span>
                </div>
              </div>

              {/* Other Destinations */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <span className="text-xs font-bold text-[#071228] block mb-3">
                  Other Study Destinations
                </span>
                <div className="space-y-2">
                  {DESTINATIONS.filter(d => d.slug !== dest.slug).slice(0, 5).map((item) => (
                    <Link
                      key={item.slug}
                      to={`/destinations/${item.slug}`}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-neutral-50 transition-colors text-xs"
                    >
                      <span className="font-medium text-[#071228] flex items-center gap-1.5">
                        <span>{item.flag}</span>
                        <span>{item.country}</span>
                      </span>
                      <span className="text-[11px] text-[#C5A059] font-bold">Explore →</span>
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
          initialNotes={`Interested in studying in ${dest.country}`}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default DestinationDetailView;
