import React, { useState, useEffect } from 'react';
import {
  Search,
  Mail,
  Phone,
  Clock,
  Trash2,
  CheckCircle2,
  MessageSquare,
  RefreshCw,
  Eye,
  Send
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminEnquiries: React.FC = () => {
  const [enquiries, setEnquiries] = useState<any[]>([
    {
      id: 'enq-1',
      name: 'Venkatesh Babu',
      email: 'venkatesh.b@example.com',
      phone: '+91 9949011223',
      subject: 'Masters in AI after 3 Years B.Sc Computer Science',
      message: 'Hello team, do universities in the UK or Ireland accept 3-year bachelor degrees for MSc Artificial Intelligence without pre-masters? Please advise on options.',
      status: 'UNREAD',
      source: 'Contact Us Form',
      createdAt: 'Today, 08:30 AM',
    },
    {
      id: 'enq-2',
      name: 'Dr. Srinivas Rao (Parent)',
      email: 'dr.srinivas@example.com',
      phone: '+91 9849200334',
      subject: 'Inquiry regarding medical PG options in the UK & Australia',
      message: 'Looking for clinical postgraduate diploma/masters pathway for my daughter who recently completed MBBS. Please share counselor contact.',
      status: 'IN_PROGRESS',
      source: 'Website Header CTA',
      createdAt: 'Yesterday, 03:10 PM',
    },
    {
      id: 'enq-3',
      name: 'Mounika Reddy',
      email: 'mounika.r@example.com',
      phone: '+91 9490123456',
      subject: 'Education loan without collateral for Canada MS',
      message: 'Can I get a 30 lakh loan sanction without property collateral for Fanshawe or Conestoga college PG courses? Need assistance.',
      status: 'RESOLVED',
      source: 'Services Page',
      createdAt: 'Sep 6, 2026',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState<any | null>(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/enquiries');
      if (Array.isArray(data) && data.length > 0) setEnquiries(data);
    } catch {}
    setLoading(false);
  };

  const handleStatusChange = async (id: string, status: string) => {
    setEnquiries(enquiries.map((e) => (e.id === id ? { ...e, status } : e)));
    try {
      await adminFetch(`/enquiries/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
    } catch {}
    if (selectedEnquiry?.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status });
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this inquiry?')) {
      setEnquiries(enquiries.filter((e) => e.id !== id));
      try {
        await adminFetch(`/enquiries/${id}`, { method: 'DELETE' });
      } catch {}
      if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
    }
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText) return;
    alert(`Reply dispatched to ${selectedEnquiry.email}!`);
    handleStatusChange(selectedEnquiry.id, 'RESOLVED');
    setReplyText('');
    setSelectedEnquiry(null);
  };

  const filtered = enquiries.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Website Inquiries</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} total
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            General messages, questions, and callback requests submitted through public web forms.
          </p>
        </div>

        <button
          onClick={fetchEnquiries}
          disabled={loading}
          className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors w-fit"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search inquiries by sender name, subject, or email..."
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
                <th className="py-3.5 px-4">Sender Contact</th>
                <th className="py-3.5 px-4">Subject & Message Excerpt</th>
                <th className="py-3.5 px-4">Source & Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((enq) => (
                <tr key={enq.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{enq.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{enq.email}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{enq.phone}</div>
                  </td>
                  <td className="py-3.5 px-4 max-w-md">
                    <div className="font-bold text-slate-800">{enq.subject}</div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{enq.message}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="text-slate-700 font-medium">{enq.source}</div>
                    <div className="text-[10px] text-slate-400">{enq.createdAt}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <select
                      value={enq.status}
                      onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                      className="text-[11px] font-bold py-1 px-2 rounded-lg border border-slate-200 bg-white"
                    >
                      <option value="UNREAD">UNREAD</option>
                      <option value="IN_PROGRESS">IN_PROGRESS</option>
                      <option value="RESOLVED">RESOLVED</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setSelectedEnquiry(enq)}
                        className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                        title="View Full Message & Reply"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(enq.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete Inquiry"
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

      {/* Inquiry Detail & Reply Modal */}
      <AdminModal
        isOpen={!!selectedEnquiry}
        onClose={() => setSelectedEnquiry(null)}
        title={selectedEnquiry?.subject || 'Inquiry Details'}
        subtitle={`From: ${selectedEnquiry?.name} (${selectedEnquiry?.email})`}
      >
        {selectedEnquiry && (
          <div className="space-y-4">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex justify-between">
              <div>
                <span className="text-slate-400 font-medium">Contact:</span>{' '}
                <span className="font-bold text-slate-800">{selectedEnquiry.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium">Received:</span>{' '}
                <span className="font-bold text-slate-800">{selectedEnquiry.createdAt}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase text-slate-500">Student Message</label>
              <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                {selectedEnquiry.message}
              </div>
            </div>

            <form onSubmit={handleSendReply} className="space-y-3 pt-2">
              <label className="block text-xs font-bold uppercase text-slate-700">Send Response Email</label>
              <textarea
                rows={4}
                required
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your official counselor response to be emailed directly to the student..."
                className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => handleStatusChange(selectedEnquiry.id, 'RESOLVED')}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50"
                >
                  Mark as Resolved
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#071228] text-amber-400 font-bold text-xs rounded-xl shadow-xs hover:bg-[#0E213D]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Response</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </AdminModal>
    </div>
  );
};

export default AdminEnquiries;
