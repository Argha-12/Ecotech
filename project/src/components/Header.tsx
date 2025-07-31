import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mobileNestedDropdown, setMobileNestedDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        { title: 'End Point Security', href: '/endpoint-security' },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white backdrop-blur-md">
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
                      <div 
                        className="absolute left-0 mt-2 w-64 bg-white/95 rounded-lg shadow-2xl overflow-visible backdrop-blur-md border border-white/20 z-50"
                        onMouseLeave={() => {
                          // Add a small delay to allow for moving to nested dropdown
                          setTimeout(() => {
                            const isHoveringNested = document.querySelector('.nested-dropdown:hover');
                            if (!isHoveringNested) {
                              setActiveDropdown(null);
                            }
                          }, 200);
                        }}
                      >
                        {item.items?.map((subItem, idx) => (
                          <div key={idx} className="relative group" onClick={(e) => e.stopPropagation()}>
                            {subItem.items ? (
                              <div className="relative">
                                <div 
                                  className="flex justify-between items-center px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                                  onMouseEnter={() => {
                                    // Keep the parent dropdown open when hovering over nested items
                                    setActiveDropdown(item.label);
                                  }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                >
                                  <span className="font-medium">{subItem.title}</span>
                                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <div 
                                  className="nested-dropdown invisible opacity-0 group-hover:opacity-100 group-hover:visible absolute left-full top-0 ml-1 w-64 bg-white/95 rounded-lg shadow-2xl overflow-hidden border border-white/20 z-50 transition-all duration-200 ease-in-out"
                                  onMouseLeave={() => setActiveDropdown(null)}
                                >
                                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {subItem.title}
                                  </div>
                                  {subItem.items.map((nestedItem, nestedIdx) => (
                                    <Link
                                      key={nestedIdx}
                                      to={nestedItem.href}
                                      className="block px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-sm"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {nestedItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className="w-full" onClick={(e) => e.stopPropagation()}>
                                <Link
                                  to={subItem.href}
                                  className="block w-full px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem.title}
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}
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
