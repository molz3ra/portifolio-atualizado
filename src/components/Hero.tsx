"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/portfolio-data";
import { 
  ArrowDown, 
  Copy, 
  Check, 
  Terminal as TerminalIcon, 
  Activity, 
  BookOpen, 
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export default function Hero() {
  const t = useTranslations("Hero");
  const tPassport = useTranslations("Passport");
  
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"terminal" | "metrics" | "philosophy">("terminal");
  const [currentTime, setCurrentTime] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: "whoami", output: "Lucas Mol — Full Stack Engineer (React, Next.js, Node.js, Java)" }
  ]);

  // Live Brazil Clock (UTC-3)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat("pt-BR", options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(siteData.email).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleCommand = (cmd: string) => {
    let output = "";
    switch (cmd.toLowerCase()) {
      case "stack":
        output = "React 19, Next.js 16, TypeScript, Node.js, Java (Spring Boot), Python, Tailwind CSS, SQL.";
        break;
      case "projects":
        output = "Novos estudos de caso e projetos full stack em preparação. Acompanhe os commits recentes em github.com/molz3ra";
        break;
      case "certs":
        output = "15 certificações ativas: FIAP (Java 60h, NoSQL 40h, CyberSecurity 120h), Udemy (Spring Boot 54h, AWS), Alura (Growth & Tráfego).";
        break;
      case "contact":
        output = `Email: ${siteData.email} | GitHub: @molz3ra | LinkedIn: /in/mol035`;
        break;
      case "clear":
        setTerminalHistory([]);
        return;
      default:
        output = `Comando '${cmd}' executado com sucesso. Status: 200 OK.`;
    }
    setTerminalHistory((prev) => [...prev, { cmd, output }]);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient gradient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/[0.08] via-amber-500/[0.02] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Headline & Position */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] text-[11px] font-mono text-zinc-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("badge")}</span>
            </motion.div>

            {/* Giant Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6"
            >
              {t("headline_prefix")}
              <span className="text-amber-400 italic font-semibold">{t("headline_highlight")}</span>
              {t("headline_suffix")}
            </motion.h1>

            {/* Bio Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-[62ch] font-light mb-8"
            >
              {t("bio")}
            </motion.p>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm transition-all interactive-tap shadow-[0_0_24px_rgba(245,158,11,0.25)] hover:shadow-[0_0_32px_rgba(245,158,11,0.4)]"
              >
                <span>{t("cta_projects")}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.2] text-sm text-zinc-200 transition-all interactive-tap"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-mono text-xs font-medium">lucasmol.dev@gmail.com</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>{t("cta_contact")}</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Micro Metadata Strip & Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.07] text-xs font-mono text-zinc-400"
            >
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">📍</span>
                <span>Minas Gerais, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">⚡</span>
                <span>60-120 FPS UI</span>
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <a
                  href={siteData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  title="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={siteData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={siteData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  title="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Live Interactive Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl glass-panel p-5 sm:p-6 border border-white/[0.09] shadow-2xl relative overflow-hidden group">
              
              {/* Header: Photo + Telemetry Status */}
              <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.07]">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/40 shadow-inner shrink-0">
                    <Image
                      src="/imgs/foto-perfil.jpg"
                      alt={siteData.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-tight">
                      {siteData.name}
                    </h3>
                    <p className="font-mono text-[11px] text-zinc-400">
                      @molz3ra · Full Stack
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end font-mono text-[11px]">
                  <span className="text-zinc-500 text-[10px] uppercase tracking-wider">{tPassport("timezone_label")}</span>
                  <span className="text-amber-400 font-semibold">{currentTime || "12:00:00"} BRT</span>
                </div>
              </div>

              {/* Interactive Tabs Header */}
              <div className="flex items-center gap-1.5 p-1 bg-black/40 border border-white/[0.06] rounded-xl mb-4">
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "terminal"
                      ? "bg-white/[0.09] text-white font-medium shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{tPassport("tab_terminal")}</span>
                </button>

                <button
                  onClick={() => setActiveTab("metrics")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "metrics"
                      ? "bg-white/[0.09] text-white font-medium shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{tPassport("tab_metrics")}</span>
                </button>

                <button
                  onClick={() => setActiveTab("philosophy")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "philosophy"
                      ? "bg-white/[0.09] text-white font-medium shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{tPassport("tab_philosophy")}</span>
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="bg-black/50 border border-white/[0.06] rounded-xl p-4 min-h-[175px] font-mono text-xs flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === "terminal" && (
                    <motion.div
                      key="terminal"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col h-full justify-between"
                    >
                      <div className="space-y-2 overflow-y-auto max-h-[115px] pr-1">
                        {terminalHistory.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center gap-1.5 text-amber-400">
                              <span className="text-zinc-500">molz3ra:~$</span>
                              <span className="font-semibold">{item.cmd}</span>
                            </div>
                            <div className="text-zinc-300 text-[11px] leading-relaxed pl-3 border-l border-white/[0.1]">
                              {item.output}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Interactive Command Buttons */}
                      <div className="pt-3 border-t border-white/[0.06] mt-2 flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] text-zinc-500">Run:</span>
                        {["stack", "certs", "projects", "contact", "clear"].map((cmd) => (
                          <button
                            key={cmd}
                            onClick={() => handleCommand(cmd)}
                            className="px-2 py-0.5 rounded bg-white/[0.05] hover:bg-amber-400/20 hover:text-amber-300 text-[10px] text-zinc-300 border border-white/[0.08] transition-colors"
                          >
                            {cmd}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "metrics" && (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="grid grid-cols-3 gap-2 h-full items-center text-center"
                    >
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="block font-bold text-lg text-emerald-400">{tPassport("metric_vitals")}</span>
                        <span className="text-[10px] text-zinc-400">{tPassport("metric_vitals_label")}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="block font-bold text-lg text-amber-400">{tPassport("metric_fps")}</span>
                        <span className="text-[10px] text-zinc-400">{tPassport("metric_fps_label")}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="block font-bold text-lg text-cyan-400">{tPassport("metric_arch")}</span>
                        <span className="text-[10px] text-zinc-400">{tPassport("metric_arch_label")}</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "philosophy" && (
                    <motion.div
                      key="philosophy"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col justify-center h-full p-1"
                    >
                      <p className="text-zinc-300 text-xs italic font-serif leading-relaxed">
                        “{tPassport("philosophy_quote")}”
                      </p>
                      <span className="text-right text-[10px] text-zinc-500 font-mono mt-2">— Emil Kowalski on Software Craft</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
