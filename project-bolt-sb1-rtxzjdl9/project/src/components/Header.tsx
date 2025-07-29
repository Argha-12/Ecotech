import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionOpenMobile, setIsSolutionOpenMobile] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    // { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const solutionItems = [
    'IT Infrastructure Solutions',
    'Licensing Solutions',
    'Managed Services',
    'Security Solutions',
    'Networking & IP Based Solutions',
    'Surveillance Solutions',
    'Audio Visual Solutions',
    'Data Centre Infrastructure Solution',
    'Cloud Solution',
    'GreenLake Solutions',
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 text-white shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden">
              <img src={logo} alt="Company Logo" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-3xl font-extrabold tracking-wide leading-tight">
              Ecotech <span className="text-blue-300">Global services</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center relative">
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

            {/* Solutions Dropdown (Desktop) */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-base font-semibold px-3 py-2 rounded-md text-blue-100 hover:text-white hover:bg-white/10 transition"
              >
                Solutions <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white text-gray-900 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50">
                {solutionItems.map((item, idx) => (
                  <div key={idx} className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
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

              {/* Solutions Dropdown (Mobile) */}
              <div className="mt-2">
                <button
                  onClick={() => setIsSolutionOpenMobile(!isSolutionOpenMobile)}
                  className="flex justify-between items-center w-full px-4 py-3 text-base font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition"
                >
                  Solutions
                  <ChevronDown className={`transform transition ${isSolutionOpenMobile ? 'rotate-180' : ''}`} />
                </button>
                {isSolutionOpenMobile && (
                  <div className="ml-4 mt-1 space-y-1">
                    {solutionItems.map((item, idx) => (
                      <div key={idx} className="px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
