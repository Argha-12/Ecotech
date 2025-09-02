import React from "react";

const ITInfrastructurePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-white">
            Email & Collaboration Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-4 italic">
            "Empowering Teams. Anywhere. Anytime."
          </p>
          <p className="mb-8 text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
            At Ecotech Global Services, we deliver secure, scalable, and
            high-performance email and collaboration platforms to keep your
            teams connected and productive — wherever they are. Our
            partnerships with Google Workspace, Microsoft 365, Zoho Email, QLC
            Email, and Rediffmail enable us to provide solutions that combine
            enterprise-grade reliability, advanced security, and intuitive user
            experiences.
          </p>
        </section>

        {/* Offerings */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Our Email & Collaboration Offerings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Google Workspace</h3>
              <p>
                A complete suite of cloud-based productivity tools — Gmail, Drive,
                Docs, Meet — built for modern teamwork.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Microsoft 365</h3>
              <p>
                Enterprise-class email, Office apps, and cloud services for seamless
                communication and document collaboration.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Zoho Email</h3>
              <p>
                Feature-rich, ad-free, and highly secure business email hosting with
                powerful collaboration tools.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">QLC Email</h3>
              <p>
                Reliable, secure, and customizable corporate email platform for
                On-Prem & Cloud deployments.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Rediffmail</h3>
              <p>
                Robust, cost-effective email hosting tailored for growing businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Why Choose Ecotech for Email & Collaboration?
          </h2>
          <ul className="space-y-4 text-lg text-gray-300 max-w-3xl mx-auto">
            <li>• ISO-Certified Implementation Standards ensuring security and compliance</li>
            <li>• Seamless Migration Services from legacy systems to modern platforms</li>
            <li>• Advanced Security with anti-spam, anti-phishing, and encryption controls</li>
            <li>• 24/7 Support for uninterrupted productivity</li>
          </ul>
          <p className="mt-6 text-xl font-semibold text-white">
            "Whether you’re a startup or a global enterprise, we connect your people
            with the tools they need to succeed — securely and efficiently."
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-lg mr-4">
            📩 Request a Demo
          </button>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-lg">
            📞 Talk to a Collaboration Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITInfrastructurePage;
