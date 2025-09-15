import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, Server, Zap, ShieldCheck } from 'lucide-react';


import nexvalLogo from "../assets/Endpoint Security/escan-antivirus.jpg";
import dellLogo from "../assets/Endpoint Security/Eset Logo.png";
import peerlessLogo from "../assets/Endpoint Security/K 7 Antivirus.png";
import rsSoftwareLogo from "../assets/Endpoint Security/seqqrite.jpg";
import alcoveLogo from "../assets/Endpoint Security/sophos-antivirus.webp";
import amitLogo from "../assets/Endpoint Security/trendmicro-ogsocial.jpg";


const partners = [
  { name: "NEXVAL", logo: nexvalLogo },
  { name: "Dell", logo: dellLogo },
  { name: "Allied Telesis", logo: peerlessLogo },
  { name: "Juniper Networks", logo: rsSoftwareLogo },
  { name: "AWS", logo: alcoveLogo },
  { name: "Acronis", logo: amitLogo },
];

const EndpointSecurity = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      title: "Advanced Threat Detection",
      description: "Identify and stop malware, ransomware, and zero-day attacks in real-time."
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Behavioral Analytics",
      description: "Monitor and block suspicious activities before they cause harm."
    },
    {
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      title: "Centralized Management",
      description: "Easily deploy, monitor, and control all endpoint devices from one console."
    },
    {
      icon: <Lock className="w-8 h-8 text-cyan-400" />,
      title: "Data Encryption & Loss Prevention",
      description: "Protect sensitive business information from unauthorized access."
    },
    {
      icon: <EyeOff className="w-8 h-8 text-cyan-400" />,
      title: "Cloud-Integrated Protection",
      description: "Ensure security policies are applied even for remote or hybrid teams."
    }
  ];

  const whyChoose = [
    "Multi-Vendor Expertise — Certified in Trend Micro, Quick Heal, Palo Alto, CrowdStrike, and Sophos solutions.",
    "ISO-Certified Security Standards — Aligned with ISO 27001:2013 for top-tier information security.",
    "Tailored Deployment Strategies — Designed for your organization’s size, structure, and industry.",
    "24/7 Threat Monitoring & Response — Rapid incident resolution to minimize downtime."
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,255,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 text-cyan-400 drop-shadow-lg" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Endpoint Security Protect Every Device, Every Time
            </h1>
            <p className="text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your First Line of Defense Against Cyber Threats. At Ecotech Global Services, we safeguard your organization with enterprise-grade endpoint protection.
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-3xl mx-auto">
              We partner with Trend Micro, Quick Heal, Palo Alto, CrowdStrike, and Sophos to deliver unmatched protection tailored to your environment.
            </p>
            {/* <button className="bg-cyan-500 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-400 transition duration-300">
              🚀 Get a Security Assessment
            </button> */}
          </motion.div>
        </div>
      </div>

{/* Features Section */}
<section className="py-16 bg-slate-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-4">
        What Our End point Security Covers
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Multi-layered defense with AI-powered detection, encryption, and compliance solutions.
      </p>
    </div>

    {/* Features Grid */}
    <div className="flex flex-wrap justify-center gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="w-full md:w-[45%] lg:w-[30%] bg-gray-800 p-8 rounded-2xl shadow-lg 
                     hover:shadow-cyan-500/30 transition duration-300 border border-gray-700 
                     text-center flex flex-col items-center"
        >
          <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
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
      Why Choose Ecotech for Endpoint Security?
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: <ShieldCheck className="w-10 h-10 text-cyan-400" />,
          title: "Multi-Vendor Expertise",
          desc: "Certified in Trend Micro, Quick Heal, Palo Alto, CrowdStrike, and Sophos solutions."
        },
        {
          icon: <Lock className="w-10 h-10 text-cyan-400" />,
          title: "ISO-Certified Security",
          desc: "Aligned with ISO 27001:2013 standards for top-tier information security compliance."
        },
        {
          icon: <Server className="w-10 h-10 text-cyan-400" />,
          title: "Tailored Deployments",
          desc: "Solutions designed for your organization’s size, structure, and industry needs."
        },
        {
          icon: <Zap className="w-10 h-10 text-cyan-400" />,
          title: "24/7 Monitoring",
          desc: "Rapid incident response and continuous monitoring to minimize downtime."
        }
      ].map((item, idx) => (
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
        <h2 className="text-4xl font-extrabold mb-6">Every Device is a Doorway to Your Business</h2>
        <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
          We make sure it stays locked to threats and open to productivity. Connect with our experts today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-black text-cyan-400 px-8 py-3 rounded-full font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
            📩 Get a Security Assessment
          </button>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
            📞 Talk to a Cybersecurity Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndpointSecurity;
