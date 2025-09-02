import React from "react";
import { ShieldCheck, Lock, Mail, AlertTriangle, Cloud, Eye } from "lucide-react"; 
import bgImage from "../assets/email.jpg"; // Adjust path

const EmailSecurity: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
      title: "Advanced Threat Protection",
      desc: "Block malicious attachments, URLs, and zero-day exploits before they reach inboxes.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: "Anti-Phishing & Impersonation Detection",
      desc: "Stop CEO fraud, business email compromise (BEC), and spoofing attacks.",
    },
    {
      icon: <Mail className="w-8 h-8 text-green-400" />,
      title: "Spam & Malware Filtering",
      desc: "Ensure only safe, relevant messages reach your team.",
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: "Email Encryption",
      desc: "Protect sensitive communications with end-to-end encryption.",
    },
    {
      icon: <Eye className="w-8 h-8 text-yellow-400" />,
      title: "Data Loss Prevention (DLP)",
      desc: "Prevent accidental or intentional leaks of confidential information.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-teal-400" />,
      title: "Cloud & Hybrid Security",
      desc: "Protection for Microsoft 365, Google Workspace, and on-premise email systems.",
    },
  ];

  const whyChoose = [
    {
      title: "Multi-Vendor Expertise",
      desc: "Certified in Trend Micro, Fortinet, Check Point, Barracuda, and Sophos solutions.",
    },
    {
      title: "ISO-Certified Standards",
      desc: "Compliant with ISO 27001:2013 for top-tier security implementations.",
    },
    {
      title: "Seamless Integration",
      desc: "Works with your existing email platform without disrupting workflows.",
    },
    {
      title: "24/7 Threat Monitoring",
      desc: "Continuous protection with rapid incident response.",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-black/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 text-white">
        {/* Breadcrumb (left aligned)
        <p className="mb-6 text-sm text-gray-300 text-left">
          Security Solutions &gt; Email Security
        </p> */}

        {/* Title & Tagline Centered */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Email Security</h1>
          <p className="text-lg italic mb-6 text-blue-300">
            "Because Every Email Could Be a Threat — Or an Opportunity."
          </p>
          <p className="text-base md:text-lg leading-7 text-gray-100 font-light tracking-wide">
            At <span className="font-semibold">Ecotech Global Services</span>,
            we deliver enterprise-grade email protection that keeps your
            organization safe from phishing, ransomware, and targeted attacks —
            without compromising productivity. We partner with{" "}
            <span className="font-semibold">
              Trend Micro, Fortinet, Check Point, Barracuda, and Sophos
            </span>{" "}
            to deliver layered, intelligent, and adaptive email security for
            modern businesses.
          </p>
        </div>

        {/* Features */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          What Our Email Security Covers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition transform hover:-translate-y-2"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <h2 className="text-3xl font-bold text-white text-center mt-12">
          Why Choose Ecotech for Email Security?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-white/20 transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Secure Your Email Communications?
          </h3>
          <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSecurity;
