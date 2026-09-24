import { Injectable } from '@nestjs/common';

export interface BudgetRangeConfig {
  id: string;
  label: string;
  minLakhs: number;
  maxLakhs: number;
}

@Injectable()
export class BudgetMatcherService {
  readonly budgetRanges: BudgetRangeConfig[] = [
    { id: 'under10', label: 'Under ₹10 Lakhs', minLakhs: 0, maxLakhs: 10 },
    { id: '10-20', label: '₹10–20 Lakhs', minLakhs: 10, maxLakhs: 20 },
    { id: '20-30', label: '₹20–30 Lakhs', minLakhs: 20, maxLakhs: 30 },
    { id: '30-40', label: '₹30–40 Lakhs', minLakhs: 30, maxLakhs: 40 },
    { id: '40-50', label: '₹40–50 Lakhs', minLakhs: 40, maxLakhs: 50 },
    { id: 'above50', label: 'Above ₹50 Lakhs', minLakhs: 50, maxLakhs: 150 },
  ];

  calculateBudgetMatch(
    userBudgetId: string,
    programTuitionInr: { min: number; max: number }
  ): { score: number; reason: string; compatible: boolean } {
    if (!userBudgetId) {
      return { score: 100, reason: 'Budget range open', compatible: true };
    }

    let min = 0;
    let max = 100;

    // Handle standard keys or custom inputs
    const found = this.budgetRanges.find((b) => b.id.toLowerCase() === userBudgetId.toLowerCase());
    if (found) {
      min = found.minLakhs;
      max = found.maxLakhs;
    } else if (userBudgetId.includes('under15')) {
      min = 0;
      max = 15;
    } else if (userBudgetId.includes('15-25')) {
      min = 15;
      max = 25;
    } else if (userBudgetId.includes('25-40')) {
      min = 25;
      max = 40;
    } else if (userBudgetId.includes('40')) {
      min = 40;
      max = 120;
    }

    const progMin = programTuitionInr.min;
    const progMax = programTuitionInr.max;
    const progAvg = (progMin + progMax) / 2;

    // 1. Tuition-free (like Germany) or comfortably within budget
    if (progMax === 0 || (progMin >= min && progMax <= max) || (progAvg <= max && progAvg >= min)) {
      return {
        score: 100,
        reason: progMax === 0 ? 'Tuition-free program (comfortable budget fit)' : 'Comfortably within selected budget range',
        compatible: true,
      };
    }

    // 2. Overlap with budget range
    if (progMin <= max && progMax >= min) {
      return {
        score: 90,
        reason: 'Estimated tuition spans within your selected budget band',
        compatible: true,
      };
    }

    // 3. Cheaper than budget
    if (progMax < min) {
      return {
        score: 95,
        reason: 'Estimated tuition is lower than your budget ceiling',
        compatible: true,
      };
    }

    // 4. Slightly above budget (within 20% margin)
    const excess = progMin - max;
    if (excess <= 5) {
      return {
        score: 75,
        reason: `Slightly above selected budget (+₹${excess.toFixed(1)} Lakhs), eligible for Aegis partner scholarships`,
        compatible: true,
      };
    } else if (excess <= 12) {
      return {
        score: 50,
        reason: `Above selected budget (+₹${excess.toFixed(1)} Lakhs), financial aid recommended`,
        compatible: false,
      };
    }

    // 5. Significantly outside budget
    return {
      score: 25,
      reason: `Significantly exceeds selected budget ceiling (+₹${excess.toFixed(1)} Lakhs)`,
      compatible: false,
    };
  }
}
