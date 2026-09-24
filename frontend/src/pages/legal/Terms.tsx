import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

export const Terms: React.FC = () => (
  <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
        <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#C5A059]">Terms & Conditions</span>
      </div>

      {/* Header */}
      <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-[#C5A059]/20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold mb-4 border border-[#C5A059]/30">
          <Scale className="w-3.5 h-3.5" />
          <span>Legal Service Agreement • Effective 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          Please review the terms governing educational advisory services, counseling interactions, and university representation provided by Aegis Overseas Education Services.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs space-y-8 text-neutral-700 text-sm leading-relaxed">
        
        <section>
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            1. Scope of Advisory Services
          </h2>
          <p className="mb-2">
            Aegis Overseas Education Services acts as an authorized overseas education advisory and recruitment representative for international universities and colleges. Our advisory scope includes:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600">
            <li>Guidance on university and degree selection based on candidate's expressed preferences and academic track record.</li>
            <li>Admissions document vetting, statement of purpose guidance, and formal university application submission.</li>
            <li>Visa file compilation, document checklists, and mock consular interview coaching.</li>
            <li>Standardized test coaching for IELTS, PTE, TOEFL, GRE, GMAT, and SAT.</li>
          </ul>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            2. Student Responsibilities & Authenticity of Documents
          </h2>
          <p className="mb-2">
            Candidates agree to provide complete, authentic, and accurate academic, biographical, and financial documentation. <strong>Aegis Overseas enforces a strict zero-tolerance policy against forged documents or falsified employment/academic credentials.</strong>
          </p>
          <p className="text-neutral-600">
            Any applicant who submits counterfeit mark sheets, fraudulent bank certificates, or plagiarized statements will have their advisory contract immediately terminated and may be reported to relevant education authorities.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            3. Admissions & Visa Decisions
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            While Aegis Overseas boasts a 99.2% historical visa success rate, <strong>admission decisions are solely at the discretion of university faculty committees, and visa decisions are the exclusive jurisdiction of the respective sovereign immigration department or embassy</strong> (e.g. UK Visas and Immigration, US Department of State, IRCC Canada, Australian Home Affairs). Aegis Overseas does not guarantee or claim influence over sovereign visa decisions.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            4. Fee Policies & Transparent Advisory
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Initial educational counseling and profile evaluation are provided free of charge. Where specialized fees apply (e.g. specialized test prep batches, external credential evaluation fees, or embassy visa filing fees), these will be transparently itemized upfront before any engagement. Direct university tuition fees must always be remitted by the student directly to the university's official bank account or verified portal (Flywire, Convera).
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            5. Governing Law & Jurisdiction
          </h2>
          <p className="text-neutral-600">
            These terms and conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.
          </p>
        </section>

      </div>
    </div>
  </div>
);

export default Terms;
