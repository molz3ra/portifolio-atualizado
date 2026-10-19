"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "💻 Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Web"],
  },
  {
    category: "⚙️ Backend",
    skills: ["Node.js", "Python", "Java", "FastAPI", "Spring Boot", "SQL", "MySQL", "APIs REST"],
  },
  {
    category: "🎨 Design",
    skills: ["Figma", "UI/UX Design", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Web Design", "Branding", "Canva"],
  },
  {
    category: "📊 Data & BI",
    skills: ["Power BI", "Python", "Pandas", "SQL", "Excel Avançado", "DAX", "ETL", "Machine Learning"],
  },
  {
    category: "🚀 Growth & Marketing",
    skills: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "TikTok Ads", "Growth Hacking", "Tráfego Pago", "Análise de Dados"],
  },
  {
    category: "👥 Liderança & Gestão",
    skills: ["Liderança", "Gestão de Pessoas", "Comunicação Efetiva", "Feedback", "Metodologias Ágeis", "Scrum", "OKR", "KPIs"],
  },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 border-b border-[#333]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center"
        >
          Habilidades e Competências
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111] p-6 rounded-xl border border-[#222]"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1a1a1a] text-sm text-[#e3e2e2] rounded-full border border-[#333] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
