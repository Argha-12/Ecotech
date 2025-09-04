import React from "react";
import { Link } from "react-router-dom";

const CloudSolutionsPage: React.FC = () => {
  const cloudProviders = [
    {
      name: "AWS",
      icon: "☁️",
      description: "Complete Amazon Web Services implementation and optimization",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Google Cloud",
      icon: "🌐",
      description: "Advanced Google Cloud Platform solutions and AI integration",
      color: "from-blue-500 to-green-500",
    },
    {
      name: "Microsoft Azure",
      icon: "💼",
      description: "Enterprise-grade Azure cloud services and hybrid solutions",
      color: "from-blue-600 to-purple-600",
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
    <div>
      {/* HERO SECTION */}
      <div className="relative min-h-screen bg-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium backdrop-blur-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    Multi-Cloud Certified Partners
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                    Cloud <span className="text-white-400">Solutions</span>
                    <br />
                    <span className="text-3xl lg:text-4xl font-light text-gray-300">
                      Your Vision. Our Expertise.
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    Design cloud architectures that deliver
                    <span className="text-gray-200 font-semibold">
                      {" "}
                      agility, resilience, and innovation
                    </span>{" "}
                    at scale with AWS, Google Cloud, and Microsoft Azure.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🚀", text: "End-to-End Delivery" },
                    { icon: "🔒", text: "Security First" },
                    { icon: "📈", text: "Cost Optimized" },
                    { icon: "⚡", text: "High Performance" },
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                      <span className="text-2xl">{benefit.icon}</span>
                      <span className="text-white font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative w-full h-96 lg:h-[500px]">
                  {/* Central Cloud Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl shadow-blue-500/50 flex items-center justify-center animate-pulse">
                    <div className="text-center">
                      <span className="text-white text-3xl">☁️</span>
                      <div className="text-white text-sm font-bold mt-2">Cloud</div>
                    </div>
                  </div>

                  {/* Floating Cloud Provider Icons */}
                  {[
                    {
                      name: "AWS",
                      icon: "☁️",
                      position: "top-8 left-8",
                      delay: "0s",
                    },
                    {
                      name: "Google Cloud",
                      icon: "🌐",
                      position: "top-12 right-4",
                      delay: "0.8s",
                    },
                    {
                      name: "Azure",
                      icon: "💼",
                      position: "bottom-8 right-8",
                      delay: "1.6s",
                    },
                    {
                      name: "Hybrid",
                      icon: "🔗",
                      position: "bottom-12 left-4",
                      delay: "2.4s",
                    },
                    {
                      name: "Security",
                      icon: "🛡️",
                      position: "top-1/2 left-0",
                      delay: "3.2s",
                    },
                    {
                      name: "Analytics",
                      icon: "📊",
                      position: "top-1/2 right-0",
                      delay: "4s",
                    },
                  ].map((provider, idx) => (
                    <div
                      key={idx}
                      className={`absolute ${provider.position} w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center justify-center shadow-lg hover:bg-white/20 transition-all duration-300`}
                      style={{
                        animation: `float 4s ease-in-out infinite`,
                        animationDelay: provider.delay,
                      }}
                    >
                      <span className="text-2xl mb-1">{provider.icon}</span>
                      <span className="text-white text-xs font-medium">
                        {provider.name}
                      </span>
                    </div>
                  ))}

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient
                        id="cloudGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06D6A0" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="250"
                      cy="200"
                      r="80"
                      stroke="url(#cloudGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-spin"
                      style={{ animationDuration: "20s" }}
                    />
                    <circle
                      cx="250"
                      cy="200"
                      r="120"
                      stroke="url(#cloudGradient)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="8,8"
                      className="animate-spin"
                      style={{ animationDuration: "30s", animationDirection: "reverse" }}
                    />
                  </svg>
                </div>

                {/* Stats Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime SLA</div>
                </div>

                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REST OF THE PAGE CONTENT */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Cloud Providers Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Multi-Cloud Platform Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-700 text-center group"
                >
                  <div
                    className={`text-5xl mb-6 p-4 bg-gradient-to-r ${provider.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    {provider.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {provider.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {provider.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Why Choose Ecotech for Cloud Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 border border-gray-700"
                >
                  <div className="text-4xl mb-4 p-4 bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Services */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Our Cloud Services Include
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300 border border-gray-700 flex justify-center items-center gap-4 hover:scale-105"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-lg font-medium text-white">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to Transform Your Business with Cloud?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our cloud experts design a solution that scales with your
                ambitions while optimizing costs and ensuring security.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link
                  to="/get-quote"
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
      `}</style>
    </div>
  );
};

export default CloudSolutionsPage;
