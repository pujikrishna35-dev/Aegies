import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { GENUINE_REVIEWS } from '../../data/testimonials';

export const TestimonialSlider: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {GENUINE_REVIEWS.slice(0, 3).map((r) => (
      <TestimonialCard
        key={r.id}
        name={r.reviewerName}
        uni={r.tagline}
        text={r.shortQuote}
        slug={r.storySlug}
      />
    ))}
  </div>
);
