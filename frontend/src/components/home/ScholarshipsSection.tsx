import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2 } from 'lucide-react';

const scholarshipCategories = [
  { title: "University Scholarships", desc: "Institutional fee discounts ranging from 10% to 50% tuition reduction." },
  { title: "Merit Scholarships", desc: "Recognizing high GPAs, standardized test excellence, and academic honors." },
  { title: "Government Scholarships", desc: "Chevening, Fulbright, Australia Awards, and DAAD research grants." },
  { title: "Country Scholarships", desc: "Grants designated specifically for high-achieving international applicants." },
  { title: "Early Bird & Fee Waivers", desc: "Instant $1,000–$5,000 bursaries for early confirmation of acceptance." },
];

export const ScholarshipsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#071228] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Financial Support & Grants
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              YOUR DREAM EDUCATION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                COULD COST LESS THAN YOU THINK.
              </span>
            </h2>
            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              We guide you through thousands of eligible grants and university scholarships, helping our students secure over $5 Million+ in funding.
            </p>
            <div className="mt-8">
              <Link
                to="/scholarships"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition shadow-lg"
              >
                <span>EXPLORE SCHOLARSHIPS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:max-w-lg space-y-4">
            {scholarshipCategories.map((c, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-base">{c.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
