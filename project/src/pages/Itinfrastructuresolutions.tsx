import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const ITInfrastructurePage: React.FC = () => {
  const capabilities = [
    {
      title: "Switching & Routing",
      description:
        "High-performance networking solutions from Cisco, HP, Allied Telesis, and Juniper Networks — engineered for speed, stability, and security.",
      icon: "🔄",
    },
    {
      title: "Server & Storage Solutions",
      description:
        "Enterprise-grade servers and storage systems from Dell, HP, and Cisco — optimized for high availability and data integrity.",
      icon: "🖥️",
    },
    {
      title: "Virtualization",
      description:
        "Streamline operations, reduce costs, and boost agility with leading virtualization platforms.",
      icon: "☁️",
    },
    {
      title: "VOIP Solutions",
      description:
        "Advanced Cisco-powered communication systems that enable clear, secure, and cost-efficient voice services.",
      icon: "📞",
    },
    {
      title: "Campus WiFi Networks",
      description:
        "Scalable, high-speed wireless infrastructure from Cisco, Aruba, Ruckus, and Fortinet — built for seamless connectivity across large campuses.",
      icon: "📶",
    },
    {
      title: "Backup & Data Protection",
      description:
        "Reliable data backup solutions from AWS, Acronis, and Veeam to safeguard your critical business assets.",
      icon: "🛡️",
    },
  ];

  const whyChooseFeatures = [
    {
      title: "ISO-Certified Quality & Security Standards",
      icon: "🏆",
    },
    {
      title: "Expert Implementation & Managed Services",
      icon: "⚙️",
    },
    {
      title: "Tailored Architectures for Your Business Needs",
      icon: "🎯",
    },
    {
      title: "24/7 Support & Proactive Maintenance",
      icon: "🔧",
    },
  ];

  const partners = [
    "Cisco",
    "HP",
    "Dell",
    "Allied Telesis",
    "Juniper Networks",
    "AWS",
    "Acronis",
    "Veeam",
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        {/* ========== Hero Section ========== */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            IT Infrastructure Solutions
          </h1>
          <div className="text-2xl font-bold mb-4">
            "Build, Scale, and Secure Your Enterprise with Precision."
          </div>
          <p className="mb-8 text-lg max-w-4xl mx-auto leading-relaxed">
            At <span className="font-semibold">Ecotech Global Services</span>,
            we deliver enterprise-grade IT infrastructure solutions that combine{" "}
            <span className="font-semibold">
              performance, reliability, and scalability
            </span>
            . Partnering with global leaders like{" "}
            <span className="font-semibold">
              Cisco, HP, Dell, Allied Telesis, and Juniper Networks
            </span>
            , we create robust, future-ready architectures for organizations of
            all sizes.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-white/20 my-16"></div>

        {/* ========== Core Capabilities Section ========== */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Our Core Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4 p-2 rounded-full bg-gray-800">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold">{capability.title}</h3>
                </div>
                <p className="leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-white/20 my-16"></div>

        {/* ========== Partners Section ========== */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Trusted Technology Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-gray-900/60 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-700"
              >
                <span className="font-bold text-lg">{partner}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-white/20 my-16"></div>

        {/* ========== Why Choose Section ========== */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Why Choose Ecotech?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 border border-gray-700 text-center"
              >
                <div className="text-3xl mb-4 p-3 rounded-full inline-block bg-gray-800">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ========== Quote Section ========== */}
        <section className="mb-20 text-center">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-bold mb-4">
              "Your IT infrastructure should accelerate your business — not slow
              it down. With Ecotech, you get a foundation engineered for growth."
            </blockquote>
          </div>
        </section>

        {/* ========== CTA Section ========== */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Get started with enterprise-grade solutions tailored to your
            business needs.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Styled Link as Button */}
            <Link
              to="/GetQuote"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📩 Get a Quote
            </Link>

            <Link
              to="/Contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📞 Talk to an Expert
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ITInfrastructurePage;
