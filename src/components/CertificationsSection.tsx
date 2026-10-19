"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { certificationsData, CertificationItem } from "@/data/portfolio-data";
import { Award, Check, Copy, ExternalLink, ShieldCheck, Clock, Sparkles } from "lucide-react";

export default function CertificationsSection() {
  const t = useTranslations("Certifications");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCerts = certificationsData.filter((cert) => {
    if (selectedFilter === "all") return true;
    return cert.institution.toLowerCase() === selectedFilter.toLowerCase();
  });

  const handleCopyCredential = (id: string, code: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getInstitutionStyle = (inst: CertificationItem["institution"]) => {
    switch (inst) {
      case "FIAP":
        return {
          badge: "bg-rose-500/10 text-rose-300 border-rose-500/20",
          glow: "hover:border-rose-500/30"
        };
      case "Udemy":
        return {
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
          glow: "hover:border-purple-500/30"
        };
      case "Alura":
        return {
          badge: "bg-sky-500/10 text-sky-300 border-sky-500/20",
          glow: "hover:border-sky-500/30"
        };
      default:
        return {
          badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
          glow: "hover:border-amber-500/30"
        };
    }
  };

  return (
    <section id="certificados" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest">{t("eyebrow")}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t("title")}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-[46ch] font-light">
            {t("subtitle")}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { key: "all", label: `${t("filter_all")} (${certificationsData.length})` },
            { key: "FIAP", label: `FIAP (${certificationsData.filter(c => c.institution === "FIAP").length})` },
            { key: "Udemy", label: `Udemy (${certificationsData.filter(c => c.institution === "Udemy").length})` },
            { key: "Alura", label: `Alura (${certificationsData.filter(c => c.institution === "Alura").length})` }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all interactive-tap ${
                selectedFilter === tab.key
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-[0_0_16px_rgba(245,158,11,0.25)]"
                  : "bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] text-zinc-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredCerts.map((cert) => {
              const styles = getInstitutionStyle(cert.institution);
              const isCopied = copiedId === cert.id;

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl glass-panel p-6 border border-white/[0.08] flex flex-col justify-between transition-all group ${styles.glow}`}
                >
                  <div>
                    {/* Top Meta Line: Institution & Hours */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider border ${styles.badge}`}>
                        {cert.institution}
                      </span>

                      <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                        {cert.hours && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300">
                            <Clock className="w-3 h-3 text-amber-400" />
                            {cert.hours}
                          </span>
                        )}
                        <span className="text-zinc-500">{cert.date}</span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {cert.name}
                    </h3>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential & Validation Footer */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2 text-xs">
                    {cert.credential ? (
                      <div className="flex items-center gap-2 max-w-[200px] sm:max-w-[240px]">
                        <button
                          onClick={() => handleCopyCredential(cert.id, cert.credential!)}
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 hover:text-amber-300 transition-colors truncate"
                          title="Clique para copiar credencial"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span className="text-emerald-300 font-medium">{t("copied")}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                              <span className="truncate">{cert.credential}</span>
                            </>
                          )}
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                        FIAP Nano Course
                      </span>
                    )}

                    {cert.validationUrl && (
                      <a
                        href={cert.validationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors shrink-0"
                        title={t("verify_tooltip")}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
