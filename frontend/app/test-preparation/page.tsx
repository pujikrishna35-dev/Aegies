import React from 'react';
import Link from 'next/link';
import { BookOpen, Check, Award, Users, Laptop, Clock } from 'lucide-react';

export default function TestPreparationPage() {
  const tests = [
    {
      id: 'ielts',
      name: 'IELTS Academic',
      full: 'International English Language Testing System',
      target: 'Band 7.0 - 8.0+',
      mode: 'Classroom & Online Live',
      duration: '6 - 8 Weeks',
      features: ['British Council certified materials', 'Weekly mock tests with personalized feedback', 'Daily speaking evaluation cabins']
    },
    {
      id: 'pte',
      name: 'PTE Academic',
      full: 'Pearson Test of English',
      target: 'Score 68 - 79+',
      mode: 'Computer Lab Simulated',
      duration: '4 - 6 Weeks',
      features: ['Realistic AI scoring algorithm practice', 'High-frequency question banks', 'Instant pronunciation & fluency feedback']
    },
    {
      id: 'gre',
      name: 'GRE General',
      full: 'Graduate Record Examination',
      target: 'Score 320 - 330+',
      mode: 'Hybrid & Intensive',
      duration: '8 - 10 Weeks',
      features: ['Quant speed tips & Vedic math shortcuts', 'Flashcards for 1,500 high-frequency words', 'Adaptive sectional test engine']
    },
    {
      id: 'toefl',
      name: 'TOEFL iBT',
      full: 'Test of English as a Foreign Language',
      target: 'Score 100 - 110+',
      mode: 'Online & Lab Practice',
      duration: '6 Weeks',
      features: ['Authentic ETS question simulations', 'American accent listening clinics', 'Independent & integrated writing mastery']
    },
    {
      id: 'gmat',
      name: 'GMAT Focus',
      full: 'Graduate Management Admission Test',
      target: 'Score 675+',
      mode: 'Elite Weekend / Weekday',
      duration: '10 - 12 Weeks',
      features: ['Data Insights & graph analysis', 'Critical reasoning logic patterns', 'One-on-one mentor doubt sessions']
    },
    {
      id: 'duolingo',
      name: 'Duolingo English Test',
      full: 'DET Adaptive Test',
      target: 'Score 120 - 135+',
      mode: 'Self-Paced + Mentor Feedback',
      duration: '3 - 4 Weeks',
      features: ['At-home testing rules & webcam hygiene', 'Computer adaptive drills', 'Fast-track test booking assistance']
    },
    {
      id: 'oet',
      name: 'OET (Healthcare)',
      full: 'Occupational English Test',
      target: 'Grade B in all sub-tests',
      mode: 'Clinical Healthcare Modules',
      duration: '6 Weeks',
      features: ['Medical role-play practice with doctors/nurses', 'Referral letter writing corrections', 'Nursing & pharmacy specific terminology']
    },
    {
      id: 'sat',
      name: 'Digital SAT',
      full: 'Scholastic Assessment Test',
      target: 'Score 1450+',
      mode: 'High-School Special Batches',
      duration: '8 - 12 Weeks',
      features: ['Bluebook app simulator practice', 'Desmos calculator mastery', 'Reading comprehension strategies']
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            PREMIER COACHING ACADEMY
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Test Preparation & Coaching
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Nellore & Tirupati&apos;s highest scoring test-prep academy with certified faculty, comprehensive study materials, and unlimited mock test simulations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-card-elevated hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-100/70 px-2.5 py-0.5 rounded-full">
                    {test.target}
                  </span>
                  <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {test.duration}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                  {test.name}
                </h3>
                <p className="text-[11px] text-neutral-500 font-medium">
                  {test.full}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                  {test.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-neutral-600">
                      <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100">
                <a
                  href={`https://wa.me/919246220044?text=Hi%20Aegis%20Overseas,%20I%20want%20to%20enroll%20for%20${encodeURIComponent(test.name)}%20coaching`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-xs font-bold bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors"
                >
                  Book Free Demo Class →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
