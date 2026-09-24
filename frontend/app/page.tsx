import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustStats } from '@/components/home/TrustStats';
import { DestinationSection } from '@/components/home/DestinationSection';
import { UniversityFinder } from '@/components/home/UniversityFinder';
import { JourneyTimeline } from '@/components/home/JourneyTimeline';
import { StudentStories } from '@/components/home/StudentStories';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Full-Width Sunlit Hero Section with Floating Destination Cards */}
      <Hero />

      {/* 2. Trust Statistics Bar with Signature */}
      <TrustStats />

      {/* 3. Explore Your Dream Destination (8 Countries Carousel) */}
      <DestinationSection />

      {/* 4. Find Your Perfect University (3x2 Profile Matcher) */}
      <UniversityFinder />

      {/* 5. Your Journey With Aegis (6-Stage Stepper Flow) */}
      <JourneyTimeline />

      {/* 6. Real Students. Real Journeys. Real Impact. (Testimonial Showcase) */}
      <StudentStories />

      {/* 7. Ready to Start Your Global Journey? (Scenic Mountain CTA) */}
      <FinalCTA />
    </>
  );
}
