import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "UK Graduate Route 2026: Complete Work Visa & Employment Guide",
    category: "Visa & Careers",
    date: "Sep 2026",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "How to Secure Up to $25,000 Scholarships for US STEM Masters",
    category: "Scholarships",
    date: "Aug 2026",
    image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Navigating Post-Study Work Visas in Canada and Australia",
    category: "Country Guides",
    date: "Aug 2026",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop"
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Industry Knowledge
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#071228]">
              YOUR GUIDE TO STUDYING ABROAD
            </h2>
          </div>
          <Link
            to="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#8A1538] hover:text-burgundy-900 transition"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <Link key={i} to="/blog" className="group block bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition duration-300">
              <div className="h-52 overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{art.category}</span>
                <h3 className="font-bold text-lg text-[#071228] mt-2 group-hover:text-[#8A1538] transition leading-snug">{art.title}</h3>
                <p className="text-xs text-slate-400 mt-4">{art.date} • 5 min read</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
