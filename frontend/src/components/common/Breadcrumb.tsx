import React from 'react';
import { Link } from 'react-router-dom';

export const Breadcrumb: React.FC<{ items: { label: string; href?: string }[] }> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-600 py-4 font-medium">
    <Link to="/" className="hover:text-amber-800">Home</Link>
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        <span className="text-slate-400">/</span>
        {item.href ? (
          <Link to={item.href} className="hover:text-amber-800">{item.label}</Link>
        ) : (
          <span className="text-slate-900 font-bold">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);
