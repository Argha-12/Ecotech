import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  Shield,
  Search,
  Clock,
  Award,
  CheckCircle,
  Layers,
  Eye,
} from "lucide-react";

const ManagedEDRXDRWithWhyChoose = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8 text-cyan-400" />,
      title: "Proactive Threat Detection",
      description:
        "Identify and stop cyberattacks before they impact your operations.",
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Endpoint Detection & Response (EDR)",
      description:
        "Advanced endpoint security with real-time monitoring and attack response.",
    },
    {
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      title: "Extended Detection & Response (XDR)",
      description:
        "Cross-layered threat visibility across endpoints, networks, and cloud environments.",
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      title: "24/7 Monitoring & Response",
      description:
        "Continuous detection, investigation, and mitigation — around the clock.",
    },
  ];

  const whyChoose = [
    {
      icon: <Layers className="w-10 h-10 text-cyan-400" />,
      title: "Multi-Vendor Expertise",
      description:
        "Certified in Trend Micro, Fortinet, CrowdStrike, Palo Alto, Barracuda, and Sophos.",
    },
    {
      icon: <Award className="w-10 h-10 text-cyan-400" />,
      title: "ISO-Certified Standards",
      description:
        "Compliant with ISO 27001:2013 for top-tier security implementations.",
    },
    {
      icon: <Eye className="w-10 h-10 text-cyan-400" />,
      title: "Seamless Integration",
      description:
        "Works with your existing IT infrastructure without disrupting workflows.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-cyan-400" />,
      title: "24/7 Threat Monitoring",
      description: "Continuous protection with rapid incident response.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,255,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20 text-cyan-400 drop-shadow-lg" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Managed EDR & XDR Solutions
            </h1>
            <p className="text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From Detection to Response — Faster Than the Threat.
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-3xl mx-auto">
              We deliver managed Endpoint Detection & Response (EDR) and Extended
              Detection & Response (XDR) services powered by leading cybersecurity
              vendors.
            </p>
            <button className="bg-cyan-500 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-400 transition duration-300">
              🚀 Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Managed EDR & XDR Covers
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Multi-layered detection, investigation, and response across all
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition duration-300 border border-gray-700 text-center"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
            Why Choose Ecotech for EDR & XDR?
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
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-1000 to-blue-700 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Stay Ahead of Cyber Threats
        </h2>
        <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
          Protect your business with next-gen EDR & XDR. Talk to our experts today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/GetQuote"
            className="bg-black text-cyan-400 px-8 py-3 rounded-full font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            📩 Request a Demo
          </Link>

          <Link
            to="/Contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            📞 Speak to a Security Expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManagedEDRXDRWithWhyChoose;
