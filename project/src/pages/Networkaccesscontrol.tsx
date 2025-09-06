import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Cpu, Wifi, Send, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const NetworkAccessControl: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Network Access Control (NAC) — Only the Right Devices, Every Time
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed italic"
        >
          "Zero Trust Starts at the Door."
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto"
        >
          We implement NAC solutions from{" "}
          <span className="font-semibold text-white">ForeScout</span>,{" "}
          <span className="font-semibold text-white">Cisco ISE</span>, and{" "}
          <span className="font-semibold text-white">Aruba ClearPass</span> to
          enforce identity-based access and keep unauthorized devices out of
          your network.
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
            <h3 className="text-xl font-bold mb-2">Role-based Access Policies</h3>
            <p className="text-gray-300">
              Control access dynamically by user, device, and context.
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
            <Wifi className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Real-time Device Profiling &amp; Authentication
            </h3>
            <p className="text-gray-300">
              Automatically identify and validate devices before entry.
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
            <h3 className="text-xl font-bold mb-2">
              Integration with SIEM &amp; Endpoint Tools
            </h3>
            <p className="text-gray-300">
              Enhance visibility and correlation across your security stack.
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
            <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Compliance Enforcement for BYOD
            </h3>
            <p className="text-gray-300">
              Ensure employee and guest devices meet your security standards.
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16 px-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Stay Ahead of Cyber Threats
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
              Protect your business with next-gen security solutions. Talk to
              our experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/GetQuote"
                className="inline-flex items-center gap-3 bg-black text-cyan-400 px-8 py-3 rounded-full font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <Send className="w-5 h-5 text-cyan-400" />
                <span>Request a Demo</span>
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

export default NetworkAccessControl;
