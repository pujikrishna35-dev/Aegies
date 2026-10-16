import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Info, ExternalLink, Download, Sparkles, AlertCircle } from 'lucide-react';
import { Scholarship } from '../../data/scholarships';

interface EligibilityGuideDrawerProps {
  scholarship: Scholarship | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: (scholarshipName: string) => void;
}

type TabType = 'criteria' | 'documents' | 'process' | 'tips' | 'resources';

export const EligibilityGuideDrawer: React.FC<EligibilityGuideDrawerProps> = ({
  scholarship,
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('criteria');

  if (!isOpen || !scholarship) return null;

  const handleDownload = () => {
    // Open official source or download guide
    if (scholarship.officialSourceUrl) {
      window.open(scholarship.officialSourceUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end transition-opacity duration-300">
      <div 
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-out animate-in slide-in-from-right"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">{scholarship.flag}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                {scholarship.country}
              </span>
            </div>
            <h2 id="drawer-title" className="text-xl font-display font-bold text-slate-900 mt-1">
              Eligibility & Guide
            </h2>
            <p className="text-xs text-slate-500 line-clamp-1">{scholarship.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-100 px-6 bg-slate-50/60 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('criteria')}
            className={`py-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'criteria'
                ? 'border-amber-600 text-amber-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Eligibility Criteria
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`py-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'documents'
                ? 'border-amber-600 text-amber-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Documents Required
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`py-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'process'
                ? 'border-amber-600 text-amber-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Selection Process
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`py-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'tips'
                ? 'border-amber-600 text-amber-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Tips
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`py-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'resources'
                ? 'border-amber-600 text-amber-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Official Resources
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'criteria' && (
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Detailed Eligibility Criteria
              </h3>
              <p className="text-xs text-slate-600 mb-5">
                To apply for the {scholarship.name}, you must meet the following official criteria:
              </p>

              <div className="space-y-3.5">
                {scholarship.eligibilityCriteria.map((item, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                      {index + 1}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed pt-0.5">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {scholarship.eligibleFields && scholarship.eligibleFields.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Eligible Academic Disciplines
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
                    {scholarship.eligibleFields.map((field, i) => (
                      <li key={i}>{field}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Callout Note */}
              <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-blue-900">Important Note</h4>
                  <p className="text-xs text-blue-800/90 mt-1 leading-relaxed">
                    Meeting the minimum eligibility criteria does not guarantee a scholarship. Selection is highly competitive and based on leadership, academic merit, impact and potential.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Documents & Dossier Checklist
              </h3>
              <p className="text-xs text-slate-600 mb-5">
                Ensure all documents are attested, translated into English if necessary, and up to date before submitting:
              </p>

              <div className="space-y-3">
                {scholarship.documentsRequired.map((doc, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <FileText className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-slate-800 leading-relaxed">
                      {doc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-900">Aegis Documentation Assistance</h4>
                  <p className="text-xs text-amber-800/90 mt-1 leading-relaxed">
                    Our advisors help review your Essays, Statements of Purpose, CV formatting, and Academic Transcripts to ensure compliance with committee guidelines.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Official Selection Process
              </h3>
              <p className="text-xs text-slate-600 mb-5">
                Evaluation follows rigorous institutional and diplomatic committee stages:
              </p>

              <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {scholarship.selectionProcess.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-3.5 pl-2">
                    <div className="w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow-sm shrink-0 mt-1 z-10" />
                    <div className="flex-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                        Stage {idx + 1}
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Winning Tips & Expert Strategy
              </h3>
              <p className="text-xs text-slate-600 mb-5">
                Recommendations curated by past scholars and senior Aegis education advisors:
              </p>

              <div className="space-y-3">
                {scholarship.tips.map((tip, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-amber-50/40 border border-amber-200/60 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Official Portals & Verification
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Always verify dates and eligibility terms directly against the administering government or university portal:
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Administering Organisation
                  </span>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">
                    {scholarship.administeringBody}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official Website
                  </span>
                  <a
                    href={scholarship.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 break-all inline-flex items-center gap-1 font-medium mt-0.5 underline"
                  >
                    <span>{scholarship.officialSourceUrl}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Last Verified Date
                  </span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {scholarship.lastVerifiedDate}
                  </p>
                </div>

                {scholarship.verificationNotes && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Advisor Notice</span>
                    </div>
                    <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                      {scholarship.verificationNotes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-100 bg-white shrink-0 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#071228] hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Download className="w-4 h-4 text-[#C5A059]" />
            <span>Download Complete Guide (Official Portal)</span>
          </button>
          {onOpenConsultation && (
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(scholarship.name);
              }}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#C5A059] hover:bg-[#E6C687] text-[#071228] font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
            >
              Book Consultation
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EligibilityGuideDrawer;
