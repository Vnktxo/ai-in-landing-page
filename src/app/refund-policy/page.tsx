import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="w-full py-20 lg:py-24 bg-[#0D0D0D] text-[#E0E0E0]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert">
        <h1 className="text-4xl font-bold text-[#E0E0E0] mb-8">Refund Policy</h1>
        <p className="text-[#E0E0E0]/70">
          Last Updated: November 11, 2025
        </p>
        <p className="text-[#E0E0E0]/70">
          This policy outlines the terms and conditions for receiving a refund for courses purchased from GrowInSTYL.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          1. Our 7-Day Guarantee
        </h2>
        <p className="text-[#E0E0E0]/70">
          We offer a 7-day money-back guarantee on our Courses. We are confident in the 
          value we provide, but if you are not satisfied after the first session, 
          you may be eligible for a refund.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          2. Eligibility for a Refund
        </h2>
        <p className="text-[#E0E0E0]/70">
          To be eligible for a 100% refund, you must meet the following conditions:
        </p>
        <ul className="text-[#E0E0E0]/70">
          <li>You must have attended (in-person or virtually) the first scheduled session of your Course batch.</li>
          <li>You must submit your refund request, in writing, within seven (7) calendar days of the first session date.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          3. Non-Refundable Conditions
        </h2>
        <p className="text-[#E0E0E0]/70">
          You will not be eligible for a refund under the following conditions:
        </p>
        <ul className="text-[#E0E0E0]/70">
          <li>The refund request is received *after* the 7-day period has expired.</li>
          <li>You did not attend the first session of the Course.</li>
          <li>You have completed more than 25% of the Course content.</li>
          <li>You are terminated from the Course for a violation of our Terms of Service.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          4. How to Request a Refund
        </h2>
        <p className="text-[#E0E0E0]/70">
          To request a refund, you must send an email to <a href="mailto:growinstyl.ai@gmail.com" className="text-[#00FFA3]">growinstyl.ai@gmail.com</a> with the 
          subject line &quot;Refund Request.&quot; Please include your full name, the 
          email address used for enrollment, and the reason for your request.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          5. Refund Processing
        </h2>
        <p className="text-[#E0E0E0]/70">
          Once your request is received and approved, we will process your refund. 
          The funds will be returned to your original method of payment (e.g., via Razorpay) 
          within 7-10 business days.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          6. Course Cancellation by GrowInSTYL
        </h2>
        <p className="text-[#E0E0E0]/70">
          In the unlikely event that we must cancel a Course, we will notify 
          all enrolled students and provide a 100% refund of all fees paid.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          7. Contact Us
        </h2>
        <p className="text-[#E0E0E0]/70">
          If you have any questions about our Refund Policy, please contact us at <a href="mailto:growinstyl.ai@gmail.com" className="text-[#00FFA3]">growinstyl.ai@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}