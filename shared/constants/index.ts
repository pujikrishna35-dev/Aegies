import { Destination, OfficeLocation, StudentReview } from '../types';

export const BRAND_INFO = {
  name: 'AEGIS OVERSEAS',
  legalName: 'Aegis Overseas Education Services',
  tagline: 'Your Future Has No Borders.',
  eyebrow: 'GLOBAL EDUCATION. BRIGHTER TOMORROWS.',
  supportEmail: 'Info@aegisoverseas.com',
  primaryPhone: '+91 9246220044',
  secondaryPhone: '+91 9246220066',
  whatsappNumber: '919246220044',
  workingHours: '9:00 AM – 6:30 PM (Mon - Sat)',
  trustStudentCount: '3,500+',
  countriesCount: '11+',
  partnerUniversitiesCount: '100+',
  satisfactionRating: '4.9/5',
  yearsOfExperience: '30+ Combined Counselors Experience',
  quote: 'Empowering students to build a global future.'
};

export const OFFICES: OfficeLocation[] = [
  {
    id: 'nellore-hq',
    city: 'Nellore',
    isHeadquarters: true,
    title: 'Aegis Overseas Education Services — Nellore (Head Office)',
    address: 'D.No: 24-7-33, Beside Dr. SRK School, Magunta Layout, Dargamitta, Nellore - 524003, Andhra Pradesh, India',
    phone: ['+91 9246220044', '+91 9246220066'],
    email: 'Info@aegisoverseas.com',
    hours: '9:00 AM – 6:30 PM',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Door%20No%3A%2C%2024%2F7%2F33%2C%20beside%20Dr.%20SRK%20School%2C%20Central%20Avenue%2C%20Dargamitta%2C%20Magunta%20Layout%2C%20Nellore%2C%20Andhra%20Pradesh%20524003&t=m&z=14&output=embed'
  },
  {
    id: 'tirupati-branch',
    city: 'Tirupati',
    isHeadquarters: false,
    title: 'Aegis Overseas Education Services — Tirupati Office',
    address: 'Beside Lenskart, Fashion Zone, MR.Palli Circle, Avilali, Andhra Pradesh 517502, India',
    phone: ['+91 9246220044'],
    email: 'tirupati@aegisoverseas.com',
    hours: '9:30 AM – 6:30 PM',
    mapEmbedUrl: 'https://maps.google.com/maps?q=MR+Palli+Circle+Tirupati+Andhra+Pradesh&t=m&z=14&output=embed'
  },
  {
    id: 'uk-office',
    city: 'United Kingdom',
    isHeadquarters: false,
    title: 'Aegis Overseas Education Services — UK Liaison Office',
    address: '67 Norman, Nuneaton, CV11 5NX, United Kingdom',
    phone: ['+44 20 8144 2044', '+91 9246220044'],
    email: 'uk@aegisoverseas.com',
    hours: '9:00 AM – 5:30 PM GMT',
    mapEmbedUrl: 'https://maps.google.com/maps?q=67+Norman+Nuneaton+CV11+5NX+UK&t=m&z=14&output=embed'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'usa',
    slug: 'usa',
    name: 'USA',
    heroTitle: 'Innovation Meets Opportunity',
    tagline: 'World-leading research, flexible curricula & vibrant campus life.',
    emotionalPhrase: 'Dream. Study. Achieve.',
    shortDescription: 'The United States remains the top choice for cutting-edge STEM, business and liberal arts education.',
    fullDescription: 'With over 4,000 accredited universities and colleges, the United States offers unmatched academic diversity, world-class research labs, OPT work authorization up to 3 years for STEM graduates, and limitless career trajectories.',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1200&auto=format&fit=crop',
    popularUniversitiesCount: 140,
    averageTuition: '$25,000 - $55,000 / year',
    postStudyWorkVisa: 'Up to 3 Years (STEM OPT)',
    intakes: ['Fall (August/September)', 'Spring (January)', 'Summer (May)'],
    keyHighlights: ['World-class Ivy League and Tier-1 Research institutions', 'Up to 36 months STEM OPT extension', 'Generous Assistantships (TA/RA) and merit scholarships'],
    topCourses: ['Computer Science & AI', 'Data Analytics', 'MBA & Finance', 'Biotechnology', 'Mechanical Engineering']
  },
  {
    id: 'uk',
    slug: 'uk',
    name: 'UK',
    heroTitle: 'Tradition Inspires Tomorrow',
    tagline: 'Centuries of academic prestige paired with accelerated master programs.',
    emotionalPhrase: 'Learn. Grow. Belong.',
    shortDescription: 'Home to historic institutions, vibrant student cities, and 1-year master degrees with Graduate Route visas.',
    fullDescription: 'The United Kingdom provides world-recognized diplomas from Russell Group and leading universities, fast-track 1-year Master degrees that maximize ROI, and a 2-year post-study work visa for international graduates.',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    popularUniversitiesCount: 95,
    averageTuition: '£14,000 - £28,000 / year',
    postStudyWorkVisa: '2 Years (Graduate Route)',
    intakes: ['September/October (Major)', 'January/February'],
    keyHighlights: ['Time-efficient 1-year Master degrees', '2-year Graduate Route post-study work permit', 'Global headquarters and financial capital proximity'],
    topCourses: ['Business Analytics', 'Fintech & Banking', 'Civil Engineering', 'Cybersecurity', 'Law (LLM)']
  },
  {
    id: 'canada',
    slug: 'canada',
    name: 'Canada',
    heroTitle: 'A Brighter Tomorrow',
    tagline: 'Welcoming multicultural cities, top universities and clear PR pathways.',
    emotionalPhrase: 'Opportunities Await.',
    shortDescription: 'Canada is renowned for affordable tuition, welcoming immigration policies, and up to 3-year PGWP.',
    fullDescription: 'Canadian universities and polytechnics deliver industry-aligned education in an exceptionally safe, diverse society. Students benefit from co-op programs and the Post-Graduation Work Permit (PGWP).',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1517935703635-2717090c2210?q=80&w=1200&auto=format&fit=crop',
    popularUniversitiesCount: 70,
    averageTuition: 'CAD $18,000 - $38,000 / year',
    postStudyWorkVisa: 'Up to 3 Years (PGWP)',
    intakes: ['Fall (September)', 'Winter (January)', 'Spring (May)'],
    keyHighlights: ['Post-Graduation Work Permit up to 3 years', 'High standard of living and safety', 'Co-op internships integrated with degree'],
    topCourses: ['Software Engineering', 'Project Management', 'Cloud Computing', 'Healthcare Administration', 'Supply Chain']
  },
  {
    id: 'australia',
    slug: 'australia',
    name: 'Australia',
    heroTitle: 'Live. Learn. Explore.',
    tagline: 'World-ranked Group of Eight universities and high living standards.',
    emotionalPhrase: 'A Small Country. A Big Opportunity.',
    shortDescription: 'Unrivalled student lifestyle, cutting-edge facilities, and progressive post-study work rights.',
    fullDescription: 'Australia boasts 7 of the world top 100 universities, exceptional research infrastructure, flexible part-time work rights during studies, and generous regional post-study visas.',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop',
    popularUniversitiesCount: 45,
    averageTuition: 'AUD $26,000 - $46,000 / year',
    postStudyWorkVisa: '2 to 4 Years (Subclass 485)',
    intakes: ['Semester 1 (February)', 'Semester 2 (July)', 'November (select)'],
    keyHighlights: ['Group of Eight world top 100 ranking', 'Generous post-study temporary graduate visas', 'High part-time minimum hourly wage'],
    topCourses: ['Information Technology', 'Nursing & Public Health', 'Mining & Civil Engineering', 'Accounting & Finance']
  },
  {
    id: 'germany',
    slug: 'germany',
    name: 'Germany',
    heroTitle: 'Ideas Create Change',
    tagline: 'Engineering excellence with zero or nominal tuition at public universities.',
    emotionalPhrase: 'Engineer a Better Future.',
    shortDescription: 'Europe economic powerhouse offering tuition-free world-class engineering and technology programs.',
    fullDescription: 'Germany offers world-renowned technical universities (TU9), virtually free tuition at public institutions, numerous English-taught master programs, and an 18-month job-seeker visa upon graduation.',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop',
    popularUniversitiesCount: 50,
    averageTuition: '€0 - €3,000 / year (Public)',
    postStudyWorkVisa: '18 Months Job Seeker Visa',
    intakes: ['Winter (October - Major)', 'Summer (April)'],
    keyHighlights: ['Zero tuition at most public universities', 'Global engineering and automotive hub', '18-month post-study residence permit'],
    topCourses: ['Automotive Engineering', 'Mechatronics', 'Embedded Systems', 'Renewable Energy', 'Applied AI']
  },
  {
    id: 'new-zealand',
    slug: 'new-zealand',
    name: 'New Zealand',
    heroTitle: 'Pure Education. Pure Life',
    tagline: 'All 8 state universities ranked in the top 3% globally.',
    emotionalPhrase: 'Pure Education. Pure Life.',
    shortDescription: 'Unspoiled natural beauty, hands-on learning environment, and welcoming student-centric communities.',
    fullDescription: 'New Zealand provides a supportive, safe study environment with small classroom sizes, high research citations, and up to 3-year post-study work permits.',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    popularUniversitiesCount: 15,
    averageTuition: 'NZD $24,000 - $38,000 / year',
    postStudyWorkVisa: 'Up to 3 Years',
    intakes: ['February', 'July'],
    keyHighlights: ['100% of universities in QS top 500', 'Safe and welcoming multicultural environment', 'Pathway to skilled residency'],
    topCourses: ['Environmental Science', 'Agribusiness', 'Information Systems', 'Hospitality Management']
  },
  {
    id: 'ireland',
    slug: 'ireland',
    name: 'Ireland',
    heroTitle: 'Small Country. Big Opportunities',
    tagline: 'The Silicon Valley of Europe with European headquarters of Google, Apple & Meta.',
    emotionalPhrase: 'More Than a Degree.',
    shortDescription: 'Europe only English-speaking tech hub with 2-year post-study work rights for master graduates.',
    fullDescription: 'Ireland combines historic universities like Trinity College Dublin and UCD with direct access to European headquarters of top global tech and pharmaceutical corporations.',
    flag: '🇮🇪',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop',
    popularUniversitiesCount: 22,
    averageTuition: '€12,000 - €26,000 / year',
    postStudyWorkVisa: '2 Years (Third Level Graduate)',
    intakes: ['September (Major)', 'January'],
    keyHighlights: ['European headquarters for 1,000+ multinational firms', '2-year post-study stay back', 'English-speaking member of the European Union'],
    topCourses: ['Data Analytics', 'Pharmaceutical Science', 'Computer Science', 'Finance & Risk Management']
  },
  {
    id: 'europe',
    slug: 'europe',
    name: 'Europe',
    heroTitle: 'A World of Possibilities',
    tagline: 'Schengen mobility, historic heritage and affordable high-standard education.',
    emotionalPhrase: 'A World of Possibilities.',
    shortDescription: 'Destinations including Sweden, Netherlands, France and Italy with affordable English programs.',
    fullDescription: 'Studying in continental Europe provides access to 27 Schengen nations, vibrant cultural immersion, innovative research clusters, and pocket-friendly tuition models.',
    flag: '🇪🇺',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
    popularUniversitiesCount: 80,
    averageTuition: '€8,000 - €18,000 / year',
    postStudyWorkVisa: '1 to 2 Years (Country Specific)',
    intakes: ['September', 'February'],
    keyHighlights: ['Schengen visa travel freedom', 'High scholarship availability', 'Pioneering research institutions'],
    topCourses: ['Sustainable Energy', 'International Business', 'Fashion & Design', 'Biomedical Engineering']
  }
];

