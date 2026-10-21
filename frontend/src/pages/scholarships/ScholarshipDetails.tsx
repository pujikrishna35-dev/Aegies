import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Download, 
  ArrowRight, 
  ChevronRight,
  Info, 
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Share2,
  Building2,
  FileText
} from 'lucide-react';
import { SCHOLARSHIPS, Scholarship } from '../../data/scholarships';
import { ScholarshipConsultationModal } from '../../components/scholarships/ScholarshipConsultationModal';
import { useSEO } from '../../hooks/useSEO';

type DetailTab = 'overview' | 'eligibility' | 'benefits' | 'process' | 'dates' | 'faq';

export const ScholarshipDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Find scholarship by slug or id, fallback to first scholarship
  const scholarship: Scholarship = 
    SCHOLARSHIPS.find((s) => s.slug === slug || s.id === slug || (slug === 'vanier-canada-graduate' && s.country === 'Canada')) || SCHOLARSHIPS[0];

  useSEO({
    title: scholarship ? `${scholarship.name} - Eligibility & Application` : 'Scholarship Details',
    description: scholarship?.overview || scholarship?.coverageSummary,
    canonicalPath: scholarship ? `/scholarships/${scholarship.slug}` : '/scholarships'
  });

  const getStatusBadge = () => (
    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
      Open
    </span>
  );


  const handleDownloadGuide = () => {
    if (scholarship.officialSourceUrl) {
      window.open(scholarship.officialSourceUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/scholarships" className="hover:text-slate-800">Scholarships</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold truncate max-w-xs">{scholarship.name}</span>
        </nav>

        {/* Hero Landmark Banner */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 mb-8 bg-slate-900">
          <img
            src={scholarship.heroImage || '/images/scholarships/westminster.jpg'}
            alt={scholarship.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Scholarship Title & Summary Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm mb-8">
          
          {/* Header Row: Flag + Status */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">{scholarship.flag}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {scholarship.country}
              </span>
            </div>
            {getStatusBadge()}
          </div>

          <h1 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {scholarship.name}
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            By {scholarship.administeringBody}
          </p>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            {scholarship.overview}
          </p>

          {scholarship.statusNote && (
            <div className="mt-4 p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900 leading-relaxed font-medium">
                {scholarship.statusNote}
              </p>
            </div>
          )}

          {/* 4 Stats Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-100">
            
            {/* Tile 1: Study Level */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Study</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                {scholarship.studyLevel}
              </p>
            </div>

            {/* Tile 2: Application Status */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Application Status</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-emerald-700 mt-1">
                Open for Every Intake
              </p>
            </div>

            {/* Tile 3: Intake Schedule */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Intake Schedule</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                Always Open (Rolling)
              </p>
            </div>

            {/* Tile 4: Coverage */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Coverage</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1 line-clamp-1" title={scholarship.coverageSummary}>
                {scholarship.coverageSummary}
              </p>
            </div>

          </div>

        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto no-scrollbar gap-1 sm:gap-2">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'eligibility', label: 'Eligibility' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'process', label: 'Application Process' },
            { id: 'dates', label: 'Important Dates' },
            { id: 'faq', label: 'FAQ' }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DetailTab)}
                className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-[#C5A059] text-amber-800 font-extrabold'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm mb-10">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-10">
              
              {/* About the Scholarship */}
              <div>
                <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3">
                  About the Scholarship
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {scholarship.overview}
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {scholarship.keyBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-amber-50/40 border border-amber-200/60 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Column: Who Can Apply & Eligible Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
                    Who Can Apply?
                  </h3>
                  <ul className="space-y-2.5">
                    {scholarship.eligibilityCriteria.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
                    Eligible Fields
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    {scholarship.eligibleFields.map((field, idx) => (
                      <p key={idx}>{field}</p>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Target Disciplines
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {scholarship.fields.map((f, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-700">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Timeline Section */}
              {scholarship.timeline && scholarship.timeline.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-6">
                    Application Timeline ({scholarship.name.includes('Chevening') ? '2027–28 Intake' : 'Upcoming Intake'})
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {scholarship.timeline.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border transition-all ${
                          item.status === 'current'
                            ? 'bg-amber-50/70 border-amber-300'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 block mb-1">
                          {item.stage}
                        </span>
                        <p className={`text-sm font-bold ${
                          item.detail.includes('Closed') ? 'text-red-600' : 'text-slate-900'
                        }`}>
                          {item.date}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: ELIGIBILITY */}
          {activeTab === 'eligibility' && (
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">
                Detailed Eligibility Criteria
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Applicants must meet all criteria set by {scholarship.administeringBody} to be considered for evaluation:
              </p>

              <div className="space-y-4">
                {scholarship.eligibilityCriteria.map((criterion, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-0.5">
                      {criterion}
                    </p>
                  </div>
                ))}
              </div>

              {/* Advisory Callout */}
              <div className="mt-8 p-5 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-start gap-3.5">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-blue-900">Important Note on Eligibility</h4>
                  <p className="text-xs text-blue-800/90 mt-1 leading-relaxed">
                    Meeting the minimum eligibility criteria does not guarantee a scholarship. Selection is highly competitive and based on leadership, impact, personal vision, and academic potential.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BENEFITS */}
          {activeTab === 'benefits' && (
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">
                Financial Coverage & Scholar Privileges
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Below is the comprehensive breakdown of financial assistance provided under {scholarship.name}:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarship.coverageDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: APPLICATION PROCESS */}
          {activeTab === 'process' && (
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">
                How to Apply
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Follow this sequential procedure to ensure your application meets committee deadlines:
              </p>

              <div className="space-y-4">
                {scholarship.applicationProcess.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#071228] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Documents Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  Required Supporting Documents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {scholarship.documentsRequired.map((doc, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs text-slate-700">
                      • {doc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: IMPORTANT DATES */}
          {activeTab === 'dates' && (
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">
                Application Timelines & Key Milestones
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Key dates across the current and upcoming intake competition cycles:
              </p>

              <div className="space-y-4">
                {scholarship.timeline.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                        {item.stage}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.date}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        {item.detail}
                      </p>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold self-start sm:self-center ${
                      item.status === 'past'
                        ? 'bg-slate-200 text-slate-700'
                        : item.status === 'current'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {item.status ? item.status.toUpperCase() : 'SCHEDULED'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Answers to common queries regarding {scholarship.name}:
              </p>

              {scholarship.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-amber-700"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Official Source & Last Verified Row */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <span className="font-bold text-slate-800">Official Website:</span>
                <a
                  href={scholarship.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all inline-flex items-center gap-1"
                >
                  <span>{scholarship.officialSourceUrl}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
              <p className="text-[11px] text-slate-400">
                Last verified: {scholarship.lastVerifiedDate}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleDownloadGuide}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Download Official Guide</span>
              </button>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#071228] hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span>Enquire About This Scholarship</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Consultation Modal */}
      <ScholarshipConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultScholarshipName={scholarship.name}
        defaultDestination={scholarship.country}
      />

    </div>
  );
};

export default ScholarshipDetails;
