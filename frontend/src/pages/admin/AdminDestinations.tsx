import React, { useState, useEffect } from 'react';
import {
  Globe2,
  Edit2,
  CheckCircle2,
  FileText,
  DollarSign,
  HelpCircle,
  ExternalLink,
  RefreshCw,
  Building2
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminDestinations: React.FC = () => {
  const [destinations, setDestinations] = useState<any[]>([
    {
      id: 'dst-1',
      name: 'United Kingdom',
      code: 'UK',
      currency: 'GBP (£)',
      heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      description: 'One-year master degrees, globally recognized Russell Group institutions, and a 2-year Graduate Route visa.',
      universitiesCount: 160,
      averageTuition: '£14,000 – £28,000 / year',
      postStudyWorkVisa: '2 Years (3 Years for PhD)',
      status: 'ACTIVE',
    },
    {
      id: 'dst-2',
      name: 'United States of America',
      code: 'USA',
      currency: 'USD ($)',
      heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80',
      description: 'World-leading universities, unmatched cutting-edge research opportunities, and up to 3 years of STEM OPT extensions.',
      universitiesCount: 400,
      averageTuition: '$25,000 – $48,000 / year',
      postStudyWorkVisa: 'Up to 3 Years (STEM OPT)',
      status: 'ACTIVE',
    },
    {
      id: 'dst-3',
      name: 'Canada',
      code: 'Canada',
      currency: 'CAD ($)',
      heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
      description: 'Affordable world-class education, high standard of living, and attractive Post-Graduation Work Permit (PGWP).',
      universitiesCount: 100,
      averageTuition: 'CAD $18,000 – $36,000 / year',
      postStudyWorkVisa: 'Up to 3 Years PGWP',
      status: 'ACTIVE',
    },
    {
      id: 'dst-4',
      name: 'Australia',
      code: 'Australia',
      currency: 'AUD ($)',
      heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
      description: 'Group of Eight (Go8) world-leading research universities, generous post-study work rights, and supreme quality of life.',
      universitiesCount: 42,
      averageTuition: 'AUD $30,000 – $46,000 / year',
      postStudyWorkVisa: '2 to 4 Years',
      status: 'ACTIVE',
    },
    {
      id: 'dst-5',
      name: 'Germany',
      code: 'Germany',
      currency: 'EUR (€)',
      heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
      description: 'Tuition-free public universities, world engineering hub, and 18-month stay-back job seeker visa.',
      universitiesCount: 80,
      averageTuition: '€0 to €3,000 / year',
      postStudyWorkVisa: '18 Months Job Seeker',
      status: 'ACTIVE',
    },
    {
      id: 'dst-6',
      name: 'Ireland',
      code: 'Ireland',
      currency: 'EUR (€)',
      heroImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1200&q=80',
      description: 'Silicon Docks European tech headquarters (Google, Meta, Apple, Pfizer) with 2-year post-study work visa.',
      universitiesCount: 25,
      averageTuition: '€12,000 – €24,000 / year',
      postStudyWorkVisa: '2 Years (Third Level Scheme)',
      status: 'ACTIVE',
    },
    {
      id: 'dst-7',
      name: 'New Zealand',
      code: 'NewZealand',
      currency: 'NZD ($)',
      heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
      description: 'All 8 state universities ranked in the global top 3%, stunning natural beauty, and up to 3 years post-study work rights.',
      universitiesCount: 8,
      averageTuition: 'NZD $26,000 – $40,000 / year',
      postStudyWorkVisa: 'Up to 3 Years',
      status: 'ACTIVE',
    },
    {
      id: 'dst-8',
      name: 'Europe (General)',
      code: 'Europe',
      currency: 'EUR (€)',
      heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
      description: 'France, Netherlands, Sweden, Italy, and Poland offering affordable English-taught degrees with Schengen visa travel.',
      universitiesCount: 150,
      averageTuition: '€6,000 – €18,000 / year',
      postStudyWorkVisa: '1 to 2 Years',
      status: 'ACTIVE',
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    currency: '',
    heroImage: '',
    description: '',
    averageTuition: '',
    postStudyWorkVisa: '',
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/destinations');
      if (Array.isArray(data) && data.length > 0) setDestinations(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenEdit = (dest: any) => {
    setEditingItem(dest);
    setFormData({ ...dest });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setDestinations(destinations.map((d) => (d.code === editingItem.code ? { ...d, ...formData } : d)));
      try {
        await adminFetch(`/destinations/${editingItem.code}`, { method: 'PUT', body: JSON.stringify(formData) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Study Destinations</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              8 Countries
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage immigration rules, post-study work visa rights, living costs, and featured content for public destination pages.
          </p>
        </div>

        <button
          onClick={fetchDestinations}
          disabled={loading}
          className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors w-fit"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {destinations.map((dest) => (
          <div
            key={dest.code}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:border-amber-400/60 transition-all group"
          >
            <div>
              <div className="relative h-36 overflow-hidden bg-slate-900">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-bold text-sm tracking-tight">{dest.name}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-400 text-slate-950">
                    {dest.code}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <p className="text-xs text-slate-600 line-clamp-2">{dest.description}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">PSW Visa:</span>
                    <span className="font-bold text-amber-800">{dest.postStudyWorkVisa}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Avg Tuition:</span>
                    <span className="font-semibold text-slate-800">{dest.averageTuition}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Universities:</span>
                    <span className="font-semibold text-slate-800">{dest.universitiesCount}+ Institutions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => handleOpenEdit(dest)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Configure Destination</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Configure ${editingItem?.name || 'Destination'}`}
        subtitle="Update immigration visa summary, tuition estimates, and hero imagery"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Destination Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Currency Code</label>
              <input
                type="text"
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Post-Study Work Visa</label>
              <input
                type="text"
                value={formData.postStudyWorkVisa}
                onChange={(e) => setFormData({ ...formData, postStudyWorkVisa: e.target.value })}
                placeholder="e.g. 2 Years"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Average Tuition Benchmark</label>
            <input
              type="text"
              value={formData.averageTuition}
              onChange={(e) => setFormData({ ...formData, averageTuition: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hero Image URL</label>
            <input
              type="url"
              value={formData.heroImage}
              onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Destination Overview Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 font-bold text-xs text-slate-950"
            >
              Update Destination
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminDestinations;
