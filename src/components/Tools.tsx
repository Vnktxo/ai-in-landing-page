// src/components/Tools.tsx
import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';  
import { SiOpenai, SiN8N, SiZapier, SiGithub, SiClaude, SiGooglegemini, SiGithubcopilot } from 'react-icons/si';

const TESTIMONIALS = [
  { 
    name: "Venkatesh S.", 
    role: "Engineering Student", 
    text: "Built my first AI automation pipeline and I'm already using it for my college project!" 
  },
  { 
    name: "Rahul M.", 
    role: "Product Manager", 
    text: "The portfolio projects gave me something real to show in interviews. Worth every rupee." 
  },
  { 
    name: "Ananya K.", 
    role: "Marketing Professional", 
    text: "Weekend format was perfect. Learned cutting-edge tools without taking time off work." 
  }
];

const TOOLS = [
  { icon: SiOpenai, name: "ChatGPT" },
  { icon: SiN8N, name: "n8n Automation" },
  { icon: SiZapier, name: "Zapier" },
  { icon: SiGithubcopilot, name: "GitHub Copilot" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiGooglegemini, name: "Gemini" },
  { icon: SiClaude, name: "Claude" }
];

// Reusable Testimonial Card Component
const TestimonialCard = ({ name, role, text }: { name: string, role: string, text: string }) => (
  <div
    className="p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl hover:border-[#00FFA3]/50 transform hover:scale-105 transition duration-300
               w-[80vw] md:w-full flex-shrink-0" // Sized for the mobile slider
  >
    <div className="flex mb-4 gap-1">
      {[...Array(5)].map((_, j) => (
        <span key={j} className="text-[#00FFA3]">★</span>
      ))}
    </div>
    <p className="text-[#E0E0E0] mb-4 italic">&ldquo;{text}&rdquo;</p>
    <div className="border-t border-[#2A2A2A] pt-4">
      <p className="text-[#E0E0E0] font-semibold">{name}</p>
      <p className="text-[#E0E0E0]/60 text-sm">{role}</p>
    </div>
  </div>
);


const Tools = () => {
  return (
    // Restored the solid background color
    <section className="w-full py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E0E0E0]">
            Real Results from <span className="text-[#00FFA3]">Real Students</span>
          </h2>
        </div>
        
        {/* === Desktop Grid (Visible > md) === */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} name={t.name} role={t.role} text={t.text} />
          ))}
        </div>

        {/* === Mobile Slider (Visible < md) === */}
        <div className="md:hidden mb-16">
          <InfiniteSlider gap={20} duration={40}>
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} name={t.name} role={t.role} text={t.text} />
            ))}
          </InfiniteSlider>
        </div>

        {/* Tools Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#E0E0E0] mb-8">Tools You Will Master</h3>
          
          <InfiniteSlider gap={20}>
            {TOOLS.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="flex flex-col items-center px-8">
                  <IconComponent className="text-5xl text-[#00FFA3]" />
                  <span className="mt-2 text-[#E0E0E0]/7Opening 'vnktxo/ai-in-landing-page/ai-in-landing-page-3b2ac0287c9768cf89722e24a3cc4c3b220f38bc/src.app/page.tsx' to analyze.70 whitespace-nowrap">{tool.name}</span>
                </div>
              );
            })}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default Tools;