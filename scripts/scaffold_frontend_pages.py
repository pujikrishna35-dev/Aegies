import os

src = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend\src"
pages_dir = os.path.join(src, "pages")

# Home.tsx assembling all the homepage sections
home_file = os.path.join(pages_dir, "Home", "Home.tsx")
with open(home_file, "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustStats } from '@/components/home/TrustStats';
import { DestinationsPreview } from '@/components/home/DestinationsPreview';
import { UniversityFinder } from '@/components/home/UniversityFinder';
import { WhyAegis } from '@/components/home/WhyAegis';
import { SupportJourney } from '@/components/home/SupportJourney';
import { AegisJourney } from '@/components/home/AegisJourney';
import { CoursesPreview } from '@/components/home/CoursesPreview';
import { ScholarshipsPreview } from '@/components/home/ScholarshipsPreview';
import { TestPreparation } from '@/components/home/TestPreparation';
import { UniversitiesPreview } from '@/components/home/UniversitiesPreview';
import { StudentSuccess } from '@/components/home/StudentSuccess';
import { AboutPreview } from '@/components/home/AboutPreview';
import { Reviews } from '@/components/home/Reviews';
import { FAQPreview } from '@/components/home/FAQPreview';
import { BlogPreview } from '@/components/home/BlogPreview';
import { FinalCTA } from '@/components/home/FinalCTA';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustStats />
      <DestinationsPreview />
      <UniversityFinder />
      <WhyAegis />
      <SupportJourney />
      <AegisJourney />
      <CoursesPreview />
      <ScholarshipsPreview />
      <TestPreparation />
      <UniversitiesPreview />
      <StudentSuccess />
      <AboutPreview />
      <Reviews />
      <FAQPreview />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
};

export default Home;
''')

# About.tsx
with open(os.path.join(pages_dir, "About", "About.tsx"), "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { Award, Compass, ShieldCheck, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">Empowering Futures</span>
        <h1 className="text-4xl font-display font-extrabold text-navy-950 mt-2">About Aegis Overseas</h1>
        <p className="text-slate-600 mt-4 leading-relaxed text-base">
          For over 15 years, Aegis Overseas Education Services has pioneered honest, student-first overseas admission mentoring. We connect aspiring minds with prestigious universities worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {[
          { icon: Users, stat: "3,500+", label: "Successful Global Placements" },
          { icon: ShieldCheck, stat: "99.4%", label: "Student Visa Approval Rate" },
          { icon: Award, stat: "$5M+", label: "Scholarships Secured" },
          { icon: Compass, stat: "100+", label: "Global University Partners" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
              <Icon className="w-8 h-8 text-[#8A1538] mx-auto mb-3" />
              <div className="text-3xl font-extrabold text-navy-950">{item.stat}</div>
              <div className="text-xs text-slate-500 mt-1">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
''')

# Destinations pages
dest_pages = {
  'Destinations.tsx': 'Global Study Destinations',
  'UK.tsx': 'Study in the United Kingdom',
  'USA.tsx': 'Study in the United States',
  'Canada.tsx': 'Study in Canada',
  'Australia.tsx': 'Study in Australia',
  'Germany.tsx': 'Study in Germany',
  'Ireland.tsx': 'Study in Ireland',
  'NewZealand.tsx': 'Study in New Zealand',
  'Europe.tsx': 'Study in Europe (Schengen)'
}

for fname, title in dest_pages.items():
    comp_name = fname.replace(".tsx", "")
    with open(os.path.join(pages_dir, "Destinations", fname), "w", encoding="utf-8") as f:
        f.write(f'''import React from 'react';
import {{ Link }} from 'react-router-dom';

export const {comp_name}: React.FC = () => {{
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link to="/destinations" className="text-xs font-bold text-amber-600 uppercase hover:underline">← All Destinations</Link>
        <h1 className="text-4xl font-display font-extrabold text-navy-950 mt-2">{title}</h1>
        <p className="text-slate-600 mt-2">Comprehensive guide to top universities, intakes, tuition fees, post-study work rights, and visa criteria.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Why Choose This Destination?</h2>
          <p className="text-slate-600 leading-relaxed">
            Gain an internationally recognized qualification, access cutting-edge research opportunities, and unlock rewarding global career pathways with personalized guidance from certified Aegis Overseas consultants.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-slate-50">
              <span className="text-xs text-slate-400 font-bold block uppercase">Intakes</span>
              <span className="font-bold text-slate-800 text-sm">Fall (Sep/Oct) & Spring (Jan/Feb)</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50">
              <span className="text-xs text-slate-400 font-bold block uppercase">Visa Success</span>
              <span className="font-bold text-emerald-700 text-sm">99.4% Approval Rate</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0B132B] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold font-display">Speak with an Expert</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Get an instant profile review and shortlist of universities matching your GPA and budget.
            </p>
          </div>
          <Link to="/consultation" className="mt-8 block w-full py-3 bg-[#D4AF37] text-navy-950 text-center font-bold rounded-xl text-sm hover:brightness-105 transition">
            Book Free Counselling
          </Link>
        </div>
      </div>
    </div>
  );
}};

export default {comp_name};
''')

