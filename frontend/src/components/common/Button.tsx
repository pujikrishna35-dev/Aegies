import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children, variant = 'primary', size = 'md', className = '', ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };
  const variantClasses = {
    gold: 'bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 font-bold shadow-sm',
    primary: 'bg-[#8A1538] hover:bg-burgundy-900 text-white font-bold shadow-sm',
    outline: 'border border-slate-300 hover:border-slate-400 text-slate-700 bg-white font-semibold',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold',
  };
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl transition duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
