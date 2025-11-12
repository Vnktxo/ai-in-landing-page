// src/components/ProofPoints.tsx
import React from 'react';
import { 
  FiCpu, 
  FiZap, 
  FiCamera, 
  FiUsers, 
  FiBriefcase, 
  FiTrendingUp, 
  FiBox, 
  FiUserCheck 
} from 'react-icons/fi';

// Define the 8 benefits
const benefits = [
  { 
    icon: <FiCpu size={28} />, 
    title: "Master Prompt Engineering" 
  },
  { 
    icon: <FiBriefcase size={28} />, 
    title: "Build a Job-Ready Portfolio" 
  },
  { 
    icon: <FiZap size={28} />, 
    title: "Automate Repetitive Tasks" 
  },
  { 
    icon: <FiCamera size={28} />, 
    title: "Generate AI Art & Video" 
  },
  // The 5th item (center) is added manually below
  { 
    icon: <FiBox size={28} />, 
    title: "Build Custom \"Super Agents\"" 
  },
  { 
    icon: <FiTrendingUp size={28} />, 
    title: "Build Career & Interview Strategy" 
  },
  { 
    icon: <FiUsers size={28} />, 
    title: "Learn from Industry Experts" 
  },
  { 
    icon: <FiUserCheck size={28} />, 
    title: "Small Batch (1:10 Ratio)" 
  },
];

// A reusable card component for the benefits
const BenefitCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="p-6 bg-transparent border border-[#2A2A2A] rounded-xl 
                  hover:border-[#00FFA3]/50 transition-all duration-300 
                  flex flex-col items-center justify-center text-center">
    <div className="w-16 h-16 rounded-full bg-[#0D0D0D] text-[#00FFA3] flex items-center justify-center mb-4 border border-[#2A2A2A]">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-[#E0E0E0]">{title}</h3>
  </div>
);

const ProofPoints = () => {
  return (
    <section className="w-full py-20 bg-[#0D0D0D] border-y border-[#2A2A2A] hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* This 3x3 grid places the 5th item in the center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Render the first 4 benefits */}
          {benefits.slice(0, 4).map(b => (
            <BenefitCard key={b.title} icon={b.icon} title={b.title} />
          ))}
          
          {/* === The Central Hub Card (5th Item) === */}
          <div className="flex flex-col items-center justify-center 
                          bg-[#00FFA3] rounded-2xl p-8 
                          transform md:scale-110 shadow-2xl shadow-[#00FFA3]/20
                          border-2 border-[#00FFA3]">
            <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-[#0D0D0D] flex items-center justify-center mb-4 border-4 border-[#0D0D0D]">
              <span className="text-6xl lg:text-7xl font-extrabold text-[#00FFA3]">1</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0D0D0D]">COURSE</h2>
            <span className ="text-2xl lg:text-4xl font-semibold text-[#0D0D0D]">8 Benefits</span>
          </div>
          
          {/* Render the last 4 benefits */}
          {benefits.slice(4, 8).map(b => (
            <BenefitCard key={b.title} icon={b.icon} title={b.title} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProofPoints;