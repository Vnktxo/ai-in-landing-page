// src/components/Header.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-2xl shadow-3xl shadow-[#00FFA3]/10' : 'bg-[#0D0D0D]/80 backdrop-blur-sm'
    } border-b border-[#2A2A2A]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-primary-dark hover:text-primary-light group">
           <a href="#curriculum" className="text-[#E0E0E0] transition duration-200 font-medium">
            GrowInSTYL
          </a>
            <Image
              src="/GrowInSTYL.png"
              alt="GrowInSTYL Logo"
              width={200}
              height={100}
              className="h-10 md:h-18 w-auto rounded-sm group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#curriculum" className="text-[#E0E0E0] hover:text-[#00FFA3] transition duration-200 font-medium">
            Curriculum
          </a>
          <a href="#pricing" className="text-[#E0E0E0] hover:text-[#00FFA3] transition duration-200 font-medium">
            Pricing
          </a>
          
          <a
            href="#enroll"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-[#00FFA3] text-[#0D0D0D] hover:bg-[#00FFA3]/90 transition duration-300 shadow-lg shadow-[#00FFA3]/30"
          >
            Enroll Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;