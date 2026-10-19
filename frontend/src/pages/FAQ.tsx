import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ArrowRight, 
  GraduationCap, 
  FileCheck2, 
  DollarSign, 
  Briefcase, 
  Home, 
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  // General & Admissions
  {
    category: 'Admissions & Universities',
    q: 'Which country is best for my profile?',
    a: 'The optimal destination depends on your undergraduate or high-school GPA, budget, preferred post-study work duration, and desired career sector. For instance, Germany is ideal for tuition-free engineering; the US and Canada excel in tech, STEM, and research; the UK offers fast 1-year master’s with 2-year graduate visas; and Australia and Ireland offer robust stay-back pathways. Our senior counselors evaluate your academic transcripts and career goals to design a high-probability shortlist.'
  },
  {
    category: 'Admissions & Universities',
    q: 'Can I study abroad with average academic scores (50%–60%)?',
    a: 'Yes, absolutely. With access to over 5,000+ partner universities across 11+ destinations, we specialize in identifying accredited institutions offering foundation routes, pre-master’s pathways, and direct entry for diverse academic profiles. Relevant work experience, strong SOPs, and solid recommendation letters can also offset modest grades.'
  },
  {
    category: 'Admissions & Universities',
    q: 'Which universities accept my IELTS or PTE score?',
    a: 'Most premier universities in the UK, Australia, Canada, Ireland, and New Zealand accept overall IELTS scores of 6.0 to 6.5 (or PTE Academic 54 to 62). Many top institutions also accept Duolingo English Tests (DET) or offer MOI (Medium of Instruction) waivers if your degree was taught entirely in English.'
  },
  {
    category: 'Admissions & Universities',
    q: 'Can I apply for university admission without IELTS?',
    a: 'Yes. Several universities in the UK, Europe, and Ireland offer English language test waivers based on Class 12 English marks (typically 70%+ from CBSE/ICSE or selected state boards), university medium-of-instruction letters, or internal online interviews.'
  },
  {
    category: 'Admissions & Universities',
    q: 'What documents are required to initiate university applications?',
    a: 'You will need scanned copies of your academic mark sheets and degree certificates, passport biographical pages, resume/CV, Statement of Purpose (SOP), 2 Letters of Recommendation (LORs), and English proficiency scorecards (if already taken). Our editorial team assists you with drafting and refining your SOP and resume to international ATS standards.'
  },
  {
    category: 'Admissions & Universities',
    q: 'When should I begin my study abroad application process?',
    a: 'We strongly recommend starting 8 to 12 months ahead of your intended intake (e.g., September/Fall or January/Spring). This allows sufficient time for standardized tests, document drafting, conditional offers, scholarship deadlines, loan sanctions, and visa processing.'
  },

  // Visas & Immigration
  {
    category: 'Visas & Immigration',
    q: 'How do I apply for a student visa and what is Aegis’s success rate?',
    a: 'Aegis maintains an industry-leading 99.4% student visa approval rate. Our dedicated visa officers assist you with preparing verified financial documentation, review CAS/I-20 records, book biometric and embassy appointments, and conduct one-on-one mock interview drills to ensure 100% compliance with destination immigration laws.'
  },
  {
    category: 'Visas & Immigration',
    q: 'What are the post-study work rights (PSW) across major destinations?',
    a: 'International graduates enjoy lucrative post-study work routes: the UK offers a 2-year Graduate Route Visa (3 years for PhDs); the USA provides 1 year OPT with a 24-month STEM extension (3 years total); Canada grants a 1 to 3-year PGWP; Australia permits 2 to 4 years depending on degree level and regional status; and Germany offers an 18-month job seeker visa.'
  },
  {
    category: 'Visas & Immigration',
    q: 'Do you conduct mock visa interview rehearsals?',
    a: 'Yes. For countries requiring in-person or online consular interviews (such as the US F-1 visa or UK credibility interviews), we conduct realistic mock sessions focusing on intent, university justification, financial disclosure, and clear post-graduation career plans.'
  },
  {
    category: 'Visas & Immigration',
    q: 'What financial proof is acceptable for student visa filing?',
    a: 'Accepted funds typically include bank savings deposits held for required minimum periods, sanctioned education loan letters from recognized banks/NBFCs, fixed deposits, provident funds, and government sponsorship letters. Our financial documentation team verifies every statement before submission to prevent visa refusal.'
  },

  // Scholarships & Finance
  {
    category: 'Scholarships & Finance',
    q: 'How much does studying abroad cost overall?',
    a: 'Annual tuition ranges from virtually zero fees in German public universities, to £13,000–£26,000/year in the UK, $22,000–$48,000/year in the US, CAD $16,000–$35,000/year in Canada, and AUD $28,000–$45,000/year in Australia. Estimated living expenses range from ₹6L to ₹12L per annum depending on the city and student lifestyle.'
  },
  {
    category: 'Scholarships & Finance',
    q: 'Can I get an education loan with or without collateral?',
    a: 'Yes. Through our banking partnerships with HDFC Credila, Avanse, Auxilo, InCred, SBI, and international lenders like Prodigy Finance and MPOWER Financing, students can secure both collateral-free (up to ₹50–₹60 Lakhs) and collateral-backed education loans at competitive interest rates with fast turnarounds.'
  },
  {
    category: 'Scholarships & Finance',
    q: 'What scholarship opportunities are available for international students?',
    a: 'Scholarships range from early-bird university awards (£1,500–£5,000 in the UK) to merit-based Dean’s scholarships, Vice-Chancellor awards, and prestigious full-tuition government grants like Chevening, Commonwealth, and Fulbright. Aegis automatically matches and applies you for all eligible bursaries.'
  },

  // Part-time Work & Settlement
  {
    category: 'Accommodation & Jobs',
    q: 'How many hours can international students legally work part-time?',
    a: 'In the UK, USA (on-campus), Canada, Ireland, and New Zealand, international students on valid study visas are permitted to work up to 20 hours per week during academic semesters, and full-time (up to 40+ hours per week) during scheduled vacations and holiday breaks.'
  },
  {
    category: 'Accommodation & Jobs',
    q: 'Can Aegis help arrange verified student accommodation?',
    a: 'Yes. We partner with premier global PBSA providers including AmberStudent, Casita, and University Living to secure verified student halls, en-suite studios, and shared flats within walking distance of campuses with all utilities included.'
  },
  {
    category: 'Accommodation & Jobs',
    q: 'Does Aegis assist with internships and local student job placement?',
    a: 'Yes. Our student services team helps format ATS-compliant CVs tailored to local employer expectations, guides you on national tax numbers (NI in the UK, SSN in the US, TFN in Australia), and connects you with verified student job boards and vetted recruitment networks.'
  },
  {
    category: 'Accommodation & Jobs',
    q: 'What pre-departure and arrival support is included?',
    a: 'We organize comprehensive pre-departure briefings covering packing lists, currency exchange (Forex cards), international SIM cards, airport pickup coordination, student bank account setup, and guidance on local university registration.'
  }
];

