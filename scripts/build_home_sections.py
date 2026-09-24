import os

home_dir = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\src\components\home"
os.makedirs(home_dir, exist_ok=True)

# 1. Hero.tsx with showAirplane = false
with open(os.path.join(home_dir, "Hero.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Globe2, Sparkles } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

interface HeroProps {
  showAirplane?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ showAirplane = false }) => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#071228] text-white pt-24 pb-16">
      {/* Premium Background Visual with student & campus atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-background.webp"
          alt="International Student at World-Class University Campus"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071228] via-[#071228]/85 to-[#071228]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-transparent to-transparent" />
      </div>

      {/* Subtle World Map Overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-20 flex items-center justify-center">
        <img src="/images/hero/world-map.svg" alt="Global Education Network Map" className="w-full max-w-6xl h-auto" />
      </div>

      {/* Optional Airplane animation (Default: false) */}
      {showAirplane && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="animate-airplane-flight absolute top-0 left-0">
            <img
              src="/images/hero/airplane.png"
              alt="Aegis Overseas Airline In Flight"
              className="w-16 md:w-20 h-auto select-none pointer-events-none drop-shadow-md opacity-80"
            />
          </div>
        </div>
      )}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>GLOBAL EDUCATION. BRIGHTER TOMORROWS.</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
            YOUR FUTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E5B8] via-[#E2C474] to-[#C5A059] drop-shadow-sm">
              HAS NO BORDERS.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
            Turn your ambition into an international future with expert guidance, world-class universities and complete support from counselling to campus.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/university-finder"
              className="btn-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-[#071228] font-bold text-base shadow-xl hover:shadow-amber-500/25 hover:brightness-105 transition-all transform hover:-translate-y-0.5"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 text-white font-semibold text-base transition-all hover:-translate-y-0.5"
            >
              <PhoneCall className="w-5 h-5 text-amber-400" />
              <span>BOOK A FREE CONSULTATION</span>
            </button>
          </div>

          {/* Micro badges below CTA */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Free 1-on-1 Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>99.4% Visa Success</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>100% Transparent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <Modal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} title="Book Free 1-on-1 Consultation">
        <ConsultationForm onSuccess={() => setConsultationOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;
''')

# 2. HeroDestinations.tsx (Floating Destination Indicators)
with open(os.path.join(home_dir, "HeroDestinations.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

const DESTINATION_TAGS = [
  { name: 'UK', flag: '🇬🇧', slug: 'uk' },
  { name: 'USA', flag: '🇺🇸', slug: 'usa' },
  { name: 'CANADA', flag: '🇨🇦', slug: 'canada' },
  { name: 'AUSTRALIA', flag: '🇦🇺', slug: 'australia' },
  { name: 'GERMANY', flag: '🇩🇪', slug: 'germany' },
  { name: 'IRELAND', flag: '🇮🇪', slug: 'ireland' },
  { name: 'NEW ZEALAND', flag: '🇳🇿', slug: 'new-zealand' },
  { name: 'EUROPE', flag: '🇪🇺', slug: 'europe' },
];

export const HeroDestinations: React.FC = () => {
  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 hidden md:block">
          Featured Destinations:
        </span>
        <div className="flex items-center gap-2 sm:gap-3 w-full justify-between">
          {DESTINATION_TAGS.map((d) => (
            <Link
              key={d.slug}
              to={`/destinations/${d.slug}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-50 hover:bg-amber-50 hover:border-amber-300 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-800 transition duration-200 shrink-0"
            >
              <span>{d.flag}</span>
              <span>{d.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDestinations;
''')

# 3. TrustStats.tsx
with open(os.path.join(home_dir, "TrustStats.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Users, Globe2, School, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Users, value: "3,500+", label: "Successful Students", subtext: "Admitted worldwide" },
  { icon: Globe2, value: "11+", label: "Countries", subtext: "Global study destinations" },
  { icon: School, value: "100+", label: "Partner Universities", subtext: "Direct institutional ties" },
  { icon: ShieldCheck, value: "360°", label: "End-to-End Support", subtext: "Counselling to campus" }
];

export const TrustStats: React.FC = () => {
  return (
    <section className="py-16 bg-[#FDFBF7] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#8A1538] mb-3 shadow-xs group-hover:scale-110 transition duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#071228] tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
''')

# 4. DestinationsSection.tsx (Explore Dream Destinations)
with open(os.path.join(home_dir, "DestinationsSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '@/data/destinations';

export const DestinationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              International Horizons
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
              EXPLORE YOUR DREAM DESTINATION
            </h2>
          </div>
          <Link
            to="/destinations"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#8A1538] hover:text-burgundy-900 transition"
          >
            <span>View All Countries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.slug}
              to={`/destinations/${dest.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                  <span>{dest.flag}</span>
                  <span>{dest.country}</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-serif italic text-amber-700">"{dest.phrase}"</p>
                  <h3 className="font-bold text-lg text-[#071228] mt-1 group-hover:text-[#8A1538] transition">
                    {dest.country}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {dest.popularCourses.slice(0, 2).map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>{dest.workRights}</span>
                  <span className="text-[#8A1538] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
''')

# 5. UniversityFinder.tsx
with open(os.path.join(home_dir, "UniversityFinder.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';
import { Search, Filter, School, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const studyLevels = ["Bachelor's", "Master's", "MBA", "PhD", "Diploma"];
const countries = ["All Countries", "UK", "USA", "Canada", "Australia", "Germany", "Ireland", "New Zealand", "Europe"];
const fields = [
  "Computer Science", "Engineering", "Business", "Data Science", 
  "Artificial Intelligence", "Healthcare", "Finance", "Hospitality", 
  "Architecture", "Law", "Life Sciences"
];
const englishTests = ["IELTS", "PTE", "TOEFL", "Duolingo"];

export const UniversityFinder: React.FC = () => {
  const [level, setLevel] = useState("Master's");
  const [country, setCountry] = useState("All Countries");
  const [field, setField] = useState("Computer Science");
  const [test, setTest] = useState("IELTS");
  const [budget, setBudget] = useState("$20,000 - $35,000");

  return (
    <section className="py-24 bg-[#071228] text-white relative overflow-hidden" id="university-finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            AI Profile Matcher
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            FIND YOUR PERFECT UNIVERSITY
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Filter through thousands of globally accredited programs by country, academic level, discipline, and budget.
          </p>
        </div>

        {/* Filter Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Level */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">Study Level</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-amber-400 text-sm"
              >
                {studyLevels.map((l) => <option key={l} value={l} className="bg-slate-900 text-white">{l}</option>)}
              </select>
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-amber-400 text-sm"
              >
                {countries.map((c) => <option key={c} value={c} className="bg-slate-900 text-white">{c}</option>)}
              </select>
            </div>

            {/* Field */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">Discipline / Field</label>
              <select
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-amber-400 text-sm"
              >
                {fields.map((f) => <option key={f} value={f} className="bg-slate-900 text-white">{f}</option>)}
              </select>
            </div>

            {/* Test */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">English Test</label>
              <select
                value={test}
                onChange={(e) => setTest(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-amber-400 text-sm"
              >
                {englishTests.map((t) => <option key={t} value={t} className="bg-slate-900 text-white">{t}</option>)}
              </select>
            </div>

            {/* Academic Score */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">Academic Score (GPA / %)</label>
              <input
                type="text"
                placeholder="e.g. 75% or 3.5 GPA"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 text-sm"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">Annual Tuition Budget</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-amber-400 text-sm"
              >
                <option className="bg-slate-900 text-white">Under $15,000</option>
                <option className="bg-slate-900 text-white">$15,000 - $25,000</option>
                <option className="bg-slate-900 text-white">$25,000 - $40,000</option>
                <option className="bg-slate-900 text-white">$40,000+</option>
              </select>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-300">
              ⚡ Over 1,200 matching programs found with 2026/2027 intakes.
            </span>
            <Link
              to="/universities"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm hover:brightness-105 transition flex items-center justify-center gap-2 shadow-lg"
            >
              <span>FIND MY UNIVERSITIES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityFinder;
''')

# 6. WhyAegis.tsx
with open(os.path.join(home_dir, "WhyAegis.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { 
  Compass, School, FileCheck, Award, 
  BadgeDollarSign, ShieldCheck, Home as HomeIcon, CreditCard, PlaneTakeoff 
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Compass, School, FileCheck, Award, BadgeDollarSign, ShieldCheck, Home: HomeIcon, CreditCard, PlaneTakeoff
};

export const WhyAegis: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            The Aegis Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228] leading-tight">
            MORE THAN OVERSEAS EDUCATION. <br />
            WE BUILD GLOBAL FUTURES.
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            From initial career assessment to post-graduation residency guidance, our certified mentors deliver an unparalleled advisory experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = iconMap[s.iconName] || Compass;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-amber-300 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#8A1538] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-[#071228]">{s.title}</h3>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">{s.shortDesc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-xs font-bold text-[#8A1538] hover:text-burgundy-700 flex items-center gap-1 group"
                  >
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAegis;
''')

# 7. SupportSection.tsx (360° Support)
with open(os.path.join(home_dir, "SupportSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { 
  Compass, UserCheck, BookOpen, School, FileSignature, 
  Award, MailCheck, ShieldCheck, Home as HomeIcon, CreditCard, 
  Plane, GraduationCap 
} from 'lucide-react';

const supportSteps = [
  { icon: Compass, title: "Career Planning" },
  { icon: UserCheck, title: "Profile Evaluation" },
  { icon: BookOpen, title: "Course Selection" },
  { icon: School, title: "University Selection" },
  { icon: FileSignature, title: "Application & SOP" },
  { icon: Award, title: "Scholarship & Loans" },
  { icon: MailCheck, title: "Offer Letter" },
  { icon: ShieldCheck, title: "Visa Filing & Mocks" },
  { icon: HomeIcon, title: "Accommodation" },
  { icon: CreditCard, title: "Forex & Currency" },
  { icon: Plane, title: "Pre-Departure Briefing" },
  { icon: GraduationCap, title: "Campus Success" },
];

export const SupportSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
            Complete Lifecycle
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
            FROM YOUR FIRST QUESTION <br />
            TO YOUR FIRST DAY ABROAD.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            We handle every complexity so you can focus on your studies and global ambitions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {supportSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FDFBF7] border border-slate-200/90 text-center flex flex-col items-center justify-center hover:bg-white hover:shadow-md hover:border-amber-300 transition duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100/70 text-[#8A1538] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">{step.title}</span>
                <span className="text-[10px] text-slate-400 font-mono mt-1">Stage {idx + 1}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
''')

# 8. JourneySection.tsx (Timeline)
with open(os.path.join(home_dir, "JourneySection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { HOMEPAGE_DATA } from '@/data/homepage';

export const JourneySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            The Aegis Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
            YOUR JOURNEY WITH AEGIS
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            A proven, structured path delivering unmatched peace of mind for you and your parents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
          {HOMEPAGE_DATA.journeySteps.map((j, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-2xl font-black font-display text-amber-600 block mb-2">
                  {j.step}
                </span>
                <h3 className="font-extrabold text-base text-[#071228] tracking-wider uppercase">{j.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{j.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Phase {i + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
''')

# 9. CoursesSection.tsx
with open(os.path.join(home_dir, "CoursesSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cpu, LineChart, Stethoscope, Briefcase, Building, Scale, Microscope } from 'lucide-react';
import { COURSE_CATEGORIES } from '@/data/courses';

const icons = [Code2, Cpu, Briefcase, LineChart, Stethoscope, LineChart, Building, Scale, Microscope, Microscope];

export const CoursesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              Career Focused Degrees
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
              FIND THE RIGHT COURSE <br />
              FOR YOUR FUTURE
            </h2>
          </div>
          <Link
            to="/courses"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#8A1538] hover:text-burgundy-900 transition"
          >
            <span>EXPLORE ALL COURSES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Link
                key={idx}
                to="/courses"
                className="group p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 hover:border-amber-300 hover:shadow-lg transition duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/70 text-[#8A1538] flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#071228] group-hover:text-[#8A1538] transition">{cat}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">High Global Demand</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#8A1538] group-hover:translate-x-1 transition" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
''')

# 10. ScholarshipsSection.tsx
with open(os.path.join(home_dir, "ScholarshipsSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2 } from 'lucide-react';

const scholarshipCategories = [
  { title: "University Scholarships", desc: "Institutional fee discounts ranging from 10% to 50% tuition reduction." },
  { title: "Merit Scholarships", desc: "Recognizing high GPAs, standardized test excellence, and academic honors." },
  { title: "Government Scholarships", desc: "Chevening, Fulbright, Australia Awards, and DAAD research grants." },
  { title: "Country Scholarships", desc: "Grants designated specifically for high-achieving international applicants." },
  { title: "Early Bird & Fee Waivers", desc: "Instant $1,000–$5,000 bursaries for early confirmation of acceptance." },
];

export const ScholarshipsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#071228] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Financial Support & Grants
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              YOUR DREAM EDUCATION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                COULD COST LESS THAN YOU THINK.
              </span>
            </h2>
            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              We guide you through thousands of eligible grants and university scholarships, helping our students secure over $5 Million+ in funding.
            </p>
            <div className="mt-8">
              <Link
                to="/scholarships"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition shadow-lg"
              >
                <span>EXPLORE SCHOLARSHIPS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:max-w-lg space-y-4">
            {scholarshipCategories.map((c, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-base">{c.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
''')

# 11. TestPreparationSection.tsx
with open(os.path.join(home_dir, "TestPreparationSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { TEST_PREP } from '@/data/tests';

export const TestPreparationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Exam Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
            PREPARE. PERFORM. GET THERE.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Expert certified coaching for IELTS, PTE, TOEFL, GRE, GMAT, SAT, OET, and Duolingo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {TEST_PREP.map((t) => (
            <Link
              key={t.slug}
              to={`/test-preparation/${t.slug}`}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-amber-300 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl font-black text-[#8A1538] block mb-2 group-hover:scale-105 transition-transform">
                  {t.name}
                </span>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{t.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-bold text-[#8A1538] flex items-center justify-between">
                <span>Course Details</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestPreparationSection;
''')

# 12. UniversitiesSection.tsx (Partner Universities)
with open(os.path.join(home_dir, "UniversitiesSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { School, ArrowRight } from 'lucide-react';

const sampleUnis = [
  { name: 'University of Oxford', country: 'United Kingdom', badge: 'Top 1% Worldwide', city: 'Oxford' },
  { name: 'Harvard University', country: 'United States', badge: 'Ivy League', city: 'Cambridge, MA' },
  { name: 'University of Toronto', country: 'Canada', badge: 'U15 Member', city: 'Toronto' },
  { name: 'University of Melbourne', country: 'Australia', badge: 'Group of Eight', city: 'Melbourne' },
  { name: 'Technical University of Munich', country: 'Germany', badge: 'TU9 Excellence', city: 'Munich' },
  { name: 'Trinity College Dublin', country: 'Ireland', badge: 'Historic Campus', city: 'Dublin' },
];

export const UniversitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              Prestigious Institutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
              YOUR FUTURE STARTS <br />
              AT THE RIGHT UNIVERSITY
            </h2>
          </div>
          <Link
            to="/universities"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#8A1538] hover:text-burgundy-900 transition"
          >
            <span>View All Partner Universities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleUnis.map((u, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
                {u.badge}
              </span>
              <h3 className="font-bold text-xl text-[#071228]">{u.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{u.city}, {u.country}</p>
              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center text-xs font-semibold">
                <span className="text-emerald-700">Accepting 2026 Apps</span>
                <Link to="/universities" className="text-[#8A1538] hover:underline">Explore Programs →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
''')

# 13. StudentSuccessSection.tsx
with open(os.path.join(home_dir, "StudentSuccessSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: "Rohan Verma",
    uni: "Imperial College London",
    country: "UK",
    course: "MSc Advanced Computing",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    quote: "Aegis Overseas made every step painless. Their SOP edits and visa mock drills gave me the confidence to secure my offer at Imperial."
  },
  {
    name: "Ananya Deshmukh",
    uni: "University of Toronto",
    country: "Canada",
    course: "Master of Management Analytics",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    quote: "With a scholarship of CAD 12,000, studying in Toronto became accessible. The team was supportive even after I landed."
  },
  {
    name: "Karthik Reddy",
    uni: "Monash University",
    country: "Australia",
    course: "Master of Data Science",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    quote: "Secured my visa in less than 2 weeks! The mentors at Aegis understand Australian immigration rules inside and out."
  }
];

export const StudentSuccessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Proven Outcomes
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
            REAL STUDENTS. REAL JOURNEYS. REAL IMPACT.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Inspiring journeys of students who transformed their aspirations into global academic reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition duration-300 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 bg-[#071228]/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                  {s.uni} ({s.country})
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Quote className="w-6 h-6 text-amber-400 mb-2 opacity-80" />
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">"{s.quote}"</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-base text-[#071228]">{s.name}</h4>
                  <p className="text-xs text-amber-700 font-medium mt-0.5">{s.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSuccessSection;
''')

# 14. AboutSection.tsx
with open(os.path.join(home_dir, "AboutSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
            Integrity & Mentorship
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228] leading-tight">
            YOUR TRUSTED PARTNER <br />
            FOR GLOBAL EDUCATION
          </h2>
          <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Hyderabad with operations across Bangalore and Vijayawada, Aegis Overseas Education Services has spent over 15 years empowering Indian students to excel in the world's most prestigious universities.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "3,500+ successful admissions with verified alumni in 11+ countries",
              "Direct tie-ups with 100+ accredited universities and government colleges",
              "Transparent fee structures, zero hidden costs, and honest course guidance",
              "Complimentary 1-on-1 profile evaluation and university shortlisting session"
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-[#8A1538] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-block px-8 py-3.5 rounded-xl bg-[#8A1538] text-white font-bold text-sm hover:bg-burgundy-900 transition shadow-md"
            >
              Learn More About Aegis
            </Link>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
            alt="Students collaborating"
            className="w-full h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
''')

# 15. TestimonialsSection.tsx (Reviews)
with open(os.path.join(home_dir, "TestimonialsSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Pooja Hegde", uni: "University of Sydney", text: "The team simplified the entire visa documentation process. I was guided honestly without any pressure." },
  { name: "Venkatesh Rao", uni: "Trinity College Dublin", text: "Got admission into Ireland's top university! Their mock visa interviews made embassy filing stress-free." },
  { name: "Divya Krishnan", uni: "Boston University", text: "Excellent guidance on STEM courses in the USA and OPT extension rules. Highly recommended!" },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Genuine Ratings
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
            TRUSTED BY STUDENTS & PARENTS
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Read first-hand feedback from candidates who achieved their dreams through Aegis Overseas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">"{r.text}"</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <h4 className="font-bold text-base text-[#071228]">{r.name}</h4>
                <p className="text-xs text-slate-500">{r.uni}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
''')

# 16. FAQSection.tsx
with open(os.path.join(home_dir, "FAQSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Which country is best for my profile?", a: "The best destination depends on your academic GPA, budget, desired post-study work rights, and target career. Our counsellors analyze your credentials to present an optimal country shortlist." },
  { q: "How much does studying abroad cost?", a: "Tuition varies from zero-tuition options in Germany to £14,000–£28,000/year in the UK and $25,000–$50,000/year in the US. Living expenses average $10,000–$15,000/year." },
  { q: "Can I get an education loan?", a: "Yes. Through our banking partnerships with HDFC Credila, Avanse, and Prodigy, students can access both collateral and non-collateral education loans up to ₹60 Lakhs." },
  { q: "Which universities accept my IELTS/PTE score?", a: "Most UK, Australian, Canadian, and Irish institutions accept overall IELTS 6.5 (no band below 6.0) or PTE 58+. Many also accept Duolingo or provide waiver letters for English-medium graduates." },
  { q: "How do I apply for a student visa?", a: "Our dedicated visa cell prepares your financial portfolio, verifies CAS/I-20 documentation, schedules biometrics, and conducts thorough mock interview rehearsals to ensure 99.4% approval." },
  { q: "Can Aegis help with accommodation?", a: "Yes. We partner with leading international PBSAs (Purpose-Built Student Accommodations) like AmberStudent and Casita to secure verified halls within walking distance of your campus." },
  { q: "Can I study abroad with my academic score?", a: "Absolutely. With 100+ partner universities across 11+ countries, we find strong programs tailored to every profile, whether you have a 90%+ or 55% aggregate." },
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
            Clarity & Guidance
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-5 text-left font-bold text-base text-[#071228] flex justify-between items-center bg-[#FDFBF7] hover:bg-slate-50 transition"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-5 text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
''')

# 17. BlogSection.tsx
with open(os.path.join(home_dir, "BlogSection.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "UK Graduate Route 2026: Complete Work Visa & Employment Guide",
    category: "Visa & Careers",
    date: "Sep 2026",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "How to Secure Up to $25,000 Scholarships for US STEM Masters",
    category: "Scholarships",
    date: "Aug 2026",
    image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Navigating Post-Study Work Visas in Canada and Australia",
    category: "Country Guides",
    date: "Aug 2026",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop"
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Industry Knowledge
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
              YOUR GUIDE TO STUDYING ABROAD
            </h2>
          </div>
          <Link
            to="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#8A1538] hover:text-burgundy-900 transition"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <Link key={i} to="/blog" className="group block bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition duration-300">
              <div className="h-52 overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{art.category}</span>
                <h3 className="font-bold text-lg text-[#071228] mt-2 group-hover:text-[#8A1538] transition leading-snug">{art.title}</h3>
                <p className="text-xs text-slate-400 mt-4">{art.date} • 5 min read</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
''')

# 18. FinalCTA.tsx
with open(os.path.join(home_dir, "FinalCTA.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';
import { PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

export const FinalCTA: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-[#071228] via-[#0E213D] to-[#071228] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Zero Obligation • 100% Free Consultation</span>
        </span>
        <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight">
          READY TO START <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            YOUR GLOBAL JOURNEY?
          </span>
        </h2>
        <p className="mt-6 text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-normal">
          Your dream university is closer than you think. Let our certified international advisors create a custom admissions roadmap for you today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-[#071228] font-bold text-base shadow-xl hover:brightness-105 transition"
          >
            BOOK A FREE CONSULTATION
          </button>
          <a
            href="https://wa.me/919246220044"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5 text-emerald-400" />
            <span>TALK TO AN AEGIS COUNSELLOR</span>
          </a>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Schedule Free Session">
        <ConsultationForm onSuccess={() => setModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default FinalCTA;
''')

print("All 18 home sections created with rich aesthetics.")
