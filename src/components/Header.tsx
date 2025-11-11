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
      scrolled ? 'backdrop-blur-md shadow-3xl bg-[#000000]/20 shadow-[#00FFA3]/10' : 'bg-[#0D0D0D]/80 backdrop-blur-sm'
    } border-b border-[#2A2A2A]`}>
      
      {/* Changed justify-center to justify-between */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <Link
          href="/"
          // Changed w-full to w-auto
          className="w-auto flex flex-col items-center space-y-1 text-2xl font-bold text-primary-dark hover:text-primary-light group"
        >
          <Image
            src="/GrowInSTYL.png"
            alt="GrowInSTYL Logo"
            width={200}
            height={100}
            className="h-8 md:h-14 w-auto rounded-sm group-hover:scale-105 transition-transform duration-300"
            priority
          />
          <span className="text-[#E0E0E0] text-sm md:text-base font-medium group-hover:text-[#00FFA3] transition duration-200">
            GrowInSTYL
          </span>
        </Link>

        {/* This is the original Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#curriculum" className="text-[#E0E0E0] hover:text-[#00FFA3] transition duration-200 font-medium">
            Curriculum
          </a>
          <a href="#pricing" className="text-[#E0E0E0] hover:text-[#00FFA3] transition duration-200 font-medium">
            Pricing
          </a>
         
          <div className="flex items-center gap-2">
            <a
              href="#enroll"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-[#00FFA3] text-[#0D0D0D] hover:bg-[#00FFA3]/90 transition duration-300 shadow-lg shadow-[#00FFA3]/30"
            >
              Enroll Now
            </a>
          </div>
        </nav>

        {/* This is the new Mobile Enroll Button */}
        <a
          href="#enroll"
          className="md:hidden px-4 py-2 text-sm font-semibold rounded-full bg-[#00FFA3] text-[#0D0D0D] hover:bg-[#00FFA3]/90 transition duration-300"
        >
          Enroll Now
        </a>
      </div>
    </header>
  );
};

export default Header;