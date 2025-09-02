import React from "react";

const SIEMSOARSOC: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-center text-white px-6">
      <div className="max-w-4xl">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6">
          SIEM, SOAR &amp; SOC Solutions — Centralized Security Operations
        </h1>

        {/* Intro */}
        <p className="mb-6 text-lg md:text-xl leading-relaxed italic">
          "Your Command Center for Cyber Defense."
        </p>
        <p className="mb-10 text-lg leading-relaxed">
          We design and deploy SIEM (Security Information &amp; Event
          Management), SOAR (Security Orchestration, Automation &amp;
          Response), and SOC (Security Operations Center) frameworks for 24/7
          monitoring and rapid incident response.
        </p>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Centralized Log Collection &amp; Analysis
            </h3>
            <p>
              Aggregate logs from across your infrastructure and analyze them
              for faster detection of security threats.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Automated Playbooks for Incident Handling
            </h3>
            <p>
              Automate repetitive tasks with predefined workflows for faster and
              more efficient incident response.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Threat Intelligence Feed Integration
            </h3>
            <p>
              Stay updated with global threat intelligence feeds and integrate
              them directly into your SOC operations.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              SOC-as-a-Service with Skilled Analysts
            </h3>
            <p>
              Leverage our expert SOC team to continuously monitor, analyze, and
              respond to evolving cyber threats.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold shadow-lg text-black">
            📞 Talk to a SOC Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default SIEMSOARSOC;
