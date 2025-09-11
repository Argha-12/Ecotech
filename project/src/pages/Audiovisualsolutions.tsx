import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";



// AVSolutions Component
const AVSolutions = () => {
  const [gradientIndex, setGradientIndex] = useState(0);
  const gradients = [
    "from-purple-800 via-pink-700 to-red-700",
    "from-blue-800 via-cyan-700 to-green-700",
    "from-yellow-700 via-orange-700 to-pink-700",
    "from-indigo-800 via-purple-700 to-pink-700",
    "from-gray-900 via-black to-gray-800",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <div className="bg-black text-white relative overflow-hidden">
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
      <motion.section
        className="pt-12 pb-8 bg-black text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Audio Visual Solutions
          </h1>
          <div className="text-2xl md:text-3xl font-bold mb-4">
            Engage. Inspire. Transform.
          </div>
          <p className="text-xl italic mb-4">
            "Turning Communication into an Experience."
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-200">
            At Ecotech Global Services, we design and deliver cutting-edge Audio
            Visual solutions that bring ideas to life, enhance collaboration,
            and captivate audiences.
          </p>
        </div>
      </motion.section>

      {/* Core AV Offerings */}
      <section className="py-20 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Our Core AV Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Boardroom Integrations",
                desc: "Seamless, high-definition conferencing and presentation systems from Cisco, Heinrich, People Link, and Logitech — built to elevate executive decision-making and global collaboration.",
              },
              {
                icon: "🎓",
                title: "Smart Classroom Solutions",
                desc: "Interactive displays, digital boards, and smart teaching tools from LG, Samsung, BenQ, and People Link — creating immersive learning environments for schools, universities, and training centers.",
              },
              {
                icon: "📺",
                title: "Active LED & Video Walls",
                desc: "Visually stunning LED installations from Delta and People Link — perfect for control rooms, auditoriums, command centers, and corporate lobbies.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-500 text-center hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-3xl mb-4 p-4 rounded-full inline-block bg-gray-800">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-20 bg-gray-900 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            Why Businesses Choose Ecotech AV Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: "🏆", text: "ISO-Certified Implementation Standards for unmatched quality & security" },
              { icon: "🎨", text: "Custom Design & Integration for your specific environment" },
              { icon: "🚀", text: "Future-Ready Technology from the world's top AV brands" },
              { icon: "🔧", text: "End-to-End Service — from consulting and installation to training & maintenance" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center space-x-4 p-6 bg-gray-800 rounded-2xl border border-gray-500 hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="text-lg text-gray-200 text-left">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <blockquote className="text-2xl italic font-semibold">
            "From corporate boardrooms to interactive classrooms, our AV solutions make every interaction unforgettable."
          </blockquote>
        </div>
      </section>

      {/* Customer Logos
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Our Valued Customers
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 font-light tracking-wide">
              Trusted by industry leaders across the globe 🌍
            </p>
          </motion.div>
          
          <CustomerLogos />
        </div>
      </section> */}

      {/* CTA */}
      <motion.section
        className="py-20 bg-gray-900 text-white text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-xl mb-10 text-gray-200">
            Let's create something extraordinary together
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300">
              📩 Request a Consultation
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300">
              📞 Talk to an AV Expert
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AVSolutions;