import React from 'react';
import { UniversityCard } from './UniversityCard';

export const UniversityGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <UniversityCard name="University of Oxford" country="UK" city="Oxford" rank={1} tuition="£28,000/yr" />
    <UniversityCard name="Harvard University" country="USA" city="Cambridge, MA" rank={4} tuition="$54,000/yr" />
    <UniversityCard name="University of Toronto" country="Canada" city="Toronto" rank={21} tuition="CAD 38,000/yr" />
    <UniversityCard name="University of Melbourne" country="Australia" city="Melbourne" rank={33} tuition="AUD 36,000/yr" />
    <UniversityCard name="Technical University of Munich" country="Germany" city="Munich" rank={37} tuition="€0/yr" />
    <UniversityCard name="Trinity College Dublin" country="Ireland" city="Dublin" rank={81} tuition="€18,000/yr" />
  </div>
);
