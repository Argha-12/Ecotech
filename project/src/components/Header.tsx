import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import EndpointSecurity from '../pages/EndpointSecurity';

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

  useEffect(() => {
    // Reset to transparent when navigating to homepage
    if (isHomePage) {
      setHeaderOpacity(0);
      
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Gradually increase opacity from 0 to 1 over the first 300px of scroll
        const opacity = Math.min(scrollPosition / 300, 1);
        setHeaderOpacity(opacity);
      };

      window.addEventListener('scroll', handleScroll);
      // Call it once to set initial state
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // On other pages, header is always opaque
      setHeaderOpacity(1);
    }
  }, [isHomePage, location.pathname]);

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
        { title: 'End Point Security', href: '/about' },
        { title: 'Email Security', href: '/security_solutions/email_security' },
        { title: 'managed EDR & XDR Solutions', href: '/security_solutions/managed_edr_xdr' },
        { title: 'Next Gen Firewalls', href: '/security_solutions/next_gen_firewalls' },
        { title: 'Network Access Control', href: '/security_solutions/network_access_control' },
        { title: 'NMS (Network Management Solutions)', href: '/security_solutions/nms' },
        { title: 'IT & OT Security', href: '/security_solutions/it_ot_security' },
        { title: 'SIEM, SOAR & SOC Solutions', href: '/security_solutions/siem_soar_soc' },
      ]
    },
    { 
      title: 'Cloud Services',
      href: '/cloud_services',
      items: [
        { title: 'Google Cloud Platform (GCP)', href: '/cloud_services/gcp' },
        { title: 'Amazon Web Services (AWS)', href: '/cloud_services/aws' },
        { title: 'Microsoft Azure', href: '/cloud_services/azure' }
      ]
    },
    { 
      title: 'IT Infrastructure Solutions',
      href: '/it_infrastructure_solutions',
      items: [
        { title: 'Networking', href: '/services/consulting/strategy' },
        { title: 'Data Backup', href: '/services/consulting/digital' },
      ]
    },
    { 
      title: 'Software Licensing Solutions',
      href: '/software_licensing_solutions',
      items: [
        { title: 'Microsoft', href: '/software_licensing_solutions/microsoft' },
        { title: 'Adobe', href: '/software_licensing_solutions/adobe' },
        { title: 'Autodesk', href: '/software_licensing_solutions/autodesk' },
        { title: 'EViews', href: '/software_licensing_solutions/eviews' },
        { title: 'Corel', href: '/software_licensing_solutions/corel' },
      ]
    },
    { 
      title: 'Email & Collaboration Solutions',
      href: '/email_collaboration_solutions',
      items: [
        { title: 'Google Workspace', href: '/email_collaboration_solutions/google_workspace' },
        { title: 'Microsoft 365', href: '/email_collaboration_solutions/microsoft_365' },
        { title: 'Zoho Email', href: '/email_collaboration_solutions/zoho_email' },
        { title: 'Rediffmail', href: '/email_collaboration_solutions/rediffmail' },
      ]
    },
    {
      title: 'Audio Visual Solutions',
      href: '/audio_visual_solutions',
      items: [
        { title: 'Board Room Integrations', href: '/audio_visual_solutions/board_room_integrations' },
        { title: 'Active LED & Video Wall', href: '/audio_visual_solutions/active_led_video_wall' },
      ]
    },
    {
      title: 'Managed Services Solutions',
      href: '/managed_services_solutions',
      items: [
        { title: 'IT Consulting Services', href: '/managed_services_solutions/it_consulting_services' },
        { title: 'Network Managed Services', href: '/managed_services_solutions/network_managed_services' },
        { title: 'Security Solutions', href: '/managed_services_solutions/security_solutions' },
        { title: 'Email & Collaboration Services', href: '/managed_services_solutions/email_collaboration_services' },
        
      ]
    }

  ];

  const resourcesItems: MenuItem[] = [
    {
      title: 'Case Studies',
      href: '/case_studies',
      
    },
    {
      title: 'Blogs',
      href: '/blogs',
    },
    {
      title: 'Support Desk',
      href: '/support',
    }
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

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is on the dropdown button itself
      const clickedElement = event.target as HTMLElement;
      const isDropdownButton = clickedElement.closest('button')?.hasAttribute('data-dropdown-toggle');
      
      if (!isDropdownButton && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    // Use 'click' instead of 'mousedown' to allow link navigation
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);



  // Determine if header should be transparent
  const isTransparent = isHomePage && headerOpacity === 0;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ease-in-out"
      style={{
        background: isTransparent 
          ? 'transparent' 
          : isHomePage 
            ? `linear-gradient(to right, rgba(30, 58, 138, ${headerOpacity}), rgba(29, 78, 216, ${headerOpacity}), rgba(17, 24, 39, ${headerOpacity}))`
            : 'linear-gradient(to right, rgb(30, 58, 138), rgb(29, 78, 216), rgb(17, 24, 39))',
        backgroundColor: isTransparent ? 'transparent' : undefined,
        backdropFilter: isTransparent ? 'none' : `blur(${8 * Math.max(headerOpacity, !isHomePage ? 1 : 0)}px)`,
        boxShadow: isTransparent ? 'none' : (headerOpacity > 0.5 || !isHomePage ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'),
        WebkitBackdropFilter: isTransparent ? 'none' : `blur(${8 * Math.max(headerOpacity, !isHomePage ? 1 : 0)}px)`,
      }}
    >
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
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      data-dropdown-toggle
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center gap-1 text-base font-semibold px-3 py-2 rounded-md transition duration-200 ${
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
                        className="absolute left-0 mt-2 bg-white/95 rounded-lg shadow-2xl overflow-visible backdrop-blur-md border border-white/20 z-50"
                        style={{ width: activeSubmenu ? '500px' : '250px' }}
                      >
                        <div className="flex">
                          {/* First level dropdown items */}
                          <div className="w-[250px]">
                            {item.items?.map((subItem, idx) => (
                              <div key={idx}>
                                {subItem.items ? (
                                  // Has nested items - show as clickable item
                                  <button
                                    className="w-full flex justify-between items-center px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer text-left"
                                    onClick={() => {
                                      setActiveSubmenu(activeSubmenu === subItem.title ? null : subItem.title);
                                    }}
                                  >
                                    <span className="font-medium">{subItem.title}</span>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                  </button>
                                ) : (
                                  // No nested items - direct link
                                  <Link
                                    to={subItem.href}
                                    className="block w-full px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                    onClick={(e) => {
                                      console.log('Direct link clicked:', subItem.title, subItem.href);
                                      console.log('Event default prevented?', e.defaultPrevented);
                                    }}
                                  >
                                    {subItem.title}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                          
                          {/* Second level dropdown items */}
                          {activeSubmenu && (
                            <div className="w-[250px] border-l border-gray-200">
                              {item.items?.find(sub => sub.title === activeSubmenu)?.items?.map((nestedItem, nestedIdx) => (
                                <Link
                                  key={nestedIdx}
                                  to={nestedItem.href}
                                  className="block px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-sm"
                                  onClick={(e) => {
                                    console.log('Nested link clicked:', nestedItem.title, nestedItem.href);
                                    console.log('Event default prevented?', e.defaultPrevented);
                                  }}
                                >
                                  {nestedItem.title}
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
              </nav>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;
