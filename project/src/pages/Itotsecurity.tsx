import React from "react";

const ITOTSecurity: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center text-white px-6">
      <div className="max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          IT &amp; OT Security — Protecting Both Digital &amp; Physical Systems
        </h1>

        {/* Intro */}
        <p className="mb-6 text-lg md:text-xl leading-relaxed italic">
          "Industrial and Enterprise Security Under One Roof."
        </p>
        <p className="mb-10 text-lg leading-relaxed">
          We secure both your IT infrastructure and Operational Technology (OT)
          environments with solutions from Shield Work and ForeScout.
        </p>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Asset Discovery Across IT &amp; OT Networks
            </h3>
            <p>
              Gain visibility into all devices and assets within IT and OT
              environments for stronger security.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Threat Detection for Industrial Control Systems (ICS)
            </h3>
            <p>
              Detect and mitigate threats targeting industrial and operational
              technologies in real time.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Segmentation &amp; Access Control
            </h3>
            <p>
              Implement strict segmentation and enforce access policies to
              protect critical systems from breaches.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Incident Response Planning
            </h3>
            <p>
              Prepare for cyber incidents with proactive planning tailored for
              hybrid IT &amp; OT environments.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold shadow-lg text-black">
            📩 Request a Security Gap Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITOTSecurity;
