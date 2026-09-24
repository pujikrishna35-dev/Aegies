import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  GraduationCap, 
  Clock, 
  Globe2, 
  DollarSign, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  X,
  Compass
} from 'lucide-react';
import { COURSE_CATEGORIES, POPULAR_COURSES, CourseProgram } from '../../data/courses';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const Courses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [stemOnly, setStemOnly] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const countries = [
    { code: 'ALL', label: 'All Destinations' },
    { code: 'United Kingdom', label: 'UK 🇬🇧' },
    { code: 'United States', label: 'USA 🇺🇸' },
    { code: 'Canada', label: 'Canada 🇨🇦' },
    { code: 'Australia', label: 'Australia 🇦🇺' },
    { code: 'Germany', label: 'Germany 🇩🇪' },
    { code: 'Ireland', label: 'Ireland 🇮🇪' },
    { code: 'France', label: 'France 🇫🇷' }
  ];

  const levels = [
    { code: 'ALL', label: 'All Degree Levels' },
    { code: "Master's", label: "Master's (MS/MSc)" },
    { code: "Bachelor's", label: "Bachelor's (BS/BEng)" },
    { code: "MBA", label: "MBA" }
  ];

  const filteredCourses = useMemo(() => {
    return POPULAR_COURSES.filter((course) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        course.title.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.keyModules.some(m => m.toLowerCase().includes(q)) ||
        course.destinations.some(d => d.popularUnis.some(u => u.toLowerCase().includes(q)));

      // Category
      const matchesCat = selectedCategory === 'ALL' || course.category === selectedCategory;

      // Level
      const matchesLevel = selectedLevel === 'ALL' || course.degreeLevel === selectedLevel;

      // STEM
      const matchesStem = !stemOnly || course.stemEligible;

      // Country
      const matchesCountry = selectedCountry === 'ALL' || 
        course.destinations.some(d => d.country.toLowerCase().includes(selectedCountry.toLowerCase()));

      return matchesSearch && matchesCat && matchesLevel && matchesStem && matchesCountry;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedCountry, stemOnly]);

  const faqs = [
    {
      q: "How do I choose between a 1-year UK Master's and a 2-year US Master's?",
      a: "A 1-year UK Master's is fast-paced, highly intensive, and significantly reduces total living expenses while offering a 2-year post-study work visa (Graduate Route). A 2-year US Master's offers deeper research options, internship (CPT) semesters, and up to a 3-year STEM OPT work permit upon graduation. Aegis counselors help you evaluate your ROI and career objectives."
    },
    {
      q: "Which courses qualify for the 3-Year STEM OPT extension in the USA?",
      a: "Programs categorized under Science, Technology, Engineering, and Math (STEM) CIP codes qualify for the 24-month OPT extension (total 36 months of US work authorization). This includes Computer Science, Data Science, Cyber Security, Robotics, FinTech, and select STEM-designated MBA degrees."
    },
    {
      q: "Can I switch to Computer Science or Data Science from a non-IT Bachelor's degree?",
      a: "Yes! Several top universities in the UK, Ireland, and Australia offer 'Conversion Master's degrees' in Computer Science, Data Analytics, and AI specifically designed for students with backgrounds in commerce, arts, or traditional engineering."
    },
    {
      q: "Are English proficiency test waivers available for these programs?",
      a: "Yes. Many partner institutions in the UK and Europe offer IELTS/PTE waivers if you scored 70%+ in Higher Secondary (12th English) from recognized boards (CBSE, ICSE, or select state boards) or completed your degree with English as the Medium of Instruction (MOI)."
    }
  ];

  const handleOpenConsultation = (courseTitle?: string) => {
    setSelectedCourseForModal(courseTitle || null);
    setConsultationOpen(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] min-h-screen">
      {/* Top Breadcrumb & Matcher Link */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <Link to="/" className="text-xs font-bold text-amber-600 uppercase tracking-widest hover:underline">
          ← Back to Home
        </Link>

        <Link
          to="/university-finder"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch Course Matcher</span>
        </Link>
      </div>

      {/* Hero Title Area */}
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
          Browse Degrees & Programs
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          Comprehensive verified information from Aegis Overseas Education Services.
        </p>
      </div>

      {/* Certified Advisor Highlights Banner (Preserving original requirement & enriching) */}
      <div className="mt-8 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-amber-600 text-xs font-extrabold uppercase tracking-wider mb-1.5">
            <ShieldCheck className="w-4 h-4" /> Certified Global Advisory
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl">
            Our certified advisors guide you every step of the way with verified course prerequisites, deadlines, scholarship allocations, and visa assistance across 850+ global universities.
          </p>
        </div>
        <button
          onClick={() => handleOpenConsultation()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#071228] text-white font-bold text-xs uppercase tracking-wider hover:bg-amber-600 transition-colors shrink-0 shadow"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Book Free Advisory</span>
        </button>
      </div>

      {/* Quick Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-extrabold text-[#071228]">850+</div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">Verified Degree Programs</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-extrabold text-amber-600">3 Years</div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">Post-Study Work Permits</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-extrabold text-[#071228]">100%</div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">Free Profile Evaluation</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-extrabold text-emerald-600">£5K - $20K</div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">Scholarships Available</div>
        </div>
      </div>

      {/* Search & Multi-Filter Controls */}
      <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by degree title, specialized module, tech stack, or university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#071228] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Level Filter */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Degree Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-[#071228] focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            >
              {levels.map((lvl) => (
                <option key={lvl.code} value={lvl.code}>{lvl.label}</option>
              ))}
            </select>
          </div>

          {/* Country Destination Filter */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Study Destination
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-[#071228] focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Discipline / Area
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-[#071228] focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            >
              <option value="ALL">All Disciplines ({POPULAR_COURSES.length})</option>
              {COURSE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* STEM Toggle */}
          <div className="flex flex-col justify-end">
            <label className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
              <input
                type="checkbox"
                checked={stemOnly}
                onChange={(e) => setStemOnly(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
              />
              <span className="text-xs font-bold text-[#071228]">STEM Programs Only</span>
              <span className="ml-auto text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.5 rounded">3-Yr OPT</span>
            </label>
          </div>
        </div>

        {/* Quick Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-5 pt-3 border-t border-slate-100 no-scrollbar">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap shrink-0">
            Quick Filter:
          </span>
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === 'ALL'
                ? 'bg-[#071228] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All
          </button>
          {COURSE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Program Results Count & Reset */}
      <div className="flex items-center justify-between mt-8 mb-4">
        <div className="text-sm font-bold text-[#071228]">
          Showing <span className="text-amber-600 font-extrabold">{filteredCourses.length}</span> Verified Degree Programs
        </div>
        {(searchQuery || selectedCategory !== 'ALL' || selectedLevel !== 'ALL' || selectedCountry !== 'ALL' || stemOnly) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
              setSelectedLevel('ALL');
              setSelectedCountry('ALL');
              setStemOnly(false);
            }}
            className="text-xs font-bold text-amber-600 hover:underline"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Programs Grid */}
      {filteredCourses.length === 0 ? (
        <div className="mt-6 p-12 bg-white rounded-2xl border border-slate-200 text-center max-w-lg mx-auto">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#071228]">No courses matching your criteria</h3>
          <p className="text-slate-500 text-xs mt-1 leading-relaxed">
            Try adjusting your search query, removing the STEM filter, or exploring our wider partner network.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
              setSelectedLevel('ALL');
              setSelectedCountry('ALL');
              setStemOnly(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-amber-500 text-[#071228] font-bold text-xs uppercase"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              {/* Card Header & Badges */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase bg-slate-100 text-[#071228]">
                    {course.degreeLevel}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {course.stemEligible && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        STEM Designated
                      </span>
                    )}
                    {course.scholarshipAvailable && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-50 text-amber-800 border border-amber-200">
                        Scholarship
                      </span>
                    )}
                  </div>
                </div>

                <Link to={`/courses/${course.id}`} className="group">
                  <h3 className="text-lg font-bold text-[#071228] group-hover:text-amber-600 transition-colors leading-snug">
                    {course.title}
                  </h3>
                </Link>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold mt-2.5">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                    <span>{course.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mt-3 line-clamp-2">
                  {course.description}
                </p>

                {/* Key Modules Tags */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">
                    Core Focus Modules:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.keyModules.slice(0, 3).map((mod, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 text-[11px] rounded-md font-medium truncate max-w-[200px]"
                      >
                        {mod}
                      </span>
                    ))}
                    {course.keyModules.length > 3 && (
                      <span className="text-[10px] text-slate-400 font-bold self-center">
                        +{course.keyModules.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Destination Hubs */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Target Hubs & Unis:
                    </span>
                    <span className="text-[11px] font-extrabold text-emerald-700">
                      {course.avgStartingSalary}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {course.destinations.map((d, dIdx) => (
                      <span
                        key={dIdx}
                        title={`${d.country}: ${d.avgTuition} (${d.duration})`}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200/60 rounded text-xs font-semibold"
                      >
                        <span>{d.flag}</span>
                        <span className="text-[10px] font-bold">{d.country}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  to={`/courses/${course.id}`}
                  className="text-xs font-bold text-[#071228] hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <span>Full Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleOpenConsultation(course.title)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#071228] text-white text-xs font-bold hover:bg-amber-600 transition-colors shadow-2xs"
                >
                  Apply with Aegis
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Why Choose Aegis for Course Selection */}
      <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Aegis Academic Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228] mt-1">
            How We Optimize Your Degree & University Selection
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Selecting the wrong course can result in post-study work visa ineligibility, high tuition debt, or career misalignment. Aegis uses a verified 4-step framework.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-extrabold text-sm mb-3">
              01
            </div>
            <h4 className="text-sm font-bold text-[#071228] mb-1">Academic Aptitude Audit</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              We review your transcripts, test percentiles, and technical electives to find courses with high acceptance ratios.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-extrabold text-sm mb-3">
              02
            </div>
            <h4 className="text-sm font-bold text-[#071228] mb-1">Post-Study Visa Eligibility</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              We ensure your program qualifies for 2-year UK Graduate Route, 3-year US STEM OPT, or Canadian 3-year PGWP.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-extrabold text-sm mb-3">
              03
            </div>
            <h4 className="text-sm font-bold text-[#071228] mb-1">Scholarship & Fee Optimization</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Matching your academic profile to early-bird discounts and faculty merit grants worth £3,000 to $15,000.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-extrabold text-sm mb-3">
              04
            </div>
            <h4 className="text-sm font-bold text-[#071228] mb-1">Industry Internship Links</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Programs featuring industrial placement years, co-op semesters, and Russell Group / Tier-1 laboratory access.
            </p>
          </div>
        </div>
      </div>

      {/* Program Selection FAQs Accordion */}
      <div className="mt-12 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Common Questions
          </span>
          <h2 className="text-2xl font-display font-extrabold text-[#071228] mt-1">
            Frequently Asked Questions on Degrees & Programs
          </h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-slate-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left font-bold text-[#071228] text-sm sm:text-base hover:text-amber-600 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                )}
              </button>
              {openFaq === idx && (
                <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed pr-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final Call to Action Box */}
      <div className="mt-12 bg-gradient-to-r from-[#071228] to-[#0A1E3F] rounded-3xl p-8 sm:p-12 text-white text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">
            Personalized Degree Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold mt-2 leading-tight">
            Can't Find Your Exact Course or Specialization?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
            Our counselors represent over 850+ top global universities across 4,000+ niche academic disciplines. Speak with an expert counselor today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              onClick={() => handleOpenConsultation()}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-extrabold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all"
            >
              Get Custom Course Shortlist
            </button>

            <Link
              to="/universities"
              className="px-6 py-3.5 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              Explore Partner Universities
            </Link>
          </div>
        </div>
      </div>

      {/* Free Consultation Modal */}
      <Modal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title={selectedCourseForModal ? `Apply for ${selectedCourseForModal}` : "Book a Free Course Counseling Session"}
      >
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </div>
  );
};

export default Courses;

