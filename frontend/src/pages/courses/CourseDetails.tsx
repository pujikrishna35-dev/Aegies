import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  GraduationCap, 
  Landmark, 
  MessageSquare, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Compass,
  Briefcase,
  HelpCircle,
  Globe2,
  BookOpen
} from 'lucide-react';
import { 
  getSubjectBySlug, 
  SUBJECT_CATEGORIES, 
  SubjectCategory, 
  CourseTypeOption 
} from '../../data/courseCatalogue';
import { CourseEnquiryModal } from '../../components/courses/CourseEnquiryModal';

export const CourseDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<'options' | 'about' | 'careers' | 'destinations' | 'faq'>('options');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Enquiry Modal state
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedCourseType, setSelectedCourseType] = useState<string>('');

  const subject: SubjectCategory | undefined = getSubjectBySlug(slug || '');

  const handleOpenEnquiry = (courseTypeTitle?: string) => {
    setSelectedCourseType(courseTypeTitle || '');
    setEnquiryOpen(true);
  };

  if (!subject) {
    return (
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col items-center justify-center text-center bg-[#FDFBF7]">
        <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-display font-black text-[#071228]">Subject Area Not Found</h1>
        <p className="text-slate-600 mt-2 max-w-md text-sm">
          We couldn't locate the specific subject category you requested. Explore our complete subject catalogue below.
        </p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#071228] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#112242] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Subject Areas</span>
        </Link>
      </div>
    );
  }

  // Country Flag helper
  const getDestinationFlag = (dest: string) => {
    switch (dest.toUpperCase()) {
      case 'UK': return '🇬🇧';
      case 'USA': return '🇺🇸';
      case 'CANADA': return '🇨🇦';
      case 'AUSTRALIA': return '🇦🇺';
      case 'NEW ZEALAND': return '🇳🇿';
      case 'EUROPE': return '🇪🇺';
      default: return '🌍';
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Back to Courses link */}
        <div className="mb-6">
          <Link 
            to="/courses" 
            className="text-xs font-extrabold text-[#C5A059] uppercase tracking-widest hover:text-[#9A7B38] flex items-center gap-1.5 transition-colors"
          >
            ← BACK TO COURSES
          </Link>
        </div>

        {/* Hero Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-10">
          {/* Hero Banner Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={subject.image}
              alt={subject.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071228]/90 via-[#071228]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E5B842] text-[#071228] text-[10px] font-extrabold uppercase tracking-widest mb-2.5">
                SUBJECT AREA
              </span>
              <h1 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight leading-tight">
                {subject.title}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                {subject.description}
              </p>
            </div>
          </div>

          {/* Destination Chips & Navigation Tabs */}
          <div className="p-6 sm:p-8 bg-white">
            {/* Destination Chips */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                Destinations:
              </span>
              {subject.destinationIds.map((dest) => (
                <div 
                  key={dest}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800"
                >
                  <span>{getDestinationFlag(dest)}</span>
                  <span>{dest}</span>
                </div>
              ))}
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto no-scrollbar pb-1">
              <button
                onClick={() => setActiveTab('options')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-extrabold tracking-wide rounded-t-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'options'
                    ? 'bg-[#FFF8EC] text-[#B45309] border-b-2 border-[#B45309]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Course Options
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-extrabold tracking-wide rounded-t-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'about'
                    ? 'bg-[#FFF8EC] text-[#B45309] border-b-2 border-[#B45309]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                About the Subject
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-extrabold tracking-wide rounded-t-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'careers'
                    ? 'bg-[#FFF8EC] text-[#B45309] border-b-2 border-[#B45309]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Career Opportunities
              </button>
              <button
                onClick={() => setActiveTab('destinations')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-extrabold tracking-wide rounded-t-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'destinations'
                    ? 'bg-[#FFF8EC] text-[#B45309] border-b-2 border-[#B45309]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Study Destinations
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-extrabold tracking-wide rounded-t-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'faq'
                    ? 'bg-[#FFF8EC] text-[#B45309] border-b-2 border-[#B45309]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Course Options */}
        {activeTab === 'options' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-black text-[#071228] tracking-tight">
                Course Options
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Explore different course types within {subject.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {subject.exampleCourseTypes.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-300 transition-all p-5 sm:p-6 flex flex-col justify-between h-full"
                >
                  <div>
                    {course.image && (
                      <div className="h-44 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100 shrink-0">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover"
                          loading="lazy" 
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-display font-bold text-[#071228]">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Study Level Chips */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {course.studyLevels.map((lvl) => (
                        <span 
                          key={lvl}
                          className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold"
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenEnquiry(course.title)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#B45309] hover:text-[#92400E] transition-colors cursor-pointer"
                    >
                      <span>View details & Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: About the Subject */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl font-display font-bold text-[#071228] mb-3">
                Overview of {subject.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {subject.about.overview}
              </p>
            </div>

            <div>
              <h3 className="text-base font-display font-bold text-[#071228] mb-2.5">
                Key Educational Themes
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {subject.about.keyThemes.map((theme, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-2xl text-xs sm:text-sm text-amber-950">
              <h4 className="font-bold text-[#071228] mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                Admissions & Entry Guidance
              </h4>
              <p className="leading-relaxed">
                {subject.about.admissionsGuidance}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Career Opportunities */}
        {activeTab === 'careers' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl font-display font-bold text-[#071228] mb-2">
                General Career Areas
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Graduates in {subject.title} pursue diverse roles in multinational industries, research institutions, and consultancies. (Listed as general examples; not guarantees of employment).
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subject.generalCareerAreas.map((career, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {career}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/70 rounded-2xl text-xs text-slate-600 leading-relaxed">
              <strong>Notice:</strong> Employment outcomes and post-study work authorization depend on national immigration laws, employer sponsorship, licensing criteria, and economic conditions. Aegis Overseas does not guarantee job placement or work visa issuance.
            </div>
          </div>
        )}

        {/* Tab 4: Study Destinations */}
        {activeTab === 'destinations' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
            <div>
              <h2 className="text-xl font-display font-bold text-[#071228] mb-1">
                Study Destinations for {subject.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Browse destinations where international students frequently pursue {subject.title} degrees.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {subject.destinationsGuidance.map((dest, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <span className="text-2xl">{dest.flag}</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#071228]">{dest.destination}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{dest.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: FAQ */}
        {activeTab === 'faq' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-display font-bold text-[#071228] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {subject.faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#071228] bg-slate-50/70 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-100/70"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 text-xs sm:text-sm text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Callout 1: University Availability Notice */}
        <div className="mt-10 p-5 sm:p-6 bg-[#FFF8EC] border border-[#F5DE88]/70 rounded-3xl flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-2xl bg-[#E5B842]/20 text-[#A16207] flex items-center justify-center shrink-0">
            <Landmark className="w-5 h-5 text-[#B45309]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#071228]">
              University availability
            </h4>
            <p className="mt-1 text-xs text-slate-700 leading-relaxed">
              Suitable universities and specific programmes for your chosen subject, study level and destination will be shared by an Aegis counsellor based on your profile and preferences.
            </p>
          </div>
        </div>

        {/* Bottom Callout 2: Need help finding the right course? CTA */}
        <div className="mt-6 p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold text-[#071228]">
                Need help finding the right course?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Discuss your interests, study level, destination and career goals with our expert counsellors.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleOpenEnquiry()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#071228] hover:bg-[#112242] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shrink-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Enquire About This Course</span>
          </button>
        </div>

      </div>

      {/* Course Enquiry Modal */}
      <CourseEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        initialSubject={subject.title}
        initialCourseType={selectedCourseType}
      />
    </div>
  );
};

export default CourseDetails;
