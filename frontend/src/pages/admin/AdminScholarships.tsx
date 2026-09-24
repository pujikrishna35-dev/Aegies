import React, { useState, useEffect } from 'react';
import {
  Award,
  Search,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  Calendar,
  Building2,
  RefreshCw,
  Star
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminScholarships: React.FC = () => {
  const [scholarships, setScholarships] = useState<any[]>([
    {
      id: 'sch-1',
      name: 'Vice-Chancellor Global Excellence Scholarship',
      university: 'University of Birmingham',
      country: 'UK',
      amount: '£4,000 – £5,000 Tuition Fee Waiver',
      eligibility: 'Outstanding academic background (75%+ in graduation) with unconditional offer.',
      deadline: '2026-06-30',
      description: 'Prestigious award dedicated to high-achieving international postgraduate students.',
      applicationUrl: 'https://birmingham.ac.uk/scholarships',
      featured: true,
      status: 'ACTIVE',
    },
    {
      id: 'sch-2',
      name: 'New American University Scholar Award',
      university: 'Arizona State University',
      country: 'USA',
      amount: 'Up to $15,000 / year renewable',
      eligibility: 'Automatic consideration upon university application with 3.5+ GPA equivalent.',
      deadline: '2026-05-01',
      description: 'Merit-based financial award based on academic achievement and SAT/GRE/IELTS performance.',
      applicationUrl: 'https://asu.edu/scholarships',
      featured: true,
      status: 'ACTIVE',
    },
    {
      id: 'sch-3',
      name: 'University Excellence Scholarship (South Asia)',
      university: 'University of Wollongong',
      country: 'Australia',
      amount: '20% to 30% Tuition Fee Reduction',
      eligibility: 'Applicants from India, Nepal, and Sri Lanka with 70%+ aggregate in previous study.',
      deadline: '2026-07-15',
      description: 'Encouraging South Asian academic talent across engineering, IT, and business faculties.',
      applicationUrl: 'https://uow.edu.au/scholarships',
      featured: true,
      status: 'ACTIVE',
    },
    {
      id: 'sch-4',
      name: 'DAAD Helmut-Schmidt-Programme',
      university: 'Public Universities Consortium',
      country: 'Germany',
      amount: 'Full Tuition + €934 Monthly Living Stipend',
      eligibility: 'First degree with exceptional marks in social science, economics, or law.',
      deadline: '2026-07-31',
      description: 'Funded by the German Federal Foreign Office for master degrees in public policy and good governance.',
      applicationUrl: 'https://daad.de',
      featured: false,
      status: 'ACTIVE',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    university: '',
    country: 'UK',
    amount: '',
    eligibility: '',
    deadline: '2026-07-31',
    description: '',
    applicationUrl: '',
    featured: false,
    status: 'ACTIVE',
  });

  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/scholarships');
      if (Array.isArray(data) && data.length > 0) setScholarships(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      university: '',
      country: 'UK',
      amount: '£3,000 – £5,000',
      eligibility: '70%+ in previous degree',
      deadline: '2026-08-31',
      description: '',
      applicationUrl: 'https://aegisoverseas.com',
      featured: false,
      status: 'ACTIVE',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (sch: any) => {
    setEditingItem(sch);
    setFormData({ ...sch });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setScholarships(scholarships.map((s) => (s.id === editingItem.id ? { ...s, ...formData } : s)));
      try {
        await adminFetch(`/scholarships/${editingItem.id}`, { method: 'PUT', body: JSON.stringify(formData) });
      } catch {}
    } else {
      const newSch = { id: 'sch-' + Date.now(), ...formData };
      setScholarships([newSch, ...scholarships]);
      try {
        await adminFetch('/scholarships', { method: 'POST', body: JSON.stringify(newSch) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this scholarship program?')) {
      setScholarships(scholarships.filter((s) => s.id !== id));
      try {
        await adminFetch(`/scholarships/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = scholarships.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Scholarships Manager</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} funding schemes
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Publish and manage institutional waivers, government funding programs, and merit grants.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchScholarships}
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
            <span>Add Scholarship</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search scholarship name, country, or awarding university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Scholarship</th>
                <th className="py-3.5 px-4">University & Country</th>
                <th className="py-3.5 px-4">Award Value</th>
                <th className="py-3.5 px-4">Deadline</th>
                <th className="py-3.5 px-4">Eligibility Summary</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((sch) => (
                <tr key={sch.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      {sch.featured && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />}
                      <span>{sch.name}</span>
                    </div>
                    {sch.applicationUrl && (
                      <a
                        href={sch.applicationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-amber-700 hover:underline flex items-center gap-1 mt-0.5"
                      >
                        <span>Apply Portal</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800">{sch.university}</div>
                    <span className="text-[11px] text-slate-500">{sch.country}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-extrabold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 text-xs">
                      {sch.amount}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{sch.deadline || 'Rolling'}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate">{sch.eligibility}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={sch.status || 'ACTIVE'} />
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(sch)}
                        className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(sch.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Scholarship' : 'Add New Scholarship'}
        subtitle="Specify eligibility threshold, awarding institution, and deadlines"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Scholarship Title *</label>
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Awarding University</label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Country</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="UK">United Kingdom</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="Ireland">Ireland</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Amount / Coverage *</label>
              <input
                type="text"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="e.g. £4,000 Fee Waiver or 30% Off"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Application Deadline</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Eligibility Criteria</label>
            <textarea
              rows={2}
              value={formData.eligibility}
              onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Official Application Link</label>
            <input
              type="url"
              value={formData.applicationUrl}
              onChange={(e) => setFormData({ ...formData, applicationUrl: e.target.value })}
              placeholder="https://..."
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured-sch"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
            />
            <label htmlFor="featured-sch" className="text-xs font-semibold text-slate-700 cursor-pointer">
              Feature this scholarship on public homepage banner
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
              Save Scholarship
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminScholarships;
