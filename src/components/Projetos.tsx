"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projectsData = [
  {
    title: "FarmFresh 2.0 🛒",
    date: "Mai 2026 - Presente",
    desc: "Plataforma para pequenos produtores com checkout direto no WhatsApp. Foco em experiência premium e sem fricção.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Context API"],
    link: "https://github.com/molz3ra",
  },
  {
    title: "Suite Performance 📊",
    date: "Jan 2026",
    desc: "SaaS para gestores de tráfego auditarem landing pages e projetarem ROI/CPA de forma visual e técnica.",
    tags: ["Python", "Marketing Intelligence", "SaaS"],
    link: "https://github.com/molz3ra/SuitePerformance",
  },
  {
    title: "GripVid 🎬",
    date: "Mai 2026",
    desc: "Downloader universal de alta qualidade para redes sociais. Arquitetura assíncrona com processamento de mídia via FFmpeg.",
    tags: ["FastAPI", "Python", "Next.js", "yt-dlp"],
    link: "https://github.com/molz3ra/GripVid",
  },
  {
    title: "A Chapa Burger 🍔",
    date: "",
    desc: "App de delivery com gestão de pedidos complexos e animações fluidas (Framer Motion). Integração com API do WhatsApp.",
    tags: ["React", "Framer Motion", "UX/UI"],
    link: "https://github.com/molz3ra/ACHAPABURGER",
  },
  {
    title: "AuditFlow 🔍",
    date: "",
    desc: "Ferramenta de auditoria técnica (SEO/Core Web Vitals) e captura de leads com geração de relatórios PDF automatizados.",
    tags: ["Web Vitals API", "Node.js", "PDF Gen"],
    link: "https://github.com/molz3ra/AuditFlow",
  },
  {
    title: "SynapseQuant 🧠",
    date: "",
    desc: "Trading quantitativo com Machine Learning (XGBoost). Pipeline de dados completo com APIs da Binance e backtesting.",
    tags: ["Python", "XGBoost", "Pandas", "Finanças"],
    link: "https://github.com/molz3ra/EigenTrade",
  },
  {
    title: "Simulador OEE ⚙️",
    date: "",
    desc: "Aplicação Full Stack para Indústria 4.0. Monitoramento de eficiência industrial em tempo real com dashboards reativos.",
    tags: ["Node.js", "JavaScript", "Dashboards"],
    link: "https://github.com/molz3ra/OEEIndustrialSimulator",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-20 border-b border-[#333]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center"
        >
          Projetos em Destaque
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectType {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  link: string;
}

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#111] p-6 rounded-xl border border-[#333] hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group"
    >
      <div className="mb-4">
        {project.date && (
          <span className="text-xs text-[#a0a0a0] block mb-2 font-mono">
            {project.date}
          </span>
        )}
        <h3 className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] transition-colors">
          {project.title}
        </h3>
      </div>
      
      <p className="text-[#a0a0a0] mb-6 flex-grow">{project.desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {project.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#333] rounded-md text-[#e3e2e2]"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#e3e2e2] hover:text-[var(--color-primary)] transition-colors w-fit"
      >
        Ver Repositório <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}
