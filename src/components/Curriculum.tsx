  // src/components/Curriculum.tsx
  import React from 'react';
  import Link from 'next/link';

  const curriculumData = [
    { week: 1, title: 'Intoduction to AI', tools: 'ChatGPT, Gemini, Claude' },
    { week: 2, title: 'How to write a prompt', tools: 'Custom GPTs, Chain-of-thought' },
    { week: 3, title: 'Image Generation', tools: 'Midjourney, DALL-E, Leonardo AI' },
    { week: 4, title: 'Video Generation', tools: 'RunwayML, Pika Labs, CapCut' },
    { week: 5, title: 'Agentic AI', tools: 'RunwayML, Pika Labs, CapCut' },
    { week: 6, title: 'Vibe Coding', tools: 'GitHub Copilot, cursor.so' },
    { week: 7, title: 'Automation & Super Agent', tools: 'n8n, Make, Zapier' },
    { week: 8, title: 'Final Projects & Portfolio', tools: 'All course tools integrated' },
  ];

  const Curriculum = () => {
    return (
      <section id="curriculum" className="w-full py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E0E0E0]">
              The <span className="text-[#00FFA3]">8-Week Blueprint</span> to AI Mastery
            </h2>
            <p className="mt-4 text-xl text-[#E0E0E0]/70 max-w-3xl mx-auto">
              Every session is 100% hands-on, focused on building real-world outputs you can use immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumData.map((session) => (
              <div 
                key={session.week} 
                className="p-6 bg-[#1A1A1A]/50 rounded-xl border border-[#2A2A2A] hover:border-[#00FFA3]/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FFA3] flex items-center justify-center text-[#0D0D0D] font-bold shadow-lg shadow-[#00FFA3]/30">
                    {session.week}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#E0E0E0] mb-2">{session.title}</h3>
                <p className="text-[#E0E0E0]/60 text-sm">Tools: {session.tools}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-14">
            <Link
                href="/enroll"
                className="px-8 py-5 text-sm font-semibold rounded-full bg-[#00FFA3] text-[#0D0D0D] hover:bg-[#00FFA3]/90 transition duration-300 shadow-lg shadow-[#00FFA3]/30"
              >
                Enroll Now
              </Link>
          </div>
        </div>
      </section>
    );
  };

  export default Curriculum;