import React, { useState } from 'react';
import { FormInput } from './FormInput';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
        <h4 className="text-lg font-bold text-emerald-800">Message Received!</h4>
        <p className="text-xs text-emerald-600 mt-1">An Aegis counsellor will reach out within 2 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput label="Full Name" placeholder="e.g. Rahul Sharma" required />
      <FormInput label="Phone Number" placeholder="+91 9876543210" required />
      <FormInput label="Email Address" type="email" placeholder="rahul@example.com" required />
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Message / Inquiry</label>
        <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500" placeholder="Tell us your target country, course, or questions..." required />
      </div>
      <button type="submit" className="w-full py-3.5 bg-[#8A1538] text-white font-bold rounded-xl text-sm hover:bg-burgundy-900 transition">
        Send Message →
      </button>
    </form>
  );
};
