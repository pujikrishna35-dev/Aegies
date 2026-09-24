import React from 'react';

export const Loading: React.FC = () => (
  <div className="flex items-center justify-center p-12">
    <div className="w-8 h-8 border-3 border-amber-400 border-t-transparent rounded-full animate-spin" />
  </div>
);
