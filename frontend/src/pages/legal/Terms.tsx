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
            1. Our Services
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-2">
            Aegis provides overseas education counselling, course and institution selection, application assistance, documentation guidance and pre-departure support. Service scope, fees and responsibilities will be confirmed in a written agreement before payment.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Visa assistance follows destination-country rules. Regulated immigration advice will be provided only by an appropriately authorised professional.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            2. Admissions and Visa Decisions
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Universities, authorities, lenders and employers make their own decisions regarding admissions, scholarships, visas, loans, employment and immigration. Aegis does not guarantee approvals, processing times, employment, earnings or permanent residence.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            3. Student Responsibilities
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Students must provide accurate, complete and genuine documents, review applications, meet deadlines and follow institutional and immigration requirements. Aegis will not knowingly submit false documents. Students under 18 must involve a parent or legal guardian in service agreements.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            4. Fees and Payments
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Our written agreement will specify service fees, taxes, payment stages and third-party charges. University, visa, examination, insurance, travel and accommodation costs are separate unless expressly included. Payments must use approved channels, and students should obtain receipts.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            5. Cancellation and Refunds
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Before payment, Aegis will provide a written cancellation and refund policy covering eligibility, service deductions, third-party payments and refund timelines. Third-party refunds follow the provider’s terms and applicable law, without removing statutory consumer rights.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            6. Third-Party Providers and Relationships
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Universities, lenders and other providers operate under their own terms. Aegis will clarify whether it acts as an adviser, referral partner or authorised representative. Relevant commissions and referral relationships will be disclosed; website listings do not automatically indicate representation.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            7. Information on This Website
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Course availability, fees, scholarships, admission requirements and visa rules may change. Students should verify current details with official sources before making commitments.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            8. Privacy
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Personal information is handled according to our Privacy Policy. Application consent does not automatically authorise unrelated marketing.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            9. Compliance with Applicable Laws
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Aegis aims to conduct its business honestly and responsibly, following applicable laws, regulations and professional standards within the agreed scope of services.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            10. Limitation of Responsibility
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-2">
            Aegis is responsible for its agreed services as required by law but cannot control matters beyond its reasonable control, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600 mb-2">
            <li>Decisions by universities, immigration authorities, government departments, banks and other independent parties.</li>
            <li>Admission or visa refusals, scholarship decisions, policy changes and processing delays.</li>
            <li>Incorrect, incomplete or fraudulent information supplied by students or third parties.</li>
            <li>Losses or delays caused by third-party actions, technical failures or government decisions.</li>
            <li>Independent decisions by students, employers, accommodation providers and other service providers.</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed">
            Aegis does not guarantee admissions, visas, scholarships, loans, employment or other outcomes controlled by independent parties.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            11. Scope of Services and Legal Compliance
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Aegis will make reasonable efforts to comply with applicable laws and provide only the services agreed upon. Legal or regulated immigration advice will be provided only by an appropriately authorised professional. Students must provide genuine information, review applications and follow relevant requirements.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            12. Responsibility and Consumer Rights
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Aegis remains responsible for its services, acts, omissions and contractual obligations as required by law. Nothing in these Terms limits liability or consumer rights that cannot legally be excluded, including applicable remedies for fraud.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            13. Complaints and Disputes
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Contact Aegis at <a href="mailto:info@aegisoverseas.com" className="text-amber-700 underline hover:text-amber-800">info@aegisoverseas.com</a>, providing your name, service reference and concern. We will acknowledge complaints within the applicable time period and aim to resolve them. Indian law governs these Terms, without restricting access to consumer commissions or other competent authorities.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            14. Updates
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Updated Terms will reflect any revisions. Changes will not retrospectively alter an existing paid service agreement without an appropriate legal basis or agreement.
          </p>
        </section>

      </div>
    </div>
  </div>
);

export default Terms;
