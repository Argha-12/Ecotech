import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Cloud, Building, Globe } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  impact: string;
  industry: string;
  icon: React.ReactNode;
  metrics: {
    label: string;
    value: string;
  }[];
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Ashok Hall Group of School – Transforming Traditional Classrooms into Digital Learning Spaces',
      description: 'Partnered with Ashok Hall Group to design and implement a complete digital classroom transformation across 200+ classrooms. Deployed projectors, CPUs, and interactive smart boards with subject-specific digital content, comprehensive training programs, and ongoing technical support.',
      impact: 'Enhanced learning experience with interactive lessons, empowered teachers with digital tools, and positioned the school as a technology-enabled institution',
      industry: 'Education',
      icon: <Users className="w-6 h-6 text-blue-400" />,
      metrics: [
        { label: 'Classrooms', value: '200+' },
        { label: 'Teacher Training', value: '100%' },
        { label: 'Student Engagement', value: '95%' }
      ]
    },
    {
      id: 2,
      title: 'IIT Kharagpur – Empowering 15,000 Students with Google Workspace',
      description: 'Delivered consultancy and deployment services for Google Workspace for Education at IIT Kharagpur. Facilitated 15,000+ licenses, provided implementation support, and conducted comprehensive training for administrators, faculty, and students.',
      impact: 'Enabled seamless collaboration, scalable communication, and boosted academic efficiency across the entire institute',
      industry: 'Education & Research',
      icon: <Cloud className="w-6 h-6 text-green-400" />,
      metrics: [
        { label: 'User Licenses', value: '15,000+' },
        { label: 'Platform Adoption', value: '100%' },
        { label: 'Collaboration Boost', value: '80%' }
      ]
    },
    {
      id: 3,
      title: 'Wow! Momo – Nationwide Retail Digital Transformation',
      description: 'Delivered comprehensive digital transformation for Wow! Momo across 500+ stores. Deployed integrated POS billing systems, provided e-commerce consultancy, and hosted their platform on AWS cloud infrastructure for scalable online ordering.',
      impact: 'Streamlined operations with faster billing, centralized reporting, and scalable infrastructure supporting nationwide growth',
      industry: 'Retail & Food Services',
      icon: <Building className="w-6 h-6 text-purple-400" />,
      metrics: [
        { label: 'Store Coverage', value: '500+' },
        { label: 'Checkout Speed', value: '50% faster' },
        { label: 'Online Growth', value: '200%' }
      ]
    },
    {
      id: 4,
      title: 'St. Xavier\'s College – Seamless Campus-Wide WiFi Transformation',
      description: 'Designed and deployed state-of-the-art campus-wide wireless network using Aruba and Fortinet technologies. Implemented indoor/outdoor access points, centralized controller, and integrated UTM security for comprehensive campus connectivity.',
      impact: 'Delivered seamless WiFi access across campus, enhanced digital learning capabilities, and ensured robust network security',
      industry: 'Higher Education',
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      metrics: [
        { label: 'Campus Coverage', value: '100%' },
        { label: 'Network Uptime', value: '99.9%' },
        { label: 'Security Level', value: 'Enterprise' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we've helped organizations achieve their digital transformation goals
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      {study.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-400">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-blue-400">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
