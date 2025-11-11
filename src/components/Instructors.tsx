import React from 'react';
import Image from 'next/image';
import { FiAward, FiBriefcase, FiTrendingUp, FiCpu, FiCode, FiBox, FiTarget, FiZap, FiUser} from 'react-icons/fi';

const Instructors = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#E0E0E0]">Meet Your Instructors</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#E0E0E0]/70">
            Get the best of all worlds: a technical expert, a career strategist, and a strategic visionary.
          </p>
        </div>

        {/* Instructors Grid - Updated to support 3 columns on larger screens */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          
          {/* Finney's Card */}
          <div className="flex flex-col items-center text-center bg-[#0D0D0D] p-8 rounded-lg border border-[#2A2A2A] hover:border-[#00FFA3]/50 transition-all duration-300">
            <div className="w-48 h-48 rounded-full bg-[#2A2A2A] mb-4 overflow-hidden">
              <Image 
                src="/Finney.jpeg" 
                alt="Finney" 
                width={192} 
                height={192} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#00FFA3]">Finney</h3>
            <p className="text-lg font-medium text-[#E0E0E0]/80 mb-6">The Career Catalyst</p>
            <div className="w-full text-left space-y-3">
              <div className="flex items-start gap-3">
                <FiAward className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">Career Workshops:</span> Mastering personal branding & persuasion</p>
              </div>
              <div className="flex items-start gap-3">
                <FiBriefcase className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">Interview Labs:</span> Learning what hiring managers really look for</p>
              </div>
              <div className="flex items-start gap-3">
                <FiTrendingUp className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">HR Insights:</span> Decoding workplace dynamics & growth strategy</p>
              </div>
            </div>
          </div>

          {/* Michael's Card */}
          <div className="flex flex-col items-center text-center bg-[#0D0D0D] p-8 rounded-lg border border-[#2A2A2A] hover:border-[#00FFA3]/50 transition-all duration-300">
          <div className="w-48 h-48 rounded-full bg-[#0D0D0D] mb-4 flex items-center justify-center border-2 border-[#00FFA3]/50">
              <span className="text-7xl font-light text-[#00FFA3]">M</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#00FFA3]">Michael</h3>
            <p className="text-lg font-medium text-[#E0E0E0]/80 mb-6">The Technical Expert</p>
            <div className="w-full text-left space-y-3">
              <div className="flex items-start gap-3">
                <FiCpu className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">Technical Deep Dives:</span> Leading the hands-on exploration of AI</p>
              </div>
              <div className="flex items-start gap-3">
                <FiCode className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">AI Tool Mastery:</span> Guiding you through practical use of modern AI tools</p>
              </div>
              <div className="flex items-start gap-3">
                <FiBox className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">Project-Based Learning:</span> Overseeing development of your portfolio projects</p>
              </div>
            </div>
          </div>

          {/* Samhitha's Card - Moved to the correct level and typo fixed */}
          <div className="flex flex-col items-center text-center bg-[#0D0D0D] p-8 rounded-lg border border-[#2A2A2A] hover:border-[#00FFA3]/50 transition-all duration-300">
            <div className="w-48 h-48 rounded-full bg-[#2A2A2A] mb-4 overflow-hidden">
              <Image 
                src="/Samhitha.jpg" 
                alt="Sam" 
                width={192} 
                height={192} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#00FFA3]">Samhitha</h3>
            <p className="text-lg font-medium text-[#E0E0E0]/80 mb-6">The Strategic Visionary</p>
            <div className="w-full text-left space-y-3">
              <div className="flex items-start gap-3">
                <FiTarget className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">Vision Design:</span> Crafting data-driven strategies for long-term success</p>
              </div>
              <div className="flex items-start gap-3">
                <FiZap className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                {/* Typo corrected below */}
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">Innovation in Action:</span> Turning creative ideas into actionable business plans</p>
              </div>
              <div className="flex items-start gap-3">
                <FiUser className="h-5 w-5 mt-1 text-[#00FFA3] flex-shrink-0" />
                <p className="text-sm text-[#E0E0E0]/70"><span className="font-semibold text-[#E0E0E0]">Leadership Impact:</span> Empowering teams with clarity, alignment, and execution excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;