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

const FALLBACK_PROGRAMS: UniversityProgramRecord[] = [];

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
        destinationCode: program.destinationCode,
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
    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/university-matcher/config`);
        if (res.ok) {
          return await res.json();
        }
      } catch {
        // Fallback
      }
    }
    return FALLBACK_CONFIG;
  },

  getWeights: async (): Promise<MatchWeights> => {
    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/university-matcher/weights`);
        if (res.ok) {
          const json = await res.json();
          return json.weights;
        }
      } catch {
        // Fallback
      }
    }
    return FALLBACK_CONFIG.defaultWeights;
  },

  updateWeights: async (weights: MatchWeights): Promise<{ success: boolean; weights: MatchWeights }> => {
    if (API_BASE_URL) {
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
    }
    return { success: true, weights };
  },

  search: async (params: MatcherSearchParams): Promise<MatcherSearchResponse> => {
    if (API_BASE_URL) {
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
    }
    return calculateClientSideMatches(params);
  },

  getUniversityBySlug: async (slug: string) => {
    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/university-matcher/university/${slug}`);
        if (res.ok) {
          return await res.json();
        }
      } catch {
        // Fallback
      }
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
