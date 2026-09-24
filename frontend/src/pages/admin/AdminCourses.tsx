import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Plus,
  Edit2,
  Trash2,
  Building2,
  Clock,
  Award,
  RefreshCw,
  Tag
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminCourses: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([
    {
      id: 'crs-1',
      name: 'MSc Advanced Computer Science',
      category: 'Computer Science & IT',
      country: 'United Kingdom',
      university: 'University of Birmingham',
      duration: '1 Year Full-Time',
      level: 'Postgraduate',
      tuition: '£27,500 / year',
      intakes: ['September 2026', 'January 2027'],
      status: 'ACTIVE',
    },
    {
      id: 'crs-2',
      name: 'Master of Science in Data Science',
      category: 'Data Science & AI',
      country: 'United States',
      university: 'Arizona State University',
      duration: '2 Years',
      level: 'Postgraduate',
      tuition: '$34,000 / year',
      intakes: ['Fall 2026', 'Spring 2027'],
      status: 'ACTIVE',
    },
    {
      id: 'crs-3',
      name: 'Master of Business Administration (Global MBA)',
      category: 'Business & Management',
      country: 'Australia',
      university: 'University of Wollongong',
      duration: '1.5–2 Years',
      level: 'Postgraduate',
      tuition: 'AUD $41,000 / year',
      intakes: ['February 2026', 'July 2026'],
      status: 'ACTIVE',
    },
    {
      id: 'crs-4',
      name: 'MSc Mechanical & Automotive Engineering',
      category: 'Engineering',
      country: 'Germany',
      university: 'Technical University of Munich (TUM)',
      duration: '2 Years',
      level: 'Postgraduate',
      tuition: '€0 (Tuition Free)',
      intakes: ['Winter (October) 2026'],
      status: 'ACTIVE',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Computer Science & IT',
    country: 'United Kingdom',
    university: 'University of Birmingham',
    duration: '1 Year',
    level: 'Postgraduate',
    tuition: '£22,000 / year',
    intakes: 'September, January',
    eligibility: '60%+ in Bachelor degree with IELTS 6.5',
    status: 'ACTIVE',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/courses');
      if (Array.isArray(data) && data.length > 0) setCourses(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      category: 'Computer Science & IT',
      country: 'United Kingdom',
      university: 'University of Birmingham',
      duration: '1 Year',
      level: 'Postgraduate',
      tuition: '£22,000 / year',
      intakes: 'September 2026',
      eligibility: '60%+ in Bachelor degree with IELTS 6.5',
      status: 'ACTIVE',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (crs: any) => {
    setEditingItem(crs);
    setFormData({
      ...crs,
      intakes: Array.isArray(crs.intakes) ? crs.intakes.join(', ') : crs.intakes || '',
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      intakes: formData.intakes.split(',').map((i) => i.trim()),
    };
    if (editingItem) {
      setCourses(courses.map((c) => (c.id === editingItem.id ? { ...c, ...payload } : c)));
      try {
        await adminFetch(`/courses/${editingItem.id}`, { method: 'PUT', body: JSON.stringify(payload) });
      } catch {}
    } else {
      const newCourse = { id: 'crs-' + Date.now(), ...payload };
      setCourses([newCourse, ...courses]);
      try {
        await adminFetch('/courses', { method: 'POST', body: JSON.stringify(newCourse) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this course curriculum?')) {
      setCourses(courses.filter((c) => c.id !== id));
      try {
        await adminFetch(`/courses/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = courses.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === 'ALL' || c.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Course Catalog</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} courses
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse and manage academic degree programs, tuition fees, eligibility, and intake cycles.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchCourses}
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
            <span>Add Course</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search course title, discipline, or university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
          className="text-xs py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="ALL">All Levels</option>
          <option value="Postgraduate">Postgraduate</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Doctorate">Doctorate (PhD)</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Program & Discipline</th>
                <th className="py-3.5 px-4">University & Country</th>
                <th className="py-3.5 px-4">Duration & Level</th>
                <th className="py-3.5 px-4">Annual Tuition</th>
                <th className="py-3.5 px-4">Intake Cycles</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((crs) => (
                <tr key={crs.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{crs.name}</div>
                    <div className="text-[11px] text-amber-800 font-medium flex items-center gap-1 mt-0.5">
                      <Tag className="w-3 h-3 text-[#C5A059]" />
                      <span>{crs.category}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800">{crs.university}</div>
                    <span className="text-[11px] text-slate-500">{crs.country}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-800">{crs.duration}</div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {crs.level}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{crs.tuition}</td>
                  <td className="py-3.5 px-4 text-slate-600">
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(crs.intakes) ? (
                        crs.intakes.map((i: string) => (
                          <span key={i} className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                            {i}
                          </span>
                        ))
                      ) : (
                        <span>{crs.intakes}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={crs.status || 'ACTIVE'} />
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(crs)}
                        className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(crs.id)}
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
        title={editingItem ? 'Edit Course Program' : 'Add Course Program'}
        subtitle="Specify curriculum details, university mapping, and tuition"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Course Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category / Discipline</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">University</label>
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
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="Ireland">Ireland</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="e.g. 1 Year Full-Time"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Study Level</label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="Postgraduate">Postgraduate</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tuition Fee</label>
              <input
                type="text"
                value={formData.tuition}
                onChange={(e) => setFormData({ ...formData, tuition: e.target.value })}
                placeholder="e.g. £26,000 / year"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Intakes (Comma Separated)</label>
            <input
              type="text"
              value={formData.intakes}
              onChange={(e) => setFormData({ ...formData, intakes: e.target.value })}
              placeholder="e.g. September 2026, January 2027"
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
              Save Course
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminCourses;
