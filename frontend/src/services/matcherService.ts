import { API_BASE_URL } from '../config/api';

export interface EnglishRequirement {
  ieltsMin: number;
  ieltsPreferred?: number;
  pteMin: number;
  ptePreferred?: number;
  toeflMin: number;
  toeflPreferred?: number;
  duolingoMin: number;
  duolingoPreferred?: number;
  oetMin?: number;
}

export interface UniversityProgramRecord {
  id: string;
  universityId: string;
  universityName: string;
  universitySlug: string;
  logo: string;
  coverImage: string;
  country: string;
  city: string;
  destinationCode: string;
  courseName: string;
  courseCategory: string;
  studyLevel: string;
  duration: string;
  tuitionFeeLocal: string;
  tuitionInrLakhs: { min: number; max: number };
  currency: string;
  intakes: string[];
  eligibility: string;
  applicationDeadline: string;
  englishReq: EnglishRequirement;
  scholarshipAvailable: boolean;
  scholarshipDetails?: string;
  ranking?: number;
  featured?: boolean;
  status: 'ACTIVE' | 'INACTIVE';
  description: string;
  website: string;
  isDemoData: boolean;
}

export interface MatchWeights {
  course: number;
  country: number;
  studyLevel: number;
  budget: number;
  english: number;
  intake: number;
  eligibility: number;
}

export interface MatchScoreBreakdown {
  course: number;
  country: number;
  studyLevel: number;
  budget: number;
  english: number;
  intake: number;
  eligibility: number;
}

export type EligibilityStatus = 'ELIGIBLE' | 'POSSIBLE_MATCH' | 'NOT_ELIGIBLE';

export interface UniversityMatchResult {
  university: {
    id: string;
    name: string;
    slug: string;
    logo: string;
    coverImage: string;
    country: string;
    city: string;
    ranking?: number;
    website: string;
    description: string;
  };
  program: {
    id: string;
    courseName: string;
    courseCategory: string;
    studyLevel: string;
    duration: string;
    tuitionFeeLocal: string;
    tuitionInrLakhs: { min: number; max: number };
    intakes: string[];
    applicationDeadline: string;
    scholarshipAvailable: boolean;
    scholarshipDetails?: string;
  };
  matchScore: number;
  eligibility: EligibilityStatus;
  eligibilityReason?: string;
  breakdown: MatchScoreBreakdown;
  badges: {
    courseMatch: boolean;
    countryMatch: boolean;
    studyLevelMatch: boolean;
    englishMatch: boolean;
    budgetCompatible: boolean;
    intakeMatch: boolean;
  };
  reasons: string[];
  whyThisMatchExplanation: string;
}

export interface MatcherSearchParams {
  studyLevel: string;
  course: string;
  country: string;
  englishTest: string;
  englishScore?: number;
  budget: string;
  intakePreference?: string;
}

export interface MatcherSearchResponse {
  totalResults: number;
  eligibleCount: number;
  preferences: MatcherSearchParams;
  weightsUsed: MatchWeights;
  results: UniversityMatchResult[];
}

export interface BudgetRangeOption {
  id: string;
  label: string;
  minLakhs: number;
  maxLakhs: number;
}

export interface EnglishTestOption {
  id: string;
  label: string;
  minScore: number;
  maxScore: number;
  step: number;
  defaultScore: number;
}

export interface MatcherConfigResponse {
  studyLevels: string[];
  courses: string[];
  countries: string[];
  englishTests: EnglishTestOption[];
  budgetRanges: BudgetRangeOption[];
  defaultWeights: MatchWeights;
}

