import React from "react";

const NetworkMonitoring: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-center text-white px-6">
      <div className="max-w-4xl">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6">
          Network Monitoring Systems (NMS) — Complete Visibility &amp; Control
        </h1>

        {/* Intro */}
        <p className="mb-6 text-lg md:text-xl leading-relaxed italic">
          "Know What’s Happening Before It Becomes a Problem."
        </p>
        <p className="mb-10 text-lg leading-relaxed">
          With Everest, ManageEngine, and Motadata, we provide real-time
          performance monitoring, alerts, and analytics for your network
          infrastructure.
        </p>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Proactive Fault Detection &amp; Resolution
            </h3>
            <p>
              Identify and resolve issues before they impact business
              operations, ensuring maximum uptime.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Traffic Analysis &amp; Bandwidth Optimization
            </h3>
            <p>
              Get deep visibility into traffic patterns and optimize bandwidth
              usage across your network.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              SLA Tracking &amp; Compliance Reporting
            </h3>
            <p>
              Track Service Level Agreements (SLAs) and generate compliance
              reports to meet business requirements.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Centralized Dashboard</h3>
            <p>
              Monitor multiple sites from a single dashboard with real-time
              analytics and alerts.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold shadow-lg text-black">
            📞 Book a Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkMonitoring;
