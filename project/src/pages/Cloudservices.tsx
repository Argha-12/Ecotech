import React from "react";

const SolutionsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">

        {/* ========== Cloud Solutions Section ========== */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-white">
            Cloud Solutions
          </h1>
          <p className="mb-10 text-lg max-w-3xl mx-auto text-white leading-relaxed">
            <span className="font-semibold text-white">Your Vision. Our Cloud Expertise.</span>{" "}
            At Ecotech Global Services, we design cloud architectures that
            deliver <span className="text-white">agility, resilience, and innovation</span>{" "}
            at scale with AWS, Google Cloud, and Microsoft Azure.
          </p>

          {/* Why Choose Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            {[
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
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 flex flex-col items-center"
              >
                <div className="text-4xl mb-4 p-4 bg-gray-700 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white text-center leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Our Services */}
          <h2 className="text-3xl font-bold mb-6 text-white">Our Cloud Services Include</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-white mb-12">
            <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">Cloud Strategy & Consulting</li>
            <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">Migration & Modernization</li>
            <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">Hybrid & Multi-Cloud Solutions</li>
            <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">Cloud Security & Compliance</li>
            <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">Disaster Recovery & Backup</li>
            <li className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">Performance Monitoring & Optimization</li>
          </ul>

          {/* CTA */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300">
              Get a Quote
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300">
              Talk to an Expert
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolutionsPage;