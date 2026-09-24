import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DESTINATIONS_LIST } from '@/lib/constants';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Clock, DollarSign, Briefcase, Building2, MapPin, ArrowLeft } from 'lucide-react';

interface Props {
  params: {
    country: string;
  };
}

export default function CountryDetailPage({ params }: Props) {
  const destination = DESTINATIONS_LIST.find((d) => d.slug === params.country.toLowerCase());

  if (!destination) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      {/* Country Hero Header */}
      <section className="relative bg-navy-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.image}
            alt={destination.country}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Destinations</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-3xl">{destination.flag}</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              {destination.emotionalPhrase}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Study in {destination.country}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light">
            {destination.headline} — Complete guidance on university selection, admission intakes, scholarships, and post-study work authorization.
          </p>
        </div>
      </section>

      {/* Overview Stats Strip */}
      <section className="bg-white border-b border-neutral-200/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-gold-600 flex-shrink-0" />
              <div>
                <div className="text-xs text-neutral-500">Universities</div>
                <div className="font-display font-bold text-navy-950 text-sm sm:text-base">
                  {destination.universities}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <div className="text-xs text-neutral-500">Avg. Annual Tuition</div>
                <div className="font-display font-bold text-navy-950 text-sm sm:text-base">
                  {destination.tuition}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-sky-600 flex-shrink-0" />
              <div>
                <div className="text-xs text-neutral-500">Post-Study Visa</div>
                <div className="font-display font-bold text-navy-950 text-sm sm:text-base">
                  {destination.opt}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-navy-700 flex-shrink-0" />
              <div>
                <div className="text-xs text-neutral-500">Primary Intakes</div>
                <div className="font-display font-bold text-navy-950 text-sm sm:text-base">
                  Fall & Spring
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Booking Consultation Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Information (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                Why Study in {destination.country}?
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Graduates from {destination.country} institutions enjoy global prestige, industry connections, and competitive starting packages. Whether your goal is cutting-edge technological innovation or fast-track management careers, {destination.country} offers comprehensive programs aligned with international market demands.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-navy-950">
                Key Benefits with Aegis Overseas:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Personalized university shortlisting matching your GPA',
                  'Application fee waivers at select partner universities',
                  'Expert SOP, LOR, and Resume refinement',
                  'Dedicated scholarship search & filing assistance',
                  'Thorough documentation review & mock visa interviews',
                  'Pre-departure orientation & forex guidance'
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory-50 border border-neutral-100">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-navy-900 text-white space-y-4">
              <h4 className="font-display text-lg font-bold text-white">
                Upcoming 2026 / 2027 Intakes
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Applications for {destination.country} universities are currently open. Top tier universities review files on a rolling basis, so early submission drastically improves scholarship chances.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/919246220044?text=Hi%20Aegis%20Overseas,%20I%20am%20interested%20in%20studying%20in%20${encodeURIComponent(destination.country)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gold-400 text-navy-950 hover:bg-gold-300 transition-colors"
                >
                  Ask Counselor on WhatsApp →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-300/40 text-left">
              <h3 className="font-display text-xl font-bold text-navy-950 mb-1">
                Apply for {destination.country}
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Fill the form below to receive a customized university shortlist from Aegis Overseas.
              </p>
              <ConsultationForm defaultDestination={destination.slug} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
