"use client";

import Navbar from "@/components/Navbar";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactSection from "@/components/ContactSection";
import CommandPalette from "@/components/CommandPalette";
import { useState } from "react";

export default function ProjetosPage() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  return (
    <>
      <Navbar onOpenCommandPalette={() => setIsPaletteOpen(true)} />
      <main className="flex-grow pt-16">
        <ProjectsShowcase />
        <ContactSection />
      </main>
      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
      />
    </>
  );
}
