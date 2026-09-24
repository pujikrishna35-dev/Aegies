import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Search,
  Plus,
  Edit2,
  Trash2,
  Building2,
  Video,
  Image as ImageIcon,
  Star,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminStudentStories: React.FC = () => {
  const [stories, setStories] = useState<any[]>([
    {
      id: 'story-1',
      studentName: 'Praveen Chalamalasetty',
      photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
      country: 'United Kingdom',
      university: 'University of Birmingham',
      course: 'MSc Data Science & Artificial Intelligence',
      story: 'Moving from Andhra Pradesh to the historic Edgbaston campus in Birmingham was the turning point in my career. With Aegis team guidance on coursework prerequisite checks and pre-departure briefings, settlement was seamless.',
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'story-2',
      studentName: 'Harshitha Kamineni',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      country: 'United States',
      university: 'Arizona State University',
      course: 'MS Industrial Engineering',
      story: 'Aegis helped me review my statement of purpose 4 times until it was airtight. I secured admission with a $10,000 scholarship and now lead the graduate student council at ASU.',
      featured: true,
      status: 'PUBLISHED',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    studentName: '',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    country: 'United Kingdom',
    university: 'University of Birmingham',
    course: 'MSc Data Science',
    story: '',
    videoUrl: '',
    featured: false,
    status: 'PUBLISHED',
  });

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/student-stories');
      if (Array.isArray(data) && data.length > 0) setStories(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      studentName: '',
      photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
      country: 'United Kingdom',
      university: 'University of Birmingham',
      course: 'MSc Program',
      story: '',
      videoUrl: '',
      featured: false,
      status: 'PUBLISHED',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (story: any) => {
    setEditingItem(story);
    setFormData({ ...story });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setStories(stories.map((s) => (s.id === editingItem.id ? { ...s, ...formData } : s)));
      try {
        await adminFetch(`/student-stories/${editingItem.id}`, { method: 'PUT', body: JSON.stringify(formData) });
      } catch {}
    } else {
      const newStory = { id: 'story-' + Date.now(), ...formData };
      setStories([...stories, newStory]);
      try {
        await adminFetch('/student-stories', { method: 'POST', body: JSON.stringify(newStory) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this student journey story?')) {
      setStories(stories.filter((s) => s.id !== id));
      try {
        await adminFetch(`/student-stories/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = stories.filter(
    (s) =>
      s.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Student Success Stories</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} stories
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Inspiring journey articles and video highlights of Aegis Overseas students studying worldwide.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchStories}
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
            <span>Add Success Story</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by student name, country, or university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:border-amber-400/60 transition-all"
          >
            <div className="p-5">
              <div className="flex items-start gap-3.5">
                <img
                  src={s.photoUrl}
                  alt={s.studentName}
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-xs"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold text-slate-900 truncate flex items-center gap-1.5">
                      {s.featured && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
                      <span>{s.studentName}</span>
                    </h2>
                    <StatusBadge status={s.status} />
                  </div>
                  <div className="text-xs font-semibold text-[#C5A059] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{s.university}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{s.course} • {s.country}</div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-slate-700 leading-relaxed italic border border-slate-100">
                "{s.story}"
              </div>
            </div>

            <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleOpenEdit(s)}
                className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-white rounded-lg border border-transparent hover:border-slate-200"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(s.id)}
                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-white rounded-lg border border-transparent hover:border-slate-200"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Story' : 'Add Student Journey'}
        subtitle="Share student achievements, testimonials, and media highlights"
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Host Country</label>
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Degree Course</label>
              <input
                type="text"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Photo URL</label>
            <input
              type="url"
              value={formData.photoUrl}
              onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Journey Narrative</label>
            <textarea
              rows={3}
              required
              value={formData.story}
              onChange={(e) => setFormData({ ...formData, story: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured-story"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 rounded text-amber-600"
            />
            <label htmlFor="featured-story" className="text-xs font-semibold text-slate-700 cursor-pointer">
              Feature on website home carousel
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
              Save Story
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminStudentStories;
