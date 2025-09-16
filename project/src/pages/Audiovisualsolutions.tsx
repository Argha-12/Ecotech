import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Cisco from "../assets/Audio Visual Solutions/Cisco Firewall.png";
import dellLogo from "../assets/Audio Visual Solutions/Dell_Logo.png";
import peer from "../assets/Audio Visual Solutions/Heinrich.jpg";
import Log from "../assets/Audio Visual Solutions/Logitech.png";
import People from "../assets/Audio Visual Solutions/People Link.webp";
import Del from "../assets/Audio Visual Solutions/Delta.webp";
import al from "../assets/Audio Visual Solutions/LG.webp";
import Sam from "../assets/Audio Visual Solutions/Samsung.png";
import Ben from "../assets/Audio Visual Solutions/BenQ.png";

const partners = [
  { name: "Cisco Firewall", logo: Cisco },
  { name: "Dell_Logo", logo: dellLogo },
  { name: "Heinrich", logo: peer },
  { name: "Logitech", logo: Log },
  { name: "People Link", logo: People },
  { name: "Delta", logo: Del },
  { name: "LG", logo: al },
  { name: "Samsung", logo: Sam },
  { name: "BenQ", logo: Ben },
];



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
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
              Audio Visual Solutions
            </h1>

            {/* Animated Content - Line by Line */}
            <motion.div
              className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-200 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.4 } },
              }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                Engage. Inspire. Transform.
              </motion.p>

              <motion.p
                className="text-xl italic"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                "Turning Communication into an Experience."
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                At <span className="font-semibold">Ecotech Global Services</span>, we
                design and deliver cutting-edge Audio Visual solutions that bring ideas
                to life, enhance collaboration, and captivate audiences.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                Partnering with industry leaders like{" "}
                <span className="font-semibold">
                  Cisco, Heinrich, People Link, Logitech, Delta, LG, Samsung, and BenQ
                </span>
                , we ensure every project is engineered for clarity, impact, and
                reliability.
              </motion.p>
            </motion.div>
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

{/* Partners */}
    <section className="py-16 bg-black text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Our Valued Pantners</h2>
        <p className="mt-4 text-lg text-gray-300">
          Trusted by industry leaders across the globe 🌐
        </p>
      </div>

      {/* ✅ restrict width to 80% and center */}
      <div className="max-w-[80%] mx-auto overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, idx) => (
          <div
            key={idx}
            className="bg-white p-6 mx-4 rounded-2xl shadow-md flex items-center justify-center w-[220px] h-[120px]"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-[260px] h-[120px] object-contain"
            />
          </div>

          ))}
        </motion.div>
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
          {/* <blockquote className="text-2xl italic font-semibold">
            "From corporate boardrooms to interactive classrooms, our AV solutions make every interaction unforgettable."
          </blockquote> */}
        </div>
      </section>

              {/* Quote */}
              <motion.section
                className="mb-20 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-500 max-w-4xl mx-auto">
                  <blockquote className="text-2xl font-bold mb-4">
                    "From corporate boardrooms to interactive classrooms, our AV solutions make every interaction unforgettable."
                  </blockquote>
                </div>
              </motion.section>

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