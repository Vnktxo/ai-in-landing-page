import React from 'react';
import Link from 'next/link'; // Make sure Link is imported

const pricingPlans = [
  {
    title: 'AI Starter Pack',
    price: '₹39,996',
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
    valuable: false, // Added for consistent data structure
  },
  {
    title: 'AI Pro Builder',
    price: '₹49,999',
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
    valuable: false,
  },
  {
    title: 'AI Career Accelerator',
    price: '₹59,999',
    earlyBird: '₹14,999',
    features: [
      'All Pro Features',
      'Job Referral Network',
      'Resume Review',
      'Interview Prep',
      '3 Months Career Guidance',
      'Priority Workshop Access',
    ],
    popular: false, // Ensure only one is 'popular' if that's the logic
    valuable: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-[red]/25 border border-[red]/30 px-4 py-2 text-sm text-[red] mb-4 animate-pulse">
            Limited Time: ONLY FOR BATCH - 1
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
              // Border color: gold for valuable, green for popular, default otherwise
              className={`relative flex flex-col bg-[#1A1A1A]/50 p-8 rounded-2xl border-2 ${
                plan.valuable ? 'border-[#FFD700] hover:border-[#FFD700]/70' : plan.popular ? 'border-[#00FFA3]' : 'border-[#2A2A2A]'
              } transition-all duration-300 transform hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFA3] px-4 py-1 text-sm font-bold text-[#0D0D0D]">
                  Most Popular
                </div>
              )}
              {plan.valuable && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD700] px-4 py-1 text-sm font-bold text-black">
                  Most Valuable
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#E0E0E0] mb-2">{plan.title}</h3>
              <div className="mb-6">
                <p className={`text-4xl font-extrabold ${plan.valuable ? 'text-most-valuable' : 'text-[#00FFA3]'}`}>{plan.earlyBird}</p>
                <p className="text-sm text-[#E0E0E0]/50 line-through">{plan.price}</p>
              </div>
              <ul className="space-y-3 text-[#E0E0E0] flex-grow mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`${plan.valuable ? 'text-most-valuable' : 'text-[#00FFA3]'} flex-shrink-0`}>✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* === THIS BLOCK IS NOW FIXED === */}
              {/* Changed from <link> to <Link> */}
              <Link
                href="/enroll"
                // Button logic: gold for valuable, green for popular, neutral otherwise
                className={`block w-full py-3 text-center rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 ${
                  plan.valuable
                    ? 'bg-[#FFD700] text-[#0D0D0D] hover:bg-[#FFD700] hover:text-[#0D0D0D]  shadow-lg shadow-[#FFD700]/30'
                    : plan.popular
                      ? 'bg-[#00FFA3] text-[#0D0D0D] hover:shadow-lg shadow-[#00FFA3]/30'
                      : 'bg-[#2A2A2A] text-[#E0E0E0] hover:bg-[#00FFA3] hover:text-[#0D0D0D]'
                }`}
              >
                Enroll Now
              </Link>
              {/* ============================== */}

            </div>
          ))}
        </div>

        {/* Cleaned up the text block */}
        <div className="mt-12 text-center p-4 bg-[#1A1A1A]/20 border border-[#2A2A2A] backdrop-blur-2xl rounded-xl">
          <p className="text-lg text-[#E0E0E0]">
            <span className="text-[#00FFA3] font-semibold">Limited Time Offer:</span> Get any package with 75% OFF.
          </p>
          <p className="text-sm text-[#E0E0E0]/70">
            The price mentioned above is inclusive of all tax.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;