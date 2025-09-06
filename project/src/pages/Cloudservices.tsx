import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CloudSolutionsPage: React.FC = () => {
  const cloudProviders = [
    {
      name: "AWS",
      icon: "☁️",
      description:
        "Complete Amazon Web Services implementation and optimization",
    },
    {
      name: "Google Cloud",
      icon: "🌐",
      description:
        "Advanced Google Cloud Platform solutions and AI integration",
    },
    {
      name: "Microsoft Azure",
      icon: "💼",
      description:
        "Enterprise-grade Azure cloud services and hybrid solutions",
    },
  ];

  const services = [
    "Cloud Strategy & Consulting",
    "Migration & Modernization",
    "Hybrid & Multi-Cloud Solutions",
    "Cloud Security & Compliance",
    "Disaster Recovery & Backup",
    "Performance Monitoring & Optimization",
  ];

  const whyChooseFeatures = [
    {
      icon: "☁️",
      title: "Multi-Cloud Mastery",
      desc: "Seamlessly integrate AWS, GCP, and Azure without vendor lock-in.",
    },
    {
      icon: "🚀",
      title: "End-to-End Delivery",
      desc: "From assessment & migration to managed services.",
    },
    {
      icon: "🔒",
      title: "Security & Compliance First",
      desc: "ISO-certified processes ensure data protection & compliance.",
    },
    {
      icon: "📈",
      title: "Cost-Optimized Scalability",
      desc: "Architectures that grow with your business while controlling costs.",
    },
    {
      icon: "🔧",
      title: "24/7 Managed Support",
      desc: "Proactive monitoring & rapid incident response for maximum uptime.",
    },
    {
      icon: "⚡",
      title: "High Performance",
      desc: "Optimized infrastructure for maximum speed and reliability.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cloud Solutions
            <span className="block text-2xl md:text-3xl font-light mt-4 opacity-80">
              Your Vision • Our Expertise
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-medium mb-10 italic opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "Designing Cloud Architectures that Drive Agility, Resilience & Innovation"
          </motion.p>

          <motion.p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At <span className="font-semibold">Ecotech Global Services</span>, we deliver
            <span className="font-semibold"> multi-cloud solutions</span> using AWS, Google
            Cloud, and Microsoft Azure. <br /> Our experts design, migrate, and
            optimize cloud infrastructures that help businesses achieve
            <span className="font-semibold"> scalability, performance, and cost-efficiency</span>
            while ensuring compliance and security.
          </motion.p>

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

      {/* Cloud Providers */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Multi-Cloud Platform Expertise
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-5xl mb-6">{provider.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {provider.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">{provider.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Ecotech for Cloud Solutions?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-700 rounded-lg p-6 flex flex-col items-start hover:bg-gray-600/70 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Cloud Services Include
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-lg font-medium text-white">{service}</span>
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
            <div className="text-4xl mb-4">☁️</div>
            <p className="text-2xl font-semibold text-white">
              "Unlock the power of the cloud — scale smarter, move faster, and stay secure."
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
              📩 Get a Quote
            </Link>

            <Link
              to="/contact"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              📞 Talk to an Expert
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutionsPage;
