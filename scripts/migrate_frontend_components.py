import os
import shutil
import re

frontend = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend"
src = os.path.join(frontend, "src")

# 1. Copy lib
old_lib = os.path.join(frontend, "lib")
new_lib = os.path.join(src, "lib")
if os.path.exists(old_lib):
    shutil.copytree(old_lib, new_lib, dirs_exist_ok=True)
    print("Copied lib to src/lib")

# 2. Copy ui components
old_ui = os.path.join(frontend, "components", "ui")
new_ui = os.path.join(src, "components", "ui")
if os.path.exists(old_ui):
    shutil.copytree(old_ui, new_ui, dirs_exist_ok=True)
    print("Copied ui components to src/components/ui")

# 3. Copy forms components
old_forms = os.path.join(frontend, "components", "forms")
new_forms = os.path.join(src, "components", "forms")
if os.path.exists(old_forms):
    shutil.copytree(old_forms, new_forms, dirs_exist_ok=True)
    print("Copied forms components to src/components/forms")

def adapt_next_to_react(code: str) -> str:
    # Remove 'use client';
    code = code.replace("'use client';", "").replace('"use client";', "")
    
    # Replace next/link
    code = re.sub(r"import\s+Link\s+from\s+['\"]next/link['\"];?", "import { Link } from 'react-router-dom';", code)
    # Replace next/navigation
    code = re.sub(r"import\s+\{\s*usePathname\s*\}\s+from\s+['\"]next/navigation['\"];?", "import { useLocation } from 'react-router-dom';", code)
    code = code.replace("const pathname = usePathname();", "const location = useLocation();\n  const pathname = location.pathname;")
    
    # Replace next/image with standard img
    code = re.sub(r"import\s+Image\s+from\s+['\"]next/image['\"];?", "", code)
    
    # Replace <Link href= with <Link to=
    # Replace <Link ... href=
    code = re.sub(r'<Link\s+([^>]*?)href=', r'<Link \1to=', code)
    
    return code

# 4. Migrate layout components
layout_dir = os.path.join(src, "components", "layout")
os.makedirs(layout_dir, exist_ok=True)

# Navbar
old_nav = os.path.join(frontend, "components", "layout", "Navbar.tsx")
new_nav = os.path.join(layout_dir, "Navbar.tsx")
if os.path.exists(old_nav):
    with open(old_nav, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_nav, "w", encoding="utf-8") as f:
        f.write(code)

# Footer
old_footer = os.path.join(frontend, "components", "layout", "Footer.tsx")
new_footer = os.path.join(layout_dir, "Footer.tsx")
if os.path.exists(old_footer):
    with open(old_footer, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_footer, "w", encoding="utf-8") as f:
        f.write(code)

# MobileMenu.tsx
mobile_menu = os.path.join(layout_dir, "MobileMenu.tsx")
with open(mobile_menu, "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { X, PhoneCall } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end">
      <div className="w-4/5 max-w-sm bg-white h-full p-6 flex flex-col shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <span className="font-display font-bold text-xl text-navy-950">Menu</span>
          <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-800">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={onClose}
              className="block text-base font-medium text-slate-700 hover:text-burgundy-900 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full py-3 bg-[#D4AF37] text-navy-950 font-bold rounded-xl text-center text-sm shadow-md hover:brightness-105"
          >
            Book Free Consultation
          </button>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 border border-slate-200 text-slate-700 font-semibold rounded-xl text-center text-sm flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            WhatsApp Helpline
          </a>
        </div>
      </div>
    </div>
  );
};
''')

# ScrollToTop.tsx
scroll_top = os.path.join(layout_dir, "ScrollToTop.tsx")
with open(scroll_top, "w", encoding="utf-8") as f:
    f.write('''import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#8A1538] text-white shadow-lg hover:bg-burgundy-800 transition hover:-translate-y-0.5"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
