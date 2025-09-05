import React from "react";
import { motion } from "framer-motion";
import { Activity, Wifi, BarChart3, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const NetworkMonitoring: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
        >
          Network Monitoring Systems (NMS) Complete Visibility &amp; Control
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          "Know What’s Happening Before It Becomes a Problem."
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto"
        >
          With{" "}
          <span className="font-semibold text-white">Everest</span>,{" "}
          <span className="font-semibold text-white">ManageEngine</span>, and{" "}
          <span className="font-semibold text-white">Motadata</span>, we provide
          real-time performance monitoring, alerts, and analytics for your
          network infrastructure.
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
            <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Proactive Fault Detection &amp; Resolution
            </h3>
            <p className="text-gray-300">
              Identify and resolve issues before they impact business operations, ensuring maximum uptime.
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
              Traffic Analysis &amp; Bandwidth Optimization
            </h3>
            <p className="text-gray-300">
              Get deep visibility into traffic patterns and optimize bandwidth usage across your network.
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
            <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">SLA Tracking &amp; Compliance Reporting</h3>
            <p className="text-gray-300">
              Track Service Level Agreements (SLAs) and generate compliance reports to meet business requirements.
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
            <LayoutDashboard className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Centralized Dashboard</h3>
            <p className="text-gray-300">
              Monitor multiple sites from a single dashboard with real-time analytics and alerts.
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
              Stay Ahead with Smart Network Monitoring
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
              Ensure uptime, optimize bandwidth, and stay compliant with our advanced NMS solutions. 
              Talk to our experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/GetQuote"
                className="bg-black text-cyan-400 px-8 py-3 rounded-full font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                📩 Request a Demo
              </Link>
              <Link
                to="/Contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
              >
                📞 Speak to a Security Expert
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkMonitoring;
