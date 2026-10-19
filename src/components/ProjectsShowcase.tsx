"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { projectsData } from "@/data/portfolio-data";
import { siteData } from "@/data/portfolio-data";
import { ArrowUpRight, Sparkles, Code2, Cpu, Zap, Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectsShowcase() {
  const t = useTranslations("Projects");

  return (
    <section id="projetos" className="py-24 border-t border-white/[0.08] relative">
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

        {/* Dynamic Project Rendering or In-Progress Architecture Slate */}
        {projectsData.length > 0 ? (
          <div className="space-y-12">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl glass-panel glass-panel-hover overflow-hidden border border-white/[0.09] grid grid-cols-1 lg:grid-cols-12 group"
              >
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest mb-3">
                      <span>{project.tag}</span>
                      <span>·</span>
                      <span className="text-zinc-500">{project.year}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {project.category}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs transition-all interactive-tap"
                      >
                        <span>{t("view_live")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-zinc-300 transition-all interactive-tap"
                      >
                        <GithubIcon size={14} />
                        <span>{t("view_code")}</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-zinc-950/80 border-t lg:border-t-0 lg:border-l border-white/[0.08]">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty / In-Preparation Architectural Showcase Card */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/[0.09] relative overflow-hidden"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-mono text-amber-300 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <span>{t("empty_badge")}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                {t("empty_title")}
              </h3>

              {/* Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-10 max-w-2xl">
                {t("empty_description")}
              </p>

              {/* 3 Engineering Pillars for Upcoming Work */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 mb-3">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {t("feature_1_title")}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {t("feature_1_desc")}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {t("feature_2_title")}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {t("feature_2_desc")}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 mb-3">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {t("feature_3_title")}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {t("feature_3_desc")}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={siteData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs transition-all interactive-tap shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                >
                  <GithubIcon size={15} />
                  <span>{t("empty_cta_github")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-zinc-300 transition-all interactive-tap"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{t("empty_cta_contact")}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
