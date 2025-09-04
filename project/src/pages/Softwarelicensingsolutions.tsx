import React from "react";

const SoftwareLicensingPage: React.FC = () => {
  const offerings = [
    {
      title: "Microsoft",
      description:
        "Office, Windows, Server, and cloud-based licensing for every business size.",
      icon: "💻",
    },
    {
      title: "Adobe",
      description:
        "Creative Cloud, Document Cloud, and enterprise design solutions.",
      icon: "🎨",
    },
    {
      title: "Autodesk",
      description:
        "Industry-leading CAD, engineering, and design software.",
      icon: "🏗️",
    },
    {
      title: "EViews",
      description:
        "Advanced econometric and statistical analysis tools.",
      icon: "📊",
    },
    {
      title: "Nitro",
      description:
        "Document productivity, PDF, and e-signature solutions.",
      icon: "📝",
    },
    {
      title: "Corel",
      description:
        "Graphics, design, and productivity software for creative professionals.",
      icon: "🌐",
    },
  ];

  const whyChoose = [
    {
      text: "ISO-Certified Processes for quality and compliance",
      icon: "🏆",
    },
    {
      text: "Cost Optimization Strategies to reduce your software spend",
      icon: "💰",
    },
    {
      text: "Genuine Licensing Guarantee with vendor-authorized distribution",
      icon: "✅",
    },
    {
      text: "End-to-End Support from procurement to deployment and renewal",
      icon: "⚙️",
    },
    {
      text: "Volume & Enterprise Licensing Expertise for large organizations",
      icon: "📦",
    },
  ];

  return (
    <div>
      {/* NEW HERO SECTION */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                    Trusted by 500+ Enterprises
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                    Software 
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {" "}Licensing
                    </span>
                    <br />
                    <span className="text-3xl lg:text-4xl font-light text-gray-300">
                      Done Right
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    Empower your business with genuine, compliant software from Microsoft, Adobe, Autodesk, and more. 
                    <span className="text-blue-300 font-semibold"> ISO-certified processes</span> ensure you get the right licenses at the right price.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "✅", text: "100% Genuine" },
                    { icon: "💰", text: "Cost Optimized" },
                    { icon: "🛡️", text: "Fully Compliant" },
                    { icon: "⚡", text: "Quick Deployment" }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <span className="text-2xl">{benefit.icon}</span>
                      <span className="text-white font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => console.log('Navigate to GetQuote')}
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl font-bold text-white shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Get Instant Quote</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <button
                    onClick={() => console.log('Navigate to Contact')}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl font-bold text-white border border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Talk to Expert</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                {/* Software Logos Floating Animation */}
                <div className="relative w-full h-96 lg:h-[500px]">
                  
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl shadow-blue-500/50 flex items-center justify-center animate-pulse">
                    <span className="text-white text-2xl font-bold">EGS</span>
                  </div>

                  {/* Floating Software Icons */}
                  {[
                    { name: "Microsoft", icon: "💻", position: "top-0 left-1/4", delay: "0s" },
                    { name: "Adobe", icon: "🎨", position: "top-16 right-8", delay: "0.5s" },
                    { name: "Autodesk", icon: "🏗️", position: "bottom-16 right-12", delay: "1s" },
                    { name: "EViews", icon: "📊", position: "bottom-0 left-1/4", delay: "1.5s" },
                    { name: "Nitro", icon: "📝", position: "top-24 left-4", delay: "2s" },
                    { name: "Corel", icon: "🌐", position: "bottom-24 right-0", delay: "2.5s" }
                  ].map((software, idx) => (
                    <div
                      key={idx}
                      className={`absolute ${software.position} w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center shadow-lg hover:bg-white/20 transition-all duration-300`}
                      style={{ 
                        animation: `float 3s ease-in-out infinite`,
                        animationDelay: software.delay 
                      }}
                    >
                      <span className="text-2xl">{software.icon}</span>
                    </div>
                  ))}

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    {/* Animated connecting lines */}
                    <path d="M200 100 Q250 150 200 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
                    <path d="M100 250 Q150 200 200 250" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  </svg>
                </div>

                {/* Stats Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-300">Enterprises Served</div>
                </div>

                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-400">ISO</div>
                  <div className="text-sm text-gray-300">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REST OF THE ORIGINAL PAGE */}
      <div className="relative bg-stone-900 text-white py-16 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* Offerings Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Our Software Licensing Offerings
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-700 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Why Choose Ecotech for Licensing?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChoose.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-700 flex items-start gap-4
                    ${idx === whyChoose.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}`}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <p className="text-lg text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xl font-semibold text-center text-white">
              💡 "The right software fuels productivity. The right licensing protects it."
            </p>
          </section>

          {/* Final CTA Section */}
          <div className="text-center mt-16">
            <button
              onClick={() => console.log('Navigate to GetQuote')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block mr-4"
            >
              📩 Get a Licensing Quote
            </button>

            <button
              onClick={() => console.log('Navigate to Contact')}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block"
            >
              📞 Talk to a Licensing Specialist
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
};

export default SoftwareLicensingPage;