import React from 'react';

export const FormInput: React.FC<{
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>> = ({ label, error, className = '', ...props }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{label}</label>
    <input className={`w-full px-4 py-2.5 rounded-xl border ${error ? 'border-red-500' : 'border-slate-300'} text-sm focus:outline-none focus:border-amber-500 ${className}`} {...props} />
    {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
  </div>
);
