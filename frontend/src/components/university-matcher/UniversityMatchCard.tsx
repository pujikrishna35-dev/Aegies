import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Scale,
  ExternalLink,
  MapPin,
  Calendar,
  IndianRupee,
  Award,
  AlertCircle,
  HelpCircle,
  Building2,
} from 'lucide-react';
import { UniversityMatchResult } from '../../services/matcherService';

interface UniversityMatchCardProps {
  result: UniversityMatchResult;
  isSelectedForCompare: boolean;
  onToggleCompare: (result: UniversityMatchResult) => void;
  canCompare: boolean;
}

export const UniversityMatchCard: React.FC<UniversityMatchCardProps> = ({
  result,
  isSelectedForCompare,
  onToggleCompare,
  canCompare,
}) => {
  const [expandedWhy, setExpandedWhy] = useState(false);
  const { university, program, matchScore, eligibility, eligibilityReason, breakdown, badges, whyThisMatchExplanation } = result;

  const isEligible = eligibility !== 'NOT_ELIGIBLE';

  // Badge color based on matchScore and eligibility
  const getBadgeStyle = () => {
    if (!isEligible) {
      return 'bg-rose-100 text-rose-800 border-rose-200';
    }
    if (matchScore >= 90) {
      return 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/20';
    }
    if (matchScore >= 75) {
      return 'bg-gradient-to-r from-[#071228] to-[#142347] text-[#C5A059] border border-[#C5A059]/40';
    }
    return 'bg-slate-100 text-slate-800 border-slate-200';
  };

  const getScoreCircleStroke = () => {
    if (!isEligible) return '#EF4444';
    if (matchScore >= 90) return '#D4AF37';
    if (matchScore >= 75) return '#071228';
    return '#64748B';
  };

  return (
    <div
      className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
        isSelectedForCompare
          ? 'ring-2 ring-[#C5A059] border-[#C5A059]'
          : isEligible
          ? 'border-slate-200/90 hover:border-amber-300'
          : 'border-rose-200 bg-rose-50/10'
      }`}
    >
      <div>
        {/* Top Bar: Logo & Match Score */}
        <div className="p-5 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0 shadow-inner">
              {university.logo ? (
                <img
                  src={university.logo}
                  alt={university.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                <Building2 className="w-6 h-6 text-slate-400" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>
                  {university.city}, {university.country}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#071228] line-clamp-1 leading-snug">
                {university.name}
              </h4>
            </div>
          </div>

          {/* Prominent Match % Indicator */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg className="w-14 h-14 transform -rotate-90">
                <circle
                  cx="28"
                  cy="28"
                  r="23"
                  stroke="#E2E8F0"
                  strokeWidth="4"
                  fill="transparent"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="23"
                  stroke={getScoreCircleStroke()}
                  strokeWidth="4"
                  strokeDasharray={144.5}
                  strokeDashoffset={144.5 - (144.5 * matchScore) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-black text-[#071228] leading-none">
                  {matchScore}%
                </span>
                <span className="text-[8px] font-bold uppercase tracking-tight text-slate-500 mt-0.5">
                  Match
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Program Title & Details */}
        <div className="p-5 pt-4">
          <div className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/60 mb-2">
            {program.studyLevel}
          </div>

          <h5 className="text-sm sm:text-base font-extrabold text-[#071228] line-clamp-2">
            {program.courseName}
          </h5>

          {/* Ineligible Alert Banner */}
          {!isEligible && (
            <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2 text-rose-800 text-xs">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="font-semibold">{eligibilityReason || 'Admission criteria requirement not met'}</div>
            </div>
          )}

          {/* Key Checklist Badges */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px]">
            <div className={`flex items-center gap-1.5 font-medium ${badges.courseMatch ? 'text-emerald-700' : 'text-slate-400'}`}>
              <CheckCircle2 className={`w-3.5 h-3.5 ${badges.courseMatch ? 'text-emerald-600' : 'text-slate-300'}`} />
              <span>Course Match</span>
            </div>
            <div className={`flex items-center gap-1.5 font-medium ${badges.countryMatch ? 'text-emerald-700' : 'text-slate-400'}`}>
              <CheckCircle2 className={`w-3.5 h-3.5 ${badges.countryMatch ? 'text-emerald-600' : 'text-slate-300'}`} />
              <span>Country Match</span>
            </div>
            <div className={`flex items-center gap-1.5 font-medium ${badges.studyLevelMatch ? 'text-emerald-700' : 'text-slate-400'}`}>
              <CheckCircle2 className={`w-3.5 h-3.5 ${badges.studyLevelMatch ? 'text-emerald-600' : 'text-slate-300'}`} />
              <span>Study Level</span>
            </div>
            <div className={`flex items-center gap-1.5 font-medium ${badges.englishMatch ? 'text-emerald-700' : 'text-slate-400'}`}>
              <CheckCircle2 className={`w-3.5 h-3.5 ${badges.englishMatch ? 'text-emerald-600' : 'text-slate-300'}`} />
              <span>English Requirement</span>
            </div>
            <div className={`flex items-center gap-1.5 font-medium ${badges.budgetCompatible ? 'text-emerald-700' : 'text-slate-400'} col-span-2`}>
              <CheckCircle2 className={`w-3.5 h-3.5 ${badges.budgetCompatible ? 'text-emerald-600' : 'text-slate-300'}`} />
              <span>Budget Compatible</span>
            </div>
          </div>

          {/* Tuition & Intakes Info */}
          <div className="mt-4 p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Estimated Tuition</span>
              <span className="font-extrabold text-[#071228]">
                {program.tuitionInrLakhs.max === 0
                  ? 'Tuition-Free (Govt Funded)'
                  : `₹${program.tuitionInrLakhs.min}–${program.tuitionInrLakhs.max} Lakhs / year`}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Intakes</span>
              <span className="font-medium text-slate-700">
                {program.intakes.slice(0, 2).join(' • ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer & Expandable "Why this match?" */}
      <div className="p-5 pt-0">
        {/* Expandable "Why this match?" Accordion */}
        <div className="mt-2 border-t border-slate-100 pt-3">
          <button
            type="button"
            onClick={() => setExpandedWhy(!expandedWhy)}
            className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-[#071228] transition-colors py-1"
          >
            <div className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>WHY THIS MATCH?</span>
            </div>
            {expandedWhy ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>

          {expandedWhy && (
            <div className="mt-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-amber-200/70 text-xs text-slate-700 space-y-2.5 animate-fade-in">
              <div className="space-y-1.5 pb-2 border-b border-amber-200/50">
                <div className="flex justify-between">
                  <span className="text-slate-600">Course Match</span>
                  <span className="font-bold text-[#071228]">{breakdown.course}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Country Match</span>
                  <span className="font-bold text-[#071228]">{breakdown.country}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Study Level</span>
                  <span className="font-bold text-[#071228]">{breakdown.studyLevel}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">English Score</span>
                  <span className="font-bold text-[#071228]">{breakdown.english}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Budget</span>
                  <span className="font-bold text-[#071228]">{breakdown.budget}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Intake</span>
                  <span className="font-bold text-[#071228]">{breakdown.intake}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Eligibility</span>
                  <span className="font-bold text-[#071228]">{breakdown.eligibility}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between font-extrabold text-[#071228] pt-0.5">
                <span>Overall Match:</span>
                <span className="text-amber-700">{matchScore}%</span>
              </div>

              <p className="text-[11px] leading-relaxed text-slate-600 italic bg-white/70 p-2.5 rounded-lg border border-amber-200/40">
                "{whyThisMatchExplanation}"
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons: [ VIEW UNIVERSITY ] & [ COMPARE ] */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Link
            to={`/universities/${university.slug}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#071228] hover:bg-[#142347] text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <span>VIEW UNIVERSITY</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
          </Link>

          <button
            type="button"
            onClick={() => onToggleCompare(result)}
            disabled={!isSelectedForCompare && !canCompare}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all ${
              isSelectedForCompare
                ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 disabled:opacity-40'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{isSelectedForCompare ? 'SELECTED' : 'COMPARE'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversityMatchCard;
