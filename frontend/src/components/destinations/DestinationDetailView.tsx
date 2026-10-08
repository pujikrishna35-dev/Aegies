import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  Sparkles, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Clock, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Plane, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Search, 
  MapPin, 
  X, 
  Star, 
  Compass, 
  BookOpen,
  Home,
  Luggage,
  CreditCard,
  Wifi,
  Users,
  Award
} from 'lucide-react';
import { DESTINATIONS, DestinationData, RoutePhase, RouteStep } from '../../data/destinations';
import { Modal } from '../ui/Modal';
import { ConsultationForm } from '../forms/ConsultationForm';
import { generateCountryGuidePdf } from '../../utils/pdfGenerator';
import { UniversityDirectoryModal } from '../universities/UniversityDirectoryModal';
import { getUniversityWebsite } from '../../data/universityWebsites';

interface Props {
  slug: string;
}

export const DestinationDetailView: React.FC<Props> = ({ slug }) => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<RoutePhase | null>(null);
  const [selectedStep, setSelectedStep] = useState<RouteStep | null>(null);
  const [showAllUnisModal, setShowAllUnisModal] = useState(false);
  const [isRemainingCountriesOpen, setIsRemainingCountriesOpen] = useState(false);
  
  // Carousel scroll index
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Match destination
  const dest = useMemo(() => {
    return DESTINATIONS.find((d) => d.slug === slug) || DESTINATIONS[0];
  }, [slug]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Switch country handler
  const handleCountrySwitch = (countrySlug: string) => {
    navigate(`/destinations/${countrySlug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // University carousel navigation
  const nextSlide = () => {
    if (carouselIndex < dest.topUniversities.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(0);
    }
  };

  const prevSlide = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    } else {
      setCarouselIndex(dest.topUniversities.length - 1);
    }
  };

  // Dynamic values
  const degreeLengthFact = dest.keyFacts.find(f => f.label.toLowerCase().includes('degree'))?.value || "1 Year Master's / 3-4 Years UG";
  const partTimeFact = dest.keyFacts.find(f => f.label.toLowerCase().includes('part-time'))?.value || "20 Hours / Week";
  const postStudyFact = dest.keyFacts.find(f => f.label.toLowerCase().includes('post-study') || f.label.toLowerCase().includes('jobseeker') || f.label.toLowerCase().includes('stay back'))?.value || dest.workRights;
  const intakesFact = dest.keyFacts.find(f => f.label.toLowerCase().includes('intake'))?.value || dest.admissionRequirements.intakes;

  // Visible FAQs
  const visibleFaqs = showAllFaqs ? dest.faqs : dest.faqs.slice(0, 4);

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#FDFBF7] min-h-screen text-[#071228] selection:bg-[#C5A059]/20 selection:text-[#071228]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* ========================================================
            1. BREADCRUMBS
        ======================================================== */}
        <div className="flex items-center justify-between gap-4 text-xs">
          <Link 
            to="/destinations" 
            className="inline-flex items-center gap-1.5 font-bold text-[#C5A059] uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Destinations
          </Link>

          <div className="flex items-center gap-2 text-neutral-500 font-medium">
            <Link to="/" className="hover:text-neutral-800">Home</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-neutral-800">Destinations</Link>
            <span>/</span>
            <span className="text-[#071228] font-bold">{dest.country}</span>
          </div>
        </div>

        {/* ========================================================
            2. COUNTRY HERO
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-[0_4px_24px_rgba(7,18,40,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-10 lg:p-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F0] border border-[#E6C687]/60 text-xs font-bold text-[#071228]">
                <span className="text-base">{dest.flag}</span>
                <span className="uppercase tracking-widest text-[11px] font-extrabold text-[#9A7B38]">STUDY IN</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#071228] uppercase leading-[1.05]">
                {dest.country}
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl">
                {dest.overview}
              </p>

              {/* Key Quick Stat Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold text-[#071228] leading-tight">{dest.universitiesCount}</p>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Universities</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold text-[#071228] truncate leading-tight">{dest.workRights.split('(')[0]}</p>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Post-Study</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold text-[#071228] truncate leading-tight">
                      {dest.slug === 'uk' ? '1 Year' : dest.slug === 'usa' ? '2 Years' : 'Top Tier'}
                    </p>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Master's Degree</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold text-[#071228] truncate leading-tight">
                      {partTimeFact.split('/')[0]}
                    </p>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Part-Time Work</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const journeySection = document.getElementById('country-journey-map');
                    if (journeySection) {
                      journeySection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setIsConsultModalOpen(true);
                    }
                  }}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#C5A059] hover:to-[#B38F46] text-[#071228] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Plan Your {dest.slug === 'uk' ? 'UK' : dest.slug === 'usa' ? 'USA' : dest.country} Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsGuideModalOpen(true)}
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-[#071228] font-bold text-xs uppercase tracking-wider border border-neutral-300 transition-all flex items-center gap-2 shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#C5A059]" />
                  <span>Download {dest.slug === 'uk' ? 'UK' : dest.slug === 'usa' ? 'USA' : dest.country} Guide</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/11 border border-neutral-200/80 bg-neutral-100 group">
                <img 
                  src={dest.heroImage || dest.image} 
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Annotation Quote */}
                {dest.quoteAnnotation && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-[#E6C687]/40 max-w-[200px] text-right">
                    <p className="font-serif italic text-xs font-semibold text-[#071228] leading-tight">
                      "{dest.quoteAnnotation}"
                    </p>
                    <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-bold block mt-0.5">
                      Aegis Global Study
                    </span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{dest.flag}</span>
                    <div>
                      <p className="text-xs font-extrabold text-[#071228]">{dest.country}</p>
                      <p className="text-[10px] text-neutral-500 font-medium">{dest.universitiesCount} Universities Listed</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="px-3 py-1.5 rounded-lg bg-[#071228] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#071228] transition-colors"
                  >
                    Get Free Advice
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            3. COUNTRY SWITCHER (PILL BAR)
        ======================================================== */}
        <div className="bg-white rounded-2xl border border-neutral-200/80 p-2.5 shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {DESTINATIONS.map((c) => {
              const isActive = c.slug === dest.slug;
              return (
                <button
                  key={c.slug}
                  onClick={() => handleCountrySwitch(c.slug)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#071228] text-[#E6C687] border-2 border-[#C5A059] shadow-md ring-2 ring-[#C5A059]/20'
                      : 'bg-[#273244] text-white hover:bg-[#374458] border border-slate-600/70 shadow-xs'
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
                  <span>{c.country}</span>
                </button>
              );
            })}

            {/* Field for Remaining Countries */}
            <button
              onClick={() => setIsRemainingCountriesOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 bg-[#273244] text-white hover:bg-[#374458] border border-slate-600/70 shadow-xs"
            >
              <span className="text-base">🌐</span>
              <span>Remaining Countries</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            4. KEY STUDY ABROAD FACTS
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-[#C5A059] shrink-0 border border-amber-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071228]">
                  Key Study Abroad Facts
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  Everything you need to know about studying in {dest.country} at a glance.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsGuideModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF7F0] hover:bg-[#F3EEDF] text-[#071228] border border-[#E6C687]/60 text-xs font-bold transition-colors shrink-0 self-start sm:self-auto"
            >
              <Download className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Download {dest.slug === 'uk' ? 'UK' : dest.slug === 'usa' ? 'USA' : dest.country} Guide</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Fact 1: Intakes */}
            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 hover:border-[#C5A059]/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#C5A059] mb-3">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block">
                Intakes
              </span>
              <p className="text-sm font-bold text-[#071228] mt-1 leading-snug">
                {intakesFact}
              </p>
            </div>

            {/* Fact 2: Degree Length */}
            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 hover:border-[#C5A059]/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#C5A059] mb-3">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block">
                Average Degree Length
              </span>
              <p className="text-sm font-bold text-[#071228] mt-1 leading-snug">
                {degreeLengthFact}
              </p>
            </div>

            {/* Fact 3: Part-Time Work */}
            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 hover:border-[#C5A059]/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#C5A059] mb-3">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block">
                Part-Time Work
              </span>
              <p className="text-sm font-bold text-[#071228] mt-1 leading-snug">
                {partTimeFact}
              </p>
            </div>

            {/* Fact 4: Post-Study Work */}
            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 hover:border-[#C5A059]/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#C5A059] mb-3">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block">
                Post-Study Work
              </span>
              <p className="text-sm font-bold text-[#071228] mt-1 leading-snug">
                {postStudyFact}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            5. TOP RANKED UNIVERSITIES (NOW INSIDE DESTINATIONS)
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-[#C5A059] shrink-0 border border-amber-100">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071228]">
                  Top Ranked Universities in {dest.country}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  Study at globally recognized universities with world-class faculty and research opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => setShowAllUnisModal(true)}
                className="px-4 py-2 rounded-xl bg-[#FAF7F0] hover:bg-[#F3EEDF] text-[#071228] border border-[#E6C687]/60 text-xs font-bold transition-colors flex items-center gap-1.5 mr-2"
              >
                <span>View All {dest.slug === 'uk' ? 'UK' : dest.slug === 'usa' ? 'USA' : dest.country} Universities</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>

              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-xl bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors"
                aria-label="Previous universities"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-xl bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors"
                aria-label="Next universities"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Universities Grid / Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {dest.topUniversities.slice(0, 5).map((uni, idx) => (
              <div
                key={idx}
                onClick={() => {
                  const url = getUniversityWebsite(uni.name, uni.slug);
                  if (url && url !== '#') {
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="group bg-[#FDFBF7] rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer"
              >
                {/* Photo */}
                <div className="relative h-36 overflow-hidden bg-neutral-100">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Ranking Badge */}
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-extrabold text-[#071228] shadow-xs border border-white/60">
                    {uni.ranking}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold font-serif text-[#071228] group-hover:text-amber-700 transition-colors line-clamp-1">
                      {uni.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-[11px] text-neutral-500 mt-1">
                      <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
                      <span className="truncate">{uni.location}</span>
                    </div>

                    {uni.popularPrograms && uni.popularPrograms.length > 0 && (
                      <div className="mt-2.5 pt-2.5 border-t border-neutral-200/60">
                        <span className="text-[9.5px] uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                          Popular Programs
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {uni.popularPrograms.slice(0, 2).map((prog, pIdx) => (
                            <span 
                              key={pIdx} 
                              className="px-2 py-0.5 rounded-md bg-white border border-neutral-200 text-[10px] text-neutral-700 font-medium"
                            >
                              {prog}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-neutral-200/60 flex items-center justify-end text-xs">
                    <a
                      href={getUniversityWebsite(uni.name, uni.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        const url = getUniversityWebsite(uni.name, uni.slug);
                        if (url && url !== '#') {
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      className="text-[11px] font-bold text-[#C5A059] hover:text-amber-800 inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Explore University</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* In-page prompt banner */}
          <div className="mt-6 p-4 rounded-2xl bg-[#FAF7F0] border border-[#E6C687]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="font-semibold text-neutral-700 text-center sm:text-left">
              Want to see all {dest.universitiesCount} {dest.country} institutions with detailed entry requirements?
            </span>
            <button
              onClick={() => setShowAllUnisModal(true)}
              className="px-4 py-2 rounded-xl bg-[#071228] text-white font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#071228] transition-colors shrink-0"
            >
              Open {dest.slug === 'uk' ? 'UK' : dest.slug === 'usa' ? 'USA' : dest.country} University Explorer →
            </button>
          </div>
        </div>

        {/* ========================================================
            6. POPULAR STUDY PROGRAMS & HIGH-DEMAND FIELDS
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-[#C5A059] shrink-0 border border-amber-100">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071228]">
                  Popular Study Programs & High-Demand Fields
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  These disciplines offer the strongest graduate employment rates and work authorization sponsorship.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 2-Column Grid of Pills */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {dest.popularCourses.map((course, idx) => (
                <div
                  key={idx}
                  onClick={() => setIsConsultModalOpen(true)}
                  className="p-4 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 hover:border-[#C5A059] hover:bg-[#FAF7F0] cursor-pointer transition-all flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#071228] group-hover:text-amber-800 transition-colors truncate">
                      {course}
                    </p>
                    <span className="text-[10px] text-neutral-400 font-medium">In High Demand</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#C5A059] group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>

            {/* Right Photo Promo Banner */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-16/10 border border-neutral-200/80 group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                  alt="Build Your Career"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight mb-3">
                    Build Your Global Career in {dest.country}
                  </h3>
                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <span>Talk to a {dest.slug === 'uk' ? 'UK' : dest.slug === 'usa' ? 'USA' : dest.country} Counsellor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            7. ADMISSION & ELIGIBILITY REQUIREMENTS
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-[#C5A059] shrink-0 border border-amber-100">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071228]">
                  Admission & Eligibility Requirements
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  Understand academic and language benchmarks to apply to {dest.country} universities.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: UG */}
            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-[#C5A059]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#071228]">
                    Undergraduate Admissions (Bachelor's)
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-neutral-600">
                  {dest.admissionRequirements.ugPoints ? (
                    dest.admissionRequirements.ugPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{dest.admissionRequirements.ug}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 text-[11px] text-neutral-400 italic">
                * Course-specific thresholds apply.
              </div>
            </div>

            {/* Card 2: PG */}
            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-[#C5A059]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#071228]">
                    Postgraduate Admissions (Master's / MBA)
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-neutral-600">
                  {dest.admissionRequirements.pgPoints ? (
                    dest.admissionRequirements.pgPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{dest.admissionRequirements.pg}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 text-[11px] text-neutral-400 italic">
                * Evaluated on degree background and credit matching.
              </div>
            </div>

            {/* Card 3: English */}
            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-[#C5A059]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#071228]">
                    English Language Proficiency
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-neutral-600">
                  {dest.admissionRequirements.englishPoints ? (
                    dest.admissionRequirements.englishPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{dest.admissionRequirements.english}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 text-[11px] text-neutral-400 italic">
                * Score requirements vary by program and faculty.
              </div>
            </div>
          </div>

          {/* Academic Disclaimer Box */}
          {dest.admissionRequirements.disclaimer && (
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF7F0] border border-[#E6C687]/40 text-xs text-neutral-600 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-[#071228]">Important Note:</strong> {dest.admissionRequirements.disclaimer}
              </p>
            </div>
          )}
        </div>

        {/* ========================================================
            8. STUDENT VISA CHECKLIST
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071228]">
                  Student Visa Checklist
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  Key documents required for a {dest.country} student visa.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {dest.visaChecklist.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FDFBF7] border border-neutral-200/80 flex items-start gap-3 hover:border-emerald-300 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-[#FAF7F0] border border-[#E6C687]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-neutral-700">
              Need assistance preparing your financial sponsorship, affidavits, or biometric slot?
            </span>
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#071228] text-white font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#071228] transition-colors shrink-0"
            >
              Get Visa Guidance →
            </button>
          </div>
        </div>

        {/* ========================================================
            9. COUNTRY-SPECIFIC ROUTE MAP: YOUR JOURNEY
        ======================================================== */}
        <div id="country-journey-map" className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-[#C5A059] shrink-0 border border-amber-100">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071228]">
                  {dest.journeyMap.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  {dest.journeyMap.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (dest.journeyMap.phases.length > 0) {
                  setSelectedPhase(dest.journeyMap.phases[0]);
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF7F0] hover:bg-[#F3EEDF] text-[#071228] border border-[#E6C687]/60 text-xs font-bold transition-colors shrink-0 self-start sm:self-auto"
            >
              <span>View Full Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>

          {/* DESKTOP 5-PHASE HORIZONTAL ROADMAP */}
          <div className="hidden lg:block space-y-8">
            {/* Top Connected Timeline Tracker */}
            <div className="relative flex items-center justify-between px-8 py-4">
              <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-neutral-200 -translate-y-1/2 z-0" />

              {dest.journeyMap.phases.map((phase, pIdx) => (
                <div key={pIdx} className="relative z-10 flex flex-col items-center">
                  <button
                    onClick={() => setSelectedPhase(phase)}
                    className="w-11 h-11 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-md hover:scale-110 transition-transform border-4 border-white cursor-pointer"
                  >
                    {phase.phaseNumber}
                  </button>
                  <span className="text-xs font-extrabold text-[#071228] mt-2 block">
                    {phase.name}
                  </span>
                </div>
              ))}
            </div>

            {/* 5 Vertical Phase Columns */}
            <div className="grid grid-cols-5 gap-4">
              {dest.journeyMap.phases.map((phase, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-[#FDFBF7] rounded-2xl border border-neutral-200/90 p-4 flex flex-col justify-between hover:border-[#C5A059]/60 transition-colors shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="pb-2 border-b border-neutral-200/80">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C5A059] block">
                        Phase {phase.phaseNumber}
                      </span>
                      <h3 className="text-xs font-bold text-[#071228]">
                        {phase.subtitle}
                      </h3>
                    </div>

                    <div className="space-y-2.5">
                      {phase.steps.map((st, sIdx) => (
                        <div
                          key={sIdx}
                          onClick={() => setSelectedStep(st)}
                          className="flex items-start gap-2 p-2 rounded-xl bg-white border border-neutral-200/70 hover:border-[#C5A059] cursor-pointer transition-colors text-left"
                        >
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                            {st.stepNumber}
                          </span>
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold text-[#071228] leading-tight line-clamp-2">
                              {st.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPhase(phase)}
                    className="mt-4 pt-2.5 border-t border-neutral-200/60 w-full text-center text-[11px] font-bold text-[#C5A059] hover:text-amber-800 flex items-center justify-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE VERTICAL TIMELINE */}
          <div className="lg:hidden space-y-6">
            {dest.journeyMap.phases.map((phase, pIdx) => (
              <div key={pIdx} className="border border-neutral-200 rounded-2xl p-5 bg-[#FDFBF7]">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-200">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                    {phase.phaseNumber}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#071228]">{phase.name}</h3>
                    <p className="text-xs text-neutral-500">{phase.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-3 pl-2 border-l-2 border-blue-200 ml-4">
                  {phase.steps.map((st, sIdx) => (
                    <div
                      key={sIdx}
                      onClick={() => setSelectedStep(st)}
                      className="p-3 bg-white rounded-xl border border-neutral-200 shadow-xs cursor-pointer -ml-5 pl-4"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px]">
                          Step {st.stepNumber}
                        </span>
                        <h4 className="text-xs font-bold text-[#071228]">{st.title}</h4>
                      </div>
                      <p className="text-[11px] text-neutral-600 leading-relaxed">{st.shortDesc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            10. ARRIVAL & SETTLEMENT CONTINUITY
        ======================================================== */}
        <div className="bg-[#071228] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-[#C5A059]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#E6C687] block mb-1">
                  POST-VISA JOURNEY CONTINUITY
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Arrival & Settlement Services for {dest.country}
                </h2>
                <p className="text-xs sm:text-slate-300 mt-1 max-w-xl">
                  Aegis stays with you beyond visa approval. We assist with housing, airport transfers, banking, and university matriculation.
                </p>
              </div>

              <Link
                to="/services"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all shrink-0 self-start sm:self-auto flex items-center gap-1.5"
              >
                <span>View Relocation Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              <Link to="/services/accommodation" className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-center transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#E6C687] mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Home className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white leading-tight">Accommodation</p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Halls & PBSA</span>
              </Link>

              <Link to="/services/airport-pickup" className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-center transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#E6C687] mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Luggage className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white leading-tight">Airport Pickup</p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Direct Transfer</span>
              </Link>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#E6C687] mx-auto flex items-center justify-center mb-2">
                  <CreditCard className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white leading-tight">Forex & Bank</p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Currency Setup</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#E6C687] mx-auto flex items-center justify-center mb-2">
                  <Wifi className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white leading-tight">SIM & Data</p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Instant Connectivity</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#E6C687] mx-auto flex items-center justify-center mb-2">
                  <Compass className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white leading-tight">Pre-Departure</p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Briefing & Advice</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#E6C687] mx-auto flex items-center justify-center mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white leading-tight">Campus Enrolment</p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Induction Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            11. TOP REASONS & FREQUENTLY ASKED QUESTIONS
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Top Reasons (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-[#C5A059] shrink-0 border border-amber-100">
                <Star className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg font-serif font-bold text-[#071228]">
                  Top Reasons to Choose {dest.country}
                </h2>
                <p className="text-[11px] text-neutral-500">Why thousands of Indian students select {dest.country}.</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {dest.whyStudyHere.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FDFBF7] border border-neutral-200/70">
                  <span className="w-6 h-6 rounded-full bg-[#071228] text-[#E6C687] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-snug font-medium">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-[#C5A059] shrink-0 border border-amber-100">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-[#071228]">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-[11px] text-neutral-500">Official answers on admission, visas and timelines.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {visibleFaqs.map((faq, idx) => (
                <div key={idx} className="border border-neutral-200/80 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#071228] hover:bg-neutral-50 transition-colors"
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

            {dest.faqs.length > 4 && (
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="text-xs font-bold text-[#C5A059] hover:underline block pt-2"
              >
                {showAllFaqs ? 'Show Fewer FAQs ↑' : 'View All FAQs →'}
              </button>
            )}
          </div>

        </div>

        {/* ========================================================
            12. FINAL COUNSELLING CTA
        ======================================================== */}
        <div className="bg-gradient-to-r from-[#071228] via-[#0D1D3A] to-[#071228] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-[#C5A059]/20 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#E6C687] block">
              START YOUR ADMISSION TODAY
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Ready to Study in {dest.country}?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our {dest.country} admissions advisors assist you with personalized university shortlisting, scholarship strategies, and end-to-end visa filing with zero hidden fees.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => setIsGuideModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#C5A059]" />
                <span>Download {dest.slug === 'uk' ? 'UK' : dest.slug === 'usa' ? 'USA' : dest.country} Guide</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================
          MODALS & DRAWERS
      ======================================================== */}

      {/* 1. Free Consultation Modal */}
      <Modal isOpen={isConsultModalOpen} onClose={() => setIsConsultModalOpen(false)}>
        <ConsultationForm
          initialNotes={`Interested in studying in ${dest.country}`}
          onSuccess={() => setIsConsultModalOpen(false)}
        />
      </Modal>

      {/* 2. Download Guide Modal */}
      <Modal isOpen={isGuideModalOpen} onClose={() => setIsGuideModalOpen(false)} hideHeader maxWidth="xl">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{dest.flag}</span>
              <div>
                <h3 className="text-lg font-serif font-bold text-[#071228]">
                  {dest.country} Official Application Guide
                </h3>
                <p className="text-xs text-neutral-500">Comprehensive study, admissions and visa roadmap</p>
              </div>
            </div>
            <button
              onClick={() => setIsGuideModalOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E6C687]/40 text-xs text-neutral-700 leading-relaxed space-y-2">
            <p className="font-bold text-[#071228]">Aegis Overseas Official Guidebook</p>
            <p>
              This guide compiles institutional entry frameworks, visa requirements, timeline milestones, and settlement essentials for students heading to {dest.country}.
            </p>
          </div>

          {dest.guideChapters && dest.guideChapters.length > 0 ? (
            <div className="space-y-4">
              {dest.guideChapters.map((chap, cIdx) => (
                <div key={cIdx} className="p-4 rounded-xl border border-neutral-200 bg-[#FDFBF7] space-y-2">
                  <h4 className="text-xs font-bold text-[#071228] uppercase tracking-wider">
                    {chap.title}
                  </h4>
                  <p className="text-xs text-neutral-600">{chap.summary}</p>
                  <ul className="space-y-1 pt-1">
                    {chap.items.map((it, itIdx) => (
                      <li key={itIdx} className="text-xs text-neutral-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3 text-xs text-neutral-700">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <p className="font-bold">1. Why Study in {dest.country}</p>
                <p className="mt-1 text-neutral-600">{dest.overview}</p>
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <p className="font-bold">2. Key Facts & Intake Schedules</p>
                <p className="mt-1 text-neutral-600">Intakes: {intakesFact} | Post-Study Work: {dest.workRights}</p>
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <p className="font-bold">3. Visa Documentation & Funding</p>
                <p className="mt-1 text-neutral-600">Proof of funds: {dest.costOfLiving}</p>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
            <span className="text-[11px] text-neutral-500">Document version: 2026/2027 Academic Intake</span>
            <button
              onClick={() => {
                generateCountryGuidePdf(dest);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#071228] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#071228] transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Guide</span>
            </button>
          </div>
        </div>
      </Modal>

      {/* 3. Detailed Phase Breakdown Modal */}
      {selectedPhase && (
        <Modal isOpen={!!selectedPhase} onClose={() => setSelectedPhase(null)} hideHeader maxWidth="xl">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                  {selectedPhase.phaseNumber}
                </span>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#071228]">
                    Phase {selectedPhase.phaseNumber}: {selectedPhase.name}
                  </h3>
                  <p className="text-xs text-neutral-500">{selectedPhase.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPhase(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {selectedPhase.steps.map((st, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FDFBF7] border border-neutral-200/90 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-extrabold">
                      Step {st.stepNumber}
                    </span>
                    <h4 className="text-sm font-bold text-[#071228]">{st.title}</h4>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {st.fullDesc || st.shortDesc}
                  </p>
                  {st.keyAction && (
                    <div className="pt-2 text-[11px] font-semibold text-[#C5A059] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Key Action: {st.keyAction}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Need personal guidance for this stage?</span>
              <button
                onClick={() => {
                  setSelectedPhase(null);
                  setIsConsultModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-[#071228] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#071228] transition-colors"
              >
                Speak with Aegis Counsellor
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* 4. Single Step Details Modal */}
      {selectedStep && (
        <Modal isOpen={!!selectedStep} onClose={() => setSelectedStep(null)} hideHeader maxWidth="lg">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-xs font-black">
                  Step {selectedStep.stepNumber}
                </span>
                <h3 className="text-sm font-bold text-[#071228]">{selectedStep.title}</h3>
              </div>
              <button
                onClick={() => setSelectedStep(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-700 leading-relaxed">
              {selectedStep.fullDesc || selectedStep.shortDesc}
            </p>

            {selectedStep.keyAction && (
              <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E6C687]/40 text-xs font-semibold text-[#071228]">
                Key Milestone: {selectedStep.keyAction}
              </div>
            )}

            <div className="pt-3 border-t border-neutral-200 flex justify-end">
              <button
                onClick={() => {
                  setSelectedStep(null);
                  setIsConsultModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-[#071228] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#071228] transition-colors"
              >
                Ask a Question About Step {selectedStep.stepNumber}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* 5. In-Page Destination University Directory Modal */}
      <UniversityDirectoryModal
        isOpen={showAllUnisModal}
        onClose={() => setShowAllUnisModal(false)}
        countrySlug={dest.slug}
        countryName={dest.country}
        landmarkImage={dest.heroImage || dest.image}
        flagUrl={dest.flag}
      />

      {/* 6. Remaining Countries Modal */}
      {isRemainingCountriesOpen && (
        <Modal isOpen={isRemainingCountriesOpen} onClose={() => setIsRemainingCountriesOpen(false)} hideHeader maxWidth="2xl">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#071228]">
                    Explore Remaining Study Destinations
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Aegis provides admission & visa support across 30+ countries worldwide
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsRemainingCountriesOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              Looking for a country not listed above? Aegis counsellors process university admissions, scholarship evaluations, and student visas for these popular international study hubs:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: 'Singapore', flag: '🇸🇬', desc: 'NUS, NTU, SMU, James Cook' },
                { name: 'UAE / Dubai', flag: '🇦🇪', desc: 'Heriot-Watt, Middlesex, Wollongong' },
                { name: 'France', flag: '🇫🇷', desc: 'HEC Paris, Sorbonne, ESSEC' },
                { name: 'Italy', flag: '🇮🇹', desc: 'Politecnico di Milano, Bocconi' },
                { name: 'Netherlands', flag: '🇳🇱', desc: 'TU Delft, Univ of Amsterdam' },
                { name: 'Sweden', flag: '🇸🇪', desc: 'KTH, Lund, Chalmers' },
                { name: 'Switzerland', flag: '🇨🇭', desc: 'ETH Zurich, EPFL, Geneva' },
                { name: 'Spain', flag: '🇪🇸', desc: 'IE University, ESADE, Barcelona' },
                { name: 'Malaysia', flag: '🇲🇾', desc: "Monash, Nottingham, Taylor's" },
                { name: 'Japan', flag: '🇯🇵', desc: 'Univ of Tokyo, Kyoto University' },
                { name: 'Poland', flag: '🇵🇱', desc: 'Univ of Warsaw, Jagiellonian' },
                { name: 'Cyprus & Malta', flag: '🇲🇹', desc: 'European EU-accredited colleges' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setIsRemainingCountriesOpen(false);
                    setIsConsultModalOpen(true);
                  }}
                  className="p-3.5 rounded-xl bg-[#FDFBF7] border border-neutral-200 hover:border-[#C5A059] hover:bg-[#FAF7F0] cursor-pointer transition-all flex items-start gap-2.5 group"
                >
                  <span className="text-xl shrink-0 mt-0.5">{item.flag}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#071228] group-hover:text-amber-800 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E6C687]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-neutral-700">
                Want custom university options for any of these countries?
              </span>
              <button
                onClick={() => {
                  setIsRemainingCountriesOpen(false);
                  setIsConsultModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-[#071228] text-white font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#071228] transition-colors shrink-0"
              >
                Consult a Specialist →
              </button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};

export default DestinationDetailView;
