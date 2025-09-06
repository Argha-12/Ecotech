import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, FileCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityAudit: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#0f253f] to-[#000000] text-white px-6 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Top Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <ShieldCheck className="w-10 h-10 text-cyan-400" />
        </motion.div>

        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Security Audit Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl mb-6 text-white max-w-3xl mx-auto leading-relaxed"


        >
          "Because Prevention is Always Cheaper Than Recovery."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Our security audit services help you identify vulnerabilities and
          strengthen your defenses before threats strike.
        </motion.p>

        {/* Audit Types */}
        <div className="grid md:grid-cols-2 gap-8 text-center">
          {/* VAPT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 flex flex-col items-center"
          >
            <Target className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              VAPT
            </h3>
            <p className="text-gray-300">
              Vulnerability Assessment &amp; Penetration Testing to uncover
              weak points in your system.
            </p>
          </motion.div>

          {/* Red Teaming */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 flex flex-col items-center"
          >
            <ShieldCheck className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white  mb-2">
              Red Teaming
            </h3>
            <p className="text-gray-300">
              Simulated real-world cyberattack scenarios to test your
              organization’s resilience.
            </p>
          </motion.div>

          {/* ISO Readiness */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 flex flex-col items-center"
          >
            <FileCheck className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              ISO Readiness
            </h3>
            <p className="text-gray-300">
              Ensure compliance with international standards through
              structured security audits.
            </p>
          </motion.div>

          {/* Application Security Audit */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 flex flex-col items-center"
          >
            <Lock className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Application Security Audit
            </h3>
            <p className="text-gray-300">
              In-depth assessment of your applications to secure them across
              the development lifecycle.
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link to="/contact">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold shadow-lg text-black transition duration-300">
              🔍 Book Your Security Audit
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityAudit;
