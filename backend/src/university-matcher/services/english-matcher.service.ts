import { Injectable } from '@nestjs/common';
import { EnglishRequirement } from '../types/matcher.types';

export interface EnglishMatchResult {
  score: number;
  eligible: boolean;
  reason: string;
  badge: boolean;
}

@Injectable()
export class EnglishMatcherService {
  calculateEnglishMatch(
    userTest: string,
    userScore: number | undefined,
    req: EnglishRequirement
  ): EnglishMatchResult {
    if (!userTest || userTest.toUpperCase() === 'NONE' || userTest.toUpperCase() === 'NOT_REQUIRED' || userTest.toUpperCase() === 'NOT_TAKEN') {
      return {
        score: 85,
        eligible: true,
        reason: 'English proficiency test not yet attempted (Conditional admission / Aegis coaching recommended)',
        badge: false,
      };
    }

    const test = userTest.toUpperCase();
    const score = Number(userScore) || 0;

    let min = 0;
    let preferred = 0;

    switch (test) {
      case 'IELTS':
        min = req.ieltsMin;
        preferred = req.ieltsPreferred || min;
        break;
      case 'PTE':
        min = req.pteMin;
        preferred = req.ptePreferred || min;
        break;
      case 'TOEFL':
        min = req.toeflMin;
        preferred = req.toeflPreferred || min;
        break;
      case 'DUOLINGO':
        min = req.duolingoMin;
        preferred = req.duolingoPreferred || min;
        break;
      case 'OET':
        min = req.oetMin || 350;
        preferred = min;
        break;
      default:
        min = req.ieltsMin;
        preferred = req.ieltsPreferred || min;
    }

    // Check eligibility
    if (score < min) {
      const diff = (min - score).toFixed(1);
      return {
        score: 20,
        eligible: false,
        reason: `Not eligible — ${userTest} requirement is ${min} (your score: ${score})`,
        badge: false,
      };
    }

    // Meets or exceeds preferred score
    if (score >= preferred) {
      return {
        score: 100,
        eligible: true,
        reason: `Exceeds preferred ${userTest} score (${score} vs ${preferred} preferred)`,
        badge: true,
      };
    }

    // Meets minimum score
    return {
      score: 95,
      eligible: true,
      reason: `Meets mandatory minimum ${userTest} requirement (${score} vs ${min} min)`,
      badge: true,
    };
  }
}
