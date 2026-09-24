import React from 'react';

export const ScholarshipFilters: React.FC = () => (
  <div className="flex gap-2 mb-6">
    {["All Grants", "Undergraduate", "Postgraduate", "STEM Only"].map((f, i) => (
      <button key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700">{f}</button>
    ))}
  </div>
);
