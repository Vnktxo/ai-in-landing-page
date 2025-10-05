// src/components/Hero.tsx
"use client";
import React, { useState, useCallback } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [seatsLeft] = useState(7);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  }, [email, isLoading]);

  return (
    <section id="hero" className="relative pt-32 pb-20 bg-[#0D0D0D] text-[#E0E0E0] min-h-screen flex items-center overflow-hidden w-full">
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00FFA3]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FFA3]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-6 animate-pulse">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-red-400 font-bold text-sm">LIVE: {seatsLeft} Seats Left for Batch 1</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="block text-[#E0E0E0]">Master AI in</span>
              <span className="block text-[#00FFA3] drop-shadow-[0_0_20px_rgba(0,255,163,0.5)]">8 Weekends</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-[#E0E0E0] max-w-2xl leading-relaxed">
              Build the <span className="text-[#00FFA3] font-semibold">portfolio projects</span> employers actually want. 
              Transform from AI-curious to AI-capable with ChatGPT, Midjourney, Copilot and Automation.
            </p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] hover:border-[#00FFA3]/50 transition-all duration-300">
                <div className="text-3xl font-bold text-[#00FFA3]">16</div>
                <div className="text-sm text-[#E0E0E0]/70">Hours Training</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] hover:border-[#00FFA3]/50 transition-all duration-300">
                <div className="text-3xl font-bold text-[#00FFA3]">5+</div>
                <div className="text-sm text-[#E0E0E0]/70">Projects Built</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] hover:border-[#00FFA3]/50 transition-all duration-300">
                <div className="text-3xl font-bold text-[#00FFA3]">1:10</div>
                <div className="text-sm text-[#E0E0E0]/70">Student Ratio</div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-[#1A1A1A] border-2 border-[#00FFA3]/30 rounded-2xl shadow-2xl shadow-[#00FFA3]/10" id="enroll">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl font-bold text-[#E0E0E0]">Secure Your Seat</h2>
                <div className="bg-yellow-500/20 border border-yellow-500/50 px-4 py-2 rounded-full">
                  <span className="text-yellow-400 font-bold text-sm">Early Bird: ₹8,999</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Professional Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitted || isLoading}
                  className="flex-1 p-4 rounded-xl border-2 border-[#2A2A2A] bg-[#0D0D0D] text-[#E0E0E0] placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#00FFA3] focus:border-[#00FFA3] transition duration-300 text-lg"
                />
                <button
                  type="submit"
                  disabled={isSubmitted || isLoading}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 whitespace-nowrap ${
                    isSubmitted 
                      ? 'bg-emerald-600 text-white cursor-default' 
                      : 'bg-[#00FFA3] text-[#0D0D0D] hover:bg-[#00FFA3]/90 shadow-xl shadow-[#00FFA3]/30'
                  }`}
                >
                  {isSubmitted ? '✓ Enrolled!' : isLoading ? 'Processing...' : 'Secure My Seat'}
                </button>
              </form>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-[#E0E0E0]/70">
                <div className="flex items-center gap-2">
                  <span className="text-[#00FFA3]">✓</span>
                  <span>7-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FFA3]">✓</span>
                  <span>Batch 1 Starts Oct 14th</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="bg-[#1A1A1A] backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-[#2A2A2A] transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-bold text-[#00FFA3] mb-6">What You'll Get</h3>
              <ul className="space-y-4 text-[#E0E0E0]">
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-1 text-[#00FFA3]">→</span>
                  <span><span className="font-semibold text-[#00FFA3]">Portfolio Projects:</span> AI Resume Builder, Content Engine, Study Buddy, Startup Validator</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-1 text-[#00FFA3]">→</span>
                  <span><span className="font-semibold text-[#00FFA3]">Live Hands-On:</span> Kovilambakkam classroom, Saturdays 2-4 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-1 text-[#00FFA3]">→</span>
                  <span><span className="font-semibold text-[#00FFA3]">LinkedIn Certificate:</span> Shareable credential with verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-1 text-[#00FFA3]">→</span>
                  <span><span className="font-semibold text-[#00FFA3]">Small Batches:</span> Max 10 students for personal attention</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-[#00FFA3]/10 border border-[#00FFA3]/30 rounded-xl">
                <p className="text-[#00FFA3] font-semibold text-center">Student Discount: ₹7,999 with Valid ID</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;