export const REAL_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    name: 'Pavani Medarametla',
    studentLocation: 'Nellore, Andhra Pradesh',
    destinationCountry: 'United Kingdom',
    university: 'University of Hertfordshire',
    course: 'MSc Data Science',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    quote: 'This is the best consultancy in Nellore for students planning to go abroad. They show the exact right path to get a visa, and they are very responsible and perfect. I am really happy to be associated with Aegis Overseas!'
  },
  {
    id: 'rev-2',
    name: 'Pulimi Amulya',
    studentLocation: 'Nellore, Andhra Pradesh',
    destinationCountry: 'USA',
    university: 'University of North Texas',
    course: 'MS in Computer Science',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
    quote: 'From the very first counseling session, they provide genuine and clear guidance based on the student profile. The staff is friendly, patient, and knowledgeable. They helped me with university shortlisting, application process, and visa guidance making it stress-free.'
  },
  {
    id: 'rev-3',
    name: 'Uma Maheshwari Sarvepalli',
    studentLocation: 'Andhra Pradesh',
    destinationCountry: 'Canada',
    university: 'Conestoga College',
    course: 'Applied Network Security',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    quote: 'My process was not simple due to financial and health challenges. But the consultancy team never gave up on me. They restarted everything for the January intake with utmost patience. Other consultancies treat you like a queue, but Aegis genuinely cares!'
  },
  {
    id: 'rev-4',
    name: 'Krishna Vedagiri',
    studentLocation: 'Nellore',
    destinationCountry: 'USA',
    university: 'California State University',
    course: 'MS in Information Systems',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    counselorMentioned: 'Mr. Gopal Reddy, Mr. Siva & Mr. Surendra',
    quote: 'Special thanks to Mr. Siva, Mr. Surendra and director Mr. Gopal Reddy who treated my case like a personal project rather than just another application. That level of dedication, involvement, and care made a huge difference and gave me peace of mind.'
  },
  {
    id: 'rev-5',
    name: 'Jaswanth Kumar Nallu',
    studentLocation: 'Andhra Pradesh',
    destinationCountry: 'United Kingdom',
    university: 'Coventry University',
    course: 'MSc International Business',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    counselorMentioned: 'Gopal sir & Shiva',
    quote: 'Extremely grateful to Aegis Overseas for constant support throughout my visa process. Sincere thanks to Gopal sir for his guidance until I received my VISA. Shiva and Surendra were always approachable and supportive. Truly reliable and transparent!'
  }
];

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Career counselling, academic profile evaluation & aptitude analysis.',
    icon: 'Compass'
  },
  {
    step: '02',
    title: 'CHOOSE',
    description: 'Country, university shortlisting, and career-aligned course selection.',
    icon: 'Globe'
  },
  {
    step: '03',
    title: 'APPLY',
    description: 'SOP/LOR fine-tuning, application submission & continuous follow-up.',
    icon: 'FileText'
  },
  {
    step: '04',
    title: 'SECURE',
    description: 'Official offer letters, university scholarships and education loan assistance.',
    icon: 'Award'
  },
  {
    step: '05',
    title: 'VISA',
    description: 'Documentation verification, mock visa interviews and biometric prep.',
    icon: 'ShieldCheck'
  },
  {
    step: '06',
    title: 'FLY',
    description: 'Pre-departure briefing, student accommodation, forex and flight booking.',
    icon: 'Plane'
  }
];

