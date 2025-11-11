// src/app/page.tsx
import React, { Suspense } from 'react';
import HomePageContent from '@/components/HomePageContent';

// This component remains a Server Component
// It wraps the Client Component in Suspense, which is best practice
export default function Home() {
  return (
    // Fallback can be a simple loading spinner or just null
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  );
}