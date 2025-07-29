import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Shield, 
  Settings, 
  Database, 
  Globe,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description: "Custom web applications, responsive websites, and e-commerce solutions built with modern technologies like React, Node.js, and Python.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "API Integration"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, cross-platform solutions using React Native and Flutter for seamless user experiences.",
      features: ["Native Development", "Cross-platform Apps", "UI/UX Design", "App Store Optimization"]
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Cloud migration, infrastructure setup, and management services on AWS, Azure, and Google Cloud Platform.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps Services", "Monitoring & Support"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, SEM, social media marketing, and content marketing.",
      features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing", "Content Strategy"]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including vulnerability assessments, penetration testing, and security audits.",
      features: ["Security Audits", "Vulnerability Testing", "Compliance Support", "Security Training"]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "IT Consulting",
      description: "Strategic IT consulting services to help businesses optimize their technology infrastructure and processes.",
      features: ["Technology Strategy", "Process Optimization", "System Integration", "IT Roadmap"]
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Data Analytics",
      description: "Business intelligence solutions, data visualization, and analytics to help make data-driven decisions.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Reporting Solutions"]
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Enterprise Solutions",
      description: "Custom enterprise software development, ERP systems, and business process automation solutions.",
      features: ["ERP Development", "Process Automation", "Custom Software", "System Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-blue-600">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive IT solutions to drive your business forward
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
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our services can help transform your business
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