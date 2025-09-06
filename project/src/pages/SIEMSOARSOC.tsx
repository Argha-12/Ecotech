import React from "react";
import { motion } from "framer-motion";
import { FileText, Workflow, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SIEMSOARSOC: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#0f253f] to-[#000000] text-white px-6 py-20 overflow-hidden">
      {/* Icon at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <Shield className="w-14 h-14 text-cyan-400" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          SIEM, SOAR &amp; SOC Solutions Centralized Security Operations
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          "Your Command Center for Cyber Defense."
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto"
        >
          We design and deploy{" "}
          <span className="font-semibold text-white">SIEM</span> (Security
          Information &amp; Event Management),{" "}
          <span className="font-semibold text-white">SOAR</span> (Security
          Orchestration, Automation &amp; Response), and{" "}
          <span className="font-semibold text-white">SOC</span> (Security
          Operations Center) frameworks for 24/7 monitoring and rapid incident
          response.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 text-center"
          >
            <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">
              Centralized Log Collection &amp; Analysis
            </h3>
            <p className="text-gray-300">
              Aggregate logs across your infrastructure and analyze them for
              faster detection of security threats.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 text-center"
          >
            <Workflow className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">
              Automated Playbooks for Incident Handling
            </h3>
            <p className="text-gray-300">
              Automate repetitive tasks with workflows for faster, more
              efficient incident response.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 text-center"
          >
            <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">
              Threat Intelligence Feed Integration
            </h3>
            <p className="text-gray-300">
              Stay updated with global threat intelligence feeds and integrate
              them into your SOC operations.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 p-8 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition duration-300 text-center"
          >
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">
              SOC-as-a-Service with Skilled Analysts
            </h3>
            <p className="text-gray-300">
              Leverage our SOC experts to continuously monitor, analyze, and
              respond to evolving cyber threats.
            </p>
          </motion.div>
        </div>

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
              🚀 Get a SOC Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SIEMSOARSOC;
