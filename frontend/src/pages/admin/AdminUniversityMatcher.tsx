import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Save,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Percent,
  Sliders,
  Play,
  Building2,
  HelpCircle,
} from 'lucide-react';
import { matcherService, MatchWeights, UniversityMatchResult } from '../../services/matcherService';

export const AdminUniversityMatcher: React.FC = () => {
  const [weights, setWeights] = useState<MatchWeights>({
    course: 30,
    country: 20,
    studyLevel: 15,
    budget: 15,
    english: 10,
    intake: 5,
    eligibility: 5,
  });

  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Simulation test bench state
  const [simLevel, setSimLevel] = useState("Master's");
  const [simCountry, setSimCountry] = useState('Canada');
  const [simCourse, setSimCourse] = useState('Computer Science');
  const [simTest, setSimTest] = useState('IELTS');
  const [simScore, setSimScore] = useState(7.0);
  const [simBudget, setSimBudget] = useState('20-30');
  const [simulating, setSimulating] = useState(false);
  const [simResults, setSimResults] = useState<UniversityMatchResult[] | null>(null);

  useEffect(() => {
    const fetchWeights = async () => {
      try {
        const w = await matcherService.getWeights();
        setWeights(w);
      } catch (err) {
        console.error('Failed to load weights', err);
      }
    };
    fetchWeights();
  }, []);

  const totalWeight =
    Number(weights.course) +
    Number(weights.country) +
    Number(weights.studyLevel) +
    Number(weights.budget) +
    Number(weights.english) +
    Number(weights.intake) +
    Number(weights.eligibility);

  const isValidTotal = Math.abs(totalWeight - 100) < 0.01;

  const handleWeightChange = (key: keyof MatchWeights, value: number) => {
    setWeights((prev) => ({
      ...prev,
      [key]: value,
    }));
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleResetDefaults = () => {
    setWeights({
      course: 30,
      country: 20,
      studyLevel: 15,
      budget: 15,
      english: 10,
      intake: 5,
      eligibility: 5,
    });
    setSuccessMsg('Reset to Aegis recommended default weights (Total: 100%). Click Save to commit.');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidTotal) {
      setErrorMsg(`Cannot save: Total weights must equal exactly 100%. Current sum is ${totalWeight}%.`);
      return;
    }

    try {
      setSaving(true);
      setErrorMsg('');
      await matcherService.updateWeights(weights);
      setSuccessMsg('University Matcher configuration weights saved successfully to backend engine!');
      setTimeout(() => setSuccessMsg(''), 4500);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save weights');
    } finally {
      setSaving(false);
    }
  };

  const handleRunSimulation = async () => {
    setSimulating(true);
    try {
      const res = await matcherService.search({
        studyLevel: simLevel,
        country: simCountry,
        course: simCourse,
        englishTest: simTest,
        englishScore: simScore,
        budget: simBudget,
      });
      setSimResults(res.results.slice(0, 4));
    } catch (err) {
      console.error('Simulation error', err);
    } finally {
      setSimulating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-[#071228] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>CORE ALGORITHM ENGINE</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">University Matcher Settings</h1>
          <p className="text-sm text-slate-500 mt-1">
            Configure scoring weights for the Aegis University Recommendation Engine. The backend ranks institutions dynamically based on these criteria.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold shadow-2xs transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving || !isValidTotal}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#071228] hover:bg-[#142347] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all disabled:opacity-40"
          >
            <Save className="w-4 h-4 text-[#C5A059]" />
            <span>{saving ? 'Saving...' : 'Save Weights'}</span>
          </button>
        </div>
      </div>

      {/* Status Alerts */}
      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-sm animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-800 text-sm animate-fade-in">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Grid: Weights Manager (7 cols) + Simulator (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Weight Sliders */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#C5A059]" />
                <span>Matching Factor Weights</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Adjust the relative importance of each dimension in the composite score.
              </p>
            </div>

            {/* Live Total Sum Indicator */}
            <div
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 border transition-all ${
                isValidTotal
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-rose-50 border-rose-300 text-rose-800'
              }`}
            >
              {isValidTotal ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              )}
              <span>Total: {totalWeight}%</span>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-5">
            {/* 1. Course Match */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Course Match (30% recommended)
                </label>
                <span className="text-xs font-extrabold text-[#071228] px-2 py-0.5 bg-slate-100 rounded-md">
                  {weights.course}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="1"
                value={weights.course}
                onChange={(e) => handleWeightChange('course', Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-0.5">
                Evaluates exact degree match, specialized tracks, and academic department taxonomy.
              </p>
            </div>

            {/* 2. Country Match */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Country Match (20% recommended)
                </label>
                <span className="text-xs font-extrabold text-[#071228] px-2 py-0.5 bg-slate-100 rounded-md">
                  {weights.country}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={weights.country}
                onChange={(e) => handleWeightChange('country', Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-0.5">
                Matches target destination (UK, USA, Canada, Australia, Germany, Ireland, etc.).
              </p>
            </div>

            {/* 3. Study Level */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Study Level Match (15% recommended)
                </label>
                <span className="text-xs font-extrabold text-[#071228] px-2 py-0.5 bg-slate-100 rounded-md">
                  {weights.studyLevel}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={weights.studyLevel}
                onChange={(e) => handleWeightChange('studyLevel', Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-0.5">
                Undergraduate, Postgraduate, Master's, MBA, PhD qualification levels.
              </p>
            </div>

            {/* 4. Budget Match */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Budget Match (15% recommended)
                </label>
                <span className="text-xs font-extrabold text-[#071228] px-2 py-0.5 bg-slate-100 rounded-md">
                  {weights.budget}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={weights.budget}
                onChange={(e) => handleWeightChange('budget', Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-0.5">
                Evaluates tuition bracket in INR Lakhs against student's designated budget band.
              </p>
            </div>

            {/* 5. English Score */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  English Score Match (10% recommended)
                </label>
                <span className="text-xs font-extrabold text-[#071228] px-2 py-0.5 bg-slate-100 rounded-md">
                  {weights.english}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={weights.english}
                onChange={(e) => handleWeightChange('english', Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-0.5">
                Validates test standards (IELTS, PTE, TOEFL, Duolingo). Failing mandatory score triggers Not Eligible.
              </p>
            </div>

            {/* 6. Intake Match */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Intake Match (5% recommended)
                </label>
                <span className="text-xs font-extrabold text-[#071228] px-2 py-0.5 bg-slate-100 rounded-md">
                  {weights.intake}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={weights.intake}
                onChange={(e) => handleWeightChange('intake', Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-0.5">
                Rewards institutions with upcoming open intakes aligned with the applicant timeline.
              </p>
            </div>

            {/* 7. Eligibility Match */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Eligibility Match (5% recommended)
                </label>
                <span className="text-xs font-extrabold text-[#071228] px-2 py-0.5 bg-slate-100 rounded-md">
                  {weights.eligibility}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={weights.eligibility}
                onChange={(e) => handleWeightChange('eligibility', Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-400 mt-0.5">
                General academic prerequisite verification.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Test Simulator */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Play className="w-4 h-4 text-amber-600" />
                <span>Real-Time Match Simulator</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Test profile matching with current weights to preview rank order.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Study Level</label>
                <select
                  value={simLevel}
                  onChange={(e) => setSimLevel(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Master's">Master's</option>
                  <option value="MBA">MBA</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Destination</label>
                <select
                  value={simCountry}
                  onChange={(e) => setSimCountry(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom (UK)">United Kingdom</option>
                  <option value="United States (USA)">United States</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ireland">Ireland</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Course Field</label>
              <select
                value={simCourse}
                onChange={(e) => setSimCourse(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
              >
                <option value="Computer Science">Computer Science & IT</option>
                <option value="Data Science">Data Science</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Test & Score</label>
                <div className="flex gap-1.5">
                  <select
                    value={simTest}
                    onChange={(e) => setSimTest(e.target.value)}
                    className="w-1/2 p-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="IELTS">IELTS</option>
                    <option value="PTE">PTE</option>
                    <option value="TOEFL">TOEFL</option>
                  </select>
                  <input
                    type="number"
                    step="0.5"
                    value={simScore}
                    onChange={(e) => setSimScore(Number(e.target.value))}
                    className="w-1/2 p-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Budget</label>
                <select
                  value={simBudget}
                  onChange={(e) => setSimBudget(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="under10">&lt; ₹10 Lakhs</option>
                  <option value="10-20">₹10–20 Lakhs</option>
                  <option value="20-30">₹20–30 Lakhs</option>
                  <option value="30-40">₹30–40 Lakhs</option>
                  <option value="above50">&gt; ₹50 Lakhs</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRunSimulation}
              disabled={simulating}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              {simulating ? 'Calculating...' : 'Run Simulation Preview'}
            </button>
          </div>

          {/* Simulation Output */}
          {simResults && (
            <div className="space-y-3 pt-4 border-t border-slate-100 animate-fade-in">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Top Simulated Matches
              </span>
              {simResults.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-bold text-[#071228] block line-clamp-1">{item.university.name}</span>
                    <span className="text-[10px] text-slate-500">{item.program.courseName}</span>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-block px-2 py-0.5 rounded-full font-black text-xs bg-amber-100 text-amber-900 border border-amber-300">
                      {item.matchScore}%
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">{item.eligibility}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUniversityMatcher;
