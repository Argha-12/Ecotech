import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Example partner logos (replace with your actual image paths)

import paloaltoLogo from "../assets/CyberLogo/crowdstrike.jpg";
import sophosLogo from "../assets/CyberLogo/ForeScout.jpg";
import ciscoLogo from "../assets/CyberLogo/Cisco Firewall.png";
import crowdstrikeLogo from "../assets/CyberLogo/fortinet-firewall.png";
import Palo from "../assets/CyberLogo/Palo-Alto-Logo.jpg";
import Sophos from "../assets/CyberLogo/Sophos.jpg";
import trendmicroLogo from "../assets/CyberLogo/trendmicro-ogsocial.jpg";

const partners = [
 
  { name: "crowdstrike", logo: paloaltoLogo },
  { name: "Sophos", logo: sophosLogo },
  { name: "Cisco", logo: ciscoLogo },
  { name: "CrowdStrike", logo: crowdstrikeLogo },
  { name: "Trend Micro", logo: Palo },
  { name: "Sophos", logo: Sophos },
  { name: "Trend Micro", logo: trendmicroLogo },
];

const CyberSecurityPage: React.FC = () => {
  const offerings = [
    {
      title: "Advanced Threat Protection",
      description: "AI-driven analytics to detect and stop zero-day and sophisticated cyberattacks.",
      icon: "🛡️",
    },
    {
      title: "Network Security & NAC",
      description: "Next-generation firewalls and network access control to secure all entry points.",
      icon: "🌐",
    },
    {
      title: "Cloud Security",
      description: "Protect AWS, Azure, and Google Cloud environments with adaptive cloud-native controls.",
      icon: "☁️",
    },
    {
      title: "Endpoint Protection",
      description: "Safeguard devices with EDR/XDR and advanced endpoint monitoring.",
      icon: "💻",
    },
    {
      title: "Security Audits & Compliance",
      description: "Ensure readiness for ISO and industry regulations with proactive audits.",
      icon: "📑",
    },
    {
      title: "24/7 Monitoring & Incident Response",
      description: "Round-the-clock SOC with rapid containment of security breaches.",
      icon: "⏱️",
    },
  ];

  const whyChoose = [
    { text: "Enterprise-Grade Defense with global leaders like Fortinet & Palo Alto", icon: "🏆" },
    { text: "End-to-End Security Coverage from IT to OT environments", icon: "🔒" },
    { text: "Proactive Approach with MDR/XDR & automated threat intelligence", icon: "⚡" },
    { text: "Scalable & Adaptive Solutions that evolve with threat landscape", icon: "📈" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
{/* Hero Section */}
<motion.section
  className="mb-20 text-center"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="text-5xl font-extrabold mb-6">Cyber Security Solutions</h1>
  <div className="text-2xl font-bold mb-4">Securing Your Digital Future.</div>

  {/* Animated Paragraph - Line by Line */}
  <motion.div
    className="text-lg max-w-4xl mx-auto leading-relaxed space-y-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.4 } }, // ⏱ stagger delay
    }}
  >
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      At <span className="font-semibold">Ecotech Global Services</span>, we deliver
      cutting-edge, enterprise-grade cyber security designed to safeguard your
      business against today’s most advanced threats.
    </motion.p>

    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      Our solutions integrate{" "}
      <span className="font-semibold">next-generation firewalls</span>, endpoint
      protection, email security, SIEM/SOAR platforms, and managed detection &
      response (MDR/XDR) — ensuring your IT and OT environments remain{" "}
      <span className="font-semibold">secure, resilient, and compliant</span>.
    </motion.p>

    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      We partner with global leaders like{" "}
      <span className="font-semibold">
        Fortinet, Palo Alto, Trend Micro, Sophos, Cisco, CrowdStrike, and ForeScout
      </span>{" "}
      to deliver intelligent, adaptive, and scalable protection that evolves with
      the threat landscape.
    </motion.p>

    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      From proactive security audits to real-time incident response, Ecotech ensures
      that your digital infrastructure remains your most secure business asset.
    </motion.p>
  </motion.div>
</motion.section>


        {/* Offerings */}
        <section className="mb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-10 text-center">
              Key Cyber Security Capabilities
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-gray-500 flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="text-xl mb-4 p-2 rounded-full bg-gray-800 inline-flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="leading-relaxed text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-black text-white relative overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Our Security Technology Partners</h2>
            <p className="mt-4 text-lg text-gray-300">
              Trusted by the world’s leading cybersecurity innovators 🔐
            </p>
          </div>

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

        {/* Why Choose */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Why Choose Ecotech for Cyber Security?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                className={`bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-500 text-center
                  ${idx === whyChoose.length - 1 && whyChoose.length % 2 !== 0 ? "col-span-2 mx-auto w-full md:w-1/2" : ""}`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-xl mb-4 p-2 rounded-full inline-block bg-gray-800">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.text}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 p-4 rounded-2xl border border-gray-500 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-bold mb-4">
              Strong cyber security isn’t optional — it’s the foundation of digital trust.
            </blockquote>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Strengthen Your Cyber Defenses?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Partner with Ecotech for adaptive, intelligent, and compliant security solutions.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/get-quote"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              🔒 Get a Security Assessment
            </Link>

            <Link
              to="/Contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📞 Talk to a Security Expert
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CyberSecurityPage;
