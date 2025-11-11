// src/components/ProofPoints.tsx
import React from 'react';

const ProofPoints = () => {
  return (
    <section className="w-full py-16 bg-transparent border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-[#00FFA3] mb-2">16</div>
            <div className="text-[#E0E0E0]/70">Hours of Training</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-[#00FFA3] mb-2">5+</div>
            <div className="text-[#E0E0E0]/70">Portfolio Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-[#00FFA3] mb-2">10</div>
            <div className="text-[#E0E0E0]/70">Students per Batch</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-[#00FFA3] mb-2">20+</div>
            <div className="text-[#E0E0E0]/70">AI Tools Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;