import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Lock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

import nexvalLogo from "../assets/NMS/ForeScout.png";
import dellLogo from "../assets/NMS/Shieldworks.png";



const partners = [

  { name: "ForeScout", logo: nexvalLogo },
  { name: "Shieldworks", logo: dellLogo },
];

const ITOTSecurity: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#0f253f] to-[#000000] text-white px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9, 67, 80, 0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          IT &amp; OT Security Protecting Both Digital &amp; Physical Systems
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl mb-6 text-white-300 max-w-3xl mx-auto leading-relaxed"
        >
          "Industrial and Enterprise Security Under One Roof."
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto"
        >
          We secure both your IT infrastructure and Operational Technology (OT)
          environments with solutions from{" "}
          <span className="font-semibold text-white">Shield Work</span> and{" "}
          <span className="font-semibold text-white">ForeScout</span>.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 text-center"
          >
            <ShieldCheck className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">
              Asset Discovery Across IT &amp; OT Networks
            </h3>
            <p className="text-gray-300">
              Gain visibility into all devices and assets within IT and OT
              environments for stronger security.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 text-center"
          >
            <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">
              Threat Detection for Industrial Control Systems (ICS)
            </h3>
            <p className="text-gray-300">
              Detect and mitigate threats targeting industrial and operational
              technologies in real time.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 text-center"
          >
            <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">
              Segmentation &amp; Access Control
            </h3>
            <p className="text-gray-300">
              Implement strict segmentation and enforce access policies to
              protect critical systems from breaches.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 text-center"
          >
            <AlertTriangle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">
              Incident Response Planning
            </h3>
            <p className="text-gray-300">
              Prepare for cyber incidents with proactive planning tailored for
              hybrid IT &amp; OT environments.
            </p>
          </motion.div>
        </div>

                {/* Partners Section */}
                <section className="py-16 bg-gray text-white relative overflow-hidden">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold">Our Valued Partners</h2>
                    <p className="mt-4 text-lg text-gray-300">
                      Trusted by industry leaders across the globe 🌐
                    </p>
                  </div>
                
                  {/* ✅ Smooth Scrolling Carousel */}
                      <div className="max-w-[80%] mx-auto overflow-hidden">
                        <motion.div
                          className="flex w-max"
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
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
        

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link to="/contact">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold shadow-lg text-black transition duration-300">
              📩 Request a Security Gap Analysis
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ITOTSecurity;
