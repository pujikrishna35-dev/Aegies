import React from 'react';

export const CourseFilters: React.FC = () => (
  <div className="flex flex-wrap gap-2 mb-6">
    {["All Disciplines", "Computer Science", "Engineering", "Business", "Finance", "Healthcare"].map((cat, i) => (
      <button key={i} className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200">{cat}</button>
    ))}
  </div>
);
