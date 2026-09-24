import React from 'react';
import { StudentCard } from './StudentCard';

export const StudentGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <StudentCard name="Rohan V." uni="Imperial College London" quote="Aegis made admissions painless!" img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" />
    <StudentCard name="Ananya D." uni="Univ of Toronto" quote="Secured a CAD 12k scholarship!" img="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" />
    <StudentCard name="Karthik R." uni="Monash University" quote="Visa approved in 2 weeks flat!" img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" />
  </div>
);
