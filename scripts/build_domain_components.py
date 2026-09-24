import os

src = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\src"

# 1. Common Components
common_dir = os.path.join(src, "components", "common")
os.makedirs(common_dir, exist_ok=True)

with open(os.path.join(common_dir, "Container.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
''')

with open(os.path.join(common_dir, "SectionHeading.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const SectionHeading: React.FC<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}> = ({ eyebrow, title, subtitle, center = false }) => (
  <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">{eyebrow}</span>}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-950 leading-tight">{title}</h2>
    {subtitle && <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">{subtitle}</p>}
  </div>
);
''')

with open(os.path.join(common_dir, "Button.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children, variant = 'primary', size = 'md', className = '', ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };
  const variantClasses = {
    gold: 'bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 font-bold shadow-sm',
    primary: 'bg-[#8A1538] hover:bg-burgundy-900 text-white font-bold shadow-sm',
    outline: 'border border-slate-300 hover:border-slate-400 text-slate-700 bg-white font-semibold',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold',
  };
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl transition duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
''')

with open(os.path.join(common_dir, "Breadcrumb.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

export const Breadcrumb: React.FC<{ items: { label: string; href?: string }[] }> = ({ items }) => (
  <nav className="flex items-center space-x-2 text-xs text-slate-500 py-4">
    <Link to="/" className="hover:text-amber-600">Home</Link>
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        <span>/</span>
        {item.href ? (
          <Link to={item.href} className="hover:text-amber-600">{item.label}</Link>
        ) : (
          <span className="text-slate-800 font-medium">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);
''')

with open(os.path.join(common_dir, "Loading.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const Loading: React.FC = () => (
  <div className="flex items-center justify-center p-12">
    <div className="w-8 h-8 border-3 border-amber-400 border-t-transparent rounded-full animate-spin" />
  </div>
);
''')

with open(os.path.join(common_dir, "ErrorMessage.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
    {message}
  </div>
);
''')

# 2. UI Components
ui_dir = os.path.join(src, "components", "ui")
os.makedirs(ui_dir, exist_ok=True)

with open(os.path.join(ui_dir, "Accordion.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion: React.FC<{ items: { title: string; content: string }[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full p-4 text-left font-bold text-slate-800 bg-slate-50 flex justify-between items-center"
            >
              <span>{item.title}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="p-4 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};
''')

with open(os.path.join(ui_dir, "Dropdown.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';

export const Dropdown: React.FC<{ trigger: React.ReactNode; children: React.ReactNode }> = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div>{trigger}</div>
      {open && <div className="absolute top-full left-0 z-50 pt-2">{children}</div>}
    </div>
  );
};
''')

with open(os.path.join(ui_dir, "Select.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ children, className = '', ...props }) => (
  <select className={`w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus:outline-none focus:border-amber-500 ${className}`} {...props}>
    {children}
  </select>
);
''')

with open(os.path.join(ui_dir, "Input.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
  <input className={`w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 focus:outline-none focus:border-amber-500 placeholder-slate-400 ${className}`} {...props} />
);
''')

with open(os.path.join(ui_dir, "Tabs.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';

export const Tabs: React.FC<{ tabs: { id: string; label: string; content: React.ReactNode }[] }> = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <div>
      <div className="flex border-b border-slate-200 gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-3 text-sm font-bold border-b-2 transition ${active === tab.id ? 'border-[#8A1538] text-[#8A1538]' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
};
''')

with open(os.path.join(ui_dir, "Carousel.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = dir === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };
  return (
    <div className="relative">
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth">
        {children}
      </div>
      <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-slate-700 hover:bg-slate-50 z-10">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-slate-700 hover:bg-slate-50 z-10">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
''')

# 3. Forms
forms_dir = os.path.join(src, "components", "forms")
os.makedirs(forms_dir, exist_ok=True)

with open(os.path.join(forms_dir, "FormInput.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const FormInput: React.FC<{
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>> = ({ label, error, className = '', ...props }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{label}</label>
    <input className={`w-full px-4 py-2.5 rounded-xl border ${error ? 'border-red-500' : 'border-slate-300'} text-sm focus:outline-none focus:border-amber-500 ${className}`} {...props} />
    {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
  </div>
);
''')

with open(os.path.join(forms_dir, "ContactForm.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';
import { FormInput } from './FormInput';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
        <h4 className="text-lg font-bold text-emerald-800">Message Received!</h4>
        <p className="text-xs text-emerald-600 mt-1">An Aegis counsellor will reach out within 2 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput label="Full Name" placeholder="e.g. Rahul Sharma" required />
      <FormInput label="Phone Number" placeholder="+91 9876543210" required />
      <FormInput label="Email Address" type="email" placeholder="rahul@example.com" required />
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Message / Inquiry</label>
        <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500" placeholder="Tell us your target country, course, or questions..." required />
      </div>
      <button type="submit" className="w-full py-3.5 bg-[#8A1538] text-white font-bold rounded-xl text-sm hover:bg-burgundy-900 transition">
        Send Message →
      </button>
    </form>
  );
};
''')

with open(os.path.join(forms_dir, "EnquiryForm.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React, { useState } from 'react';
import { FormInput } from './FormInput';

export const EnquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="p-6 bg-emerald-50 text-emerald-800 rounded-xl text-center">
        <p className="font-bold text-sm">Enquiry Registered!</p>
        <p className="text-xs mt-1">We will contact you shortly.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <FormInput label="Name" placeholder="Your Name" required />
      <FormInput label="Phone" placeholder="Mobile Number" required />
      <FormInput label="Target Country" placeholder="e.g. UK, USA" required />
      <button type="submit" className="w-full py-3 bg-[#8A1538] text-white font-bold rounded-xl text-xs hover:bg-burgundy-900 transition">
        Submit Enquiry
      </button>
    </form>
  );
};
''')

# 4. Domain Components
# Destinations
dest_comp = os.path.join(src, "components", "destinations")
os.makedirs(dest_comp, exist_ok=True)
with open(os.path.join(dest_comp, "DestinationCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';
import { DestinationData } from '@/data/destinations';

export const DestinationCard: React.FC<{ destination: DestinationData }> = ({ destination: d }) => (
  <Link to={`/destinations/${d.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300">
    <div className="h-48 overflow-hidden relative">
      <img src={d.image} alt={d.country} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold text-slate-800">
        {d.flag} {d.country}
      </span>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#8A1538] transition">{d.country}</h3>
      <p className="text-xs text-slate-500 italic mt-0.5">"{d.phrase}"</p>
      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between text-xs text-slate-600">
        <span>{d.universitiesCount} Unis</span>
        <span className="font-semibold text-emerald-700">{d.workRights}</span>
      </div>
    </div>
  </Link>
);
''')

with open(os.path.join(dest_comp, "DestinationGrid.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { DESTINATIONS } from '@/data/destinations';
import { DestinationCard } from './DestinationCard';

export const DestinationGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {DESTINATIONS.map((d) => <DestinationCard key={d.slug} destination={d} />)}
  </div>
);
''')

with open(os.path.join(dest_comp, "DestinationHero.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const DestinationHero: React.FC<{ title: string; subtitle: string; flag: string; bgImage: string }> = ({ title, subtitle, flag, bgImage }) => (
  <div className="relative h-80 flex items-center justify-center bg-[#071228] text-white overflow-hidden">
    <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#071228] via-transparent to-transparent" />
    <div className="relative z-10 text-center max-w-2xl px-4">
      <span className="text-4xl block mb-2">{flag}</span>
      <h1 className="text-4xl sm:text-5xl font-display font-extrabold">{title}</h1>
      <p className="mt-3 text-slate-300 text-sm sm:text-base">{subtitle}</p>
    </div>
  </div>
);
''')

with open(os.path.join(dest_comp, "CountryStats.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const CountryStats: React.FC<{ stats: { label: string; value: string }[] }> = ({ stats }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    {stats.map((s, idx) => (
      <div key={idx} className="text-center">
        <div className="text-xl sm:text-2xl font-black text-[#8A1538]">{s.value}</div>
        <div className="text-xs text-slate-500 mt-1">{s.label}</div>
      </div>
    ))}
  </div>
);
''')

with open(os.path.join(dest_comp, "CountryCourses.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

export const CountryCourses: React.FC<{ courses: string[] }> = ({ courses }) => (
  <div className="space-y-2">
    <h3 className="font-bold text-lg text-slate-900 mb-3">Popular Degrees</h3>
    <div className="flex flex-wrap gap-2">
      {courses.map((c, i) => (
        <span key={i} className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-lg text-xs font-semibold text-amber-900">{c}</span>
      ))}
    </div>
  </div>
);
''')

with open(os.path.join(dest_comp, "CountryUniversities.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const CountryUniversities: React.FC<{ universities: string[] }> = ({ universities }) => (
  <div className="space-y-3">
    <h3 className="font-bold text-lg text-slate-900 mb-3">Top Ranked Institutions</h3>
    <ul className="divide-y divide-slate-100">
      {universities.map((u, i) => (
        <li key={i} className="py-2.5 text-sm font-medium text-slate-700 flex items-center justify-between">
          <span>{u}</span>
          <span className="text-xs text-amber-600 font-bold">QS Top 100</span>
        </li>
      ))}
    </ul>
  </div>
);
''')

with open(os.path.join(dest_comp, "CountryFAQ.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

export const CountryFAQ: React.FC<{ faqs: { title: string; content: string }[] }> = ({ faqs }) => (
  <div className="my-8">
    <h3 className="font-bold text-xl text-slate-900 mb-4">Destination FAQs</h3>
    <Accordion items={faqs} />
  </div>
);
''')

# Universities components
uni_comp = os.path.join(src, "components", "universities")
os.makedirs(uni_comp, exist_ok=True)
with open(os.path.join(uni_comp, "UniversityCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

export const UniversityCard: React.FC<{ name: string; country: string; city: string; rank: number; tuition: string }> = (props) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">Rank #{props.rank}</span>
    <h3 className="font-bold text-lg text-slate-900">{props.name}</h3>
    <p className="text-xs text-slate-500 mt-0.5">{props.city}, {props.country}</p>
    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-600">
      <span>{props.tuition}</span>
      <Link to="/universities" className="text-[#8A1538] font-bold hover:underline">View Programs →</Link>
    </div>
  </div>
);
''')

with open(os.path.join(uni_comp, "UniversityGrid.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { UniversityCard } from './UniversityCard';

export const UniversityGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <UniversityCard name="University of Oxford" country="UK" city="Oxford" rank={1} tuition="£28,000/yr" />
    <UniversityCard name="Harvard University" country="USA" city="Cambridge, MA" rank={4} tuition="$54,000/yr" />
    <UniversityCard name="University of Toronto" country="Canada" city="Toronto" rank={21} tuition="CAD 38,000/yr" />
    <UniversityCard name="University of Melbourne" country="Australia" city="Melbourne" rank={33} tuition="AUD 36,000/yr" />
    <UniversityCard name="Technical University of Munich" country="Germany" city="Munich" rank={37} tuition="€0/yr" />
    <UniversityCard name="Trinity College Dublin" country="Ireland" city="Dublin" rank={81} tuition="€18,000/yr" />
  </div>
);
''')

with open(os.path.join(uni_comp, "UniversitySearch.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Search } from 'lucide-react';

export const UniversitySearch: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => (
  <div className="relative">
    <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search university name, city, or discipline..."
      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 shadow-sm"
    />
  </div>
);
''')

with open(os.path.join(uni_comp, "UniversityFilters.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const UniversityFilters: React.FC<{ selectedCountry: string; onSelectCountry: (c: string) => void }> = ({ selectedCountry, onSelectCountry }) => {
  const countries = ["All", "UK", "USA", "Canada", "Australia", "Germany", "Ireland"];
  return (
    <div className="flex flex-wrap gap-2">
      {countries.map((c) => (
        <button
          key={c}
          onClick={() => onSelectCountry(c)}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${selectedCountry === c ? 'bg-[#8A1538] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
};
''')

with open(os.path.join(uni_comp, "UniversityDetails.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const UniversityDetails: React.FC = () => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200">
    <h2 className="text-2xl font-bold text-slate-900">University Overview</h2>
    <p className="text-sm text-slate-600 mt-2">Comprehensive curriculum, campus facilities, and admissions guide.</p>
  </div>
);
''')

with open(os.path.join(uni_comp, "UniversityCompare.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const UniversityCompare: React.FC = () => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200">
    <h2 className="text-2xl font-bold text-slate-900">Side-by-Side Comparison</h2>
    <p className="text-sm text-slate-600 mt-2">Compare rankings, tuition fees, and entry requirements.</p>
  </div>
);
''')

# Courses components
course_comp = os.path.join(src, "components", "courses")
os.makedirs(course_comp, exist_ok=True)
with open(os.path.join(course_comp, "CourseCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

export const CourseCard: React.FC<{ title: string; category: string; duration: string }> = ({ title, category, duration }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
    <span className="text-xs font-bold text-amber-700 uppercase">{category}</span>
    <h3 className="font-bold text-lg text-slate-900 mt-1">{title}</h3>
    <p className="text-xs text-slate-500 mt-1">{duration}</p>
    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
      <span className="font-semibold text-emerald-700">Top Employment ROI</span>
      <Link to="/courses" className="text-[#8A1538] font-bold hover:underline">Details →</Link>
    </div>
  </div>
);
''')

with open(os.path.join(course_comp, "CourseGrid.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { CourseCard } from './CourseCard';

export const CourseGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <CourseCard title="MSc Computer Science" category="STEM" duration="1–2 Years" />
    <CourseCard title="Master of Business Administration (MBA)" category="Business" duration="1–2 Years" />
    <CourseCard title="MS Data Science & AI" category="STEM" duration="18 Months" />
    <CourseCard title="MSc International Finance" category="Finance" duration="1 Year" />
    <CourseCard title="Master of Cybersecurity" category="STEM" duration="2 Years" />
    <CourseCard title="Master of Public Health (MPH)" category="Healthcare" duration="1–2 Years" />
  </div>
);
''')

with open(os.path.join(course_comp, "CourseFilters.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const CourseFilters: React.FC = () => (
  <div className="flex flex-wrap gap-2 mb-6">
    {["All Disciplines", "Computer Science", "Engineering", "Business", "Finance", "Healthcare"].map((cat, i) => (
      <button key={i} className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200">{cat}</button>
    ))}
  </div>
);
''')

with open(os.path.join(course_comp, "CourseDetails.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const CourseDetails: React.FC = () => (
  <div className="p-8 bg-white rounded-2xl border border-slate-200">
    <h2 className="text-2xl font-bold text-slate-900">Course Syllabus & Admissions</h2>
    <p className="text-sm text-slate-600 mt-2">Comprehensive curriculum structure and prerequisites.</p>
  </div>
);
''')

# Services components
srv_comp = os.path.join(src, "components", "services")
os.makedirs(srv_comp, exist_ok=True)
with open(os.path.join(srv_comp, "ServiceCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

export const ServiceCard: React.FC<{ title: string; desc: string; slug: string }> = ({ title, desc, slug }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
    <div>
      <h3 className="font-bold text-lg text-slate-900">{title}</h3>
      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
    </div>
    <div className="mt-6 pt-3 border-t border-slate-100">
      <Link to={`/services/${slug}`} className="text-xs font-bold text-[#8A1538] hover:underline">Learn More →</Link>
    </div>
  </div>
);
''')

for srv_name in ["Counselling", "UniversitySelection", "ApplicationAssistance", "Scholarships", "EducationLoans", "VisaAssistance", "Accommodation", "Forex", "PreDeparture"]:
    with open(os.path.join(srv_comp, f"{srv_name}.tsx"), "w", encoding="utf-8") as f:
        f.write(f'''import React from 'react';

export const {srv_name}: React.FC = () => (
  <div className="p-6 bg-white rounded-2xl border border-slate-200">
    <h3 className="font-bold text-xl text-slate-900">{srv_name.replace("Assistance", " Assistance")}</h3>
    <p className="text-sm text-slate-600 mt-2">Dedicated mentorship delivering 100% transparent and reliable guidance.</p>
  </div>
);
''')

# Scholarships components
sch_comp = os.path.join(src, "components", "scholarships")
os.makedirs(sch_comp, exist_ok=True)
with open(os.path.join(sch_comp, "ScholarshipCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const ScholarshipCard: React.FC<{ title: string; amount: string; country: string }> = ({ title, amount, country }) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
    <span className="text-xs font-bold text-amber-700 uppercase">{country}</span>
    <h3 className="font-bold text-lg text-slate-900 mt-1">{title}</h3>
    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
      <span className="font-extrabold text-[#8A1538]">{amount}</span>
      <button className="px-3 py-1 bg-amber-400 text-slate-950 font-bold rounded-lg hover:bg-amber-300">Apply</button>
    </div>
  </div>
);
''')

with open(os.path.join(sch_comp, "ScholarshipGrid.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { ScholarshipCard } from './ScholarshipCard';

export const ScholarshipGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ScholarshipCard title="Global Excellence Grant" amount="Up to £10,000" country="UK" />
    <ScholarshipCard title="Dean's Merit Fellowship" amount="Up to $25,000/yr" country="USA" />
    <ScholarshipCard title="International Leaders Award" amount="20% Tuition Waiver" country="Australia" />
  </div>
);
''')

with open(os.path.join(sch_comp, "ScholarshipFilters.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const ScholarshipFilters: React.FC = () => (
  <div className="flex gap-2 mb-6">
    {["All Grants", "Undergraduate", "Postgraduate", "STEM Only"].map((f, i) => (
      <button key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700">{f}</button>
    ))}
  </div>
);
''')

# Test Preparation components
tp_comp = os.path.join(src, "components", "test-preparation")
os.makedirs(tp_comp, exist_ok=True)
with open(os.path.join(tp_comp, "TestCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

export const TestCard: React.FC<{ name: string; desc: string; slug: string }> = ({ name, desc, slug }) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
    <div>
      <h3 className="font-extrabold text-2xl text-[#8A1538]">{name}</h3>
      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
    </div>
    <div className="mt-6 pt-3 border-t border-slate-100">
      <Link to={`/test-preparation/${slug}`} className="text-xs font-bold text-[#8A1538] hover:underline">Coaching Details →</Link>
    </div>
  </div>
);
''')

for tname in ["IELTS", "PTE", "TOEFL", "GRE", "GMAT", "SAT", "OET", "Duolingo"]:
    with open(os.path.join(tp_comp, f"{tname}.tsx"), "w", encoding="utf-8") as f:
        f.write(f'''import React from 'react';

export const {tname}: React.FC = () => (
  <div className="p-6 bg-white rounded-2xl border border-slate-200">
    <h3 className="text-2xl font-bold text-slate-900">{tname} Prep</h3>
    <p className="text-sm text-slate-600 mt-2">Certified trainers, mock test analysis, and guaranteed target band strategies.</p>
  </div>
);
''')

# Student Stories components
ss_comp = os.path.join(src, "components", "student-stories")
os.makedirs(ss_comp, exist_ok=True)
with open(os.path.join(ss_comp, "StudentCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const StudentCard: React.FC<{ name: string; uni: string; quote: string; img: string }> = ({ name, uni, quote, img }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
    <img src={img} alt={name} className="w-full h-48 object-cover" />
    <div className="p-5">
      <p className="text-xs text-slate-600 italic leading-relaxed">"{quote}"</p>
      <div className="mt-4 pt-3 border-t border-slate-100">
        <h4 className="font-bold text-sm text-slate-900">{name}</h4>
        <p className="text-xs text-amber-700">{uni}</p>
      </div>
    </div>
  </div>
);
''')

with open(os.path.join(ss_comp, "StudentGrid.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { StudentCard } from './StudentCard';

export const StudentGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <StudentCard name="Rohan V." uni="Imperial College London" quote="Aegis made admissions painless!" img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" />
    <StudentCard name="Ananya D." uni="Univ of Toronto" quote="Secured a CAD 12k scholarship!" img="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" />
    <StudentCard name="Karthik R." uni="Monash University" quote="Visa approved in 2 weeks flat!" img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" />
  </div>
);
''')

with open(os.path.join(ss_comp, "StudentStoryDetails.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const StudentStoryDetails: React.FC = () => (
  <div className="p-8 bg-white rounded-2xl border border-slate-200">
    <h2 className="text-2xl font-bold text-slate-900">Student Journey Details</h2>
    <p className="text-sm text-slate-600 mt-2">In-depth interview and academic timeline.</p>
  </div>
);
''')

# Testimonials components
testi_comp = os.path.join(src, "components", "testimonials")
os.makedirs(testi_comp, exist_ok=True)
with open(os.path.join(testi_comp, "TestimonialCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialCard: React.FC<{ name: string; text: string; uni: string }> = ({ name, text, uni }) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex gap-1 text-amber-400 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-xs text-slate-600 italic">"{text}"</p>
    </div>
    <div className="mt-4 pt-3 border-t border-slate-100">
      <h4 className="font-bold text-sm text-slate-900">{name}</h4>
      <p className="text-[11px] text-slate-400">{uni}</p>
    </div>
  </div>
);
''')

with open(os.path.join(testi_comp, "TestimonialSlider.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialSlider: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <TestimonialCard name="Pooja Hegde" uni="Univ of Sydney" text="The team simplified my entire visa documentation process." />
    <TestimonialCard name="Venkatesh Rao" uni="Trinity College Dublin" text="Mock visa interview sessions made embassy filing stress-free." />
    <TestimonialCard name="Divya K." uni="Boston University" text="Excellent guidance on STEM OPT extensions." />
  </div>
);
''')

# Blog components
blog_comp = os.path.join(src, "components", "blog")
os.makedirs(blog_comp, exist_ok=True)
with open(os.path.join(blog_comp, "BlogCard.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard: React.FC<{ title: string; category: string; date: string; img: string }> = ({ title, category, date, img }) => (
  <Link to="/blog" className="block bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
    <img src={img} alt={title} className="w-full h-44 object-cover" />
    <div className="p-5">
      <span className="text-xs font-bold text-amber-600 uppercase">{category}</span>
      <h3 className="font-bold text-base text-slate-900 mt-1 leading-snug">{title}</h3>
      <p className="text-xs text-slate-400 mt-3">{date}</p>
    </div>
  </Link>
);
''')

with open(os.path.join(blog_comp, "BlogGrid.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { BlogCard } from './BlogCard';

export const BlogGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <BlogCard title="UK Graduate Route 2026: Complete Work Visa Guide" category="Visa & Careers" date="Sep 2026" img="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop" />
    <BlogCard title="How to Secure Up to $25,000 STEM Scholarships in the US" category="Scholarships" date="Aug 2026" img="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=400&auto=format&fit=crop" />
    <BlogCard title="Top 10 High-Demand Master's in Canada & Australia" category="Careers" date="Aug 2026" img="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=400&auto=format&fit=crop" />
  </div>
);
''')

with open(os.path.join(blog_comp, "BlogArticle.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';

export const BlogArticle: React.FC = () => (
  <article className="max-w-3xl mx-auto p-8 bg-white rounded-2xl border border-slate-200">
    <h1 className="text-3xl font-bold text-slate-900">Full Article Content</h1>
    <p className="text-sm text-slate-600 mt-4 leading-relaxed">Comprehensive study abroad insights published by certified advisors.</p>
  </article>
);
''')

print("All components built successfully.")
