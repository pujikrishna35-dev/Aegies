import React from 'react';
import { SCHOLARSHIPS } from '../../data/scholarships';
import { ScholarshipCard } from './ScholarshipCard';

export const ScholarshipGrid: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {SCHOLARSHIPS.slice(0, 4).map((sch) => (
      <ScholarshipCard
        key={sch.id}
        scholarship={sch}
        onOpenGuide={() => {}}
        onOpenConsultation={() => {}}
      />
    ))}
  </div>
);

export default ScholarshipGrid;
