import React, { useEffect } from 'react';
import { 
  X, 
  Target, 
  CheckCircle2, 
  Quote,
  type LucideIcon 
} from 'lucide-react';

export interface LeaderHighlight {
  icon: LucideIcon;
  val: string;
  label: string;
}

export interface LeaderSection {
  icon: LucideIcon;
  title: string;
  content: string | string[];
}

export interface LeaderData {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  highlights: LeaderHighlight[];
  focusAreas: string[];
  sections: LeaderSection[];
  quote: string;
}

interface MentorModalProps {
  leader: LeaderData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MentorModal: React.FC<MentorModalProps> = ({ leader, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !leader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#071228]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        className="relative z-10 w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-neutral-200/90 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-label={leader.name}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors z-30 cursor-pointer shadow-xs"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Photo, Name, Badges, Key Focus Areas */}
            <div className="md:col-span-5 flex flex-col">
              <div className="aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-neutral-200 shadow-xs shrink-0">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#071228] leading-tight">
                  {leader.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-bold text-[#B45309] uppercase tracking-wider mt-1.5 leading-snug">
                  {leader.role}
                </p>
                <div className="w-8 h-0.5 bg-[#E5B842] my-3 rounded-full" />
              </div>

              {/* 3 Metric Badges */}
              <div className="grid grid-cols-3 gap-2 my-2">
                {leader.highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div 
                      key={i}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs flex flex-col items-center justify-center text-center"
                    >
                      <Icon className="w-4 h-4 text-[#C5A059] mb-1 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold text-[#071228] leading-tight">
                        {h.val}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-neutral-500 font-medium leading-tight mt-0.5">
                        {h.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Key Focus Areas Box */}
              <div className="mt-4 bg-[#FAF7F0] border border-[#E6C687]/50 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#B45309] shrink-0">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#071228] font-serif">
                    Key Focus Areas
                  </h4>
                </div>

                <div className="space-y-2">
                  {leader.focusAreas.map((area, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-700 font-medium leading-relaxed">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Sections & Quote */}
            <div className="md:col-span-7 flex flex-col justify-between h-full pt-1">
              <div className="space-y-6">
                {leader.sections.map((sec, idx) => {
                  const Icon = sec.icon;
                  return (
                    <div key={idx}>
                      <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#071228] mb-2 font-serif">
                        <div className="w-6 h-6 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#B45309] shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{sec.title}</span>
                      </div>

                      {Array.isArray(sec.content) ? (
                        <div className="space-y-2.5">
                          {sec.content.map((p, pIdx) => (
                            <p key={pIdx} className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                              {p}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {sec.content}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quote Card */}
              {leader.quote && (
                <div className="mt-8 p-5 rounded-2xl bg-[#FAF7F0] border border-[#E6C687]/50 relative">
                  <Quote className="w-5 h-5 text-[#C5A059] mb-1.5 opacity-60" />
                  <p className="text-xs sm:text-sm italic text-neutral-800 leading-relaxed font-serif">
                    {leader.quote}
                  </p>
                  <span className="block text-right text-xs font-bold text-neutral-700 mt-2.5">
                    — {leader.name}
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
