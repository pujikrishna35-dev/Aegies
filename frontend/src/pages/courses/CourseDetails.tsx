import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Clock, 
  Globe2, 
  DollarSign, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  Award, 
  FileText, 
  HelpCircle,
  Building2,
  Send,
  Calendar,
  Layers
} from 'lucide-react';
import { POPULAR_COURSES, CourseProgram } from '../../data/courses';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const CourseDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Match course by slug/id or fallback to first course
  const course: CourseProgram | undefined = POPULAR_COURSES.find(
    (c) => c.id.toLowerCase() === (slug || '').toLowerCase()
  );

  const relatedCourses = POPULAR_COURSES.filter(
    (c) => c.id !== course?.id && (c.category === course?.category || c.degreeLevel === course?.degreeLevel)
  ).slice(0, 3);

  if (!course) {
    return (
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <GraduationCap className="w-16 h-16 text-slate-300 mb-4" />
        <h1 className="text-3xl font-extrabold text-[#071228]">Course Program Not Found</h1>
        <p className="text-slate-600 mt-2 max-w-md text-sm">
          We couldn't locate the specific degree program you requested. Explore our verified course catalog below.
        </p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-[#071228] font-bold text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Degrees</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6 flex-wrap">
        <Link to="/" className="text-amber-600 hover:underline">Home</Link>
        <span>/</span>
        <Link to="/courses" className="text-amber-600 hover:underline">Degrees & Programs</Link>
        <span>/</span>
        <span className="text-slate-600 truncate max-w-xs">{course.title}</span>
      </div>

      {/* Hero Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm relative overflow-hidden mb-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase bg-slate-100 text-[#071228]">
              {course.degreeLevel}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
              {course.category}
            </span>
            {course.stemEligible && (
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> STEM Designated (3-Yr OPT)
              </span>
            )}
            {course.scholarshipAvailable && (
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                Merit Scholarships Available
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#071228] tracking-tight leading-tight">
            {course.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            {course.overview}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Typical Duration</div>
              <div className="text-sm sm:text-base font-extrabold text-[#071228] mt-0.5">{course.duration}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Avg Starting Salary</div>
              <div className="text-sm sm:text-base font-extrabold text-emerald-600 mt-0.5">{course.avgStartingSalary}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Primary Intakes</div>
              <div className="text-sm sm:text-base font-extrabold text-[#071228] mt-0.5">{course.intakes.join(' / ')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Details & Right Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Program Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section 1: Core Curriculum & Modules */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold text-[#071228]">Core Curriculum & Key Modules</h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Representative modules taught across partner universities. Syllabi are continuously updated to integrate emerging industry frameworks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.keyModules.map((module, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#071228]">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Country Comparison Matrix */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold text-[#071228]">Study Destinations & Tuition Comparison</h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Compare program duration, annual tuition fee benchmarks, post-study work rights, and top representative institutions.
            </p>

            <div className="space-y-4">
              {course.destinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-amber-300 transition-all"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{dest.flag}</span>
                      <h3 className="text-base font-bold text-[#071228]">{dest.country}</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
                      {dest.pswDuration}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs my-3 pt-3 border-t border-slate-200/60">
                    <div>
                      <span className="text-slate-400 font-semibold block">Average Tuition:</span>
                      <span className="font-extrabold text-[#071228]">{dest.avgTuition}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Degree Duration:</span>
                      <span className="font-extrabold text-[#071228]">{dest.duration}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-slate-400 font-semibold block">Work Permit:</span>
                      <span className="font-extrabold text-emerald-700">{dest.pswDuration}</span>
                    </div>
                  </div>

                  <div className="mt-2 text-xs">
                    <span className="font-bold text-slate-500">Representative Partner Universities: </span>
                    <span className="text-slate-700 font-medium">{dest.popularUnis.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Admission & Eligibility Checklist */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold text-[#071228]">Eligibility & Entry Prerequisites</h2>
            </div>

            <div className="space-y-3 mb-6">
              {course.eligibilityCriteria.map((crit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{crit}</span>
                </div>
              ))}
            </div>

            {/* English Test Scores Card */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                Minimum English Proficiency Cutoffs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold">
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-center">
                  <span className="text-slate-400 block text-[11px]">IELTS Academic</span>
                  <span className="text-[#071228] text-sm font-extrabold mt-0.5 block">{course.englishRequirement.ielts}</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-center">
                  <span className="text-slate-400 block text-[11px]">PTE Academic</span>
                  <span className="text-[#071228] text-sm font-extrabold mt-0.5 block">{course.englishRequirement.pte}</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-center">
                  <span className="text-slate-400 block text-[11px]">TOEFL iBT</span>
                  <span className="text-[#071228] text-sm font-extrabold mt-0.5 block">{course.englishRequirement.toefl}</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 mt-2.5 italic">
                * Note: English test waivers are available for eligible applicants based on Higher Secondary English scores or medium of instruction (MOI).
              </div>
            </div>
          </div>

          {/* Section 4: High-Growth Career Outcomes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold text-[#071228]">Career Outcomes & Industry Roles</h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Graduates from this program secure high-demand positions across multinational corporations, tech unicorns, and research laboratories.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {course.careerOutcomes.map((role, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-[#071228] flex items-center gap-2"
                >
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 Column: Sticky Quick Action & Application Sidebar */}
        <div className="space-y-6">
          
          {/* Apply Now Quick Box */}
          <div className="bg-gradient-to-br from-[#071228] to-[#0A1E3F] text-white p-6 sm:p-8 rounded-3xl shadow-md">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block mb-2">
              Fast-Track Admissions
            </span>
            <h3 className="text-xl font-extrabold leading-tight">
              Apply for {course.title}
            </h3>
            <p className="text-slate-300 text-xs mt-2 leading-relaxed">
              Get an instant profile pre-check, university fee breakdown, and application fee waiver support from our certified team.
            </p>

            <button
              onClick={() => setConsultationOpen(true)}
              className="w-full mt-6 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-extrabold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Free Counseling</span>
            </button>

            <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <a
                href="https://wa.me/919111243210?text=Hi%20Aegis%20Team,%20I%20am%20interested%20in%20applying%20for%20the%20degree:%20"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-amber-300 font-bold hover:underline inline-flex items-center gap-1.5"
              >
                <span>Chat with Advisor on WhatsApp</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Fast Consultation Form */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-base font-bold text-[#071228] mb-1">
              Check Admission Eligibility
            </h4>
            <p className="text-slate-500 text-xs mb-4">
              Enter your contact details to receive full syllabus PDF and fee estimates.
            </p>
            <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
          </div>

          {/* Related Programs */}
          {relatedCourses.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                Explore Related Programs
              </h4>
              <div className="space-y-3">
                {relatedCourses.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/courses/${rel.id}`}
                    className="block p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-300 hover:bg-white transition-all group"
                  >
                    <div className="text-xs font-bold text-[#071228] group-hover:text-amber-600 transition-colors">
                      {rel.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1 flex items-center justify-between">
                      <span>{rel.category}</span>
                      <span className="text-amber-600 font-bold">Details →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Free Consultation Modal */}
      <Modal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        title={`Apply for ${course.title}`}
      >
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </div>
  );
};

export default CourseDetails;

