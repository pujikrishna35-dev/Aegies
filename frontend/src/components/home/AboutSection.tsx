import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
            Integrity & Mentorship
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228] leading-tight">
            YOUR TRUSTED PARTNER <br />
            FOR GLOBAL EDUCATION
          </h2>
          <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Hyderabad with operations across Bangalore and Vijayawada, Aegis Overseas Education Services has spent over 15 years empowering Indian students to excel in the world's most prestigious universities.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "3,500+ successful admissions with verified alumni in 11+ countries",
              "Direct tie-ups with 100+ accredited universities and government colleges",
              "Transparent fee structures, zero hidden costs, and honest course guidance",
              "Complimentary 1-on-1 profile evaluation and university shortlisting session"
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-[#8A1538] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-block px-8 py-3.5 rounded-xl bg-[#8A1538] text-white font-bold text-sm hover:bg-burgundy-900 transition shadow-md"
            >
              Learn More About Aegis
            </Link>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
            alt="Students collaborating"
            className="w-full h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
