import React, { useState, useEffect } from 'react';
import {
  Image as ImageIcon,
  Search,
  Upload,
  Trash2,
  Copy,
  Check,
  Film,
  File,
  Eye,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import AdminModal from '../../components/admin/AdminModal';

export const AdminMedia: React.FC = () => {
  const [items, setItems] = useState<any[]>([
    {
      id: 'med-1',
      name: 'birmingham-campus-hero.jpg',
      url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
      type: 'image',
      size: '1.4 MB',
      dimensions: '1920x1080',
      uploadedAt: 'Today, 10:00 AM',
      altText: 'University of Birmingham Clock Tower Campus',
    },
    {
      id: 'med-2',
      name: 'asu-innovation-center.jpg',
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      type: 'image',
      size: '980 KB',
      dimensions: '1600x900',
      uploadedAt: 'Yesterday',
      altText: 'Arizona State University Students',
    },
    {
      id: 'med-3',
      name: 'tum-munich-engineering.jpg',
      url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
      type: 'image',
      size: '2.2 MB',
      dimensions: '2048x1152',
      uploadedAt: 'Sep 5, 2026',
      altText: 'Technical University of Munich Campus',
    },
    {
      id: 'med-4',
      name: 'student-visa-briefing-2026.mp4',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video',
      size: '14.2 MB',
      uploadedAt: 'Sep 6, 2026',
      altText: 'Student Visa Orientation Video',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [previewMedia, setPreviewMedia] = useState<any | null>(null);

  const [uploadData, setUploadData] = useState({
    name: '',
    url: '',
    type: 'image',
    size: '1.2 MB',
    dimensions: '1920x1080',
    altText: '',
  });

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/media');
      if (Array.isArray(data) && data.length > 0) setItems(data);
    } catch {}
    setLoading(false);
  };

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: 'med-' + Date.now(),
      uploadedAt: 'Just now',
      ...uploadData,
    };
    setItems([newItem, ...items]);
    try {
      await adminFetch('/media', { method: 'POST', body: JSON.stringify(newItem) });
    } catch {}
    setIsUploadModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this media asset from library?')) {
      setItems(items.filter((m) => m.id !== id));
      try {
        await adminFetch(`/media/${id}`, { method: 'DELETE' });
      } catch {}
      if (previewMedia?.id === id) setPreviewMedia(null);
    }
  };

  const filtered = items.filter((m) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      m.name.toLowerCase().includes(q) || (m.altText && m.altText.toLowerCase().includes(q));
    const matchesType = typeFilter === 'ALL' || m.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Media Library</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} assets
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Store, search, preview, and copy image and video assets for blog posts, universities, and testimonials.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchMedia}
            disabled={loading}
            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
          </button>
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs shadow-sm"
          >
            <Upload className="w-4 h-4" />
            <span>Upload New Asset</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search asset by filename or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="text-xs py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="ALL">All Media Types</option>
          <option value="image">Images Only</option>
          <option value="video">Videos Only</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:border-amber-400/60 transition-all group"
          >
            <div
              onClick={() => setPreviewMedia(item)}
              className="relative h-44 bg-slate-900 cursor-pointer overflow-hidden flex items-center justify-center"
            >
              {item.type === 'video' ? (
                <div className="flex flex-col items-center justify-center text-white">
                  <Film className="w-10 h-10 text-amber-400 mb-1" />
                  <span className="text-[11px] font-bold">Video Asset</span>
                </div>
              ) : (
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute top-2.5 right-2.5">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-slate-950/80 text-white border border-white/20">
                  {item.type}
                </span>
              </div>
            </div>

            <div className="p-3.5 space-y-2">
              <div className="font-bold text-xs text-slate-900 truncate" title={item.name}>
                {item.name}
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>{item.size}</span>
                <span>{item.dimensions || item.uploadedAt}</span>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-1">
                <button
                  onClick={() => handleCopy(item.id, item.url)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    copiedId === item.id
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                  title="Delete Media"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Media Modal */}
      <AdminModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload Media Asset"
        subtitle="Add image or video resource into the central media CDN"
      >
        <form onSubmit={handleUploadSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Asset Filename *</label>
            <input
              type="text"
              required
              value={uploadData.name}
              onChange={(e) => setUploadData({ ...uploadData, name: e.target.value })}
              placeholder="e.g. birmingham-hero.jpg"
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Media Type</label>
              <select
                value={uploadData.type}
                onChange={(e) => setUploadData({ ...uploadData, type: e.target.value as any })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              >
                <option value="image">Image (JPG/PNG/WEBP)</option>
                <option value="video">Video (MP4/WebM)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Approx Size</label>
              <input
                type="text"
                value={uploadData.size}
                onChange={(e) => setUploadData({ ...uploadData, size: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Direct CDN File URL *</label>
            <input
              type="url"
              required
              value={uploadData.url}
              onChange={(e) => setUploadData({ ...uploadData, url: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Alt Text (Accessibility)</label>
            <input
              type="text"
              value={uploadData.altText}
              onChange={(e) => setUploadData({ ...uploadData, altText: e.target.value })}
              placeholder="Descriptive label for screen readers"
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setIsUploadModalOpen(false)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 font-bold text-xs text-slate-950"
            >
              Save Asset
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Preview Modal */}
      <AdminModal
        isOpen={!!previewMedia}
        onClose={() => setPreviewMedia(null)}
        title={previewMedia?.name || 'Media Preview'}
        subtitle={`Type: ${previewMedia?.type} • ${previewMedia?.size}`}
      >
        {previewMedia && (
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-200 flex items-center justify-center max-h-96">
              {previewMedia.type === 'video' ? (
                <video src={previewMedia.url} controls className="max-h-96 w-full" />
              ) : (
                <img src={previewMedia.url} alt={previewMedia.name} className="max-h-96 object-contain" />
              )}
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs">
              <span className="font-mono text-slate-600 truncate max-w-sm">{previewMedia.url}</span>
              <button
                onClick={() => handleCopy(previewMedia.id, previewMedia.url)}
                className="px-3 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-lg flex items-center gap-1 shrink-0 ml-2"
              >
                <Copy className="w-3 h-3" />
                <span>Copy Asset URL</span>
              </button>
            </div>
          </div>
        )}
      </AdminModal>
    </div>
  );
};

export default AdminMedia;
