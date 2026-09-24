import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'navy' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isShimmer?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'gold', size = 'md', isShimmer = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      gold: 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 shadow-md hover:shadow-gold-glow hover:brightness-105 active:scale-[0.98] font-semibold tracking-wide',
      navy: 'bg-navy-900 text-white hover:bg-navy-800 border border-navy-700 shadow-md hover:shadow-luxury',
      outline: 'bg-transparent border border-gold-500/60 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400',
      ghost: 'bg-transparent text-navy-800 hover:bg-navy-100/50 hover:text-navy-950',
      white: 'bg-white text-navy-900 hover:bg-ivory-100 shadow-md border border-neutral-100'
    };

    const sizes = {
      sm: 'text-xs px-4 py-2 gap-1.5',
      md: 'text-sm px-6 py-3 gap-2',
      lg: 'text-base px-8 py-3.5 gap-2.5 font-medium'
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isShimmer && 'btn-shimmer',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
