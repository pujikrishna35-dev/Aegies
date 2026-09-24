import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Search, 
  Globe2, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Filter, 
  DollarSign, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck,
  Building2,
  Send
} from 'lucide-react';
import { SCHOLARSHIPS, SCHOLARSHIP_CATEGORIES, ScholarshipData } from '../../data/scholarships';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const Scholarships: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCoverage, setSelectedCoverage] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarshipTitle, setSelectedScholarshipTitle] = useState('');

  // Filter scholarships
  const filteredScholarships = useMemo(() => {
    return SCHOLARSHIPS.filter((sch) => {
      // Category / Country filter
      if (selectedCategory !== 'all') {
        const countryMatch = sch.country.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          (selectedCategory === 'europe' && sch.countryCode === 'EU') ||
          (selectedCategory === 'uk' && sch.countryCode === 'GB');
        if (!countryMatch) return false;
      }

      // Degree Level filter
      if (selectedLevel !== 'all') {
        if (!sch.degreeLevel.includes(selectedLevel as any) && !sch.degreeLevel.includes('All Levels')) {
          return false;
        }
      }

      // Coverage filter
      if (selectedCoverage !== 'all') {
        if (sch.coverageType !== selectedCoverage) return false;
      }

      // Text search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = sch.title.toLowerCase().includes(query);
        const matchesProvider = sch.provider.toLowerCase().includes(query);
        const matchesCountry = sch.country.toLowerCase().includes(query);
        const matchesFields = sch.fieldOfStudy.some(f => f.toLowerCase().includes(query));
        if (!matchesTitle && !matchesProvider && !matchesCountry && !matchesFields) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedCoverage]);

  const handleOpenConsultation = (scholarshipTitle?: string) => {
    setSelectedScholarshipTitle(scholarshipTitle || 'General Scholarship Assessment');
    setIsModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scholarshipFaqs = [
    {
      q: 'Can I apply for multiple scholarships at the same time?',
      a: 'Yes! We strongly recommend applying for both government-funded awards (such as Chevening, DAAD, or Fulbright) and institutional merit waivers from universities simultaneously. Aegis advisors curate a personalized scholarship portfolio so you maximize your funding opportunities without conflicting commitments.'
    },
    {
      q: 'Do I need a confirmed admission offer before applying for scholarships?',
      a: 'This depends on the scholarship type. Government scholarships like Chevening and Fulbright allow you to apply concurrently with your university applications, though you must secure an offer prior to final award confirmation. In contrast, many university merit waivers and GREAT Scholarships require you to have submitted an admission application or obtained an offer letter first.'
    },
    {
      q: 'How does Aegis assist in winning competitive government scholarships?',
      a: 'We provide end-to-end guidance including leadership essay brainstorming, review by past scholars, structuring compelling Statements of Purpose, CV optimization adhering to international formats, and rigorous mock interview panels simulating actual high-commission interview conditions.'
    },
    {
      q: 'Are scholarships only awarded for top GPA/academic scores?',
      a: 'While strong academics are important, many major scholarships place equal or greater weight on leadership potential, community impact, research innovation, and your clear vision of how your degree will address real-world socio-economic problems in your home country.'
    },
    {
      q: 'What is the average timeline for scholarship decisions?',
      a: 'University entrance waivers are typically announced alongside or within 2-4 weeks of receiving your conditional admission offer. Major national government scholarships (Chevening, Fulbright, Australia Awards) operate on 6 to 9-month evaluation cycles with multi-stage committees and interviews.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Scholarships & Financial Aid</span>
        </div>

        {/* Hero Section */}
        <div className="relative bg-[#071228] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl mb-12 border border-[#C5A059]/20">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 bottom-0 opacity-10 hidden lg:block pointer-events-none">
            <Award className="w-80 h-80 text-[#C5A059]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#E6C687] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Verified Global Scholarships & Grants 2026-2027
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Fund Your Global Degree With <span className="text-[#C5A059]">Prestigious Scholarships</span>
            </h1>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore government-sponsored fellowships, full tuition waivers, and university merit grants across the UK, USA, Canada, Australia, Germany, Ireland, and Europe. Our certified advisors have secured over $14.5M in non-repayable student aid.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#E6C687]">$14.5M+</p>
                <p className="text-xs text-slate-400 mt-1">Scholarships Secured</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1">Full-Ride Awards Available</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#E6C687]">850+</p>
                <p className="text-xs text-slate-400 mt-1">Partner Universities</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-white">1-on-1</p>
                <p className="text-xs text-slate-400 mt-1">Essay Mentorship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search scholarship name, country, or study discipline..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] bg-white text-neutral-700"
              >
                <option value="all">All Study Levels</option>
                <option value="Master's">Master's Degree</option>
                <option value="Bachelor's">Bachelor's Degree</option>
                <option value="PhD">PhD / Doctoral</option>
              </select>
            </div>

            {/* Coverage Filter */}
            <div>
              <select
                value={selectedCoverage}
                onChange={(e) => setSelectedCoverage(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] bg-white text-neutral-700"
              >
                <option value="all">All Coverage Types</option>
                <option value="Full Tuition + Living">Full Tuition + Living Allowance</option>
                <option value="Partial Tuition Waiver">Partial Tuition Waiver</option>
                <option value="Fixed Grant">Fixed Annual Grant</option>
              </select>
            </div>

          </div>

          {/* Quick Category Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-neutral-100">
            <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Destination:
            </span>
            {SCHOLARSHIP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#071228] text-[#E6C687] shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
            Showing <span className="text-[#071228]">{filteredScholarships.length}</span> Verified Scholarship Programs
          </p>
          {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all' || selectedCoverage !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSelectedCoverage('all');
              }}
              className="text-xs text-[#C5A059] font-bold hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Scholarships Grid */}
        {filteredScholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredScholarships.map((scholarship) => (
              <div
                key={scholarship.id}
                className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Card Header */}
                  <div className="p-6 border-b border-neutral-100">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{scholarship.flag}</span>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                            {scholarship.country}
                          </span>
                          <span className="text-[10px] font-semibold text-neutral-400">
                            {scholarship.providerType} Award
                          </span>
                        </div>
                      </div>

                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        scholarship.coverageType === 'Full Tuition + Living'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : scholarship.coverageType === 'Fixed Grant'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {scholarship.coverageType}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold font-display text-[#071228] group-hover:text-amber-700 transition-colors leading-snug">
                      <Link to={`/scholarships/${scholarship.slug}`}>
                        {scholarship.title}
                      </Link>
                    </h2>
                    
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                      By {scholarship.provider}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* Award Value Callout */}
                    <div className="bg-[#FAF7F0] border border-[#E6C687]/40 rounded-xl p-3.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#A07A2B] block">
                        Estimated Award Value
                      </span>
                      <p className="text-sm font-bold text-[#071228] mt-0.5">
                        {scholarship.awardAmount}
                      </p>
                    </div>

                    {/* Degree Levels & Cycle */}
                    <div className="space-y-2 text-xs text-neutral-600">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span><strong className="text-neutral-700">Level:</strong> {scholarship.degreeLevel.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span><strong className="text-neutral-700">Deadline:</strong> {scholarship.deadline}</span>
                      </div>
                    </div>

                    {/* Study Areas Tags */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                        Eligible Disciplines
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {scholarship.fieldOfStudy.slice(0, 3).map((field, idx) => (
                          <span 
                            key={idx} 
                            className="bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md text-[11px]"
                          >
                            {field}
                          </span>
                        ))}
                        {scholarship.fieldOfStudy.length > 3 && (
                          <span className="bg-neutral-100 text-neutral-400 px-1.5 py-0.5 rounded-md text-[10px]">
                            +{scholarship.fieldOfStudy.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    to={`/scholarships/${scholarship.slug}`}
                    className="flex-1 text-center py-2.5 px-3 rounded-xl border border-neutral-200 text-xs font-bold text-[#071228] hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1"
                  >
                    Eligibility & Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => handleOpenConsultation(scholarship.title)}
                    className="py-2.5 px-4 rounded-xl bg-[#071228] hover:bg-[#C5A059] text-white hover:text-[#071228] text-xs font-bold transition-all shadow-xs"
                    title="Check your eligibility with an advisor"
                  >
                    Check Eligibility
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center my-8">
            <Award className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-neutral-700">No scholarships found matching your criteria</h3>
            <p className="text-xs text-neutral-500 mt-1 mb-4">Try clearing some filters or searching for another keyword.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSelectedCoverage('all');
              }}
              className="px-4 py-2 bg-[#071228] text-white rounded-xl text-xs font-bold hover:bg-[#C5A059] hover:text-[#071228] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4-Step Strategic Scholarship Roadmap */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Our Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              How Aegis Secures Maximum Scholarship Aid
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-2">
              Winning competitive international scholarships requires early positioning, standout leadership narratives, and university alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#E6C687]/30 relative">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-sm flex items-center justify-center mb-4">
                01
              </span>
              <h3 className="text-sm font-bold text-[#071228] mb-2">Profile & Eligibility Audit</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We evaluate your GPA, extracurriculars, research papers, and work experience to match you with realistic high-value awards.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#E6C687]/30 relative">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-sm flex items-center justify-center mb-4">
                02
              </span>
              <h3 className="text-sm font-bold text-[#071228] mb-2">Essay & SOP Mentorship</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our editorial team helps you structure compelling leadership, networking, and development impact essays that stand out.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#E6C687]/30 relative">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-sm flex items-center justify-center mb-4">
                03
              </span>
              <h3 className="text-sm font-bold text-[#071228] mb-2">Priority Application Filing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We submit university admission dossiers early to secure priority consideration for institutional merit pools before funds deplete.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#E6C687]/30 relative">
              <span className="w-8 h-8 rounded-full bg-[#071228] text-[#E6C687] font-bold text-sm flex items-center justify-center mb-4">
                04
              </span>
              <h3 className="text-sm font-bold text-[#071228] mb-2">Panel Mock Interviews</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                For prestigious national grants (Chevening, Fulbright), our alumni conduct rigorous mock interviews to hone your poise and responses.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228]">
              Frequently Asked Questions on Scholarships
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {scholarshipFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-neutral-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-sm text-[#071228] hover:bg-neutral-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 bg-[#FAF7F0]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#071228] via-[#0E1E38] to-[#071228] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-[#C5A059]/30">
          <div className="max-w-2xl mx-auto relative z-10">
            <Award className="w-12 h-12 text-[#E6C687] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Find Out Which Scholarships You Are Eligible For
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 mb-6 leading-relaxed">
              Book a free 1-on-1 profile evaluation with our international education experts. We'll map your profile to current university waivers and government grant cycles.
            </p>
            <button
              onClick={() => handleOpenConsultation('Comprehensive Profile Evaluation')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5A059] text-[#071228] font-bold text-sm hover:bg-[#E6C687] transition-all shadow-lg hover:scale-105"
            >
              Book Free Scholarship Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Consultation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConsultationForm 
          initialNotes={`Interested in scholarship: ${selectedScholarshipTitle}`}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Scholarships;
