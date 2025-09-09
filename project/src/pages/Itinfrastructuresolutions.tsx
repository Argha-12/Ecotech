import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ITInfrastructurePage: React.FC = () => {
  const capabilities = [
    {
      title: "Switching & Routing",
      description:
        "High-performance networking solutions from Cisco, HP, Allied Telesis, and Juniper Networks — engineered for speed, stability, and security.",
      icon: "🔄",
    },
    {
      title: "Server & Storage Solutions",
      description:
        "Enterprise-grade servers and storage systems from Dell, HP, and Cisco — optimized for high availability and data integrity.",
      icon: "🖥️",
    },
    {
      title: "Virtualization",
      description:
        "Streamline operations, reduce costs, and boost agility with leading virtualization platforms.",
      icon: "☁️",
    },
    {
      title: "VOIP Solutions",
      description:
        "Advanced Cisco-powered communication systems that enable clear, secure, and cost-efficient voice services.",
      icon: "📞",
    },
    {
      title: "Campus WiFi Networks",
      description:
        "Scalable, high-speed wireless infrastructure from Cisco, Aruba, Ruckus, and Fortinet — built for seamless connectivity across large campuses.",
      icon: "📶",
    },
    {
      title: "Backup & Data Protection",
      description:
        "Reliable data backup solutions from AWS, Acronis, and Veeam to safeguard your critical business assets.",
      icon: "🛡️",
    },
  ];

  const whyChooseFeatures = [
    { title: "ISO-Certified Quality & Security Standards", icon: "🏆" },
    { title: "Expert Implementation & Managed Services", icon: "⚙️" },
    { title: "Tailored Architectures for Your Business Needs", icon: "🎯" },
    { title: "24/7 Support & Proactive Maintenance", icon: "🔧" },
  ];

  const partners = [
    "Cisco",
    "HP",
    "Dell",
    "Allied Telesis",
    "Juniper Networks",
    "AWS",
    "Acronis",
    "Veeam",
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

      {/* Wrapper with Gradient Background */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,255,0.15),transparent_60%)]" />

        <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
          {/* Hero Section */}
          <motion.section
            className="mb-20 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold mb-6">
              IT Infrastructure Solutions
            </h1>
            <div className="text-2xl font-bold mb-4">
              "Build, Scale, and Secure Your Enterprise with Precision."
            </div>
            <p className="mb-8 text-lg max-w-4xl mx-auto leading-relaxed">
              At <span className="font-semibold">Ecotech Global Services</span>, we
              deliver enterprise-grade IT infrastructure solutions that combine{" "}
              <span className="font-semibold">
                performance, reliability, and scalability
              </span>
              . Partnering with global leaders like{" "}
              <span className="font-semibold">
                Cisco, HP, Dell, Allied Telesis, and Juniper Networks
              </span>
              , we create robust, future-ready architectures for organizations of
              all sizes.
            </p>
          </motion.section>
        </div>
      </div>


        {/* Core Capabilities */}
      <section className="mb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Our Core Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-xl mb-4 p-3 rounded-full bg-gray-800 inline-flex items-center justify-center">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="leading-relaxed text-gray-300">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


        {/* Partners */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-12">Trusted Technology Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 hover:bg-gray-800 transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <span className="font-bold text-lg">{partner}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="mb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-10 text-center">
              Why Choose Ecotech?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900 p-4 rounded-lg shadow border border-gray-700 text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="text-lg mb-3 p-2 rounded-full inline-block bg-gray-800">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Quote */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-bold mb-4">
              "Your IT infrastructure should accelerate your business — not slow it down. With Ecotech, you get a foundation engineered for growth."
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Get started with enterprise-grade solutions tailored to your business
            needs.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/GetQuote"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📩 Get a Quote
            </Link>

            <Link
              to="/Contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📞 Talk to an Expert
            </Link>
          </div>
        </motion.section>
      </div>
  
  );
};

export default ITInfrastructurePage;
