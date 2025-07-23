import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend Technologies",
      technologies: [
        { name: "React", logo: "⚛️", description: "Modern JavaScript library for building user interfaces" },
        { name: "Vue.js", logo: "🖖", description: "Progressive JavaScript framework for UI development" },
        { name: "Angular", logo: "🅰️", description: "Platform for building mobile and desktop web applications" },
        { name: "Next.js", logo: "▲", description: "React framework for production-grade applications" },
        { name: "TypeScript", logo: "🔷", description: "Typed superset of JavaScript" },
        { name: "Tailwind CSS", logo: "🎨", description: "Utility-first CSS framework" }
      ]
    },
    {
      title: "Backend Technologies",
      technologies: [
        { name: "Node.js", logo: "🟢", description: "JavaScript runtime for server-side development" },
        { name: "Python", logo: "🐍", description: "Versatile programming language for backend development" },
        { name: "Java", logo: "☕", description: "Enterprise-grade programming language" },
        { name: "PHP", logo: "🐘", description: "Server-side scripting language" },
        { name: "Express.js", logo: "🚀", description: "Fast, unopinionated web framework for Node.js" },
        { name: "Django", logo: "🎯", description: "High-level Python web framework" }
      ]
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        { name: "AWS", logo: "☁️", description: "Amazon Web Services cloud platform" },
        { name: "Azure", logo: "🔷", description: "Microsoft cloud computing platform" },
        { name: "Google Cloud", logo: "🌐", description: "Google's cloud computing services" },
        { name: "Docker", logo: "🐳", description: "Containerization platform" },
        { name: "Kubernetes", logo: "⚓", description: "Container orchestration platform" },
        { name: "Jenkins", logo: "🔧", description: "Automation server for CI/CD" }
      ]
    },
    {
      title: "Mobile Technologies",
      technologies: [
        { name: "React Native", logo: "📱", description: "Cross-platform mobile development" },
        { name: "Flutter", logo: "🦋", description: "UI toolkit for mobile, web, and desktop" },
        { name: "iOS (Swift)", logo: "🍎", description: "Native iOS development" },
        { name: "Android (Kotlin)", logo: "🤖", description: "Native Android development" },
        { name: "Ionic", logo: "⚡", description: "Hybrid mobile app development" },
        { name: "Xamarin", logo: "🔷", description: "Cross-platform mobile development" }
      ]
    },
    {
      title: "Databases",
      technologies: [
        { name: "PostgreSQL", logo: "🐘", description: "Advanced open-source relational database" },
        { name: "MongoDB", logo: "🍃", description: "NoSQL document database" },
        { name: "MySQL", logo: "🐬", description: "Open-source relational database" },
        { name: "Redis", logo: "🔴", description: "In-memory data structure store" },
        { name: "Elasticsearch", logo: "🔍", description: "Search and analytics engine" },
        { name: "Firebase", logo: "🔥", description: "Backend-as-a-service platform" }
      ]
    },
    {
      title: "Emerging Technologies",
      technologies: [
        { name: "Artificial Intelligence", logo: "🤖", description: "Machine learning and AI solutions" },
        { name: "Blockchain", logo: "⛓️", description: "Distributed ledger technology" },
        { name: "IoT", logo: "🌐", description: "Internet of Things solutions" },
        { name: "AR/VR", logo: "🥽", description: "Augmented and Virtual Reality" },
        { name: "Edge Computing", logo: "🔗", description: "Computing at the network edge" },
        { name: "Quantum Computing", logo: "⚛️", description: "Next-generation computing" }
      ]
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
              Our <span className="text-blue-600">Technologies</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cutting-edge technologies and frameworks we use to build innovative solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform">
                          {tech.logo}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {tech.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we choose and implement the right technologies for your project
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
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Right Tool for the Job
              </h3>
              <p className="text-gray-600">
                We select technologies based on your specific requirements, not trends
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Future-Ready Solutions
              </h3>
              <p className="text-gray-600">
                We build with scalability and maintainability in mind
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Security First
              </h3>
              <p className="text-gray-600">
                All our solutions are built with security best practices
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;