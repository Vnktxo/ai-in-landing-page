// src/components/Comparison.tsx
"use client";
import React from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import Link from 'next/link';

const Comparison = () => {
  const comparisonData = [
    {
      feature: 'Focus',
      traditional: { text: 'Mostly theoretical', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      online: { text: 'Self-paced, high drop-off', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      ours: { text: '100% Practical, Portfolio-Driven', icon: <FiCheckCircle className="inline mr-2 text-[#00FFA3]" /> },
    },
    {
      feature: 'Tools',
      traditional: { text: 'Outdated, legacy code', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      online: { text: 'Single, limited tool', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      ours: { text: '8+ Hottest 2024 AI Tools', icon: <FiCheckCircle className="inline mr-2 text-[#00FFA3]" /> },
    },
    {
      feature: 'Duration',
      traditional: { text: '80-240+ Hours', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      online: { text: '40-60+ Hours (unfinished)', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      ours: { text: 'Just 16 Hours (8 Saturdays)', icon: <FiCheckCircle className="inline mr-2 text-[#00FFA3]" /> },
    },
    {
      feature: 'Support',
      traditional: { text: 'Limited Q&A', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      online: { text: 'No live support', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      ours: { text: '1:10 Ratio + Career Guidance', icon: <FiCheckCircle className="inline mr-2 text-[#00FFA3]" /> },
    },
    {
      feature: 'Outcome',
      traditional: { text: 'Generic certificate', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      online: { text: 'PDF certificate', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      ours: { text: '5+ Portfolio Projects + Certificate', icon: <FiCheckCircle className="inline mr-2 text-[#00FFA3]" /> },
    },
    {
      feature: 'Price',
      traditional: { text: '₹25,000-50,000', icon: <FiXCircle className="inline mr-2 text-red-500" /> },
      online: { text: '₹2,000-8,000', icon: null },
      ours: { text: '₹10,999', icon: <FiCheckCircle className="inline mr-2 text-[#00FFA3]" /> },
    },
  ];

  return (
    <section id="compare" className="w-full py-20 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#E0E0E0] mb-4">
            Why <span className="text-[#00FFA3] drop-shadow-[0_0_20px_rgba(0,255,163,0.5)]">GrowInSTYL</span> Wins
          </h2>
          <p className="mt-4 text-xl text-[#E0E0E0]/70 max-w-3xl mx-auto">
            Traditional centers waste your time. Online courses leave you stranded. We deliver results.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="p-6 text-left text-lg font-semibold text-[#E0E0E0] bg-[#1A1A1A] border border-[#2A2A2A] rounded-tl-xl">
                  Feature
                </th>
                <th className="p-6 text-center text-lg font-semibold text-[#E0E0E0]/70 bg-[#1A1A1A] border-t border-b border-[#2A2A2A]">
                  Traditional Centers
                </th>
                <th className="p-6 text-center text-lg font-semibold text-[#E0E0E0]/70 bg-[#1A1A1A] border-t border-b border-[#2A2A2A]">
                  Online Courses
                </th>
                <th className="p-6 text-center text-xl font-bold text-[#00FFA3] bg-gradient-to-br from-[#00FFA3]/20 to-[#00FFA3]/5 border-2 border-[#00FFA3] rounded-tr-xl">
                  GrowInSTYL ✓
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="group hover:bg-[#1A1A1A]/50 transition-all duration-300">
                  <td className={`p-6 font-bold text-[#E0E0E0] bg-[#1A1A1A] border-l border-r border-b border-[#2A2A2A] ${i === comparisonData.length - 1 ? 'rounded-bl-xl' : ''}`}>
                    {row.feature}
                  </td>
                  <td className="p-6 text-center text-[#E0E0E0]/60 bg-[#1A1A1A] border-b border-[#2A2A2A]">
                    {row.traditional.icon}
                    {row.traditional.text}
                  </td>
                  <td className="p-6 text-center text-[#E0E0E0]/60 bg-[#1A1A1A] border-b border-[#2A2A2A]">
                    {row.online.icon}
                    {row.online.text}
                  </td>
                  <td className={`p-6 text-center font-semibold text-[#E0E0E0] bg-gradient-to-br from-[#00FFA3]/10 to-[#00FFA3]/5 border-l-2 border-r-2 border-b-2 border-[#00FFA3] ${i === comparisonData.length - 1 ? 'rounded-br-xl' : ''}`}>
                    {row.ours.icon}
                    {row.ours.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((row, i) => (
            <div key={i} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#00FFA3] mb-4">{row.feature}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#E0E0E0]/50 text-sm font-semibold min-w-[100px]">Traditional:</span>
                  <span className="text-[#E0E0E0]/60 text-sm">{row.traditional.icon}{row.traditional.text}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E0E0E0]/50 text-sm font-semibold min-w-[100px]">Online:</span>
                  <span className="text-[#E0E0E0]/60 text-sm">{row.online.icon}{row.online.text}</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-[#00FFA3]/10 border border-[#00FFA3]/30 rounded-lg">
                  <span className="text-[#00FFA3] text-sm font-semibold min-w-[100px]">Us:</span>
                  <span className="text-[#E0E0E0] text-sm font-semibold">{row.ours.icon}{row.ours.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/enroll"
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-full text-[#0D0D0D] bg-[#00FFA3] hover:bg-[#00FFA3]/90 transition duration-300 shadow-xl shadow-[#00FFA3]/30 transform hover:scale-105"
          >
            Start Building Your Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Comparison;