import React from 'react';
import { X, Scale, Check, AlertCircle, ArrowRight, Building2 } from 'lucide-react';
import { UniversityMatchResult } from '../../services/matcherService';
import { Link } from 'react-router-dom';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedUniversities: UniversityMatchResult[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  selectedUniversities,
  onRemove,
  onClear,
}) => {
  if (!isOpen || selectedUniversities.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#FDFBF7]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#071228] text-[#C5A059] flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-extrabold text-[#071228]">
                Compare Universities
              </h3>
              <p className="text-xs text-slate-500">
                Comparing {selectedUniversities.length} of 3 selected institutions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClear}
              className="text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors"
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Table */}
        <div className="flex-1 overflow-x-auto p-6">
          <table className="w-full min-w-[650px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 px-3 w-40 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  Criteria
                </th>
                {selectedUniversities.map((item) => (
                  <th key={item.program.id} className="py-4 px-4 align-top">
                    <div className="relative p-3 rounded-2xl bg-[#FDFBF7] border border-amber-200/60 flex items-start gap-3">
                      <button
                        type="button"
                        onClick={() => onRemove(item.program.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 shadow"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>

                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                        {item.university.logo ? (
                          <img
                            src={item.university.logo}
                            alt={item.university.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Building2 className="w-5 h-5 text-slate-400" />
                        )}
                      </div>

                      <div className="pr-4">
                        <span className="font-extrabold text-[#071228] text-sm block line-clamp-1">
                          {item.university.name}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {item.university.city}, {item.university.country}
                        </span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {/* Match Score */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-600 bg-slate-50/50">Match Score</td>
                {selectedUniversities.map((item) => (
                  <td key={item.program.id} className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
                      {item.matchScore}% Match
                    </span>
                  </td>
                ))}
              </tr>

              {/* Eligibility */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-600 bg-slate-50/50">Eligibility</td>
                {selectedUniversities.map((item) => (
                  <td key={item.program.id} className="py-3 px-4">
                    {item.eligibility === 'ELIGIBLE' ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                        <Check className="w-4 h-4 text-emerald-600" /> Eligible
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-700 font-bold text-[11px]">
                        <AlertCircle className="w-4 h-4 text-rose-600" /> {item.eligibilityReason || 'Review Needed'}
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Program Course */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-600 bg-slate-50/50">Course / Program</td>
                {selectedUniversities.map((item) => (
                  <td key={item.program.id} className="py-3 px-4 font-semibold text-[#071228]">
                    {item.program.courseName}
                  </td>
                ))}
              </tr>

              {/* Study Level */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-600 bg-slate-50/50">Study Level</td>
                {selectedUniversities.map((item) => (
                  <td key={item.program.id} className="py-3 px-4">
                    {item.program.studyLevel} ({item.program.duration})
                  </td>
                ))}
              </tr>

              {/* Tuition */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-600 bg-slate-50/50">Tuition Fee</td>
                {selectedUniversities.map((item) => (
                  <td key={item.program.id} className="py-3 px-4">
                    <div className="font-extrabold text-[#071228]">
                      {item.program.tuitionInrLakhs.max === 0
                        ? 'Tuition-Free'
                        : `₹${item.program.tuitionInrLakhs.min}–${item.program.tuitionInrLakhs.max} Lakhs / yr`}
                    </div>
                    <div className="text-[10px] text-slate-500">{item.program.tuitionFeeLocal}</div>
                  </td>
                ))}
              </tr>

              {/* Intakes */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-600 bg-slate-50/50">Available Intakes</td>
                {selectedUniversities.map((item) => (
                  <td key={item.program.id} className="py-3 px-4">
                    {item.program.intakes.join(' • ')}
                  </td>
                ))}
              </tr>

              {/* Scholarships */}
              <tr>
                <td className="py-3 px-3 font-bold text-slate-600 bg-slate-50/50">Scholarships</td>
                {selectedUniversities.map((item) => (
                  <td key={item.program.id} className="py-3 px-4">
                    {item.program.scholarshipAvailable ? (
                      <span className="text-emerald-700 font-medium">
                        {item.program.scholarshipDetails || 'Aegis partner scholarship available'}
                      </span>
                    ) : (
                      <span className="text-slate-400">Standard institutional aid</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Actions */}
              <tr>
                <td className="py-4 px-3 font-bold text-slate-600 bg-slate-50/50">Details & Apply</td>
                {selectedUniversities.map((item) => (
                  <td key={item.program.id} className="py-4 px-4">
                    <Link
                      to={`/universities/${item.university.slug}`}
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#071228] hover:bg-[#142347] text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-[#FDFBF7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            Need help deciding between these institutions? Aegis counselors provide 1-on-1 personalized profile evaluations.
          </p>

          <Link
            to="/book-consultation"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow"
          >
            Book Free Profile Evaluation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
