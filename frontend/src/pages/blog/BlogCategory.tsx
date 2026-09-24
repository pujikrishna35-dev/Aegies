import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blog';

export const BlogCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  // Filter posts by category slug
  const normalizedCat = (category || '').replace(/-/g, ' ').toLowerCase();
  const matchingPosts = BLOG_POSTS.filter(
    p => p.category.toLowerCase().includes(normalizedCat) || normalizedCat.includes(p.category.toLowerCase())
  );

  return (
    <div className="pt-28 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Link to="/" className="hover:text-neutral-800">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-neutral-800">Blog</Link>
            <span>/</span>
            <span className="text-[#071228] font-bold capitalize">{category}</span>
          </div>
        </div>

        {/* Header */}
        <div className="bg-[#071228] text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-[#C5A059]/20">
          <span className="text-xs font-bold text-[#E6C687] uppercase tracking-wider block mb-2">Category</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight capitalize">
            {category?.replace(/-/g, ' ')}
          </h1>
          <p className="mt-2 text-slate-300 text-sm">
            Showing verified articles and immigration insights filed under this topic.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchingPosts.length > 0 ? (
            matchingPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-neutral-100">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-base font-bold font-display text-[#071228] group-hover:text-amber-700 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-xs text-neutral-600 mt-2 line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">{post.author.name}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-amber-700 hover:text-[#071228] flex items-center gap-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-3 bg-white rounded-2xl border border-neutral-200 p-12 text-center">
              <BookOpen className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-neutral-700">No articles currently published in this category.</p>
              <Link to="/blog" className="mt-4 inline-block px-4 py-2 bg-[#071228] text-white rounded-xl text-xs font-bold">
                View All Articles
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default BlogCategory;
