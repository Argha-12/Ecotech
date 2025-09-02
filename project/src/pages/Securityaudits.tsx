import React from "react";

const SecurityAudit: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Security Audit Services
          </h1>
          <p className="text-lg text-gray-700 italic mb-2">
            "Because Prevention is Always Cheaper Than Recovery."
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our security audit services help you identify vulnerabilities and strengthen
            your defenses before threats strike.
          </p>
        </div>

        {/* Audit Types */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">VAPT</h3>
            <p className="text-gray-600">
              Vulnerability Assessment & Penetration Testing to uncover weak points in your system.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Red Teaming</h3>
            <p className="text-gray-600">
              Simulated real-world cyberattack scenarios to test your organization’s resilience.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">ISO Readiness</h3>
            <p className="text-gray-600">
              Ensure compliance with international standards through structured security audits.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Application Security Audit</h3>
            <p className="text-gray-600">
              In-depth assessment of your applications to secure them across the development lifecycle.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
            Book Your Security Audit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityAudit;
