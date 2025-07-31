import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, Server, Zap, ShieldCheck } from 'lucide-react';

const EndpointSecurity = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Advanced Threat Protection",
      description: "Real-time protection against malware, ransomware, and zero-day threats using behavioral analysis and machine learning."
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Endpoint Detection & Response",
      description: "Continuous monitoring and response to advanced threats with detailed forensic analysis and remediation capabilities."
    },
    {
      icon: <EyeOff className="w-8 h-8 text-blue-600" />,
      title: "Data Loss Prevention",
      description: "Prevent sensitive data from leaving your organization with comprehensive data loss prevention controls."
    },
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "Device Control",
      "description": "Manage and secure all endpoints with granular control over USB devices, external media, and peripheral connections."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Application Control",
      description: "Control which applications can run on your endpoints to prevent unauthorized or malicious software execution."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Endpoint Security Solutions</h1>
            <p className="text-xl mb-8 text-blue-100">
              Protect your organization's endpoints with our comprehensive security solutions that defend against the latest cyber threats.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Request a Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Endpoint Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our endpoint security solutions provide multi-layered protection for all your devices, ensuring your business stays secure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Endpoints?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get in touch with our security experts to learn how we can help protect your organization from cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Contact Sales
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointSecurity;