''')

# 5. Migrate home components
home_dir = os.path.join(src, "components", "home")
os.makedirs(home_dir, exist_ok=True)

# Copy Hero.tsx
old_hero = os.path.join(frontend, "components", "home", "Hero.tsx")
new_hero = os.path.join(home_dir, "Hero.tsx")
if os.path.exists(old_hero):
    with open(old_hero, "r", encoding="utf-8") as f:
        hero_code = f.read()
    hero_code = adapt_next_to_react(hero_code)
    with open(new_hero, "w", encoding="utf-8") as f:
        f.write(hero_code)
    print("Migrated Hero.tsx")

# Copy TrustStats.tsx
old_stats = os.path.join(frontend, "components", "home", "TrustStats.tsx")
new_stats = os.path.join(home_dir, "TrustStats.tsx")
if os.path.exists(old_stats):
    with open(old_stats, "r", encoding="utf-8") as f:
        stats_code = f.read()
    stats_code = adapt_next_to_react(stats_code)
    with open(new_stats, "w", encoding="utf-8") as f:
        f.write(stats_code)
    print("Migrated TrustStats.tsx")

# Copy UniversityFinder.tsx
old_finder = os.path.join(frontend, "components", "home", "UniversityFinder.tsx")
new_finder = os.path.join(home_dir, "UniversityFinder.tsx")
if os.path.exists(old_finder):
    with open(old_finder, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_finder, "w", encoding="utf-8") as f:
        f.write(code)

# Copy WhyAegis.tsx
old_why = os.path.join(frontend, "components", "home", "WhyAegis.tsx")
new_why = os.path.join(home_dir, "WhyAegis.tsx")
if os.path.exists(old_why):
    with open(old_why, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_why, "w", encoding="utf-8") as f:
        f.write(code)

# Copy FinalCTA.tsx
old_cta = os.path.join(frontend, "components", "home", "FinalCTA.tsx")
new_cta = os.path.join(home_dir, "FinalCTA.tsx")
if os.path.exists(old_cta):
    with open(old_cta, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_cta, "w", encoding="utf-8") as f:
        f.write(code)

# Copy TestPreparation.tsx
old_test = os.path.join(frontend, "components", "home", "TestPreparation.tsx")
new_test = os.path.join(home_dir, "TestPreparation.tsx")
if os.path.exists(old_test):
    with open(old_test, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_test, "w", encoding="utf-8") as f:
        f.write(code)

# DestinationsPreview.tsx
old_dest_preview = os.path.join(frontend, "components", "home", "DestinationSection.tsx")
new_dest_preview = os.path.join(home_dir, "DestinationsPreview.tsx")
if os.path.exists(old_dest_preview):
    with open(old_dest_preview, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_dest_preview, "w", encoding="utf-8") as f:
        f.write(code)
else:
    with open(new_dest_preview, "w", encoding="utf-8") as f:
        f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS_LIST } from '@/lib/constants';

export const DestinationsPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">Explore the World</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-navy-950">Top Global Destinations</h2>
          </div>
          <Link to="/destinations" className="mt-4 md:mt-0 text-sm font-bold text-burgundy-900 hover:text-burgundy-700">
            View All Destinations →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS_LIST.slice(0, 8).map((d) => (
            <Link key={d.slug} to={`/destinations/${d.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
              <div className="h-48 relative overflow-hidden">
                <img src={d.image} alt={d.country} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold text-slate-800">
                  {d.flag} {d.country}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-navy-950 group-hover:text-burgundy-900 transition">{d.country}</h3>
                <p className="text-xs text-slate-500 mt-1 italic font-serif">"{d.emotionalPhrase}"</p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span>{d.universities} Unis</span>
                  <span className="font-semibold text-emerald-700">{d.opt}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
''')

# SupportJourney and AegisJourney
old_timeline = os.path.join(frontend, "components", "home", "JourneyTimeline.tsx")
new_aegis_journey = os.path.join(home_dir, "AegisJourney.tsx")
if os.path.exists(old_timeline):
    with open(old_timeline, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_aegis_journey, "w", encoding="utf-8") as f:
        f.write(code)

