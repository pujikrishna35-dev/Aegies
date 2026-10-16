import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  X, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  MapPin, 
  FileText, 
  MessageSquare,
  ChevronDown 
} from 'lucide-react';
import { SCHOLARSHIPS } from '../../data/scholarships';

interface ScholarshipConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultScholarshipName?: string;
  defaultDestination?: string;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const ScholarshipConsultationModal: React.FC<ScholarshipConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultScholarshipName = 'University Merit & Excellence Awards',
  defaultDestination = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [studyLevel, setStudyLevel] = useState('');
  const [destination, setDestination] = useState(defaultDestination);
  const [scholarshipName, setScholarshipName] = useState(defaultScholarshipName);
  const [backgroundNotes, setBackgroundNotes] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Available scholarships for dropdown list
  const availableScholarships = useMemo(() => {
    const list = SCHOLARSHIPS.map(s => s.name);
    if (!list.includes('University Merit & Excellence Awards')) {
      list.unshift('University Merit & Excellence Awards');
    }
    if (defaultScholarshipName && !list.includes(defaultScholarshipName)) {
      list.unshift(defaultScholarshipName);
    }
    return list;
  }, [defaultScholarshipName]);

  useEffect(() => {
    if (defaultScholarshipName) {
      setScholarshipName(defaultScholarshipName);
    }
    if (defaultDestination) {
      setDestination(defaultDestination);
    }
  }, [defaultScholarshipName, defaultDestination, isOpen]);

  // Reset scroll position to top whenever modal opens
  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setError('Please enter a valid phone number.');
      return;
    }
    if (!studyLevel) {
      setError('Please select your current study level.');
      return;
    }
    if (!destination) {
      setError('Please select your preferred study destination.');
      return;
    }
    if (!agreed) {
      setError('Please agree to receive guidance regarding your enquiry.');
      return;
    }

    // Build the formatted WhatsApp message
    const lines = [
      '🎓 *Scholarship Consultation Enquiry - Aegis Overseas*',
      '',
      `• *Full Name:* ${fullName.trim()}`,
      `• *Email:* ${email.trim()}`,
      `• *Phone:* ${phone.trim()}`,
      `• *Current Study Level:* ${studyLevel}`,
      `• *Preferred Destination:* ${destination}`,
      `• *Interested Scholarship:* ${scholarshipName.trim() || 'General Scholarship Guidance'}`,
      backgroundNotes.trim() ? `• *Background / Profile:* ${backgroundNotes.trim()}` : '',
      '',
      '_I would like to evaluate my eligibility and discuss application guidance with an Aegis advisor._'
    ].filter(Boolean);

    const message = lines.join('\n');
    const waUrl = `https://wa.me/918500722284?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end sm:justify-center items-center sm:p-4 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div 
        className="relative bg-white w-full sm:max-w-xl max-h-[92dvh] sm:max-h-[90vh] flex flex-col rounded-t-[28px] sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        {/* Pinned Top Header: Drag handle (mobile) + Aegis Logo + Close Button */}
        <div className="px-5 pt-3 pb-3 sm:px-8 sm:pt-6 sm:pb-4 shrink-0 border-b border-slate-100 bg-white z-10">
          {/* Mobile Swipe-Down Pill Handle */}
          <div className="sm:hidden w-12 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <img
                src="/images/aegis-icon.png"
                alt="Aegis Overseas"
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <div className="text-left">
                <span className="font-display text-[13px] sm:text-[14px] font-extrabold tracking-tight text-[#071228] block leading-tight">
                  AEGIS OVERSEAS
                </span>
                <span className="text-[7px] sm:text-[7.5px] uppercase tracking-[0.2em] font-semibold text-purple-900/80 block">
                  — EDUCATION SERVICES —
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Close consultation modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div 
          ref={scrollContainerRef}
          className="px-5 py-4 sm:px-8 sm:py-6 overflow-y-auto overscroll-contain flex-1"
        >
          {!isSubmitted ? (
            <div>
              {/* Modal Heading & Subtitle */}
              <div className="mb-4 sm:mb-6">
                <h2 id="consultation-modal-title" className="text-xl sm:text-2xl lg:text-[24px] font-display font-bold text-[#071228] tracking-tight leading-snug">
                  Check Your Eligibility / Book a Consultation
                </h2>
                <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Share a few details and our counsellor will get in touch with personalised guidance on this scholarship and other suitable opportunities.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-1.5 font-bold text-slate-700 text-xs sm:text-[13px] mb-1">
                    <User className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Full Name <span className="text-red-500">*</span></span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-amber-500/80 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="flex items-center gap-1.5 font-bold text-slate-700 text-xs sm:text-[13px] mb-1">
                    <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Email Address <span className="text-red-500">*</span></span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-amber-500/80 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="flex items-center gap-1.5 font-bold text-slate-700 text-xs sm:text-[13px] mb-1">
                    <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Phone Number <span className="text-red-500">*</span></span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Level & Destination in 2 Columns on Desktop, 1 Column on Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="flex items-center gap-1.5 font-bold text-slate-700 text-xs sm:text-[13px] mb-1">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Current Study Level <span className="text-red-500">*</span></span>
                    </label>
                    <div className="relative">
                      <select
                        value={studyLevel}
                        onChange={(e) => setStudyLevel(e.target.value)}
                        className="w-full appearance-none px-3.5 py-2 sm:py-2.5 pr-9 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all cursor-pointer"
                        required
                      >
                        <option value="">Select study level</option>
                        <option value="Undergraduate (Bachelor's)">Undergraduate (Bachelor's)</option>
                        <option value="Postgraduate (Master's)">Postgraduate (Master's)</option>
                        <option value="Doctoral (PhD / Research)">Doctoral (PhD / Research)</option>
                        <option value="High School / 12th Standard">High School / 12th Standard</option>
                        <option value="Working Professional">Working Professional</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 font-bold text-slate-700 text-xs sm:text-[13px] mb-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Preferred Destination <span className="text-red-500">*</span></span>
                    </label>
                    <div className="relative">
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full appearance-none px-3.5 py-2 sm:py-2.5 pr-9 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all cursor-pointer"
                        required
                      >
                        <option value="">Select destination</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Europe">Europe</option>
                        <option value="Multiple Destinations">Multiple Destinations</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Interested Scholarship Dropdown */}
                <div>
                  <label className="flex items-center gap-1.5 font-bold text-slate-700 text-xs sm:text-[13px] mb-1">
                    <FileText className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Interested Scholarship <span className="text-red-500">*</span></span>
                  </label>
                  <div className="relative">
                    <select
                      value={scholarshipName}
                      onChange={(e) => setScholarshipName(e.target.value)}
                      className="w-full appearance-none px-3.5 py-2 sm:py-2.5 pr-9 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all cursor-pointer"
                      required
                    >
                      {availableScholarships.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Your Background (Optional) */}
                <div>
                  <label className="flex items-center gap-1.5 font-bold text-slate-700 text-xs sm:text-[13px] mb-1">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Your Background <span className="text-slate-400 font-normal">(Optional)</span></span>
                  </label>
                  <textarea
                    rows={2}
                    value={backgroundNotes}
                    onChange={(e) => setBackgroundNotes(e.target.value)}
                    placeholder="Tell us about your academic background, GPA/percentage, work experience or specific questions..."
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent resize-none transition-all"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-0.5">
                  <input
                    id="consent-check"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer shrink-0"
                  />
                  <label htmlFor="consent-check" className="text-xs sm:text-[13px] text-slate-600 leading-snug cursor-pointer select-none">
                    I agree to be contacted by Aegis Overseas regarding my enquiry and scholarship matching.
                  </label>
                </div>

                {/* Big Green WhatsApp Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 px-6 rounded-2xl bg-[#00A859] hover:bg-[#00924d] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.99]"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>
                </div>

                {/* Security and Privacy Notice */}
                <div className="pt-0.5 pb-2 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Your information is secure and will only be used to respond to your enquiry.</span>
                </div>
              </form>
            </div>
          ) : (
            /* Submission Prepared Screen */
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                Enquiry Prepared for WhatsApp!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                We have formatted your scholarship details and opened WhatsApp. <strong>Please tap Send in your WhatsApp app</strong> to initiate your chat with an Aegis scholarship advisor.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <p className="font-bold text-slate-800">Scholarship: <span className="font-normal text-slate-600">{scholarshipName}</span></p>
                <p className="font-bold text-slate-800">Official Advisor WhatsApp: <span className="font-normal text-emerald-700">+91 85007 22284</span></p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00A859] hover:bg-[#00924d] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  <span>Open WhatsApp Again</span>
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipConsultationModal;
