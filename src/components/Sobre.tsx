"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Database, TrendingUp } from "lucide-react";

const expertiseData = [
  {
    icon: <Code2 size={32} className="mb-4 text-[var(--color-primary)]" />,
    title: "Arquitetura & Construção",
    desc: "Especialista no ecossistema JavaScript (React, Next.js, Node.js) e Java/Spring Boot. Foco em Clean Code e princípios S.O.L.I.D.",
  },
  {
    icon: <Palette size={32} className="mb-4 text-[var(--color-primary)]" />,
    title: "Design & Experiência",
    desc: "Background sólido em Design Gráfico (Adobe Suite) e UI/UX (Figma), alinhando performance técnica com experiência visual impactante.",
  },
  {
    icon: <Database size={32} className="mb-4 text-[var(--color-primary)]" />,
    title: "Dados & Inteligência",
    desc: "Uso Python, SQL e Power BI para análise de KPIs e ciência de dados, com experiência em Machine Learning para predição de mercado.",
  },
  {
    icon: <TrendingUp size={32} className="mb-4 text-[var(--color-primary)]" />,
    title: "Growth & Escala",
    desc: "Domínio de Tráfego Pago e Growth Hacking para validar e escalar produtos digitais.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 border-b border-[#333]">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center"
        >
          Sobre Mim
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111] p-8 rounded-xl border border-[#333] hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
