// src/components/Tools.tsx
import React from 'react';
import { SiOpenai, SiN8N, SiZapier, SiGithub } from 'react-icons/si';

const TESTIMONIALS = [
  { name: "Priya S.", role: "Engineering Student", text: "Built my first AI automation pipeline in week 7. Already using it for my college project!" },
  { name: "Rahul M.", role: "Product Manager", text: "The portfolio projects gave me something real to show in interviews. Worth every rupee." },
  { name: "Ananya K.", role: "Marketing Professional", text: "Weekend format was perfect. Learned cutting-edge tools without taking time off work." }
];

const Tools = () => {
  return (
    <section className="w-full py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E0E0E0]">
            Real Results from <span className="text-[#00FFA3]">Real Students</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl hover:border-[#00FFA3]/50 transform hover:scale-105 transition duration-300"
            >
              <div className="flex mb-4 gap-1">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#00FFA3]">★</span>
                ))}
              </div>
              <p className="text-[#E0E0E0] mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-[#2A2A2A] pt-4">
                <p className="text-[#E0E0E0] font-semibold">{t.name}</p>
                <p className="text-[#E0E0E0]/60 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#E0E0E0] mb-8">Tools You'll Master</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <SiOpenai className="text-5xl text-[#00FFA3]" />      
                <span className="mt-2 text-[#E0E0E0]/70">ChatGPT & Gemini</span>
            </div>
            <div className="flex flex-col items-center">
              <SiN8N className="text-5xl text-[#00FFA3]" />
                <span className="mt-2 text-[#E0E0E0]/70">n8n Automation</span>
            </div>
            <div className="flex flex-col items-center">
              <SiZapier className="text-5xl text-[#00FFA3]" />
                <span className="mt-2 text-[#E0E0E0]/70">Zapier</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGithub className="text-5xl text-[#00FFA3]" />          
                <span className="mt-2 text-[#E0E0E0]/70">GitHub Copilot</span>
            </div>
          </div>            
        </div>
        </div>
    </section>
    );

};
export default Tools;