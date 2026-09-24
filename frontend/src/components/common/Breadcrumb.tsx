import React from 'react';
import { Link } from 'react-router-dom';

export const Breadcrumb: React.FC<{ items: { label: string; href?: string }[] }> = ({ items }) => (
  <nav className="flex items-center space-x-2 text-xs text-slate-500 py-4">
    <Link to="/" className="hover:text-amber-600">Home</Link>
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        <span>/</span>
        {item.href ? (
          <Link to={item.href} className="hover:text-amber-600">{item.label}</Link>
        ) : (
          <span className="text-slate-800 font-medium">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);
