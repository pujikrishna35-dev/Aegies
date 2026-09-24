import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  Share2, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { BLOG_POSTS, BlogPostItem } from '../../data/blog';
import { Modal } from '../../components/ui/Modal';
import { ConsultationForm } from '../../components/forms/ConsultationForm';

export const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Match article
  const post = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug) || BLOG_POSTS[0];

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Link to="/" className="hover:text-neutral-800">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-neutral-800">Blog</Link>
            <span>/</span>
            <span className="text-[#071228] font-bold truncate max-w-[200px]">{post.title}</span>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-8 relative overflow-hidden border border-[#C5A059]/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E6C687] text-xs font-bold border border-[#C5A059]/30 uppercase tracking-wider inline-block mb-4">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="font-bold text-white leading-none">{post.author.name}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{post.author.role}</p>
                </div>
              </div>

              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                {post.publishedAt}
              </span>

              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-sm mb-8 max-h-96">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content Body */}
        <article className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs space-y-6 text-neutral-700 text-sm sm:text-base leading-relaxed mb-12">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-neutral-700 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-neutral-400 flex items-center gap-1 mr-2">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-lg text-xs font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-[#071228] via-[#0E1E38] to-[#071228] text-white rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-xl border border-[#C5A059]/30 mb-12">
          <BookOpen className="w-10 h-10 text-[#E6C687] mx-auto mb-3" />
          <h2 className="text-xl sm:text-2xl font-display font-bold">
            Need Expert Advice for Your Overseas Admissions?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 mb-6 max-w-xl mx-auto">
            Book a free 1-on-1 counseling session with our certified advisors. We evaluate your profile, recommend courses, and manage your visa paperwork.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A059] text-[#071228] font-bold text-xs uppercase tracking-wider hover:bg-[#E6C687] transition-all shadow-md"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Related Articles */}
        <div className="space-y-4">
          <h3 className="text-lg font-display font-bold text-[#071228]">More Articles & Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.slug}`}
                className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-[#C5A059]/50 transition-all shadow-xs block group"
              >
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-[#071228] group-hover:text-amber-700 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 mt-2 line-clamp-2">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ConsultationForm 
          initialNotes={`Reader of article: ${post.title}`}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default BlogArticle;
