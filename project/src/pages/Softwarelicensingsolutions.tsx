import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SoftwareLicensingPage: React.FC = () => {
  const offerings = [
    { title: "Microsoft", description: "Office, Windows, Server, and cloud-based licensing for every business size.", icon: "💻" },
    { title: "Adobe", description: "Creative Cloud, Document Cloud, and enterprise design solutions.", icon: "🎨" },
    { title: "Autodesk", description: "Industry-leading CAD, engineering, and design software.", icon: "🏗️" },
    { title: "EViews", description: "Advanced econometric and statistical analysis tools.", icon: "📊" },
    { title: "Nitro", description: "Document productivity, PDF, and e-signature solutions.", icon: "📝" },
    { title: "Corel", description: "Graphics, design, and productivity software for creative professionals.", icon: "🌐" },
  ];

  const whyChoose = [
    { text: "ISO-Certified Processes for quality and compliance", icon: "🏆" },
    { text: "Cost Optimization Strategies to reduce your software spend", icon: "💰" },
    { text: "Genuine Licensing Guarantee with vendor-authorized distribution", icon: "✅" },
    { text: "End-to-End Support from procurement to deployment and renewal", icon: "⚙️" },
    { text: "Volume & Enterprise Licensing Expertise for large organizations", icon: "📦" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
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
        {/* Hero Section */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-6">Software Licensing</h1>
          <div className="text-2xl font-bold mb-4">Licensing Done Right.</div>
          <p className="mb-8 text-lg max-w-4xl mx-auto leading-relaxed">
            Empower your business with genuine, compliant software from {" "}
            <span className="font-semibold">Microsoft, Adobe, Autodesk</span> and more. {" "}
            <span className="font-semibold">ISO-certified processes</span> ensure you get the right licenses at the right price.
          </p>
        </motion.section>



        {/* Offerings */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Our Software Licensing Offerings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4 p-2 rounded-full bg-gray-800">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Why Choose Ecotech for Licensing?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                className={`bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-700 text-center
                  ${idx === whyChoose.length - 1 && whyChoose.length % 2 !== 0 ? "col-span-2 mx-auto w-full md:w-1/2" : ""}`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-3xl mb-4 p-3 rounded-full inline-block bg-gray-800">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.text}</h3>
              </motion.div>
            ))}
          </div>
        </section>



        {/* Quote */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 p-4 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-bold mb-4">
              The right software fuels productivity. The right licensing protects it.
            </blockquote>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Software Licensing?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Get started with genuine, cost-optimized, and compliant software solutions today.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/GetQuote"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📩 Get a Licensing Quote
            </Link>

            <Link
              to="/Contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📞 Talk to a Licensing Specialist
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SoftwareLicensingPage;
