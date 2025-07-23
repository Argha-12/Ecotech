import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    // { path: '/industries', label: 'Industries' },
    // { path: '/technologies', label: 'Technologies' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 text-white shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md">
              <Code2 className="w-6 h-6 text-blue-700" />
            </div>
            <span className="text-3xl font-extrabold tracking-wide leading-tight">
              Ecotech <span className="text-blue-300">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-semibold px-3 py-2 rounded-md transition duration-200 ${
                  isActive(item.path)
                    ? 'bg-white text-blue-800 shadow-sm'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2 rounded-md text-blue-100 hover:text-white hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-blue-800 via-blue-900 to-gray-900 border-t border-blue-700 animate-slide-down">
            <nav className="py-4 space-y-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition ${
                    isActive(item.path)
                      ? 'bg-white text-blue-800 shadow'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
