"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/portfolio-data";
import { siteData } from "@/data/portfolio-data";
import { 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Zap, 
  ExternalLink, 
  Lock, 
  CheckCircle2, 
  Layers, 
  Bot, 
  FileText, 
  Eye, 
  Activity,
  ShieldCheck,
  Radio
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectsShowcase() {
  const t = useTranslations("Projects");
  const locale = useLocale();

  // Find featured flagship project (LDA) and secondary projects
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => p.id !== featuredProject?.id);

  // Active view tab state for interactive multi-preview browser mockup
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const previews = featuredProject?.previews || [];
  const currentPreview = previews[activePreviewIndex] || {
    id: "default",
    label: "Preview",
    image: featuredProject?.image || "/imgs/lda-preview.png",
    description: featuredProject?.tagline || ""
  };

  return (
    <section id="projetos" className="py-24 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Atmosphere Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/[0.035] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-48 w-96 h-96 bg-emerald-500/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
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
          <p className="text-zinc-400 text-sm sm:text-base max-w-[50ch] font-light leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FLAGSHIP HERO PROJECT: LDA (Document Intelligence & RAG Studio)          */}
        {/* ========================================================================= */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-panel border border-white/[0.12] overflow-hidden mb-20 shadow-2xl relative group/card"
          >
            {/* Top Status & Architectural Bar */}
            <div className="px-6 py-4 border-b border-white/[0.08] bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Live production pulsing status */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="font-semibold tracking-wide">
                    {locale === "en" ? (featuredProject.statusBadgeEn || featuredProject.statusBadge) : featuredProject.statusBadge}
                  </span>
                </div>

                <span className="hidden sm:inline-block text-zinc-600 font-mono text-xs">/</span>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-mono text-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{t("flagship_badge")}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <span className="text-amber-400 font-medium">{featuredProject.tag}</span>
                <span className="text-zinc-600">·</span>
                <span>{featuredProject.year}</span>
              </div>
            </div>

            {/* Main Content Grid: 12 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column (5 Cols): Technical Specs, Narrative & CTAs */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
                    {featuredProject.title}
                  </h3>
                  
                  <p className="text-amber-400/90 font-mono text-xs sm:text-sm tracking-wide mb-4">
                    {featuredProject.category}
                  </p>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                    {locale === "en" && featuredProject.descriptionEn ? featuredProject.descriptionEn : featuredProject.description}
                  </p>

                  {/* Real Engineering Metrics Bento */}
                  {featuredProject.metrics && (
                    <div className="grid grid-cols-2 gap-2.5 mb-6">
                      {featuredProject.metrics.map((m, i) => (
                        <div 
                          key={i} 
                          className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-amber-400/30 transition-colors"
                        >
                          <div className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                            {m.value}
                          </div>
                          <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                            {locale === "en" && m.labelEn ? m.labelEn : m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights Checklist */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block mb-3">
                      {t("key_highlights")}
                    </span>
                    <ul className="space-y-2">
                      {((locale === "en" && featuredProject.highlightsEn ? featuredProject.highlightsEn : featuredProject.highlights) || []).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-light">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 hover:border-amber-400/40 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-white/[0.08]">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-zinc-950 font-bold text-sm transition-all interactive-tap shadow-[0_0_24px_rgba(245,158,11,0.25)] hover:shadow-[0_0_32px_rgba(245,158,11,0.4)]"
                    >
                      <span>{t("visit_site")}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {featuredProject.repoUrl && (
                    <a
                      href={featuredProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white transition-all interactive-tap"
                    >
                      <GithubIcon size={15} />
                      <span>{t("view_code")}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column (7 Cols): Interactive High-Fidelity Browser Mockup */}
              <div className="lg:col-span-7 bg-[#0b0b0e] p-4 sm:p-8 flex flex-col justify-between">
                
                {/* Browser Window Frame */}
                <div className="rounded-2xl border border-white/[0.12] bg-[#09090c] overflow-hidden shadow-2xl flex flex-col">
                  
                  {/* Browser Chrome Header */}
                  <div className="px-4 py-3 bg-zinc-900/90 border-b border-white/[0.08] flex items-center justify-between gap-3">
                    {/* macOS Window Controls */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-pointer" />
                    </div>

                    {/* Simulated URL Pill with Lock Icon */}
                    <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-zinc-950/80 border border-white/[0.08] text-[11px] font-mono text-zinc-300">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">frontend-livid-five-qdkpx7nmow.vercel.app</span>
                    </div>

                    {/* Direct Test Link */}
                    {featuredProject.liveUrl && (
                      <a 
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                      >
                        <span className="hidden sm:inline">{t("open_new_tab")}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Multi-Preview Interactive View Switcher Tabs */}
                  {previews.length > 0 && (
                    <div className="px-4 py-2 bg-zinc-950/90 border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto scrollbar-none">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mr-1 hidden md:inline">
                        {t("views_label")}:
                      </span>
                      {previews.map((prev, idx) => {
                        const isActive = idx === activePreviewIndex;
                        return (
                          <button
                            key={prev.id}
                            onClick={() => setActivePreviewIndex(idx)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 ${
                              isActive 
                                ? "bg-amber-400 text-zinc-950 font-bold shadow-sm" 
                                : "bg-white/[0.03] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.07]"
                            }`}
                          >
                            <span>{locale === "en" && prev.labelEn ? prev.labelEn : prev.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Main Display Image Frame with AnimatePresence */}
                  <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden group/screen cursor-pointer">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full relative"
                      title={t("visit_site")}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentPreview.id}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={currentPreview.image}
                            alt={currentPreview.label}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover object-top transition-transform duration-700 group-hover/screen:scale-[1.02]"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Interactive Hover Overlay with Launch Cue */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-zinc-950 font-bold text-xs shadow-xl">
                          <span>{t("visit_site")}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Screen Caption Footer */}
                  <div className="p-3 bg-zinc-950 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
                    <span className="truncate">
                      {locale === "en" && currentPreview.descriptionEn 
                        ? currentPreview.descriptionEn 
                        : currentPreview.description}
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* SECONDARY PROJECTS: MAD LAB & SUITE PERFORMANCE (Bento 2-Col Grid)       */}
        {/* ========================================================================= */}
        {secondaryProjects.length > 0 && (
          <div>
            <div className="mb-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t("other_projects_title")}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light mt-1">
                {t("other_projects_subtitle")}
              </p>
            </div>

            <div className={secondaryProjects.length === 1 ? "grid grid-cols-1" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
              {secondaryProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-3xl glass-panel glass-panel-hover border border-white/[0.09] overflow-hidden group ${
                    secondaryProjects.length === 1 ? "grid grid-cols-1 lg:grid-cols-12" : "flex flex-col justify-between"
                  }`}
                >
                  {/* Card Visual Preview */}
                  <div className={`relative overflow-hidden bg-zinc-950/80 ${
                    secondaryProjects.length === 1 
                      ? "lg:col-span-5 min-h-[280px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-white/[0.08]" 
                      : "aspect-[16/9] border-b border-white/[0.08]"
                  }`}>
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes={secondaryProjects.length === 1 ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 768px) 100vw, 50vw"}
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    )}

                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/[0.1] text-[11px] font-mono text-amber-300">
                        {project.tag}
                      </span>
                      {project.statusBadge && (
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 backdrop-blur-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{locale === "en" ? (project.statusBadgeEn || project.statusBadge) : project.statusBadge}</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono text-zinc-400">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className={`p-6 sm:p-8 flex flex-col justify-between ${
                    secondaryProjects.length === 1 ? "lg:col-span-7 flex-1" : "flex-1"
                  }`}>
                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h4>
                      
                      <p className="text-xs font-mono text-amber-400/80 uppercase tracking-wider mb-3">
                        {project.category}
                      </p>

                      <p className="text-zinc-300 text-sm font-light leading-relaxed mb-6">
                        {locale === "en" && project.descriptionEn ? project.descriptionEn : project.description}
                      </p>

                      {/* Metrics if present */}
                      {project.metrics && (
                        <div className="flex flex-wrap gap-3 mb-6">
                          {project.metrics.map((m, i) => (
                            <div key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                              <span className="text-xs font-bold text-white font-display mr-2">{m.value}</span>
                              <span className="text-[10px] font-mono text-zinc-400">
                                {locale === "en" && m.labelEn ? m.labelEn : m.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Highlights */}
                      <ul className="space-y-1.5 mb-6">
                        {((locale === "en" && project.highlightsEn ? project.highlightsEn : project.highlights) || []).map((hl, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-zinc-400 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs transition-all interactive-tap"
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
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
