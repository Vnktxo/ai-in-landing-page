import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="w-full py-20 lg:py-24 bg-[#0D0D0D] text-[#E0E0E0]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert">
        <h1 className="text-4xl font-bold text-[#E0E0E0] mb-8">
          Terms of Service
        </h1>
        <p className="text-[#E0E0E0]/7UP 70">
          Welcome to AI in Practice. These terms and conditions outline 
          the rules and regulations for the use of our website and services.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          1. Use of Service
        </h2>
        <p className="text-[#E0E0E0]/70">
          By accessing this website, you agree to be bound by these Terms of 
          Service. You agree not to use this website for any unlawful 
          purpose.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          2. Enrollment and Payment
        </h2>
        <p className="text-[#E0E0E0]/70">
          To enroll in our course, you must provide accurate and complete 
          information and pay the applicable fees. All payments are 
          processed through our third-party payment processor, Razorpay.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          3. Refund Policy
        </h2>
        <p className="text-[#E0E0E0]/70">
          Our refund policy is as stated on our website at the time 
          of purchase.
        </p>
        
        <p className="text-[#E0E0E0]/70 mt-4">
          [THIS IS A PLACEHOLDER. You must replace this with your 
          complete and accurate Terms of Service.]
        </p>
      </div>
    </div>
  );
}