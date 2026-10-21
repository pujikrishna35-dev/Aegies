import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Scholarship } from '../../data/scholarships';

interface ScholarshipCardProps {
  scholarship: Scholarship;
  onOpenGuide: (scholarship: Scholarship) => void;
  onOpenConsultation: (scholarshipName: string, destination: string) => void;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  scholarship,
  onOpenGuide,
  onOpenConsultation
}) => {
  const getStatusBadge = () => (
    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
      Open
    </span>
  );

  const isDiscontinued = false;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">{scholarship.flag}</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
              {scholarship.country === 'Canada' ? 'CANADA · FEDERAL RESEARCH AWARD' : scholarship.country}
            </span>
          </div>
          {getStatusBadge()}
        </div>

        {/* Title */}
        <Link 
          to={`/scholarships/${scholarship.slug}`}
          className="group block"
        >
          <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
            {scholarship.name}
          </h3>
        </Link>

        {/* Provider */}
        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
          By {scholarship.administeringBody}
        </p>

        {/* Coverage Container */}
        <div className="mt-4 p-3 rounded-xl bg-amber-50/50 border border-amber-200/60">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
            Coverage
          </span>
          <p className="text-xs font-semibold text-slate-800 line-clamp-2 leading-relaxed">
            {scholarship.coverageSummary}
          </p>
        </div>

        {/* Availability */}
        <div className="mt-4 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>
              <strong>Applications:</strong> <span className="text-emerald-700 font-semibold">Open for Every Intake</span>
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 items-center">
          {scholarship.fields.slice(0, 2).map((field, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium"
            >
              {field}
            </span>
          ))}
          {scholarship.fields.length > 2 && (
            <span className="px-2 py-1 rounded-lg bg-slate-50 text-slate-500 text-[11px] font-medium border border-slate-200">
              +{scholarship.fields.length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        {isDiscontinued ? (
          <>
            <Link
              to={`/scholarships/${scholarship.slug}`}
              className="text-xs font-bold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1"
            >
              View Details
            </Link>
            <button
              disabled
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs cursor-not-allowed"
            >
              Check Eligibility
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onOpenGuide(scholarship)}
              className="text-xs font-bold text-slate-700 hover:text-amber-700 inline-flex items-center gap-1 transition-colors"
            >
              <span>Eligibility & Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onOpenConsultation(scholarship.name, scholarship.country)}
              className="px-4 py-2 rounded-xl bg-[#071228] hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-sm active:scale-95"
            >
              Check Eligibility
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ScholarshipCard;