# Universities pages
uni_pages = {
  'Universities.tsx': 'Explore Global Partner Universities',
  'UniversityDetails.tsx': 'University Profile & Admissions',
  'Compare.tsx': 'Compare Universities & Degrees'
}
for fname, title in uni_pages.items():
    comp_name = fname.replace(".tsx", "")
    with open(os.path.join(pages_dir, "Universities", fname), "w", encoding="utf-8") as f:
        f.write(f'''import React from 'react';

const unis = ["University of Oxford", "Harvard University", "University of Toronto", "University of Melbourne", "TU Munich", "Trinity College Dublin"];

export const {comp_name}: React.FC = () => {{
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display font-extrabold text-navy-950">{title}</h1>
      <p className="text-slate-600 mt-2">Browse and evaluate top ranked universities across UK, USA, Canada, Australia, and Europe.</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {{unis.map((name, idx) => (
          <div key={{idx}} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg text-slate-900">{{name}}</h3>
            <p className="text-xs text-slate-500 mt-1">Global Top 50 Ranked</p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
              <span className="font-medium text-amber-700">Admissions Open</span>
              <button className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700 hover:bg-slate-200">View Details</button>
            </div>
          </div>
        ))}}
      </div>
    </div>
  );
}};

export default {comp_name};
''')

# Courses pages
course_pages = {
  'Courses.tsx': 'Find Your Ideal Course & Degree',
  'CourseDetails.tsx': 'Course Curriculum & Entry Requirements'
}
for fname, title in course_pages.items():
    comp_name = fname.replace(".tsx", "")
    with open(os.path.join(pages_dir, "Courses", fname), "w", encoding="utf-8") as f:
        f.write(f'''import React from 'react';

const sampleCourses = ["MSc Computer Science", "Master of Business Administration (MBA)", "MS Data Science & AI", "MSc International Finance", "Master of Cybersecurity"];

export const {comp_name}: React.FC = () => {{
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display font-extrabold text-navy-950">{title}</h1>
      <p className="text-slate-600 mt-2">Filter from 15,000+ STEM, Business, Engineering, and Healthcare degrees.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {{sampleCourses.map((cname, idx) => (
          <div key={{idx}} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg text-slate-900">{{cname}}</h3>
            <p className="text-xs text-slate-500 mt-1">1–2 Years Duration</p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
              <span className="font-semibold text-emerald-700">High Employment ROI</span>
              <button className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700 hover:bg-slate-200">Apply Now</button>
            </div>
          </div>
        ))}}
      </div>
    </div>
  );
}};

export default {comp_name};
''')

# Services pages
srv_pages = {
  'Services.tsx': '360° Study Abroad Services',
  'Counselling.tsx': 'Career & Profile Counselling',
  'UniversitySelection.tsx': 'University Shortlisting',
  'Applications.tsx': 'Application & SOP Editing',
  'Scholarships.tsx': 'Scholarship Guidance',
  'EducationLoans.tsx': 'Education Loans & Financial Planning',
  'Visa.tsx': 'Visa Application & Mock Embassy Interviews',
  'Accommodation.tsx': 'Student Housing & Accommodation',
  'Forex.tsx': 'Forex Cards & Currency Remittance',
  'PreDeparture.tsx': 'Pre-Departure Orientation & Alumni Connect'
}
for fname, title in srv_pages.items():
    comp_name = fname.replace(".tsx", "")
    with open(os.path.join(pages_dir, "Services", fname), "w", encoding="utf-8") as f:
        f.write(f'''import React from 'react';
import {{ Link }} from 'react-router-dom';

export const {comp_name}: React.FC = () => {{
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link to="/services" className="text-xs font-bold text-amber-600 uppercase hover:underline">← All Services</Link>
        <h1 className="text-4xl font-display font-extrabold text-navy-950 mt-2">{title}</h1>
        <p className="text-slate-600 mt-2">Professional, step-by-step assistance ensuring high admission chances and smooth relocation.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-3xl">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Service Highlights</h2>
        <ul className="space-y-3 text-slate-600 text-sm">
          <li className="flex items-center gap-2">✓ Dedicated certified counsellor assigned to your profile</li>
          <li className="flex items-center gap-2">✓ Direct liaison with university international admissions teams</li>
          <li className="flex items-center gap-2">✓ Multi-tier document quality verification</li>
          <li className="flex items-center gap-2">✓ Complete post-visa support until your first day on campus</li>
        </ul>
        <div className="mt-8 pt-6 border-t border-slate-100">
          <Link to="/consultation" className="inline-block px-6 py-3 bg-[#8A1538] text-white font-bold rounded-xl text-sm hover:bg-burgundy-900 transition">
            Book Free Session
          </Link>
        </div>
      </div>
    </div>
  );
}};

export default {comp_name};
''')

