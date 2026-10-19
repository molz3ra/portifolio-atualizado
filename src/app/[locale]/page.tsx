"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TechnicalBlueprint from "@/components/TechnicalBlueprint";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  return (
    <>
      <Navbar onOpenCommandPalette={() => setIsPaletteOpen(true)} />

      <main className="flex-grow">
        <Hero />
        <ProjectsShowcase />
        <TechnicalBlueprint />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
        onToggle={() => setIsPaletteOpen((prev) => !prev)}
      />
    </>
  );
}
