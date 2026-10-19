"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.6 6.52-7.09 0-1.6-.5-2.9-1.4-3.92.1-.28.6-1.84-.1-3.92 0 0-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45-.7 2.08-.2 3.64-.1 3.92-.9 1.02-1.4 2.32-1.4 3.92 0 5.49 3.34 6.75 6.52 7.09-.8.7-1.1 1.9-1.1 3.03v4"></path></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const contacts = [
  {
    href: "mailto:lucasmolrodrigues2003@gmail.com",
    icon: <Mail size={24} />,
    label: "Email",
    value: "lucasmolrodrigues2003@gmail.com",
  },
  {
    href: "https://wa.me/5535999789761",
    icon: <MessageCircle size={24} />,
    label: "WhatsApp",
    value: "+55 (35) 9 9978-9761",
  },
  {
    href: "https://linkedin.com/in/mol035",
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    value: "linkedin.com/in/mol035",
  },
  {
    href: "https://github.com/molz3ra",
    icon: <GithubIcon />,
    label: "GitHub",
    value: "github.com/molz3ra",
  },
];

export default function Contato() {
  return (
    <section id="contato" className="py-20 border-b border-[#333]">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center"
        >
          Contato
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-[#222] hover:border-[var(--color-primary)] hover:bg-[#161616] hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#1a1a1a] rounded-lg text-[#e3e2e2] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                {contact.icon}
              </div>
              <div className="overflow-hidden">
                <span className="block text-[var(--color-primary)] font-semibold text-sm mb-1">
                  {contact.label}
                </span>
                <p className="text-[#a0a0a0] text-sm truncate">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
