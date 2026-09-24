'use client';

import React, { useState } from 'react';
import { Sparkles, MapPin } from 'lucide-react';

interface UniversityFinderFormProps {
  onFind?: () => void;
}

export function UniversityFinderForm({ onFind }: UniversityFinderFormProps) {
  const [formData, setFormData] = useState({
    studyLevel: '',
    preferredCountry: '',
    fieldOfStudy: '',
    academicScore: '',
    englishTest: '',
    budgetInr: ''
  });

  const [matched, setMatched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMatched(true);
    if (onFind) onFind();
  };

  if (matched) {
    return (
      <div className="bg-white rounded-2xl p-5 shadow-2xl border border-neutral-100 text-left space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> 4 Matches Found
            </span>
            <h4 className="font-display text-base font-bold text-navy-950 mt-1">
              Top University Shortlist
            </h4>
          </div>
          <button
            onClick={() => setMatched(false)}
            className="text-xs font-semibold text-neutral-500 hover:text-navy-900 underline"
          >
            Reset Filters
          </button>
        </div>

        <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
          {[
            {
              name: 'University of Birmingham',
              country: 'United Kingdom 🇬🇧',
              match: '96% Match',
              tuition: '£21,000 / yr'
            },
            {
              name: 'Arizona State University',
              country: 'USA 🇺🇸',
              match: '94% Match',
              tuition: '$32,000 / yr'
            },
            {
              name: 'Technical University of Munich',
              country: 'Germany 🇩🇪',
              match: '92% Match',
              tuition: 'Zero Tuition'
            },
            {
              name: 'University of Wollongong',
              country: 'Australia 🇦🇺',
              match: '90% Match',
              tuition: 'AUD $34,000 / yr'
            }
          ].map((item) => (
            <div
              key={item.name}
              className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between gap-2"
            >
              <div>
                <div className="font-display font-bold text-navy-950 text-xs">
                  {item.name}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                  <MapPin className="w-3 h-3 text-neutral-400" />
                  <span>{item.country}</span>
                  <span>•</span>
                  <span className="font-medium text-navy-900">{item.tuition}</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gold-800 bg-gold-200/70 px-2 py-0.5 rounded-md whitespace-nowrap">
                {item.match}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form
      id="university-finder-form"
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/60 text-left"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
        {/* 1. I want to study */}
        <div>
          <label className="block text-[11px] text-neutral-600 font-medium mb-1">
            I want to study
          </label>
          <select
            value={formData.studyLevel}
            onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 text-xs focus:outline-none focus:border-navy-900 cursor-pointer shadow-2xs"
          >
            <option value="">Select Level</option>
            <option value="Postgraduate (Masters)">Postgraduate (Masters)</option>
            <option value="Undergraduate (Bachelors)">Undergraduate (Bachelors)</option>
            <option value="Doctorate (PhD)">Doctorate (PhD)</option>
          </select>
        </div>

        {/* 2. Preferred country */}
        <div>
          <label className="block text-[11px] text-neutral-600 font-medium mb-1">
            Preferred country
          </label>
          <select
            value={formData.preferredCountry}
            onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 text-xs focus:outline-none focus:border-navy-900 cursor-pointer shadow-2xs"
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Ireland">Ireland</option>
            <option value="Europe">Europe</option>
          </select>
        </div>

        {/* 3. Field of study */}
        <div>
          <label className="block text-[11px] text-neutral-600 font-medium mb-1">
            Field of study
          </label>
          <select
            value={formData.fieldOfStudy}
            onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 text-xs focus:outline-none focus:border-navy-900 cursor-pointer shadow-2xs"
          >
            <option value="">Select Field</option>
            <option value="Computer Science & IT">Computer Science & IT</option>
            <option value="Data Science & AI">Data Science & AI</option>
            <option value="Business & MBA">Business & MBA</option>
            <option value="Engineering">Engineering</option>
            <option value="Biotech & Healthcare">Biotech & Healthcare</option>
          </select>
        </div>

        {/* 4. Academic score */}
        <div>
          <label className="block text-[11px] text-neutral-600 font-medium mb-1">
            Academic score
          </label>
          <select
            value={formData.academicScore}
            onChange={(e) => setFormData({ ...formData, academicScore: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 text-xs focus:outline-none focus:border-navy-900 cursor-pointer shadow-2xs"
          >
            <option value="">Select Score</option>
            <option value="85%+ or CGPA 8.5+">85%+ or CGPA 8.5+</option>
            <option value="70% - 85%">70% - 85%</option>
            <option value="60% - 70%">60% - 70%</option>
            <option value="Below 60%">Below 60%</option>
          </select>
        </div>

        {/* 5. English test */}
        <div>
          <label className="block text-[11px] text-neutral-600 font-medium mb-1">
            English test
          </label>
          <select
            value={formData.englishTest}
            onChange={(e) => setFormData({ ...formData, englishTest: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 text-xs focus:outline-none focus:border-navy-900 cursor-pointer shadow-2xs"
          >
            <option value="">Select Test</option>
            <option value="IELTS">IELTS</option>
            <option value="PTE Academic">PTE Academic</option>
            <option value="TOEFL">TOEFL</option>
            <option value="Duolingo">Duolingo</option>
            <option value="Planning to Take">Planning to Take</option>
          </select>
        </div>

        {/* 6. Budget (INR) */}
        <div>
          <label className="block text-[11px] text-neutral-600 font-medium mb-1">
            Budget (INR)
          </label>
          <select
            value={formData.budgetInr}
            onChange={(e) => setFormData({ ...formData, budgetInr: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white text-neutral-800 text-xs focus:outline-none focus:border-navy-900 cursor-pointer shadow-2xs"
          >
            <option value="">Select Budget</option>
            <option value="Under ₹15 Lakhs">Under ₹15 Lakhs</option>
            <option value="₹15L - ₹25L">₹15L - ₹25L</option>
            <option value="₹25L - ₹40L">₹25L - ₹40L</option>
            <option value="₹40L+">₹40L+</option>
          </select>
        </div>
      </div>
    </form>
  );
}
