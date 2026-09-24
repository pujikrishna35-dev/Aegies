import React from 'react';
import { UniversityFinderForm } from '@/components/forms/UniversityFinderForm';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function UniversityFinderPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>ALGORITHM-POWERED MATCHING</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Find Your Ideal Universities
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Filter by academic marks, study destination, budget, and English test scores to discover high-acceptance universities.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <UniversityFinderForm />
      </section>
    </div>
  );
}
