import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Users, Award, FileText, Layout, Code2, CheckCircle, Rocket, Cloud, Target, BookOpen } from 'lucide-react';
import Timeline from '../components/Timeline';
import bgVideo from "../assets/argha.png";
import awsBg from "../assets/awsBg.jpg";
import GW from "../assets/Google Workspace.jpg";
import GT from "../assets/Globally Trusted.jpg";
import infraBg from "../assets/infraBg.jpg";
import Bg from "../assets/Power Business.webp";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


import nexvalLogo from "../assets/logos/NEXVAL.jpg";
import paharpur from "../assets/logos/paharpur.jpg";
import peerless from "../assets/logos/peerless.jpg";
import RSSoftware from "../assets/logos/RSSoftware.jpg";
import AlcoveReality from "../assets/logos/Alcove Reality.jpg";
import AmitMetalics from "../assets/logos/Amit Metalics.png";
import AryamanBikramBirla from "../assets/logos/Aryaman Bikram Birla.jpg";
import AshokaHall from "../assets/logos/Ashoka Hall.png";
import basehospitalbarrackpore from "../assets/logos/base-hospital-barrackpore.png";
import Burdwanuniversity from "../assets/logos/Burdwan university.jpg";
import CGCRILOGO from "../assets/logos/CGCRI LOGO.png";
import CKBirlaHospital from "../assets/logos/CK Birla Hospital.png";
import DDEVPlastiks from "../assets/logos/DDEV Plastiks.png";
import EEPC from "../assets/logos/EEPC INDIA.jpg";
import Eveready from "../assets/logos/Eveready.png";
import fit_logo from "../assets/logos/fit_logo.jpg";
import Birla from "../assets/logos/GD Birla Memorial School ranikheet.jpg";
import GdGoenka from "../assets/logos/Gd Goenka School.jpg";
import gkb_opticals_logo from "../assets/logos/gkb_opticals_logo.jpg";
import GTPL_LOGO_HIGH_RESOLUTION from "../assets/logos/GTPL_LOGO_HIGH_RESOLUTION.png";
import HAL from "../assets/logos/HAL.jpg";
import Icar from "../assets/logos/Icar.png";
import IICB from "../assets/logos/IICB.jpg";
import IILDS from "../assets/logos/IILDS.jpg";
import IIT_Kharagpur_Logo from "../assets/logos/IIT_Kharagpur_Logo.jpg";
import India_Meteorological from "../assets/logos/India_Meteorological_Department_(logo).png";
import Indian_Institute from "../assets/logos/Indian_Institute_of_Foreign_Trade_logo.png";
import Kalinga from "../assets/logos/Kalinga Hospital.jpg";
import Kesoram from "../assets/logos/Kesoram.png";
import KPC from "../assets/logos/KPC Hospital.webp";
import mission from "../assets/logos/mission Hospital Durgapur.png";
import Narayan from "../assets/logos/Narayan Memorial Hospital.jpg";
import National from "../assets/logos/National.png";
import library from "../assets/logos/national-library.jpg";
import NCSM from "../assets/logos/NCSM-Logo.png";
import NTPC from "../assets/logos/NTPC.png";
import PWD from "../assets/logos/PWD.jpg";
import Rashmi from "../assets/logos/Rashmi Group.jpg";
import Seacom_Logo from "../assets/logos/Seacom_Logo.png";
import siddha_group_logo from "../assets/logos/siddha_group_logo.jpg";
import Xavier from "../assets/logos/St._Xavier's.jpg";
import Tata from "../assets/logos/Tata Steel.png";
import TDB from "../assets/logos/TDB Collage.jpg";
import University_of_Kalyani_Logo from "../assets/logos/University_of_Kalyani_Logo.jpg";
import Vikram from "../assets/logos/Vikram Solar.png";
import virtual_clone_logo from "../assets/logos/virtual_clone_logo.jpg";
import Wbidc from "../assets/logos/Wbidc.jpg";
import West_Bengal_Nati from "../assets/logos/West_Bengal_Nati.jpg";
import Wowmomo from "../assets/logos/Wowmomo.jpg";
import XIM from "../assets/logos/XIM.png";

