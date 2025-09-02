import React from "react";
import { CheckCircle } from "lucide-react";

const NetworkAccessControl = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-indigo-200 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Network Access Control (NAC) — Only the Right Devices, Every Time
        </h2>

        {/* Subheading */}
        <p className="text-lg italic text-blue-700 mb-6">
          "Zero Trust Starts at the Door."
        </p>

        {/* Description */}
        <p className="text-base md:text-lg mb-8 max-w-4xl">
          We implement NAC solutions from{" "}
          <span className="font-semibold">ForeScout</span>,{" "}
          <span className="font-semibold">Cisco ISE</span>, and{" "}
          <span className="font-semibold">Aruba ClearPass</span> to enforce
          identity-based access and keep unauthorized devices out of your
          network.
        </p>

        {/* Features list */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
            <p>
              <span className="font-semibold">Role-based access policies</span> — 
              control access dynamically by user, device, and context.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
            <p>
              <span className="font-semibold">Real-time device profiling & authentication</span> — 
              automatically identify and validate devices before entry.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
            <p>
              <span className="font-semibold">Integration with SIEM & endpoint security tools</span> — 
              enhance visibility and correlation across your security stack.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
            <p>
              <span className="font-semibold">Compliance enforcement for BYOD</span> — 
              ensure employee and guest devices meet your security standards.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold shadow-lg">
            Request a NAC Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default NetworkAccessControl;
