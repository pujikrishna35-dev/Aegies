import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';
import { SUBJECT_CATEGORIES, SubjectCategory } from '../../data/courseCatalogue';

interface CourseEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  initialCourseType?: string;
  initialDestination?: string;
}

const WHATSAPP_TARGET_NUMBER = '918500722284';

export const CourseEnquiryModal: React.FC<CourseEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
  initialCourseType,
  initialDestination
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subjectArea, setSubjectArea] = useState(initialSubject || '');
  const [courseType, setCourseType] = useState(initialCourseType || '');
  const [studyLevel, setStudyLevel] = useState('');
  const [destination, setDestination] = useState(initialDestination || '');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Lock body scroll and update prefilled fields when modal opens or props change
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialSubject) setSubjectArea(initialSubject);
      else if (!subjectArea && SUBJECT_CATEGORIES.length > 0) setSubjectArea(SUBJECT_CATEGORIES[0].title);
      
      if (initialCourseType) setCourseType(initialCourseType);
      if (initialDestination) setDestination(initialDestination);
      setIsSubmitted(false);
      setErrors({});
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialSubject, initialCourseType, initialDestination]);

  // Selected subject category to populate course type options
  const selectedCategory: SubjectCategory | undefined = SUBJECT_CATEGORIES.find(
    (c) => c.title.toLowerCase() === subjectArea.toLowerCase() || c.id === subjectArea || c.slug === subjectArea
  );

  const availableCourseTypes = selectedCategory?.exampleCourseTypes || [];

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!phone.trim() || phone.trim().length < 8) newErrors.phone = 'Valid phone number is required';
    if (!subjectArea) newErrors.subjectArea = 'Please select a subject area';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `🎓 *Course & Subject Enquiry - Aegis Overseas*`,
      ``,
      `👤 *Full Name:* ${fullName.trim()}`,
      `📞 *Phone Number:* ${phone.trim()}`,
      `📧 *Email:* ${email.trim()}`,
      `📚 *Subject Area:* ${subjectArea || 'General'}`,
      courseType ? `🎯 *Preferred Course Type:* ${courseType}` : null,
      studyLevel ? `🎓 *Study Level:* ${studyLevel}` : null,
      destination ? `🌍 *Preferred Destination:* ${destination}` : null,
      message.trim() ? `📝 *Message / Notes:* ${message.trim()}` : null,
      ``,
      `_I would like counselling on suitable universities, admission pathways and intake dates._`
    ].filter(Boolean);

    return `https://wa.me/${WHATSAPP_TARGET_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = buildWhatsAppMessage();
    setWhatsappUrl(url);
    setIsSubmitted(true);

    // Open WhatsApp in a new tab safely
    try {
      window.open(url, '_blank');
    } catch (err) {
      console.error('Could not auto-open WhatsApp:', err);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center sm:p-4 overflow-hidden animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div 
        className="relative bg-white w-full sm:max-w-xl max-h-[92dvh] sm:max-h-[90vh] flex flex-col rounded-t-[28px] sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-enquiry-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Top Header: Mobile Swipe Pill + Title + Subtitle + Close X Button */}
        <div className="px-5 pt-3 pb-3.5 sm:px-8 sm:pt-6 sm:pb-4 shrink-0 border-b border-slate-100 bg-white z-10 flex flex-col">
          {/* Mobile Swipe-Down Pill Handle */}
          <div className="sm:hidden w-12 h-1 bg-slate-300 rounded-full mx-auto mb-2.5" />

          <div className="flex items-start justify-between gap-3">
            <div className="pr-2 min-w-0">
              <h3 id="course-enquiry-modal-title" className="text-xl sm:text-2xl font-display font-black text-[#071228] tracking-tight leading-snug">
                Enquire About This Course
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                Share a few details and our counsellor will get in touch with suitable options.
              </p>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto px-5 py-4 sm:px-8 sm:py-6 flex-1 overscroll-contain">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] ${
                    errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/40'
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] ${
                    errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/40'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] ${
                    errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/40'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
              </div>

              {/* Subject Area & Preferred Course Type Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Subject Area
                  </label>
                  <select
                    value={subjectArea}
                    onChange={(e) => {
                      setSubjectArea(e.target.value);
                      setCourseType(''); // reset course type on subject change
                    }}
                    className="w-full min-w-0 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 text-base sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="">Select subject area</option>
                    {SUBJECT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.title}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Course Type
                  </label>
                  <select
                    value={courseType}
                    onChange={(e) => setCourseType(e.target.value)}
                    className="w-full min-w-0 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 text-base sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="">Select course type</option>
                    {availableCourseTypes.map((opt) => (
                      <option key={opt.id} value={opt.title}>
                        {opt.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Study Level & Preferred Destination Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Study Level
                  </label>
                  <select
                    value={studyLevel}
                    onChange={(e) => setStudyLevel(e.target.value)}
                    className="w-full min-w-0 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 text-base sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="">Select study level</option>
                    <option value="Foundation / Pathway">Foundation / Pathway</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's">Bachelor's Degree</option>
                    <option value="Postgraduate Certificate / Diploma">PG Certificate / Diploma</option>
                    <option value="Master's">Master's Degree</option>
                    <option value="MBA">MBA</option>
                    <option value="Research Degree / PhD">Research Degree / PhD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full min-w-0 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 text-base sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="">Select destination</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧</option>
                    <option value="United States">United States 🇺🇸</option>
                    <option value="Canada">Canada 🇨🇦</option>
                    <option value="Australia">Australia 🇦🇺</option>
                    <option value="New Zealand">New Zealand 🇳🇿</option>
                    <option value="Europe">European Destinations 🇪🇺</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Message (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your interests, background or any specific questions..."
                  className="w-full min-w-0 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 text-base sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-[#071228] hover:bg-[#0f1f3d] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-slate-900/10 active:scale-98 transition-all cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">💬</span>
                <span>Send Enquiry on WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Your information is secure and will only be used to respond to your enquiry.</span>
              </p>
            </form>
          ) : (
            /* Confirmation View */
            <div className="py-6 px-2 text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 ring-8 ring-emerald-50">
                <span className="text-3xl">💬</span>
              </div>
              
              <h3 className="text-2xl font-display font-black text-[#071228] tracking-tight mb-2">
                Enquiry Submitted!
              </h3>
              
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed mb-6">
                Thank you for your interest. Our counselling team will connect with you shortly on WhatsApp to discuss suitable universities and programmes.
              </p>

              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 mb-6 text-xs text-amber-900 text-left space-y-1.5">
                <div className="font-bold text-[#071228]">Enquiry Summary:</div>
                <div>• <strong>Subject:</strong> {subjectArea}</div>
                {courseType && <div>• <strong>Course Type:</strong> {courseType}</div>}
                {studyLevel && <div>• <strong>Study Level:</strong> {studyLevel}</div>}
                {destination && <div>• <strong>Destination:</strong> {destination}</div>}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>Continue on WhatsApp</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseEnquiryModal;
