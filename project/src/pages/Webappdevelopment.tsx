import React from "react";
import { motion } from "framer-motion";

const WebAppDevelopment = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Build scalable websites and web applications tailored to your business needs. From corporate sites to complex e-commerce platforms.",
      features: ["Responsive Design", "CMS Integration", "API Development", "Performance Optimization"]
    },
    {
      title: "Mobile Applications",
      description: "Native iOS and Android apps, plus cross-platform solutions that deliver exceptional user experiences across all devices.",
      features: ["React Native", "Flutter", "Native Development", "App Store Deployment"]
    },
    {
      title: "Enterprise Solutions",
      description: "Custom business applications that streamline operations and integrate seamlessly with your existing systems.",
      features: ["CRM Systems", "Workflow Automation", "Dashboard Analytics", "System Integration"]
    },
    {
      title: "Progressive Web Apps",
      description: "Combine the best of web and mobile apps with PWAs that work offline and provide native-like experiences.",
      features: ["Offline Functionality", "Push Notifications", "Fast Loading", "Cross-Platform"]
    }
  ];

  const advantages = [
    "Agile development methodology for faster time-to-market",
    "Modern tech stack with proven frameworks and tools",
    "Comprehensive testing and quality assurance processes",
    "Ongoing support and maintenance after launch",
    "Scalable architecture designed for future growth"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Web & App Development
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Digital solutions that drive business growth
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We create custom web and mobile applications that combine intuitive design with powerful functionality. 
            Our team focuses on delivering solutions that not only meet your current needs but scale with your business.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Development Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Partner With Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 leading-relaxed">{advantage}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help bring your digital vision to life. Our team is ready to 
                guide you through every step of the development process.
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Start Your Project
                </button>
                <button className="w-full sm:w-auto border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Technologies We Use</h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
            We work with cutting-edge technologies and frameworks to ensure your applications 
            are built on solid, future-proof foundations.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Vue.js', 'Node.js', 'Python', 'Flutter', 'Swift'].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-2xl font-semibold text-white">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebAppDevelopment;