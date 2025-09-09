import React from 'react';
import { ArrowRight, Users, Cloud, Building, Globe, Award, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  impact: string;
  industry: string;
  icon: React.ReactNode;
  metrics: {
    label: string;
    value: string;
  }[];
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Ashok Hall Group of School – Transforming Traditional Classrooms into Digital Learning Spaces',
      description: 'Partnered with Ashok Hall Group to design and implement a complete digital classroom transformation across 200+ classrooms. Deployed projectors, CPUs, and interactive smart boards with subject-specific digital content, comprehensive training programs, and ongoing technical support.',
      impact: 'Enhanced learning experience with interactive lessons, empowered teachers with digital tools, and positioned the school as a technology-enabled institution',
      industry: 'Education',
      icon: <Users className="w-6 h-6 text-blue-300" />,
      metrics: [
        { label: 'Classrooms', value: '200+' },
        { label: 'Teacher Training', value: '100%' },
        { label: 'Student Engagement', value: '95%' }
      ]
    },
    {
      id: 2,
      title: 'IIT Kharagpur – Empowering 15,000 Students with Google Workspace',
      description: 'Delivered consultancy and deployment services for Google Workspace for Education at IIT Kharagpur. Facilitated 15,000+ licenses, provided implementation support, and conducted comprehensive training for administrators, faculty, and students.',
      impact: 'Enabled seamless collaboration, scalable communication, and boosted academic efficiency across the entire institute',
      industry: 'Education & Research',
      icon: <Cloud className="w-6 h-6 text-blue-300" />,
      metrics: [
        { label: 'User Licenses', value: '15,000+' },
        { label: 'Platform Adoption', value: '100%' },
        { label: 'Collaboration Boost', value: '80%' }
      ]
    },
    {
      id: 3,
      title: 'Wow! Momo – Nationwide Retail Digital Transformation',
      description: 'Delivered comprehensive digital transformation for Wow! Momo across 500+ stores. Deployed integrated POS billing systems, provided e-commerce consultancy, and hosted their platform on AWS cloud infrastructure for scalable online ordering.',
      impact: 'Streamlined operations with faster billing, centralized reporting, and scalable infrastructure supporting nationwide growth',
      industry: 'Retail & Food Services',
      icon: <Building className="w-6 h-6 text-blue-300" />,
      metrics: [
        { label: 'Store Coverage', value: '500+' },
        { label: 'Checkout Speed', value: '50% faster' },
        { label: 'Online Growth', value: '200%' }
      ]
    },
    {
      id: 4,
      title: 'St. Xavier\'s College – Seamless Campus-Wide WiFi Transformation',
      description: 'Designed and deployed state-of-the-art campus-wide wireless network using Aruba and Fortinet technologies. Implemented indoor/outdoor access points, centralized controller, and integrated UTM security for comprehensive campus connectivity.',
      impact: 'Delivered seamless WiFi access across campus, enhanced digital learning capabilities, and ensured robust network security',
      industry: 'Higher Education',
      icon: <Globe className="w-6 h-6 text-blue-300" />,
      metrics: [
        { label: 'Campus Coverage', value: '100%' },
        { label: 'Network Uptime', value: '99.9%' },
        { label: 'Security Level', value: 'Enterprise' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Glare effect behind title */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-8">
              <Award className="w-5 h-5 text-blue-300" />
              <span className="text-blue-300 font-medium text-sm">Success Stories</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Our Success Stories
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Discover how we've helped organizations achieve their digital transformation goals through innovative solutions and strategic partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Stats Overview */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                700+
              </div>
              <div className="text-slate-400 text-sm">Locations Served</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                15K+
              </div>
              <div className="text-slate-400 text-sm">Users Empowered</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-slate-400 text-sm">Uptime Achieved</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
          </div> */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="group relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glare effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400/5 rounded-full blur-xl"></div>
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                        {study.icon}
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <TrendingUp className="w-5 h-5 text-blue-300/60" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors duration-300">
                    {study.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">
                    {study.description}
                  </p>

                  {/* Impact highlight */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-lg mb-6 border-l-2 border-blue-500/30">
                    <p className="text-sm text-blue-200 font-medium">
                      {study.impact}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-3 bg-slate-700/30 rounded-lg backdrop-blur-sm border border-slate-600/30">
                        <div className="text-xl font-bold text-blue-300 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-400 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-700/50">
                    <button className="group/btn flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-all duration-300 font-medium">
                      {/* <span>View Detailed Case Study</span> */}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-block p-8 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Organization?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl">
                Join these successful organizations and discover how our solutions can drive your digital transformation journey.
              </p>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors duration-300 shadow-lg hover:shadow-blue-500/25">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;