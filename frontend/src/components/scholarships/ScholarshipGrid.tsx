import React from 'react';
import { ScholarshipCard } from './ScholarshipCard';

export const ScholarshipGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ScholarshipCard title="Global Excellence Grant" amount="Up to £10,000" country="UK" />
    <ScholarshipCard title="Dean's Merit Fellowship" amount="Up to $25,000/yr" country="USA" />
    <ScholarshipCard title="International Leaders Award" amount="20% Tuition Waiver" country="Australia" />
  </div>
);
