import React from 'react';
import Curriculum from '@/components/Curriculum'; // Re-use the component

export default function ServicesPage() {
  return (
    <div className="w-full py-20 lg:py-24 bg-[#0D0D0D] text-[#E0E0E0]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-[#00FFA3]">Services</span>
        </h1>
        <p className="text-xl text-center text-[#E0E0E0]/70 mb-12">
          We offer one flagship service: the 8-week &quot;AI in Practice&quot; 
          hands-on course.
        </p>
      </div>
      
      {/* We can re-use the Curriculum component you already built! */}
      <Curriculum />
    </div>
  );
}