with open(os.path.join(home_dir, "SupportJourney.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { ShieldCheck, Compass, FileCheck, PlaneTakeoff, GraduationCap } from 'lucide-react';

const steps = [
  { icon: Compass, title: "1. Profile Assessment", desc: "Evaluate your academic strengths, budget, and aspirations." },
  { icon: FileCheck, title: "2. University Shortlisting", desc: "Select Dream, Target, and Safe universities worldwide." },
  { icon: ShieldCheck, title: "3. Application & SOP", desc: "Expert statement of purpose polishing and fee waivers." },
  { icon: PlaneTakeoff, title: "4. Visa & Funding", desc: "Mock visa interviews, education loans, and scholarship filing." },
  { icon: GraduationCap, title: "5. Fly & Succeed", desc: "Pre-departure orientations, forex cards, and airport pickup." },
];

export const SupportJourney: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#8A1538] tracking-widest uppercase">End-to-End Support</span>
          <h2 className="text-3xl font-display font-extrabold text-slate-900 mt-2">Your Seamless 5-Stage Journey</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{s.title}</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
''')

# CoursesPreview.tsx
with open(os.path.join(home_dir, "CoursesPreview.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, BrainCircuit, BarChart3, ShieldAlert, Stethoscope, Briefcase } from 'lucide-react';

const courses = [
  { icon: Code2, title: "Computer Science & AI", count: "1,200+ Degrees", popular: "UK, USA, Ireland" },
  { icon: BrainCircuit, title: "Data Science & Analytics", count: "850+ Degrees", popular: "USA, Canada, Germany" },
  { icon: Briefcase, title: "Global MBA & Business", count: "980+ Degrees", popular: "UK, Australia, France" },
  { icon: BarChart3, title: "Fintech & Quantitative Finance", count: "450+ Degrees", popular: "UK, USA, Singapore" },
  { icon: ShieldAlert, title: "Cybersecurity & Infosec", count: "320+ Degrees", popular: "USA, Australia" },
  { icon: Stethoscope, title: "Health Informatics & Bio", count: "400+ Degrees", popular: "Canada, UK, Germany" },
];

export const CoursesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">High-Demand Disciplines</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-navy-950">Explore Trending Courses</h2>
          </div>
          <Link to="/courses" className="text-sm font-bold text-burgundy-900 hover:text-burgundy-700">
            Browse All 15,000+ Courses →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="p-6 rounded-2xl border border-slate-200 hover:border-gold-400 hover:shadow-md transition bg-slate-50/50">
                <Icon className="w-8 h-8 text-[#8A1538] mb-4" />
                <h3 className="font-bold text-lg text-navy-950">{c.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{c.count}</p>
                <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between text-xs text-slate-600">
                  <span>Top Destinations:</span>
                  <span className="font-semibold text-slate-800">{c.popular}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
''')

# ScholarshipsPreview.tsx
with open(os.path.join(home_dir, "ScholarshipsPreview.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { Award, DollarSign } from 'lucide-react';

export const ScholarshipsPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B132B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Funding Your Ambition</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">Merit & Need-Based Scholarships</h2>
          </div>
          <Link to="/scholarships" className="mt-4 md:mt-0 px-6 py-3 rounded-xl bg-amber-400 text-navy-950 font-bold text-sm hover:bg-amber-300 transition">
            Explore All Scholarships
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Vice-Chancellor's Excellence Award", country: "United Kingdom", value: "Up to £10,000", deadline: "Rolling" },
            { title: "Dean's Global Merit Fellowship", country: "United States", value: "Up to $25,000/yr", deadline: "Dec 2026" },
            { title: "International Future Leaders Grant", country: "Australia", value: "20% Tuition Waiver", deadline: "Jan 2027" },
          ].map((s, i) => (
            <div key={i} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <Award className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="font-bold text-lg text-white">{s.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{s.country}</p>
              <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
                <span className="text-amber-300 font-extrabold text-sm">{s.value}</span>
                <span className="text-xs text-slate-400">Deadline: {s.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
''')

# UniversitiesPreview.tsx
with open(os.path.join(home_dir, "UniversitiesPreview.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

const sampleUnis = [
  { name: 'University of Oxford', country: 'United Kingdom', rank: '#1 QS Global', city: 'Oxford' },
  { name: 'Harvard University', country: 'United States', rank: '#4 QS Global', city: 'Cambridge, MA' },
  { name: 'University of Toronto', country: 'Canada', rank: '#21 QS Global', city: 'Toronto' },
  { name: 'University of Melbourne', country: 'Australia', rank: '#33 QS Global', city: 'Melbourne' },
];

export const UniversitiesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold text-[#8A1538] uppercase tracking-widest">Global Partner Network</span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900 mt-1">World-Ranked Universities</h2>
          </div>
          <Link to="/universities" className="text-sm font-bold text-burgundy-900 hover:underline">
            View All Institutions →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleUnis.map((u, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">{u.rank}</span>
              <h3 className="font-bold text-lg text-slate-900">{u.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{u.city}, {u.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
''')

# StudentSuccess, AboutPreview, Reviews, FAQPreview, BlogPreview
old_student_stories = os.path.join(frontend, "components", "home", "StudentStories.tsx")
new_student_success = os.path.join(home_dir, "StudentSuccess.tsx")
if os.path.exists(old_student_stories):
    with open(old_student_stories, "r", encoding="utf-8") as f:
        code = f.read()
    code = adapt_next_to_react(code)
    with open(new_student_success, "w", encoding="utf-8") as f:
        f.write(code)

with open(os.path.join(home_dir, "AboutPreview.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">About Aegis Overseas</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-navy-950 mt-2">15+ Years Empowering Tomorrow's Global Leaders</h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Aegis Overseas is built on a simple promise: Every student deserves transparent, ethical, and world-class career guidance. With 3,500+ successful admissions across top universities worldwide, our certified advisors provide 360-degree support from profile building to post-landing settlement.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/about" className="px-6 py-3 rounded-xl bg-[#8A1538] text-white font-bold text-sm hover:bg-burgundy-900 transition">
              Learn More About Us
            </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Students studying together" className="w-full h-96 object-cover" />
        </div>
      </div>
    </section>
  );
};
''')

with open(os.path.join(home_dir, "Reviews.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Rahul S.", uni: "Imperial College London", text: "Aegis made my dream of studying at Imperial a reality. My visa and SOP were processed seamlessly!" },
  { name: "Sneha K.", uni: "University of Toronto", text: "Honest advice, zero false promises. Secured a $15,000 scholarship thanks to their mentorship." },
  { name: "Aditya P.", uni: "TU Munich", text: "From IELTS coaching to German blocked account guidance, Aegis was with me at every single step." },
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Verified Feedback</span>
          <h2 className="text-3xl font-display font-extrabold text-navy-950 mt-1">What Our Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-700 italic">"{r.text}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="font-bold text-sm text-navy-950">{r.name}</p>
                <p className="text-xs text-slate-500">{r.uni}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
''')

with open(os.path.join(home_dir, "FAQPreview.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "When should I begin my study abroad application?", a: "Ideally 10–12 months prior to your intended intake. This gives ample time for standardized exams (IELTS/GRE), SOP reviews, and visa applications." },
  { q: "Does Aegis Overseas charge for initial counselling?", a: "No, our initial 1-on-1 profile evaluation and university shortlisting consultation is 100% free with no obligation." },
  { q: "Can I get an education loan without collateral?", a: "Yes, through our premier banking partners (HDFC Credila, Avanse, Prodigy), we facilitate non-collateral loans up to ₹60 Lakhs for top global universities." },
  { q: "What is your student visa success rate?", a: "Aegis Overseas maintains an outstanding 99.4% student visa approval track record backed by rigorous mock embassy interview drills." },
];

export const FAQPreview: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Common Inquiries</span>
          <h2 className="text-3xl font-display font-extrabold text-navy-950 mt-1">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition"
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
''')

with open(os.path.join(home_dir, "BlogPreview.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { title: "UK Graduate Route: Complete 2026 Guide to Working in London", date: "Sep 2026", category: "Visa & Careers", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop" },
  { title: "STEM OPT in USA: How to Secure 36 Months of Work Authorization", date: "Aug 2026", category: "USA Guide", img: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=400&auto=format&fit=crop" },
  { title: "Top 10 Scholarships for Indian Students in Canada & Australia", date: "Aug 2026", category: "Scholarships", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop" },
];

export const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Latest Articles</span>
            <h2 className="text-3xl font-display font-extrabold text-navy-950 mt-1">Study Abroad Insights & News</h2>
          </div>
          <Link to="/blog" className="text-sm font-bold text-burgundy-900 hover:underline">
            Visit Our Blog →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-amber-700 uppercase">{p.category}</span>
                <h3 className="font-bold text-base text-navy-950 mt-2 group-hover:text-burgundy-900 transition">{p.title}</h3>
                <p className="text-xs text-slate-400 mt-4">{p.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
''')

print("Migrated all layout and home components.")
