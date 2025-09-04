import React from "react";
import { Link } from "react-router-dom";

const ITInfrastructurePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Email & Collaboration Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-4 italic">
            "Empowering Teams. Anywhere. Anytime."
          </p>
          <p className="mb-8 text-lg max-w-3xl mx-auto text-white leading-relaxed">
            At Ecotech Global Services, we deliver secure, scalable, and
            high-performance email and collaboration platforms to keep your
            teams connected and productive — wherever they are. Our partnerships
            with Google Workspace, Microsoft 365, Zoho Email, QLC Email, and
            Rediffmail enable us to provide solutions that combine
            enterprise-grade reliability, advanced security, and intuitive user
            experiences.
          </p>
        </section>

        {/* Offerings */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Our Email & Collaboration Offerings
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Workspace",
                desc: "A complete suite of cloud-based productivity tools — Gmail, Drive, Docs, Meet — built for modern teamwork.",
              },
              {
                title: "Microsoft 365",
                desc: "Enterprise-class email, Office apps, and cloud services for seamless communication and document collaboration.",
              },
              {
                title: "Zoho Email",
                desc: "Feature-rich, ad-free, and highly secure business email hosting with powerful collaboration tools.",
              },
              {
                title: "QLC Email",
                desc: "Reliable, secure, and customizable corporate email platform for On-Prem & Cloud deployments.",
              },
              {
                title: "Rediffmail",
                desc: "Robust, cost-effective email hosting tailored for growing businesses.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">
            Why Choose Ecotech for Email & Collaboration?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🏆",
                text: "ISO-Certified Implementation Standards ensuring security and compliance",
              },
              {
                icon: "🔄",
                text: "Seamless Migration Services from legacy systems to modern platforms",
              },
              {
                icon: "🔒",
                text: "Advanced Security with anti-spam, anti-phishing, and encryption controls",
              },
              {
                icon: "⏰",
                text: "24/7 Support for uninterrupted productivity",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-700 flex items-start gap-4"
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="text-lg text-white text-left">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xl font-semibold text-white">
            "Whether you’re a startup or a global enterprise, we connect your
            people with the tools they need to succeed — securely and
            efficiently."
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-12 space-x-4">
          <Link
            to="/get-quote"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-lg transition duration-300"
          >
            📩 Request a Demo
          </Link>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-lg transition duration-300"
          >
            📞 Talk to a Collaboration Expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ITInfrastructurePage;
