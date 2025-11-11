import type { Metadata } from "next";
import "./globals.css";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GrowInSTYL - Master AI in 8 Weekends | Chennai",
  description: "Transform from AI-curious to AI-capable. Build 5+ portfolio projects in 16 hours. Small batches, hands-on training in Kovilambakkam, Chennai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}