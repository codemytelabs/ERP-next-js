'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface TopNavbarProps {
  title?: string;
  onMenuClick?: () => void;
}

export const TopNavbar = ({ title, onMenuClick }: TopNavbarProps) => {
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Generate page title based on current path
  const getPageTitle = () => {
    if (title) return title;
    
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return 'Dashboard';
    
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1).replace('-', ' ');
  };

  return (
    <header className="h-16 w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 flex justify-between items-center px-4 sm:px-6 lg:px-8 shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        {/* Mobile menu button */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <h1 className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">{getPageTitle()}</h1>
        <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500">
          <span>/</span>
          <span>ERP System</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 xl:w-64 px-4 py-2 pl-10 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Mobile search button */}
        <button className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500 hidden md:block">admin@company.com</p>
            </div>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 py-1 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg mx-1">
                Profile Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg mx-1">
                Account Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg mx-1">
                Preferences
              </a>
              <hr className="my-1 border-slate-200" />
              <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg mx-1">
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};