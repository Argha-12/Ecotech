import React from "react";
import { useEffect, useState } from "react";

const CustomerLogos = () => {
  // Customer logos data - only the mentioned partner brands
  const customerLogos = [
    { name: "Cisco", logo: "https://logos-world.net/wp-content/uploads/2020/06/Cisco-Logo.png" },
    { name: "Heinrich", logo: "https://via.placeholder.com/150x60/ffffff/000000?text=HEINRICH" },
    { name: "People Link", logo: "https://via.placeholder.com/150x60/ffffff/000000?text=PEOPLE+LINK" },
    { name: "Logitech", logo: "https://logos-world.net/wp-content/uploads/2020/12/Logitech-Logo.png" },
    { name: "Delta", logo: "https://logos-world.net/wp-content/uploads/2020/04/Delta-Logo.png" },
    { name: "LG", logo: "https://logos-world.net/wp-content/uploads/2020/04/LG-Logo.png" },
    { name: "Samsung", logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png" },
    { name: "BenQ", logo: "https://logos-world.net/wp-content/uploads/2020/12/BenQ-Logo.png" },
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...customerLogos, ...customerLogos];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll space-x-8">
        {duplicatedLogos.map((customer, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-20 w-32 bg-gray-100 rounded-xl flex items-center justify-center p-4 border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <img
              src={customer.logo}
              alt={customer.name}
              className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const AVSolutions = () => {
  // Background gradient colors that will rotate
  const gradients = [
    "from-purple-600 via-pink-500 to-red-500",
    "from-blue-600 via-cyan-500 to-green-400",
    "from-yellow-500 via-orange-500 to-pink-600",
    "from-indigo-600 via-purple-500 to-pink-500",
    "from-gray-800 via-gray-900 to-black"
  ];

  const [gradientIndex, setGradientIndex] = useState(0);

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <div className="bg-gray-50">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
            Audio Visual Solutions
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-8">
            <span className="text-yellow-300">Engage.</span>{" "}
            <span className="text-pink-300">Inspire.</span>{" "}
            <span className="text-green-300">Transform.</span>
          </div>
          <p className="text-xl italic mb-6 text-blue-200">
            "Turning Communication into an Experience."
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            At Ecotech Global Services, we design and deliver cutting-edge Audio
            Visual solutions that bring ideas to life, enhance collaboration,
            and captivate audiences.
          </p>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-lg font-medium text-gray-700 leading-relaxed">
            Partnering with industry leaders like{" "}
            <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              Cisco
            </span>,{" "}
            <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              Heinrich
            </span>,{" "}
            <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              People Link
            </span>,{" "}
            <span className="font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">
              Logitech
            </span>,{" "}
            <span className="font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
              Delta
            </span>,{" "}
            <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
              LG
            </span>,{" "}
            <span className="font-bold text-blue-800 bg-blue-50 px-2 py-1 rounded">
              Samsung
            </span>, and{" "}
            <span className="font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded">
              BenQ
            </span>{" "}
            — we ensure every project is engineered for clarity, impact, and
            reliability.
          </p>
        </div>
      </section>

      {/* Core AV Offerings */}
      <section className="py-20 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Core AV Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Boardroom Integrations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Seamless, high-definition conferencing and presentation systems
                from Cisco, Heinrich, People Link, and Logitech — built to
                elevate executive decision-making and global collaboration.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Smart Classroom Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Interactive displays, digital boards, and smart teaching tools
                from LG, Samsung, BenQ, and People Link — creating immersive
                learning environments for schools, universities, and training
                centers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📺</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                Active LED & Video Walls
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Visually stunning LED installations from Delta and People Link —
                perfect for control rooms, auditoriums, command centers, and
                corporate lobbies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Why Businesses Choose Ecotech AV Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: "🏆", text: "ISO-Certified Implementation Standards for unmatched quality & security" },
              { icon: "🎨", text: "Custom Design & Integration for your specific environment" },
              { icon: "🚀", text: "Future-Ready Technology from the world's top AV brands" },
              { icon: "🔧", text: "End-to-End Service — from consulting and installation to training & maintenance" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300">
                <div className="text-3xl">{item.icon}</div>
                <p className="text-lg text-gray-700 text-left">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl italic text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            "From corporate boardrooms to interactive classrooms, our AV
            solutions make every interaction unforgettable."
          </p>
        </div>
      </section>

      {/* Enhanced Customer Logos Section with Auto-Scroll */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Working with industry-leading brands to deliver excellence 🤝
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>

        {/* Auto-Scrolling Customer Logos */}
        <div className="mb-8">
          <CustomerLogos />
        </div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-300/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-indigo-400/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-purple-400/50 rounded-full animate-pulse"></div>
      </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Let's create something extraordinary together
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform">
              📩 Request a Consultation
            </button>
            <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-2xl shadow-xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 transform">
              📞 Talk to an AV Expert
            </button>
          </div>
        </div>
        
        {/* Background animation */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-spin"></div>
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-400/20 rounded-full animate-ping"></div>
      </section>
    </div>
  );
};

export default AVSolutions;