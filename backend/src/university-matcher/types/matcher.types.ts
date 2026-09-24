export type EnglishTestType = 'IELTS' | 'PTE' | 'TOEFL' | 'Duolingo' | 'OET' | 'NONE';

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
  waiverPossible?: boolean;
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
  destinationCode: string; // 'UK' | 'USA' | 'CANADA' | 'AUSTRALIA' | 'GERMANY' | 'IRELAND' | 'NEW_ZEALAND' | 'EUROPE'
  courseName: string;
  courseCategory: string; // 'Computer Science & IT', 'Engineering', 'Business & Management', etc.
  studyLevel: string; // 'Undergraduate', 'Postgraduate', "Master's", 'MBA', 'PhD', 'Diploma', 'Certificate'
  duration: string;
  tuitionFeeLocal: string;
  tuitionInrLakhs: { min: number; max: number };
  currency: string;
  intakes: string[]; // e.g. ['September 2026', 'January 2027']
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
  careerProspects?: string;
  isDemoData: boolean;
}

export interface MatchWeights {
  course: number; // 30
  country: number; // 20
  studyLevel: number; // 15
  budget: number; // 15
  english: number; // 10
  intake: number; // 5
  eligibility: number; // 5
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
