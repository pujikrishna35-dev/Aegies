import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => (
  <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-display font-extrabold text-[#071228]">404 - Page Not Found</h1>
    <p className="text-slate-600 mt-2 text-base">The page you are looking for does not exist or has moved.</p>
    <div className="mt-8">
      <Link to="/" className="inline-block px-6 py-2.5 rounded-xl bg-[#8A1538] text-white font-bold text-sm">
        Return Home
      </Link>
    </div>
  </div>
);

export default NotFound;
