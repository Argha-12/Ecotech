import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Cloud,
  Users,
  Server,
  Monitor,
  Shield,
  Database,
  RefreshCw,
  Clock,
  Award,
  KeyRound,
  Headphones,
} from "lucide-react";


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

const Emailcollaborationsolutions: React.FC = () => {
  const offerings = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Google Workspace",
      desc: "A complete suite of cloud-based productivity tools — Gmail, Drive, Docs, Meet — built for modern teamwork.",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Microsoft 365",
      desc: "Enterprise-class email, Office apps, and cloud services for seamless communication and document collaboration.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Zoho Email",
      desc: "Feature-rich, ad-free, and highly secure business email hosting with powerful collaboration tools.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "QLC Email",
      desc: "Reliable, secure, and customizable corporate email platform for On-Prem & Cloud deployments.",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Rediffmail",
      desc: "Robust, cost-effective email hosting tailored for growing businesses.",
    },
  ];

  const whyChoose = [
    {
      icon: <Award className="w-7 h-7" />,
      text: "ISO-Certified Implementation Standards ensuring security and compliance",
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      text: "Seamless Migration Services from legacy systems to modern platforms",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      text: "Advanced Security with anti-spam, anti-phishing, and encryption controls",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      text: "24/7 Support for uninterrupted productivity",
    },
    {
      icon: <KeyRound className="w-7 h-7" />,
      text: "Strong Authentication & Identity Management for safe access",
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      text: "Dedicated Expert Assistance for smooth adoption and training",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        {/* Hero Section */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-6">Email Collaboration Solutions</h1>
          <p className="text-2xl font-bold mb-4 italic">
            "Empowering Teams. Anywhere. Anytime."
          </p>
          <p className="mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
            At Ecotech Global Services, we deliver secure, scalable, and high-performance email and collaboration platforms to keep your teams connected and productive — wherever they are. Our partnerships with Google Workspace, Microsoft 365, Zoho Email, QLC Email, and Rediffmail enable us to provide solutions that combine enterprise-grade reliability, advanced security, and intuitive user experiences.
          </p>
        </motion.section>

        {/* Offerings */}
<section className="mb-20 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-extrabold mb-10 text-center">
      Our Email & Collaboration Offerings
    </h2>

    {/* Flex wrap to keep last row centered */}
    <div className="flex flex-wrap justify-center gap-6">
      {offerings.map((item, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-gray-500 flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[30%]"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <div className="text-xl mb-4 p-2 rounded-full bg-gray-800 inline-flex items-center justify-center">
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="leading-relaxed text-gray-300">{item.desc}</p>
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
              className="bg-white p-6 mx-4 rounded-2xl shadow-md flex items-center justify-center min-w-[220px] h-[120px]"
            >
              <img
                src={partner.logo}   // ✅ imported logo used here
                alt={partner.name}
                className="max-h-24 md:max-h-28 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    
        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Why Choose Ecotech for Email & Collaboration?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-lg font-medium">{item.text}</h3>
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
              "Whether you’re a startup or a global enterprise, we connect your people with the tools they need to succeed — securely and efficiently."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Email & Collaboration Setup?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Get started with secure, reliable, and high-performance email and collaboration solutions today.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/get-quote"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📩 Request a Demo
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block text-white"
            >
              📞 Talk to a Collaboration Expert
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Emailcollaborationsolutions;
