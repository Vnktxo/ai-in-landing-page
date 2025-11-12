// src/components/Hero.tsx
"use client";
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation'; // 👈 1. Import useRouter

const Hero = () => {
  const router = useRouter(); // 👈 2. Initialize the router

  // Updated state to hold all three form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [seatsLeft] = useState(7);
  const [error, setError] = useState<string | null>(null); // For showing errors

  // Updated change handler for multiple inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 👇 3. This function is NOW UPDATED
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.phone || isLoading) return;
    
    setIsLoading(true);
    setError(null); // Clear any old errors

    try {
      // Send data to your Google Sheets API route
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // SUCCESS: Data sent to Google Sheets
        setIsSubmitted(true);
        // Now redirect to the payment page
        router.push('/enroll');
      } else {
        // Handle server errors
        const data = await response.json();
        setError(data.error || 'Submission failed. Please try again.');
        setIsLoading(false);
      }
    } catch (err) {
      // Handle network errors
      setError('An error occurred. Please check your connection.');
      setIsLoading(false);
    }
  }, [formData, isLoading, router]);

  return (
    <section id="hero" className="relative pt-32 pb-20 bg-gradient-to-b from-[#0D0D0D] text-[#E0E0E0] min-h-screen flex items-center overflow-hidden w-full">
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00FFA3]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FFA3]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            {/* ... (rest of your Hero content like title, seats left, etc) ... */}
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
              Build the <span className="text-[#00FFA3] font-semibold">portfolio projects</span> employers&apos; actually want. Level up from AI-curious to AI-capable with 20+ powerful AI tools set to dominate 2026 — stay ahead, stay future-ready.
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
                <h2 className="text-2xl font-bold text-[#E0E0E0]">To Keep You Updated.
                </h2>
                <div className="bg-yellow-500/20 border border-yellow-500/50 px-4 py-2 rounded-full">
                  <span className="text-yellow-400 font-bold text-sm">Early Bird: ₹8,999</span>
                </div>
              </div>
              
              {/* === START OF FORM CHANGES === */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <input
                  type="text"
                  name="name" // Added name attribute
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitted || isLoading}
                  className="w-full p-4 rounded-xl border-2 border-[#2A2A2A] bg-[#0D0D0D] text-[#E0E0E0] placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#00FFA3] focus:border-[#00FFA3] transition duration-300 text-lg"
                />
                
                {/* Phone and Email on one line */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="tel" 
                    name="phone" 
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || isLoading}
                    className="flex-1 p-4 rounded-xl border-2 border-[#2A2A2A] bg-[#0D0D0D] text-[#E0E0E0] placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#00FFA3] focus:border-[#00FFA3] transition duration-300 text-lg"
                  />
                  <input
                    type="email"
                    name="email" 
                    placeholder="Your Professional Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || isLoading}
                    className="flex-1 p-4 rounded-xl border-2 border-[#2A2A2A] bg-[#0D0D0D] text-[#E0E0E0] placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#00FFA3] focus:border-[#00FFA3] transition duration-300 text-lg"
                  />
                </div>

                {/* Error Message Display */}
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted || isLoading}
                  className={`w-full px-8 py-4 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 whitespace-nowrap ${
                    isSubmitted 
                      ? 'bg-emerald-600 text-white cursor-default' 
                      : 'bg-[#00FFA3] text-[#0D0D0D] hover:bg-[#00FFA3]/90 shadow-xl shadow-[#00FFA3]/30'
                  }`}
                >
                  {isSubmitted ? '✓ Details Saved!' : isLoading ? 'Saving...' : 'Secure My Seat'}
                </button>
              </form>
              {/* === END OF FORM CHANGES === */}
              
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

          {/* Right Column (Video) */}
          <div className="lg:col-span-5 mt-12 lg:mt-0 flex items-center justify-center">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#00FFA3]/30 shadow-2xl shadow-[#00FFA3]/10">
              <video 
                className="w-full h-full object-cover"
                src="/hero-video1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;