import React, { useState, useEffect } from 'react';
import { Check, Sparkles, Loader2 } from 'lucide-react';

interface SteppedLoaderProps {
  onComplete: () => void;
  minDurationMs?: number;
}

const STEPS = [
  'Analyzing your course preferences',
  'Checking destination compatibility',
  'Checking admission requirements',
  'Comparing tuition and budget',
  'Calculating your match score',
];

export const SteppedLoader: React.FC<SteppedLoaderProps> = ({ onComplete, minDurationMs = 1800 }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const stepInterval = minDurationMs / (STEPS.length + 1);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(onComplete, 250);
          return prev;
        }
      });
    }, stepInterval);

    return () => clearInterval(interval);
  }, [minDurationMs, onComplete]);

  return (
    <div className="py-12 px-6 sm:px-10 bg-white rounded-3xl border border-amber-200/60 shadow-xl max-w-2xl mx-auto my-8 text-center animate-fade-in">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#071228] to-[#142347] text-[#C5A059] mb-5 shadow-md">
        <Sparkles className="w-7 h-7 animate-pulse" />
      </div>

      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071228] tracking-tight">
        Finding Your Best Universities...
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
        Aegis Overseas Recommendation Engine is processing your academic and financial preferences.
      </p>

      <div className="mt-8 space-y-3 text-left max-w-md mx-auto">
        {STEPS.map((step, idx) => {
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div
              key={idx}
              className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 ${
                isDone
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                  : isCurrent
                  ? 'bg-[#FDFBF7] border-amber-300 text-[#071228] shadow-sm ring-1 ring-amber-300/40'
                  : 'bg-slate-50/60 border-slate-200/80 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold">{step}</span>
              </div>

              <div>
                {isDone ? (
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 text-amber-600 animate-spin" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-slate-300" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SteppedLoader;
