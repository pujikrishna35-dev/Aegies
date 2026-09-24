import React, { useState, useEffect } from 'react';
import { adminApi } from '../../services/adminApi';
import {
  Settings,
  Save,
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const [settings, setSettings] = useState({
    siteName: 'Aegis Overseas Education Services',
    tagline: 'Your Trusted Gateway to Global Academic Excellence',
    supportEmail: 'contact@aegisoverseas.com',
    supportPhone: '+91 91234 56789',
    admissionsHelpline: '+91 98765 43210',
    emergencyContact: '+91 99887 76655',
    headOfficeAddress: 'Plot 42, Jubilee Enclave, HITEC City, Hyderabad, Telangana 500081',
    branchOffices: 'Vijayawada, Bengaluru, Pune, Dallas (USA)',
    workingHours: 'Monday - Saturday: 9:30 AM - 6:30 PM IST',
    instagramUrl: 'https://instagram.com/aegisoverseas',
    linkedinUrl: 'https://linkedin.com/company/aegisoverseas',
    youtubeUrl: 'https://youtube.com/@aegisoverseas',
    facebookUrl: 'https://facebook.com/aegisoverseas',
    metaTitle: 'Study Abroad Consultants | Aegis Overseas Admissions',
    metaDescription: 'Leading overseas education consultants offering guidance for USA, UK, Canada, Australia, Germany, and Ireland.',
    heroHeadline: 'Shape Your Global Career With Top Ranked Universities Worldwide',
    heroSubheadline: '100% personalized counseling, guaranteed university shortlisting, fast-track visa processing, and end-to-end scholarship support.',
  });

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await adminApi.getSettings();
      if (res.success && res.data) {
        setSettings((prev) => ({ ...prev, ...res.data }));
      }
    } catch (err) {
      console.error('Failed to load settings', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      setSuccessMsg('');
      await adminApi.updateSettings(settings);
      setSuccessMsg('Website configuration and contact settings updated successfully!');
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) {
      console.error('Failed to save settings', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Website & Global Settings</h1>
          <p className="text-sm text-slate-500 mt-1">
            Configure public brand metadata, office locations, helplines, social links, and homepage copy.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-sm font-semibold shadow-sm transition-all disabled:opacity-50"
        >
          <Save className="w-4 h-4 text-gold-400" />
          {saving ? 'Saving Changes...' : 'Save Configuration'}
        </button>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-sm animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Info */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-navy-950 font-bold text-base">
            <Building2 className="w-5 h-5 text-gold-500" />
            General Brand Identity
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Brand Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Brand Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Homepage Hero Copy */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-navy-950 font-bold text-base">
            <Globe className="w-5 h-5 text-gold-500" />
            Homepage Hero Headline & Copy
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Main Hero Headline</label>
            <input
              type="text"
              value={settings.heroHeadline}
              onChange={(e) => setSettings({ ...settings, heroHeadline: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Hero Subheadline / Value Proposition</label>
            <textarea
              rows={3}
              value={settings.heroSubheadline}
              onChange={(e) => setSettings({ ...settings, heroSubheadline: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Contact & Helplines */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-navy-950 font-bold text-base">
            <Phone className="w-5 h-5 text-gold-500" />
            Contact Details & Emergency Helplines
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Support Email</label>
              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Direct Phone</label>
              <input
                type="text"
                value={settings.supportPhone}
                onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Admissions Helpline</label>
              <input
                type="text"
                value={settings.admissionsHelpline}
                onChange={(e) => setSettings({ ...settings, admissionsHelpline: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Emergency 24x7 Helpline</label>
              <input
                type="text"
                value={settings.emergencyContact}
                onChange={(e) => setSettings({ ...settings, emergencyContact: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Working Hours</label>
              <input
                type="text"
                value={settings.workingHours}
                onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Office Addresses */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-navy-950 font-bold text-base">
            <MapPin className="w-5 h-5 text-gold-500" />
            Office Locations & Physical Branches
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Head Office Address</label>
            <input
              type="text"
              value={settings.headOfficeAddress}
              onChange={(e) => setSettings({ ...settings, headOfficeAddress: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Branch Locations</label>
            <input
              type="text"
              value={settings.branchOffices}
              onChange={(e) => setSettings({ ...settings, branchOffices: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-navy-950 font-bold text-base">
            <Share2 className="w-5 h-5 text-gold-500" />
            Social Media Channels
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Instagram URL</label>
              <input
                type="url"
                value={settings.instagramUrl}
                onChange={(e) => setSettings({ ...settings, instagramUrl: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">LinkedIn URL</label>
              <input
                type="url"
                value={settings.linkedinUrl}
                onChange={(e) => setSettings({ ...settings, linkedinUrl: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">YouTube URL</label>
              <input
                type="url"
                value={settings.youtubeUrl}
                onChange={(e) => setSettings({ ...settings, youtubeUrl: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Facebook URL</label>
              <input
                type="url"
                value={settings.facebookUrl}
                onChange={(e) => setSettings({ ...settings, facebookUrl: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-navy-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit action */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-sm font-semibold shadow-md transition-all disabled:opacity-50"
          >
            <Save className="w-4 h-4 text-gold-400" />
            {saving ? 'Saving...' : 'Save All Settings'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default AdminSettings;
