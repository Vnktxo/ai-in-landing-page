'use client';

import Hero from "@/components/Hero";
import ProofPoints from "@/components/ProofPoints";
import TargetAudience from "@/components/TargetAudience";
import Instructor from "@/components/Instructors";
import Curriculum from "@/components/Curriculum";
import Tools from "@/components/Tools";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FinalCTA from "@/components/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";


export default function Home() {
  return (
    <> 
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />

        <ScrollReveal><ProofPoints /></ScrollReveal>
        <ScrollReveal><TargetAudience /></ScrollReveal>
        <ScrollReveal><Instructor /></ScrollReveal>
        <ScrollReveal><Curriculum /></ScrollReveal>
        <ScrollReveal><Tools /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><Guarantee /></ScrollReveal>
        <ScrollReveal><FinalCTA /></ScrollReveal>
      </main>
    </>
  );
}