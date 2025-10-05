import Header from "@/components/Header"; // 👈 Add this import
import Hero from "@/components/Hero";
import ProofPoints from "@/components/ProofPoints";
import TargetAudience from "@/components/TargetAudience";
import Instructor from "@/components/Instructors";
import Curriculum from "@/components/Curriculum";
import Tools from "@/components/Tools";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <> 
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <ProofPoints />
        <TargetAudience />
        <Instructor />
        <Curriculum />
        <Tools />
        <Pricing />
        <Guarantee />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}