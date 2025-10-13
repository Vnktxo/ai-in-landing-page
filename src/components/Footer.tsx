// src/components/Footer.tsx
import React from 'react';
import { SiWhatsapp, SiLinkedin } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-[#0D0D0D] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#E0E0E0]/50">
            © {new Date().getFullYear()} GrowInSTYL. All Rights Reserved. | Kovilambakkam, Chennai
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="mailto:hello@aiinpractice.com" 
              className="text-[#E0E0E0]/70 hover:text-[#00FFA3] transition duration-300"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E0E0E0]/70 hover:text-[#00FFA3] transition duration-300"
              aria-label="WhatsApp"
            >
              <SiWhatsapp size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/aiinpracticechennai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E0E0E0]/70 hover:text-[#00FFA3] transition duration-300"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;