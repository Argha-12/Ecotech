import React from "react";
import { useEffect, useState } from "react";

const CustomerLogos = () => {
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

  const duplicatedLogos = [...customerLogos, ...customerLogos];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll space-x-8">
        {duplicatedLogos.map((customer, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-20 w-32 bg-gray-800 rounded-xl flex items-center justify-center p-4 border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-sm"
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
  const gradients = [
    "from-purple-800 via-pink-700 to-red-700",
    "from-blue-800 via-cyan-700 to-green-700",
    "from-yellow-700 via-orange-700 to-pink-700",
    "from-indigo-800 via-purple-700 to-pink-700",
    "from-gray-900 via-black to-gray-800"
  ];

  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <div className="bg-black text-white">
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
            Audio Visual Solutions
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-8">
            <span className="text-white-400">Engage.</span>{" "}
            <span className="text-white-400">Inspire.</span>{" "}
            <span className="text-white-400">Transform.</span>
          </div>
          <p className="text-xl italic mb-6 text-white-200">
            "Turning Communication into an Experience."
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-200">
            At Ecotech Global Services, we design and deliver cutting-edge Audio
            Visual solutions that bring ideas to life, enhance collaboration,
            and captivate audiences.
          </p>
        </div>
      </section>

      {/* Core AV Offerings */}
      <section className="py-20 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Core AV Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card */}
            {[
              {
                icon: "🏢",
                title: "Boardroom Integrations",
                desc: "Seamless, high-definition conferencing and presentation systems from Cisco, Heinrich, People Link, and Logitech — built to elevate executive decision-making and global collaboration.",
                color: "white"
              },
              {
                icon: "🎓",
                title: "Smart Classroom Solutions",
                desc: "Interactive displays, digital boards, and smart teaching tools from LG, Samsung, BenQ, and People Link — creating immersive learning environments for schools, universities, and training centers.",
                color: "white"
              },
              {
                icon: "📺",
                title: "Active LED & Video Walls",
                desc: "Visually stunning LED installations from Delta and People Link — perfect for control rooms, auditoriums, command centers, and corporate lobbies.",
                color: "white"
              }
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gray-800 shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-${card.color}-500`}
              >
                <div className={`w-16 h-16 bg-${card.color}-900 rounded-full flex items-center justify-center mb-6`}>
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-${card.color}-400`}>
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-20 bg-gray-900 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">
            Why Businesses Choose Ecotech AV Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: "🏆", text: "ISO-Certified Implementation Standards for unmatched quality & security" },
              { icon: "🎨", text: "Custom Design & Integration for your specific environment" },
              { icon: "🚀", text: "Future-Ready Technology from the world's top AV brands" },
              { icon: "🔧", text: "End-to-End Service — from consulting and installation to training & maintenance" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300">
                <div className="text-3xl">{item.icon}</div>
                <p className="text-lg text-gray-200 text-left">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl italic text-gray-100 font-semibold">
            "From corporate boardrooms to interactive classrooms, our AV solutions make every interaction unforgettable."
          </p>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Working with industry-leading brands to deliver excellence 🤝
            </p>
          </div>
          <div className="mb-8">
            <CustomerLogos />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-xl mb-10 text-gray-200">
            Let's create something extraordinary together
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl shadow-xl hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform">
              📩 Request a Consultation
            </button>
            <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-2xl shadow-xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 transform">
              📞 Talk to an AV Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AVSolutions;