# Single pages
single_pages = [
  ('Scholarships', 'Scholarships.tsx', 'Global Scholarships for International Students'),
  ('TestPreparation', 'TestPreparation.tsx', 'IELTS, TOEFL, GRE, GMAT & PTE Coaching'),
  ('StudentStories', 'StudentStories.tsx', 'Real Student Success Stories'),
  ('Blog', 'Blog.tsx', 'Aegis Overseas Blog & Industry Insights'),
  ('UniversityFinder', 'UniversityFinder.tsx', 'Smart University & Course Matcher'),
  ('Consultation', 'Consultation.tsx', 'Book Your Free 1-on-1 Consultation'),
  ('Contact', 'Contact.tsx', 'Contact Aegis Overseas'),
  ('Privacy', 'Privacy.tsx', 'Privacy Policy'),
  ('Terms', 'Terms.tsx', 'Terms & Conditions')
]

for folder, fname, title in single_pages:
    fdir = os.path.join(pages_dir, folder)
    os.makedirs(fdir, exist_ok=True)
    comp_name = fname.replace(".tsx", "")
    with open(os.path.join(fdir, fname), "w", encoding="utf-8") as f:
        f.write(f'''import React from 'react';

export const {comp_name}: React.FC = () => {{
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display font-extrabold text-navy-950">{title}</h1>
      <p className="text-slate-600 mt-2">Welcome to Aegis Overseas {title}. We are dedicated to your academic and professional excellence.</p>
      <div className="mt-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <p className="text-slate-600 leading-relaxed text-sm">
          Detailed information and interactive forms are ready for your international study exploration.
        </p>
      </div>
    </div>
  );
}};

export default {comp_name};
''')

# App.tsx with standard Layout and React Router Routes
app_file = os.path.join(src, "App.tsx")
with open(app_file, "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import Home from './pages/Home/Home';
import About from './pages/About/About';

// Destinations
import Destinations from './pages/Destinations/Destinations';
import UK from './pages/Destinations/UK';
import USA from './pages/Destinations/USA';
import Canada from './pages/Destinations/Canada';
import Australia from './pages/Destinations/Australia';
import Germany from './pages/Destinations/Germany';
import Ireland from './pages/Destinations/Ireland';
import NewZealand from './pages/Destinations/NewZealand';
import Europe from './pages/Destinations/Europe';

// Universities
import Universities from './pages/Universities/Universities';
import UniversityDetails from './pages/Universities/UniversityDetails';
import Compare from './pages/Universities/Compare';

// Courses
import Courses from './pages/Courses/Courses';
import CourseDetails from './pages/Courses/CourseDetails';

// Services
import Services from './pages/Services/Services';
import Counselling from './pages/Services/Counselling';
import UniversitySelection from './pages/Services/UniversitySelection';
import Applications from './pages/Services/Applications';
import ServiceScholarships from './pages/Services/Scholarships';
import EducationLoans from './pages/Services/EducationLoans';
import Visa from './pages/Services/Visa';
import Accommodation from './pages/Services/Accommodation';
import Forex from './pages/Services/Forex';
import PreDeparture from './pages/Services/PreDeparture';

// Other Pages
import Scholarships from './pages/Scholarships/Scholarships';
import TestPreparation from './pages/TestPreparation/TestPreparation';
import StudentStories from './pages/StudentStories/StudentStories';
import Blog from './pages/Blog/Blog';
import UniversityFinder from './pages/UniversityFinder/UniversityFinder';
import Consultation from './pages/Consultation/Consultation';
import Contact from './pages/Contact/Contact';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Destinations */}
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/uk" element={<UK />} />
            <Route path="/destinations/usa" element={<USA />} />
            <Route path="/destinations/canada" element={<Canada />} />
            <Route path="/destinations/australia" element={<Australia />} />
            <Route path="/destinations/germany" element={<Germany />} />
            <Route path="/destinations/ireland" element={<Ireland />} />
            <Route path="/destinations/new-zealand" element={<NewZealand />} />
            <Route path="/destinations/europe" element={<Europe />} />

            {/* Universities */}
            <Route path="/universities" element={<Universities />} />
            <Route path="/universities/:slug" element={<UniversityDetails />} />
            <Route path="/universities/compare" element={<Compare />} />

            {/* Courses */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/counselling" element={<Counselling />} />
            <Route path="/services/university-selection" element={<UniversitySelection />} />
            <Route path="/services/applications" element={<Applications />} />
            <Route path="/services/scholarships" element={<ServiceScholarships />} />
            <Route path="/services/education-loans" element={<EducationLoans />} />
            <Route path="/services/visa" element={<Visa />} />
            <Route path="/services/accommodation" element={<Accommodation />} />
            <Route path="/services/forex" element={<Forex />} />
            <Route path="/services/pre-departure" element={<PreDeparture />} />

            {/* Standalone Pages */}
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/test-preparation" element={<TestPreparation />} />
            <Route path="/student-stories" element={<StudentStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/university-finder" element={<UniversityFinder />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
''')

# main.tsx
main_file = os.path.join(src, "main.tsx")
with open(main_file, "w", encoding="utf-8") as f:
    f.write('''import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
''')

print("All frontend pages, routes, and main entrypoint generated successfully.")
