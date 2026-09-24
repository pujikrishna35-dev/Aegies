import React from 'react';
import { BRAND, OFFICES } from '@/lib/constants';
import { ShieldCheck, Award, HeartHandshake, MapPin, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            ABOUT AEGIS OVERSEAS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Guiding Ambitious Minds Beyond Borders
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light">
            Founded with a vision to deliver genuine, ethical, and stress-free global education consulting to students in Andhra Pradesh and beyond.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-display text-3xl font-bold text-navy-950">
              Not Just a Consultancy, <br />
              <span className="text-gold-600 font-serif italic">Your Lifelong Education Partner.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Aegis Overseas Education Services was established to fill a crucial gap: providing honest, transparent, and student-first guidance. Under the leadership of director Mr. Gopal Reddy and senior advisors Siva and Surendra, we treat every student application as a personal mission.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              With accredited offices in Nellore, Tirupati, and liaison representation in the United Kingdom, our students have gained admission to top universities across the USA, UK, Canada, Australia, Germany, Ireland, and New Zealand.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
              <div>
                <div className="font-display text-2xl font-bold text-navy-950">3,500+</div>
                <div className="text-xs text-neutral-500">Students Guided</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-navy-950">100%</div>
                <div className="text-xs text-neutral-500">Transparent Pricing</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Aegis Overseas Counseling Team"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Mentors */}
      <section className="py-16 bg-ivory-50 border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
              LEADERSHIP & MENTORSHIP
            </span>
            <h2 className="font-display text-3xl font-bold text-navy-950">
              The People Behind Your Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: 'Mr. Gopal Reddy',
                role: 'Founder & Managing Director',
                bio: 'A visionary educationalist dedicated to providing honest counseling and direct case involvement for complex student visa applications.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
              },
              {
                name: 'Mr. Siva',
                role: 'Senior Admissions Strategist',
                bio: 'Expert in UK, USA & Canadian university shortlisting, SOP editing, and strategic scholarship applications.',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
              },
              {
                name: 'Mr. Surendra',
                role: 'Head of Visa Operations & Mock Interviews',
                bio: 'Specialist in embassy documentation, financial proofing, and mock visa interview training with outstanding success rates.',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
              }
            ].map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-3xl p-6 shadow-card-elevated border border-neutral-100 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold-400 mb-4 shadow-md">
                  <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950">{leader.name}</h3>
                <span className="text-xs font-semibold text-gold-700 mb-3 block">{leader.role}</span>
                <p className="text-xs text-neutral-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl font-bold text-navy-950 mb-8">
          Visit Our Offices in Person
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {OFFICES.map((office) => (
            <div key={office.city} className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>{office.city}</span>
              </div>
              <h4 className="font-display text-base font-bold text-navy-950">{office.title}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">{office.address}</p>
              <div className="pt-2 text-xs text-navy-900 font-semibold">{office.phone}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
