import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const SoftwareLicensingPage: React.FC = () => {
  const offerings = [
    {
      title: "Microsoft",
      description:
        "Office, Windows, Server, and cloud-based licensing for every business size.",
      icon: "💻",
    },
    {
      title: "Adobe",
      description:
        "Creative Cloud, Document Cloud, and enterprise design solutions.",
      icon: "🎨",
    },
    {
      title: "Autodesk",
      description:
        "Industry-leading CAD, engineering, and design software.",
      icon: "🏗️",
    },
    {
      title: "EViews",
      description:
        "Advanced econometric and statistical analysis tools.",
      icon: "📊",
    },
    {
      title: "Nitro",
      description:
        "Document productivity, PDF, and e-signature solutions.",
      icon: "📝",
    },
    {
      title: "Corel",
      description:
        "Graphics, design, and productivity software for creative professionals.",
      icon: "🌐",
    },
  ];

  const whyChoose = [
    {
      text: "ISO-Certified Processes for quality and compliance",
      icon: "🏆",
    },
    {
      text: "Cost Optimization Strategies to reduce your software spend",
      icon: "💰",
    },
    {
      text: "Genuine Licensing Guarantee with vendor-authorized distribution",
      icon: "✅",
    },
    {
      text: "End-to-End Support from procurement to deployment and renewal",
      icon: "⚙️",
    },
    {
      text: "Volume & Enterprise Licensing Expertise for large organizations",
      icon: "📦",
    },
  ];

  return (
    <div className="relative min-h-screen bg-stone-900 text-white py-16 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title Section */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-white">
            Software Licensing The Right Tools Licensed Right
          </h1>
          <p className="text-xl text-gray-300 mb-4 italic">
            "Empowering Your Business with Genuine, Compliant Software."
          </p>
          <p className="mb-8 text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
            At Ecotech Global Services, we help enterprises access, deploy, and
            manage the world’s most trusted software solutions — ensuring you
            have the right licenses, the right compliance, and the right support
            to maximize productivity. We partner with global leaders like
            Microsoft, Adobe, Autodesk, EViews, Nitro, and Corel to deliver
            authentic, up-to-date, and cost-optimized software licensing
            solutions for every industry.
          </p>
        </section>

        {/* Offerings */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Our Software Licensing Offerings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-700 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Why Choose Ecotech for Licensing?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className={`bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-700 flex items-start gap-4
                  ${idx === whyChoose.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}`}
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="text-lg text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xl font-semibold text-center text-white">
            💡 "The right software fuels productivity. The right licensing protects it."
          </p>
        </section>


        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/GetQuote"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block mr-4"
          >
            📩 Get a Licensing Quote
          </Link>

          <Link
            to="/Contact"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition duration-300 inline-block"
          >
            📞 Talk to a Licensing Specialist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareLicensingPage;
