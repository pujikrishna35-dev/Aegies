import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Plus,
  Edit2,
  Trash2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  UserCheck,
  FileText,
  Clock,
  ArrowUpDown,
  RefreshCw,
  CheckCircle2,
  X,
  Eye
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';
import AdminDrawer from '../../components/admin/AdminDrawer';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  preferredCountry?: string;
  preferredCourse?: string;
  intakeYear?: number | string;
  status: 'NEW' | 'CONTACTED' | 'FOLLOW_UP' | 'COUNSELLING' | 'APPLICATION' | 'CONVERTED' | 'LOST';
  source?: string;
  counselor?: string;
  notes?: string;
  followUpDate?: string;
  createdAt: string;
}

export const AdminLeads: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 'lead-1',
      name: 'Rohan Verma',
      email: 'rohan.v@example.com',
      phone: '+91 9876543210',
      city: 'Hyderabad',
      preferredCountry: 'UK',
      preferredCourse: 'MSc Computer Science',
      intakeYear: 2026,
      status: 'APPLICATION',
      source: 'Hero Consultation Form',
      counselor: 'Pooja Sharma',
      notes: 'Russell Group applicant. IELTS 7.5 cleared. Conditional offer from Birmingham.',
      followUpDate: '2026-09-15',
      createdAt: 'Today, 10:45 AM',
    },
    {
      id: 'lead-2',
      name: 'Ananya Deshmukh',
      email: 'ananya.d@example.com',
      phone: '+91 9123456780',
      city: 'Bangalore',
      preferredCountry: 'USA',
      preferredCourse: 'MS Data Science',
      intakeYear: 2026,
      status: 'COUNSELLING',
      source: 'University Finder Tool',
      counselor: 'Pooja Sharma',
      notes: 'Interested in STEM OPT institutions with tuition below $35k/year.',
      followUpDate: '2026-09-12',
      createdAt: 'Yesterday',
    },
    {
      id: 'lead-3',
      name: 'Sneha Reddy',
      email: 'sneha.reddy@example.com',
      phone: '+91 9440112233',
      city: 'Nellore',
      preferredCountry: 'Canada',
      preferredCourse: 'MBA International Business',
      intakeYear: 2026,
      status: 'FOLLOW_UP',
      source: 'Direct Website Visit',
      counselor: 'Director Desk',
      notes: 'Requested bank loan options with ICICI / HDFC Credila.',
      followUpDate: '2026-09-14',
      createdAt: 'Sep 7, 2026',
    },
    {
      id: 'lead-4',
      name: 'Karthik Naidu',
      email: 'karthik.n@example.com',
      phone: '+91 9703322114',
      city: 'Tirupati',
      preferredCountry: 'Germany',
      preferredCourse: 'MSc Mechanical Engineering',
      intakeYear: 2026,
      status: 'NEW',
      source: 'Landing Page Form',
      counselor: 'Unassigned',
      notes: 'Has completed mechanical engineering with 78%. Wants tuition-free university options.',
      followUpDate: '2026-09-10',
      createdAt: 'Today, 08:15 AM',
    },
    {
      id: 'lead-5',
      name: 'Vikas Chowdary',
      email: 'vikas.c@example.com',
      phone: '+91 9988112233',
      city: 'Vijayawada',
      preferredCountry: 'Australia',
      preferredCourse: 'Master of Information Technology',
      intakeYear: 2026,
      status: 'CONVERTED',
      source: 'Referral',
      counselor: 'Pooja Sharma',
      notes: 'Visa subclass 500 granted! Pre-departure accommodation in Sydney arranged.',
      followUpDate: undefined,
      createdAt: 'Aug 28, 2026',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [countryFilter, setCountryFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);

  // Modal and Drawer states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<Lead>>({
    name: '',
    email: '',
    phone: '',
    city: 'Nellore',
    preferredCountry: 'UK',
    preferredCourse: '',
    intakeYear: 2026,
    status: 'NEW',
    counselor: 'Pooja Sharma',
    notes: '',
    followUpDate: '',
  });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/leads');
      if (Array.isArray(data) && data.length > 0) {
        setLeads(data);
      }
    } catch {
      // maintain initial state
    }
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingLead(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: 'Nellore',
      preferredCountry: 'UK',
      preferredCourse: '',
      intakeYear: 2026,
      status: 'NEW',
      counselor: 'Pooja Sharma',
      notes: '',
      followUpDate: '2026-09-20',
    });
    setIsAddModalOpen(true);
  };

  const handleOpenEdit = (lead: Lead) => {
    setEditingLead(lead);
    setFormData({ ...lead });
    setIsAddModalOpen(true);
  };

  const handleSaveLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingLead) {
      // Update
      const updated = leads.map((l) => (l.id === editingLead.id ? ({ ...l, ...formData } as Lead) : l));
      setLeads(updated);
      try {
        await adminFetch(`/leads/${editingLead.id}`, {
          method: 'PUT',
          body: JSON.stringify(formData),
        });
      } catch {}
    } else {
      // Add
      const newLead: Lead = {
        id: 'lead-' + Date.now(),
        name: formData.name || 'New Lead',
        email: formData.email || '',
        phone: formData.phone || '',
        city: formData.city || 'Nellore',
        preferredCountry: formData.preferredCountry || 'UK',
        preferredCourse: formData.preferredCourse || 'General',
        intakeYear: formData.intakeYear || 2026,
        status: (formData.status as any) || 'NEW',
        source: 'Admin Direct Entry',
        counselor: formData.counselor || 'Pooja Sharma',
        notes: formData.notes || '',
        followUpDate: formData.followUpDate || '2026-09-25',
        createdAt: 'Just now',
      };
      setLeads([newLead, ...leads]);
      try {
        await adminFetch('/leads', {
          method: 'POST',
          body: JSON.stringify(newLead),
        });
      } catch {}
    }
    setIsAddModalOpen(false);
  };

  const handleDeleteLead = async (id: string) => {
    if (confirm('Are you sure you want to permanently delete this lead?')) {
      setLeads(leads.filter((l) => l.id !== id));
      try {
        await adminFetch(`/leads/${id}`, { method: 'DELETE' });
      } catch {}
      if (selectedLead?.id === id) setSelectedLead(null);
    }
  };

  const handleStatusChange = async (id: string, status: any) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, status } : l)));
    try {
      await adminFetch(`/leads/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
    } catch {}
  };

  const handleCounselorChange = async (id: string, counselor: string) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, counselor } : l)));
    try {
      await adminFetch(`/leads/${id}/counselor`, {
        method: 'PATCH',
        body: JSON.stringify({ counselor }),
      });
    } catch {}
  };

  // Filtered
  const filteredLeads = leads.filter((l) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.phone.includes(q) ||
      (l.city && l.city.toLowerCase().includes(q));

    const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
    const matchesCountry = countryFilter === 'ALL' || (l.preferredCountry && l.preferredCountry === countryFilter);

    return matchesSearch && matchesStatus && matchesCountry;
  });

  return (
    <div className="space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Student Leads Pipeline</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filteredLeads.length} total
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Capture, nurture, and track all incoming study abroad prospective students across 7 distinct stages.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchLeads}
            disabled={loading}
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
            title="Refresh Leads"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          </button>

          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Lead</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search student name, email, phone, or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="NEW">NEW</option>
            <option value="CONTACTED">CONTACTED</option>
            <option value="FOLLOW_UP">FOLLOW_UP</option>
            <option value="COUNSELLING">COUNSELLING</option>
            <option value="APPLICATION">APPLICATION</option>
            <option value="CONVERTED">CONVERTED</option>
            <option value="LOST">LOST</option>
          </select>

          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="text-xs py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="ALL">All Destinations</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Ireland">Ireland</option>
            <option value="New Zealand">New Zealand</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Student Contact</th>
                <th className="py-3.5 px-4">Target Course & Country</th>
                <th className="py-3.5 px-4">Counsellor</th>
                <th className="py-3.5 px-4">Follow-Up Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    No student leads matched the search criteria.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">{lead.name}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{lead.email}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-semibold text-slate-700"><Phone className="w-3 h-3 text-[#C5A059]" />{lead.phone}</span>
                      </div>
                      {lead.city && (
                        <div className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>{lead.city}</span>
                        </div>
                      )}
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-800">{lead.preferredCountry || 'UK'}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{lead.preferredCourse || 'Masters'}</div>
                      <div className="text-[10px] text-slate-400">Intake: {lead.intakeYear || 2026}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <select
                        value={lead.counselor || 'Pooja Sharma'}
                        onChange={(e) => handleCounselorChange(lead.id, e.target.value)}
                        className="text-[11px] font-semibold py-1 px-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Pooja Sharma">Pooja Sharma</option>
                        <option value="Director Desk">Director Desk</option>
                        <option value="Surendra Babu">Surendra Babu</option>
                        <option value="Unassigned">Unassigned</option>
                      </select>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1 text-slate-700 font-medium">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{lead.followUpDate || 'Not scheduled'}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Created: {lead.createdAt}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className="text-[11px] font-bold py-1 px-2 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="FOLLOW_UP">FOLLOW_UP</option>
                        <option value="COUNSELLING">COUNSELLING</option>
                        <option value="APPLICATION">APPLICATION</option>
                        <option value="CONVERTED">CONVERTED</option>
                        <option value="LOST">LOST</option>
                      </select>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          title="View Details"
                          className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleOpenEdit(lead)}
                          title="Edit Lead"
                          className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          title="Delete Lead"
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Lead Modal */}
      <AdminModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title={editingLead ? 'Edit Student Lead' : 'Register New Lead'}
        subtitle="Record prospective student contact details and preferred destination"
      >
        <form onSubmit={handleSaveLead} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sravan Kumar"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98480 12345"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="student@example.com"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City / Region</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Nellore, Tirupati, etc."
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Destination</label>
              <select
                value={formData.preferredCountry}
                onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="UK">United Kingdom</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="Ireland">Ireland</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Europe">Europe</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Target Course</label>
              <input
                type="text"
                value={formData.preferredCourse}
                onChange={(e) => setFormData({ ...formData, preferredCourse: e.target.value })}
                placeholder="e.g. MSc Data Science"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Intake Year</label>
              <select
                value={formData.intakeYear}
                onChange={(e) => setFormData({ ...formData, intakeYear: Number(e.target.value) })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Initial Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="NEW">NEW</option>
                <option value="CONTACTED">CONTACTED</option>
                <option value="FOLLOW_UP">FOLLOW_UP</option>
                <option value="COUNSELLING">COUNSELLING</option>
                <option value="APPLICATION">APPLICATION</option>
                <option value="CONVERTED">CONVERTED</option>
                <option value="LOST">LOST</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Assign Counsellor</label>
              <select
                value={formData.counselor}
                onChange={(e) => setFormData({ ...formData, counselor: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Pooja Sharma">Pooja Sharma (Senior)</option>
                <option value="Director Desk">Director Desk</option>
                <option value="Surendra Babu">Surendra Babu</option>
                <option value="Unassigned">Unassigned</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Next Follow-Up</label>
              <input
                type="date"
                value={formData.followUpDate}
                onChange={(e) => setFormData({ ...formData, followUpDate: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Counsellor Notes</label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Record academic details, test score expectations, budget constraints, or family preferences..."
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 text-xs font-bold shadow-sm"
            >
              {editingLead ? 'Update Lead Record' : 'Create Student Lead'}
            </button>
          </div>
        </form>
      </AdminModal>

      {/* View Lead Drawer */}
      <AdminDrawer
        isOpen={!!selectedLead}
        onClose={() => setSelectedLead(null)}
        title={selectedLead?.name || 'Lead Details'}
        subtitle={`ID: ${selectedLead?.id} • Intake ${selectedLead?.intakeYear || 2026}`}
      >
        {selectedLead && (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Current Pipeline Status</div>
                <div className="mt-1"><StatusBadge status={selectedLead.status} size="md" /></div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Assigned Counsellor</div>
                <div className="mt-1 text-xs font-bold text-slate-900">{selectedLead.counselor || 'Pooja Sharma'}</div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact Information</h3>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <a href={`tel:${selectedLead.phone}`} className="font-bold text-[#C5A059] flex items-center gap-1">
                    <Phone className="w-3 h-3" /> {selectedLead.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Email:</span>
                  <a href={`mailto:${selectedLead.email}`} className="font-medium text-slate-700">
                    {selectedLead.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">City / Location:</span>
                  <span className="font-medium text-slate-700">{selectedLead.city || 'Nellore'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Acquisition Source:</span>
                  <span className="font-medium text-slate-700">{selectedLead.source || 'Website'}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Academic Target</h3>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-bold text-slate-900">{selectedLead.preferredCountry}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Preferred Course:</span>
                  <span className="font-medium text-slate-800">{selectedLead.preferredCourse}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Scheduled Follow-up:</span>
                  <span className="font-bold text-amber-700">{selectedLead.followUpDate || 'None'}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Counselling Log & Notes</h3>
              <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-slate-800 leading-relaxed">
                {selectedLead.notes || 'No counselor notes recorded yet.'}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedLead(null);
                  handleOpenEdit(selectedLead);
                }}
                className="px-4 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs"
              >
                Edit Lead
              </button>
              <button
                onClick={() => handleDeleteLead(selectedLead.id)}
                className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </AdminDrawer>
    </div>
  );
};

export default AdminLeads;
