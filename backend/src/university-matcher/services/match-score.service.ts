import { Injectable } from '@nestjs/common';
import { CourseMatcherService } from './course-matcher.service';
import { BudgetMatcherService } from './budget-matcher.service';
import { EnglishMatcherService } from './english-matcher.service';
import { EligibilityMatcherService } from './eligibility-matcher.service';
import {
  MatchWeights,
  UniversityProgramRecord,
  UniversityMatchResult,
  EligibilityStatus,
  MatchScoreBreakdown,
} from '../types/matcher.types';
import { UniversityMatchSearchDto } from '../dto/university-match.dto';

@Injectable()
export class MatchScoreService {
  constructor(
    private readonly courseMatcher: CourseMatcherService,
    private readonly budgetMatcher: BudgetMatcherService,
    private readonly englishMatcher: EnglishMatcherService,
    private readonly eligibilityMatcher: EligibilityMatcherService
  ) {}

  calculateMatch(
    dto: UniversityMatchSearchDto,
    program: UniversityProgramRecord,
    weights: MatchWeights
  ): UniversityMatchResult {
    // 1. Course Match
    const courseRes = this.courseMatcher.calculateCourseMatch(dto.course, program.courseName, program.courseCategory);

    // 2. Country Match
    const countryRes = this.eligibilityMatcher.calculateCountryMatch(
      dto.country,
      program.country,
      program.destinationCode
    );

    // 3. Study Level Match
    const levelRes = this.eligibilityMatcher.calculateStudyLevelMatch(dto.studyLevel, program.studyLevel);

    // 4. Budget Match
    const budgetRes = this.budgetMatcher.calculateBudgetMatch(dto.budget, program.tuitionInrLakhs);

    // 5. English Match
    const englishRes = this.englishMatcher.calculateEnglishMatch(
      dto.englishTest,
      dto.englishScore,
      program.englishReq
    );

    // 6. Intake Match
    const intakeRes = this.eligibilityMatcher.calculateIntakeMatch(dto.intakePreference, program.intakes);

    // 7. General Academic Eligibility Match
    const generalEligibilityScore = levelRes.compatible ? 100 : 30;

    // Normalizing weights sum just in case
    const totalWeight =
      weights.course +
      weights.country +
      weights.studyLevel +
      weights.budget +
      weights.english +
      weights.intake +
      weights.eligibility;

    const rawScore =
      (courseRes.score * weights.course +
        countryRes.score * weights.country +
        levelRes.score * weights.studyLevel +
        budgetRes.score * weights.budget +
        englishRes.score * weights.english +
        intakeRes.score * weights.intake +
        generalEligibilityScore * weights.eligibility) /
      (totalWeight || 100);

    let finalScore = Math.round(rawScore);
    let eligibility: EligibilityStatus = 'ELIGIBLE';
    let eligibilityReason: string | undefined = undefined;

    // Mandatory requirements enforcement:
    // If student fails mandatory English requirements:
    if (!englishRes.eligible) {
      eligibility = 'NOT_ELIGIBLE';
      eligibilityReason = englishRes.reason;
      finalScore = Math.min(finalScore, 48); // Cap score so failing students never see high % match
    } else if (!levelRes.compatible) {
      eligibility = 'NOT_ELIGIBLE';
      eligibilityReason = levelRes.reason;
      finalScore = Math.min(finalScore, 40);
    } else if (finalScore < 60) {
      eligibility = 'NOT_ELIGIBLE';
      eligibilityReason = 'Profile compatibility is below minimum admission threshold';
    } else if (finalScore < 75) {
      eligibility = 'POSSIBLE_MATCH';
    } else {
      eligibility = 'ELIGIBLE';
    }

    const breakdown: MatchScoreBreakdown = {
      course: courseRes.score,
      country: countryRes.score,
      studyLevel: levelRes.score,
      budget: budgetRes.score,
      english: englishRes.score,
      intake: intakeRes.score,
      eligibility: generalEligibilityScore,
    };

    const reasons: string[] = [
      courseRes.reason,
      countryRes.reason,
      levelRes.reason,
      budgetRes.reason,
      englishRes.reason,
      intakeRes.reason,
    ];

    // Generate natural, dynamic data-driven explanation
    const whyThisMatchExplanation = this.generateWhyExplanation(
      dto,
      program,
      breakdown,
      eligibility,
      eligibilityReason
    );

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
      matchScore: finalScore,
      eligibility,
      eligibilityReason,
      breakdown,
      badges: {
        courseMatch: courseRes.score >= 80,
        countryMatch: countryRes.isMatch,
        studyLevelMatch: levelRes.compatible && levelRes.score >= 80,
        englishMatch: englishRes.badge,
        budgetCompatible: budgetRes.compatible,
        intakeMatch: intakeRes.score >= 90,
      },
      reasons,
      whyThisMatchExplanation,
    };
  }

  private generateWhyExplanation(
    dto: UniversityMatchSearchDto,
    program: UniversityProgramRecord,
    breakdown: MatchScoreBreakdown,
    eligibility: EligibilityStatus,
    eligibilityReason?: string
  ): string {
    if (eligibility === 'NOT_ELIGIBLE' && eligibilityReason) {
      return eligibilityReason;
    }

    const sentences: string[] = [];

    // Course & Level sentence
    if (dto.course && breakdown.course >= 85) {
      sentences.push(
        `Your selected ${dto.course} course is directly offered as "${program.courseName}" at your preferred ${program.studyLevel} level.`
      );
    } else if (dto.course) {
      sentences.push(
        `Offered in the ${program.courseCategory} department aligned with your interest in ${dto.course}.`
      );
    } else {
      sentences.push(`Curriculum offered at the ${program.studyLevel} level at this recognized institution.`);
    }

    // English test sentence
    if (dto.englishTest && dto.englishTest !== 'NONE') {
      if (breakdown.english >= 100) {
        sentences.push(
          `Your ${dto.englishTest} score meets and exceeds the university's preferred admission standard.`
        );
      } else if (breakdown.english >= 90) {
        sentences.push(`Your ${dto.englishTest} score fully satisfies the stated minimum entry requirement.`);
      }
    }

    // Budget sentence
    if (breakdown.budget >= 90) {
      sentences.push(
        `The estimated tuition (${program.tuitionFeeLocal} ≈ ₹${program.tuitionInrLakhs.min}–${program.tuitionInrLakhs.max} Lakhs/yr) falls comfortably within your selected budget range.`
      );
    } else if (breakdown.budget >= 70) {
      sentences.push(
        `The tuition is close to your selected budget; Aegis partner scholarships can bridge the remainder.`
      );
    }

    // Scholarships & Intake sentence
    if (program.scholarshipAvailable) {
      sentences.push(`Merit scholarships and application fee waivers are available through Aegis Overseas.`);
    }

    return sentences.join(' ');
  }
}
