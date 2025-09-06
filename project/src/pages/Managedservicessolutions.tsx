import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ for routing

const ManagedServiceSolutions = () => {
  const services = [
    {
      title: "IT Consulting Services",
      description:
        "Strategic technology guidance to align IT infrastructure with your business goals. We assess, plan, and implement scalable solutions tailored to your operations.",
      icon: "🖥",
      link: "/services/it-consulting",
    },
    {
      title: "Network Managed Services",
      description:
        "Continuous monitoring, optimization, and maintenance of your network infrastructure to ensure maximum uptime and peak performance.",
      icon: "🌐",
      link: "/services/network",
    },
    {
      title: "Security Managed Services",
      description:
        "Proactive threat detection, incident response, and compliance management — keeping your systems secure against evolving cyber risks.",
      icon: "🛡",
      link: "/services/security",
    },
    {
      title: "Email & Collaboration Managed Services",
      description:
        "Seamless management of email platforms like Google Workspace, Microsoft 365, Zoho Mail, QLC Email, and Rediffmail to ensure secure, uninterrupted communication.",
      icon: "📧",
      link: "/services/email-collaboration",
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      description:
        "Comprehensive coverage for your IT assets — including regular preventive maintenance, repairs, updates, and priority support.",
      icon: "🔄",
      link: "/services/amc",
    },
  ];

  const trustFactors = [
    "ISO-Certified Standards for quality, security, and service delivery",
    "Proactive Issue Resolution before they impact business operations",
    "Multi-Vendor Expertise for flexibility and best-fit solutions",
    "24/7 Helpdesk & Remote Support for uninterrupted service continuity",
    "Predictable Costs with fixed monthly or annual service models",
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <motion.h1
      className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Managed Service Solutions
      <span className="block text-2xl md:text-3xl font-light mt-4 opacity-80">
        Reliable • Scalable • Always-On
      </span>
    </motion.h1>

    {/* Tagline */}
    <motion.p
      className="text-xl md:text-2xl font-medium mb-10 italic opacity-90"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      "Focus on Your Business, While We Manage Your IT."
    </motion.p>

    {/* Description */}
    <motion.p
      className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      At <span className="font-semibold">Ecotech Global Services</span>, we provide{" "}
      <span className="font-semibold">end-to-end managed services</span> that ensure your
      technology infrastructure runs smoothly, securely, and cost-effectively — 24/7. <br />
      Our ISO-certified processes, expert teams, and proactive monitoring help you{" "}
      <span className="font-semibold">reduce downtime, improve performance, and optimize costs</span>{" "}
      while freeing your internal teams to focus on innovation.
    </motion.p>

    {/* Call to Action */}
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <a
        href="/contact"
        className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-200 transition"
      >
        Get Started
      </a>
    </motion.div>
  </div>
</section>


      {/* Services Portfolio */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Managed Services Portfolio
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.link} className="block">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Businesses Trust Ecotech Managed Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg p-6 flex items-start space-x-4 hover:bg-gray-600/70 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-300 leading-relaxed">{factor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-10 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl mb-4">💡</div>
            <p className="text-2xl font-semibold text-white">
              "With Ecotech as your managed services partner, IT becomes a growth enabler — not a cost center."
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/get-quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40"
            >
              📩 Request a Managed Services Proposal
            </Link>

            <Link
              to="/contact"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              📞 Talk to a Service Specialist
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManagedServiceSolutions;
