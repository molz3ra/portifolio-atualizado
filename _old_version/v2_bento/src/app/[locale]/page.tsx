"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import heavy components
const BentoGrid = dynamic(() => import("@/components/BentoGrid/BentoGrid"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-[var(--color-primary)]">Loading...</div>}>
          <BentoGrid />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
