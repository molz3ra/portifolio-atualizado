"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/ui/text-scramble";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projetos", href: "/projetos" }
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isTrigger, setIsTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        <Link 
          href="/" 
          className="text-xl font-bold text-white tracking-tighter flex items-center gap-2 group"
          onMouseEnter={() => setIsTrigger(true)}
          onMouseLeave={() => setIsTrigger(false)}
        >
          <div className="w-8 h-8 bg-[var(--color-primary)]/20 rounded-lg flex items-center justify-center border border-[var(--color-primary)]/50 group-hover:bg-[var(--color-primary)] transition-colors">
            <span className="text-[var(--color-primary)] group-hover:text-black font-black leading-none">M</span>
          </div>
          <TextScramble
            as="span"
            speed={0.04}
            duration={1.2}
            trigger={isTrigger}
            onScrambleComplete={() => setIsTrigger(false)}
          >
            Molz3ra Corp.
          </TextScramble>
        </Link>
        <ul className="flex items-center gap-2 sm:gap-6 bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors px-4 py-2 rounded-full block ${
                    isActive ? "text-black" : "text-[var(--color-secondary-text)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-bg"
                      className="absolute inset-0 bg-[var(--color-primary)] rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
