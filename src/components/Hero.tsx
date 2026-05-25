"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FallingPattern from "./FallingPattern";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.6 6.52-7.09 0-1.6-.5-2.9-1.4-3.92.1-.28.6-1.84-.1-3.92 0 0-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45-.7 2.08-.2 3.64-.1 3.92-.9 1.02-1.4 2.32-1.4 3.92 0 5.49 3.34 6.75 6.52 7.09-.8.7-1.1 1.9-1.1 3.03v4"></path></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-20 border-b border-[#333] overflow-hidden">
      <FallingPattern />
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[var(--color-primary)] overflow-hidden shadow-[0_8px_32px_rgba(14,79,177,0.3)] mx-auto">
            <Image
              src="/imgs/foto-perfil.jpg"
              alt="Lucas Mol"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold text-[var(--color-primary)] mb-4"
        >
          Lucas Mol
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl font-semibold text-[var(--color-primary-hover)] mb-8 max-w-2xl"
        >
          Engenheiro de Software com Foco em Produto & Estrategista de Growth
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl text-base sm:text-lg text-[#e3e2e2] leading-relaxed mb-10"
        >
          <p>
            Estudante de Sistemas de Informação na FIAP e desenvolvedor com mentalidade
            multidisciplinar. Meu objetivo é transformar desafios técnicos complexos em produtos
            digitais escaláveis, unindo Engenharia de Software, Design de Interface e
            Estratégias de Growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 sm:gap-6 justify-center"
        >
          <SocialLink href="https://github.com/molz3ra" icon={<GithubIcon />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/mol035" icon={<LinkedinIcon />} label="LinkedIn" />
          <SocialLink href="https://instagram.com/ei_mol" icon={<InstagramIcon />} label="Instagram" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 border border-[var(--color-primary)] rounded-md text-[#e3e2e2] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
    >
      {icon}
      <span className="hidden sm:inline font-medium">{label}</span>
    </a>
  );
}
