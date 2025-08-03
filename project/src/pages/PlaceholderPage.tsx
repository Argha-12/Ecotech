import React from 'react';
import { useLocation } from 'react-router-dom';

const PlaceholderPage: React.FC = () => {
  const location = useLocation();
  const pageName = location.pathname.split('/').filter(Boolean).join(' > ').replace(/-/g, ' ');
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 capitalize mb-4">
            {pageName || 'Page'}
          </h1>
          <p className="text-gray-600 mb-8">
            This page is under construction. Content will be added soon.
          </p>
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-500">
            Path: {location.pathname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
