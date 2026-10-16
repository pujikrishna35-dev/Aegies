import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Globe2, 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  Calendar,
  Compass,
  RotateCcw
} from 'lucide-react';
import { 
  SUBJECT_CATEGORIES, 
  STUDY_LEVEL_OPTIONS, 
  DESTINATION_OPTIONS, 
  SubjectCategory 
} from '../../data/courseCatalogue';
import { CourseEnquiryModal } from '../../components/courses/CourseEnquiryModal';

export const Courses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudyLevel, setSelectedStudyLevel] = useState<string>('All Study Levels');
  const [selectedDestination, setSelectedDestination] = useState<string>('ALL');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState<string>('');

  // Combined filtering across subjects, course types, study levels, and destinations
  const filteredCategories = useMemo(() => {
    return SUBJECT_CATEGORIES.filter((category) => {
      // 1. Search Query
      const q = searchQuery.toLowerCase().trim();
      let matchesSearch = true;
      if (q) {
        const titleMatch = category.title.toLowerCase().includes(q);
        const descMatch = category.description.toLowerCase().includes(q);
        const courseTypeMatch = category.exampleCourseTypes.some(
          ct => ct.title.toLowerCase().includes(q) || 
                ct.description.toLowerCase().includes(q) ||
                ct.keywords.some(k => k.toLowerCase().includes(q))
        );
        matchesSearch = titleMatch || descMatch || courseTypeMatch;
      }

      // 2. Study Level Filter
      let matchesLevel = true;
      if (selectedStudyLevel !== 'All Study Levels') {
        matchesLevel = category.exampleCourseTypes.some(ct => 
          ct.studyLevels.some(lvl => lvl.toLowerCase() === selectedStudyLevel.toLowerCase())
        );
      }

      // 3. Destination Filter
      let matchesDestination = true;
      if (selectedDestination !== 'ALL') {
        matchesDestination = category.destinationIds.some(
          d => d.toLowerCase() === selectedDestination.toLowerCase()
        );
      }

      return matchesSearch && matchesLevel && matchesDestination;
    });
  }, [searchQuery, selectedStudyLevel, selectedDestination]);

  const handleOpenGeneralCounselling = (subjectTitle?: string) => {
    setModalSubject(subjectTitle || '');
    setEnquiryModalOpen(true);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStudyLevel('All Study Levels');
    setSelectedDestination('ALL');
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Back to Home link */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xs font-extrabold text-[#C5A059] uppercase tracking-widest hover:text-[#9A7B38] flex items-center gap-1 transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>

        {/* Header Heading & Subtitle */}
        <div className="max-w-3xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-black text-[#071228] tracking-tight leading-tight">
            Explore Courses Abroad
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Find a study pathway that suits your academic background, interests, budget and career goals.
          </p>
        </div>

        {/* Info Strip */}
        <div className="bg-[#FFF8EC] border border-[#F5DE88]/70 rounded-2xl p-4 sm:p-5 mb-8 flex items-start sm:items-center gap-3.5 shadow-xs">
          <div className="w-10 h-10 rounded-full bg-[#E5B842]/20 text-[#A16207] flex items-center justify-center shrink-0">
            <Globe2 className="w-5 h-5 text-[#B45309]" />
          </div>
          <div className="text-xs sm:text-sm text-slate-800 leading-snug">
            <p className="font-bold text-[#071228]">
              Explore programmes across the UK, USA, Canada, Australia, New Zealand and European destinations.
            </p>
            <p className="text-slate-600 text-xs mt-0.5">
              Availability depends on institution and individual eligibility.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-3 sm:p-4 shadow-sm mb-12 flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
          {/* Search Field */}
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subject areas or courses..."
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Study Level Filter */}
          <div className="w-full sm:w-auto min-w-[180px]">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 lg:hidden">
              Study Level
            </label>
            <select
              value={selectedStudyLevel}
              onChange={(e) => setSelectedStudyLevel(e.target.value)}
              className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
            >
              {STUDY_LEVEL_OPTIONS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          {/* Destination Filter */}
          <div className="w-full sm:w-auto min-w-[170px]">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 lg:hidden">
              Destination
            </label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
            >
              {DESTINATION_OPTIONS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* Book Course Counselling Button */}
          <button
            onClick={() => handleOpenGeneralCounselling()}
            className="w-full sm:w-auto px-5 py-3 sm:py-3 rounded-xl bg-[#071228] hover:bg-[#112242] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 transition-all shrink-0 cursor-pointer"
          >
            <GraduationCap className="w-4 h-4 text-[#E5B842]" />
            <span>Book Course Counselling</span>
          </button>
        </div>

        {/* Section Heading: Popular Subject Areas */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#071228] tracking-tight">
              Popular Subject Areas
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Explore a wide range of programmes across leading global study destinations.
            </p>
          </div>
          <div className="text-xs font-bold text-slate-500">
            Showing <span className="text-[#071228] font-black">{filteredCategories.length}</span> of {SUBJECT_CATEGORIES.length} Areas
          </div>
        </div>

        {/* Responsive Subject Card Grid (3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile) */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col group h-full"
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#071228] group-hover:text-amber-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Explore Area Link */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      to={`/courses/${category.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#B45309] hover:text-[#92400E] group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore area</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-xl mx-auto my-6 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-4">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold text-[#071228]">
              No subject areas match your search
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Try another keyword or clear the filters to explore all available subject categories.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#071228] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#112242] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Filters</span>
            </button>
          </div>
        )}

        {/* Bottom Guidance Strip */}
        <div className="mt-14 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-display font-bold text-[#071228]">
                Choosing your programme
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our counselling considers entry requirements, tuition fees, language of instruction, course content, location and post-study plans.
              </p>
              <p className="mt-1 text-[11px] text-slate-500 italic">
                Programme availability varies by institution and destination. Admission is not guaranteed; requires separate recognition and licensing checks.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleOpenGeneralCounselling()}
            className="w-full lg:w-auto px-6 py-3.5 rounded-2xl bg-[#071228] hover:bg-[#112242] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shrink-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#E5B842]" />
            <span>Book a Course Counselling Session</span>
          </button>
        </div>

      </div>

      {/* Course Enquiry Modal */}
      <CourseEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialSubject={modalSubject}
        initialDestination={selectedDestination !== 'ALL' ? selectedDestination : undefined}
      />
    </div>
  );
};

export default Courses;
