import React from "react";
import { motion } from "framer-motion";

const ManagedServiceSolutions = () => {
  const services = [
    {
      title: "IT Consulting Services",
      description: "Strategic technology guidance to align IT infrastructure with your business goals. We assess, plan, and implement scalable solutions tailored to your operations.",
      icon: "💻"
    },
    {
      title: "Network Managed Services", 
      description: "Continuous monitoring, optimization, and maintenance of your network infrastructure to ensure maximum uptime and peak performance.",
      icon: "🌐"
    },
    {
      title: "Security Managed Services",
      description: "Proactive threat detection, incident response, and compliance management — keeping your systems secure against evolving cyber risks.",
      icon: "🛡️"
    },
    {
      title: "Email & Collaboration Managed Services",
      description: "Seamless management of email platforms like Google Workspace, Microsoft 365, Zoho Mail, QLC Email, and Rediffmail to ensure secure, uninterrupted communication.",
      icon: "📧"
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      description: "Comprehensive coverage for your IT assets — including regular preventive maintenance, repairs, updates, and priority support.",
      icon: "🔄"
    }
  ];

  const trustFactors = [
    "ISO-Certified Standards for quality, security, and service delivery",
    "Proactive Issue Resolution before they impact business operations", 
    "Multi-Vendor Expertise for flexibility and best-fit solutions",
    "24/7 Helpdesk & Remote Support for uninterrupted service continuity",
    "Predictable Costs with fixed monthly or annual service models"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Managed Service Solutions
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reliable. Scalable. Always-On.
          </motion.p>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-yellow-400 font-semibold mb-4">
              "Focus on Your Business, While We Manage Your IT."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At <span className="font-semibold text-white">Ecotech Global Services</span>, we provide{" "}
              <span className="font-semibold text-blue-400">end-to-end managed services</span> that ensure your 
              technology infrastructure runs smoothly, securely, and cost-effectively — 24/7. Our ISO-certified 
              processes, expert teams, and proactive monitoring help you{" "}
              <span className="font-semibold text-green-400">reduce downtime, improve performance, and optimize costs</span>{" "}
              while freeing your internal teams to focus on innovation.
            </p>
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
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-8 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{service.description}</p>
                  </div>
                </div>
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
                className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-650 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-300 leading-relaxed text-left">{factor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl mb-4">💡</div>
            <p className="text-2xl font-semibold text-white mb-2">
              "With Ecotech as your managed services partner, IT becomes a growth enabler — not a cost center."
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
              <span className="mr-2">📩</span>
              Request a Managed Services Proposal
            </button>
            <button className="w-full sm:w-auto border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center">
              <span className="mr-2">📞</span>
              Talk to a Service Specialist
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManagedServiceSolutions;