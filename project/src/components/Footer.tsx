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
      {/* Animated Background */}
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

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-6 lg:px-16  ">
        <div className="py-12 sm:py-16">
          {/* Main Footer Row */}
          <div className="flex flex-wrap justify-between items-start gap-12">
            {/* Company Info */}
            <div className="min-w-[250px] flex-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={logo}
                  alt="Ecotech Global Services Logo"
                  className="w-12 h-12 rounded-2xl shadow-lg shadow-blue-600/25 object-contain bg-white p-1"
                />
                <span className="text-2xl font-bold text-white leading-tight">
                  Ecotech Global Services
                </span>
              </div>
              <p className="text-gray-300 text-l leading-relaxed mb-6">
                Empowering businesses through innovative IT solutions and
                cutting-edge technology services. We transform ideas into
                digital reality.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "https://facebook.com/", color: "blue-600" },
                  { icon: Twitter, href: "https://twitter.com/", color: "sky-500" },
                  { icon: Linkedin, href: "https://linkedin.com/", color: "blue-500" },
                  { icon: Instagram, href: "https://instagram.com/", color: "pink-500" },
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 bg-gray-800/50 rounded-xl hover:bg-${color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${color}/25`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="min-w-[200px] flex-1">
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  { href: "/cloud_services", label: "Cloud Services" },
                  { href: "/it_infrastructure_solutions", label: "IT Infrastructure Solutions" },
                  { href: "/software_licensing_solutions", label: "Software Licensing Solutions" },
                  { href: "/email_collaboration_solutions", label: "Email Collaboration Solutions" },
                  { href: "/audio_visual_solutions", label: "Audio Visual Solutions" },
                  { href: "/managed_services_solutions", label: "Managed Services Solutions" },
                  { href: "/web_app_development", label: "Web App Development" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="p-1 bg-blue-600/80 rounded-full mr-3 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
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
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Locations */}
            <div className="min-w-[250px] flex-1">
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Office Locations
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </h3>
              <div className="space-y-4">
                {[
                  {
                    city: "Kolkata",
                    address:
                      "4 Fairlie Place, HMP House, 2nd Floor, Room No 228, Kolkata 700001",
                    mapUrl:
                      "https://www.google.com/maps?q=4+Fairlie+Place,+HMP+House,+2nd+Floor,+Room+No+228,+Kolkata+700001",
                  },
                  {
                    city: "Bengaluru",
                    address:
                      "Kolte Patil Raaga, SY. No-33, Kannur, Bengaluru - 560077",
                    mapUrl:
                      "https://www.google.com/maps?q=Kolte+Patil+Raaga,+SY.+No-33,+Kannur,+Bengaluru,+560077,+Karnataka",
                  },
                  {
                    city: "Bhubaneswar",
                    address:
                      "PS LAXMI SAGAR, Behind Santoshi Maa Temple, Bomikhal, Bhubaneswar, Odisha, 751010",
                    mapUrl:
                      "https://www.google.com/maps/search/PS+LAXMI+SAGAR+Behind+Santoshi+Maa+Temple...",
                  },
                ].map((office, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-600/20 rounded-lg group-hover:scale-110 transition-transform">
                        <MapPin className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">
                          {office.city}
                        </div>
                        <a
                          href={office.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 leading-relaxed hover:text-blue-400 transition-colors duration-300 block"
                        >
                          {office.address}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="min-w-[200px] flex-1">
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Contact Details
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+919836044007"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
                >
                  <Phone className="w-4 h-4 text-green-400" /> +91 9836044007
                </a>
                <a
                  href="mailto:info@ecotechglobal.in"
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
                >
                  <Mail className="w-4 h-4 text-purple-400" /> info@ecotechglobal.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Top */}
        <div className="flex justify-center py-8">
          <button
            onClick={scrollToTop}
            className="group p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5 text-white group-hover:animate-bounce" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 py-6">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Ecotech Global Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
