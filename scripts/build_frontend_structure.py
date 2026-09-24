import os
import shutil

base_front = r"c:\Users\PUJI KRISHNA\OneDrive\Desktop\Aegies\aegis-overseas\frontend"
pub = os.path.join(base_front, "public")
src = os.path.join(base_front, "src")

# 1. Favicon and Logo
os.makedirs(os.path.join(pub, "favicon"), exist_ok=True)
os.makedirs(os.path.join(pub, "logo"), exist_ok=True)

# Copy logos if exist in public/logos/
old_logos = os.path.join(pub, "logos")
if os.path.exists(old_logos):
    for f in os.listdir(old_logos):
        shutil.copy2(os.path.join(old_logos, f), os.path.join(pub, "logo", f))

# Also ensure aegis-icon.svg exists
icon_svg = os.path.join(pub, "logo", "aegis-icon.svg")
if not os.path.exists(icon_svg):
    symbol_svg = os.path.join(pub, "logo", "aegis-symbol.svg")
    if os.path.exists(symbol_svg):
        shutil.copy2(symbol_svg, icon_svg)
    else:
        with open(icon_svg, "w", encoding="utf-8") as f:
            f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="30" fill="#071228" stroke="#C5A059" stroke-width="2.5"/><path d="M 32 14 L 48 48 L 32 40 L 16 48 Z" fill="#C5A059"/><circle cx="32" cy="32" r="3.5" fill="#FFFFFF"/></svg>''')

# Favicon files placeholder
for fav in ["favicon.ico", "favicon-16x16.png", "favicon-32x32.png", "apple-touch-icon.png"]:
    fav_path = os.path.join(pub, "favicon", fav)
    if not os.path.exists(fav_path):
        with open(fav_path, "wb") as f:
            f.write(b"")

# 2. Hero and Destinations Images
hero_dir = os.path.join(pub, "images", "hero")
os.makedirs(hero_dir, exist_ok=True)

hero_bg = os.path.join(hero_dir, "hero-background.webp")
banner = os.path.join(hero_dir, "hero-banner.png")
if os.path.exists(banner) and not os.path.exists(hero_bg):
    shutil.copy2(banner, hero_bg)

for img_folder in ["destinations", "universities", "courses", "services", "scholarships", "students", "testimonials", "blog", "about"]:
    os.makedirs(os.path.join(pub, "images", img_folder), exist_ok=True)

for icon_folder in ["countries", "services", "courses", "tests", "social", "ui"]:
    os.makedirs(os.path.join(pub, "icons", icon_folder), exist_ok=True)

# Flags
flags_dir = os.path.join(pub, "flags")
os.makedirs(flags_dir, exist_ok=True)
flag_codes = ["uk", "usa", "canada", "australia", "germany", "ireland", "new-zealand"]
for fc in flag_codes:
    f_path = os.path.join(flags_dir, f"{fc}.svg")
    if not os.path.exists(f_path):
        with open(f_path, "w", encoding="utf-8") as f:
            f.write(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="60" height="30"><rect width="60" height="30" fill="#071228"/><text x="30" y="18" fill="#E2C474" font-size="10" font-family="sans-serif" text-anchor="middle">{fc.upper()}</text></svg>''')

# Videos
for vid_folder in ["hero", "students", "testimonials"]:
    os.makedirs(os.path.join(pub, "videos", vid_folder), exist_ok=True)

# 3. Assets in src
for a_folder in ["images", "icons", "fonts"]:
    os.makedirs(os.path.join(src, "assets", a_folder), exist_ok=True)

# 4. Data files
data_dir = os.path.join(src, "data")
os.makedirs(data_dir, exist_ok=True)

with open(os.path.join(data_dir, "navigation.ts"), "w", encoding="utf-8") as f:
    f.write('''export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Study Abroad', href: '/destinations' },
  { label: 'Destinations', href: '/destinations', hasDropdown: true },
  { label: 'Universities', href: '/universities' },
  { label: 'Courses', href: '/courses' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Scholarships', href: '/scholarships' },
  { label: 'Student Stories', href: '/student-stories' },
  { label: 'About Us', href: '/about' },
];
''')

