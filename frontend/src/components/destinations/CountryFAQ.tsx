import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

export const CountryFAQ: React.FC<{ faqs: { title: string; content: string }[] }> = ({ faqs }) => (
  <div className="my-8">
    <h3 className="font-bold text-xl text-slate-900 mb-4">Destination FAQs</h3>
    <Accordion items={faqs} />
  </div>
);
