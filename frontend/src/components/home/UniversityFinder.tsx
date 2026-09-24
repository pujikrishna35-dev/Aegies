import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, GraduationCap, Sparkles, AlertCircle } from 'lucide-react';
import { matcherService, MatcherSearchParams, UniversityMatchResult } from '../../services/matcherService';
import SteppedLoader from '../university-matcher/SteppedLoader';
import MatchingResultsSection from '../university-matcher/MatchingResultsSection';

export const UniversityFinder: React.FC = () => {
  const [level, setLevel] = useState("Master's");
  const [country, setCountry] = useState('Canada');
  const [course, setCourse] = useState('Computer Science');
  const [test, setTest] = useState('IELTS');
  const [score, setScore] = useState('7.0');
  const [budget, setBudget] = useState('20-30');

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [matchResults, setMatchResults] = useState<UniversityMatchResult[] | null>(null);
  const [lastSearchParams, setLastSearchParams] = useState<MatcherSearchParams | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);

  // Dynamic score options according to selected English Test
  const getScoreOptions = () => {
    switch (test) {
      case 'IELTS':
        return [
          { value: '5.5', label: '5.5 Band' },
          { value: '6.0', label: '6.0 Band' },
          { value: '6.5', label: '6.5 Band' },
          { value: '7.0', label: '7.0 Band' },
          { value: '7.5', label: '7.5 Band' },
          { value: '8.0', label: '8.0 Band' },
          { value: '8.5', label: '8.5+ Band' },
        ];
      case 'PTE':
        return [
          { value: '50', label: '50 Score' },
          { value: '58', label: '58 Score' },
          { value: '62', label: '62 Score' },
          { value: '65', label: '65 Score' },
          { value: '70', label: '70 Score' },
          { value: '75', label: '75 Score' },
          { value: '80', label: '80+ Score' },
        ];
      case 'TOEFL':
        return [
          { value: '75', label: '75–80' },
          { value: '85', label: '85–90' },
          { value: '92', label: '92–98' },
          { value: '100', label: '100–105' },
          { value: '110', label: '110+' },
        ];
      case 'Duolingo':
        return [
          { value: '105', label: '105 Score' },
          { value: '115', label: '115 Score' },
          { value: '120', label: '120 Score' },
          { value: '125', label: '125 Score' },
          { value: '130', label: '130 Score' },
          { value: '140', label: '140+ Score' },
        ];
      case 'OET':
        return [
          { value: '300', label: '300 (Grade C+)' },
          { value: '350', label: '350 (Grade B)' },
          { value: '400', label: '400 (Grade B+)' },
          { value: '450', label: '450 (Grade A)' },
        ];
      default:
        return [
          { value: '0', label: 'Not Yet Taken / Waiver Requested' },
        ];
    }
  };

  // Adjust default score when test changes
  useEffect(() => {
    if (test === 'IELTS') setScore('7.0');
    else if (test === 'PTE') setScore('65');
    else if (test === 'TOEFL') setScore('92');
    else if (test === 'Duolingo') setScore('120');
    else if (test === 'OET') setScore('350');
    else setScore('0');
  }, [test]);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setValidationError('');

    if (!level) {
      setValidationError('Please select your preferred study level.');
      return;
    }
    if (!country) {
      setValidationError('Please select a target study destination.');
      return;
    }
    if (!course) {
      setValidationError('Please select your desired course or academic field.');
      return;
    }

    const searchParams: MatcherSearchParams = {
      studyLevel: level,
      country,
      course,
      englishTest: test,
      englishScore: Number(score) || 0,
      budget,
    };

    setLastSearchParams(searchParams);
    setIsLoading(true);
  };

  const handleLoadingComplete = async () => {
    if (!lastSearchParams) return;
    try {
      const response = await matcherService.search(lastSearchParams);
      setMatchResults(response.results);
      setIsLoading(false);

      // Smooth scroll to results
      setTimeout(() => {
        const el = document.getElementById('matching-results');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (err) {
      console.error('Error fetching university matches', err);
      setIsLoading(false);
    }
  };

  const handleResetFilters = () => {
    setLevel("Master's");
    setCountry('Canada');
    setCourse('Computer Science');
    setTest('IELTS');
    setScore('7.0');
    setBudget('20-30');
    setMatchResults(null);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7]" id="university-finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Form (7 cols / ~60%) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                UNIVERSITY FINDER
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
                FIND YOUR PERFECT UNIVERSITY
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Search top universities based on your profile and preferences.
              </p>

              {validationError && (
                <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs font-semibold text-rose-800 animate-fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* 6 Dropdowns in 2 columns with fixed stacking context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* 1. Study Level */}
                <div className="relative z-10">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Study Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-2xs transition-colors"
                  >
                    <option value="">Select level</option>
                    <option value="Undergraduate">Undergraduate / Bachelor's</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="Master's">Master's Degree</option>
                    <option value="MBA">MBA (Master of Business Admin)</option>
                    <option value="PhD">PhD / Doctorate</option>
                    <option value="Diploma">Diploma / Post-Grad Diploma</option>
                    <option value="Certificate">Certificate Program</option>
                  </select>
                </div>

                {/* 2. Country (Aegis Destinations) */}
                <div className="relative z-10">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-2xs transition-colors"
                  >
                    <option value="">Select country</option>
                    <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                    <option value="United States (USA)">United States (USA)</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ireland">Ireland</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Europe (Schengen)">Europe (Schengen)</option>
                  </select>
                </div>

                {/* 3. Course / Field */}
                <div className="relative z-10">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Course / Field
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-2xs transition-colors"
                  >
                    <option value="">Select course</option>
                    <option value="Computer Science">Computer Science & IT</option>
                    <option value="Data Science">Data Science & AI</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Business Administration">Business Administration & Management</option>
                    <option value="Finance">Finance & Accounting</option>
                    <option value="Engineering">Engineering (General)</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil & Structural Engineering</option>
                    <option value="Electrical Engineering">Electrical & Electronics</option>
                    <option value="Healthcare">Healthcare & Public Health</option>
                    <option value="Nursing">Nursing Practice</option>
                    <option value="Pharmacy">Pharmacy & Pharmacology</option>
                    <option value="Architecture">Architecture & Urban Planning</option>
                    <option value="Hospitality">Hospitality & Tourism</option>
                  </select>
                </div>

                {/* 4. English Test */}
                <div className="relative z-10">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    English Test
                  </label>
                  <select
                    value={test}
                    onChange={(e) => setTest(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-2xs transition-colors"
                  >
                    <option value="IELTS">IELTS</option>
                    <option value="PTE">PTE Academic</option>
                    <option value="TOEFL">TOEFL iBT</option>
                    <option value="Duolingo">Duolingo English Test</option>
                    <option value="OET">OET</option>
                    <option value="NONE">Other / Not Required / Not Taken</option>
                  </select>
                </div>

                {/* 5. English Score (Dynamic based on selected test) */}
                <div className="relative z-10">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {test === 'NONE' ? 'English Status' : `${test} Score`}
                  </label>
                  <select
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    disabled={test === 'NONE'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-2xs disabled:bg-slate-100 disabled:text-slate-400 transition-colors"
                  >
                    {getScoreOptions().map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Budget */}
                <div className="relative z-10">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Budget (Tuition / Year)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-2xs transition-colors"
                  >
                    <option value="under10">Under ₹10 Lakhs</option>
                    <option value="10-20">₹10–20 Lakhs</option>
                    <option value="20-30">₹20–30 Lakhs</option>
                    <option value="30-40">₹30–40 Lakhs</option>
                    <option value="40-50">₹40–50 Lakhs</option>
                    <option value="above50">Above ₹50 Lakhs</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => handleSearch()}
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all disabled:opacity-50"
              >
                <span>{isLoading ? 'ANALYZING PROFILE...' : 'FIND MATCHING UNIVERSITIES'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Campus Card (5 cols / ~40%) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col justify-between min-h-[340px] bg-[#071228]">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
              alt="World-Class University Campus"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-[#071228]/40 to-black/20" />

            {/* Top Badge */}
            <div className="relative z-10 p-6 flex justify-end">
              <div className="w-11 h-11 rounded-full bg-[#071228]/80 backdrop-blur-md border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            {/* Card Content & Navy Banner */}
            <div className="relative z-10 p-6">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                Your Dream University <br />Awaits
              </h3>
              <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-slate-300 font-medium">
                <span>Compare. Explore. Choose. We'll help you find the right fit.</span>
                <span className="text-[#C5A059] font-bold ml-2">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stepped Loading Animation */}
        {isLoading && (
          <SteppedLoader onComplete={handleLoadingComplete} minDurationMs={1600} />
        )}

        {/* Real Matching Results Section */}
        {matchResults && !isLoading && lastSearchParams && (
          <div ref={resultsRef}>
            <MatchingResultsSection
              results={matchResults}
              preferences={lastSearchParams}
              onResetFilters={handleResetFilters}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default UniversityFinder;
