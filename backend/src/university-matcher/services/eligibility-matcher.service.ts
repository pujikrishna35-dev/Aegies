import { Injectable } from '@nestjs/common';

@Injectable()
export class EligibilityMatcherService {
  // Study level compatibility map
  calculateStudyLevelMatch(userLevel: string, programLevel: string): { score: number; reason: string; compatible: boolean } {
    if (!userLevel) {
      return { score: 100, reason: 'Study level open', compatible: true };
    }

    const u = userLevel.toLowerCase().trim();
    const p = programLevel.toLowerCase().trim();

    // 1. Exact match
    if (u === p || p.includes(u) || u.includes(p)) {
      return { score: 100, reason: `Exact study level match (${programLevel})`, compatible: true };
    }

    // 2. Master's vs Postgraduate vs MBA
    const isUserMasters = u.includes('master') || u.includes('postgraduate') || u.includes('pg');
    const isProgMasters = p.includes('master') || p.includes('postgraduate') || p.includes('pg');
    if (isUserMasters && isProgMasters) {
      return { score: 95, reason: `Directly compatible postgraduate degree level`, compatible: true };
    }

    if (u.includes('mba') && (p.includes('master') || p.includes('postgraduate') || p.includes('mba'))) {
      return { score: 90, reason: `Postgraduate business management qualification`, compatible: true };
    }

    // 3. Bachelors vs Undergraduate
    const isUserUG = u.includes('undergraduate') || u.includes('bachelor') || u.includes('ug');
    const isProgUG = p.includes('undergraduate') || p.includes('bachelor') || p.includes('ug');
    if (isUserUG && isProgUG) {
      return { score: 100, reason: `Exact undergraduate degree level`, compatible: true };
    }

    // 4. Diploma / Certificate
    if ((u.includes('diploma') || u.includes('certificate')) && (p.includes('diploma') || p.includes('certificate'))) {
      return { score: 100, reason: `Vocational diploma / certificate level`, compatible: true };
    }

    // 5. Incompatible
    return {
      score: 10,
      reason: `Program level (${programLevel}) does not match your target level (${userLevel})`,
      compatible: false,
    };
  }

  calculateCountryMatch(userCountry: string, programCountry: string, destCode: string): { score: number; reason: string; isMatch: boolean } {
    if (!userCountry) {
      return { score: 100, reason: 'All destinations considered', isMatch: true };
    }

    const u = userCountry.toLowerCase().trim();
    const p = programCountry.toLowerCase().trim();

    // Exact or direct match
    if (
      u === p ||
      p.includes(u) ||
      u.includes(p) ||
      (u.includes('uk') && p.includes('united kingdom')) ||
      (u.includes('usa') && p.includes('united states')) ||
      (u.includes('united states') && p.includes('usa')) ||
      (u.includes('united kingdom') && p.includes('uk'))
    ) {
      return { score: 100, reason: `Direct match for target country (${programCountry})`, isMatch: true };
    }

    // Europe / Schengen rule: if user specified Europe, any European country (Germany, Ireland, France, etc.) matches 100%
    const isUserEurope = u.includes('europe') || u.includes('schengen');
    const isProgEurope = ['germany', 'ireland', 'france', 'netherlands', 'sweden', 'italy', 'spain', 'europe'].some((c) => p.includes(c));
    if (isUserEurope && isProgEurope) {
      return { score: 100, reason: `European Schengen destination match (${programCountry})`, isMatch: true };
    }

    return {
      score: 40,
      reason: `Alternative reputable destination (${programCountry})`,
      isMatch: false,
    };
  }

  calculateIntakeMatch(userIntake: string | undefined, programIntakes: string[]): { score: number; reason: string } {
    if (!userIntake || !programIntakes || programIntakes.length === 0) {
      return { score: 100, reason: `Multiple intakes available (${programIntakes?.join(', ') || 'Rolling'})` };
    }

    const u = userIntake.toLowerCase();
    const hasMatch = programIntakes.some((i) => i.toLowerCase().includes(u) || u.includes(i.toLowerCase()));

    if (hasMatch) {
      return { score: 100, reason: `Target intake available` };
    }

    return { score: 85, reason: `Alternative intakes open: ${programIntakes.slice(0, 2).join(' & ')}` };
  }
}
