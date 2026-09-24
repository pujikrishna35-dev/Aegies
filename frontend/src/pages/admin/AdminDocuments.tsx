import React, { useState, useEffect } from 'react';
import {
  FolderOpen,
  Search,
  Upload,
  Eye,
  Trash2,
  FileCheck,
  CheckCircle2,
  XCircle,
  FileText,
  Download,
  Clock,
  Filter,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminDocuments: React.FC = () => {
  const [documents, setDocuments] = useState<any[]>([
    {
      id: 'doc-1',
      studentName: 'Rohan Verma',
      studentEmail: 'rohan.v@example.com',
      title: 'Passport Copy (Front & Back Pages)',
      category: 'PASSPORT',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: '1.8 MB',
      status: 'VERIFIED',
      notes: 'Valid until 2032. Clear biometric page scan.',
      uploadedAt: 'Today, 09:30 AM',
    },
    {
      id: 'doc-2',
      studentName: 'Rohan Verma',
      studentEmail: 'rohan.v@example.com',
      title: 'B.Tech Consolidated Marks Memorandum',
      category: 'ACADEMIC',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: '3.4 MB',
      status: 'VERIFIED',
      notes: 'Verified 8.2 CGPA with provisional certificate.',
      uploadedAt: 'Yesterday',
    },
    {
      id: 'doc-3',
      studentName: 'Ananya Deshmukh',
      studentEmail: 'ananya.d@example.com',
      title: 'IELTS Academic Score Card (7.5 Bands)',
      category: 'TEST_SCORE',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: '850 KB',
      status: 'VERIFIED',
      notes: 'TRF verified online with IDP.',
      uploadedAt: 'Sep 6, 2026',
    },
    {
      id: 'doc-4',
      studentName: 'Sneha Reddy',
      studentEmail: 'sneha.reddy@example.com',
      title: 'Bank Solvency & Proof of Funds Statement',
      category: 'FINANCIAL',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: '2.1 MB',
      status: 'PENDING',
      notes: 'Awaiting CA statement stamping.',
      uploadedAt: 'Sep 7, 2026',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    title: '',
    category: 'PASSPORT',
    fileSize: '1.5 MB',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    notes: '',
  });

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/documents');
      if (Array.isArray(data) && data.length > 0) setDocuments(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenUpload = () => {
    setFormData({
      studentName: '',
      studentEmail: '',
      title: '',
      category: 'PASSPORT',
      fileSize: '1.8 MB',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      notes: '',
    });
    setIsModalOpen(true);
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDoc = {
      id: 'doc-' + Date.now(),
      status: 'PENDING',
      uploadedAt: 'Just now',
      ...formData,
    };
    setDocuments([newDoc, ...documents]);
    try {
      await adminFetch('/documents', { method: 'POST', body: JSON.stringify(newDoc) });
    } catch {}
    setIsModalOpen(false);
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    setDocuments(documents.map((d) => (d.id === id ? { ...d, status } : d)));
    try {
      await adminFetch(`/documents/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
    } catch {}
    if (previewDoc?.id === id) {
      setPreviewDoc({ ...previewDoc, status });
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Permanently delete this document from record?')) {
      setDocuments(documents.filter((d) => d.id !== id));
      try {
        await adminFetch(`/documents/${id}`, { method: 'DELETE' });
      } catch {}
      if (previewDoc?.id === id) setPreviewDoc(null);
    }
  };

  const filtered = documents.filter((d) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      d.title.toLowerCase().includes(q) ||
      d.studentName.toLowerCase().includes(q) ||
      d.studentEmail.toLowerCase().includes(q);
    const matchesCat = categoryFilter === 'ALL' || d.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Student Document Center</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} files
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Review, verify, and approve official student passports, degree transcripts, financial solvency, and test score reports.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchDocuments}
            disabled={loading}
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          </button>
          <button
            onClick={handleOpenUpload}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs shadow-sm"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Document</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search document title or student name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="text-xs py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="ALL">All Categories</option>
          <option value="PASSPORT">Passport</option>
          <option value="ACADEMIC">Academic Transcripts</option>
          <option value="FINANCIAL">Financial Solvency</option>
          <option value="TEST_SCORE">Test Score (IELTS/GRE)</option>
          <option value="VISA">Visa Documents</option>
          <option value="OTHER">Other</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Document Title</th>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Category & Size</th>
                <th className="py-3.5 px-4">Uploaded Time</th>
                <th className="py-3.5 px-4">Verification Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{doc.title}</span>
                    </div>
                    {doc.notes && <div className="text-[11px] text-slate-500 mt-0.5">{doc.notes}</div>}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800">{doc.studentName}</div>
                    <div className="text-[11px] text-slate-400">{doc.studentEmail}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[10px]">
                      {doc.category}
                    </span>
                    <span className="text-[11px] text-slate-400 ml-2">{doc.fileSize}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{doc.uploadedAt}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={doc.status} />
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setPreviewDoc(doc)}
                        className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg"
                        title="Preview & Verify Document"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(doc.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete Document"
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

      {/* Upload Document Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Upload Student Document"
        subtitle="Attach verified identification, mark sheets, or financial proofs"
      >
        <form onSubmit={handleUploadSubmit} className="space-y-4">
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
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Document Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Passport Bio Page"
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="PASSPORT">Passport</option>
                <option value="ACADEMIC">Academic Transcripts</option>
                <option value="FINANCIAL">Financial Solvency</option>
                <option value="TEST_SCORE">Test Score Card</option>
                <option value="VISA">Visa Document</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Document File URL</label>
            <input
              type="text"
              value={formData.fileUrl}
              onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Verification Notes</label>
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
              Upload Document
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Preview & Status Modal */}
      <AdminModal
        isOpen={!!previewDoc}
        onClose={() => setPreviewDoc(null)}
        title={previewDoc?.title || 'Document Inspection'}
        subtitle={`Student: ${previewDoc?.studentName} (${previewDoc?.category})`}
      >
        {previewDoc && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500">Current Status:</span>{' '}
                <StatusBadge status={previewDoc.status} />
              </div>
              <div>
                <span className="text-slate-500">File Size:</span>{' '}
                <span className="font-bold text-slate-800">{previewDoc.fileSize}</span>
              </div>
            </div>

            {/* Document preview iframe or placeholder */}
            <div className="h-64 rounded-xl border border-slate-200 bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center">
              <FileText className="w-12 h-12 text-[#C5A059] mb-2" />
              <div className="font-bold text-sm">{previewDoc.title}</div>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                Document securely stored in Aegis cloud encryption bucket.
              </p>
              <a
                href={previewDoc.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-500 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open Full PDF Document</span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Change Approval Status:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleUpdateStatus(previewDoc.id, 'REJECTED')}
                  className="px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 font-bold text-xs rounded-xl border border-red-200 transition-colors flex items-center gap-1"
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Reject</span>
                </button>
                <button
                  onClick={() => handleUpdateStatus(previewDoc.id, 'VERIFIED')}
                  className="px-4 py-1.5 bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verify Document</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </AdminModal>
    </div>
  );
};

export default AdminDocuments;
