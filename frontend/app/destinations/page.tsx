import React from 'react';
import Link from 'next/link';
import { DESTINATIONS_LIST } from '@/lib/constants';
import { DestinationCard } from '@/components/destinations/DestinationCard';
import { Globe, ArrowRight } from 'lucide-react';

export default function DestinationsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            GLOBAL DESTINATIONS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Explore 11+ Study Destinations
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Compare tuition costs, post-study work authorization, and top universities across the world&apos;s leading education destinations.
          </p>
        </div>
      </section>

      {/* Grid of all destination countries */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {DESTINATIONS_LIST.map((item) => (
            <DestinationCard
              key={item.slug}
              country={item.country}
              slug={item.slug}
              headline={item.headline}
              emotionalPhrase={item.emotionalPhrase}
              image={item.image}
              flag={item.flag}
              badge={item.badge}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
