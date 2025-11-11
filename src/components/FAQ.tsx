// src/components/FAQ.tsx
"use client";
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqData = [
  {
    question: "Who is this course for?",
    answer: "This course is perfect for students, recent graduates, and early-career professionals (0-3 years experience) who want to build practical AI skills and a strong portfolio. Whether you're technical or non-technical, if you're AI-curious and career-focused, this is for you."
  },
  {
    question: "I have no coding experience. Can I join?",
    answer: "Absolutely! The course starts with AI basics and focuses on no-code/low-code tools like ChatGPT, Midjourney, and n8n. We build real projects without writing complex code. No prior programming experience required."
  },
  {
    question: "What if I miss a class?",
    answer: "No problem. All live sessions are recorded and available for replay. You'll also have access to our dedicated WhatsApp community where you can ask questions and get support from instructors and peers."
  },
  {
    question: "Where is the class held?",
    answer: "In-person classes are held in Kovilambakkam, Chennai. You'll receive the exact location details, directions, and parking information after enrollment. The venue is easily accessible and has all necessary facilities."
  },
  {
    question: "Do I need to bring my own laptop?",
    answer: "Yes, this is a BYOD (Bring Your Own Device) course. You'll need a laptop (Windows, Mac, or Linux) with a web browser and stable internet connection. Most AI tools we use are browser-based and work on any operating system."
  },
  {
    question: "What is the 7-day money-back guarantee?",
    answer: "Simple: Attend the first class. If you feel the course isn't for you, notify us within 7 days and get a 100% refund—no questions asked, no hassle. We're that confident in our value."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! Upon completing the course with at least 50% attendance and project submission, you'll receive a LinkedIn-ready e-certificate with a unique verification ID. More importantly, you'll have 5+ portfolio projects to showcase."
  },
  {
    question: "Can I pay in installments?",
    answer: "Yes! We offer a 2-installment payment option via Razorpay (60% upfront, 40% before Week 4). We also have student discounts (₹7,999 with valid ID) and referral credits (₹1,000 per successful referral)."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 bg-transparent relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#E0E0E0] mb-4">
            Got <span className="text-[#00FFA3] drop-shadow-[0_0_20px_rgba(0,255,163,0.5)]">Questions?</span>
          </h2>
          <p className="text-xl text-[#E0E0E0]/70">We&apos;ve got answers. Still not sure? Message us on WhatsApp.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`bg-[#0D0D0D] rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === i ? 'border-[#00FFA3]' : 'border-[#2A2A2A] hover:border-[#00FFA3]/50'
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
              >
                <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                  openIndex === i ? 'text-[#00FFA3]' : 'text-[#E0E0E0] group-hover:text-[#00FFA3]'
                }`}>
                  {item.question}
                </h3>
                <FiChevronDown
                  className={`flex-shrink-0 text-[#00FFA3] transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[#E0E0E0]/70 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-[#0D0D0D] border border-[#00FFA3]/30 rounded-2xl">
          <p className="text-lg text-[#E0E0E0] mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#00FFA3] text-[#0D0D0D] font-semibold hover:bg-[#00FFA3]/90 transition duration-300 shadow-lg shadow-[#00FFA3]/30"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@aiinpractice.com"
              className="px-6 py-3 rounded-full bg-[#2A2A2A] text-[#E0E0E0] font-semibold hover:bg-[#00FFA3] hover:text-[#0D0D0D] transition duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;