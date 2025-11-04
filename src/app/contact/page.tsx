import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="w-full py-20 lg:py-24 bg-[#0D0D0D] text-[#E0E0E0]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          Contact <span className="text-[#00FFA3]">Us</span>
        </h1>
        <p className="text-xl text-center text-[#E0E0E0]/70 mb-12">
          We&apos;re here to help. Reach out with any questions.
        </p>
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8 space-y-6">
          <div className="flex items-start gap-4">
            <FiMail className="h-6 w-6 mt-1 text-[#00FFA3]" />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-[#E0E0E0]/70">
                General Inquiries & Support
              </p>
              <a 
                href="mailto:hello@aiinpractice.com" 
                className="text-[#00FFA3] hover:underline"
              >
                hello@aiinpractice.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiPhone className="h-6 w-6 mt-1 text-[#00FFA3]" />
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-[#E0E0E0]/70">
                Admissions & Support
              </p>
              <a 
                href="tel:+919876543210" 
                className="text-[#00FFA3] hover:underline"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiMapPin className="h-6 w-6 mt-1 text-[#00FFA3]" />
            <div>
              <h2 className="text-xl font-semibold">Location</h2>
              <p className="text-[#E0E0E0]/70">
                AI in Practice (Classroom)
                <br />
                Kovilambakkam, Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}