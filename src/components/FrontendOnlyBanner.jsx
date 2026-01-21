import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

/**
 * Frontend-Only Notice Banner
 * Displays on all pages, can be closed, positioned behind sidebar
 */
export const FrontendOnlyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-yellow-50 border-b-2 border-yellow-400 px-4 py-3 shadow-md">
      <div className="max-w-full mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div className="text-sm min-w-0">
            <p className="font-semibold text-gray-900">Frontend-Only Demo Version</p>
            <p className="text-gray-700 break-words">
              This is a frontend demo with mock data. 
              <strong className="block sm:inline sm:before:content-['_•_']"> Login:</strong>
              <code className="bg-gray-200 px-2 py-1 rounded inline-block mt-1 sm:mt-0 sm:ml-1">admin/admin123</code>
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors p-2"
          aria-label="Close banner"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FrontendOnlyBanner;
