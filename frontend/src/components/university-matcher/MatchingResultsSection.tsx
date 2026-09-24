import React, { useState, useMemo } from 'react';
import {
  UniversityMatchResult,
  MatcherSearchParams,
} from '../../services/matcherService';
import UniversityMatchCard from './UniversityMatchCard';
import CompareModal from './CompareModal';
import {
  Filter,
  ArrowUpDown,
  Sparkles,
  Scale,
  RefreshCw,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react';

interface MatchingResultsSectionProps {
  results: UniversityMatchResult[];
  preferences: MatcherSearchParams;
  onResetFilters: () => void;
}

type SortOption = 'BEST_MATCH' | 'HIGHEST_MATCH' | 'LOWEST_TUITION' | 'UNIVERSITY_NAME';
type CategoryFilter = 'ALL' | 'BEST' | 'GOOD' | 'POSSIBLE' | 'NOT_ELIGIBLE';

export const MatchingResultsSection: React.FC<MatchingResultsSectionProps> = ({
  results,
  preferences,
  onResetFilters,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('BEST_MATCH');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');
  const [selectedForCompare, setSelectedForCompare] = useState<UniversityMatchResult[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Group by category
  const bestMatches = useMemo(
    () => results.filter((r) => r.eligibility === 'ELIGIBLE' && r.matchScore >= 90),
    [results]
  );
  const goodMatches = useMemo(
    () => results.filter((r) => r.eligibility === 'ELIGIBLE' && r.matchScore >= 75 && r.matchScore < 90),
    [results]
  );
  const possibleMatches = useMemo(
    () => results.filter((r) => r.eligibility === 'POSSIBLE_MATCH' || (r.eligibility === 'ELIGIBLE' && r.matchScore < 75)),
    [results]
  );
  const notEligible = useMemo(
    () => results.filter((r) => r.eligibility === 'NOT_ELIGIBLE'),
    [results]
  );

  // Filter based on active tab
  const filteredList = useMemo(() => {
    let list = results;
    if (activeCategory === 'BEST') list = bestMatches;
    else if (activeCategory === 'GOOD') list = goodMatches;
    else if (activeCategory === 'POSSIBLE') list = possibleMatches;
    else if (activeCategory === 'NOT_ELIGIBLE') list = notEligible;

    // Apply sorting
    return [...list].sort((a, b) => {
      if (sortBy === 'BEST_MATCH') {
        const rank = { ELIGIBLE: 3, POSSIBLE_MATCH: 2, NOT_ELIGIBLE: 1 };
        const diff = rank[b.eligibility] - rank[a.eligibility];
        if (diff !== 0) return diff;
        return b.matchScore - a.matchScore;
      }
      if (sortBy === 'HIGHEST_MATCH') {
        return b.matchScore - a.matchScore;
      }
      if (sortBy === 'LOWEST_TUITION') {
        return a.program.tuitionInrLakhs.min - b.program.tuitionInrLakhs.min;
      }
      if (sortBy === 'UNIVERSITY_NAME') {
        return a.university.name.localeCompare(b.university.name);
      }
      return 0;
    });
  }, [results, activeCategory, bestMatches, goodMatches, possibleMatches, notEligible, sortBy]);

  // Handle Compare
  const handleToggleCompare = (item: UniversityMatchResult) => {
    const exists = selectedForCompare.some((s) => s.program.id === item.program.id);
    if (exists) {
      setSelectedForCompare(selectedForCompare.filter((s) => s.program.id !== item.program.id));
    } else {
      if (selectedForCompare.length < 3) {
        setSelectedForCompare([...selectedForCompare, item]);
      }
    }
  };

  const handleRemoveCompare = (id: string) => {
    setSelectedForCompare(selectedForCompare.filter((s) => s.program.id !== id));
  };

  // Human friendly preferences pills
  const criteriaPills = [
    preferences.country || 'Any Destination',
    preferences.studyLevel || 'Any Level',
    preferences.course || 'Any Course',
    preferences.englishTest && preferences.englishTest !== 'NONE'
      ? `${preferences.englishTest} ${preferences.englishScore || ''}`.trim()
      : 'English Open',
    preferences.budget ? `Budget: ${preferences.budget.replace('under', '<').replace('above', '>')}` : 'Any Budget',
  ];

  return (
    <div className="mt-12 pt-10 border-t border-slate-200/80 animate-fade-in" id="matching-results">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-[#071228] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>AI MATCHING ENGINE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#071228] tracking-tight">
            YOUR UNIVERSITY MATCHES
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            We found universities that match your study preferences and profile.
          </p>

          {/* Selected Criteria Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {criteriaPills.map((pill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Count & Sorting */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="text-xs text-slate-500 font-semibold px-3 py-2 bg-white rounded-xl border border-slate-200">
            <span className="font-extrabold text-[#071228]">{results.length}</span> Universities Found
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-slate-600 whitespace-nowrap">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-[#071228] focus:outline-none focus:border-[#C5A059] shadow-2xs"
            >
              <option value="BEST_MATCH">Best Match</option>
              <option value="HIGHEST_MATCH">Highest Match %</option>
              <option value="LOWEST_TUITION">Lowest Tuition</option>
              <option value="UNIVERSITY_NAME">University Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 my-6">
        <button
          type="button"
          onClick={() => setActiveCategory('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'ALL'
              ? 'bg-[#071228] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Matches ({results.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveCategory('BEST')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'BEST'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Best Matches (90–100%) ({bestMatches.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveCategory('GOOD')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'GOOD'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Good Matches (75–89%) ({goodMatches.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveCategory('POSSIBLE')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'POSSIBLE'
              ? 'bg-slate-800 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Possible Matches (60–74%) ({possibleMatches.length})
        </button>

        {notEligible.length > 0 && (
          <button
            type="button"
            onClick={() => setActiveCategory('NOT_ELIGIBLE')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'NOT_ELIGIBLE'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
            }`}
          >
            Not Eligible ({notEligible.length})
          </button>
        )}
      </div>

      {/* Results Grid */}
      {filteredList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((res) => (
            <UniversityMatchCard
              key={res.program.id}
              result={res}
              isSelectedForCompare={selectedForCompare.some((s) => s.program.id === res.program.id)}
              onToggleCompare={handleToggleCompare}
              canCompare={selectedForCompare.length < 3}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-slate-200 max-w-2xl mx-auto my-8">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-4 text-amber-700">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <h4 className="text-xl font-bold text-[#071228]">No exact matches found.</h4>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            We couldn't find a university that meets all your selected requirements. Try adjusting your budget, destination, course or English score.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={onResetFilters}
              className="px-6 py-2.5 rounded-xl bg-[#071228] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#142347] transition-all"
            >
              Adjust Filters
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('ALL')}
              className="px-6 py-2.5 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs uppercase tracking-wider hover:bg-amber-200 transition-all"
            >
              View Close Matches
            </button>
          </div>
        </div>
      )}

      {/* Floating Comparison Drawer / Bar */}
      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-6 inset-x-4 sm:inset-x-auto sm:right-8 z-40 bg-[#071228] text-white p-4 rounded-2xl shadow-2xl border border-[#C5A059]/40 flex items-center gap-4 animate-slide-up">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs">
              {selectedForCompare.length}/3
            </div>
            <div>
              <span className="text-xs font-bold block">Selected for Compare</span>
              <span className="text-[10px] text-slate-300">
                {selectedForCompare.map((s) => s.university.name.split(' ')[0]).join(', ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsCompareModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow"
            >
              Compare
            </button>
            <button
              type="button"
              onClick={() => setSelectedForCompare([])}
              className="text-xs text-slate-400 hover:text-white px-2"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Comparison Modal */}
      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        selectedUniversities={selectedForCompare}
        onRemove={handleRemoveCompare}
        onClear={() => setSelectedForCompare([])}
      />
    </div>
  );
};

export default MatchingResultsSection;
