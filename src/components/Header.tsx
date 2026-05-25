"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Projetos", href: "#projetos" },
  { name: "Experiências", href: "#experiencias" },
  { name: "Formação", href: "#formacao" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-4 shadow-[0_2px_10px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-center">
        <ul className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-sm sm:text-base font-semibold transition-colors px-2 py-1 ${
                    isActive ? "text-[var(--color-primary)]" : "text-[#e3e2e2] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.name}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-primary)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
