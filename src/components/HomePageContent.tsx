// src/components/HomePageContent.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Import the hook

// Your page components
import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Instructors from "@/components/Instructors";
import Curriculum from "@/components/Curriculum";
import Tools from "@/components/Tools";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AdModal } from "@/components/AdModal"; // Import our new modal
import Guarantee from './Guarantee';
import ProofPoints from './ProofPoints';

export default function HomePageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if the URL has ?ad=true
    // You can change 'ad' to any parameter you want (e.g., 'utm_source')
    if (searchParams.get('ad') === 'true') {
      setIsModalOpen(true);
    }
  }, [searchParams]);

  return (
    <> 
      {/* Conditionally render the modal */}
      {isModalOpen && <AdModal onClose={() => setIsModalOpen(false)} />}
      
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <ScrollReveal><ProofPoints /></ScrollReveal>
        <ScrollReveal><TargetAudience /></ScrollReveal>
        <ScrollReveal><Instructors /></ScrollReveal>
        <ScrollReveal><Curriculum /></ScrollReveal>
        <ScrollReveal><Tools /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><Comparison /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><Guarantee /></ScrollReveal>
        <ScrollReveal><FinalCTA /></ScrollReveal>
      </main>
    </>
  );
}