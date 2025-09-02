import React from "react";
import { Activity, Shield, Search, Clock, Award, CheckCircle, Layers, Eye } from "lucide-react";

const ManagedEDRXDRWithWhyChoose = () => {
  const features = [
    {
      icon: <Activity size={32} className="text-blue-400" />,
      title: "Proactive Threat Detection",
      description: "Identify and stop cyberattacks before they impact your operations.",
    },
    {
      icon: <Shield size={32} className="text-green-400" />,
      title: "Endpoint Detection & Response (EDR)",
      description: "Advanced endpoint security with real-time monitoring and attack response.",
    },
    {
      icon: <Search size={32} className="text-yellow-400" />,
      title: "Extended Detection & Response (XDR)",
      description: "Cross-layered threat visibility across endpoints, networks, and cloud environments.",
    },
    {
      icon: <Clock size={32} className="text-pink-400" />,
      title: "24/7 Monitoring & Response",
      description: "Continuous detection, investigation, and mitigation — around the clock.",
    },
  ];

  const whyChoose = [
    {
      icon: <Layers size={32} className="text-purple-400" />,
      title: "Multi-Vendor Expertise",
      description: "Certified in Trend Micro, Fortinet, CrowdStrike, Palo Alto, Barracuda, and Sophos.",
    },
    {
      icon: <Award size={32} className="text-blue-400" />,
      title: "ISO-Certified Standards",
      description: "Compliant with ISO 27001:2013 for top-tier security implementations.",
    },
    {
      icon: <Eye size={32} className="text-green-400" />,
      title: "Seamless Integration",
      description: "Works with your existing IT infrastructure without disrupting workflows.",
    },
    {
      icon: <CheckCircle size={32} className="text-pink-400" />,
      title: "24/7 Threat Monitoring",
      description: "Continuous protection with rapid incident response.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#0a1f44] via-[#0f2d64] to-[#142c54] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Header */}
        <h2 className="text-3xl font-extrabold mb-6">
          Managed <span className="text-blue-400">EDR & XDR</span> Solutions
        </h2>
        <p className="text-lg italic text-gray-300 mb-6">
          "From Detection to Response — Faster Than the Threat."
        </p>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
          We deliver managed Endpoint Detection & Response (EDR) and Extended Detection & Response (XDR) services powered by <span className="text-blue-400">Trend Micro, Quick Heal, CrowdStrike, Palo Alto, and Sophos</span>. 
          Our experts monitor, detect, investigate, and respond to threats in real time — so you can stay focused on running your business.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1c2f57] rounded-xl shadow-lg p-6 flex flex-col items-center text-center 
                         hover:bg-[#243a6e] transition duration-300 ease-in-out"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <h3 className="text-2xl font-bold mb-10">
          Why Choose <span className="text-blue-400">Ecotech</span> for Endpoint Security?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c2f57] rounded-xl shadow-lg p-6 flex flex-col items-center text-center 
                         hover:bg-[#243a6e] transition duration-300 ease-in-out"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagedEDRXDRWithWhyChoose;
