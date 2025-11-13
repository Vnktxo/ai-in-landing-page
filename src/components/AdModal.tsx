// src/components/AdModal.tsx
"use client";
import React, { useState, useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation'; // 👈 Import useRouter

interface AdModalProps {
  onClose: () => void;
}

export const AdModal: React.FC<AdModalProps> = ({ onClose }) => {
  const router = useRouter(); // 👈 Initialize the router
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // 👈 For showing errors

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // === THIS FUNCTION IS NOW UPDATED ===
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || isLoading) return;
    
    setIsLoading(true);
    setError(null); // Clear any old errors

    try {
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
        // Handle server errors (e.g., "Missing required fields")
        const data = await response.json();
        setError(data.error || 'Submission failed. Please try again.');
        setIsLoading(false);
      }
    } catch (_err) {
      // Handle network errors
      setError('An error occurred. Please check your connection.');
      setIsLoading(false);
    }
  }, [formData, isLoading, router]);
  // === END OF UPDATES ===

  return (
    // Overlay
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Modal Content */}
      <div className="relative max-w-lg w-full p-10 bg-[#1A1A1A]/90 border-2 border-[#00FFA3]/30 rounded-2xl shadow-2xl shadow-[#00FFA3]/10 m-4">
        
        <button onClick={onClose} className="absolute top-4 right-4 ...">
          <FiX size={20} />
        </button>

        <div className="flex flex-col sm:flex-row ... mb-6 gap-4">
          <h2 className="text-2xl font-bold text-[#E0E0E0]">Secure Your Seat</h2>
          <div className="bg-yellow-500/20 border ...">
            <span className="text-yellow-400 font-bold text-sm">Only 25 Seats Left! </span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitted || isLoading}
            className="w-full p-4 ..."
          />
          
          {/* Phone Input */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitted || isLoading}
            className="w-full p-4 ..."
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Professional Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitted || isLoading}
            className="w-full p-4 ..."
          />

          {/* Error Message Display */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitted || isLoading}
            className={`w-full px-8 py-4 ... ${
              isSubmitted 
                ? 'bg-emerald-600 text-white cursor-default' 
                : 'bg-[#00FFA3] text-[#0D0D0D] ...'
            }`}
          >
            {isSubmitted ? '✓ Details Saved!' : isLoading ? 'Saving...' : 'Secure My Seat'}
          </button>
        </form>

        <div className="text-center mt-6">
          <button onClick={onClose} className="text-sm ...">
            Or, Know More About the Course
          </button>
        </div>
      </div>
    </div>
  );
};