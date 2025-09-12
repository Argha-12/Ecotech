import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import nexvalLogo from "../assets/logos/NEXVAL.jpg";
import dellLogo from "../assets/logos/paharpur.jpg";
import peerlessLogo from "../assets/logos/peerless.jpg";
import rsSoftwareLogo from "../assets/logos/RSSoftware.jpg";
import alcoveLogo from "../assets/logos/Alcove Reality.jpg";
import amitLogo from "../assets/logos/Amit Metalics.png";
import ashokaLogo from "../assets/logos/Ashoka Hall.png";

const partners = [
  { name: "NEXVAL", logo: nexvalLogo },
  { name: "Dell", logo: dellLogo },
  { name: "Allied Telesis", logo: peerlessLogo },
  { name: "Juniper Networks", logo: rsSoftwareLogo },
  { name: "AWS", logo: alcoveLogo },
  { name: "Acronis", logo: amitLogo },
  { name: "Veeam", logo: ashokaLogo },
];

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
      <section className="mb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-10 text-center">
            Our Software Licensing Offerings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-gray-500 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-xl mb-4 p-2 rounded-full bg-gray-800 inline-flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="leading-relaxed text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Partners */}
          <section className="py-16 bg-black text-white relative overflow-hidden">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold">Our Valued Pantners</h2>
              <p className="mt-4 text-lg text-gray-300">
                Trusted by industry leaders across the globe 🌐
              </p>
            </div>
      
            {/* ✅ restrict width to 80% and center */}
            <div className="max-w-[80%] mx-auto overflow-hidden">
              <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 mx-4 rounded-2xl shadow-md flex items-center justify-center w-[220px] h-[120px]"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-[260px] h-[120px] object-contain"
                  />
                </div>
                ))}
              </motion.div>
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
                className={`bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-500 text-center
                  ${idx === whyChoose.length - 1 && whyChoose.length % 2 !== 0 ? "col-span-2 mx-auto w-full md:w-1/2" : ""}`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-xl mb-4 p-2 rounded-full inline-block bg-gray-800">
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
          <div className="bg-gray-900 p-4 rounded-2xl border border-gray-500 max-w-4xl mx-auto">
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
              to="/get-quote"
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
