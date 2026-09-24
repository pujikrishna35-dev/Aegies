import React from 'react';
import { Award, DollarSign, CheckCircle2, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function ScholarshipsPage() {
  const scholarships = [
    {
      title: 'Chevening Scholarships (United Kingdom)',
      coverage: '100% Full Tuition + Monthly Stipend',
      eligibility: 'Outstanding leadership qualities, 2+ years work experience, acceptance into eligible 1-year master program.',
      country: 'United Kingdom 🇬🇧'
    },
    {
      title: 'Fulbright-Nehru Master’s Fellowships (USA)',
      coverage: 'Full Tuition + Living Allowance + Health Insurance',
      eligibility: 'Minimum 55% in undergraduate degree, demonstrated community leadership, 3 years work experience.',
      country: 'USA 🇺🇸'
    },
    {
      title: 'DAAD Scholarships (Germany)',
      coverage: 'Monthly Allowance + Travel Subsidy + Health Insurance',
      eligibility: 'Admission into development-related postgraduate courses at public German universities.',
      country: 'Germany 🇩🇪'
    },
    {
      title: 'Australia Awards Scholarships',
      coverage: 'Full Tuition, Return Airfare & Living Expenses',
      eligibility: 'Citizens of eligible partner countries pursuing master’s or research degrees in Australia.',
      country: 'Australia 🇦🇺'
    },
    {
      title: 'University Vice-Chancellor’s Global Merit Awards',
      coverage: '20% to 50% Tuition Fee Reduction',
      eligibility: 'Offered directly by partner universities (e.g. Birmingham, Melbourne, ASU) based on academic GPA.',
      country: 'Multiple Destinations 🌐'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            INTERNATIONAL FUNDING & GRANTS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            International Scholarships Guide
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Every year, Aegis Overseas students secure significant merit scholarships and bursaries reducing their foreign tuition costs.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6 max-w-4xl mx-auto text-left">
          {scholarships.map((sch) => (
            <div
              key={sch.title}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-card-elevated hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-100/80 px-2.5 py-0.5 rounded-full inline-block">
                  {sch.country}
                </span>
                <h3 className="font-display text-xl font-bold text-navy-950">
                  {sch.title}
                </h3>
                <div className="text-sm font-semibold text-emerald-700">
                  {sch.coverage}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-xl">
                  {sch.eligibility}
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href={`https://wa.me/919246220044?text=Hi%20Aegis%20Overseas,%20I%20am%20interested%20in%20scholarship%20eligibility%20for%20${encodeURIComponent(sch.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors whitespace-nowrap"
                >
                  Check My Eligibility →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
