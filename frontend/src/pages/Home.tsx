import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustStatsSection } from '@/components/home/TrustStatsSection';
import { DestinationsSection } from '@/components/home/DestinationsSection';
import { UniversityFinder } from '@/components/home/UniversityFinder';
import { WhyAegis } from '@/components/home/WhyAegis';
import { SupportSection } from '@/components/home/SupportSection';
import { JourneySection } from '@/components/home/JourneySection';
import { CoursesSection } from '@/components/home/CoursesSection';
import { UniversitiesSection } from '@/components/home/UniversitiesSection';
import { StudentSuccessSection } from '@/components/home/StudentSuccessSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero with Panorama and 8 Arched Destination Pills */}
      <Hero />

      {/* 2. Trust Metrics & Accreditations Section (Moved down below Hero) */}
      <TrustStatsSection />

      {/* 3. Explore Your Dream Destination (8 Country Cards) */}
      <DestinationsSection />

      {/* 3. Find Your Perfect University (6 Dropdown Filters + Campus Card) */}
      <UniversityFinder />

      {/* 4. Why Aegis (9 Feature Icon Tiles) */}
      <WhyAegis />

      {/* 5. 360° Support (Dark Navy Banner with Connected Milestone Nodes) */}
      <SupportSection />

      {/* 6. Your Journey With Aegis (6 Milestone Phases with Flight Icon) */}
      <JourneySection />

      {/* 7. Unified 3-Column: Courses | Scholarships | Test Preparation */}
      <CoursesSection />

      {/* 8. Partner Universities (Leading Global University Logos Carousel) */}
      <UniversitiesSection />

      {/* 9. Unified 2-Column: Student Success Stories | About Aegis */}
      <StudentSuccessSection />

      {/* 10. Unified 3-Column: Testimonials | Frequently Asked Questions | Blog */}
      <TestimonialsSection />

      {/* 11. Final CTA Banner (Dark Navy Banner with Sunset Horizon) */}
      <FinalCTA />
    </main>
  );
};

export default Home;