export const COACHING_TESTS = [
  {
    id: 'ielts',
    name: 'IELTS',
    fullForm: 'International English Language Testing System',
    description: 'Globally accepted test for UK, Australia, Canada, New Zealand and USA universities.',
    scoreScale: 'Band 1.0 - 9.0',
    targetScore: 'Band 6.5 - 7.5+',
    trainingMode: 'Classroom & Online Live Interactive'
  },
  {
    id: 'pte',
    name: 'PTE Academic',
    fullForm: 'Pearson Test of English',
    description: 'Fast, AI-scored English test with rapid results accepted for visas and university admissions.',
    scoreScale: '10 - 90 Points',
    targetScore: '60 - 75+ Points',
    trainingMode: 'Computer Lab Simulation & Coaching'
  },
  {
    id: 'toefl',
    name: 'TOEFL iBT',
    fullForm: 'Test of English as a Foreign Language',
    description: 'Standard American test favored by USA and Canadian institutions.',
    scoreScale: '0 - 120 Points',
    targetScore: '90 - 105+ Points',
    trainingMode: 'Diagnostic Mock Series & Speaking Clinics'
  },
  {
    id: 'gre',
    name: 'GRE',
    fullForm: 'Graduate Record Examination',
    description: 'Crucial for STEM, master and doctorate programs in the United States and global universities.',
    scoreScale: '260 - 340 Points',
    targetScore: '315 - 330+ Points',
    trainingMode: 'Quant Shortcuts & Verbal Vocabulary Mastery'
  },
  {
    id: 'gmat',
    name: 'GMAT',
    fullForm: 'Graduate Management Admission Test',
    description: 'The premier entrance examination for top global MBA and executive business programs.',
    scoreScale: '205 - 805 (Focus Edition)',
    targetScore: '655 - 715+ Points',
    trainingMode: 'Critical Reasoning & Problem Solving'
  },
  {
    id: 'sat',
    name: 'SAT',
    fullForm: 'Scholastic Assessment Test',
    description: 'Standardized examination for undergraduate college admissions in the USA and Canada.',
    scoreScale: '400 - 1600 Points',
    targetScore: '1350 - 1500+ Points',
    trainingMode: 'Digital SAT Adaptive Mock Drilling'
  },
  {
    id: 'duolingo',
    name: 'Duolingo English Test',
    fullForm: 'DET (Duolingo English Test)',
    description: 'Convenient, fast, at-home computer test accepted by thousands of global universities.',
    scoreScale: '10 - 160 Points',
    targetScore: '115 - 135+ Points',
    trainingMode: 'Adaptive Question Drills & Practice'
  },
  {
    id: 'oet',
    name: 'OET',
    fullForm: 'Occupational English Test',
    description: 'Specialized healthcare English test for nurses, doctors, and allied medical professionals.',
    scoreScale: 'A, B, C+, C, D, E',
    targetScore: 'Grade B (350+)',
    trainingMode: 'Clinical Role-Play & Patient Case Notes'
  }
];
