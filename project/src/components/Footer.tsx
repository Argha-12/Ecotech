import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
} from "lucide-react";
import logo from "../assets/logo-ten.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950 text-white relative overflow-hidden shadow-lg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-full mx-auto px-4 lg:px-8 xl:px-16">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          {/* ✅ Changed from grid-cols-12 to grid-cols-3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <img
                  src={logo}
                  alt="Ecotech Global Services Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl shadow-lg shadow-blue-600/25 object-contain bg-white p-1"
                />
                <span className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-white">
                  Ecotech Global Services
                </span>
              </div>
              <p className="text-white text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Empowering businesses through innovative IT solutions and
                cutting-edge technology services. We transform ideas into
                digital reality.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 bg-gray-800/50 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 rounded-xl hover:bg-sky-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 rounded-xl hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 rounded-xl hover:bg-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Service Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 relative">
                Service Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  { href: "/cloud_services", label: "Cloud Services" },
                  {
                    href: "/it_infrastructure_solutions",
                    label: "IT Infrastructure Solutions",
                  },
                  {
                    href: "/software_licensing_solutions",
                    label: "Software Licensing Solutions",
                  },
                  {
                    href: "/email_collaboration_solutions",
                    label: "Email Colaboration Solutions",
                  },
                  {
                    href: "/audio_visual_solutions",
                    label: "Audio Visual Solutions",
                  },
                  {
                    href: "/managed_services_solutions",
                    label: "Managed Services Solutions",
                  },
                  {
                    href: "/managed_services_solutions",
                    label: "managed services solutions",
                  },
                  { href: "/web_app_development", label: "Web App Development" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-white hover:text-blue-400 transition-all"
                    >
                      <div className="p-1 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-500 transition-colors">
                        <svg
                          className="w-2 h-2 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 relative">
                Contact Info
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <a
                    href="https://www.google.com/maps?q=4+Fairlie+Place,+HMP+House,+2nd+Floor,+Room+No+228,+Kolkata+700001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white leading-relaxed hover:text-blue-400 transition-colors"
                  >
                    4 Fairlie Place, HMP House, 2nd Floor, Room No 228, Kolkata
                    700001
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <a
                    href="https://www.google.com/maps?q=Kolte+Patil+Raaga,+SY.+No-33,+Kannur,+Bengaluru,+560077,+Karnataka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white leading-relaxed hover:text-blue-400 transition-colors"
                  >
                    Kolte Patil Raaga, SY. No-33, Kannur, Bengaluru - 560077,
                    Karnataka
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="p-2 bg-green-600/20 rounded-lg flex-shrink-0">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <a
                    href="tel:+919836044007"
                    className="text-sm text-white hover:text-green-400 transition-colors"
                  >
                    +91 9836044007
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg flex-shrink-0">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <a
                    href="mailto:info@ecotechglobal.in"
                    className="text-sm text-white hover:text-purple-400 transition-colors"
                  >
                    info@ecotechglobal.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center pb-6 sm:pb-8">
          <button
            onClick={scrollToTop}
            className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 hover:scale-110"
          >
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919836044007"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.6.5.5 5.6.5 12c0 2 .5 3.9 1.6 5.6L.5 23.5l6-1.6c1.6 1 3.5 1.6 5.5 1.6 6.4 0 11.5-5.1 11.5-11.5S18.4.5 12 .5zm0 20.8c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.5 1 1-3.4-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-5.1 4.2-9.3 9.3-9.3s9.3 4.2 9.3 9.3-4.2 9.3-9.5 9.3zm5.1-7.1c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.3.1-.5 0-.2-.1-.5-.2-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.1 3.8.6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.7-.7 2-1.3.3-.6.3-1.1.2-1.2-.1-.1-.2-.1-.5-.2z" />
          </svg> */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
