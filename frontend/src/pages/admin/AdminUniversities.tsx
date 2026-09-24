import React, { useState, useEffect } from 'react';
import {
  Building2,
  Search,
  Plus,
  Edit2,
  Trash2,
  MapPin,
  Award,
  Globe2,
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminUniversities: React.FC = () => {
  const [universities, setUniversities] = useState<any[]>([
    {
      id: 'uni-1',
      name: 'University of Oxford',
      country: 'UK',
      city: 'Oxford',
      ranking: 1,
      tuitionRange: '£28,000 - £44,000',
      acceptanceRate: '17%',
      programsCount: 180,
      website: 'https://ox.ac.uk',
      status: 'ACTIVE',
    },
    {
      id: 'uni-2',
      name: 'University of Birmingham',
      country: 'UK',
      city: 'Birmingham',
      ranking: 80,
      tuitionRange: '£18,000 - £28,000',
      acceptanceRate: '65%',
      programsCount: 220,
      website: 'https://birmingham.ac.uk',
      status: 'ACTIVE',
    },
    {
      id: 'uni-3',
      name: 'Arizona State University',
      country: 'USA',
      city: 'Tempe, AZ',
      ranking: 115,
      tuitionRange: '$28,000 - $38,000',
      acceptanceRate: '88%',
      programsCount: 350,
      website: 'https://asu.edu',
      status: 'ACTIVE',
    },
    {
      id: 'uni-4',
      name: 'University of Toronto',
      country: 'Canada',
      city: 'Toronto',
      ranking: 21,
      tuitionRange: 'CAD 35,000 - CAD 58,000',
      acceptanceRate: '43%',
      programsCount: 240,
      website: 'https://utoronto.ca',
      status: 'ACTIVE',
    },
    {
      id: 'uni-5',
      name: 'University of Wollongong',
      country: 'Australia',
      city: 'Wollongong, NSW',
      ranking: 162,
      tuitionRange: 'AUD 32,000 - AUD 44,000',
      acceptanceRate: '68%',
      programsCount: 190,
      website: 'https://uow.edu.au',
      status: 'ACTIVE',
    },
    {
      id: 'uni-6',
      name: 'Technical University of Munich (TUM)',
      country: 'Germany',
      city: 'Munich',
      ranking: 37,
      tuitionRange: '€0 - €4,000',
      acceptanceRate: '28%',
      programsCount: 140,
      website: 'https://tum.de',
      status: 'ACTIVE',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [countryFilter, setCountryFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    country: 'UK',
    city: '',
    ranking: 100,
    tuitionRange: '£18,000 – £26,000',
    acceptanceRate: '60%',
    programsCount: 150,
    website: '',
    status: 'ACTIVE',
  });

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/universities');
      if (Array.isArray(data) && data.length > 0) setUniversities(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      country: 'UK',
      city: '',
      ranking: 100,
      tuitionRange: '£18,000 – £26,000',
      acceptanceRate: '60%',
      programsCount: 150,
      website: '',
      status: 'ACTIVE',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (uni: any) => {
    setEditingItem(uni);
    setFormData({ ...uni });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setUniversities(universities.map((u) => (u.id === editingItem.id ? { ...u, ...formData } : u)));
      try {
        await adminFetch(`/universities/${editingItem.id}`, { method: 'PUT', body: JSON.stringify(formData) });
      } catch {}
    } else {
      const newUni = { id: 'uni-' + Date.now(), ...formData };
      setUniversities([newUni, ...universities]);
      try {
        await adminFetch('/universities', { method: 'POST', body: JSON.stringify(newUni) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this partner university?')) {
      setUniversities(universities.filter((u) => u.id !== id));
      try {
        await adminFetch(`/universities/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = universities.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = countryFilter === 'ALL' || u.country.toLowerCase() === countryFilter.toLowerCase();
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Universities Directory</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} institutions
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Global partner institutions, rankings, tuition benchmarks, and faculty admission requirements.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchUniversities}
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
            <span>Add University</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search university name or campus city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <select
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          className="text-xs py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="ALL">All Countries</option>
          <option value="UK">United Kingdom</option>
          <option value="USA">United States</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="Ireland">Ireland</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">University</th>
                <th className="py-3.5 px-4">Country & Campus</th>
                <th className="py-3.5 px-4">Global Ranking</th>
                <th className="py-3.5 px-4">Estimated Tuition</th>
                <th className="py-3.5 px-4">Acceptance Rate</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((uni) => (
                <tr key={uni.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#C5A059] flex items-center justify-center font-bold text-xs shrink-0">
                        {uni.name.charAt(0)}
                      </div>
                      <div>
                        <div>{uni.name}</div>
                        {uni.website && (
                          <a
                            href={uni.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] text-amber-700 hover:underline flex items-center gap-1 mt-0.5"
                          >
                            <span>Official Portal</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800">{uni.country}</div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{uni.city}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-extrabold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 text-xs">
                      #{uni.ranking}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{uni.tuitionRange}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">{uni.acceptanceRate || 'N/A'}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={uni.status || 'ACTIVE'} />
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(uni)}
                        className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(uni.id)}
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
        title={editingItem ? 'Edit University' : 'Add University Partner'}
        subtitle="Configure institution ranking, city, and tuition brackets"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">University Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Country *</label>
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
                <option value="New Zealand">New Zealand</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Campus City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">QS / Times Rank</label>
              <input
                type="number"
                value={formData.ranking}
                onChange={(e) => setFormData({ ...formData, ranking: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Acceptance Rate</label>
              <input
                type="text"
                value={formData.acceptanceRate}
                onChange={(e) => setFormData({ ...formData, acceptanceRate: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tuition Range</label>
              <input
                type="text"
                value={formData.tuitionRange}
                onChange={(e) => setFormData({ ...formData, tuitionRange: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Official Website URL</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://..."
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
              Save University
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminUniversities;