with open(os.path.join(data_dir, "destinations.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface DestinationData {
  country: string;
  slug: string;
  headline: string;
  phrase: string;
  flag: string;
  image: string;
  universitiesCount: string;
  tuition: string;
  workRights: string;
  popularCourses: string[];
}

export const DESTINATIONS: DestinationData[] = [
  {
    country: 'United Kingdom',
    slug: 'uk',
    headline: 'Tradition Inspires Tomorrow',
    phrase: 'Learn. Grow. Belong.',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '160+',
    tuition: '£14,000 - £30,000/yr',
    workRights: '2-Year Graduate Visa',
    popularCourses: ['Computer Science', 'Data Analytics', 'Business Management', 'Law'],
  },
  {
    country: 'United States',
    slug: 'usa',
    headline: 'Innovation Meets Ambition',
    phrase: 'Dream. Study. Achieve.',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '4,000+',
    tuition: '$25,000 - $55,000/yr',
    workRights: 'Up to 3 Years STEM OPT',
    popularCourses: ['Artificial Intelligence', 'Software Engineering', 'MBA', 'Finance'],
  },
  {
    country: 'Canada',
    slug: 'canada',
    headline: 'Welcoming Culture & World-Class Degrees',
    phrase: 'Opportunities Await.',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '100+',
    tuition: 'CAD 18,000 - CAD 38,000/yr',
    workRights: 'Up to 3 Years PGWP',
    popularCourses: ['Cloud Computing', 'Data Science', 'Business Administration', 'Biotech'],
  },
  {
    country: 'Australia',
    slug: 'australia',
    headline: 'High Standard of Living & Global Recognition',
    phrase: 'A World of Discovery.',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '43+',
    tuition: 'AUD 22,000 - AUD 45,000/yr',
    workRights: '2–4 Years Post-Study Work',
    popularCourses: ['Information Technology', 'Civil Engineering', 'Accounting', 'Nursing'],
  },
  {
    country: 'Germany',
    slug: 'germany',
    headline: 'Engineering Powerhouse of Europe',
    phrase: 'Engineered for a Better Future.',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '380+',
    tuition: 'Zero or Low Tuition (€500–€3,000/yr)',
    workRights: '18-Month Jobseeker Visa',
    popularCourses: ['Automotive Engineering', 'Mechanical & Robotics', 'Informatics'],
  },
  {
    country: 'Ireland',
    slug: 'ireland',
    headline: 'The Silicon Valley of Europe',
    phrase: 'More Than a Degree.',
    flag: '🇮🇪',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '30+',
    tuition: '€12,000 - €26,000/yr',
    workRights: '2-Year Third Level Graduate Visa',
    popularCourses: ['Pharmaceuticals', 'Cybersecurity', 'Financial Tech', 'Data Analytics'],
  },
  {
    country: 'New Zealand',
    slug: 'new-zealand',
    headline: 'Safe, Supportive & Globally Ranked',
    phrase: 'Realise Your True Potential.',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '8 World-Class Universities',
    tuition: 'NZD 24,000 - NZD 40,000/yr',
    workRights: 'Up to 3-Year Post-Study Visa',
    popularCourses: ['Environmental Science', 'Agribusiness', 'Software Dev', 'Hospitality'],
  },
  {
    country: 'Europe (Schengen)',
    slug: 'europe',
    headline: 'Multi-Cultural Academic Excellence',
    phrase: 'Unbounded European Horizons.',
    flag: '🇪🇺',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop',
    universitiesCount: '500+ Partner Campuses',
    tuition: '€8,000 - €22,000/yr',
    workRights: '1–2 Years Stay Back depending on state',
    popularCourses: ['International Business', 'Renewable Energy', 'Design & Architecture'],
  },
];
''')

with open(os.path.join(data_dir, "services.ts"), "w", encoding="utf-8") as f:
    f.write('''export interface ServiceData {
  title: string;
  slug: string;
  shortDesc: string;
  iconName: string;
}

export const SERVICES: ServiceData[] = [
  { title: "Career Counselling", slug: "counselling", shortDesc: "Psychometric profiling and personalised career roadmap creation.", iconName: "Compass" },
  { title: "University Selection", slug: "university-selection", shortDesc: "Dream, Target, and Safe university curation matching GPA and budget.", iconName: "School" },
  { title: "Application Assistance", slug: "application-assistance", shortDesc: "SOP polishing, CV optimization, and fee waiver support.", iconName: "FileCheck" },
  { title: "Scholarships", slug: "scholarships", shortDesc: "Securing merit awards, sports grants, and university-funded tuition discounts.", iconName: "Award" },
  { title: "Education Loans", slug: "education-loans", shortDesc: "Collateral and non-collateral loan sanctioning through premier banking partners.", iconName: "BadgeDollarSign" },
  { title: "Visa Assistance", slug: "visa-assistance", shortDesc: "99.4% visa success record with rigorous mock embassy interview drills.", iconName: "ShieldCheck" },
  { title: "Accommodation", slug: "accommodation", shortDesc: "Vetted on-campus halls and student apartments near university campuses.", iconName: "Home" },
  { title: "Forex & SIM", slug: "forex", shortDesc: "Zero-markup student currency cards and pre-activated international SIMs.", iconName: "CreditCard" },
  { title: "Pre-Departure", slug: "pre-departure", shortDesc: "Cultural briefing, luggage guidance, and local alumni network connections.", iconName: "PlaneTakeoff" }
];
''')

with open(os.path.join(data_dir, "courses.ts"), "w", encoding="utf-8") as f:
    f.write('''export const COURSE_CATEGORIES = [
  "Computer Science & IT",
  "Engineering & Technology",
  "Business & Management",
  "Data Science & AI",
  "Healthcare & Life Sciences",
  "Finance & Accounting",
  "Hospitality & Tourism",
  "Architecture & Design",
  "Law & International Relations",
  "Life Sciences & Biotech"
];
''')

with open(os.path.join(data_dir, "tests.ts"), "w", encoding="utf-8") as f:
    f.write('''export const TEST_PREP = [
  { name: 'IELTS', slug: 'ielts', desc: 'International English Language Testing System recognized by 11,000+ institutions worldwide.' },
  { name: 'PTE', slug: 'pte', desc: 'Pearson Test of English: Fast, computer-based testing with results in typically 48 hours.' },
  { name: 'TOEFL', slug: 'toefl', desc: 'Premier English language evaluation widely accepted by 100% of US and top global universities.' },
  { name: 'GRE', slug: 'gre', desc: 'Graduate Record Examination for admission into MS, MBA, and doctoral STEM programs.' },
  { name: 'GMAT', slug: 'gmat', desc: 'Graduate Management Admission Test specifically tailored for elite business schools.' },
  { name: 'SAT', slug: 'sat', desc: 'Scholastic Assessment Test for undergraduate degree admissions in the USA and Canada.' },
  { name: 'OET', slug: 'oet', desc: 'Occupational English Test for medical and healthcare professionals migrating abroad.' },
  { name: 'Duolingo', slug: 'duolingo', desc: 'Convenient, rapid online English proficiency exam accepted by thousands of global universities.' },
];
''')

with open(os.path.join(data_dir, "homepage.ts"), "w", encoding="utf-8") as f:
    f.write('''export const HOMEPAGE_DATA = {
  hero: {
    eyebrow: "GLOBAL EDUCATION. BRIGHTER TOMORROWS.",
    mainHeading: "YOUR FUTURE HAS NO BORDERS.",
    goldHighlight: "NO BORDERS.",
    subHeading: "Turn your ambition into an international future with expert guidance, world-class universities and complete support from counselling to campus.",
    ctaPrimary: "START YOUR JOURNEY →",
    ctaSecondary: "BOOK A FREE CONSULTATION"
  },
  stats: [
    { value: "3,500+", label: "Successful Students", verified: true },
    { value: "11+", label: "Countries", verified: true },
    { value: "100+", label: "Partner Universities", verified: true },
    { value: "360°", label: "End-to-End Support", verified: true }
  ],
  journeySteps: [
    { step: "01", title: "DISCOVER", desc: "Understand your career goals, academic profile, and budget." },
    { step: "02", title: "CHOOSE", desc: "Select the ideal country, course, and university portfolio." },
    { step: "03", title: "APPLY", desc: "Prepare high-impact SOPs and submit applications with fee waivers." },
    { step: "04", title: "SECURE", desc: "Receive unconditional offer letters, scholarships, and loan sanctions." },
    { step: "05", title: "VISA", desc: "Complete mock embassy drills and submit compliant visa files." },
    { step: "06", title: "FLY", desc: "Pack your bags, attend pre-departure briefing, and land on campus." }
  ]
};
''')

# 5. Utils: format.ts, validation.ts, helpers.ts
utils_dir = os.path.join(src, "utils")
os.makedirs(utils_dir, exist_ok=True)

with open(os.path.join(utils_dir, "format.ts"), "w", encoding="utf-8") as f:
    f.write('''export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount);
};

