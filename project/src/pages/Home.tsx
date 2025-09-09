import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Users, Award, FileText, Layout, Code2, CheckCircle, Rocket, Smartphone, Cloud, Target, BookOpen } from 'lucide-react';
import Timeline from '../components/Timeline';
import googleBg from "../assets/googleBg.png";
import awsBg from "../assets/awsBg.jpg";
import infraBg from "../assets/infraBg.jpg";
import Bg from "../assets/Bg.jpg";

interface Service {
  icon: JSX.Element;
  title: string;
  bgColor: string;
  points: string[];
  link?: string;
  customClass?: string;
}

const heroContent = [
  {
    id: 1,
    title: "Secure Your",
    highlight: "Digital Future",
    subtitle: "Enterprise IT Infrastructure, Cloud Solutions & Cybersecurity Services for Modern Businesses across Eastern India",
    trustIndicators: [
      { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "ISO 27001 Certified" },
      { icon: <Cloud className="w-4 h-4 text-blue-500" />, text: "Cloud Partner" },
      { icon: <Zap className="w-4 h-4 text-blue-500" />, text: "24/7 Support" }
    ],
    backgroundImage: null, // pick your default background
    backgroundType: "image"
  },
  {
    id: 2,
    title: "Power Your Business",
    highlight: "Beyond Limits",
    subtitle: "Enterprise Cloud Solutions, Engineered by Ecotech - Delivering secure, scalable, and future-ready cloud platforms.",
    trustIndicators: [
      { icon: <Cloud className="w-4 h-4 text-blue-500" />, text: "Cloud Migration" },
      { icon: <Rocket className="w-4 h-4 text-blue-500" />, text: "Scalable Solutions" },
      { icon: <CheckCircle className="w-4 h-4 text-blue-500" />, text: "Future-Ready" }
    ],
    backgroundImage: Bg,
    backgroundType: "image"
  },
  {
    id: 3,
    title: "Google Workspace",
    highlight: "Partner Excellence",
    subtitle: "The Most Loved Google Workspace Partner in Your Region — Where Productivity Meets Perfection. Unlock 40% OFF Today!",
    trustIndicators: [
      { icon: <Users className="w-4 h-4 text-blue-500" />, text: "Productivity Boost" },
      { icon: <Award className="w-4 h-4 text-blue-500" />, text: "40% OFF Limited" },
      { icon: <Zap className="w-4 h-4 text-blue-500" />, text: "Instant Setup" }
    ],
    backgroundImage: googleBg,
    backgroundType: "image"
  },
  {
    id: 4,
    title: "AWS Cloud",
    highlight: "Solutions Gateway",
    subtitle: "Your Gateway to Scalable, Secure, and Future-Ready AWS Cloud Solutions...",
    trustIndicators: [
      { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "AWS Certified" },
      { icon: <Cloud className="w-4 h-4 text-blue-500" />, text: "50% Discount" },
      { icon: <Rocket className="w-4 h-4 text-blue-500" />, text: "Managed Services" }
    ],
    backgroundImage: awsBg,
    backgroundType: "image"
  },
  {
    id: 5,
    title: "Premium IT",
    highlight: "Infrastructure",
    subtitle: "From Vision to Execution — Premium IT Infrastructure for Tomorrow’s Leaders.",
    trustIndicators: [
      { icon: <Code2 className="w-4 h-4 text-blue-500" />, text: "World-Class Solutions" },
      { icon: <Rocket className="w-4 h-4 text-blue-500" />, text: "Digital Transformation" },
      { icon: <Award className="w-4 h-4 text-blue-500" />, text: "Premium Support" }
    ],
    backgroundImage: infraBg,
    backgroundType: "image"
  },
  {
    id: 6,
    title: "Globally Trusted",
    highlight: "Rigorously Certified",
    subtitle: "Delivering Excellence with ISO 9001:2015, ISO 27001:2013, and ISO/IEC 20000-1:2018 Standards.",
    trustIndicators: [
      { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "ISO 9001:2015" },
      { icon: <Award className="w-4 h-4 text-blue-500" />, text: "ISO 27001:2013" },
      { icon: <CheckCircle className="w-4 h-4 text-blue-500" />, text: "ISO/IEC 20000-1" }
    ],
    backgroundImage: Bg,
    backgroundType: "image"
  }
];


