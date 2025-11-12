"use client";
import React from 'react';
import Link from 'next/link';
import { SiWhatsapp, SiLinkedin } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-gradient-to-b from-[#0D0D0D]/30 to-[#0D0D0D]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Social */}
          <div>
            <h3 className="text-lg font-semibold text-[#00FFA3] mb-4">
              GrowInSTYL
            </h3>
            <div className="flex items-center gap-4">
              <a href="mailto: growinstyl.ai@gmail.com" aria-label="Email" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">
                <FiMail size={20} />
              </a>
              <a href="https://wa.me/7358108015" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">
                <SiWhatsapp size={20} />
              </a>
              <a href="https://www.linkedin.com/in/finneystyl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-[#E0E0E0] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">About Us</Link></li>
              <li><Link href="/services" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">Services</Link></li>
              <li><Link href="/contact" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-md font-semibold text-[#E0E0E0] mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="text-[#E0E0E0]/70 hover:text-[#00FFA3]">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Copyright */}
          <div>
            <p className="text-sm text-[#E0E0E0]/70">
              © {new Date().getFullYear()} GrowInSTYL.
              <br/>
              All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;