import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import PlaceholderPage from './pages/PlaceholderPage';

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

          {/* Security Solutions Routes */}
          <Route path="/security_solutions" element={<PlaceholderPage />} />
          <Route path="/endpoint-security" element={<PlaceholderPage />} />
          <Route path="/security_solutions/email_security" element={<PlaceholderPage />} />
          <Route path="/security_solutions/managed_edr_xdr" element={<PlaceholderPage />} />
          <Route path="/security_solutions/next_gen_firewalls" element={<PlaceholderPage />} />
          <Route path="/security_solutions/network_access_control" element={<PlaceholderPage />} />
          <Route path="/security_solutions/nms" element={<PlaceholderPage />} />
          <Route path="/security_solutions/it_ot_security" element={<PlaceholderPage />} />
          <Route path="/security_solutions/siem_soar_soc" element={<PlaceholderPage />} />

          {/* Cloud Services Routes */}
          <Route path="/cloud_services" element={<PlaceholderPage />} />
          <Route path="/cloud_services/gcp" element={<PlaceholderPage />} />
          <Route path="/cloud_services/aws" element={<PlaceholderPage />} />
          <Route path="/cloud_services/azure" element={<PlaceholderPage />} />

          {/* IT Infrastructure Routes */}
          <Route path="/it_infrastructure_solutions" element={<PlaceholderPage />} />
          <Route path="/services/consulting/strategy" element={<PlaceholderPage />} />
          <Route path="/services/consulting/digital" element={<PlaceholderPage />} />

          {/* Software Licensing Routes */}
          <Route path="/software_licensing_solutions" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/microsoft" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/adobe" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/autodesk" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/eviews" element={<PlaceholderPage />} />
          <Route path="/software_licensing_solutions/corel" element={<PlaceholderPage />} />

          {/* Email & Collaboration Routes */}
          <Route path="/email_collaboration_solutions" element={<PlaceholderPage />} />
          <Route path="/email_collaboration_solutions/google_workspace" element={<PlaceholderPage />} />
          <Route path="/email_collaboration_solutions/microsoft_365" element={<PlaceholderPage />} />
          <Route path="/email_collaboration_solutions/zoho_email" element={<PlaceholderPage />} />
          <Route path="/email_collaboration_solutions/rediffmail" element={<PlaceholderPage />} />

          {/* Audio Visual Routes */}
          <Route path="/audio_visual_solutions" element={<PlaceholderPage />} />
          <Route path="/audio_visual_solutions/collaboration_solutions" element={<PlaceholderPage />} />
          <Route path="/audio_visual_solutions/digital_signage" element={<PlaceholderPage />} />
          <Route path="/audio_visual_solutions/command_center" element={<PlaceholderPage />} />

          {/* Managed Services Routes */}
          <Route path="/managed_services_solutions" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/managed_firewall" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/managed_server_management" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/managed_vpn_services" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/managed_it_services" element={<PlaceholderPage />} />
          <Route path="/managed_services_solutions/noc_services" element={<PlaceholderPage />} />

          {/* Resources Routes */}
          <Route path="/resources/case_studies" element={<PlaceholderPage />} />
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
      <AppContent />
    </Router>
  );
};

export default App;