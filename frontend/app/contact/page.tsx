import React from 'react';
import { OFFICES, BRAND } from '@/lib/constants';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            GET IN TOUCH
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Contact Aegis Overseas
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Have questions about foreign university applications or visas? Visit our physical offices in Nellore and Tirupati, or speak with our counselors today.
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          {OFFICES.map((office) => (
            <div
              key={office.city}
              className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-card-elevated hover:shadow-2xl transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold-600 font-bold text-sm">
                  <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span>{office.city}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950">
                  {office.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {office.address}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-navy-900 font-semibold">
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span>{office.email}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>{office.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Google Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-neutral-200/80">
            <h2 className="font-display text-2xl font-bold text-navy-950 mb-1">
              Send an Inquiry or Schedule a Meeting
            </h2>
            <p className="text-xs text-neutral-500 mb-6">
              Our team will review your enquiry and connect with you within 2 business hours.
            </p>
            <ConsultationForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-900 text-white rounded-3xl p-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-white">
                Direct Counselor Helpline
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Need urgent admission advice or visa interview slot scheduling? Call our central line directly:
              </p>
              <div className="text-xl font-bold text-gold-400 font-display">
                {BRAND.primaryPhone}
              </div>
              <div className="text-sm font-semibold text-neutral-200">
                {BRAND.secondaryPhone}
              </div>
              <div className="pt-2">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                >
                  Message on WhatsApp 💬
                </a>
              </div>
            </div>

            {/* Map Frame for Nellore Head Office */}
            <div className="rounded-3xl overflow-hidden shadow-card-elevated border border-neutral-200 h-64">
              <iframe
                title="Aegis Overseas Nellore Office Map"
                src="https://maps.google.com/maps?q=Door%20No%3A%2C%2024%2F7%2F33%2C%20beside%20Dr.%20SRK%20School%2C%20Central%20Avenue%2C%20Dargamitta%2C%20Magunta%20Layout%2C%20Nellore%2C%20Andhra%20Pradesh%20524003&t=m&z=14&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
