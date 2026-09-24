import React, { useState, useEffect } from 'react';
import {
  Layers,
  Search,
  Plus,
  Edit2,
  Trash2,
  Clock,
  Award,
  BookOpen,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminTestPreparation: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([
    {
      id: 'tp-1',
      title: 'IELTS Academic Masterclass',
      slug: 'ielts',
      examType: 'IELTS',
      duration: '6 Weeks (45 Hours)',
      fee: '₹9,500',
      mode: 'Hybrid',
      batchSchedule: 'Morning 7:30 AM & Evening 7:00 PM',
      averageScoreIncrease: '+1.5 Band Improvement',
      status: 'ACTIVE',
    },
    {
      id: 'tp-2',
      title: 'GRE Comprehensive Quantitative & Verbal',
      slug: 'gre',
      examType: 'GRE',
      duration: '8 Weeks (60 Hours)',
      fee: '₹18,000',
      mode: 'Online Live',
      batchSchedule: 'Weekend Intensive & Weekday Batches',
      averageScoreIncrease: '318+ Target Average',
      status: 'ACTIVE',
    },
    {
      id: 'tp-3',
      title: 'TOEFL iBT High-Score Accelerator',
      slug: 'toefl',
      examType: 'TOEFL',
      duration: '4 Weeks (30 Hours)',
      fee: '₹8,500',
      mode: 'Online Live',
      batchSchedule: 'Daily 6:30 PM – 8:00 PM',
      averageScoreIncrease: '100+ Benchmark Achieved',
      status: 'ACTIVE',
    },
    {
      id: 'tp-4',
      title: 'PTE Academic Fast-Track',
      slug: 'pte',
      examType: 'PTE',
      duration: '3 Weeks (25 Hours)',
      fee: '₹8,000',
      mode: 'Hybrid',
      batchSchedule: 'Alternate Days & Weekend Batches',
      averageScoreIncrease: '72+ Score Target (8 Band Equivalent)',
      status: 'ACTIVE',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    examType: 'IELTS',
    duration: '6 Weeks',
    fee: '₹9,500',
    mode: 'Hybrid',
    batchSchedule: 'Morning & Evening',
    averageScoreIncrease: '+1.5 Bands',
    status: 'ACTIVE',
  });

  useEffect(() => {
    fetchTestPrep();
  }, []);

  const fetchTestPrep = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/test-preparation');
      if (Array.isArray(data) && data.length > 0) setCourses(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      examType: 'IELTS',
      duration: '6 Weeks',
      fee: '₹10,000',
      mode: 'Hybrid',
      batchSchedule: 'Morning 8:00 AM',
      averageScoreIncrease: '+1.5 Bands',
      status: 'ACTIVE',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (tp: any) => {
    setEditingItem(tp);
    setFormData({ ...tp });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setCourses(courses.map((c) => (c.id === editingItem.id ? { ...c, ...formData } : c)));
      try {
        await adminFetch(`/test-preparation/${editingItem.id}`, { method: 'PUT', body: JSON.stringify(formData) });
      } catch {}
    } else {
      const newTp = { id: 'tp-' + Date.now(), ...formData };
      setCourses([...courses, newTp]);
      try {
        await adminFetch('/test-preparation', { method: 'POST', body: JSON.stringify(newTp) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this test coaching course?')) {
      setCourses(courses.filter((c) => c.id !== id));
      try {
        await adminFetch(`/test-preparation/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.examType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Test Preparation Coaching</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} courses
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage batches, schedules, certified faculty, and fees for IELTS, TOEFL, GRE, GMAT, and PTE.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchTestPrep}
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
            <span>Add Test Course</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by exam title (IELTS, GRE, TOEFL, PTE)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((tp) => (
          <div
            key={tp.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-amber-400/60 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#071228] text-amber-400">
                  {tp.examType}
                </span>
                <StatusBadge status={tp.status || 'ACTIVE'} />
              </div>

              <h2 className="text-base font-bold text-slate-900 mt-2">{tp.title}</h2>

              <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Duration</span>
                  <span className="font-bold text-slate-800">{tp.duration}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Course Fee</span>
                  <span className="font-bold text-amber-800">{tp.fee}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Delivery Mode</span>
                  <span className="font-bold text-slate-800">{tp.mode}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Batch Schedule</span>
                  <span className="font-semibold text-slate-700 truncate block">{tp.batchSchedule}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>{tp.averageScoreIncrease}</span>
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleOpenEdit(tp)}
                  className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(tp.id)}
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
        title={editingItem ? 'Edit Test Preparation' : 'Add Test Course'}
        subtitle="Configure exam coaching parameters, timings, and fees"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Course Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Exam Type</label>
              <select
                value={formData.examType}
                onChange={(e) => setFormData({ ...formData, examType: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="IELTS">IELTS</option>
                <option value="GRE">GRE</option>
                <option value="TOEFL">TOEFL</option>
                <option value="PTE">PTE</option>
                <option value="GMAT">GMAT</option>
                <option value="DUOLINGO">DUOLINGO</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Course Fee</label>
              <input
                type="text"
                value={formData.fee}
                onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Delivery Mode</label>
              <select
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="Hybrid">Hybrid (Classroom + Online)</option>
                <option value="Online Live">Online Live Virtual</option>
                <option value="Classroom">Nellore Classroom</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Score Target Promise</label>
              <input
                type="text"
                value={formData.averageScoreIncrease}
                onChange={(e) => setFormData({ ...formData, averageScoreIncrease: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
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
              Save Course
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminTestPreparation;
