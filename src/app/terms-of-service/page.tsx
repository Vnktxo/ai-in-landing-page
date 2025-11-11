import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="w-full py-20 lg:py-24 bg-[#0D0D0D] text-[#E0E0E0]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert">
        <h1 className="text-4xl font-bold text-[#E0E0E0] mb-8">
          Terms of Service
        </h1>
        <p className="text-[#E0E0E0]/70">
          Last Updated: November 11, 2025
        </p>
        <p className="text-[#E0E0E0]/70">
          Please read these Terms of Service ("Terms") carefully before using the 
          growinstyl.doitinsty.com website (the "Website") and the services 
          offered by GrowInSTYL ("we," "us," or "our").
        </p>
        <p className="text-[#E0E0E0]/70">
          By accessing or using the Website, enrolling in a course, or using our services, 
          you ("you" or "User") agree to be bound by these Terms. If you disagree 
          with any part of the terms, you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          1. Definitions
        </h2>
        <ul className="text-[#E0E0E0]/70">
          <li><strong>"Service"</strong> refers to the educational courses, content, materials, and any other services provided by GrowInSTYL, including the "AI in Practice" course.</li>
          <li><strong>"Course"</strong> refers to any specific educational program offered, such as the 8-week AI course.</li>
          <li><strong>"User"</strong> means any individual who accesses the Website or enrolls in a Course.</li>
          <li><strong>"Content"</strong> means all information, text, graphics, videos, and other material available on the Website or as part of a Course.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          2. The Service
        </h2>
        <p className="text-[#E0E0E0]/70">
          2.1. GrowInSTYL provides in-person and/or online training courses focused on practical skills in artificial intelligence, including prompt engineering, automation, and AI-assisted coding.
        </p>
        <p className="text-[#E0E0E0]/70">
          2.2. The Service is provided for educational and informational purposes only. We make no guarantees regarding specific career outcomes, job placements, or income increases as a result of completing a Course.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          3. User Enrollment and Accounts
        </h2>
        <p className="text-[#E0E0E0]/70">
          3.1. To enroll in a Course, you must provide accurate and complete information, including your name and a valid email address.
        </p>
        <p className="text-[#E0E0E0]/70">
          3.2. You are responsible for maintaining the confidentiality of any access credentials and for all activities that occur under your enrollment.
        </p>
        <p className="text-[#E0E0E0]/70">
          3.3. You must be at least 18 years of age to enroll in a Course.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          4. Payments, Fees, and Refunds
        </h2>
        <p className="text-[#E0E0E0]/70">
          4.1. Payments: All fees for Courses are as listed on the Website at the time of enrollment. All payments are processed through our third-party payment processor (e.g., Razorpay).
        </p>
        <p className="text-[#E0E0E0]/70">
          4.2. Fees: You agree to pay all applicable fees for the Course you select. All fees are in Indian Rupees (INR) unless stated otherwise.
        </p>
        <p className="text-[#E0E0E0]/70">
          4.3. Refunds: Our refund policy is detailed in our separate <Link href="/refund-policy" className="text-[#00FFA3] hover:underline">Refund Policy</Link> document. This includes a 7-day money-back guarantee, subject to the conditions outlined in that policy.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          5. User Obligations and Code of Conduct
        </h2>
        <p className="text-[#E0E0E0]/70">
          5.1. You agree to use the Service only for lawful purposes. You shall not:
        </p>
        <ul className="text-[#E0E0E0]/70">
          <li>Share your course access or materials with any third party.</li>
          <li>Copy, reproduce, distribute, or create derivative works from our Content without our express written permission.</li>
          <li>Use the Service to harass, abuse, or harm another person.</li>
          <li>Engage in any activity that disrupts or interferes with the Service.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          6. Intellectual Property
        </h2>
        <p className="text-[#E0E0E0]/70">
          6.1. All Content provided as part of the Service, including the Website, logo, course materials, videos, and curriculum, are the exclusive property of GrowInSTYL and its licensors.
        </p>
        <p className="text-[#E0E0E0]/70">
          6.2. Upon enrollment, we grant you a limited, non-exclusive, non-transferable license to access and use the Course materials for your personal, non-commercial educational purposes.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          7. Disclaimers and Limitation of Liability
        </h2>
        <p className="text-[#E0E0E0]/70">
          7.1. Disclaimer of Warranties: The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding the completeness, accuracy, reliability, or suitability of the Content.
        </p>
        <p className="text-[#E0E0E0]/70">
          7.2. Limitation of Liability: To the fullest extent permitted by law, GrowInSTYL (including its instructors and affiliates) shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the Service.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          8. Termination
        </h2>
        <p className="text-[#E0E0E0]/70">
          8.1. We reserve the right to suspend or terminate your access to the Service immediately, without prior notice or liability, if you breach these Terms.
        </p>
        <p className="text-[#E0E0E0]/70">
          8.2. Upon termination, your right to use the Service will cease immediately.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          9. Governing Law and Dispute Resolution
        </h2>
        <p className="text-[#E0E0E0]/70">
          9.1. Governing Law: These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
        <p className="text-[#E0E0E0]/70">
          9.2. Jurisdiction: You agree to submit to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India, to resolve any legal matter arising from these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#E0E0E0] mt-8 mb-4">
          10. Miscellaneous
        </h2>
        <p className="text-[#E0E0E0]/70">
          10.1. Amendments: We reserve the right to modify these Terms at any time. We will provide notice of changes by posting the updated Terms on the Website.
        </p>
        <p className="text-[#E0E0E0]/70">
          10.2. Severability: If any provision of these Terms is held to be invalid or unenforceable, that provision will be struck, and the remaining provisions will be enforced.
        </p>
        <p className="text-[#E0E0E0]/70">
          10.3. Contact: For any questions about these Terms, please contact us via the details on our <Link href="/contact" className="text-[#00FFA3] hover:underline">Contact Us</Link> page.
        </p>
      </div>
    </div>
  );
}