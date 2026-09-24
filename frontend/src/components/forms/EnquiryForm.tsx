import React, { useState } from 'react';
import { FormInput } from './FormInput';

export const EnquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="p-6 bg-emerald-50 text-emerald-800 rounded-xl text-center">
        <p className="font-bold text-sm">Enquiry Registered!</p>
        <p className="text-xs mt-1">We will contact you shortly.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <FormInput label="Name" placeholder="Your Name" required />
      <FormInput label="Phone" placeholder="Mobile Number" required />
      <FormInput label="Target Country" placeholder="e.g. UK, USA" required />
      <button type="submit" className="w-full py-3 bg-[#8A1538] text-white font-bold rounded-xl text-xs hover:bg-burgundy-900 transition">
        Submit Enquiry
      </button>
    </form>
  );
};
