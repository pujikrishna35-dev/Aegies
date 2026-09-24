import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Search,
  Plus,
  Edit2,
  Trash2,
  Compass,
  GraduationCap,
  FileText,
  ShieldCheck,
  Banknote,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminServices: React.FC = () => {
  const [services, setServices] = useState<any[]>([
    {
      id: 'srv-1',
      title: 'Free 1-on-1 Profile Counselling',
      slug: 'counselling',
      summary: 'Personalized evaluation of academic scores, financial background, and global career ambitions.',
      icon: 'Compass',
      featured: true,
      status: 'ACTIVE',
      inquiriesCount: 342,
    },
    {
      id: 'srv-2',
      title: 'University & Course Shortlisting',
      slug: 'university-selection',
      summary: 'Data-backed university shortlisting based on admission acceptance probability and budget.',
      icon: 'GraduationCap',
      featured: true,
      status: 'ACTIVE',
      inquiriesCount: 289,
    },
    {
      id: 'srv-3',
      title: 'SOP, LOR & Application Processing',
      slug: 'applications',
      summary: 'End-to-end document proofreading, resume structuring, and error-free portal submissions.',
      icon: 'FileText',
      featured: true,
      status: 'ACTIVE',
      inquiriesCount: 215,
    },
    {
      id: 'srv-4',
      title: 'Visa Guidance & Mock Interviews',
      slug: 'visa',
      summary: 'Comprehensive visa documentation filing and consular interview simulation with 99.2% success.',
      icon: 'ShieldCheck',
      featured: true,
      status: 'ACTIVE',
      inquiriesCount: 310,
    },
    {
      id: 'srv-5',
      title: 'Education Loan Assistance',
      slug: 'education-loans',
      summary: 'Fast collateral and non-collateral education loan sanctions with premier banking partners.',
      icon: 'Banknote',
      featured: false,
      status: 'ACTIVE',
      inquiriesCount: 164,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    description: '',
    icon: 'Sparkles',
    featured: false,
    status: 'ACTIVE',
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/services');
      if (Array.isArray(data) && data.length > 0) setServices(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      summary: '',
      description: '',
      icon: 'Sparkles',
      featured: false,
      status: 'ACTIVE',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (srv: any) => {
    setEditingItem(srv);
    setFormData({ ...srv });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setServices(services.map((s) => (s.id === editingItem.id ? { ...s, ...formData } : s)));
      try {
        await adminFetch(`/services/${editingItem.id}`, { method: 'PUT', body: JSON.stringify(formData) });
      } catch {}
    } else {
      const newSrv = { id: 'srv-' + Date.now(), inquiriesCount: 0, ...formData };
      setServices([...services, newSrv]);
      try {
        await adminFetch('/services', { method: 'POST', body: JSON.stringify(newSrv) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this service listing?')) {
      setServices(services.filter((s) => s.id !== id));
      try {
        await adminFetch(`/services/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Student Services Catalog</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} active
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Overseas counseling offerings, loan processing, visa guidance, forex, and pre-departure programs.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchServices}
            disabled={loading}
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          </button>
          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Service</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search services by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((srv) => (
          <div
            key={srv.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-amber-400/60 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <StatusBadge status={srv.status || 'ACTIVE'} />
              </div>

              <h2 className="text-sm font-bold text-slate-900">{srv.title}</h2>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{srv.summary}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400">
                {srv.inquiriesCount} Inquiries Received
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleOpenEdit(srv)}
                  className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(srv.id)}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Service' : 'Add New Service'}
        subtitle="Configure student counseling and overseas relocation service details"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Short Summary *</label>
            <input
              type="text"
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Detailed Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured-srv"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
            />
            <label htmlFor="featured-srv" className="text-xs font-semibold text-slate-700 cursor-pointer">
              Feature on website homepage
            </label>
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
              Save Service
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminServices;
