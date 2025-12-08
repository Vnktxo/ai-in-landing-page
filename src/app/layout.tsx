import type { Metadata } from "next";
import "./globals.css";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import { PlanProvider } from "@/context/PlanContext";
import Script from "next/script"; // <--- 1. Import Script Component

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
        
        {/* --- 2. META PIXEL SCRIPT START --- */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1546485116492653');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* --- META PIXEL SCRIPT END --- */}

        <PlanProvider> 
          <Header />
          {children}
          <Footer />
        </PlanProvider>

        {/* --- 3. NOSCRIPT FALLBACK START --- */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1546485116492653&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
        {/* --- NOSCRIPT FALLBACK END --- */}

      </body>
    </html>
  );
}