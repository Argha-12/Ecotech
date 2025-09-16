import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mobileNestedDropdown, setMobileNestedDropdown] = useState<string | null>(null);
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    if (isHomePage || isAboutPage) {
      setHeaderOpacity(0);

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const opacity = Math.min(scrollPosition / 300, 1);
        setHeaderOpacity(opacity);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setHeaderOpacity(1); // Always fully opaque for other pages
    }
  }, [isHomePage, isAboutPage, location.pathname]);

  type MenuItem = {
    title: string;
    href: string;
    items?: Omit<MenuItem, 'items'>[];
  };

  const servicesItems: MenuItem[] = [
    {
      title: 'Security Solutions',
      href: '/security_solutions',
      items: [
        { title: 'End Point Security', href: '/security_solutions/endpoint_security' },
        { title: 'Email Security', href: '/security_solutions/email_security' },
        { title: 'Managed EDR & XDR Solutions', href: '/security_solutions/managed_edr_xdr' },
        { title: 'Next Gen Firewalls', href: '/security_solutions/next_gen_firewalls' },
        { title: 'Network Access Control', href: '/security_solutions/network_access_control' },
        { title: 'NMS', href: '/security_solutions/network_monitoring' },
        { title: 'IT & OT Security', href: '/security_solutions/it_ot_security' },
        { title: 'SIEM, SOAR & SOC Solutions', href: '/security_solutions/siem_soar_soc' },
        { title: 'Security Audits', href: '/security_solutions/security_audits' },
      ]
    },
    {
      title: 'Cyber Security Solutions',
      href: '/Cyber_Security_Solutions',
    },
    {
      title: 'Cloud Solutions',
      href: '/cloud_services',
    },
    {
      title: 'IT Infrastructure Solutions',
      href: '/it_infrastructure_solutions',
      // items: [
      //   { title: 'Networking', href: '/services/consulting/strategy' },
      //   { title: 'Data Backup', href: '/services/consulting/digital' },
      // ]
    },
    {
      title: 'Software Licensing Solutions',
      href: '/software_licensing_solutions',
    },
    {
      title: 'Email & Collaboration Solutions',
      href: '/email_collaboration_solutions',
    },
    {
      title: 'Audio Visual Solutions',
      href: '/audio_visual_solutions',
      // items: [
      //   { title: 'Board Room Integrations', href: '/audio_visual_solutions/board_room_integrations' },
      //   { title: 'Active LED & Video Wall', href: '/audio_visual_solutions/active_led_video_wall' },
      // ]
    },
    {
      title: 'Managed Services Solutions',
      href: '/Managed_services_solutions',
      // items: [
      //   { title: 'IT Consulting Services', href: '/managed_services_solutions/it_consulting_services' },
      //   { title: 'Network Managed Services', href: '/managed_services_solutions/network_managed_services' },
      //   { title: 'Security Solutions', href: '/managed_services_solutions/security_solutions' },
      //   { title: 'Email & Collaboration Services', href: '/managed_services_solutions/email_collaboration_services' },
      // ]
    },
    {
      title: 'Web & App Development ',
      href: '/Web_App_Development ',
 
    }
  ];

  const resourcesItems: MenuItem[] = [
    { title: 'Case Studies', href: '/resources/case_studies' },
    { title: 'Blogs', href: '/resources/blog' },
    // { title: 'Support Desk', href: '/resources/support' },
    { title: 'Gallery', href: '/resources/gallery' }
  ];

  type NavItem = {
    label: string;
    path: string;
    hasDropdown?: boolean;
    items?: MenuItem[];
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
    }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = (isHomePage || isAboutPage) && headerOpacity === 0;

  return (
    <>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
      <header
        className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ease-in-out`}
      style={{
        background: isTransparent
          ? 'none'
          : (isHomePage || isAboutPage)
            ? `linear-gradient(to right, rgba(30, 58, 138, ${headerOpacity}), rgba(29, 78, 216, ${headerOpacity}), rgba(17, 24, 39, ${headerOpacity}))`
            : 'linear-gradient(to right, rgb(30, 58, 138), rgb(29, 78, 216), rgb(17, 24, 39))',
        backdropFilter: isTransparent ? 'none' : `blur(${8 * Math.max(headerOpacity, (!isHomePage && !isAboutPage) ? 1 : 0)}px)`,
        WebkitBackdropFilter: isTransparent ? 'none' : `blur(${8 * Math.max(headerOpacity, (!isHomePage && !isAboutPage) ? 1 : 0)}px)`,
        boxShadow: isTransparent
          ? 'none'
          : (headerOpacity > 0.5 || (!isHomePage && !isAboutPage))
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center overflow-hidden">
          <img src={logo} alt="Company Logo" className="w-full h-full object-contain" />
        </div>
        <span className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          <span className="text-white">Ecotech</span>
          <span className="text-white"> Global</span> 
          <span className="text-blue-300"> Services</span>
        </span>
      </Link>


          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex space-x-1 xl:space-x-2 items-center">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <>
                      <button
                        data-dropdown-toggle
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center gap-1 text-sm xl:text-base font-semibold px-2 xl:px-3 py-2 rounded-md transition duration-200 ${
                          activeDropdown === item.label
                            ? 'bg-white text-blue-800 shadow-sm'
                            : 'text-blue-100 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transform transition ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.label && (
                        <div 
                          ref={dropdownRef}
                          className="absolute left-0 mt-3 bg-white rounded-xl shadow-2xl backdrop-blur-sm border border-gray-100 z-50 animate-fade-in"
                          style={{ 
                            width: activeSubmenu ? '520px' : item.label === 'Resources' ? '200px' : '280px'
                          }}
                        >
                          <div className="flex">
                            {/* First level dropdown items */}
                            <div className={`py-2 ${item.label === 'Resources' ? 'w-full' : 'w-[280px]'}`}>
                              {item.items?.map((subItem, idx) => (
                                <div key={idx}>
                                  {subItem.items ? (
                                    // Has nested items - show as clickable item
                                    <button
                                      className={`w-full flex justify-between items-center px-6 py-3.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-300 cursor-pointer text-left group ${
                                        activeSubmenu === subItem.title ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700' : ''
                                      }`}
                                      onClick={() => {
                                        setActiveSubmenu(activeSubmenu === subItem.title ? null : subItem.title);
                                      }}
                                    >
                                      <span className="font-semibold text-sm">{subItem.title}</span>
                                      <ChevronRight className={`h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-all duration-300 transform ${
                                        activeSubmenu === subItem.title ? 'rotate-90 text-blue-600' : 'group-hover:translate-x-1'
                                      }`} />
                                    </button>
                                  ) : (
                                    // No nested items - direct link
                                    <Link
                                      to={subItem.href}
                                      className="block w-full px-6 py-3.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-300 font-semibold text-sm group"
                                    >
                                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">{subItem.title}</span>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                            
                            {/* Second level dropdown items */}
                            {activeSubmenu && (
                              <div className="w-[240px] border-l border-gray-100 bg-gray-50/50 py-2">
                                <div className="px-6 py-3 border-b border-gray-100">
                                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{activeSubmenu}</h3>
                                </div>
                                {item.items?.find(sub => sub.title === activeSubmenu)?.items?.map((nestedItem, nestedIdx) => (
                                  <Link
                                    key={nestedIdx}
                                    to={nestedItem.href}
                                    className="block px-6 py-3 text-gray-600 hover:bg-white hover:text-blue-700 transition-all duration-300 text-sm font-medium hover:pl-8 group"
                                  >
                                    <span className="flex items-center">
                                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                      {nestedItem.title}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-2 xl:px-4 py-3 text-sm xl:text-base font-semibold rounded-lg transition-all duration-200 ${
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
              
              {/* Action Buttons - Always Transparent */}
              <Link
                to="/get-quote"
                className="px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 text-blue-100 hover:text-white hover:bg-white/10"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 text-blue-100 hover:text-white hover:bg-white/10"
              >
                Contact
              </Link>
              <Link
                to="/career"
                className="px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 text-blue-100 hover:text-white hover:bg-white/10"
              >
                Career
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-blue-100 hover:text-white hover:bg-white/10 transition-all transform hover:scale-110"
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
          <div className="lg:hidden bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 border-t border-blue-700/30 animate-slide-down">
            <nav className="py-2 space-y-1 px-2">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-blue-100"
                        onClick={() => {
                          setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label);
                          setMobileNestedDropdown(null); // Reset nested dropdown when parent is toggled
                        }}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileOpenDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${mobileOpenDropdown === item.label ? 'max-h-[2000px]' : 'max-h-0'}`}>
                        {item.items?.map((subItem, idx) => (
                          <div key={idx} className="relative">
                            {subItem.items ? (
                              <div>
                                <button
                                  className="w-full flex justify-between items-center px-4 py-2 text-sm rounded-md text-blue-100 hover:bg-white/10"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileNestedDropdown(mobileNestedDropdown === subItem.title ? null : subItem.title);
                                  }}
                                >
                                  {subItem.title}
                                  <ChevronRight className={`h-4 w-4 transform transition-transform ${mobileNestedDropdown === subItem.title ? 'rotate-90' : ''}`} />
                                </button>
                                <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${mobileNestedDropdown === subItem.title ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                  {subItem.items.map((nestedItem, nestedIdx) => (
                                    <Link
                                      key={nestedIdx}
                                      to={nestedItem.href}
                                      className="block px-4 py-2 text-sm rounded-md text-blue-100 hover:bg-white/10"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setMobileOpenDropdown(null);
                                        setMobileNestedDropdown(null);
                                      }}
                                    >
                                      {nestedItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                to={subItem.href}
                                className="block px-4 py-2 text-sm rounded-md text-blue-100 hover:bg-white/10"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            )}
                          </div>
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

              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-2 border-t border-blue-700/30 mt-4">
                <Link
                  to="/get-quote"
                  className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 rounded-lg border border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-blue-900 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/career"
                  className="block w-full text-center px-4 py-2 rounded-lg border border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-blue-900 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Career
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;