const partners = [
 
  { name: "NEXVAL", logo: nexvalLogo },
  { name: "paharpur", logo: paharpur },
  { name: "peerless", logo: peerless },
  { name: "RSSoftware", logo: RSSoftware },
  { name: "Alcove Reality", logo: AlcoveReality },
  { name: "Amit Metalics", logo: AmitMetalics },
  { name: "Aryaman Bikram Birla", logo: AryamanBikramBirla },
  { name: "Ashoka Hall", logo: AshokaHall },
  { name: "base-hospital-barrackpore", logo: basehospitalbarrackpore },
  { name: "CGCRI LOGO", logo: CGCRILOGO },
  { name: "Burdwan university", logo: Burdwanuniversity },
  { name: "CK Birla Hospital", logo: CKBirlaHospital },
  { name: "EEPC INDIA", logo: EEPC },
  { name: "Eveready", logo: Eveready },
  { name: "fit_logo", logo: fit_logo },
  { name: "GD Birla Memorial School ranikheet", logo:Birla  },
  { name: "Gd Goenka School", logo: GdGoenka },
  { name: "gkb_opticals_logo", logo: gkb_opticals_logo },
  { name: "GTPL_LOGO_HIGH_RESOLUTION", logo: GTPL_LOGO_HIGH_RESOLUTION },
  { name: "DDEV Plastiks", logo: DDEVPlastiks },
  { name: "HAL", logo: HAL },
  { name: "Icar", logo: Icar },
  { name: "IICB", logo: IICB },
  { name: "IILDS", logo: IILDS },
  { name: "IIT_Kharagpur_Logo", logo: IIT_Kharagpur_Logo },
  { name: "India_Meteorological_Department_(logo)", logo: India_Meteorological },
  { name: "Indian_Institute_of_Foreign_Trade_logo", logo: Indian_Institute },
  { name: "Kalinga Hospital", logo: Kalinga },
  { name: "Kesoram", logo: Kesoram },
  { name: "KPC Hospital", logo: KPC },
  { name: "mission Hospital Durgapur", logo: mission },
  { name: "Narayan Memorial Hospital", logo: Narayan },
  { name: "National", logo: National },
  { name: "national-library", logo: library},
  { name: "NCSM-Logo", logo: NCSM },
  { name: "PWD", logo: PWD },
  { name: "Rashmi Group", logo: Rashmi },
  { name: "NTPC", logo: NTPC },
  { name: "Seacom_Logo", logo: Seacom_Logo },
  { name: "siddha_group_logo", logo: siddha_group_logo },
  { name: "St._Xavier's", logo: Xavier },
{ name: "Tata Steel", logo: Tata },
{ name: "TDB Collage", logo: TDB },
{ name: "University_of_Kalyani_Logo", logo: University_of_Kalyani_Logo },
{ name: "Vikram Solar", logo: Vikram },
{ name: "virtual_clone_logo", logo: virtual_clone_logo },
{ name: "Wbidc", logo: Wbidc },
{ name: "West_Bengal_Nati", logo: West_Bengal_Nati },
{ name: "Wowmomo", logo: Wowmomo },
{ name: "XIM", logo: XIM },
];


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
    backgroundImage: bgVideo, // pick your default background
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
    { icon: <Award className="w-8 h-8 text-yellow-300 mr-2 drop-shadow-md animate-bounce" />, text: <span className="font-extrabold">40% Discount (T&C)</span> },
    { icon: <Zap className="w-4 h-4 text-blue-500" />, text: "Instant Setup" }
  ],
  backgroundImage: GW,   // keep the imported video here
  backgroundType: "image"     // tell your renderer it's a video
},

  {
    id: 4,
    title: "AWS Cloud",
    highlight: "Solutions Gateway",
    subtitle: "Your Gateway to Scalable, Secure, and Future-Ready AWS Cloud Solutions...",
    trustIndicators: [
      { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "AWS Certified" },
      { icon: <Cloud className="w-8 h-8 text-yellow-300 mr-4 drop-shadow-md animate-bounce" />, text: <span className="font-extrabold">50% Discount (T&C)</span> },
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
    backgroundImage: GT,
    backgroundType: "image"
  }
];

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-blue-500" />,
    title: "Requirement Analysis",
    desc: "Understanding business needs & objectives.",
  },
  {
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    title: "Planning & Project Design",
    desc: "Creating a scalable, secure roadmap.",
  },
  {
    icon: <Target className="w-6 h-6 text-blue-500" />,
    title: "Scope Finalization",
    desc: "Defining deliverables, timelines & KPIs.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-500" />,
    title: "Deployment",
    desc: "Seamless implementation with minimal disruption.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Monitoring & Quality Assurance",
    desc: "Ensuring performance, compliance & reliability.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    title: "Project Handover & Documentation",
    desc: "Complete documentation & knowledge transfer.",
  },
];


