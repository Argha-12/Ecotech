import React from "react";
import { Award, Users, Globe, Rocket, Star } from "lucide-react";

const Timeline = () => {
const milestones = [
    {
      id: 1,
      year: "2016",
      title: "Founded",
      description:
        "Ecotech was established to deliver innovative IT & cloud solutions with a vision to transform business technology.",
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      highlight: "Founded",
    },
    {
      id: 2,
      year: "2017",
      title: "Strategic Partnerships",
      description:
        "Became an official partner with industry leaders: Fortinet, Google & Microsoft, establishing our credibility in the market.",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      highlight: "3 Major Partnerships",
    },
    {
      id: 3,
      year: "2019",
      title: "Expansion & Growth",
      description:
        "Signed partnerships with AWS & Trend Micro, expanded operations to Bengaluru, and achieved our first major milestone of 100+ customers.",
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      highlight: "100+ Customers",
    },
    {
      id: 4,
      year: "2020",
      title: "Recognition & Scale",
      description:
        "Achieved Quick Heal Tier-1 Platinum Partner status and doubled our customer base to 200+ clients during challenging times.",
      icon: <Award className="w-6 h-6 text-amber-400" />,
      highlight: "Platinum Partner",
    },
    {
      id: 5,
      year: "2021",
      title: "Award Excellence",
      description:
        "Won the prestigious Fortinet SMB Hero Award while reaching 300+ customers, marking our excellence in cybersecurity solutions.",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      highlight: "SMB Hero Award",
    },
    {
      id: 6,
      year: "2024",
      title: "Remarkable Growth",
      description:
        "Expanded operations to Odisha and achieved an incredible milestone of 500+ customers, solidifying our position as a leading IT solutions provider.",
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      highlight: "500+ Customers",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Milestones that define our path to excellence
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline content */}
                <div
                  className={`w-full md:w-5/12 px-4 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-full bg-gray-800">
                        {milestone.icon}
                      </div>
                      <div className="ml-3">
                        <h3 className="text-xl font-semibold text-white">
                          {milestone.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-400">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-2">{milestone.description}</p>
                  </div>
                </div>

                {/* Year marker */}
                <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border-4 border-blue-500 absolute left-1/2 transform -translate-x-1/2 -translate-y-6 z-10 shadow-lg">
                  <span className="text-lg font-bold text-white">
                    {milestone.year}
                  </span>
                </div>

                {/* Spacer for even items */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
