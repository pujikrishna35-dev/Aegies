import React from 'react';
import { Link } from 'react-router-dom';

export const CountryCourses: React.FC<{ courses: string[] }> = ({ courses }) => (
  <div className="space-y-2">
    <h3 className="font-bold text-lg text-slate-900 mb-3">Popular Degrees</h3>
    <div className="flex flex-wrap gap-2">
      {courses.map((c, i) => (
        <span key={i} className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-lg text-xs font-semibold text-amber-900">{c}</span>
      ))}
    </div>
  </div>
);
