"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  
  useEffect(() => {
    // Fire the Purchase event when this page loads
    // This tells Facebook a sale was completed
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Purchase', {
        currency: "INR", 
        value: 10999, //Ideally, pass this dynamically via query params, but hardcoding the lowest tier is a safe fallback
        content_name: "AI Masterclass Enrollment",
        status: "success"
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D0D0D] text-[#E0E0E0] p-4 text-center">
      
      {/* Success Icon */}
      <div className="w-24 h-24 bg-[#00FFA3]/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <svg 
          className="w-12 h-12 text-[#00FFA3]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-xl text-[#E0E0E0]/70 mb-8 max-w-lg">
        Welcome to GrowInSTYL. You are now officially enrolled. Check your email for the course schedule and access details.
      </p>

      <div className="space-y-4">
        <Link 
          href="/"
          className="inline-block px-8 py-3 bg-[#00FFA3] text-[#0D0D0D] font-bold rounded-xl hover:bg-[#00FFA3]/90 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}