import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import GetQuote from "./pages/GetQuote";
import Career from "./pages/Career";
import PlaceholderPage from './pages/PlaceholderPage';
import Emailsecurity from './pages/Emailsecurity';
import Managededrxdr from './pages/Managededrxdr';
import Nextgenfirewalls from './pages/Nextgenfirewalls';
import Networkaccesscontrol from './pages/Networkaccesscontrol';
import Networkmonitoring from './pages/Networkmonitoring';
import Itotsecurity from './pages/Itotsecurity';
import SIEMSOARSOC from './pages/SIEMSOARSOC';
import Securityaudits from './pages/Securityaudits';
import Cloudservices from './pages/Cloudservices';
import Itinfrastructuresolutions from './pages/Itinfrastructuresolutions';
import Emailcollaborationsolutions from './pages/Emailcollaborationsolutions';
import Softwarelicensingsolutions from './pages/Softwarelicensingsolutions';
import EndpointSecurity from './pages/EndpointSecurity';
import Audiovisualsolutions from './pages/Audiovisualsolutions';
import Webappdevelopment from './pages/Webappdevelopment';
import Managedservicessolutions from './pages/Managedservicessolutions';
import CaseStudies from './pages/case-studies';





const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const hasTransparentHeader = isHomePage || isAboutPage;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${hasTransparentHeader ? '' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/career" element={<Career />} />

          {/* Security Solutions Routes */}
          <Route path="/security_solutions" element={<PlaceholderPage />} />
          <Route path="/security_solutions/endpoint_security" element={<EndpointSecurity />} />
          <Route path="/security_solutions/email_security" element={<Emailsecurity />} />
          <Route path="/security_solutions/managed_edr_xdr" element={<Managededrxdr />} />
          <Route path="/security_solutions/next_gen_firewalls" element={<Nextgenfirewalls />} />
          <Route path="/security_solutions/network_access_control" element={<Networkaccesscontrol />} />
          <Route path="/security_solutions/network_monitoring" element={<Networkmonitoring />} />
          <Route path="/security_solutions/it_ot_security" element={<Itotsecurity />} />
          <Route path="/security_solutions/siem_soar_soc" element={<SIEMSOARSOC />} />
          <Route path="/security_solutions/security_audits" element={<Securityaudits />} />


          {/* Cloud Services Routes */}
          <Route path="/cloud_services" element={<Cloudservices />} />


          {/* IT Infrastructure Routes */}
          <Route path="/it_infrastructure_solutions" element={<Itinfrastructuresolutions />} />
          {/* <Route path="/services/consulting/strategy" element={<PlaceholderPage />} />
          <Route path="/services/consulting/digital" element={<PlaceholderPage />} /> */}

          {/* Software Licensing Routes */}
          <Route path="/software_licensing_solutions" element={<Softwarelicensingsolutions />} />
          {/* <Route path="/software_licensing_solutions/microsoft" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/adobe" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/autodesk" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/eviews" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/corel" element={<PlaceholderPage />} /> */}

          {/* Email & Collaboration Routes */}
          <Route path="/email_collaboration_solutions" element={<Emailcollaborationsolutions />} />
          {/* <Route path="/email_collaboration_solutions/google_workspace" element={<PlaceholderPage />} />
          <Route path="/email_collaboration_solutions/microsoft_365" element={<PlaceholderPage />} />
          <Route path="/email_collaboration_solutions/zoho_email" element={<PlaceholderPage />} />
          <Route path="/email_collaboration_solutions/rediffmail" element={<PlaceholderPage />} /> */}

          {/* Audio Visual Routes */}
          <Route path="/audio_visual_solutions" element={<Audiovisualsolutions />} />
          {/* <Route path="/audio_visual_solutions/collaboration_solutions" element={<PlaceholderPage />} />
          <Route path="/audio_visual_solutions/digital_signage" element={<PlaceholderPage />} />
          <Route path="/audio_visual_solutions/command_center" element={<PlaceholderPage />} /> */}

          {/* Managed Services Routes */}
          <Route path="/managed_services_solutions" element={<Managedservicessolutions />} />
          {/* <Route path="/managed_services_solutions/managed_firewall" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/managed_server_management" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/managed_vpn_services" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/managed_it_services" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/noc_services" element={<PlaceholderPage />} /> */}
            {/*weband app development*/}
          <Route path="/Web_App_Development" element={<Webappdevelopment />} />

          {/* Resources Routes */}
          <Route path="/resources/case_studies" element={<CaseStudies />} />
          <Route path="/resources/whitepapers" element={<PlaceholderPage />} />
          <Route path="/resources/blog" element={<PlaceholderPage />} />
          <Route path="/resources/events" element={<PlaceholderPage />} />
          <Route path="/resources/certifications" element={<PlaceholderPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;