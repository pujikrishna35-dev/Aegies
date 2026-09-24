import React, { useState } from 'react';

export const Tabs: React.FC<{ tabs: { id: string; label: string; content: React.ReactNode }[] }> = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <div>
      <div className="flex border-b border-slate-200 gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-3 text-sm font-bold border-b-2 transition ${active === tab.id ? 'border-[#8A1538] text-[#8A1538]' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
};
