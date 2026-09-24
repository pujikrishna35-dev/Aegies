import React, { useState, useEffect } from 'react';
import {
  CalendarCheck,
  Search,
  Plus,
  Trash2,
  Edit2,
  Clock,
  MapPin,
  Phone,
  Mail,
  UserCheck,
  RefreshCw,
  Calendar as CalendarIcon
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminConsultations: React.FC = () => {
  const [consultations, setConsultations] = useState<any[]>([
    {
      id: 'c-101',
      fullName: 'Rahul Varma',
      email: 'rahul.varma@example.com',
      phone: '+91 9848022334',
      destination: 'United Kingdom',
      studyLevel: 'Postgraduate (Masters)',
      fieldOfStudy: 'Data Science',
      preferredOffice: 'Nellore',
      scheduledDate: '2026-09-12',
      scheduledTime: '11:00 AM',
      counsellor: 'Pooja Sharma',
      status: 'CONFIRMED',
      notes: 'Focus on Russell Group universities with £4k+ scholarships.',
    },
    {
      id: 'c-102',
      fullName: 'Sneha Reddy',
      email: 'sneha.reddy@example.com',
      phone: '+91 9440112233',
      destination: 'United States',
      studyLevel: 'Postgraduate',
      fieldOfStudy: 'Computer Science',
      preferredOffice: 'Tirupati',
      scheduledDate: '2026-09-14',
      scheduledTime: '02:30 PM',
      counsellor: 'Pooja Sharma',
      status: 'PENDING',
      notes: 'Interested in Fall 2026 intake and STEM OPT opportunities.',
    },
    {
      id: 'c-103',
      fullName: 'Vikramaditya Rao',
      email: 'vikram.rao@example.com',
      phone: '+91 9988776655',
      destination: 'Germany',
      studyLevel: 'Masters',
      fieldOfStudy: 'Automotive Engineering',
      preferredOffice: 'Nellore',
      scheduledDate: '2026-09-15',
      scheduledTime: '04:00 PM',
      counsellor: 'Director Desk',
      status: 'CONFIRMED',
      notes: 'Tuition-free public universities evaluation requested.',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: 'United Kingdom',
    studyLevel: 'Postgraduate',
    fieldOfStudy: '',
    preferredOffice: 'Nellore',
    scheduledDate: '2026-09-20',
    scheduledTime: '11:00 AM',
    counsellor: 'Pooja Sharma',
    status: 'CONFIRMED',
    notes: '',
  });

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/consultations');
      if (Array.isArray(data) && data.length > 0) setConsultations(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: 'United Kingdom',
      studyLevel: 'Postgraduate',
      fieldOfStudy: '',
      preferredOffice: 'Nellore',
      scheduledDate: '2026-09-20',
      scheduledTime: '11:00 AM',
      counsellor: 'Pooja Sharma',
      status: 'CONFIRMED',
      notes: '',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (c: any) => {
    setEditingItem(c);
    setFormData({ ...c });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setConsultations(consultations.map((c) => (c.id === editingItem.id ? { ...c, ...formData } : c)));
      try {
        await adminFetch(`/consultations/${editingItem.id}/status`, {
          method: 'PATCH',
          body: JSON.stringify({ status: formData.status, counsellor: formData.counsellor }),
        });
      } catch {}
    } else {
      const newC = { id: 'c-' + Date.now().toString().slice(-4), ...formData };
      setConsultations([newC, ...consultations]);
      try {
        await adminFetch('/consultations', { method: 'POST', body: JSON.stringify(newC) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleStatusChange = async (id: string, status: string) => {
    setConsultations(consultations.map((c) => (c.id === id ? { ...c, status } : c)));
    try {
      await adminFetch(`/consultations/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
    } catch {}
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this scheduled consultation?')) {
      setConsultations(consultations.filter((c) => c.id !== id));
      try {
        await adminFetch(`/consultations/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = consultations.filter((c) => {
    const matchesSearch =
      c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Consultation Schedule</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} bookings
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track and manage 1-on-1 counselor appointments across Nellore, Tirupati, and Hyderabad offices.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchConsultations}
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
            <span>Book Consultation Slot</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search consultations by student name, email, or country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="text-xs py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="ALL">All Statuses</option>
          <option value="CONFIRMED">CONFIRMED</option>
          <option value="PENDING">PENDING</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Destination & Level</th>
                <th className="py-3.5 px-4">Appointment Slot</th>
                <th className="py-3.5 px-4">Branch Office</th>
                <th className="py-3.5 px-4">Counsellor</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{c.fullName}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{c.email}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{c.phone}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800">{c.destination}</div>
                    <div className="text-[11px] text-slate-500">{c.studyLevel}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-amber-700 flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
                      <span>{c.scheduledDate}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{c.scheduledTime || '11:00 AM'}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      <span>{c.preferredOffice || 'Nellore'}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">{c.counsellor || 'Pooja Sharma'}</td>
                  <td className="py-3.5 px-4">
                    <select
                      value={c.status}
                      onChange={(e) => handleStatusChange(c.id, e.target.value)}
                      className="text-[11px] font-bold py-1 px-2 rounded-lg border border-slate-200 bg-white"
                    >
                      <option value="CONFIRMED">CONFIRMED</option>
                      <option value="PENDING">PENDING</option>
                      <option value="COMPLETED">COMPLETED</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(c)}
                        className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(c.id)}
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
        title={editingItem ? 'Edit Consultation Booking' : 'Book 1-on-1 Consultation'}
        subtitle="Schedule counselor appointment and room allocation"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Destination</label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Branch Office</label>
              <select
                value={formData.preferredOffice}
                onChange={(e) => setFormData({ ...formData, preferredOffice: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="Nellore">Nellore Branch</option>
                <option value="Tirupati">Tirupati Branch</option>
                <option value="Hyderabad">Hyderabad Branch</option>
                <option value="Online Virtual">Online Video Call</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Date</label>
              <input
                type="date"
                value={formData.scheduledDate}
                onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Time Slot</label>
              <input
                type="text"
                value={formData.scheduledTime}
                onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
                placeholder="e.g. 11:30 AM"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="CONFIRMED">CONFIRMED</option>
                <option value="PENDING">PENDING</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
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
              Save Booking
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminConsultations;
