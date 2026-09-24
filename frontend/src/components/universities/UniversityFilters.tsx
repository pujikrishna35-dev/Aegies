import React from 'react';

export const UniversityFilters: React.FC<{ selectedCountry: string; onSelectCountry: (c: string) => void }> = ({ selectedCountry, onSelectCountry }) => {
  const countries = ["All", "UK", "USA", "Canada", "Australia", "Germany", "Ireland"];
  return (
    <div className="flex flex-wrap gap-2">
      {countries.map((c) => (
        <button
          key={c}
          onClick={() => onSelectCountry(c)}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${selectedCountry === c ? 'bg-[#8A1538] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
};
