"use client";

import { motion } from "framer-motion";

const certsData = [
  { icon: "🎓", title: "FIAP", desc: "Estudante de Sistemas de Informação" },
  { icon: "🌐", title: "Responsive Web Development", desc: "FIAP - mai 2026" },
  { icon: "🎨", title: "Curso de Front End", desc: "FIAP" },
  { icon: "🔒", title: "Cybersecurity Hacker Skills", desc: "FIAP - 120h | nov 2025" },
  { icon: "🎯", title: "Leadership Communication", desc: "FIAP - mar 2026" },
  { icon: "👨‍💼", title: "Leadership & Corporate", desc: "FIAP - mar 2026" },
  { icon: "☁️", title: "Certificado AWS", desc: "Udemy - out 2025" },
  { icon: "🐍", title: "Python Básico ao Avançado", desc: "Udemy - out 2025" },
  { icon: "☕", title: "Curso Java COMPLETO", desc: "Udemy - dez 2025 | 54h" },
  { icon: "🗄️", title: "SQL Do Zero ao Avançado", desc: "Udemy - out 2025" },
  { icon: "📊", title: "Power BI", desc: "Udemy - out 2025" },
  { icon: "📈", title: "Excel Avançado", desc: "Udemy - set 2025" },
  { icon: "🎨", title: "Design Gráfico", desc: "FIAP - nov 2025" },
  { icon: "🎨", title: "Pro Figma | UI Design", desc: "Udemy - nov 2025" },
  { icon: "📐", title: "AutoCAD Especialista", desc: "Udemy - dez 2025" },
  { icon: "🖼️", title: "Adobe Photoshop", desc: "Udemy - out 2025" },
  { icon: "✏️", title: "Adobe InDesign", desc: "Udemy - out 2025" },
  { icon: "📱", title: "WordPress Design", desc: "Udemy - out 2025" },
  { icon: "💰", title: "Tráfego Pago (6 Certs)", desc: "Alura" },
  { icon: "👥", title: "Fast MBA Lead", desc: "Udemy - out 2025" },
  { icon: "💬", title: "Liderança e Gestão", desc: "Udemy - out 2025" },
];

export default function Formacao() {
  return (
    <section id="formacao" className="py-20 border-b border-[#333]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center"
        >
          Formação e Certificados
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {certsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 8) * 0.05 }}
              className="bg-[#111] p-6 rounded-xl border border-[#222] hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center group"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cert.icon}</span>
              <h3 className="text-sm sm:text-base font-semibold text-[#e3e2e2] mb-1 group-hover:text-[var(--color-primary)] transition-colors">{cert.title}</h3>
              <p className="text-xs text-[#a0a0a0]">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
