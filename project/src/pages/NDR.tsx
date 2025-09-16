import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Cloud, Eye } from "lucide-react";
import { Link } from "react-router-dom";

import trendmicroLogo from "../assets/NDR/trendmicro-ogsocial.jpg";
import forescoutLogo from "../assets/NDR/ForeScout.png";
import vehereLogo from "../assets/NDR/Vehere.png";

const partners = [
  { name: "trendmicro-ogsocial", logo: trendmicroLogo },
  { name: "ForeScout", logo: forescoutLogo },
  { name: "Vehere", logo: vehereLogo },
];

const NdrSolutions: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-cyan-400" />,
      title: "Complete Network Visibility",
      desc: "Monitor east-west and north-south traffic across your network.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      title: "AI-Driven Threat Detection",
      desc: "Identify anomalies, command-and-control activity, and insider threats in real-time.",
    },
    {
      icon: <Lock className="w-8 h-8 text-cyan-400" />,
      title: "Incident Investigation Tools",
      desc: "Rapidly analyze suspicious activity with enriched threat intelligence.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: "Automated Response",
      desc: "Contain threats quickly to prevent lateral movement.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      title: "Integration with SIEM & SOAR",
      desc: "Enhance your security operations center capabilities.",
    },
  ];

  const whyChoose = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-cyan-400" />,
      title: "Multi-Vendor Expertise",
      desc: "Certified in Trend Micro, ForeScout, and Vehere solutions.",
    },
    {
      icon: <Lock className="w-10 h-10 text-cyan-400" />,
      title: "ISO-Certified Standards",
      desc: "Compliant with ISO 27001:2013 for top-tier security practices.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-cyan-400" />,
      title: "Seamless Integration",
      desc: "Deploy without disrupting your existing workflows or network.",
    },
    {
      icon: <Eye className="w-10 h-10 text-cyan-400" />,
      title: "24/7 Threat Monitoring",
      desc: "Always-on defense with rapid incident response.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NDR Solutions — Safeguard Networks
            </h1>
            <p className="text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              "Because Every Packet Could Be a Threat — Or an Opportunity."
              At <span className="font-semibold">Ecotech Global Services</span>, we deliver enterprise-grade protection for your most critical communication and network layers.
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-3xl mx-auto">
              Our Network Detection & Response (NDR) solutions provide deep visibility into network traffic to identify, investigate, and contain threats before they spread.
              We partner with <span className="font-semibold">Trend Micro, ForeScout, Vehere</span> to provide layered, adaptive, and intelligent defense.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our NDR Solutions Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition duration-300 border border-gray-700 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Our Valued Partners</h2>
          <p className="mt-4 text-lg text-gray-300">
            Trusted by industry leaders across the globe 🌐
          </p>
        </div>

        <div className="max-w-[80%] mx-auto overflow-hidden">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
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

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Why Choose Ecotech for NDR
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-cyan-500/30 transition duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-1000 to-blue-700 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Your network is its nervous system — we make sure both are secure, intelligent, and resilient.</h2>
        <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
          Connect with our experts today and keep your network threat-free.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-black text-cyan-400 px-8 py-3 rounded-full font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
            📩 Request a Security Audit
          </button>
          <Link
            to="/Contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            📞 Talk to a Security Specialist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NdrSolutions;
