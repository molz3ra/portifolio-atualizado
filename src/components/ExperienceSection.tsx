"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { experienceTimeline, educationData } from "@/data/portfolio-data";
import { Briefcase, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const t = useTranslations("Experience");

  return (
    <section id="trajetoria" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
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

        {/* Professional Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {experienceTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/[0.08] flex flex-col justify-between glass-panel-hover"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                      <Briefcase className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="font-mono text-xs text-amber-400/90 font-medium">
                      {item.period}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.06]">
                    {idx === 0 ? "Engenharia de Software" : "Operações & Gestão"}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                <h4 className="text-zinc-400 text-xs font-mono mb-4">
                  {item.organization} · {item.location}
                </h4>

                <p className="text-zinc-300 text-sm font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {item.bulletPoints && (
                  <ul className="space-y-2.5 mb-6">
                    {item.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-400 font-light leading-relaxed">
                        <span className="text-amber-400 mt-0.5 shrink-0">✦</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Degree Feature Card (FIAP) */}
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden group"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
                      {edu.institution}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-mono">
                      {edu.status}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">
                    {edu.internationalTitle} · {edu.period}
                  </span>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-zinc-300 self-stretch lg:self-auto text-center lg:text-right">
                <span className="text-zinc-500 block text-[10px] uppercase">Conclusão Prevista</span>
                <span className="font-bold text-white">Dezembro de 2028</span>
              </div>
            </div>

            <p className="text-zinc-300 text-sm font-light leading-relaxed mb-6 max-w-4xl">
              {edu.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/[0.06]">
              {edu.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
