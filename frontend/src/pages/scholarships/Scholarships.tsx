import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Globe2, 
  GraduationCap, 
  Info, 
  ArrowRight, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { SCHOLARSHIPS, Scholarship, ScholarshipCountry } from '../../data/scholarships';
import { ScholarshipCard } from '../../components/scholarships/ScholarshipCard';
import { EligibilityGuideDrawer } from '../../components/scholarships/EligibilityGuideDrawer';
import { ScholarshipConsultationModal } from '../../components/scholarships/ScholarshipConsultationModal';

const DESTINATIONS: { id: string; label: string; countryName?: ScholarshipCountry }[] = [
  { id: 'all', label: 'All Scholarships' },
  { id: 'uk', label: 'United Kingdom', countryName: 'United Kingdom' },
  { id: 'usa', label: 'United States', countryName: 'United States' },
  { id: 'canada', label: 'Canada', countryName: 'Canada' },
  { id: 'australia', label: 'Australia', countryName: 'Australia' },
  { id: 'germany', label: 'Germany', countryName: 'Germany' },
  { id: 'ireland', label: 'Ireland', countryName: 'Ireland' },
  { id: 'europe', label: 'Europe', countryName: 'Europe' }
];

export const Scholarships: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStudyLevel, setSelectedStudyLevel] = useState<string>('all');
  const [selectedCoverage, setSelectedCoverage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Modal & Drawer State
  const [guideScholarship, setGuideScholarship] = useState<Scholarship | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationScholarship, setConsultationScholarship] = useState<string>('Chevening Scholarships (UK)');
  const [consultationDestination, setConsultationDestination] = useState<string>('United Kingdom');

  // Filter scholarships
  const filteredScholarships = useMemo(() => {
    return SCHOLARSHIPS.filter((sch) => {
      // Destination filter
      if (selectedDestination !== 'all') {
        const dest = DESTINATIONS.find(d => d.id === selectedDestination);
        if (dest?.countryName && sch.country !== dest.countryName && sch.country !== 'Multiple Countries') {
          return false;
        }
      }

      // Study Level filter
      if (selectedStudyLevel !== 'all') {
        if (selectedStudyLevel === 'bachelor' && !sch.studyLevel.includes('Bachelor')) return false;
        if (selectedStudyLevel === 'master' && !sch.studyLevel.includes('Master')) return false;
        if (selectedStudyLevel === 'phd' && !sch.studyLevel.includes('PhD') && !sch.studyLevel.includes('Doctoral')) return false;
      }

      // Coverage filter
      if (selectedCoverage !== 'all') {
        if (selectedCoverage === 'full' && sch.coverageType !== 'Full') return false;
        if (selectedCoverage === 'partial' && sch.coverageType !== 'Partial') return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = sch.name.toLowerCase().includes(q);
        const matchesCountry = sch.country.toLowerCase().includes(q);
        const matchesBody = sch.administeringBody.toLowerCase().includes(q);
        const matchesFields = sch.fields.some(f => f.toLowerCase().includes(q));
        if (!matchesName && !matchesCountry && !matchesBody && !matchesFields) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [selectedDestination, selectedStudyLevel, selectedCoverage, searchQuery, sortBy]);

  const handleOpenGuide = (scholarship: Scholarship) => {
    setGuideScholarship(scholarship);
    setIsGuideOpen(true);
  };

  const handleOpenConsultation = (scholarshipName?: string, destination?: string) => {
    setConsultationScholarship(scholarshipName || 'General Scholarship Assessment');
    setConsultationDestination(destination || 'United Kingdom');
    setIsConsultationOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Banner */}
        <div className="relative bg-[#F9F6EE] border border-[#E9E2D5] rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
                <Globe2 className="w-3.5 h-3.5 text-amber-700" />
                <span>Global Scholarship Opportunities</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Fund Your Global Education <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-[#C5A059]">With Real Opportunities</span>
              </h1>

              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Explore government, university and external scholarships across the UK, USA, Canada, Australia, Germany, Ireland and Europe. Details are based on official sources and updated for the 2026–2027 intake where available.
              </p>
            </div>

            {/* Right Graduate Student Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative max-w-sm w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100">
                <img
                  src="/images/scholarships/hero-student.jpg"
                  alt="Aegis scholarship student graduate"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* Destination Filter Pills */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5" />
              Destination:
            </span>
            {DESTINATIONS.map((dest) => {
              const isActive = selectedDestination === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#071228] text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {dest.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Select Filter Row */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
            
            {/* Search Input */}
            <div className="md:col-span-5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Search
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search scholarships by name, country or discipline..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>
            </div>

            {/* Study Level Dropdown */}
            <div className="md:col-span-3">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Study Level
              </label>
              <select
                value={selectedStudyLevel}
                onChange={(e) => setSelectedStudyLevel(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              >
                <option value="all">All Levels</option>
                <option value="bachelor">Bachelor's</option>
                <option value="master">Master's</option>
                <option value="phd">Doctoral / PhD</option>
              </select>
            </div>

            {/* Coverage Type Dropdown */}
            <div className="md:col-span-3">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Coverage Type
              </label>
              <select
                value={selectedCoverage}
                onChange={(e) => setSelectedCoverage(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              >
                <option value="all">All Coverage Types</option>
                <option value="full">Full (Tuition + Living)</option>
                <option value="partial">Partial / Fee Waiver</option>
              </select>
            </div>

            {/* Search Action Button */}
            <div className="md:col-span-1">
              <button
                type="button"
                className="w-full py-2.5 rounded-xl bg-[#071228] hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center transition-all shadow-sm"
                title="Filter scholarships"
              >
                <Search className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>

          </div>
        </div>

        {/* Informational Advisory Notice */}
        <div className="mb-8 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-xs text-emerald-900 leading-relaxed">
            <strong>Scholarships are open for every intake.</strong> Aegis advisors provide continuous profile evaluation and scholarship application guidance across all upcoming intake cycles.
          </p>
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900">
              Scholarship Opportunities ({filteredScholarships.length})
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
            >
              <option value="featured">All Open Scholarships</option>
              <option value="name-asc">Scholarship Name (A–Z)</option>
            </select>
          </div>
        </div>

        {/* Scholarship Cards Grid */}
        {filteredScholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredScholarships.map((scholarship) => (
              <ScholarshipCard
                key={scholarship.id}
                scholarship={scholarship}
                onOpenGuide={handleOpenGuide}
                onOpenConsultation={handleOpenConsultation}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No scholarships found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              No scholarships matched your current filter criteria. Try clearing some filters or searching for another term.
            </p>
            <button
              onClick={() => {
                setSelectedDestination('all');
                setSelectedStudyLevel('all');
                setSelectedCoverage('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-200/70 text-amber-900 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">
                Need help finding the right scholarship?
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Our expert counsellors will help you shortlist scholarships based on your profile, destination and goals.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleOpenConsultation('General Scholarship Assessment', 'United Kingdom')}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-[#071228] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shrink-0"
          >
            <span>Book a Free Scholarship Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Slide-over Drawer for Eligibility & Guide */}
      <EligibilityGuideDrawer
        scholarship={guideScholarship}
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onOpenConsultation={(name) => handleOpenConsultation(name, guideScholarship?.country)}
      />

      {/* Consultation Modal with WhatsApp Handoff */}
      <ScholarshipConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultScholarshipName={consultationScholarship}
        defaultDestination={consultationDestination}
      />

    </div>
  );
};

export default Scholarships;
