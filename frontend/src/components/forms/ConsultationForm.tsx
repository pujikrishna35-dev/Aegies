'use client';

import React, { useState } from 'react';
import { useConsultation } from '@/hooks/useConsultation';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Send, Sparkles } from 'lucide-react';

interface ConsultationFormProps {
  onSuccessClose?: () => void;
  onSuccess?: () => void;
  defaultDestination?: string;
  initialNotes?: string;
}

export function ConsultationForm({ onSuccessClose, onSuccess, defaultDestination = 'uk', initialNotes = '' }: ConsultationFormProps) {
  const { submitConsultation, loading, success, resetForm } = useConsultation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: defaultDestination,
    studyLevel: 'Postgraduate',
    fieldOfStudy: 'Computer Science & IT',
    preferredOffice: 'Nellore',
    budgetRange: '₹15L - ₹25L',
    message: initialNotes
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitConsultation(formData);
  };

  if (success) {
    return (
      <div className="text-center py-8 px-4">
        <div className="mx-auto w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mb-4 animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h4 className="font-display text-2xl font-bold text-navy-950 mb-2">
          Consultation Booked!
        </h4>
        <p className="text-navy-700 text-sm max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-navy-900">{formData.fullName}</span>. An Aegis Overseas senior counselor ({formData.preferredOffice} office) will reach out to you within 2 business hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="gold"
            onClick={() => {
              resetForm();
              if (onSuccessClose) onSuccessClose();
            }}
          >
            Done
          </Button>
          <a
            href={`https://wa.me/919246220044?text=Hi%20Aegis%20Overseas,%20I%20just%20booked%20a%20consultation%20for%20${encodeURIComponent(formData.fullName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            Chat Now on WhatsApp 💬
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Rohith Reddy"
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. rohith@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
            Target Destination *
          </label>
          <select
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
          >
            <option value="usa">USA 🇺🇸</option>
            <option value="uk">United Kingdom 🇬🇧</option>
            <option value="canada">Canada 🇨🇦</option>
            <option value="australia">Australia 🇦🇺</option>
            <option value="germany">Germany 🇩🇪</option>
            <option value="new-zealand">New Zealand 🇳🇿</option>
            <option value="ireland">Ireland 🇮🇪</option>
            <option value="europe">Other Europe 🇪🇺</option>
            <option value="not-sure">Not Sure Yet (Need Guidance)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
            Degree Level
          </label>
          <select
            value={formData.studyLevel}
            onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
          >
            <option value="Undergraduate">Bachelor's</option>
            <option value="Postgraduate">Master's (MS/MBA)</option>
            <option value="Doctorate">PhD / Doctorate</option>
            <option value="Diploma">Post-Graduate Diploma</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
            Preferred Office
          </label>
          <select
            value={formData.preferredOffice}
            onChange={(e) => setFormData({ ...formData, preferredOffice: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
          >
            <option value="Nellore">Nellore (Head Office)</option>
            <option value="Tirupati">Tirupati Branch</option>
            <option value="Online / Virtual">Online / Zoom Session</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
            Estimated Budget
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
          >
            <option value="Under ₹15 Lakhs">Under ₹15 Lakhs</option>
            <option value="₹15L - ₹25L">₹15L - ₹25L</option>
            <option value="₹25L - ₹40L">₹25L - ₹40L</option>
            <option value="₹40L+">₹40 Lakhs +</option>
            <option value="Looking for Loan/Scholarship">Need Loan/Scholarship</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
          Any specific universities, courses, or questions? (Optional)
        </label>
        <textarea
          rows={2}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. Planning for Fall 2026 intake, looking for GRE waiver & loan options."
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          disabled={loading}
          className="w-full font-semibold shadow-luxury"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-navy-950 border-t-transparent" />
              Scheduling Free Session...
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-navy-950" />
              Confirm Free Consultation Booking
              <Send className="w-4 h-4 ml-1" />
            </span>
          )}
        </Button>
        <p className="text-center text-[11px] text-neutral-500 mt-2">
          🔒 100% Confidential. No Spam. Certified counselors only.
        </p>
      </div>
    </form>
  );
}
