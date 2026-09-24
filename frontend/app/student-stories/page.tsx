import React from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { Star, GraduationCap } from 'lucide-react';

export default function StudentStoriesPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-[0.2em]">
            <GraduationCap className="w-4 h-4 text-gold-400" />
            <span>ALUMNI VOICES</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Real Students. Real Success Stories.
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Genuine testimonials from students across Andhra Pradesh who trusted Aegis Overseas to achieve their global study dreams.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              location={t.location}
              country={t.country}
              flag={t.flag}
              university={t.university}
              course={t.course}
              rating={t.rating}
              quote={t.quote}
              avatar={t.avatar}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