// Client Fallback Dataset & Logic for Zero-Downtime Resilience
const FALLBACK_CONFIG: MatcherConfigResponse = {
  studyLevels: [
    'Undergraduate',
    'Postgraduate',
    "Master's",
    'MBA',
    'PhD',
    'Diploma',
    'Certificate',
  ],
  courses: [
    'Computer Science',
    'Information Technology',
    'Data Science',
    'Business Administration',
    'Finance',
    'Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Healthcare',
    'Nursing',
    'Pharmacy',
    'Architecture',
    'Hospitality',
  ],
  countries: [
    'United Kingdom (UK)',
    'United States (USA)',
    'Canada',
    'Australia',
    'Germany',
    'Ireland',
    'New Zealand',
    'Europe (Schengen)',
  ],
  englishTests: [
    { id: 'IELTS', label: 'IELTS', minScore: 0, maxScore: 9, step: 0.5, defaultScore: 6.5 },
    { id: 'PTE', label: 'PTE Academic', minScore: 10, maxScore: 90, step: 1, defaultScore: 65 },
    { id: 'TOEFL', label: 'TOEFL iBT', minScore: 0, maxScore: 120, step: 1, defaultScore: 90 },
    { id: 'Duolingo', label: 'Duolingo English Test', minScore: 10, maxScore: 160, step: 5, defaultScore: 120 },
    { id: 'OET', label: 'OET (Occupational English)', minScore: 0, maxScore: 500, step: 10, defaultScore: 350 },
    { id: 'NONE', label: 'Other / Not Required / Not Taken', minScore: 0, maxScore: 0, step: 0, defaultScore: 0 },
  ],
  budgetRanges: [
    { id: 'under10', label: 'Under ₹10 Lakhs', minLakhs: 0, maxLakhs: 10 },
    { id: '10-20', label: '₹10–20 Lakhs', minLakhs: 10, maxLakhs: 20 },
    { id: '20-30', label: '₹20–30 Lakhs', minLakhs: 20, maxLakhs: 30 },
    { id: '30-40', label: '₹30–40 Lakhs', minLakhs: 30, maxLakhs: 40 },
    { id: '40-50', label: '₹40–50 Lakhs', minLakhs: 40, maxLakhs: 50 },
    { id: 'above50', label: 'Above ₹50 Lakhs', minLakhs: 50, maxLakhs: 150 },
  ],
  defaultWeights: {
    course: 30,
    country: 20,
    studyLevel: 15,
    budget: 15,
    english: 10,
    intake: 5,
    eligibility: 5,
  },
};

