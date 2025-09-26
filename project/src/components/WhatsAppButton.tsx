import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/918327314124?text=How%20can%20I%20help%20you%3F" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
