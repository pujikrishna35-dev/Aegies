import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getDashboardStats() {
    return {
      totalLeads: 1248,
      leadsGrowth: '+18.4%',
      totalStudents: 846,
      studentsGrowth: '+14.2%',
      activeApplications: 312,
      applicationsGrowth: '+22.5%',
      consultationsBooked: 485,
      consultationsGrowth: '+12.8%',
      leadConversionRate: '24.9%',
      visaSuccessRate: '99.2%',
      monthlyLeads: [
        { month: 'Apr', leads: 82, applications: 28 },
        { month: 'May', leads: 115, applications: 42 },
        { month: 'Jun', leads: 160, applications: 64 },
        { month: 'Jul', leads: 220, applications: 85 },
        { month: 'Aug', leads: 280, applications: 110 },
        { month: 'Sep', leads: 391, applications: 145 },
      ],
      applicationsByDestination: [
        { country: 'United Kingdom', count: 118, percentage: 38 },
        { country: 'United States', count: 84, percentage: 27 },
        { country: 'Canada', count: 42, percentage: 13 },
        { country: 'Australia', count: 36, percentage: 12 },
        { country: 'Germany & Europe', count: 32, percentage: 10 },
      ],
      applicationsByStatus: [
        { stage: 'Counselling', count: 48, color: 'bg-amber-500' },
        { stage: 'University Selected', count: 62, color: 'bg-blue-500' },
        { stage: 'Documents Collected', count: 54, color: 'bg-indigo-500' },
        { stage: 'Application Submitted', count: 68, color: 'bg-purple-500' },
        { stage: 'Offer Letter Received', count: 44, color: 'bg-teal-500' },
        { stage: 'Visa Filed / Approved', count: 36, color: 'bg-emerald-500' },
      ],
    };
  }

  getComprehensiveAnalytics() {
    return {
      ...this.getDashboardStats(),
      counselorPerformance: [
        { name: 'Pooja Sharma', leadsHandled: 164, converted: 48, conversionRate: '29.2%', avgRating: 4.9 },
        { name: 'Director Desk', leadsHandled: 98, converted: 34, conversionRate: '34.7%', avgRating: 5.0 },
        { name: 'Surendra Babu', leadsHandled: 122, converted: 30, conversionRate: '24.5%', avgRating: 4.8 },
      ],
      trafficSources: [
        { source: 'Organic Search', percentage: 42 },
        { source: 'Direct Consultations', percentage: 28 },
        { source: 'Instagram / Social', percentage: 18 },
        { source: 'Student Referrals', percentage: 12 },
      ],
    };
  }
}
