import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  Search,
  Plus,
  Edit2,
  Trash2,
  Star,
  RefreshCw,
  Building2
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([
    {
      id: 'test-1',
      studentName: 'THOTA SAI KUMAR REDDY',
      photoUrl: '/images/reviews/thota-sai-kumar-reddy.jpg',
      course: 'Higher Education Abroad',
      university: 'Global Admissions',
      country: 'International',
      testimonial: 'I had an excellent experience with Aegis Consultancy. The entire process was handled professionally and smoothly from start to finish. A special thanks to Siva sir and Gopal sir for their outstanding support and dedication.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-2',
      studentName: 'Deverapalli Kushi',
      photoUrl: '/images/reviews/deverapalli-kushi.jpg',
      course: 'Master’s Program in the UK',
      university: 'UK University Admissions',
      country: 'UK',
      testimonial: 'I had an excellent experience with Aegis Overseas Education services while planning my higher studies for a master’s program in the UK. Thanks to their efforts, I was able to secure admission to one of my dream universities! Heartfelt thanks to Gopal Reddy sir.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-3',
      studentName: 'Jaswanth kumar Nallu',
      photoUrl: '/images/reviews/jaswanth-kumar-nallu.jpg',
      course: 'Visa Process & Interview Prep',
      university: 'International Degree',
      country: 'Abroad',
      testimonial: 'I am extremely happy and grateful to Aegis Overseas Education services for their constant support and guidance throughout my visa process. My sincere thanks to Gopal sir for his constant support and guidance until I received my VISA.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-4',
      studentName: 'Reema Panthalukaran',
      photoUrl: '/images/reviews/reema-panthalukaran.jpg',
      course: 'US Higher Studies',
      university: 'US University Admissions',
      country: 'USA',
      testimonial: 'I had an extraordinary experience with Aegis Consultancy for my higher studies. The mock interviews they conducted were especially helpful and made me feel confident. Thanks to Aegis Consultancy, I received my US visa without any complications.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-5',
      studentName: 'Rohith Reddy',
      photoUrl: '/images/reviews/rohith-reddy.jpg',
      course: 'Australian Higher Studies',
      university: 'Australian University Admissions',
      country: 'Australia',
      testimonial: 'Aegis consultancy made my Australian student visa process simple and hassle-free. Their guidance and constant support were amazing. And I received my visa within three days of applying.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-6',
      studentName: 'Manu Madhala',
      photoUrl: '/images/reviews/manu-madhala.png',
      course: 'Higher Education & UK Visa',
      university: 'UK University Admissions',
      country: 'UK',
      testimonial: 'From day one, their team expertly handled my entire process, from university selection and interview preparation to visa application. I had very good experience with Siva sir, very supportive and friendly, ensuring a seamless experience.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-7',
      studentName: 'MOHAMMED HUSAMUDDIN AHMED',
      photoUrl: '/images/reviews/mohammed-husamuddin-ahmed.jpg',
      course: 'Overseas Admissions & Advisory',
      university: 'Global Partner Institutions',
      country: 'Overseas',
      testimonial: 'My experience at Aegis Overseas Education Services was outstanding! The expert faculty provided invaluable guidance, making complex processes easy to understand. Their quick service ensured all my queries were addressed promptly.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-8',
      studentName: 'Varshitha Rao',
      photoUrl: '/images/reviews/varshitha-rao.png',
      course: 'Study Abroad Counseling',
      university: 'Global University Admissions',
      country: 'International',
      testimonial: 'Choosing Aegis Overseas for my study abroad journey was one of the best decisions I\'ve ever made. The counsellors were incredibly knowledgeable and provided personalized guidance that made the entire process smooth and stress-free.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-9',
      studentName: 'Krishna Vijay',
      photoUrl: '/images/reviews/krishna-vijay.jpg',
      course: 'UK Higher Education',
      university: 'UK University Admissions',
      country: 'UK',
      testimonial: 'Even though it took me one year to get my UK visa because of the mistakes I have done, they have been with very much patience till the end. Gopal reddy sir, Krishna sir and Siva sir have been with me throughout my journey.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-10',
      studentName: 'Pawan Royalz',
      photoUrl: '/images/reviews/pawan-royalz.png',
      course: 'Master\'s in the UK',
      university: 'UK Master\'s Program',
      country: 'UK',
      testimonial: 'Right from day one I approached them, my process was completely taken over by the team with timely coordination starting from University selection, interview guidance and visa process. Sincere thanks to Gopal Reddy sir (MD) who was with me throughout.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-11',
      studentName: 'Rishita Reddy',
      photoUrl: '/images/reviews/rishita-reddy.jpg',
      course: 'Student VISA & Abroad Studies',
      university: 'Global University Admissions',
      country: 'International',
      testimonial: 'I am very much satisfied with the service I\'ve received at Aegis Overseas Education services starting from the day I approached them for my student VISA process. Most importantly, I would like to thank Mr. Gopal reddy sir (MS-UK) for being very patient and guiding me.',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    },
    {
      id: 'test-12',
      studentName: 'Harsha Vaka',
      photoUrl: '/images/reviews/harsha-vaka.jpg',
      course: 'Graduation in the UK',
      university: 'UK University Admissions',
      country: 'UK',
      testimonial: 'I had the privilege of working with aegis overseas for my graduation process in the UK. Their extensive knowledge of the UK education system, proactive approach, and genuine care made my graduation process smooth and memorable.',
      rating: 5,
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
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    course: '',
    university: '',
    country: 'UK',
    testimonial: '',
    rating: 5,
    featured: true,
    status: 'PUBLISHED',
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/testimonials');
      if (Array.isArray(data) && data.length > 0) setTestimonials(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      studentName: '',
      photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
      course: 'MSc Master Degree',
      university: 'Partner University',
      country: 'UK',
      testimonial: '',
      rating: 5,
      featured: true,
      status: 'PUBLISHED',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (t: any) => {
    setEditingItem(t);
    setFormData({ ...t });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setTestimonials(testimonials.map((t) => (t.id === editingItem.id ? { ...t, ...formData } : t)));
      try {
        await adminFetch(`/testimonials/${editingItem.id}`, { method: 'PUT', body: JSON.stringify(formData) });
      } catch {}
    } else {
      const newT = { id: 'test-' + Date.now(), ...formData };
      setTestimonials([newT, ...testimonials]);
      try {
        await adminFetch('/testimonials', { method: 'POST', body: JSON.stringify(newT) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this student testimonial?')) {
      setTestimonials(testimonials.filter((t) => t.id !== id));
      try {
        await adminFetch(`/testimonials/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = testimonials.filter(
    (t) =>
      t.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Verified Testimonials</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} reviews
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Display authentic reviews from successfully placed students across UK, USA, Germany, and Australia.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchTestimonials}
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
            <span>Add Testimonial</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by student name or university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-amber-400/60 transition-all"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src={t.photoUrl}
                    alt={t.studentName}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h2 className="text-xs font-bold text-slate-900">{t.studentName}</h2>
                    <div className="text-[10px] text-slate-400">{t.country}</div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500" />
                  ))}
                </div>
              </div>

              <div className="text-xs font-semibold text-slate-800 flex items-center gap-1 mb-2">
                <Building2 className="w-3 h-3 text-[#C5A059]" />
                <span>{t.university}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-4">
                "{t.testimonial}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <StatusBadge status={t.status || 'PUBLISHED'} />
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleOpenEdit(t)}
                  className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
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
        title={editingItem ? 'Edit Testimonial' : 'Add Testimonial'}
        subtitle="Manage student quotes and verified feedback"
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Country</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Star Rating (1-5)</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value={5}>5 Stars (Exceptional)</option>
                <option value={4}>4 Stars (Good)</option>
                <option value={3}>3 Stars (Average)</option>
              </select>
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
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Review Quote</label>
            <textarea
              rows={3}
              required
              value={formData.testimonial}
              onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
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
              Save Testimonial
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminTestimonials;
