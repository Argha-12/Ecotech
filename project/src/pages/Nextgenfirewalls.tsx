import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, BarChart3, Settings, Send, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Importing partner logos

import paharpurLogo from "../assets/Next Gen firewall/fortinet-firewall.png";
import peerlessLogo from "../assets/Next Gen firewall/Paloalto.png";
import rsSoftwareLogo from "../assets/Next Gen firewall/sonic wall firewall logo.png";
import alcoveLogo from "../assets/Next Gen firewall/sophos-firewall.webp";

const partners = [
  { name: "fortinet-firewall", logo: paharpurLogo },
  { name: "Paloalto", logo: peerlessLogo },
  { name: "sonic wall firewall logo", logo: rsSoftwareLogo },
  { name: "sophos-firewall", logo: alcoveLogo },
];

export default function NextGenFirewalls() {
  const features = [
    {
      title: "Advanced Threat Intelligence",
      description:
        "Integrated with global threat feeds to proactively block known and emerging attacks.",
      icon: Shield,
    },
    {
      title: "SSL Inspection",
      description:
        "Comprehensive scanning for encrypted traffic to uncover hidden threats.",
      icon: Eye,
    },
    {
      title: "Application-Aware Traffic",
      description:
        "Intelligent control of applications for optimized security and bandwidth management.",
      icon: BarChart3,
    },
    {
      title: "Unified Security Policies",
      description:
        "Enforce consistent policies across distributed locations with simplified security management.",
      icon: Settings,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20, 125, 141, 0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Intelligent Perimeter Protection
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed italic"
        >
          "Stopping Threats Before They Reach You."
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto"
        >
          Our next-generation firewalls from{" "}
          <span className="font-semibold text-white">Fortinet</span>,{" "}
          <span className="font-semibold text-white">Sophos</span>,{" "}
          <span className="font-semibold text-white">SonicWall</span>, and{" "}
          <span className="font-semibold text-white">Palo Alto</span> offer deep
          packet inspection, intrusion prevention, and application control for
          maximum network security.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-center mb-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300"
              >
                <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

{/* Partners Section */}
<section className="py-16 bg-gray text-white relative overflow-hidden">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold">Our Valued Partners</h2>
    <p className="mt-4 text-lg text-gray-300">
      Trusted by industry leaders across the globe 🌐
    </p>
  </div>

  {/* ✅ Smooth Scrolling Carousel */}
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


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gray-900 py-16 px-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Strengthen Your Perimeter Security
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
              Safeguard your business with next-gen firewalls & perimeter
              protection. Talk to our experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/get-quote"
                className="inline-flex items-center gap-3 bg-black text-cyan-400 px-8 py-3 rounded-full font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <Send className="w-5 h-5 text-cyan-400" />
                <span>Request a Demo</span>
              </Link>

              <Link
                to="/Contact"
                className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
              >
                <Phone className="w-5 h-5 text-blue-700" />
                <span>Speak to a Security Expert</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