const CATEGORIES = [
  'All',
  'Admissions & Universities',
  'Visas & Immigration',
  'Scholarships & Finance',
  'Accommodation & Jobs'
];

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Frequently Asked Questions</span>
        </div>

        {/* Hero Header */}
        <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-[#C5A059]/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold mb-4 border border-[#C5A059]/30">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Aegis Knowledge Hub • 2026 Edition</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              Find transparent, expert answers about international university admissions, student visas, scholarships, education loans, accommodation, and global career opportunities.
            </p>

            {/* Instant Search Bar */}
            <div className="mt-8 max-w-xl relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search any question (e.g., IELTS waiver, PSW visa, education loan)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 text-white placeholder-slate-400 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white/15 text-sm transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Decorative Background Accents */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-bl from-[#C5A059]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIdx(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#071228] text-[#C5A059] shadow-xs border border-[#C5A059]/40'
                  : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-3.5 mb-14">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:border-[#C5A059]/50 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#071228] flex justify-between items-center gap-4 bg-white hover:bg-slate-50/70 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#C5A059]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FDFBF7]/60">
                      <p className="mt-2">{faq.a}</p>
                      <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                        <span>Category: {faq.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-bold text-base text-[#071228]">No questions found</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching with a different keyword or select "All".</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 px-4 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA: Still Have Questions */}
        <div className="bg-gradient-to-br from-[#071228] to-[#0A1A3B] text-white rounded-3xl p-8 sm:p-10 border border-[#C5A059]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block">
              HAVE A SPECIFIC QUERY?
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Talk Directly to an Aegis Senior Counselor
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Get personalized evaluation of your university profile, country options, and scholarship eligibility in a free 1-on-1 counseling session.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setConsultationOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] text-xs font-bold uppercase tracking-wider shadow-xs hover:brightness-105 transition-all text-center cursor-pointer"
            >
              Book Free Consultation
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-all text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Consultation Modal */}
      <Modal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title="Book a Free Consultation"
      >
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </div>
  );
};

export default FAQ;
