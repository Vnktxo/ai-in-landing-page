// src/app/enroll/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiPhone, FiImage, } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

export default function EnrollPage() {
  const whatsappNumber = "+917358108015";
  const whatsappMessage = "Hello! I've just enrolled in the AI in Practice course and here is my payment screenshot.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="w-full py-20 lg:py-24 bg-[#0D0D0D] text-[#E0E0E0] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 shadow-2xl shadow-[#00FFA3]/10">
          <h1 className="text-4xl font-bold text-center mb-4">
            Complete Your <span className="text-[#00FFA3]">Enrollment</span>
          </h1>
          <p className="text-xl text-center text-[#E0E0E0]/70 mb-12">
            Just two simple steps to secure your seat.
          </p>

          <div className="space-y-8">
            {/* Step 1: Scan and Pay */}
            <div className="flex flex-col items-center p-6 bg-[#0D0D0D] rounded-lg border border-[#2A2A2A]">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00FFA3] text-[#0D0D0D] mb-4">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Scan & Pay</h2>
              <p className="text-[#E0E0E0]/70 mb-6">
                Use any UPI app (GPay, PhonePe, etc.) to scan the QR code below and pay the fee.
              </p>
              <div className="p-4 bg-white rounded-lg">
                <Image
                  src="/payment-qr.png" // <-- Make sure your QR code is named this in /public
                  alt="Payment QR Code"
                  width={250}
                  height={250}
                />
              </div>
            </div>

            {/* Step 2: Send Screenshot */}
            <div className="flex flex-col items-center p-6 bg-[#0D0D0D] rounded-lg border border-[#2A2A2A]">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00FFA3] text-[#0D0D0D] mb-4">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Send Screenshot</h2>
              <p className="text-[#E0E0E0]/70 mb-6 text-center">
                After paying, take a screenshot of the successful payment and send it to our WhatsApp number.
              </p>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-full text-[#0D0D0D] bg-[#00FFA3] hover:bg-[#00FFA3]/90 transition duration-300 shadow-xl shadow-[#00FFA3]/30"
              >
                <SiWhatsapp size={20} />
                Send Screenshot on WhatsApp
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}