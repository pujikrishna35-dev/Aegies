import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Calendar,
  IndianRupee,
  CheckCircle2,
  Award,
  Globe2,
  Clock,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  ExternalLink,
  PhoneCall,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { matcherService } from '../../services/matcherService';

export const UniversityDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [university, setUniversity] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const data = await matcherService.getUniversityBySlug(slug);
        setUniversity(data);
      } catch (err) {
        console.error('Failed to load university details', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-600 text-sm font-semibold">Loading university profile...</p>
      </div>
    );
  }

  if (!university) {
    return (
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">University not found</h2>
        <p className="text-slate-500 mt-2">The requested university profile could not be retrieved.</p>
        <Link to="/universities" className="mt-4 inline-block text-amber-600 font-bold text-sm">
          ← Back to Universities
        </Link>
      </div>
    );
  }

  const primaryProgram = university.programs?.[0];

  return (
    <div className="pt-24 pb-20 bg-[#FDFBF7] min-h-screen">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#071228]">Home</Link>
          <span>/</span>
          <Link to="/universities" className="hover:text-[#071228]">Universities</Link>
          <span>/</span>
          <span className="text-[#071228] font-bold">{university.name}</span>
        </div>
      </div>

      {/* Hero Banner with Campus Cover */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-[#071228] min-h-[320px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-10">
          <img
            src={university.coverImage || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop'}
            alt={university.name}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-[#071228]/80 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 p-2 overflow-hidden shrink-0 shadow-lg flex items-center justify-center">
                {university.logo ? (
                  <img src={university.logo} alt={university.name} className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <Building2 className="w-8 h-8 text-slate-400" />
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950">
                    Aegis Verified Institution
                  </span>
                  {university.ranking && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                      Global Rank #{university.ranking}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  {university.name}
                </h1>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mt-1">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{university.city}, {university.country}</span>
                </div>
              </div>
            </div>

            {/* CTA in Hero */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/book-consultation"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition-all"
              >
                BOOK A FREE CONSULTATION
              </Link>
              {university.website && (
                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Overview, Programs, Requirements */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-display font-extrabold text-[#071228] uppercase tracking-wider mb-3">
                University Overview
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {university.description}
              </p>

              {university.isDemoData && (
                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 italic">
                  * Benchmark institutional data provided for demonstration and counseling workflow simulation.
                </div>
              )}
            </div>

            {/* Featured Academic Programs */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-display font-extrabold text-[#071228] uppercase tracking-wider">
                    Available Programs & Degrees
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Recognized global courses with direct Aegis admissions guidance.
                  </p>
                </div>
                <GraduationCap className="w-6 h-6 text-amber-600" />
              </div>

              <div className="space-y-4">
                {university.programs?.map((prog: any) => (
                  <div
                    key={prog.id}
                    className="p-5 rounded-2xl bg-[#FDFBF7] border border-amber-200/60 transition-all hover:border-amber-300 hover:shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-200/40">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-white text-slate-700 border border-slate-200 mb-1.5">
                          {prog.studyLevel} • {prog.duration}
                        </span>
                        <h4 className="text-base sm:text-lg font-extrabold text-[#071228]">
                          {prog.courseName}
                        </h4>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Estimated Tuition</span>
                        <span className="text-sm font-extrabold text-[#071228]">
                          {prog.tuitionInrLakhs.max === 0
                            ? 'Tuition-Free'
                            : `₹${prog.tuitionInrLakhs.min}–${prog.tuitionInrLakhs.max} Lakhs / yr`}
                        </span>
                        <span className="text-[10px] text-slate-500 block">({prog.tuitionFeeLocal})</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs text-slate-700">
                      <div>
                        <span className="font-bold text-[#071228] block">Academic Eligibility:</span>
                        <span className="text-slate-600 text-[11px] leading-relaxed">{prog.eligibility}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#071228] block">Intakes:</span>
                        <span className="text-slate-600 text-[11px]">{prog.intakes.join(' • ')}</span>
                      </div>
                    </div>

                    {prog.scholarshipAvailable && (
                      <div className="mt-3 pt-2.5 border-t border-amber-200/40 flex items-center gap-2 text-xs text-emerald-800 font-semibold">
                        <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{prog.scholarshipDetails || 'Eligible for Aegis Partner Scholarships'}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Entry & English Requirements */}
            {primaryProgram && (
              <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-display font-extrabold text-[#071228] uppercase tracking-wider mb-2">
                  English Language Requirements
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Minimum scores required for direct unconditional admission.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-xs font-bold text-slate-500 block uppercase">IELTS</span>
                    <span className="text-xl font-extrabold text-[#071228] mt-1 block">
                      {primaryProgram.englishReq?.ieltsMin || 6.5}
                    </span>
                    <span className="text-[10px] text-slate-400">Preferred {primaryProgram.englishReq?.ieltsPreferred || 7.0}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-xs font-bold text-slate-500 block uppercase">PTE Academic</span>
                    <span className="text-xl font-extrabold text-[#071228] mt-1 block">
                      {primaryProgram.englishReq?.pteMin || 60}
                    </span>
                    <span className="text-[10px] text-slate-400">Preferred {primaryProgram.englishReq?.ptePreferred || 65}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-xs font-bold text-slate-500 block uppercase">TOEFL iBT</span>
                    <span className="text-xl font-extrabold text-[#071228] mt-1 block">
                      {primaryProgram.englishReq?.toeflMin || 85}
                    </span>
                    <span className="text-[10px] text-slate-400">Preferred {primaryProgram.englishReq?.toeflPreferred || 92}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-xs font-bold text-slate-500 block uppercase">Duolingo</span>
                    <span className="text-xl font-extrabold text-[#071228] mt-1 block">
                      {primaryProgram.englishReq?.duolingoMin || 115}
                    </span>
                    <span className="text-[10px] text-slate-400">Preferred {primaryProgram.englishReq?.duolingoPreferred || 125}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (4 cols): Sticky Aegis Assistance Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#071228] text-white shadow-xl border border-[#C5A059]/40 sticky top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AEGIS ADMISSION GUARANTEE</span>
              </div>

              <h3 className="text-xl font-display font-extrabold leading-snug">
                Apply to {university.name} with Aegis Overseas
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Receive end-to-end guidance from our senior certified counselors:
              </p>

              <div className="space-y-3 mt-6 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Fast-track offer letter processing & SOP review</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Direct application fee waivers where available</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Dedicated visa filing with 99.2% success track record</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Pre-departure accommodation & forex assistance</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <Link
                  to="/book-consultation"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>BOOK A FREE CONSULTATION</span>
                </Link>

                <Link
                  to="/university-finder"
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Back to University Finder</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
