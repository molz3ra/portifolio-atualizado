"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), { ssr: false });
import BentoCard from "./BentoCard";
import { siteData, skillsData, projectsData } from "@/data/portfolio-data";

// Extracted SVGs
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.6 6.52-7.09 0-1.6-.5-2.9-1.4-3.92.1-.28.6-1.84-.1-3.92 0 0-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45-.7 2.08-.2 3.64-.1 3.92-.9 1.02-1.4 2.32-1.4 3.92 0 5.49 3.34 6.75 6.52 7.09-.8.7-1.1 1.9-1.1 3.03v4"></path></svg>
);
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const CodeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const ArrowUpRightIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);
const SparklesIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
);

export default function BentoGrid() {
  const [activeSkillTab, setActiveSkillTab] = useState(2); // Inicia na aba de Design (índice 2 do array)

  // Separando Techs puras de Habilidades Multidisciplinares
  const techSkills = skillsData.slice(0, 2); // Frontend e Backend
  const multiSkills = skillsData.slice(2); // Design, Data, Growth, Liderança

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 max-w-7xl">
      <div className="bento-grid-wrapper grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)]">
        
        {/* HERO CARD - Spans 2 columns */}
        <BentoCard className="md:col-span-2 row-span-2 justify-between" delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[var(--color-primary)]">
              <Image 
                src="/imgs/foto-perfil.jpg" 
                alt={siteData.name} 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div>
              <motion.div 
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-[var(--color-primary)] uppercase bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20"
              >
                Disponível para Projetos
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight text-glow mb-2">
                {siteData.name}
              </h1>
              <h2 className="text-lg sm:text-xl text-[var(--color-secondary-text)] font-light">
                {siteData.role}
              </h2>
            </div>
          </div>
          
          <p className="text-[#cbd5e1] leading-relaxed max-w-2xl text-sm sm:text-base font-light">
            {siteData.description}
          </p>
          
          <div className="flex gap-4 mt-8 flex-wrap">
            <SocialButton href={siteData.social.github} icon={<GithubIcon size={18} />} label="GitHub" />
            <SocialButton href={siteData.social.linkedin} icon={<LinkedinIcon size={18} />} label="LinkedIn" />
            <SocialButton href={siteData.social.instagram} icon={<InstagramIcon size={18} />} label="Instagram" />
          </div>
        </BentoCard>

        {/* STACK/SKILLS CARD */}
        <BentoCard className="md:col-span-1 row-span-2 flex flex-col" delay={0.2}>
          <div className="flex items-center gap-3 mb-6 text-[var(--color-primary)]">
            <CodeIcon size={24} />
            <h3 className="text-xl font-bold text-white">Engenharia de Software</h3>
          </div>
          <div className="flex flex-col gap-6 flex-grow overflow-y-auto pr-2 custom-scrollbar">
            {techSkills.map((group, idx) => (
              <div key={idx}>
                <h4 className="text-sm text-[var(--color-secondary-text)] mb-3">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium text-white/90 bg-white/5 border border-white/20 rounded-md hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* HABILIDADES MULTIDISCIPLINARES CARD */}
        <BentoCard className="md:col-span-2 row-span-2" delay={0.3}>
          <div className="flex items-center gap-3 mb-6 text-[var(--color-primary)]">
            <SparklesIcon size={24} />
            <h3 className="text-xl font-bold text-white">Habilidades Multidisciplinares</h3>
          </div>
          
          <div className="flex flex-col h-full">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-white/20 pb-4">
              {multiSkills.map((group, idx) => {
                const isActive = activeSkillTab === (idx + 2);
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSkillTab(idx + 2)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/50' 
                        : 'bg-transparent text-[var(--color-secondary-text)] border border-transparent hover:text-white hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    {group.category}
                  </button>
                );
              })}
            </div>
            
            {/* Tab Content */}
            <div className="flex-grow relative min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-wrap content-start items-start gap-3 absolute inset-0"
                >
                  {skillsData[activeSkillTab].skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-[#0a0a0f] text-sm text-white/90 rounded-lg border border-white/20 shadow-inner"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </BentoCard>

        {/* PROJECTS SHOWCASE CARD */}
        <Link href="/projetos" className="md:col-span-1 row-span-2 outline-none">
          <BentoCard className="h-full relative group cursor-pointer overflow-hidden" delay={0.4}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white relative z-20">Projetos em Destaque</h3>
              <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/20 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-300 relative z-20 shadow-xl backdrop-blur-md">
                <ArrowUpRightIcon size={20} />
              </div>
            </div>
            
            <div className="flex-grow relative w-full h-[250px] sm:h-auto overflow-hidden rounded-xl border border-white/10 bg-black/40">
              {/* Fade masks */}
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0a0a0f] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-10 pointer-events-none flex items-end justify-center pb-3">
                <span className="text-[var(--color-primary)] font-semibold text-sm drop-shadow-md">Ver todos →</span>
              </div>
              
              {/* Marquee vertical container */}
              <div className="absolute inset-x-0 top-0 flex flex-col gap-3 p-3 animate-marquee-vertical group-hover:pause">
                {[...projectsData, ...projectsData].map((project, i) => (
                  <div key={i} className="relative h-32 w-full rounded-lg overflow-hidden border border-white/10 shrink-0">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[1px] group-hover:blur-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3">
                      <p className="text-white text-sm font-bold truncate">{project.title}</p>
                      <p className="text-white/60 text-xs truncate mt-0.5">{project.techStack.slice(0,2).join(" • ")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </Link>

        {/* GITHUB CONTRIBUTIONS CARD */}
        <BentoCard className="md:col-span-3 flex flex-col" delay={0.5}>
          <div className="flex items-center gap-3 mb-8 text-[var(--color-primary)]">
            <GithubIcon size={24} />
            <h3 className="text-xl font-bold text-white">Contribuições no GitHub</h3>
          </div>
          
          <div className="w-full overflow-x-auto flex justify-center custom-scrollbar pb-4">
            <div className="min-w-[800px] flex justify-center p-4 bg-black/40 rounded-xl border border-white/10">
              <GitHubCalendar 
                username="molz3ra" 
                colorScheme="dark"
                theme={{
                  dark: ['rgba(255,255,255,0.05)', '#0891b2', '#06b6d4', '#22d3ee', '#67e8f9'], // Do cinza escuro para o Neon Cyan (Primary)
                }}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
              />
            </div>
          </div>
        </BentoCard>

      </div>
    </div>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full text-white text-sm font-medium transition-all hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
