import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}

  @Get('dashboard')
  getDashboard() {
    return this.service.getDashboardStats();
  }

  @Get('overview')
  getOverview() {
    return this.service.getComprehensiveAnalytics();
  }
}
