import React, { useState, useEffect } from 'react';
import {
  FileCheck,
  Search,
  Plus,
  Edit2,
  Trash2,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Filter,
  RefreshCw,
  User,
  ExternalLink
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

const STAGES = [
  'COUNSELLING',
  'UNIVERSITY_SELECTED',
  'DOCUMENTS_COLLECTED',
  'APPLICATION_SUBMITTED',
  'OFFER_LETTER',
  'VISA',
  'PRE_DEPARTURE',
  'COMPLETED',
];

export const AdminApplications: React.FC = () => {
  const [applications, setApplications] = useState<any[]>([
    {
      id: 'app-101',
      studentName: 'Rohan Verma',
      studentEmail: 'rohan.v@example.com',
      universityName: 'University of Birmingham',
      courseName: 'MSc Advanced Computer Science',
      country: 'UK',
      stage: 'OFFER_LETTER',
      intake: 'Sept 2026',
      counsellor: 'Pooja Sharma',
      notes: 'Conditional offer letter received. Awaiting degree final transcripts.',
      updatedAt: 'Today, 10:20 AM',
    },
    {
      id: 'app-102',
      studentName: 'Ananya Deshmukh',
      studentEmail: 'ananya.d@example.com',
      universityName: 'Arizona State University',
      courseName: 'MS Data Science',
      country: 'USA',
      stage: 'APPLICATION_SUBMITTED',
      intake: 'Fall 2026',
      counsellor: 'Pooja Sharma',
      notes: 'Application submitted via portal. I-20 documentation under preparation.',
      updatedAt: 'Yesterday',
    },
    {
      id: 'app-103',
      studentName: 'Karthik Naidu',
      studentEmail: 'karthik.n@example.com',
      universityName: 'Technical University of Munich',
      courseName: 'MSc Mechanical Engineering',
      country: 'Germany',
      stage: 'DOCUMENTS_COLLECTED',
      intake: 'Winter 2026',
      counsellor: 'Director Desk',
      notes: 'VPD evaluation completed via uni-assist.',
      updatedAt: 'Sep 6, 2026',
    },
    {
      id: 'app-104',
      studentName: 'Sneha Reddy',
      studentEmail: 'sneha.reddy@example.com',
      universityName: 'University of Wollongong',
      courseName: 'Master of Information Technology',
      country: 'Australia',
      stage: 'VISA',
      intake: 'July 2026',
      counsellor: 'Pooja Sharma',
      notes: 'GTE assessment approved. Visa subclass 500 lodged.',
      updatedAt: 'Sep 7, 2026',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    universityName: 'University of Birmingham',
    courseName: '',
    country: 'UK',
    stage: 'COUNSELLING',
    intake: 'Fall 2026',
    counsellor: 'Pooja Sharma',
    notes: '',
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/applications');
      if (Array.isArray(data) && data.length > 0) setApplications(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      studentName: '',
      studentEmail: '',
      universityName: 'University of Birmingham',
      courseName: '',
      country: 'UK',
      stage: 'COUNSELLING',
      intake: 'Fall 2026',
      counsellor: 'Pooja Sharma',
      notes: '',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (app: any) => {
    setEditingItem(app);
    setFormData({ ...app });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setApplications(applications.map((a) => (a.id === editingItem.id ? { ...a, ...formData } : a)));
      try {
        await adminFetch(`/applications/${editingItem.id}/stage`, {
          method: 'PATCH',
          body: JSON.stringify({ stage: formData.stage }),
        });
      } catch {}
    } else {
      const newApp = { id: 'app-' + Date.now(), updatedAt: 'Just now', ...formData };
      setApplications([newApp, ...applications]);
      try {
        await adminFetch('/applications', { method: 'POST', body: JSON.stringify(newApp) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleStageChange = async (id: string, stage: string) => {
    setApplications(applications.map((a) => (a.id === id ? { ...a, stage } : a)));
    try {
      await adminFetch(`/applications/${id}/stage`, { method: 'PATCH', body: JSON.stringify({ stage }) });
    } catch {}
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this university application?')) {
      setApplications(applications.filter((a) => a.id !== id));
      try {
        await adminFetch(`/applications/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = applications.filter((a) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      a.studentName.toLowerCase().includes(q) ||
      a.universityName.toLowerCase().includes(q) ||
      a.courseName.toLowerCase().includes(q);
    const matchesStage = stageFilter === 'ALL' || a.stage === stageFilter;
    return matchesSearch && matchesStage;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Student Application Pipeline</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} applications
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track student milestones across the 8 rigorous admission stages from Counselling through Visa grant.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchApplications}
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
            <span>Create Application</span>
          </button>
        </div>
      </div>

      {/* 8 Stages Visual Progress Strip */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
        <div className="flex items-center justify-between min-w-[700px] gap-2">
          {STAGES.map((stg, idx) => {
            const count = applications.filter((a) => a.stage === stg).length;
            return (
              <button
                key={stg}
                onClick={() => setStageFilter(stageFilter === stg ? 'ALL' : stg)}
                className={`flex-1 p-2.5 rounded-xl border text-center transition-all ${
                  stageFilter === stg
                    ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400/20'
                    : 'border-slate-100 bg-slate-50/60 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] font-bold text-slate-400 uppercase">Stage {idx + 1}</div>
                <div className="text-xs font-extrabold text-slate-900 mt-0.5 truncate">{stg.replace(/_/g, ' ')}</div>
                <div className="text-[11px] font-bold text-amber-800 mt-1">{count} students</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by student name, university, or course..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <select
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
          className="text-xs py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="ALL">All 8 Stages</option>
          {STAGES.map((s) => (
            <option key={s} value={s}>
              {s.replace(/_/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">University Target</th>
                <th className="py-3.5 px-4">Course Program</th>
                <th className="py-3.5 px-4">Intake & Counsellor</th>
                <th className="py-3.5 px-4">Admission Stage</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{app.studentName}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{app.studentEmail}</div>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-800 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{app.universityName}</span>
                    <span className="text-[10px] font-semibold text-slate-400">({app.country})</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">{app.courseName}</td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-800">{app.intake || 'Fall 2026'}</div>
                    <div className="text-[11px] text-slate-400">{app.counsellor || 'Pooja Sharma'}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <select
                      value={app.stage}
                      onChange={(e) => handleStageChange(app.id, e.target.value)}
                      className="text-[11px] font-bold py-1 px-2 rounded-lg border border-slate-200 bg-white text-slate-800 focus:ring-1 focus:ring-amber-500"
                    >
                      {STAGES.map((s) => (
                        <option key={s} value={s}>
                          {s.replace(/_/g, ' ')}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(app)}
                        className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(app.id)}
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
        title={editingItem ? 'Edit Application Record' : 'Create Application Entry'}
        subtitle="Track university filing progress, documents, and counselor notes"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Name *</label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Email *</label>
              <input
                type="email"
                required
                value={formData.studentEmail}
                onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">University Name</label>
              <input
                type="text"
                required
                value={formData.universityName}
                onChange={(e) => setFormData({ ...formData, universityName: e.target.value })}
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Course Program</label>
              <input
                type="text"
                required
                value={formData.courseName}
                onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                placeholder="e.g. MSc Data Science"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Intake</label>
              <input
                type="text"
                value={formData.intake}
                onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                placeholder="e.g. Sept 2026"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Current Milestone Stage</label>
              <select
                value={formData.stage}
                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {s.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Assigned Counsellor</label>
              <select
                value={formData.counsellor}
                onChange={(e) => setFormData({ ...formData, counsellor: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="Pooja Sharma">Pooja Sharma (Senior)</option>
                <option value="Director Desk">Director Desk</option>
                <option value="Surendra Babu">Surendra Babu</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Application Notes</label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
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
              Save Application
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminApplications;
