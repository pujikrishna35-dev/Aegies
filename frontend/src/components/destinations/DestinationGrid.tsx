import React from 'react';
import { DESTINATIONS } from '@/data/destinations';
import { DestinationCard } from './DestinationCard';

export const DestinationGrid: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {DESTINATIONS.map((d) => <DestinationCard key={d.slug} destination={d} />)}
  </div>
);