const FALLBACK_PROGRAMS: UniversityProgramRecord[] = [
  {
    id: 'prog-uk-1',
    universityId: 'uni-birmingham',
    universityName: 'University of Birmingham',
    universitySlug: 'university-of-birmingham',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    country: 'United Kingdom',
    city: 'Birmingham',
    destinationCode: 'UK',
    courseName: 'MSc Advanced Computer Science',
    courseCategory: 'Computer Science & IT',
    studyLevel: "Master's",
    duration: '1 Year Full-Time',
    tuitionFeeLocal: '£27,500 / year',
    tuitionInrLakhs: { min: 28, max: 32 },
    currency: 'GBP',
    intakes: ['September 2026', 'January 2027'],
    eligibility: 'Bachelor degree in CS / IT with minimum 60% aggregate. IELTS 6.5 minimum (no band < 6.0).',
    applicationDeadline: '30 June 2026',
    englishReq: {
      ieltsMin: 6.5,
      ieltsPreferred: 7.0,
      pteMin: 62,
      ptePreferred: 68,
      toeflMin: 88,
      toeflPreferred: 95,
      duolingoMin: 120,
      duolingoPreferred: 130,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'Aegis Global Excellence Scholarship worth £3,000 – £5,000 tuition reduction.',
    ranking: 84,
    featured: true,
    status: 'ACTIVE',
    description: 'A prestigious Russell Group institution offering cutting-edge computing laboratories, AI industry placements, and strong global employer connections in the UK tech hub.',
    website: 'https://www.birmingham.ac.uk',
    isDemoData: true,
  },
  {
    id: 'prog-uk-2',
    universityId: 'uni-oxford',
    universityName: 'University of Oxford',
    universitySlug: 'university-of-oxford',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop',
    country: 'United Kingdom',
    city: 'Oxford',
    destinationCode: 'UK',
    courseName: 'MSc Computer Science',
    courseCategory: 'Computer Science & IT',
    studyLevel: "Master's",
    duration: '1 Year Full-Time',
    tuitionFeeLocal: '£36,500 / year',
    tuitionInrLakhs: { min: 38, max: 45 },
    currency: 'GBP',
    intakes: ['October 2026'],
    eligibility: 'First class undergraduate degree in mathematics, computer science or engineering. IELTS 7.5 minimum.',
    applicationDeadline: '20 January 2026',
    englishReq: {
      ieltsMin: 7.5,
      ieltsPreferred: 8.0,
      pteMin: 76,
      ptePreferred: 82,
      toeflMin: 110,
      toeflPreferred: 115,
      duolingoMin: 140,
      duolingoPreferred: 150,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'Clarendon Fund and Oxford Graduate Scholarships for high academic merit.',
    ranking: 1,
    featured: true,
    status: 'ACTIVE',
    description: 'World-renowned collegiate research university offering peerless academic rigor, historic libraries, and premier academic mentorship.',
    website: 'https://www.ox.ac.uk',
    isDemoData: true,
  },
  {
    id: 'prog-usa-1',
    universityId: 'uni-asu',
    universityName: 'Arizona State University',
    universitySlug: 'arizona-state-university',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
    country: 'United States',
    city: 'Tempe, Arizona',
    destinationCode: 'USA',
    courseName: 'MS in Data Science & Artificial Intelligence',
    courseCategory: 'Data Science',
    studyLevel: "Master's",
    duration: '2 Years',
    tuitionFeeLocal: '$34,000 / year',
    tuitionInrLakhs: { min: 28, max: 34 },
    currency: 'USD',
    intakes: ['August 2026 (Fall)', 'January 2027 (Spring)'],
    eligibility: 'Bachelor in STEM discipline with minimum 3.0/4.0 GPA. IELTS 6.5 or Duolingo 115.',
    applicationDeadline: '15 March 2026 (Fall)',
    englishReq: {
      ieltsMin: 6.5,
      ieltsPreferred: 7.0,
      pteMin: 60,
      ptePreferred: 65,
      toeflMin: 85,
      toeflPreferred: 92,
      duolingoMin: 115,
      duolingoPreferred: 125,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'New American University Scholar Award up to $10,000 annually.',
    ranking: 121,
    featured: true,
    status: 'ACTIVE',
    description: 'Ranked #1 in innovation in the US, ASU provides STEM-designated degree programs with 3-year OPT work eligibility and strong Silicon Valley and Phoenix tech recruitment.',
    website: 'https://www.asu.edu',
    isDemoData: true,
  },
  {
    id: 'prog-ca-1',
    universityId: 'uni-toronto',
    universityName: 'University of Toronto',
    universitySlug: 'university-of-toronto',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1568792923760-d70635a89fa8?q=80&w=800&auto=format&fit=crop',
    country: 'Canada',
    city: 'Toronto, Ontario',
    destinationCode: 'CANADA',
    courseName: 'Master of Science in Applied Computing (MScAC)',
    courseCategory: 'Computer Science & IT',
    studyLevel: "Master's",
    duration: '16 Months (incl. 8-month paid internship)',
    tuitionFeeLocal: 'CAD $48,000 / total',
    tuitionInrLakhs: { min: 28, max: 35 },
    currency: 'CAD',
    intakes: ['September 2026'],
    eligibility: 'B.Sc / B.Tech in CS or Software Eng with B+ (77%+) average. IELTS 7.0 minimum with no band below 6.5.',
    applicationDeadline: '01 December 2025',
    englishReq: {
      ieltsMin: 7.0,
      ieltsPreferred: 7.5,
      pteMin: 68,
      ptePreferred: 74,
      toeflMin: 93,
      toeflPreferred: 100,
      duolingoMin: 125,
      duolingoPreferred: 135,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'Paid industrial R&D internship averaging CAD $55,000 stipends.',
    ranking: 21,
    featured: true,
    status: 'ACTIVE',
    description: 'Canada’s flagship academic institution, globally top-ranked for AI, machine learning and software engineering with direct Toronto tech corridor pathways.',
    website: 'https://www.utoronto.ca',
    isDemoData: true,
  },
  {
    id: 'prog-au-1',
    universityId: 'uni-uow',
    universityName: 'University of Wollongong',
    universitySlug: 'university-of-wollongong',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    country: 'Australia',
    city: 'Wollongong / Sydney, NSW',
    destinationCode: 'AUSTRALIA',
    courseName: 'Master of Computer Science (Intelligent Systems)',
    courseCategory: 'Computer Science & IT',
    studyLevel: "Master's",
    duration: '2 Years',
    tuitionFeeLocal: 'AUD $38,500 / year',
    tuitionInrLakhs: { min: 20, max: 24 },
    currency: 'AUD',
    intakes: ['February 2026', 'July 2026'],
    eligibility: 'Bachelor degree in computing, engineering or mathematics. IELTS 6.5 (no band < 6.0) or PTE 60.',
    applicationDeadline: '30 November 2025 (Feb) / 31 May 2026 (July)',
    englishReq: {
      ieltsMin: 6.5,
      ieltsPreferred: 7.0,
      pteMin: 60,
      ptePreferred: 66,
      toeflMin: 86,
      toeflPreferred: 94,
      duolingoMin: 115,
      duolingoPreferred: 125,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'University of Wollongong 20%–30% International Tuition Fee Waiver.',
    ranking: 162,
    featured: true,
    status: 'ACTIVE',
    description: 'Top-tier Australian research university located 1 hour from Sydney, offering post-study work visa extensions (up to 4–5 years in regional category).',
    website: 'https://www.uow.edu.au',
    isDemoData: true,
  },
  {
    id: 'prog-de-1',
    universityId: 'uni-tum',
    universityName: 'Technical University of Munich (TUM)',
    universitySlug: 'technical-university-of-munich',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
    country: 'Germany',
    city: 'Munich, Bavaria',
    destinationCode: 'GERMANY',
    courseName: 'MSc Mechanical & Automotive Engineering',
    courseCategory: 'Mechanical Engineering',
    studyLevel: "Master's",
    duration: '2 Years',
    tuitionFeeLocal: '€0 (Tuition-Free, €150/sem fee)',
    tuitionInrLakhs: { min: 0, max: 4 },
    currency: 'EUR',
    intakes: ['Winter (October) 2026'],
    eligibility: 'B.Tech in Mechanical Engineering with high academic scores. GRE recommended. IELTS 6.5 / TOEFL 88.',
    applicationDeadline: '31 May 2026',
    englishReq: {
      ieltsMin: 6.5,
      ieltsPreferred: 7.0,
      pteMin: 60,
      ptePreferred: 65,
      toeflMin: 88,
      toeflPreferred: 95,
      duolingoMin: 115,
      duolingoPreferred: 125,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'DAAD and Deutschlandstipendium living allowance support.',
    ranking: 37,
    featured: true,
    status: 'ACTIVE',
    description: 'Germany’s premier University of Excellence with close industrial partnerships including BMW, Siemens, and Audi. Tuition-free world-class education.',
    website: 'https://www.tum.de',
    isDemoData: true,
  },
  {
    id: 'prog-ie-1',
    universityId: 'uni-tcd',
    universityName: 'Trinity College Dublin',
    universitySlug: 'trinity-college-dublin',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    country: 'Ireland',
    city: 'Dublin',
    destinationCode: 'IRELAND',
    courseName: 'MSc Data Science & Intelligent Systems',
    courseCategory: 'Data Science',
    studyLevel: "Master's",
    duration: '1 Year Full-Time',
    tuitionFeeLocal: '€25,500 / year',
    tuitionInrLakhs: { min: 22, max: 26 },
    currency: 'EUR',
    intakes: ['September 2026'],
    eligibility: 'First-class honours degree in Computing, Maths or Statistics. IELTS 6.5 (no band below 6.0).',
    applicationDeadline: '30 June 2026',
    englishReq: {
      ieltsMin: 6.5,
      ieltsPreferred: 7.0,
      pteMin: 63,
      ptePreferred: 68,
      toeflMin: 90,
      toeflPreferred: 98,
      duolingoMin: 120,
      duolingoPreferred: 130,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'Global Excellence Postgraduate Scholarship €3,000 – €5,000.',
    ranking: 81,
    featured: true,
    status: 'ACTIVE',
    description: 'Ireland’s historic premier university located in Dublin’s Silicon Docks, home to European headquarters of Google, Meta, Apple, and Microsoft.',
    website: 'https://www.tcd.ie',
    isDemoData: true,
  },
  {
    id: 'prog-nz-1',
    universityId: 'uni-auckland',
    universityName: 'University of Auckland',
    universitySlug: 'university-of-auckland',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    country: 'New Zealand',
    city: 'Auckland',
    destinationCode: 'NEW_ZEALAND',
    courseName: 'Master of Information Technology',
    courseCategory: 'Information Technology',
    studyLevel: "Master's",
    duration: '1.5–2 Years',
    tuitionFeeLocal: 'NZD $46,000 / year',
    tuitionInrLakhs: { min: 22, max: 26 },
    currency: 'NZD',
    intakes: ['February 2026', 'July 2026'],
    eligibility: 'Bachelor degree in IT or non-IT with B grade average. IELTS 6.5 (no band below 6.0).',
    applicationDeadline: '01 December 2025 / 01 May 2026',
    englishReq: {
      ieltsMin: 6.5,
      ieltsPreferred: 7.0,
      pteMin: 60,
      ptePreferred: 65,
      toeflMin: 90,
      toeflPreferred: 95,
      duolingoMin: 115,
      duolingoPreferred: 125,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'University of Auckland International Student Excellence Scholarship (NZD $10,000).',
    ranking: 68,
    featured: true,
    status: 'ACTIVE',
    description: 'Top-ranked university in New Zealand, providing a generous 3-year post-study work visa and excellent quality of life in Auckland.',
    website: 'https://www.auckland.ac.nz',
    isDemoData: true,
  },
  {
    id: 'prog-eu-1',
    universityId: 'uni-polimi',
    universityName: 'Politecnico di Milano',
    universitySlug: 'politecnico-di-milano',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop',
    country: 'Europe (Schengen)',
    city: 'Milan, Italy',
    destinationCode: 'EUROPE',
    courseName: 'MSc in Architectural Design & Technology',
    courseCategory: 'Architecture',
    studyLevel: "Master's",
    duration: '2 Years',
    tuitionFeeLocal: '€3,900 / year',
    tuitionInrLakhs: { min: 4, max: 7 },
    currency: 'EUR',
    intakes: ['September 2026', 'February 2027'],
    eligibility: 'Undergraduate Architecture degree with design portfolio. IELTS 6.0 or TOEFL 78.',
    applicationDeadline: '01 March 2026',
    englishReq: {
      ieltsMin: 6.0,
      ieltsPreferred: 6.5,
      pteMin: 55,
      ptePreferred: 62,
      toeflMin: 78,
      toeflPreferred: 88,
      duolingoMin: 105,
      duolingoPreferred: 115,
    },
    scholarshipAvailable: true,
    scholarshipDetails: 'Platinum & Gold Merit scholarships covering full tuition and €10,000 living stipend.',
    ranking: 111,
    featured: true,
    status: 'ACTIVE',
    description: 'Europe’s top-tier technical university for architecture, industrial engineering, and design, situated in Italy’s financial and creative capital.',
    website: 'https://www.polimi.it',
    isDemoData: true,
  },
];

// In-browser matching calculation engine for fallback
function calculateClientSideMatches(
  params: MatcherSearchParams,
  weights: MatchWeights = FALLBACK_CONFIG.defaultWeights
): MatcherSearchResponse {
  const results: UniversityMatchResult[] = FALLBACK_PROGRAMS.map((program) => {
    // 1. Course Match
    let courseScore = 20;
    const uCourse = (params.course || '').toLowerCase();
    const pCourse = program.courseName.toLowerCase();
    const pCat = program.courseCategory.toLowerCase();

    if (!uCourse) courseScore = 100;
    else if (pCourse.includes(uCourse) || uCourse.includes(pCourse)) courseScore = 100;
    else if (pCat.includes(uCourse) || uCourse.includes(pCat)) courseScore = 85;
    else if (
      (uCourse.includes('computer') || uCourse.includes('data') || uCourse.includes('it')) &&
      (pCat.includes('computer') || pCat.includes('data') || pCat.includes('it'))
    ) {
      courseScore = 90;
    } else if (uCourse.includes('engineer') && pCat.includes('engineer')) {
      courseScore = 85;
    }

    // 2. Country Match
    let countryScore = 40;
    let isCountryMatch = false;
    const uCountry = (params.country || '').toLowerCase();
    const pCountry = program.country.toLowerCase();

    if (!uCountry) {
      countryScore = 100;
      isCountryMatch = true;
    } else if (
      pCountry.includes(uCountry) ||
      uCountry.includes(pCountry) ||
      (uCountry.includes('uk') && pCountry.includes('united kingdom')) ||
      (uCountry.includes('usa') && pCountry.includes('united states'))
    ) {
      countryScore = 100;
      isCountryMatch = true;
    } else if (
      (uCountry.includes('europe') || uCountry.includes('schengen')) &&
      ['germany', 'ireland', 'europe'].some((c) => pCountry.includes(c))
    ) {
      countryScore = 100;
      isCountryMatch = true;
    }

    // 3. Study Level Match
    let levelScore = 100;
    let levelCompatible = true;
    const uLevel = (params.studyLevel || '').toLowerCase();
    const pLevel = program.studyLevel.toLowerCase();

    if (uLevel && !pLevel.includes(uLevel) && !uLevel.includes(pLevel)) {
      if (
        (uLevel.includes('master') || uLevel.includes('postgraduate') || uLevel.includes('mba')) &&
        (pLevel.includes('master') || pLevel.includes('postgraduate') || pLevel.includes('mba'))
      ) {
        levelScore = 95;
      } else {
        levelScore = 20;
        levelCompatible = false;
      }
    }

    // 4. Budget Match
    let budgetScore = 90;
    let budgetCompatible = true;
    const uBudget = params.budget || '20-30';
    let budgetMax = 30;

    if (uBudget === 'under10') budgetMax = 10;
    else if (uBudget === '10-20') budgetMax = 20;
    else if (uBudget === '20-30') budgetMax = 30;
    else if (uBudget === '30-40') budgetMax = 40;
    else if (uBudget === '40-50') budgetMax = 50;
    else if (uBudget === 'above50') budgetMax = 150;

    if (program.tuitionInrLakhs.max === 0) {
      budgetScore = 100;
    } else if (program.tuitionInrLakhs.max <= budgetMax) {
      budgetScore = 100;
    } else if (program.tuitionInrLakhs.min <= budgetMax) {
      budgetScore = 90;
    } else if (program.tuitionInrLakhs.min - budgetMax <= 5) {
      budgetScore = 75;
      budgetCompatible = true;
    } else {
      budgetScore = 30;
      budgetCompatible = false;
    }

    // 5. English Match & Eligibility
    let englishScore = 95;
    let englishEligible = true;
    let englishReason = '';
    const userTest = (params.englishTest || 'IELTS').toUpperCase();
    const scoreVal = Number(params.englishScore) || 0;

    let minScoreReq = program.englishReq.ieltsMin;
    let prefScoreReq = program.englishReq.ieltsPreferred || minScoreReq;

    if (userTest === 'PTE') {
      minScoreReq = program.englishReq.pteMin;
      prefScoreReq = program.englishReq.ptePreferred || minScoreReq;
    } else if (userTest === 'TOEFL') {
      minScoreReq = program.englishReq.toeflMin;
      prefScoreReq = program.englishReq.toeflPreferred || minScoreReq;
    } else if (userTest === 'DUOLINGO') {
      minScoreReq = program.englishReq.duolingoMin;
      prefScoreReq = program.englishReq.duolingoPreferred || minScoreReq;
    }

    if (userTest !== 'NONE' && scoreVal > 0) {
      if (scoreVal < minScoreReq) {
        englishScore = 20;
        englishEligible = false;
        englishReason = `Not eligible — ${params.englishTest} requirement is ${minScoreReq} (your score: ${scoreVal})`;
      } else if (scoreVal >= prefScoreReq) {
        englishScore = 100;
        englishReason = `Exceeds preferred ${params.englishTest} score`;
      } else {
        englishScore = 95;
        englishReason = `Meets minimum ${params.englishTest} score (${minScoreReq})`;
      }
    }

    // 6. Total Weighted Match
    const rawMatch =
      (courseScore * weights.course +
        countryScore * weights.country +
        levelScore * weights.studyLevel +
        budgetScore * weights.budget +
        englishScore * weights.english +
        95 * weights.intake +
        (levelCompatible ? 100 : 30) * weights.eligibility) /
      100;

    let matchScore = Math.round(rawMatch);
    let eligibility: EligibilityStatus = 'ELIGIBLE';
    let eligibilityReason: string | undefined = undefined;

    if (!englishEligible) {
      eligibility = 'NOT_ELIGIBLE';
      eligibilityReason = englishReason;
      matchScore = Math.min(matchScore, 48);
    } else if (!levelCompatible) {
      eligibility = 'NOT_ELIGIBLE';
      eligibilityReason = `Degree level does not match ${params.studyLevel}`;
      matchScore = Math.min(matchScore, 42);
    } else if (matchScore < 60) {
      eligibility = 'NOT_ELIGIBLE';
      eligibilityReason = 'Profile compatibility is below admission criteria';
    } else if (matchScore < 75) {
      eligibility = 'POSSIBLE_MATCH';
    }

    const whyExplanation =
      eligibility === 'NOT_ELIGIBLE' && eligibilityReason
        ? eligibilityReason
        : `Your selected ${params.course || 'discipline'} course is available at this university at your preferred ${program.studyLevel} level. Your ${params.englishTest || 'English'} score meets the entry requirements and the estimated tuition falls within your selected budget range.`;

    return {
      university: {
        id: program.universityId,
        name: program.universityName,
        slug: program.universitySlug,
        logo: program.logo,
        coverImage: program.coverImage,
        country: program.country,
        city: program.city,
        ranking: program.ranking,
        website: program.website,
        description: program.description,
      },
      program: {
        id: program.id,
        courseName: program.courseName,
        courseCategory: program.courseCategory,
        studyLevel: program.studyLevel,
        duration: program.duration,
        tuitionFeeLocal: program.tuitionFeeLocal,
        tuitionInrLakhs: program.tuitionInrLakhs,
        intakes: program.intakes,
        applicationDeadline: program.applicationDeadline,
        scholarshipAvailable: program.scholarshipAvailable,
        scholarshipDetails: program.scholarshipDetails,
      },
      matchScore,
      eligibility,
      eligibilityReason,
      breakdown: {
        course: courseScore,
        country: countryScore,
        studyLevel: levelScore,
        budget: budgetScore,
        english: englishScore,
        intake: 95,
        eligibility: levelCompatible ? 100 : 30,
      },
      badges: {
        courseMatch: courseScore >= 80,
        countryMatch: isCountryMatch,
        studyLevelMatch: levelCompatible && levelScore >= 80,
        englishMatch: englishEligible && englishScore >= 90,
        budgetCompatible,
        intakeMatch: true,
      },
      reasons: [
        `Course alignment: ${courseScore}%`,
        `Destination compatibility: ${countryScore}%`,
        `Study level suitability: ${levelScore}%`,
        `Tuition compatibility: ${budgetScore}%`,
      ],
      whyThisMatchExplanation: whyExplanation,
    };
  });

  results.sort((a, b) => {
    const rank = { ELIGIBLE: 3, POSSIBLE_MATCH: 2, NOT_ELIGIBLE: 1 };
    const diff = rank[b.eligibility] - rank[a.eligibility];
    if (diff !== 0) return diff;
    return b.matchScore - a.matchScore;
  });

  return {
    totalResults: results.length,
    eligibleCount: results.filter((r) => r.eligibility === 'ELIGIBLE').length,
    preferences: params,
    weightsUsed: weights,
    results,
  };
}

export const matcherService = {
  getConfig: async (): Promise<MatcherConfigResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/university-matcher/config`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    return FALLBACK_CONFIG;
  },

  getWeights: async (): Promise<MatchWeights> => {
    try {
      const res = await fetch(`${API_BASE_URL}/university-matcher/weights`);
      if (res.ok) {
        const json = await res.json();
        return json.weights;
      }
    } catch {
      // Fallback
    }
    return FALLBACK_CONFIG.defaultWeights;
  },

  updateWeights: async (weights: MatchWeights): Promise<{ success: boolean; weights: MatchWeights }> => {
    const res = await fetch(`${API_BASE_URL}/university-matcher/weights`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(weights),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to update weights');
    }
    return await res.json();
  },

  search: async (params: MatcherSearchParams): Promise<MatcherSearchResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/university-matcher/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    return calculateClientSideMatches(params);
  },

  getUniversityBySlug: async (slug: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/university-matcher/university/${slug}`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    const clean = slug.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const match = FALLBACK_PROGRAMS.find((p) => p.universitySlug === clean || p.universityId === clean) || FALLBACK_PROGRAMS[0];
    return {
      id: match.universityId,
      name: match.universityName,
      slug: match.universitySlug,
      logo: match.logo,
      coverImage: match.coverImage,
      country: match.country,
      city: match.city,
      ranking: match.ranking,
      description: match.description,
      website: match.website,
      destinationCode: match.destinationCode,
      programs: [
        {
          id: match.id,
          courseName: match.courseName,
          courseCategory: match.courseCategory,
          studyLevel: match.studyLevel,
          duration: match.duration,
          tuitionFeeLocal: match.tuitionFeeLocal,
          tuitionInrLakhs: match.tuitionInrLakhs,
          intakes: match.intakes,
          eligibility: match.eligibility,
          englishReq: match.englishReq,
          scholarshipAvailable: match.scholarshipAvailable,
          scholarshipDetails: match.scholarshipDetails,
          applicationDeadline: match.applicationDeadline,
        },
      ],
      isDemoData: true,
    };
  },
};
