import React from "react";

const SolutionsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        {/* Breadcrumb */}
        <p className="mb-6 text-sm text-gray-400">
          Security Solutions &gt; Email Security &amp; Cloud Solutions
        </p>

        {/* ========== Email Security Section ========== */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Email Security
          </h1>
          <p className="mb-8 text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Safeguard your communication with next-gen{" "}
            <span className="font-semibold text-white">
              phishing protection, AI-driven monitoring, and enterprise-grade
              encryption
            </span>
            . Our security framework ensures every email remains private, trusted,
            and compliant.
          </p>

          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300">
            Explore Email Security
          </button>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-16"></div>

        {/* ========== Cloud Solutions Section ========== */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300">
            Cloud Solutions
          </h1>
          <p className="mb-10 text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Your Vision. Our Cloud Expertise.</span>{" "}
            At Ecotech Global Services, we design cloud architectures that
            deliver <span className="text-white">agility, resilience, and innovation</span>{" "}
            at scale with AWS, Google Cloud, and Microsoft Azure.
          </p>

          {/* Why Choose Section */}
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            {[
              {
                title: "Multi-Cloud Mastery",
                desc: "Seamlessly integrate AWS, GCP, and Azure without vendor lock-in.",
              },
              {
                title: "End-to-End Delivery",
                desc: "From assessment & migration to managed services.",
              },
              {
                title: "Security & Compliance First",
                desc: "ISO-certified processes ensure data protection & compliance.",
              },
              {
                title: "Cost-Optimized Scalability",
                desc: "Architectures that grow with your business while controlling costs.",
              },
              {
                title: "24/7 Managed Support",
                desc: "Proactive monitoring & rapid incident response for maximum uptime.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2 text-green-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Our Services */}
          <h2 className="text-2xl font-bold mb-6">Our Cloud Services Include</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300 mb-12">
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
