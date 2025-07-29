import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown, ChevronUp, ArrowRight, Cloud, Server, Database, Cpu, BookOpen, FileText, Headphones } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesItems = [
    { 
      icon: <Cloud className="w-5 h-5 text-blue-500" />, 
      title: 'Cloud Solutions', 
      description: 'Scalable cloud infrastructure and services',
      href: '/services/cloud'
    },
    { 
      icon: <Server className="w-5 h-5 text-green-500" />, 
      title: 'DevOps', 
      description: 'CI/CD pipelines and automation',
      href: '/services/devops'
    },
    { 
      icon: <Database className="w-5 h-5 text-purple-500" />, 
      title: 'Data Analytics', 
      description: 'Data-driven insights and visualization',
      href: '/services/data-analytics'
    },
    { 
      icon: <Cpu className="w-5 h-5 text-orange-500" />, 
      title: 'AI/ML Services', 
      description: 'Intelligent solutions powered by AI',
      href: '/services/ai-ml'
    },
  ];

  const resourcesItems = [
    {
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      title: 'Documentation',
      href: '/resources/docs'
    },
    {
      icon: <FileText className="w-5 h-5 text-green-400" />,
      title: 'Case Studies',
      href: '/resources/case-studies'
    },
    {
      icon: <Headphones className="w-5 h-5 text-purple-400" />,
      title: 'Support Center',
      href: '/support'
    }
  ];

  type NavItem = {
    label: string;
    path: string;
    hasDropdown?: boolean;
    items?: Array<{
      icon: JSX.Element;
      title: string;
      description?: string;
      href: string;
    }>;
  };

  const navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { 
      path: '/services',
      label: 'Services', 
      hasDropdown: true,
      items: servicesItems
    },
    { 
      path: '/resources',
      label: 'Resources', 
      hasDropdown: true,
      items: resourcesItems
    },
    { path: '/contact', label: 'Contact Us' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 text-white shadow-xl backdrop-blur-md border-b border-blue-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with hover effect */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              <Code2 className="w-7 h-7 text-blue-700" />
            </div>
            <span className="text-3xl font-extrabold tracking-wide leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Ecotech <span className="text-blue-300">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center relative">
            {navItems.map((item) => (
              <div key={item.label} className="relative" ref={dropdownRef}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                        activeDropdown === item.label 
                          ? 'text-white bg-white/20' 
                          : 'text-blue-100 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                      {activeDropdown === item.label ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-blue-100/20 backdrop-blur-xl bg-white/95">
                        <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                          <h3 className="font-bold text-lg">{item.label}</h3>
                        </div>
                        <div className="p-2">
                          {item.items?.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.href}
                              className="group flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="p-2 bg-blue-50 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
                                {subItem.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {subItem.title}
                                </div>
                                {subItem.description && (
                                  <p className="text-sm text-gray-500">{subItem.description}</p>
                                )}
                              </div>
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 ml-2" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2 rounded-lg text-blue-100 hover:text-white hover:bg-white/10 transition-all transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 border-t border-blue-700/30 animate-slide-down">
              <nav className="py-2 space-y-1 px-2">
                {navItems.map((item) => (
                  <div key={item.label} className="space-y-1">
                    {item.hasDropdown ? (
                      <div className="space-y-1">
                            <div className="px-4 py-3 text-base font-medium text-blue-100">
                              {item.label}
                            </div>
                            <div className="pl-6 space-y-1">
                              {item.items?.map((subItem, idx) => (
                                <Link
                                  key={idx}
                                  to={subItem.href}
                                  className="flex items-center px-4 py-2 text-sm rounded-md text-blue-100 hover:bg-white/10"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <span className="mr-3">
                                    {subItem.icon}
                                  </span>
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 text-base font-medium rounded-md transition-all ${
                          isActive(item.path)
                            ? 'bg-white text-blue-800 shadow-md'
                            : 'text-blue-100 hover:text-white hover:bg-white/10'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;
