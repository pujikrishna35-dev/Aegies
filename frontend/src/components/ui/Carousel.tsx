import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = dir === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };
  return (
    <div className="relative">
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth">
        {children}
      </div>
      <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-slate-700 hover:bg-slate-50 z-10">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-slate-700 hover:bg-slate-50 z-10">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