const Home: React.FC = () => {
  // State for current hero content
  const [currentHero, setCurrentHero] = useState(0);

  // Auto-rotate hero content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const services: Service[] = [
    {
      icon: <span>🛡️</span>,
      title: "Cyber Security Solutions",
      bgColor: "#ef4444", // red
      points: [
        "Next-Gen Firewalls & Endpoint Protection",
        "SIEM/SOAR & MDR/XDR Platforms",
        "Cloud & Network Security (AWS, Azure, GCP)",
        "24/7 Threat Monitoring & Incident Response",
      ],
      link: "#", 
    },
    {
      icon: <span>☁️</span>,
      title: "Cloud Solutions",
      bgColor: "#0ea5e9", // blue
      points: [
        "Multi-Cloud Architecture (AWS, Azure, GCP)",
        "Migration & Modernization",
        "Hybrid & Multi-Cloud Strategy",
        "Backup, Recovery & Cost Optimization",
      ],
      link: "#",
    },
    {
      icon: <span>🖥️</span>,
      title: "IT Infrastructure Solutions",
      bgColor: "#6366f1", // indigo
      points: [
        "Switching, Routing & Networking",
        "Server & Storage Solutions",
        "Virtualization & VOIP Systems",
        "Campus WiFi & Data Protection",
      ],
      link: "#",
      customClass: "text-gray-200 text-[15px] leading-relaxed font-medium hover:text-blue-400 transition-colors duration-200"
    },
    {
      icon: <span>📧</span>,
      title: "Email & Collaboration",
      bgColor: "#22c55e", // green
      points: [
        "Google Workspace & Microsoft 365",
        "Zoho, QLC & Rediffmail Solutions",
        "Secure Email with Anti-Spam & Encryption",
        "Seamless Migration & 24/7 Support",
      ],
      link: "#",
    },
    {
      icon: <span>🎥</span>,
      title: "Audio Visual Solutions",
      bgColor: "#f59e0b", // yellow
      points: [
        "Boardroom & Video Conferencing",
        "Smart Classroom Solutions",
        "Active LED & Video Walls",
        "Custom AV Design & Integration",
      ],
      link: "#",
    },
    {
      icon: <span>💻</span>,
      title: "Software Licensing",
      bgColor: "#d946ef", // purple
      points: [
        "Microsoft, Adobe & Autodesk Licensing",
        "Genuine & Compliant Software",
        "Enterprise Volume Licensing",
        "Cost Optimization & Renewal Support",
      ],
      link: "#",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: 'Fast Performance',
      description: 'Optimized solutions for maximum speed and efficiency',
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience',
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes',
    },
  ];

  const currentContent = heroContent[currentHero];

  // Simple slider component for customer logos
  const CustomerSlider: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(children.length / 6));
      }, 2000);
      
      return () => clearInterval(interval);
    }, [children.length]);

    return (
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(children.length / 6) }, (_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-6 gap-4">
              {children.slice(slideIndex * 6, (slideIndex + 1) * 6).map((child, index) => (
                <div key={index}>{child}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
{/* 🔹 Dynamic Hero Banner Section */}
<section className="relative min-h-[500vh] md:min-h-[60vh] lg:min-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
  {/* Dynamic Background - Gradient or Image */}
  {currentContent.backgroundType === "gradient" ? (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
    </div>
  ) : (
    <>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${currentContent.backgroundImage})` }}
      />
      {/* Dark overlay for better visibility */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Gradient overlay for nice blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/50 to-indigo-900/30"></div>
    </>
  )}

  {/* Floating Icons */}
  <div className="absolute inset-0 overflow-hidden hidden md:block">
    <Shield className="absolute top-20 left-20 w-8 h-8 text-blue-500 opacity-20 animate-pulse" />
    <Cloud className="absolute top-40 right-32 w-6 h-6 text-blue-500 opacity-30 animate-bounce" />
    <Zap className="absolute bottom-32 left-32 w-10 h-10 text-blue-500 opacity-25 animate-pulse" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl md:max-w-5xl px-4 text-center space-y-6 md:space-y-8 pt-20 md:pt-28 lg:pt-36">
    {/* Headline */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight hero-text-animation">
      <span className="text-white drop-shadow-lg">{currentContent.title}</span>{" "}
      <span className="text-blue-400 drop-shadow-lg">
        {currentContent.highlight}
      </span>
    </h1>

    {/* Subheadline */}
    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl md:max-w-3xl mx-auto hero-subtitle-animation drop-shadow-md">
      {currentContent.subtitle}
    </p>

    {/* Trust Indicators */}
    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-300 hero-indicators-animation">
      {currentContent.trustIndicators.map((indicator, index) => (
        <span
          key={index}
          className="flex items-center gap-2 hover:text-blue-300 transition-colors bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full"
        >
          {indicator.icon}
          {indicator.text}
        </span>
      ))}
    </div>

    {/* 🔹 Wrap Progress + CTA separately for spacing */}
    <div className="flex flex-col items-center gap-6 mt-10">
      {/* Progress indicators */}
      <div className="flex justify-center space-x-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentHero(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentHero
                ? "bg-blue-400 scale-110 shadow-lg shadow-blue-400/50"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg text-sm sm:text-base md:text-lg">
        Get Started Today
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>


      {/* 🔹 Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F19] to-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From cloud infrastructure to cybersecurity, we deliver end-to-end technology
              solutions that drive business growth and operational excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#101828] border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-blue-500/20 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* 🔹 Icon + Title Center */}
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="p-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: service.bgColor }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>

                {/* 🔹 Bullet Points Left-Aligned */}
                <ul className="space-y-2 w-full text-left">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-200 text-[15px] leading-relaxed font-medium hover:text-blue-400 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Our Journey Timeline */}
      <Timeline />

      {/* 🔹 Work Process Section */}
      <section className="py-24 relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 opacity-95"></div>

        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Our Work <span className="text-white-400">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              A proven methodology crafted to deliver exceptional solutions with precision, innovation, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center gap-10">
            {[
              {
                icon: <FileText className="w-10 h-10 text-white" />,
                title: 'Requirement Analysis',
                desc: 'Understanding business needs & objectives.',
                color: 'from-pink-500 to-red-500',
              },
              {
                icon: <Layout className="w-9 h-9 text-white" />,
                title: 'Planning & Project Design',
                desc: 'Creating a scalable, secure roadmap for successful implementation.',
                color: 'from-blue-500 to-cyan-400',
              },
              {
                icon: <Target className="w-10 h-10 text-white" />,
                title: 'Scope Finalization',
                desc: 'Defining deliverables, timelines & KPIs for measurable success.',
                color: 'from-green-500 to-emerald-400',
              },
              {
                icon: <Rocket className="w-10 h-10 text-white" />,
                title: 'Deployment',
                desc: 'Seamless implementation with minimal disruption to operations.',
                color: 'from-purple-500 to-indigo-500',
              },
              {
                icon: <Shield className="w-10 h-10 text-white" />,
                title: 'Monitoring & Quality Assurance',
                desc: 'Ensuring performance, compliance & reliability at every step.',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                icon: <BookOpen className="w-10 h-10 text-white" />,
                title: 'Project Handover & Documentation',
                desc: 'Complete documentation for seamless transition.',
                color: 'from-cyan-500 to-blue-500',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center text-center group"
              >
                <div
                  className={`relative bg-gradient-to-br ${step.color} p-[2px] rounded-full 
                  w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 xl:w-52 xl:h-52 2xl:w-56 2xl:h-56
                  shadow-xl transition-transform duration-300 hover:scale-105 hover:z-10`}
                >
                  <div className="flex flex-col items-center justify-center bg-black rounded-full w-full h-full p-6 group hover:bg-opacity-90">
                    <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-4 shadow-inner group-hover:bg-opacity-60">
                      {step.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm leading-tight text-gray-400 group-hover:text-gray-200 transition-colors duration-300 px-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials py-20 bg-gradient-to-b from-[#0B1220] to-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the organizations who trust us
              with their most critical IT infrastructure.
            </p>
          </div>

          <div className="testimonial-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="testimonial-card bg-[#101828] border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-blue-500/20 transition-all duration-300">
              <span className="quote text-4xl text-blue-400 font-serif">❝</span>
              <p className="text-gray-200 italic mt-4 mb-6">
                Ecotech Global transformed our entire IT infrastructure. Their
                expertise in government compliance and security is unmatched.
              </p>
              <div className="stars text-yellow-400 mb-4">★★★★★</div>
              <div className="client flex items-center gap-3">
                <img 
                  src="https://i.pravatar.cc/60?img=1" 
                  alt="Sujit Chandra"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-sm">
                  <div className="font-semibold text-white">Sujit Chandra</div>
                  <div className="text-gray-400">IT Head</div>
                  <div className="text-blue-400">ST. Xavier's College</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card bg-[#101828] border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-blue-500/20 transition-all duration-300">
              <span className="quote text-4xl text-blue-400 font-serif">❝</span>
              <p className="text-gray-200 italic mt-4 mb-6">
                The cloud migration was seamless, and their 24/7 support has been
                exceptional. Highly recommend their services.
              </p>
              <div className="stars text-yellow-400 mb-4">★★★★★</div>
              <div className="client flex items-center gap-3">
                <img 
                  src="https://i.pravatar.cc/60?img=12" 
                  alt="Kunal Chakraborty"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-sm">
                  <div className="font-semibold text-white">Kunal Chakraborty</div>
                  <div className="text-gray-400">CTO</div>
                  <div className="text-blue-400">GKB Opticals</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card bg-[#101828] border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-blue-500/20 transition-all duration-300">
              <span className="quote text-4xl text-blue-400 font-serif">❝</span>
              <p className="text-gray-200 italic mt-4 mb-6">
                Their cybersecurity solutions protected us from multiple threats. The
                peace of mind is invaluable.
              </p>
              <div className="stars text-yellow-400 mb-4">★★★★★</div>
              <div className="client flex items-center gap-3">
                <img 
                  src="https://i.pravatar.cc/60?img=20" 
                  alt="Satyajit Roy Chowdhury"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-sm">
                  <div className="font-semibold text-white">Satyajit Roy Chowdhury</div>
                  <div className="text-gray-400">CFO</div>
                  <div className="text-blue-400">Nexval.ai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
<section className="py-24 bg-black relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
        Our Valued Customers
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 font-light tracking-wide">
        Trusted by industry leaders across the globe 🌍
      </p>
    </div>

    <div className="relative">
      <CustomerSlider>
        {[
          "google.PNG",              // Example PNG file
          "microsoft-original.svg",  // Example SVG file
          "apple-original.png",      // Another PNG
        ].map((filename, index) => (
          <div key={index} className="px-4">
            <div className="h-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center p-4 shadow-lg hover:shadow-xl border border-gray-700 hover:scale-110 transition-all duration-300">
              <img
                src={`/assets/logos/${filename}`}   // Local image path
                alt={`Client ${index + 1}`}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </CustomerSlider>
    </div>
  </div>
</section>


      <style>{`
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-text-animation {
          animation: heroFadeIn 1s ease-out;
        }

        .hero-subtitle-animation {
          animation: heroSlideUp 1s ease-out 0.2s both;
        }

        .hero-indicators-animation {
          animation: heroSlideUp 1s ease-out 0.4s both;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Home;