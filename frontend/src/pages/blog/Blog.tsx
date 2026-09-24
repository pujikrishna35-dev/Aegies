import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  User, 
  CheckCircle2, 
  Filter
} from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPostItem } from '../../data/blog';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      if (selectedCategory !== 'All Articles' && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = post.title.toLowerCase().includes(q);
        const matchExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchTags = post.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchExcerpt && !matchTags) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C5A059]">Articles & Insights</span>
        </div>

        {/* Hero Section */}
        <div className="relative bg-[#071228] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl mb-12 border border-[#C5A059]/20">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#E6C687] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Expert Analysis • Verified Immigration Rules 2026
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Study Abroad Articles & Insights
            </h1>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Stay ahead with verified guides on post-study work visas, scholarship essay strategies, ECTS conversions, and global university admissions written by Aegis senior advisors.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles, topics, or visa keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
              />
            </div>

            {/* Category Selector */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-sm bg-white text-neutral-700"
              >
                {BLOG_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Category Chips */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-100">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#071228] text-[#E6C687] shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#071228]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-base font-bold font-display text-[#071228] group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-neutral-100">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded text-[10px]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author & CTA Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-100 mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-neutral-200"
                  />
                  <div>
                    <p className="text-[11px] font-bold text-[#071228] leading-none">{post.author.name}</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">{post.author.role}</p>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-amber-700 hover:text-[#071228] flex items-center gap-1 transition-colors"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
