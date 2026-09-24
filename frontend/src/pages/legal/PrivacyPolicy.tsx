import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, Globe } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => (
  <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
        <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#C5A059]">Privacy Policy</span>
      </div>

      {/* Header */}
      <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-[#C5A059]/20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-4 border border-emerald-500/30">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Last Updated: January 2026 • GDPR & DPDP Compliant</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          At Aegis Overseas Education Services, we are committed to safeguarding the confidentiality, integrity, and privacy of prospective students, parents, and website visitors.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs space-y-8 text-neutral-700 text-sm leading-relaxed">
        
        <section>
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#C5A059]" />
            1. Information We Collect
          </h2>
          <p className="mb-2">
            To provide comprehensive overseas educational counseling, university admissions processing, and visa assistance, we collect personal information you voluntarily provide through our online forms, consultation booking requests, and document submissions:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600">
            <li><strong>Contact Details:</strong> Full Name, Email Address, Phone / WhatsApp Number, City of Residence.</li>
            <li><strong>Academic History:</strong> High School and Undergraduate Mark Sheets, Transcripts, Graduation Certificates, Current CGPA/Percentage, Backlog History.</li>
            <li><strong>Test Scores:</strong> IELTS, PTE, TOEFL, GRE, GMAT, SAT, or Duolingo scorecards and registration numbers.</li>
            <li><strong>Immigration Information:</strong> Passport copies, nationality status, previous visa applications or refusal records (where relevant to avoid repeat refusals).</li>
            <li><strong>Financial Overview:</strong> Self-declared annual education budgets or loan requirements to assess university affordability and embassy financial criteria.</li>
          </ul>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3 flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#C5A059]" />
            2. How We Use Your Information
          </h2>
          <p className="mb-2">We utilize your personal information exclusively for educational counseling purposes:</p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600">
            <li>Evaluating admission eligibility against specific university criteria in the UK, USA, Canada, Australia, Germany, Ireland, and New Zealand.</li>
            <li>Submitting authorized university applications and scholarship dossiers on your behalf.</li>
            <li>Scheduling 1-on-1 counseling sessions, mock interviews, and test preparation classes.</li>
            <li>Sending critical updates regarding application deadlines, university offers, CAS/I-20 issuances, and visa requirements.</li>
          </ul>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3 flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#C5A059]" />
            3. Information Sharing & Third-Party Disclosures
          </h2>
          <p className="mb-2">
            Aegis Overseas maintains a strict zero-spam policy. <strong>We NEVER sell, trade, or rent your personal contact information</strong> to third-party marketing companies or lead aggregators. Information is shared strictly with:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600">
            <li>Partner universities and colleges to which you explicitly authorize us to submit your admissions application.</li>
            <li>Accredited financial institutions and NBFC education loan partners only if you explicitly request education loan sanction assistance.</li>
            <li>Authorized regulatory and visa processing bodies (e.g. VFS Global, high commissions) in accordance with applicable immigration laws.</li>
          </ul>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#C5A059]" />
            4. Data Security & Retention
          </h2>
          <p>
            All electronic files and confidential academic records transmitted to Aegis Overseas are encrypted in transit via SSL/TLS encryption and stored on secure cloud servers with restricted role-based access. Documents are retained only for the duration necessary to support your university placement and visa processing, after which they can be permanently deleted upon written request.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            5. Contact Our Data Protection Officer
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, wish to access or update your information, or request the deletion of your records, please reach out to our privacy compliance team at:
          </p>
          <div className="mt-3 p-4 bg-[#FAF7F0] rounded-xl border border-[#E6C687]/40 text-xs">
            <p><strong>Aegis Overseas Education Services</strong></p>
            <p>Email: <a href="mailto:privacy@aegisoverseas.com" className="text-amber-700 hover:underline">privacy@aegisoverseas.com</a></p>
            <p>Address: Somajiguda, Hyderabad, Telangana, India</p>
          </div>
        </section>

      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
