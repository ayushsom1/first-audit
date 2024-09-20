import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
        {/* Sidebar toggle button (visible on mobile) */}
        <button
          className="text-gray-500 focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Branding (hidden on mobile to avoid duplication) */}
        <Link to="/" className="hidden md:block text-2xl font-bold text-indigo-600">
          AuditPro
        </Link>

        {/* User actions */}
        <div className="flex items-center space-x-4">
          {/* Example user avatar */}
          <div className="relative">
            <button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User Avatar"
              />
            </button>
            {/* Dropdown menu can be added here */}
          </div>

          {/* Logout button */}
          <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;