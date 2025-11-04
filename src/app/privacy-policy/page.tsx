import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full py-20 lg:py-24 bg-[#0D0D0D] text-[#E0E0E0]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert">
        <h1 className="text-4xl font-bold text-[#E0E0E0] mb-8">Privacy Policy</h1>
        <p className="text-[#E0E0E0]/70">
          Your privacy is important to us. This policy explains what personal data 
          AI in Practice ("we") collects from you and how we use it.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          Data We Collect
        </h2>
        <p className="text-[#E0E0E0]/70">
          We collect data to operate effectively and provide you the best 
          experiences with our services. You provide some of this data directly, 
          such as when you create an account, register for a course, or 
          contact us for support.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          How We Use Data
        </h2>
        <p className="text-[#E0E0E0]/70">
          We use the data we collect to provide and improve our services, 
          including processing payments, sending communications, and 
          providing support.
        </p>
        
        <p className="text-[#E0E0E0]/70 mt-4">
          [THIS IS A PLACEHOLDER. You must replace this with a 
          complete and accurate privacy policy.]
        </p>
      </div>
    </div>
  );
}