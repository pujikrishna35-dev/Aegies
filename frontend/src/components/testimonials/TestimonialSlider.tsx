import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialSlider: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <TestimonialCard name="Pooja Hegde" uni="Univ of Sydney" text="The team simplified my entire visa documentation process." />
    <TestimonialCard name="Venkatesh Rao" uni="Trinity College Dublin" text="Mock visa interview sessions made embassy filing stress-free." />
    <TestimonialCard name="Divya K." uni="Boston University" text="Excellent guidance on STEM OPT extensions." />
  </div>
);
