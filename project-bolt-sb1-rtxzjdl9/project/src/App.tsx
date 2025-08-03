import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // ✅ Auto-scroll handler

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';

// import Solutions from './pages/Solutions';
// import SecuritySolutions from './pages/Solutions/SecuritySolutions';
// import EndPointSecurity from './pages/Solutions/SecuritySolutions/EndPointSecurity';
// import EmailSecurity from './pages/Solutions/SecuritySolutions/EmailSecurity';
// import ManageEDRXDR from './pages/Solutions/SecuritySolutions/ManageEDR_XDR';
// import NextGenFirewalls from './pages/Solutions/SecuritySolutions/NextGenFirewalls';
// import NetworkAccessControl from './pages/Solutions/SecuritySolutions/NetworkAccessControl';
// import NMS from './pages/Solutions/SecuritySolutions/NMS';
// import ITOTSecurity from './pages/Solutions/SecuritySolutions/IT_OT_Security';
// import SIEM_SORE_SOC from './pages/Solutions/SecuritySolutions/SIEM_SORE_SOC';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className={`flex-grow ${isHomePage ? '' : 'pt-20'}`}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />

            {/* ✅ Solutions Section */}
            {/* <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/security" element={<SecuritySolutions />} />
            <Route path="/solutions/security/end-point-security" element={<EndPointSecurity />} />
            <Route path="/solutions/security/email-security" element={<EmailSecurity />} />
            <Route path="/solutions/security/manage-edr-xdr" element={<ManageEDRXDR />} />
            <Route path="/solutions/security/next-gen-firewalls" element={<NextGenFirewalls />} />
            <Route path="/solutions/security/network-access-control" element={<NetworkAccessControl />} />
            <Route path="/solutions/security/nms" element={<NMS />} />
            <Route path="/solutions/security/it-ot-security" element={<ITOTSecurity />} />
            <Route path="/solutions/security/siem-sore-soc" element={<SIEM_SORE_SOC />} /> */}
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
