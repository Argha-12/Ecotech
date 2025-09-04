import React from "react";

const WebAppDevelopment = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Build scalable websites and web applications tailored to your business needs. From corporate sites to complex e-commerce platforms.",
      features: ["Responsive Design", "CMS Integration", "API Development", "Performance Optimization"],
      icon: "🌐"
    },
    {
      title: "Mobile Applications",
      description: "Native iOS and Android apps, plus cross-platform solutions that deliver exceptional user experiences across all devices.",
      features: ["React Native", "Flutter", "Native Development", "App Store Deployment"],
      icon: "📱"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom business applications that streamline operations and integrate seamlessly with your existing systems.",
      features: ["CRM Systems", "Workflow Automation", "Dashboard Analytics", "System Integration"],
      icon: "🏢"
    },
    {
      title: "Progressive Web Apps",
      description: "Combine the best of web and mobile apps with PWAs that work offline and provide native-like experiences.",
      features: ["Offline Functionality", "Push Notifications", "Fast Loading", "Cross-Platform"],
      icon: "⚡"
    }
  ];

  const advantages = [
    "Agile development methodology for faster time-to-market",
    "Modern tech stack with proven frameworks and tools",
    "Comprehensive testing and quality assurance processes",
    "Ongoing support and maintenance after launch",
    "Scalable architecture designed for future growth"
  ];

  const techStack = [
    { name: 'React', gradient: 'from-blue-400 to-blue-600' },
    { name: 'Vue.js', gradient: 'from-green-400 to-green-600' },
    { name: 'Node.js', gradient: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', gradient: 'from-purple-400 to-purple-600' },
    { name: 'Flutter', gradient: 'from-cyan-400 to-cyan-600' },
    { name: 'Swift', gradient: 'from-pink-400 to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-white text-sm font-medium border border-gray-700/50 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Full-Stack Development Partners
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                Web & App Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light leading-relaxed">
                Your Vision. Our Expertise.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-lg">
                Design digital experiences that deliver <span className="text-white font-semibold">agility, resilience,</span> and <span className="text-white font-semibold">innovation</span> at scale with React, Node.js, and modern frameworks.
              </p>

              {/* Feature Cards Row 1 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center bg-gray-800/30 rounded-xl px-4 py-3 border border-gray-700/30 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">End-to-End Delivery</span>
                </div>
                
                <div className="flex items-center bg-gray-800/30 rounded-xl px-4 py-3 border border-gray-700/30 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">Security First</span>
                </div>
              </div>

              {/* Feature Cards Row 2 */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="flex items-center bg-gray-800/30 rounded-xl px-4 py-3 border border-gray-700/30 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">Cost Optimized</span>
                </div>
                
                <div className="flex items-center bg-gray-800/30 rounded-xl px-4 py-3 border border-gray-700/30 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">High Performance</span>
                </div>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                  <span className="relative z-10">Start Your Project</span>
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white rounded-xl font-semibold hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm">
                  View Our Work
                </button>
              </div> */}
            </div>

            {/* Right Content - Floating Elements */}
            <div className="relative hidden lg:block">
              {/* 24/7 Support Card */}
              <div className="absolute top-0 right-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 animate-float">
                <div className="text-green-400 text-2xl font-bold">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>

              {/* React Card */}
              <div className="absolute top-20 right-32 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 animate-float-delay-1">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26"/>
                  </svg>
                </div>
                <div className="text-white text-sm font-medium">React</div>
              </div>

              {/* Main Cloud Card */}
              <div className="absolute top-32 right-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 animate-float-delay-2 shadow-2xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                </div>
                <div className="text-white text-xl font-bold mb-1">Web Apps</div>
              </div>

              {/* Security Card */}
              <div className="absolute bottom-32 right-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 animate-float">
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-white text-sm font-medium">Security</div>
              </div>

              {/* Mobile Card */}
              <div className="absolute bottom-16 right-32 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 animate-float-delay-1">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v10H6V4zm2 12a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-white text-sm font-medium">Mobile</div>
              </div>

              {/* Hybrid Card */}
              <div className="absolute bottom-0 right-24 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 animate-float">
                <div className="w-6 h-6 bg-gray-500 rounded-lg flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-white text-xs font-medium">Hybrid</div>
              </div>

              {/* 99.9% Uptime */}
              <div className="absolute bottom-20 left-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 animate-float-delay-2">
                <div className="text-white text-xl font-bold">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>

              {/* Small Tech Icons */}
              <div className="absolute bottom-8 left-24 flex space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded border border-gray-700"></div>
                <div className="w-6 h-6 bg-green-500 rounded border border-gray-700"></div>
                <div className="w-6 h-6 bg-orange-500 rounded border border-gray-700"></div>
                <div className="w-6 h-6 bg-purple-500 rounded border border-gray-700"></div>
                <div className="w-6 h-6 bg-pink-500 rounded border border-gray-700"></div>
                <div className="w-6 h-6 bg-cyan-500 rounded border border-gray-700"></div>
              </div>
              
              <div className="absolute bottom-0 left-32 flex space-x-2">
                <div className="w-4 h-4 bg-blue-400 rounded"></div>
                <div className="w-4 h-4 bg-green-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay-1 {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float-delay-1 3s ease-in-out infinite;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 3s ease-in-out infinite;
        }
      `}</style>

      {/* Services Grid */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Development Services</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your unique business needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-white/90 mb-8 leading-relaxed text-lg">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Partner With Us</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the difference of working with a dedicated development team
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - advantages */}
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-lg leading-relaxed font-medium">{advantage}</span>
                </div>
              ))}
            </div>
            
            {/* Right side - dynamic icons */}
            <div className="grid grid-cols-3 gap-8 justify-items-center">
              {[
                "🤖", // AI & Automation
                "☁️", // Cloud Solutions
                "🛠️", // Development Tools
                "📈", // Growth & Scaling
                "🧩", // Modular / Integration
                "🔭", // Innovation / Future Vision
              ].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-24 h-24 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-4xl shadow-lg animate-float hover:scale-110 hover:rotate-3 hover:shadow-purple-500/30 transition-all duration-500"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating animation keyframes */}
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          `}
        </style>
      </section>



      {/* Tech Stack */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Technologies We Master</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We work with cutting-edge technologies and frameworks to ensure your applications 
              are built on solid, future-proof foundations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {tech.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join hundreds of satisfied clients who've trusted us with their digital transformation journey.
          </p>
          <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebAppDevelopment;