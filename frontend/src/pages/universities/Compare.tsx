import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Scale, Check, AlertCircle, ArrowRight, Building2, Plus, Sparkles } from 'lucide-react';
import { matcherService, UniversityMatchResult } from '../../services/matcherService';

export const Compare: React.FC = () => {
  const [allUniversities, setAllUniversities] = useState<UniversityMatchResult[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await matcherService.search({
          studyLevel: '',
          course: '',
          country: '',
          englishTest: 'NONE',
          budget: 'above50',
        });
        setAllUniversities(res.results);
        if (res.results.length >= 2) {
          setSelectedIds([res.results[0].program.id, res.results[1].program.id]);
        }
      } catch (err) {
        console.error('Failed to load universities for comparison', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const selectedItems = selectedIds
    .map((id) => allUniversities.find((u) => u.program.id === id))
    .filter(Boolean) as UniversityMatchResult[];

  const handleSelectSlot = (idx: number, newId: string) => {
    const updated = [...selectedIds];
    if (newId === '') {
      updated.splice(idx, 1);
    } else {
      updated[idx] = newId;
    }
    setSelectedIds(updated);
  };

  const handleAddSlot = () => {
    if (selectedIds.length < 3 && allUniversities.length > selectedIds.length) {
      const remaining = allUniversities.find((u) => !selectedIds.includes(u.program.id));
      if (remaining) {
        setSelectedIds([...selectedIds, remaining.program.id]);
      }
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] min-h-screen">
      <div className="flex items-center justify-between gap-4 mb-6">
        <Link to="/" className="text-xs font-bold text-amber-600 uppercase tracking-widest hover:underline">
          ← Back to Home
        </Link>
        <Link
          to="/university-finder"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch AI Matcher</span>
        </Link>
      </div>

      <div className="max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
          Compare Universities & Programs
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          Side-by-side objective evaluation of tuition fees, admission requirements, intakes, and post-study opportunities across partner institutions.
        </p>
      </div>

      {loading ? (
        <div className="py-20 text-center">
          <div className="inline-block w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-slate-500 text-xs font-semibold">Loading comparison matrices...</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Slot selector row */}
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Comparing {selectedItems.length} of 3 Institutions
            </span>
            {selectedIds.length < 3 && (
              <button
                type="button"
                onClick={handleAddSlot}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 shadow-2xs"
              >
                <Plus className="w-3.5 h-3.5 text-amber-600" />
                <span>Add Another University</span>
              </button>
            )}
          </div>

          <div className="overflow-x-auto p-6">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 w-44 text-slate-400 font-bold uppercase text-[10px]">
                    Select Institution
                  </th>
                  {selectedItems.map((item, idx) => (
                    <th key={idx} className="py-4 px-4 align-top">
                      <select
                        value={item.program.id}
                        onChange={(e) => handleSelectSlot(idx, e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 bg-[#FDFBF7] text-xs font-bold text-[#071228] mb-3 focus:outline-none focus:border-[#C5A059]"
                      >
                        {allUniversities.map((u) => (
                          <option key={u.program.id} value={u.program.id}>
                            {u.university.name} - {u.program.courseName.split(' ')[0]}
                          </option>
                        ))}
                      </select>

                      <div className="p-3 rounded-2xl bg-[#FDFBF7] border border-amber-200/60 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                          {item.university.logo ? (
                            <img src={item.university.logo} alt={item.university.name} className="w-full h-full object-cover" />
                          ) : (
                            <Building2 className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                        <div>
                          <span className="font-extrabold text-[#071228] text-sm block line-clamp-1">{item.university.name}</span>
                          <span className="text-[11px] text-slate-500">{item.university.city}, {item.university.country}</span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-600 bg-slate-50/50">Degree & Course</td>
                  {selectedItems.map((item, idx) => (
                    <td key={idx} className="py-3.5 px-4 font-extrabold text-[#071228]">
                      {item.program.courseName}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-600 bg-slate-50/50">Study Level</td>
                  {selectedItems.map((item, idx) => (
                    <td key={idx} className="py-3.5 px-4">
                      {item.program.studyLevel} ({item.program.duration})
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-600 bg-slate-50/50">Tuition Fee</td>
                  {selectedItems.map((item, idx) => (
                    <td key={idx} className="py-3.5 px-4 font-extrabold text-[#071228]">
                      {item.program.tuitionInrLakhs.max === 0
                        ? 'Tuition-Free'
                        : `₹${item.program.tuitionInrLakhs.min}–${item.program.tuitionInrLakhs.max} Lakhs / yr`}
                      <div className="text-[10px] text-slate-500 font-normal">{item.program.tuitionFeeLocal}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-600 bg-slate-50/50">Academic Prerequisites</td>
                  {selectedItems.map((item, idx) => (
                    <td key={idx} className="py-3.5 px-4 text-[11px] leading-relaxed text-slate-600">
                      {item.program.applicationDeadline ? `Deadline: ${item.program.applicationDeadline}` : 'Rolling'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-600 bg-slate-50/50">Intakes</td>
                  {selectedItems.map((item, idx) => (
                    <td key={idx} className="py-3.5 px-4">
                      {item.program.intakes.join(' • ')}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-600 bg-slate-50/50">Scholarships</td>
                  {selectedItems.map((item, idx) => (
                    <td key={idx} className="py-3.5 px-4">
                      {item.program.scholarshipAvailable ? (
                        <span className="text-emerald-700 font-semibold">{item.program.scholarshipDetails || 'Available'}</span>
                      ) : (
                        <span className="text-slate-400">Standard</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-slate-600 bg-slate-50/50">Actions</td>
                  {selectedItems.map((item, idx) => (
                    <td key={idx} className="py-4 px-4">
                      <Link
                        to={`/universities/${item.university.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#071228] hover:bg-[#142347] text-white font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <span>View University</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compare;
