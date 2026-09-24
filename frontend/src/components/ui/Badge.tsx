import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'navy' | 'sky' | 'subtle';
}

export function Badge({ className, variant = 'gold', children, ...props }: BadgeProps) {
  const variants = {
    gold: 'bg-gold-500/15 text-gold-700 border border-gold-400/30',
    navy: 'bg-navy-900/10 text-navy-800 border border-navy-800/15',
    sky: 'bg-sky-100 text-navy-700 border border-sky-200',
    subtle: 'bg-neutral-100 text-neutral-600 border border-neutral-200'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
