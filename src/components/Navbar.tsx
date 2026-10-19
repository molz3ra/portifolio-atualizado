"use client";

import { useState, useEffect, useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { siteData } from "@/data/portfolio-data";
import { Command, Globe } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const nextLocale = locale === "pt" ? "en" : "pt";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#08080a]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Brand Identity */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-md bg-white/[0.05] border border-white/[0.12] group-hover:border-amber-500/60 group-hover:bg-amber-500/10 flex items-center justify-center transition-all duration-200">
            <span className="font-mono text-xs font-bold text-amber-400 group-hover:scale-105 transition-transform">LM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-amber-300 transition-colors">
              {siteData.name}
            </span>
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest hidden sm:inline">
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1 rounded-full backdrop-blur-sm">
          <a
            href="#projetos"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
          >
            {t("projects")}
          </a>
          <a
            href="#stack"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
          >
            {t("stack")}
          </a>
          <a
            href="#certificados"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
          >
            {t("certifications")}
          </a>
          <a
            href="#trajetoria"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
          >
            {t("experience")}
          </a>
          <a
            href="#contato"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
          >
            {t("contact")}
          </a>
        </nav>

        {/* Right Controls Group */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Status Pulse (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("status")}</span>
          </div>

          {/* Quick Command Palette Button */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.18] text-xs text-zinc-300 transition-all interactive-tap focus:outline-none"
              title="Command Palette (Ctrl + K)"
            >
              <Command className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline font-mono text-[11px] text-zinc-400">Ctrl K</span>
            </button>
          )}

          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            disabled={isPending}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.18] text-xs font-mono font-semibold text-zinc-200 transition-all interactive-tap disabled:opacity-50"
            title={locale === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-amber-400 uppercase">{locale === "pt" ? "EN" : "PT"}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
