import React from 'react';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm' }) => {
  const s = (status || '').toUpperCase();

  let colorClasses = 'bg-slate-100 text-slate-700 border-slate-200';

  // Lead & General Statuses
  if (['NEW', 'PENDING', 'UNREAD'].includes(s)) {
    colorClasses = 'bg-amber-50 text-amber-800 border-amber-200';
  } else if (['CONTACTED', 'FOLLOW_UP', 'IN_PROGRESS', 'IN_REVIEW', 'COUNSELLING'].includes(s)) {
    colorClasses = 'bg-blue-50 text-blue-800 border-blue-200';
  } else if (['CONFIRMED', 'VERIFIED', 'PUBLISHED', 'ACTIVE', 'CONVERTED', 'ENROLLED', 'COMPLETED', 'RESOLVED', 'VISA_APPROVED'].includes(s)) {
    colorClasses = 'bg-emerald-50 text-emerald-800 border-emerald-200';
  } else if (['APPLICATION', 'APPLICATION_SUBMITTED', 'OFFER_LETTER', 'DOCUMENTS_COLLECTED'].includes(s)) {
    colorClasses = 'bg-purple-50 text-purple-800 border-purple-200';
  } else if (['LOST', 'CANCELLED', 'REJECTED', 'DROPPED', 'INACTIVE', 'EXPIRED'].includes(s)) {
    colorClasses = 'bg-rose-50 text-rose-800 border-rose-200';
  }

  const padding = size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs';

  return (
    <span className={`inline-flex items-center font-bold tracking-tight rounded-full border ${padding} ${colorClasses}`}>
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-75" />
      {status.replace(/_/g, ' ')}
    </span>
  );
};

export default StatusBadge;