export const formatNumber = (val: number): string => {
  return new Intl.NumberFormat('en-US').format(val);
};
''')

with open(os.path.join(utils_dir, "validation.ts"), "w", encoding="utf-8") as f:
    f.write('''export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const validatePhone = (phone: string): boolean => {
  return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone.trim());
};
''')

# 6. Types
types_dir = os.path.join(src, "types")
for t in ["service.ts", "testimonial.ts", "student.ts"]:
    p = os.path.join(types_dir, t)
    if not os.path.exists(p):
        with open(p, "w", encoding="utf-8") as f:
            f.write(f"// Type: {t}\nexport interface I{t.replace('.ts','').capitalize()} {{ id: string; name: string; }}\n")

# 7. Services
services_dir = os.path.join(src, "services")
service_files = [
  "universityService.ts", "courseService.ts", "destinationService.ts",
  "scholarshipService.ts", "serviceService.ts", "testimonialService.ts",
  "studentStoryService.ts", "blogService.ts", "enquiryService.ts",
  "consultationService.ts", "applicationService.ts"
]
for sf in service_files:
    p = os.path.join(services_dir, sf)
    if not os.path.exists(p):
        mod_name = sf.replace("Service.ts", "")
        with open(p, "w", encoding="utf-8") as f:
            f.write(f'''import {{ apiClient }} from './api';

export const {sf.replace('.ts', '')} = {{
  getAll: async () => apiClient('/{mod_name}s'),
  getById: async (id: string) => apiClient(`/{mod_name}s/${{id}}`),
  submit: async (data: any) => apiClient('/{mod_name}s', {{ method: 'POST', body: JSON.stringify(data) }}),
}};
''')

print("Frontend structure and data foundation created successfully.")
