// src/components/TargetAudience.tsx
import React from 'react';

const TargetAudience = () => {
  return (
    <section className="w-full py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E0E0E0]">
            The <span className="text-[#00FFA3]">GrowInSTYL</span> Difference
          </h2>
          <p className="mt-4 text-xl text-[#E0E0E0]/70 max-w-3xl mx-auto">
            We cut the theoretical fluff and focus only on the tools and projects that matter to employers right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#00FFA3]/50 transition-all duration-500 transform hover:translate-y-[-4px]">
            <div className="w-12 h-12 rounded-full bg-[#00FFA3]/10 flex items-center justify-center mb-4">
              <span className="text-2xl text-[#00FFA3]">→</span>
            </div>
            <h3 className="text-xl font-bold text-[#E0E0E0] mb-3">Portfolio Focus</h3>
            <p className="text-[#E0E0E0]/70">
              Build 5+ tangible projects including AI content pipelines, image generators, and Super Agents to demo in interviews. No more vague certificates.
            </p>
          </div>

          <div className="p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#00FFA3]/50 transition-all duration-500 transform hover:translate-y-[-4px]">
            <div className="w-12 h-12 rounded-full bg-[#00FFA3]/10 flex items-center justify-center mb-4">
              <span className="text-2xl text-[#00FFA3]">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-[#E0E0E0] mb-3">Speed (16 Hours)</h3>
            <p className="text-[#E0E0E0]/70">
              Why spend 120+ hours on legacy code? Master cutting-edge tools in just 16 weekend hours, optimized for busy professionals and students.
            </p>
          </div>
          
          <div className="p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl hover:border-[#00FFA3]/50 transition-all duration-500 transform hover:translate-y-[-4px]">
            <div className="w-12 h-12 rounded-full bg-[#00FFA3]/10 flex items-center justify-center mb-4">
              <span className="text-2xl text-[#00FFA3]">◆</span>
            </div>
            <h3 className="text-xl font-bold text-[#E0E0E0] mb-3">2024&apos;s Hottest AI Toolkit</h3>
            <p className="text-[#E0E0E0]/70">
              Learn the actual tools driving the industry: Midjourney, DALL-E, RunwayML, GitHub Copilot, n8n automation, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;