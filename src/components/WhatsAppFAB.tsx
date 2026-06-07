import React from "react";
import { SiWhatsapp } from "react-icons/si";

const WhatsAppFAB: React.FC = () => {
  return (
    <a
      href="https://wa.me/9173109766"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center p-[3px] shadow-2xl transition-transform duration-300 group-hover:scale-110">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <SiWhatsapp className="w-8 h-8 text-primary-500" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFAB;
