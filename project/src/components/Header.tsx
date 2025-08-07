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
  const hasTransparentHeader = isHomePage || isAboutPage;
  
  // Check if current page should have blue header
  const isServicesPage = location.pathname.startsWith('/services');
  const isContactPage = location.pathname.startsWith('/contact');
  const isResourcesPage = location.pathname.startsWith('/resources');
  const hasBlueHeader = isServicesPage || isContactPage || isResourcesPage;
  
  // Debug logging
  console.log('Current path:', location.pathname);
  console.log('Has blue header:', hasBlueHeader);
  console.log('Is resources page:', isResourcesPage);

  useEffect(() => {
    // Immediately set opacity for blue header pages
    if (hasBlueHeader) {
      setHeaderOpacity(1);
      return; // Exit early for blue header pages
    }
    
    // Reset to transparent when navigating to homepage or about page
    if (hasTransparentHeader) {
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
  }, [hasTransparentHeader, hasBlueHeader, location.pathname]);

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
  // Blue header pages should never be transparent regardless of opacity state
  const isTransparent = hasTransparentHeader && headerOpacity === 0 && !hasBlueHeader;
  
  // Debug logging
  console.log('Header Debug:', {
    pathname: location.pathname,
    isHomePage,
    isAboutPage,
    hasTransparentHeader,
    hasBlueHeader,
    headerOpacity,
    isTransparent
  });

  // Extract header content to avoid duplication
  const renderHeaderContent = () => (
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
        <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
          {/* Rest of navigation content */}
          <Link to="/" className="hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-300 transition-colors">
            About Us
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => {
              setActiveDropdown(null);
              setActiveSubmenu(null);
            }}
          >
            <Link 
              to="/services" 
              className="hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            {activeDropdown === 'services' && (
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {servicesItems.map((item) => (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => item.items && setActiveSubmenu(item.title)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link
                        to={item.href}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {item.title}
                        {item.items && <ChevronRight className="w-4 h-4" />}
                      </Link>
                      {item.items && activeSubmenu === item.title && (
                        <div className="absolute left-full top-0 ml-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => {
              setActiveDropdown(null);
              setActiveSubmenu(null);
            }}
          >
            <Link 
              to="/resources" 
              className="hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              Resources <ChevronDown className="w-4 h-4" />
            </Link>
            {activeDropdown === 'resources' && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-blue-300 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white hover:text-blue-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 border-t border-gray-700">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="px-2 py-2 hover:bg-gray-800 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-2 py-2 hover:bg-gray-800 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="w-full text-left px-2 py-2 hover:bg-gray-800 rounded transition-colors flex items-center justify-between"
                onClick={() => setMobileOpenDropdown(mobileOpenDropdown === 'services' ? null : 'services')}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  mobileOpenDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              {mobileOpenDropdown === 'services' && (
                <div className="pl-4 mt-2 space-y-1">
                  {servicesItems.map((item) => (
                    <div key={item.title}>
                      {item.items ? (
                        <>
                          <button
                            className="w-full text-left px-2 py-2 hover:bg-gray-800 rounded transition-colors flex items-center justify-between text-sm"
                            onClick={() => setMobileNestedDropdown(mobileNestedDropdown === item.title ? null : item.title)}
                          >
                            {item.title}
                            <ChevronDown className={`w-3 h-3 transition-transform ${
                              mobileNestedDropdown === item.title ? 'rotate-180' : ''
                            }`} />
                          </button>
                          {mobileNestedDropdown === item.title && (
                            <div className="pl-4 mt-1 space-y-1">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  className="block px-2 py-1 hover:bg-gray-800 rounded transition-colors text-sm"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-2 py-2 hover:bg-gray-800 rounded transition-colors text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources Dropdown */}
            <div>
              <button
                className="w-full text-left px-2 py-2 hover:bg-gray-800 rounded transition-colors flex items-center justify-between"
                onClick={() => setMobileOpenDropdown(mobileOpenDropdown === 'resources' ? null : 'resources')}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  mobileOpenDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>
              {mobileOpenDropdown === 'resources' && (
                <div className="pl-4 mt-2 space-y-1">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block px-2 py-2 hover:bg-gray-800 rounded transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="px-2 py-2 hover:bg-gray-800 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );

  // Use separate rendering logic for blue header pages to avoid timing issues
  if (hasBlueHeader) {
    return (
      <header 
        className="fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ease-in-out"
        style={{
          background: 'rgb(59, 130, 246)',
          backgroundColor: 'rgb(59, 130, 246)',
          backgroundImage: 'none',
          backdropFilter: 'none',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          WebkitBackdropFilter: 'none',
        }}
      >
        {renderHeaderContent()}
      </header>
    );
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ease-in-out"
      style={{
        background: hasTransparentHeader 
          ? `linear-gradient(to right, rgba(30, 58, 138, ${headerOpacity}), rgba(29, 78, 216, ${headerOpacity}), rgba(17, 24, 39, ${headerOpacity}))`
          : 'linear-gradient(to right, rgb(30, 58, 138), rgb(29, 78, 216), rgb(17, 24, 39))',
        backdropFilter: `blur(${8 * Math.max(headerOpacity, !hasTransparentHeader ? 1 : 0)}px)`,
        boxShadow: headerOpacity > 0.5 || !hasTransparentHeader ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
        WebkitBackdropFilter: `blur(${8 * Math.max(headerOpacity, !hasTransparentHeader ? 1 : 0)}px)`,
      }}
    >
      {renderHeaderContent()}
    </header>
  );
};

export default Header;
