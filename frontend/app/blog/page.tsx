import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const articles = [
    {
      title: 'US F-1 Visa Interview Guidelines: Key Questions for 2026/2027 Intakes',
      category: 'Visa Guidance',
      date: 'September 2026',
      readTime: '5 min read',
      snippet: 'Learn how to demonstrate strong non-immigrant intent, articulate your study plan, and prove financial sufficiency with ease.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'UK Graduate Route Visa Update: Post-Study Work Rights Explained',
      category: 'UK Admissions',
      date: 'August 2026',
      readTime: '4 min read',
      snippet: 'An in-depth breakdown of the 2-year post-study work visa for master graduates in Britain and employment trends across IT & finance.',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Studying in Germany Tuition-Free: Public University Requirements',
      category: 'European Education',
      date: 'July 2026',
      readTime: '6 min read',
      snippet: 'How Indian engineering students can study in world-class German institutions with zero tuition fees and learn about blocked account finances.',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block">
            EDUCATION NEWS & INSIGHTS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Aegis Overseas Editorial
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-light">
            Stay ahead with the latest immigration updates, university admission deadlines, and test preparation techniques.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {articles.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-card-elevated hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gold-700 font-bold uppercase tracking-wider bg-gold-100/70 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-neutral-400">{item.readTime}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 flex items-center justify-between mt-4">
                <span className="text-xs text-neutral-400">{item.date}</span>
                <span className="text-xs font-bold text-navy-950 group-hover:text-gold-700 inline-flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
