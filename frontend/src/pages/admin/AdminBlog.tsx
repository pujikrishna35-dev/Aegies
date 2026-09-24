import React, { useState, useEffect } from 'react';
import {
  Newspaper,
  Search,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Calendar,
  Tag,
  ExternalLink,
  RefreshCw,
  Clock,
  Sparkles
} from 'lucide-react';
import { adminFetch } from '../../services/adminApi';
import StatusBadge from '../../components/admin/StatusBadge';
import AdminModal from '../../components/admin/AdminModal';

export const AdminBlog: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([
    {
      id: 'post-1',
      title: 'Complete Guide to UK Graduate Route Visa 2026: Rules, Costs & FAQs',
      slug: 'complete-guide-uk-graduate-route-visa-2026',
      category: 'Visa & Immigration',
      tags: ['UK Visa', 'Graduate Route', 'PSW'],
      featuredImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Everything Indian students need to know about the 2-year post-study work visa in the UK after graduating.',
      content: 'The UK Graduate Route provides international students who have successfully completed an undergraduate or postgraduate degree with the opportunity to stay in the UK to work, or look for work, at any skill level for 2 years (3 years for doctoral students).',
      status: 'PUBLISHED',
      author: 'Aegis Visa Desk',
      publishedAt: '2026-08-15',
      viewsCount: 1420,
    },
    {
      id: 'post-2',
      title: 'Top 10 High-Paying STEM Master Degrees in the US for 2026–2027',
      slug: 'top-10-high-paying-stem-master-degrees-usa',
      category: 'Destinations',
      tags: ['USA', 'STEM OPT', 'Computer Science'],
      featuredImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Explore the top specialized MS fields in America eligible for 36 months of Optional Practical Training.',
      content: 'STEM-designated degree programs enable international graduates on F-1 visas to extend their training in the United States by an additional 24 months, for a total of 3 years.',
      status: 'PUBLISHED',
      author: 'Pooja Sharma',
      publishedAt: '2026-08-28',
      viewsCount: 980,
    },
    {
      id: 'post-3',
      title: 'Germany Public University Deadlines for Winter Intake: Step-by-Step Checklist',
      slug: 'germany-public-university-deadlines-winter-intake',
      category: 'Education Insights',
      tags: ['Germany', 'APS Certificate', 'Free Tuition'],
      featuredImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'From mandatory APS certificate verification to VPD evaluations and blocked account deposits.',
      content: 'Studying in Germany at zero tuition fees is one of the most cost-effective routes for engineering and technology graduates.',
      status: 'DRAFT',
      author: 'Director Desk',
      publishedAt: 'Draft',
      viewsCount: 120,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Study Abroad',
    tags: 'UK, Admissions, Visa',
    featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    excerpt: '',
    content: '',
    status: 'PUBLISHED',
    author: 'Aegis Editorial Desk',
    seoTitle: '',
    seoDescription: '',
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const data = await adminFetch('/blog');
      if (Array.isArray(data) && data.length > 0) setArticles(data);
    } catch {}
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      slug: '',
      category: 'Visa & Immigration',
      tags: 'Study Abroad, Admissions',
      featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      excerpt: '',
      content: '',
      status: 'PUBLISHED',
      author: 'Aegis Editorial Desk',
      seoTitle: '',
      seoDescription: '',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (post: any) => {
    setEditingItem(post);
    setFormData({
      ...post,
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : post.tags || '',
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      tags: formData.tags.split(',').map((t) => t.trim()),
    };

    if (editingItem) {
      setArticles(articles.map((a) => (a.id === editingItem.id ? { ...a, ...payload } : a)));
      try {
        await adminFetch(`/blog/${editingItem.id}`, { method: 'PUT', body: JSON.stringify(payload) });
      } catch {}
    } else {
      const newPost = { id: 'post-' + Date.now(), viewsCount: 0, publishedAt: 'Today', ...payload };
      setArticles([newPost, ...articles]);
      try {
        await adminFetch('/blog', { method: 'POST', body: JSON.stringify(newPost) });
      } catch {}
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this blog post permanently?')) {
      setArticles(articles.filter((a) => a.id !== id));
      try {
        await adminFetch(`/blog/${id}`, { method: 'DELETE' });
      } catch {}
    }
  };

  const filtered = articles.filter((a) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q);
    const matchesCat = categoryFilter === 'ALL' || a.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Blog & Editorial CMS</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {filtered.length} articles
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Publish visa guides, destination updates, scholarship news, and study abroad insights.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchArticles}
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
            <span>Write New Article</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search article title or topic..."
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
          <option value="Visa & Immigration">Visa & Immigration</option>
          <option value="Destinations">Destinations</option>
          <option value="Education Insights">Education Insights</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:border-amber-400/60 transition-all group"
          >
            <div>
              <div className="relative h-40 overflow-hidden bg-slate-900">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950/80 text-amber-400 border border-amber-400/30">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <StatusBadge status={post.status} />
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight">
                  {post.title}
                </h2>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {Array.isArray(post.tags) &&
                    post.tags.map((t: string) => (
                      <span key={t} className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                        #{t}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>{post.publishedAt || 'Draft'} • {post.viewsCount || 0} views</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleOpenEdit(post)}
                  className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-white rounded-lg"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-white rounded-lg"
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
        title={editingItem ? 'Edit Blog Article' : 'Write New Article'}
        subtitle="Manage rich content, SEO metadata, and publication status"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Article Headline *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">URL Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="leave blank to auto-generate"
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
                <option value="Visa & Immigration">Visa & Immigration</option>
                <option value="Destinations">Destinations</option>
                <option value="Education Insights">Education Insights</option>
                <option value="Scholarships">Scholarships</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tags (Comma Separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="UK, Visa, CAS"
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
                <option value="PUBLISHED">PUBLISHED (Live)</option>
                <option value="DRAFT">DRAFT</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Featured Cover Image URL</label>
            <input
              type="url"
              value={formData.featuredImage}
              onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Short Excerpt *</label>
            <textarea
              rows={2}
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Article Body Content</label>
            <textarea
              rows={6}
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 font-mono"
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
              Save Article
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminBlog;