const Home: React.FC = () => {
  // State for current hero content
  const [currentHero, setCurrentHero] = useState(0);

  // Auto-rotate hero content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroContent.length);
    }, 5000);

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

  // // Simple slider component for customer logos
  // const CustomerSlider: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  //   const [currentSlide, setCurrentSlide] = useState(0);
    
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % Math.ceil(children.length / 6));
  //     }, 4000);
      
  //     return () => clearInterval(interval);
  //   }, [children.length]);

  //   return (
  //     <div className="overflow-hidden">
  //       <div 
  //         className="flex transition-transform duration-1000 ease-in-out"
  //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  //       >
  //         {Array.from({ length: Math.ceil(children.length / 6) }, (_, slideIndex) => (
  //           <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
  //             {children.slice(slideIndex * 6, (slideIndex + 1) * 6).map((child, index) => (
  //               <div key={index}>{child}</div>
  //             ))}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="min-h-screen">

      
{/* Dynamic Hero Banner Section */}
<section className="relative min-h-screen md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* Dynamic Background - Gradient, Image, or Video */}
  {currentContent.backgroundType === "gradient" ? (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-indigo-500 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_85%)]"></div>
    </div>
  ) : currentContent.backgroundType === "image" ? (
    <>
      {/* Immediate gradient fallback to prevent grey screen */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

      {/* Low-Res Placeholder (Optional) */}
      {currentContent.lowResImage && (
        <img
          src={currentContent.lowResImage}
          alt="blur"
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        />
      )}

      {/* Full-Res Background with Fade-in and hardware acceleration */}
      <img
        src={currentContent.backgroundImage || ""}
        alt={currentContent.title}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 transform-gpu"
        style={{ transform: 'translateZ(0)' }}
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
        onError={() => {
          console.warn('Hero image failed to load:', currentContent.backgroundImage);
        }}
      />

      {/* Slightly darker overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/35"></div>
    </>
  ) : currentContent.backgroundType === "video" ? (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
        onLoadedData={(e) => e.currentTarget.classList.add("opacity-100")}
      >
        <source src={currentContent.backgroundImage} type="video/mp4" />
      </video>

      {/* Slightly darker overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/25"></div>
    </>
  ) : null}

  {/* Floating Icons */}
  <div className="absolute inset-0 overflow-hidden hidden md:block">
    <Shield className="absolute top-20 left-20 w-8 h-8 text-blue-500 opacity-20 animate-pulse" />
    <Cloud className="absolute top-40 right-32 w-6 h-6 text-blue-500 opacity-30 animate-bounce" />
    <Zap className="absolute bottom-32 left-32 w-10 h-10 text-blue-500 opacity-25 animate-pulse" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl md:max-w-5xl px-4 sm:px-6 text-center space-y-4 sm:space-y-6 md:space-y-8 pt-20 md:pt-28 lg:pt-36">
    {/* Headline */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight hero-text-animation">
      <span className="text-white drop-shadow-lg">{currentContent.title}</span>{" "}
      <span className="text-blue-400 drop-shadow-lg">
        {currentContent.highlight}
      </span>
    </h1>

    {/* Subheadline */}
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto hero-subtitle-animation drop-shadow-md px-4">
      {currentContent.subtitle}
    </p>

    {/* Trust Indicators */}
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-gray-300 hero-indicators-animation">
      {currentContent.trustIndicators.map((indicator, index) => (
        <span
          key={index}
          className="flex items-center gap-1 sm:gap-2 hover:text-blue-300 transition-colors bg-black/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm"
        >
          {indicator.icon} {indicator.text}
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
      <Link
        to="/contact"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg text-sm sm:text-base md:text-lg"
      >
        Get Started Today <ArrowRight className="w-5 h-5" />
      </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
    <section className="py-16 sm:py-20 lg:py-24 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 opacity-95"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Work <span className="text-blue-400">Process</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            A proven methodology crafted to deliver exceptional solutions with
            precision, innovation, and excellence.
          </p>
        </div>

        {/* Steps in ONE row */}
<div className="flex flex-wrap justify-between items-start gap-8 relative">
  {steps.map((step, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center relative w-40"
    >
      {/* Circle */}
      <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-2 border-gray-700 bg-black z-10">
        {step.icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-bold text-white mt-4 mb-1">
        {step.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed tracking-wide max-w-xl mx-auto">
        {step.desc}
      </p>

      {/* Arrow line between circles */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-10 right-[-65px] w-16 border-t-2 border-dashed border-blue-400">
          {/* Add arrow head */}
          <div className="absolute -right-2 -top-1 w-0 h-0 border-l-8 border-t-4 border-b-4 border-l-blue-400 border-t-transparent border-b-transparent"></div>
        </div>
      )}
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

    {/* 4 Cards in One Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Card 1 */}
      <div className="testimonial-card bg-[#101828] border border-gray-800 rounded-lg p-5 shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-sm">
        <span className="quote text-3xl text-blue-400 font-serif">❝</span>
        <p className="text-gray-200 italic mt-3 mb-4">
          Ecotech provided excellent support during our digital transformation. 
          Their quick response and expertise made the process smooth and reliable.
        </p>
        <div className="stars text-yellow-400 mb-3 text-sm">★★★★★</div>
        <div className="client flex items-center gap-3">
          <div>
            <div className="font-semibold text-white text-sm">Suman Banerjee</div>
            <div className="text-gray-400 text-xs">Director</div>
            <div className="text-blue-400 text-xs">Peerless Securities Ltd</div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="testimonial-card bg-[#101828] border border-gray-800 rounded-lg p-5 shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-sm">
        <span className="quote text-3xl text-blue-400 font-serif">❝</span>
        <p className="text-gray-200 italic mt-3 mb-4">
          Ecotech Global transformed our entire IT infrastructure. Their
          expertise in government compliance and security is unmatched.
        </p>
        <div className="stars text-yellow-400 mb-3 text-sm">★★★★★</div>
        <div className="client flex items-center gap-3">
          <div>
            <div className="font-semibold text-white text-sm">Sujit Chandra</div>
            <div className="text-gray-400 text-xs">IT Head</div>
            <div className="text-blue-400 text-xs">ST. Xavier's College</div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="testimonial-card bg-[#101828] border border-gray-800 rounded-lg p-5 shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-sm">
        <span className="quote text-3xl text-blue-400 font-serif">❝</span>
        <p className="text-gray-200 italic mt-3 mb-4">
          The cloud migration was seamless, and their 24/7 support has been
          exceptional. Highly recommend their services.
        </p>
        <div className="stars text-yellow-400 mb-3 text-sm">★★★★★</div>
        <div className="client flex items-center gap-3">
          <div>
            <div className="font-semibold text-white text-sm">Kunal Chakraborty</div>
            <div className="text-gray-400 text-xs">CTO</div>
            <div className="text-blue-400 text-xs">GKB Opticals</div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="testimonial-card bg-[#101828] border border-gray-800 rounded-lg p-5 shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-sm">
        <span className="quote text-3xl text-blue-400 font-serif">❝</span>
        <p className="text-gray-200 italic mt-3 mb-4">
          Their cybersecurity solutions protected us from multiple threats. The
          peace of mind is invaluable.
        </p>
        <div className="stars text-yellow-400 mb-3 text-sm">★★★★★</div>
        <div className="client flex items-center gap-3">
          <div>
            <div className="font-semibold text-white text-sm">Satyajit Roy Chowdhury</div>
            <div className="text-gray-400 text-xs">CFO</div>
            <div className="text-blue-400 text-xs">Nexval.ai</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




{/* Customer Logos Section */}
<section className="py-16 bg-black text-white relative overflow-hidden">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold">Our Valued Customer</h2>
    <p className="mt-4 text-lg text-gray-300">
      Trusted by industry leaders across the globe 🌐
    </p>
  </div>

  {/* ✅ restrict width to 80% and center */}
  <div className="max-w-[80%] mx-auto overflow-hidden">
    <motion.div
      className="flex w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
    >
      {[...partners, ...partners].map((partner, idx) => (
        <div
          key={idx}
          className="bg-white p-6 mx-4 rounded-2xl shadow-md flex items-center justify-center w-[220px] h-[120px]"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-[260px] h-[120px] object-contain"
          />
        </div>
      ))}
    </motion.div>
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