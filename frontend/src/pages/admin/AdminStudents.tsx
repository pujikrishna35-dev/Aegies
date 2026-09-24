import React, { useState, useEffect } from 'react';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Phone,
  Mail,
  GraduationCap,
  Award,
  FileCheck,
  Building2,
  RefreshCw
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminStudents: React.FC = () => {
  const [students, setStudents] = useState<any[]>([
    {
      id: 'std-101',
      name: 'Priya Sharma',
      email: 'priya.s@student.com',
      phone: '+91 9848022338',
      targetCountry: 'United Kingdom',
      intendedDegree: 'MSc Data Science',
      university: 'University of Birmingham',
      ieltsGpa: 'IELTS 8.0 / CGPA 9.2',
      status: 'OFFER_UNCONDITIONAL',
      stage: 'Offer Letter',
      counsellor: 'Pooja Sharma',
    },
    {
      id: 'std-102',
      name: 'Karthik Reddy',
      email: 'karthik.r@student.com',
      phone: '+91 9988776655',
      targetCountry: 'United States',
      intendedDegree: 'MS Computer Science',
      university: 'Arizona State University',
      ieltsGpa: 'GRE 324 / TOEFL 108',
      status: 'VISA_APPROVED',
      stage: 'Pre-Departure',
      counsellor: 'Pooja Sharma',
    },
    {
      id: 'std-103',
      name: 'Rohan Verma',
      email: 'rohan.v@example.com',
      phone: '+91 9876543210',
      targetCountry: 'United Kingdom',
      intendedDegree: 'MSc Advanced Computer Science',
      university: 'University of Birmingham',
      ieltsGpa: 'IELTS 7.5 / CGPA 8.2',
      status: 'OFFER_CONDITIONAL',
      stage: 'Offer Letter',
      counsellor: 'Pooja Sharma',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetCountry: 'United Kingdom',
    intendedDegree: '',
    university: '',
    ieltsGpa: '',
    status: 'DOCUMENTS_SUBMITTED',
    counsellor: 'Pooja Sharma',
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/students');
      if (Array.isArray(data) && data.length > 0) setStudents(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingStudent(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      targetCountry: 'United Kingdom',
      intendedDegree: '',
      university: '',
      ieltsGpa: 'IELTS 7.0 / CGPA 8.0',
      status: 'DOCUMENTS_SUBMITTED',
      counsellor: 'Pooja Sharma',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (std: any) => {
    setEditingStudent(std);
    setFormData({ ...std });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      setStudents(students.map((s) => (s.id === editingStudent.id ? { ...s, ...formData } : s)));
      try {
        await adminFetch(`/students/${editingStudent.id}`, { method: 'PUT', body: JSON.stringify(formData) });
      } catch {}
    } else {
      const newStd = { id: 'std-' + Date.now(), ...formData };
      setStudents([newStd, ...students]);
      try {
        await adminFetch('/students', { method: 'POST', body: JSON.stringify(newStd) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to remove this student record?')) {
      setStudents(students.filter((s) => s.id !== id));
      try {
        await adminFetch(`/students/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.university && s.university.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Enrolled Students Registry</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} active
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Registered students with confirmed university applications, test scores, and visa files.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchStudents}
            disabled={loading}
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          </button>
          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs shadow-sm hover:from-amber-500 hover:to-amber-600"
          >
            <Plus className="w-4 h-4" />
            <span>Enroll Student</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search student by name, email, or chosen university..."
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
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">University & Target Degree</th>
                <th className="py-3.5 px-4">Academic & Test Scores</th>
                <th className="py-3.5 px-4">Counsellor</th>
                <th className="py-3.5 px-4">Application Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((std) => (
                <tr key={std.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{std.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{std.email}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{std.phone}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{std.university || 'University of Birmingham'}</span>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{std.intendedDegree}</div>
                    <span className="text-[10px] font-semibold text-slate-400">{std.targetCountry}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-800 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>{std.ieltsGpa || 'Assessed'}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">{std.counsellor || 'Pooja Sharma'}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={std.status} />
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(std)}
                        className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(std.id)}
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
        title={editingStudent ? 'Edit Student Profile' : 'Enroll New Student'}
        subtitle="Manage academic credentials and university admission file"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500"
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
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Target Country</label>
              <select
                value={formData.targetCountry}
                onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Target University</label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                placeholder="e.g. University of Birmingham"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Intended Degree</label>
              <input
                type="text"
                value={formData.intendedDegree}
                onChange={(e) => setFormData({ ...formData, intendedDegree: e.target.value })}
                placeholder="e.g. MSc Data Science"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Scores / CGPA</label>
              <input
                type="text"
                value={formData.ieltsGpa}
                onChange={(e) => setFormData({ ...formData, ieltsGpa: e.target.value })}
                placeholder="e.g. IELTS 7.5 / CGPA 8.4"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="DOCUMENTS_SUBMITTED">DOCUMENTS_SUBMITTED</option>
                <option value="APPLIED_TO_UNIVERSITY">APPLIED_TO_UNIVERSITY</option>
                <option value="OFFER_CONDITIONAL">OFFER_CONDITIONAL</option>
                <option value="OFFER_UNCONDITIONAL">OFFER_UNCONDITIONAL</option>
                <option value="VISA_FILED">VISA_FILED</option>
                <option value="VISA_APPROVED">VISA_APPROVED</option>
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
              Save Student
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminStudents;
