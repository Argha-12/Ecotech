import React from "react";

const ITInfrastructurePage: React.FC = () => {
  const capabilities = [
    {
      title: "Switching & Routing",
      description: "High-performance networking solutions from Cisco, HP, Allied Telesis, and Juniper Networks — engineered for speed, stability, and security.",
      icon: "🔄"
    },
    {
      title: "Server & Storage Solutions", 
      description: "Enterprise-grade servers and storage systems from Dell, HP, and Cisco — optimized for high availability and data integrity.",
      icon: "🖥️"
    },
    {
      title: "Virtualization",
      description: "Streamline operations, reduce costs, and boost agility with leading virtualization platforms.",
      icon: "☁️"
    },
    {
      title: "VOIP Solutions",
      description: "Advanced Cisco-powered communication systems that enable clear, secure, and cost-efficient voice services.",
      icon: "📞"
    },
    {
      title: "Campus WiFi Networks",
      description: "Scalable, high-speed wireless infrastructure from Cisco, Aruba, Ruckus, and Fortinet — built for seamless connectivity across large campuses.",
      icon: "📶"
    },
    {
      title: "Backup & Data Protection",
      description: "Reliable data backup solutions from AWS, Acronis, and Veeam to safeguard your critical business assets.",
      icon: "🛡️"
    }
  ];

  const whyChooseFeatures = [
    {
      title: "ISO-Certified Quality & Security Standards",
      icon: "🏆"
    },
    {
      title: "Expert Implementation & Managed Services", 
      icon: "⚙️"
    },
    {
      title: "Tailored Architectures for Your Business Needs",
      icon: "🎯"
    },
    {
      title: "24/7 Support & Proactive Maintenance",
      icon: "🔧"
    }
  ];

  const partners = [
    "Cisco", "HP", "Dell", "Allied Telesis", "Juniper Networks", "AWS", "Acronis", "Veeam"
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        {/* Breadcrumb
        <p className="mb-6 text-sm text-gray-400">
          Security Solutions &gt; Email Security &amp; Cloud Solutions &gt; IT Infrastructure Solutions
        </p> */}

        {/* ========== Hero Section ========== */}
       <section className="mb-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-white">
            IT Infrastructure Solutions
          </h1>
          <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            "Build, Scale, and Secure Your Enterprise with Precision."
          </div>
          <p className="mb-8 text-lg max-w-4xl mx-auto text-white leading-relaxed">
            At <span className="font-semibold text-white">Ecotech Global Services</span>, we deliver enterprise-grade IT infrastructure solutions that combine{" "}
            <span className="font-semibold text-white">performance, reliability, and scalability</span>. 
            Partnering with global leaders like{" "}
            <span className="text-green-400 font-semibold">Cisco, HP, Dell, Allied Telesis, and Juniper Networks</span>, 
            we create robust, future-ready architectures for organizations of all sizes.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 my-16"></div>

        {/* ========== Core Capabilities Section ========== */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            Our Core Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 border border-gray-700 hover:border-purple-500"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple-300">{capability.title}</h3>
                </div>
                <p className="text-white leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 my-16"></div>

        {/* ========== Partners Section ========== */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            Trusted Technology Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gradient-to-br hover:from-gray-700/60 hover:to-gray-800/60 transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-green-400/50 shadow-lg hover:shadow-xl hover:shadow-green-400/20 group"
              >
                <span className="font-bold text-lg text-white group-hover:text-green-300 transition-colors duration-300">{partner}</span>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/50 to-transparent mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 my-16"></div>

        {/* ========== Why Choose Section ========== */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            Why Choose Ecotech?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 border border-gray-700 hover:border-green-500 text-center"
              >
                <div className="text-5xl mb-4 bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-full inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ========== Quote Section ========== */}
        <section className="mb-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
              "Your IT infrastructure should accelerate your business — not slow it down. With Ecotech, you get a foundation engineered for growth."
            </blockquote>
          </div>
        </section>

        {/* ========== CTA Section ========== */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Infrastructure?</h2>
          <p className="mb-8 text-lg text-white max-w-2xl mx-auto">
            Get started with enterprise-grade solutions tailored to your business needs.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300">
              📩 Get a Quote
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300">
              📞 Talk to an Expert
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ITInfrastructurePage;