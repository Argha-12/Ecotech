import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Building2,
  Zap,
  ShieldCheck,
  Target,
  Layers,
  RefreshCw,
  Headphones,
  Globe,
} from "lucide-react";

const WebAppDevelopmentPage: React.FC = () => {
  const heroTitle =
    "Web & App Development — Digital Experiences Built for Growth";
  const heroSub =
    '"From Concept to Code, We Deliver Business-Driven Digital Solutions."';
  const intro =
    "At Ecotech Global Services, we create custom web and mobile applications that combine sleek design, robust performance, and enterprise-grade security. Our development approach focuses on user experience, scalability, and ROI, ensuring your digital platforms not only look great but also deliver measurable business results.";

  const services = [
    {
      title: "Web Development",
      description:
        "Custom corporate websites, e-commerce platforms, and web portals — built for speed, responsiveness, and SEO readiness.",
      details:
        "Specialties: CMS integration, secure hosting, custom UI/UX design, API integrations.",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps designed for iOS and Android — ensuring seamless performance and user engagement.",
      details: "Specialties: Flutter, React Native, Swift, Kotlin.",
      icon: <Smartphone className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Enterprise Applications",
      description:
        "Tailored business applications for operations, CRM, ERP, and workflow automation — integrating with your existing systems for efficiency gains.",
      icon: <Building2 className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Fast, installable web apps that work offline and feel like native mobile applications — ideal for businesses seeking lightweight, powerful solutions.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Secure Development Practices",
      description:
        "ISO 27001-aligned coding standards, penetration testing, and compliance-driven architecture.",
      icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
    },
  ];

  const whyChoose = [
    {
      text: "Business-Centric Approach — Solutions aligned with your growth objectives",
      icon: <Target className="w-6 h-6 text-pink-400" />,
    },
    {
      text: "Future-Ready Tech Stack — Latest frameworks and platforms for long-term scalability",
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
    },
    {
      text: "Agile Development Model — Faster delivery with continuous improvement",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
    },
    {
      text: "Full Lifecycle Support — From planning to deployment and post-launch maintenance",
      icon: <RefreshCw className="w-6 h-6 text-cyan-400" />,
    },
    {
      text: "Multi-Industry Experience — Expertise across finance, manufacturing, education, retail, and more",
      icon: <Globe className="w-6 h-6 text-green-400" />,
    },
  ];

  const quote =
    '💡 "We don’t just build apps and websites — we build growth engines for your business."';

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        {/* Hero */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-6">{heroTitle}</h1>
          <div className="text-2xl font-bold mb-4">{heroSub}</div>
          <p className="mb-8 text-lg max-w-4xl mx-auto leading-relaxed">
            {intro}
          </p>
        </motion.section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Our Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gray-800 mr-3">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
                <p className="leading-relaxed mb-2">{s.description}</p>
                {s.details && (
                  <p className="text-sm opacity-80">{s.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Why Choose Ecotech for Web & App Development?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="p-3 rounded-full bg-gray-800 mb-4">
                  {item.icon}
                </div>
                <p className="text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-bold mb-0">{quote}</blockquote>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/GetQuote"
              className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📩 [Request a Project Consultation]
            </Link>

            <span className="opacity-70 hidden md:inline">|</span>

            <Link
              to="/Contact"
              className="px-6 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📞 [Talk to a Development Expert]
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default WebAppDevelopmentPage;
