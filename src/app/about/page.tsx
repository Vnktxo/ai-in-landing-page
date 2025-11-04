import React from 'react';
import Instructors from '@/components/Instructors'; // Re-use the component

export default function AboutPage() {
  return (
    <div className="w-full py-20 lg:py-24 bg-[#0D0D0D] text-[#E0E0E0]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          About <span className="text-[#00FFA3]">Us</span>
        </h1>
        <p className="text-xl text-center text-[#E0E0E0]/70 mb-12">
          We are a team of industry experts dedicated to bridging the gap
          between theoretical knowledge and practical, in-demand AI skills.
        </p>
      </div>
      
      {/* We can re-use the Instructors component you already built! */}
      <Instructors />
    </div>
  );
}