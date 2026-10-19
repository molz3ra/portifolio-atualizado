"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experiencias() {
  return (
    <section id="experiencias" className="py-20 border-b border-[#333]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center"
        >
          Experiências
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#111] p-8 rounded-xl border-l-4 border-l-[var(--color-primary)] border-y border-y-[#222] border-r border-r-[#222] shadow-lg relative overflow-hidden group hover:border-y-[var(--color-primary-hover)] hover:border-r-[var(--color-primary-hover)] transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#1a1a1a] rounded-lg group-hover:bg-[var(--color-primary)] transition-colors">
                <Briefcase size={24} className="text-[var(--color-primary)] group-hover:text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#e3e2e2]">Freelancer - Full Stack</h3>
            </div>
            <span className="text-sm font-mono text-[var(--color-primary)] bg-[rgba(14,79,177,0.1)] px-3 py-1 rounded-full whitespace-nowrap">
              Desde 2024 - Presente
            </span>
          </div>

          <div className="relative z-10 text-[#a0a0a0] leading-relaxed">
            <p className="mb-4">
              Desenvolvimento de aplicações web completas (Front-end e Back-end) para
              diversos clientes. Expertise em arquitetura de sistemas, otimização de
              performance e entrega de soluções escaláveis. Experiência em:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Desenvolvimento de plataformas e SaaS</li>
              <li>APIs REST com Node.js e Python</li>
              <li>Interfaces responsivas com React/Next.js</li>
              <li>Integração com serviços externos (WhatsApp, APIs de pagamento)</li>
            </ul>
          </div>
          
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-3xl group-hover:opacity-[0.08] transition-opacity duration-500"></div>
        </motion.div>
      </div>
    </section>
  );
}
