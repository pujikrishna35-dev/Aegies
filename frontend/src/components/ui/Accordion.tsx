import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion: React.FC<{ items: { title: string; content: string }[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full p-4 text-left font-bold text-slate-800 bg-slate-50 flex justify-between items-center"
            >
              <span>{item.title}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="p-4 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};
