import { Module } from '@nestjs/common';
import { UniversityMatcherController } from './university-matcher.controller';
import { UniversityMatcherService } from './university-matcher.service';
import { CourseMatcherService } from './services/course-matcher.service';
import { BudgetMatcherService } from './services/budget-matcher.service';
import { EnglishMatcherService } from './services/english-matcher.service';
import { EligibilityMatcherService } from './services/eligibility-matcher.service';
import { MatchScoreService } from './services/match-score.service';

@Module({
  controllers: [UniversityMatcherController],
  providers: [
    UniversityMatcherService,
    CourseMatcherService,
    BudgetMatcherService,
    EnglishMatcherService,
    EligibilityMatcherService,
    MatchScoreService,
  ],
  exports: [UniversityMatcherService],
})
export class UniversityMatcherModule {}
