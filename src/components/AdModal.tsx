// src/components/AdModal.tsx
"use client";
import React, { useState, useCallback } from 'react';
import { FiX } from 'react-icons/fi';

interface AdModalProps {
  onClose: () => void;
}

export const AdModal: React.FC<AdModalProps> = ({ onClose }) => {
  // === CHANGED ===
  // Updated state to hold all three form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  // ===============

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // === CHANGED ===
  // Added a generic handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // ===============

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // === CHANGED ===
    // Updated check for all three fields
    if (!formData.name || !formData.email || !formData.phone || isLoading) return;
    
    setIsLoading(true);
    console.log("Modal Form Data Submitted: ", formData); // For testing
    
    // This is where you would call your Razorpay/backend logic
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  }, [formData, isLoading]); // Updated dependency

  return (
    // Overlay
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Modal Content */}
      <div className="relative max-w-lg w-full p-10 bg-[#1A1A1A]/90 border-2 border-[#00FFA3]/30 rounded-2xl shadow-2xl shadow-[#00FFA3]/10 m-4">
        
        {/* Close Button (Icon) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#E0E0E0]/50 hover:text-[#00FFA3]"
        >
          <FiX size={20} />
        </button>

        {/* Form Content (from Hero) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-[#E0E0E0]">Secure Your Seat</h2>
          <div className="bg-yellow-500/20 border border-yellow-500/50 px-4 py-2 rounded-full">
            <span className="text-yellow-400 font-bold text-sm">Only 25 Seats Left! </span>
          </div>
        </div>
        
        {/* === START OF FORM CHANGES === */}
        {/* Changed to a stacked form with space-y-4 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Input */}
          <input
            type="text"
            name="name" // Added name attribute
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange} // Use generic handler
            required
            disabled={isSubmitted || isLoading}
            className="w-full p-4 rounded-xl border-2 border-[#2A2A2A] bg-[#0D0D0D] text-[#E0E0E0] placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#00FFA3] focus:border-[#00FFA3] transition duration-300 text-lg"
          />
          
          {/* Phone Input */}
          <input
            type="tel"
            name="phone" // Added name attribute
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange} // Use generic handler
            required
            disabled={isSubmitted || isLoading}
            className="w-full p-4 rounded-xl border-2 border-[#2A2A2A] bg-[#0D0D0D] text-[#E0E0E0] placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#00FFA3] focus:border-[#00FFA3] transition duration-300 text-lg"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email" // Added name attribute
            placeholder="Your Professional Email"
            value={formData.email}
            onChange={handleChange} // Use generic handler
            required
            disabled={isSubmitted || isLoading}
            className="w-full p-4 rounded-xl border-2 border-[#2A2A2A] bg-[#0D0D0D] text-[#E0E0E0] placeholder-[#E0E0E0]/50 focus:ring-2 focus:ring-[#00FFA3] focus:border-[#00FFA3] transition duration-300 text-lg"
          />
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitted || isLoading}
            // Changed button to be full-width
            className={`w-full px-8 py-4 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 whitespace-nowrap ${
              isSubmitted 
                ? 'bg-emerald-600 text-white cursor-default' 
                : 'bg-[#00FFA3] text-[#0D0D0D] hover:bg-[#00FFA3]/90 shadow-xl shadow-[#00FFA3]/30'
            }`}
          >
            {isSubmitted ? '✓ Enrolled!' : isLoading ? 'Processing... ' : 'Enroll Now!'}
          </button>
        </form>
     
        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="text-sm text-[#E0E0E0]/70 hover:text-[#00FFA3] underline"
          >
            Know More About the Course
          </button>
        </div>
      </div>
    </div>
  );
};