import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
  Compass,
  FileText,
  Banknote,
  ShieldCheck,
  Plane,
  Coins,
  Globe2,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Profile Evaluation & Career Counselling',
      icon: Compass,
      description: 'Comprehensive analysis of your academic background, test scores, work experience, and financial budget to chart a realistic, high-success study roadmap.',
      deliverables: ['1-on-1 counselor matching', 'Aptitude & goal alignment', 'Country suitability matrix']
    },
    {
      title: 'Country & University Shortlisting',
      icon: Globe2,
      description: 'Curating a balanced tier-structure of Dream, Reach, and Safe universities tailored to your profile, deadlines, and tuition budget.',
      deliverables: ['Ambitious / Target / Safe list', 'Scholarship feasibility assessment', 'Intake timeline scheduling']
    },
    {
      title: 'Application & Documentation Support',
      icon: FileText,
      description: 'End-to-end guidance for crafting winning Statements of Purpose (SOP), Letters of Recommendation (LOR), CV resumes, and university portal submissions.',
      deliverables: ['Professional SOP fine-tuning', 'Application fee waiver checks', 'Direct university follow-up']
    },
    {
      title: 'Education Loan Assistance',
      icon: Banknote,
      description: 'Tie-ups with leading national banks (SBI, Bank of Baroda) and NBFCs (HDFC Credila, Avanse, Auxilo) to secure collateral and non-collateral education loans quickly.',
      deliverables: ['Fast sanction letters', 'Competitive interest rates', 'Pre-visa disbursement alignment']
    },
    {
      title: 'Visa Counseling & Embassy Mock Drills',
      icon: ShieldCheck,
      description: 'Flawless financial proofing, CA verification reports, DS-160/VFS filing, and extensive mock interview practice conducted directly by director Mr. Gopal Reddy & senior mentors.',
      deliverables: ['Strict financial scrutiny', '1-on-1 mock interview sessions', 'Biometrics & document compilation']
    },
    {
      title: 'Flight Booking, Forex & Pre-Departure',
      icon: Plane,
      description: 'Student-discounted airline bookings with extra baggage allowances, multi-currency international forex cards, SIM cards, and safe student accommodation bookings.',
      deliverables: ['Student baggage discounts', 'Best exchange rate Forex cards', 'Alumni airport pickup networks']
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            END-TO-END 360° ASSISTANCE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Our Overseas Services
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            From the moment you begin considering study abroad to the day you land in your new home, Aegis Overseas is your trusted navigator.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-card-elevated hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-ivory-100 group-hover:bg-gold-500 text-gold-700 group-hover:text-navy-950 flex items-center justify-center mb-6 transition-colors shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-neutral-100">
                    {srv.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6">
                  <Link
                    href="/book-consultation"
                    className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-xs font-bold bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors"
                  >
                    Request Free Service Guidance
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
