import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Activity, Cloud, Send, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import paloaltoLogo from "../assets/EDR & XDR/crowdstrike.jpg";
import sophosLogo from "../assets/EDR & XDR/Palo Alto.png";
import ciscoLogo from "../assets/EDR & XDR/qh.jpg";
import crowdstrikeLogo from "../assets/EDR & XDR/Trend-Micro-XDR.jpg";
import Sophos from "../assets/EDR & XDR/Sophos.jpg";

const partners = [
 
  { name: "crowdstrike", logo: paloaltoLogo },
  { name: "Palo Alto", logo: sophosLogo },
  { name: "qh", logo: ciscoLogo },
  { name: "Trend-Micro-XDR", logo: crowdstrikeLogo },
  { name: "Sophos", logo: Sophos },
];

const ManagedEDRXDR: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15, 103, 116, 0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Managed EDR & XDR Solutions — Proactive Threat Detection, 24/7
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl mb-6 text-white-800 max-w-3xl mx-auto leading-relaxed italic"
        >
          "From Detection to Response — Faster Than the Threat."
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto"
        >
          We deliver managed{" "}
          <span className="font-semibold text-white">Endpoint Detection & Response (EDR)</span> and{" "}
          <span className="font-semibold text-white">Extended Detection & Response (XDR)</span> services powered by{" "}
          <span className="font-semibold text-white">Trend Micro</span>,{" "}
          <span className="font-semibold text-white">Quick Heal</span>,{" "}
          <span className="font-semibold text-white">CrowdStrike</span>,{" "}
          <span className="font-semibold text-white">Palo Alto</span>, and{" "}
          <span className="font-semibold text-white">Sophos</span>. Our experts monitor, detect, investigate, and respond to threats in real time — so you can stay focused on running your business.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-center">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300"
          >
            <ShieldCheck className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-driven Threat Detection</h3>
            <p className="text-gray-300">
              Automated detection & response powered by advanced machine learning.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300"
          >
            <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">24/7 Threat Monitoring</h3>
            <p className="text-gray-300">
              Continuous monitoring for advanced persistent threats (APTs).
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300"
          >
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Centralized Incident Management</h3>
            <p className="text-gray-300">
              Unified reporting & incident response across your environment.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300"
          >
            <Cloud className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Cloud-native Deployment</h3>
            <p className="text-gray-300">
              Scalable, secure deployment designed for remote teams.
            </p>
          </motion.div>
        </div>

                {/* Partners */}
                <section className="py-16 bg-gray text-white relative overflow-hidden">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold">Our Valued Pantners</h2>
                    <p className="mt-4 text-lg text-gray-300">
                      Trusted by industry leaders across the globe 🌐
                    </p>
                  </div>
        
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gray-900 py-16 px-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Get Your Threat Readiness Review
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
              Strengthen your defenses with proactive EDR & XDR security. Let’s evaluate your readiness today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/get-quote"
                className="inline-flex items-center gap-3 bg-black text-cyan-400 px-8 py-3 rounded-full font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <Send className="w-5 h-5 text-cyan-400" />
                <span>Request a Review</span>
              </Link>

              <Link
                to="/Contact"
                className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
              >
                <Phone className="w-5 h-5 text-blue-700" />
                <span>Speak to a Security Expert</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagedEDRXDR;
