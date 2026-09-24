import React from 'react';
import { BlogCard } from './BlogCard';

export const BlogGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <BlogCard title="UK Graduate Route 2026: Complete Work Visa Guide" category="Visa & Careers" date="Sep 2026" img="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop" />
    <BlogCard title="How to Secure Up to $25,000 STEM Scholarships in the US" category="Scholarships" date="Aug 2026" img="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=400&auto=format&fit=crop" />
    <BlogCard title="Top 10 High-Demand Master's in Canada & Australia" category="Careers" date="Aug 2026" img="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=400&auto=format&fit=crop" />
  </div>
);
