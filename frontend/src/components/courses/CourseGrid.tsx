import React from 'react';
import { CourseCard } from './CourseCard';

export const CourseGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <CourseCard title="MSc Computer Science" category="STEM" duration="1–2 Years" />
    <CourseCard title="Master of Business Administration (MBA)" category="Business" duration="1–2 Years" />
    <CourseCard title="MS Data Science & AI" category="STEM" duration="18 Months" />
    <CourseCard title="MSc International Finance" category="Finance" duration="1 Year" />
    <CourseCard title="Master of Cybersecurity" category="STEM" duration="2 Years" />
    <CourseCard title="Master of Public Health (MPH)" category="Healthcare" duration="1–2 Years" />
  </div>
);
