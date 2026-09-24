import React from 'react';

export const CountryUniversities: React.FC<{ universities: string[] }> = ({ universities }) => (
  <div className="space-y-3">
    <h3 className="font-bold text-lg text-slate-900 mb-3">Top Ranked Institutions</h3>
    <ul className="divide-y divide-slate-100">
      {universities.map((u, i) => (
        <li key={i} className="py-2.5 text-sm font-medium text-slate-700 flex items-center justify-between">
          <span>{u}</span>
          <span className="text-xs text-amber-600 font-bold">QS Top 100</span>
        </li>
      ))}
    </ul>
  </div>
);
