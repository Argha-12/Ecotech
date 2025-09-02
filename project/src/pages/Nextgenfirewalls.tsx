import React from "react";

export default function IntelligentPerimeterProtection() {
  return (
    <section className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Intelligent Perimeter Protection
        </h2>

        {/* Subheading */}
        <p className="text-lg italic text-blue-300 mb-6">
          "Stopping Threats Before They Reach You."
        </p>

        {/* Description */}
        <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-gray-200">
          Our next-generation firewalls from{" "}
          <span className="text-blue-300 font-semibold">Fortinet</span>,{" "}
          <span className="text-blue-300 font-semibold">Sophos</span>,{" "}
          <span className="text-blue-300 font-semibold">SonicWall</span>, and{" "}
          <span className="text-blue-300 font-semibold">Palo Alto</span> offer
          deep packet inspection, intrusion prevention, and application control
          for maximum network security.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-3">
              Advanced Threat Intelligence
            </h3>
            <p>
              Integrated with global threat feeds to proactively block known and
              emerging attacks.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-3">SSL Inspection</h3>
            <p>
              Comprehensive scanning for encrypted traffic to uncover hidden
              threats.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-3">
              Application-Aware Traffic
            </h3>
            <p>
              Intelligent control of applications for optimized security and
              bandwidth management.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-3">Unified Security Policies</h3>
            <p>
              Enforce consistent policies across distributed locations with
              simplified security management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
