// src/components/Pricing.tsx
import React from 'react';

const pricingPlans = [
  {
    title: 'AI Starter Pack',
    price: '₹10,999',
    earlyBird: '₹9,999',
    features: [
      '16 Hours Hands-on Training',
      'Build 5+ Portfolio Projects',
      'ChatGPT, Midjourney, Automation',
      'E-Certificate',
      'WhatsApp Community',
      '7-Day Money-Back Guarantee',
    ],
    popular: false,
  },
  {
    title: 'AI Pro Builder',
    price: '₹12,999',
    earlyBird: '₹11,999',
    features: [
      'All Starter Features',
      'Two 1:1 Project Reviews',
      'Portfolio Deep Dive',
      'LinkedIn Optimization',
      'Project Guarantee',
      'Limited to 30 seats',
    ],
    popular: true,
  },
  {
    title: 'AI Career Accelerator',
    price: '₹15,999',
    earlyBird: '₹14,999',
    features: [
      'All Pro Features',
      'Job Referral Network',
      'Resume Review',
      'Interview Prep',
      '3 Months Career Guidance',
      'Priority Workshop Access',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-[#00FFA3]/10 border border-[#00FFA3]/30 px-4 py-2 text-sm text-[#00FFA3] mb-4">
            Early Bird: Save ₹1,000 on any package!
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E0E0E0]">Choose Your Plan</h2>
          <p className="mt-4 text-xl text-[#E0E0E0]/70 max-w-3xl mx-auto">
            Select the package that best fits your career goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col bg-[#1A1A1A] p-8 rounded-2xl border-2 ${
                plan.popular ? 'border-[#00FFA3]' : 'border-[#2A2A2A]'
              } hover:border-[#00FFA3]/70 transition-all duration-300 transform hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFA3] px-4 py-1 text-sm font-bold text-[#0D0D0D]">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#E0E0E0] mb-2">{plan.title}</h3>
              <div className="mb-6">
                <p className="text-4xl font-extrabold text-[#00FFA3]">{plan.earlyBird}</p>
                <p className="text-sm text-[#E0E0E0]/50 line-through">{plan.price}</p>
              </div>
              <ul className="space-y-3 text-[#E0E0E0] flex-grow mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#00FFA3] flex-shrink-0">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#enroll"
                className={`block w-full py-3 text-center rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-[#00FFA3] text-[#0D0D0D] shadow-lg shadow-[#00FFA3]/30'
                    : 'bg-[#2A2A2A] text-[#E0E0E0] hover:bg-[#00FFA3] hover:text-[#0D0D0D]'
                }`}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl">
          <p className="text-lg text-[#E0E0E0]">
            <span className="text-[#00FFA3] font-semibold">Student Discount:</span> Get any package for ₹7,999 with valid student ID (Max 3 per batch)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;