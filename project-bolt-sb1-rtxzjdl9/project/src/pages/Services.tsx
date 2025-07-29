import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Smartphone, Cloud, BarChart3,
  Shield, Settings, Database, Globe, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom'; // for routing
import heroImage from '../assets/services-hero.jpg'; // Your background image path

const Services = () => {
  const services = [
  {
    id: "web-development",
    icon: (
      <div className="p-4 rounded-full bg-blue-100 shadow-md mb-4">
        <Code className="w-10 h-10 text-blue-600" />
      </div>
    ),
    title: "Web Development",
    description: (
      <span className="text-gray-700">
        Custom web apps, responsive websites, and scalable e-commerce using Custom web apps, responsive websites, and scalable e-commerce using{" "}
        <span className="font-semibold text-blue-600">React</span>,{" "}
        <span className="font-semibold text-blue-600">Node.js</span>, and{" "}
        <span className="font-semibold text-blue-600">Python</span>.
      </span>
    ),
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
    ],
  },
  {
    id: "mobile-app-development",
    icon: (
      <div className="p-4 rounded-full bg-pink-100 shadow-md mb-4">
        <Smartphone className="w-10 h-10 text-pink-600" />
      </div>
    ),
    title: "Mobile App Development",
    description: (
      <span className="text-gray-700">
        Native iOS/Android & cross-platform apps using{" "}
        <span className="font-semibold text-pink-600">React Native</span> &
        <span className="font-semibold text-pink-600"> Flutter</span>.
      </span>
    ),
    features: [
      "Native Development",
      "Cross-platform Apps",
      "UI/UX Design",
      "App Store Optimization",
    ],
  },
  {
    id: "cloud-solutions",
    icon: (
      <div className="p-4 rounded-full bg-indigo-100 shadow-md mb-4">
        <Cloud className="w-10 h-10 text-indigo-600" />
      </div>
    ),
    title: "Cloud Solutions",
    description: (
      <span className="text-gray-700">
        Cloud migration, infrastructure setup, and DevOps on{" "}
        <span className="font-semibold text-indigo-600">AWS</span>,{" "}
        <span className="font-semibold text-indigo-600">Azure</span>, and{" "}
        <span className="font-semibold text-indigo-600">GCP</span>.
      </span>
    ),
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps Services",
      "Monitoring & Support",
    ],
  },
  {
    id: "digital-marketing",
    icon: (
      <div className="p-4 rounded-full bg-yellow-100 shadow-md mb-4">
        <BarChart3 className="w-10 h-10 text-yellow-600" />
      </div>
    ),
    title: "Digital Marketing",
    description: (
      <span className="text-gray-700">
        SEO, SEM, social media marketing, and content strategy that{" "}
        <span className="font-semibold text-yellow-600">delivers results</span>.
      </span>
    ),
    features: [
      "SEO Optimization",
      "PPC Campaigns",
      "Social Media Marketing",
      "Content Strategy",
    ],
  },
  {
    id: "cybersecurity",
    icon: (
      <div className="p-4 rounded-full bg-red-100 shadow-md mb-4">
        <Shield className="w-10 h-10 text-red-600" />
      </div>
    ),
    title: "Cybersecurity",
    description: (
      <span className="text-gray-700">
        Security audits, penetration testing, and compliance support to protect
        your digital assets.
      </span>
    ),
    features: [
      "Security Audits",
      "Vulnerability Testing",
      "Compliance Support",
      "Security Training",
    ],
  },
  {
    id: "it-consulting",
    icon: (
      <div className="p-4 rounded-full bg-teal-100 shadow-md mb-4">
        <Settings className="w-10 h-10 text-teal-600" />
      </div>
    ),
    title: "IT Consulting",
    description: (
      <span className="text-gray-700">
        Strategic IT advice to optimize your{" "}
        <span className="font-semibold text-teal-600">tech infrastructure</span>{" "}
        and future-proof your business.
      </span>
    ),
    features: [
      "Technology Strategy",
      "Process Optimization",
      "System Integration",
      "IT Roadmap",
    ],
  },
  {
    id: "data-analytics",
    icon: (
      <div className="p-4 rounded-full bg-purple-100 shadow-md mb-4">
        <Database className="w-10 h-10 text-purple-600" />
      </div>
    ),
    title: "Data Analytics",
    description: (
      <span className="text-gray-700">
        Business intelligence, data visualization, and{" "}
        <span className="font-semibold text-purple-600">predictive analytics</span>{" "}
        to empower decision-making.
      </span>
    ),
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Predictive Analytics",
      "Reporting Solutions",
    ],
  },
  {
    id: "enterprise-solutions",
    icon: (
      <div className="p-4 rounded-full bg-green-100 shadow-md mb-4">
        <Globe className="w-10 h-10 text-green-600" />
      </div>
    ),
    title: "Enterprise Solutions",
    description: (
      <span className="text-gray-700">
        ERP systems, custom enterprise software, and{" "}
        <span className="font-semibold text-green-600">process automation</span>{" "}
        to streamline operations.
      </span>
    ),
    features: [
      "ERP Development",
      "Process Automation",
      "Custom Software",
      "System Integration",
    ],
  }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
  className="py-28 bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="py-12">
    <div className="max-w-6xl mx-auto text-center px-4">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our <span className="text-blue-400">Services</span>
      </motion.h1>
      <motion.p
        className="text-xl text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We power businesses with smart, scalable, and innovative tech solutions.
      </motion.p>
    </div>
  </div>
</section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.id}`}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.h2 className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-blue-100 mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's transform your ideas into scalable digital solutions.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;
