import React from "react";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
} from "lucide-react";
import logo from '../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden shadow-lg">
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {/* Company Info */}
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <img 
              src={logo}
              alt="Ecotech Global Services Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl shadow-lg shadow-blue-600/25 object-contain bg-white p-1" 
            />
            
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Ecotech Global Services
            </span>
          </div>
          <p className="text-white text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
            Empowering businesses through innovative IT solutions and
            cutting-edge technology services. We transform ideas into digital
            reality.
          </p>
              {/* Social Links */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-sky-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
                >
                  <Twitter className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/get-quote", label: "GetQuote" },
                  { href: "/Contact", label: "Contact" },
                  { href: "/Career", label: "Career" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group text-white hover:text-blue-400 transition-all duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 relative">
                Contact Info
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <a
                    href="https://www.google.com/maps?q=4+Fairlie+Place,+HMP+House,+2nd+Floor,+Room+No+228,+Kolkata+700001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors leading-relaxed"
                  >
                    4 Fairlie Place, HMP House, 2nd Floor, Room No 228 Kolkata 700001
                  </a>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="p-2 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <span className="text-sm sm:text-base text-white group-hover:text-green-400 transition-colors">
                    +91 9836044007
                  </span>
                </li>
                <li className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="p-2 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <span className="text-sm sm:text-base text-white group-hover:text-purple-400 transition-colors">
                    info@ecotechglobal.in
                  </span>
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
      </div>
    </footer>
  );
};

export default Footer;
