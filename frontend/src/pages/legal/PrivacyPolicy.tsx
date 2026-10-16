import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale } from 'lucide-react';

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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold mb-4 border border-[#C5A059]/30">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Privacy Policy • Effective 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          Aegis Overseas Education Services Pvt Ltd (“Aegis”, “we”, “our”, “us”) respects the privacy of students, parents, applicants and website visitors. This policy explains how we collect, use, store, share and protect personal information through <a href="https://aegisoverseas.com/" target="_blank" rel="noopener noreferrer" className="text-[#E6C687] underline hover:text-[#F5DE88]">aegisoverseas.com</a> and our services, in accordance with applicable laws.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs space-y-8 text-neutral-700 text-sm leading-relaxed">
        
        <section>
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            1. Introduction
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We handle personal information responsibly under applicable Indian laws. Where consent is legally required, we will obtain it separately. Visiting our website does not automatically constitute consent to every type of data processing.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            2. Personal Information We Collect
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-2">
            We may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600 mb-3">
            <li><strong>Contact details:</strong> Name, phone number, email, address and guardian details.</li>
            <li><strong>Academic and professional details:</strong> Qualifications, marksheets, test scores, course preferences, CV and employment history.</li>
            <li><strong>Application and identity details:</strong> Passport information, application forms and visa documents.</li>
            <li><strong>Financial details:</strong> Sponsorship documents, service payments, invoices and refunds.</li>
            <li><strong>Technical information:</strong> IP address, browser, device, approximate location, cookies and website usage data, depending on our website configuration.</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed">
            Sensitive information may be collected when necessary and protected as required by law. Please do not submit passwords, OTPs or unnecessary sensitive information through ordinary forms or email.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            3. How We Collect Information
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We collect information through enquiry forms, emails, calls, consultations and applications; from parents or authorised partners where permitted; and through website logs, cookies or lawful public sources where relevant.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            4. How We Use Information
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We use personal information to respond to enquiries, provide counselling, support applications and visa documentation, communicate deadlines, manage payments and complaints, maintain records, protect security, improve services and send permitted promotional communications.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            5. Consent and Your Choices
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Where required, we obtain consent and explain its purpose. You may withdraw consent or request correction or deletion where applicable, subject to legal obligations and lawful exceptions. Essential service communications may continue even if you opt out of marketing.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            6. Sharing Personal Information
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We may share relevant information with universities, application partners, examination providers, government authorities, banks, insurers, accommodation providers, technology vendors, professional advisers and law-enforcement authorities where authorised or legally required. Aegis does not sell personal information or disclose it for unrelated marketing without an appropriate legal basis.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            7. International Transfers
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Overseas applications may require information to be transferred outside India. We will follow applicable transfer requirements and use appropriate safeguards where required. Students should also review the privacy policies of overseas institutions and providers.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            8. Data Security
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Aegis aims to protect information through access controls, secure storage and transfers, confidentiality measures and appropriate technical and organisational safeguards. No electronic system is completely secure. We will address security incidents and provide notifications where legally required.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            9. Data Retention and Deletion
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We retain information only as long as reasonably necessary for services, legal obligations, recordkeeping and dispute resolution. Information will be securely deleted or anonymised when no longer required, unless retention is legally permitted or required. Retention periods depend on the information type and applicable requirements.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            10. Cookies and Similar Technologies
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Our website may use cookies for functionality, security and analytics, depending on the tools enabled. Where required, non-essential cookies will be used only with appropriate consent. You may manage cookies through browser settings or an available website preference tool.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            11. Marketing Communications
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We may send service updates about enquiries, applications and appointments. Promotional messages by email, phone, SMS or WhatsApp will follow applicable consent and legal requirements. You may opt out of marketing, but essential service communications may continue.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            12. Children and Students Under 18
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We handle children's personal information according to applicable law and obtain parental or guardian consent where required. Parents or legal guardians may contact us about a child's information, subject to identity and authority verification.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            13. Recruitment and Student Testimonials
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Recruitment information, including CVs and qualifications, may be used to assess applications and manage recruitment. Student photographs, testimonials and success stories will be published only with appropriate permission or another lawful basis. Publicity consent is separate from consultancy consent.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            14. Third-Party Websites and Services
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Our website may link to universities, government portals, payment providers and other external websites. Aegis does not control their privacy practices or security. Please review their privacy policies before sharing information directly.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            15. Your Rights and Requests
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Subject to applicable law, you may request access to information, correction, completion or deletion, withdraw consent, raise grievances and exercise other available data-protection rights. We may verify your identity and retain information where legally required.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            16. Privacy Grievances and Contact Details
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            For privacy questions, requests or complaints, contact:
          </p>
          <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-[#E6C687]/40 text-neutral-700 space-y-1">
            <p className="font-bold text-[#071228]">Aegis Overseas Education Services Pvt Ltd</p>
            <p>
              Email: <a href="mailto:info@aegisoverseas.com" className="text-amber-700 underline hover:text-amber-800">info@aegisoverseas.com</a>
            </p>
            <p>
              Website: <a href="https://aegisoverseas.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-800">aegisoverseas.com</a>
            </p>
          </div>
          <p className="text-neutral-600 leading-relaxed mt-3">
            Include your name, contact details, request and relevant reference number. Avoid sending passwords or unnecessary sensitive documents. Grievances will be handled within applicable legal timeframes.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            17. Legal Compliance and Interpretation
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            This policy describes Aegis's privacy practices under applicable law. It does not limit any statutory rights or obligations that cannot legally be excluded. Where this policy conflicts with mandatory law, the applicable legal requirement prevails.
          </p>
        </section>

        <section className="pt-6 border-t border-neutral-100">
          <h2 className="text-lg font-bold font-display text-[#071228] mb-3">
            18. Changes to This Privacy Policy
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We may update this policy when our services, technology, data practices or applicable laws change. Updated terms will be published on our website, and any required notice or fresh consent will be provided where applicable.
          </p>
        </section>

      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
