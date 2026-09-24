import React from 'react';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { Sparkles, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function BookConsultationPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>FREE 1-ON-1 ADVICE</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Book a Free Strategy Consultation
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Sit down with an experienced country admissions counselor in Nellore, Tirupati, or via Zoom video. No obligation, 100% free.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold-300/40 text-left">
          <div className="mb-8 pb-6 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-950">
                Personal Consultation Appointment
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Average consultation time: 30–45 minutes. Parents are welcome to join.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Advisors</span>
            </div>
          </div>

          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}
