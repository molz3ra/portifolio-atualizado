"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/data/portfolio-data";
import BentoCard from "@/components/BentoGrid/BentoCard";
import Footer from "@/components/Footer";

const ExternalLinkIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.6 6.52-7.09 0-1.6-.5-2.9-1.4-3.92.1-.28.6-1.84-.1-3.92 0 0-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45-.7 2.08-.2 3.64-.1 3.92-.9 1.02-1.4 2.32-1.4 3.92 0 5.49 3.34 6.75 6.52 7.09-.8.7-1.1 1.9-1.1 3.03v4"></path></svg>
);

const CheckCircleIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

export default function ProjetosPage() {
  return (
    <>
      <main className="flex-grow relative min-h-screen pb-24">
        
        <div className="pt-32 container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight text-glow mb-4">
              Projetos em <span className="text-[var(--color-primary)]">Destaque</span>
            </h1>
            <p className="text-lg text-[var(--color-secondary-text)] max-w-2xl mx-auto">
              Cases reais onde apliquei Engenharia de Software, UI/UX e Estratégias de Growth para resolver problemas complexos.
            </p>
          </motion.div>

          <div className="flex flex-col gap-10">
            {projectsData.map((project, index) => (
              <BentoCard 
                key={index} 
                delay={0.1 * index}
                className="w-full flex flex-col lg:flex-row p-0 overflow-hidden group"
              >
                {/* Lado Esquerdo: Capa do Projeto */}
                <div className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden flex-shrink-0 bg-black/60">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      {/* Gradiente dinâmico baseado na cor do projeto se não tiver imagem */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 font-bold text-3xl tracking-widest uppercase rotate-[-45deg] select-none">
                          IMG PLACEHOLDER
                        </span>
                      </div>
                    </>
                  )}
                  {/* Overlay Escuro para dar o efeito glass em cima da imagem */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Lado Direito: Informações */}
                <div className="w-full lg:w-3/5 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                    <h3 className="text-[var(--color-primary)] font-medium text-lg mb-4">{project.pitch}</h3>
                    <p className="text-[var(--color-secondary-text)] text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <SparklesIcon size={18} className="text-[var(--color-primary)]" />
                        Principais Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-secondary-text)]">
                            <CheckCircleIcon size={16} className="text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-black font-bold rounded-lg hover:bg-[#08c5e6] transition-colors hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                      >
                        <ExternalLinkIcon size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <GithubIcon size={18} />
                        Repositório
                      </a>
                    )}
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Sparkles local apenas para essa página
const SparklesIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
);
