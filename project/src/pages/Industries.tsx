import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingBag, 
  Heart, 
  GraduationCap, 
  Car, 
  Banknote,
  Factory,
  Plane
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Real Estate",
      description: "Property management systems, CRM solutions, and virtual tour platforms for real estate businesses.",
      solutions: ["Property Management", "CRM Systems", "Virtual Tours", "Lead Generation"]
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-blue-600" />,
      title: "E-commerce & Retail",
      description: "Online stores, inventory management, and customer engagement solutions for retail businesses.",
      solutions: ["E-commerce Platforms", "Inventory Management", "POS Systems", "Customer Analytics"]
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Healthcare",
      description: "Digital health solutions, patient management systems, and telemedicine platforms.",
      solutions: ["EMR Systems", "Telemedicine", "Patient Portals", "Health Analytics"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Education",
      description: "E-learning platforms, student management systems, and educational technology solutions.",
      solutions: ["LMS Platforms", "Student Management", "Online Assessment", "Virtual Classrooms"]
    },
    {
      icon: <Banknote className="w-12 h-12 text-blue-600" />,
      title: "Financial Services",
      description: "Fintech solutions, banking systems, and payment processing platforms.",
      solutions: ["Payment Gateways", "Banking Solutions", "Investment Platforms", "Risk Management"]
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Automotive",
      description: "Fleet management, dealership systems, and automotive IoT solutions.",
      solutions: ["Fleet Management", "Dealership CRM", "IoT Solutions", "Maintenance Systems"]
    },
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      title: "Manufacturing",
      description: "Industrial automation, supply chain management, and quality control systems.",
      solutions: ["Automation Systems", "Supply Chain", "Quality Control", "Predictive Maintenance"]
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "Travel & Hospitality",
      description: "Booking systems, hotel management, and travel planning platforms.",
      solutions: ["Booking Platforms", "Hotel Management", "Travel Planning", "Customer Experience"]
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
              Industries We <span className="text-blue-600">Serve</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Specialized solutions tailored to meet the unique needs of various industries
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {industry.description}
                </p>
                <ul className="space-y-1">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs text-gray-600">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep domain knowledge combined with technical excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Domain Expertise
              </h3>
              <p className="text-gray-600">
                Deep understanding of industry-specific challenges and requirements
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compliance Ready
              </h3>
              <p className="text-gray-600">
                Solutions built with industry regulations and compliance standards in mind
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Track record of successful implementations across various industries
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;