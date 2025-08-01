import React from 'react';
import { Award, Users, Globe, Rocket, Star } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      id: 1,
      year: '2015',
      title: 'Company Founded',
      description: 'Ecotech was founded with a vision to revolutionize IT solutions with innovative technology.',
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
    },
    {
      id: 2,
      year: '2017',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, marking our entry into the corporate IT solutions space.',
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
    {
      id: 3,
      year: '2019',
      title: 'Global Expansion',
      description: 'Expanded our operations to serve clients across three continents with a growing team of experts.',
      icon: <Globe className="w-6 h-6 text-purple-600" />,
    },
    {
      id: 4,
      year: '2021',
      title: 'Award-Winning Solutions',
      description: 'Received the "Innovation in Technology" award for our groundbreaking enterprise solutions.',
      icon: <Award className="w-6 h-6 text-yellow-600" />,
    },
    {
      id: 5,
      year: '2023',
      title: 'Industry Recognition',
      description: 'Recognized as one of the fastest-growing IT solution providers in the industry.',
      icon: <Star className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
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
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline content */}
                <div className={`w-full md:w-5/12 px-4 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                        {milestone.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        <span className="text-sm font-medium text-blue-600">{milestone.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Year marker */}
                <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-blue-500 absolute left-1/2 transform -translate-x-1/2 -translate-y-6 z-10">
                  <span className="text-lg font-bold text-gray-800">{milestone.year}</span>
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
