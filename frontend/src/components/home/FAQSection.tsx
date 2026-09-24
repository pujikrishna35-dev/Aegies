import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Which country is best for my profile?", a: "The best destination depends on your academic GPA, budget, desired post-study work rights, and target career. Our counsellors analyze your credentials to present an optimal country shortlist." },
  { q: "How much does studying abroad cost?", a: "Tuition varies from zero-tuition options in Germany to £14,000–£28,000/year in the UK and $25,000–$50,000/year in the US. Living expenses average $10,000–$15,000/year." },
  { q: "Can I get an education loan?", a: "Yes. Through our banking partnerships with HDFC Credila, Avanse, and Prodigy, students can access both collateral and non-collateral education loans up to ₹60 Lakhs." },
  { q: "Which universities accept my IELTS/PTE score?", a: "Most UK, Australian, Canadian, and Irish institutions accept overall IELTS 6.5 (no band below 6.0) or PTE 58+. Many also accept Duolingo or provide waiver letters for English-medium graduates." },
  { q: "How do I apply for a student visa?", a: "Our dedicated visa cell prepares your financial portfolio, verifies CAS/I-20 documentation, schedules biometrics, and conducts thorough mock interview rehearsals to ensure 99.4% approval." },
  { q: "Can Aegis help with accommodation?", a: "Yes. We partner with leading international PBSAs (Purpose-Built Student Accommodations) like AmberStudent and Casita to secure verified halls within walking distance of your campus." },
  { q: "Can I study abroad with my academic score?", a: "Absolutely. With 100+ partner universities across 11+ countries, we find strong programs tailored to every profile, whether you have a 90%+ or 55% aggregate." },
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
            Clarity & Guidance
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-5 text-left font-bold text-base text-[#071228] flex justify-between items-center bg-[#FDFBF7] hover:bg-slate-50 transition"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-5 text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
