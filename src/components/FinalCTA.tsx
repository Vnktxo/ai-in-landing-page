import React from 'react';

const FinalCTA = () => {
  return (
    <section className="w-full py-20 bg-transparent border-t border-[#2A2A2A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#E0E0E0] mb-6">
          Ready to Become an <span className="text-[#00FFA3]">AI Builder</span>?
        </h2>
        <p className="text-xl text-[#E0E0E0]/70 mb-8 max-w-2xl mx-auto">
          Only 30 seats available across all batches. Claim your spot before it&apos;s gone!
        </p>
        <a
          href="#enroll"
          className="inline-flex items-center px-12 py-5 text-xl font-bold rounded-full text-[#0D0D0D] bg-[#00FFA3] hover:bg-[#00FFA3]/90 transition duration-300 shadow-2xl shadow-[#00FFA3]/40 transform hover:scale-110"
        >
          Enroll Now →
        </a>
        <p className="mt-6 text-sm text-[#E0E0E0]/50">
          Batch 1 starts January 3rd • Early bird pricing ends December 15th
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;