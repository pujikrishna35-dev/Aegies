import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LeadsModule } from './leads/leads.module';
import { StudentsModule } from './students/students.module';
import { UniversitiesModule } from './universities/universities.module';
import { ApplicationsModule } from './applications/applications.module';
import { DocumentsModule } from './documents/documents.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { CoursesModule } from './courses/courses.module';
import { DestinationsModule } from './destinations/destinations.module';
import { ScholarshipsModule } from './scholarships/scholarships.module';
import { ServicesModule } from './services/services.module';
import { TestPreparationModule } from './test-preparation/test-preparation.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { StudentStoriesModule } from './student-stories/student-stories.module';
import { BlogModule } from './blog/blog.module';
import { EnquiriesModule } from './enquiries/enquiries.module';
import { MediaModule } from './media/media.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { SettingsModule } from './settings/settings.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { UniversityMatcherModule } from './university-matcher/university-matcher.module';

@Module({
  imports: [
    UniversityMatcherModule,
    AuthModule,
    UsersModule,
    LeadsModule,
    StudentsModule,
    UniversitiesModule,
    ApplicationsModule,
    DocumentsModule,
    ConsultationsModule,
    CoursesModule,
    DestinationsModule,
    ScholarshipsModule,
    ServicesModule,
    TestPreparationModule,
    TestimonialsModule,
    StudentStoriesModule,
    BlogModule,
    EnquiriesModule,
    MediaModule,
    NotificationsModule,
    AnalyticsModule,
    SettingsModule,
    AuditLogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
