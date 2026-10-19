"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { siteData, projectsData } from "@/data/portfolio-data";
import { 
  Search, 
  ArrowRight, 
  ExternalLink, 
  Copy, 
  Check, 
  Globe, 
  Code2, 
  Layers, 
  Briefcase, 
  Mail,
  Award,
  X
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle?: () => void;
}

export default function CommandPalette({ isOpen, onClose, onToggle }: CommandPaletteProps) {
  const t = useTranslations("Palette");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (onToggle) {
          onToggle();
        } else if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onToggle]);

  const toggleLanguage = () => {
    const nextLocale = locale === "pt" ? "en" : "pt";
    router.replace(pathname, { locale: nextLocale });
    onClose();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  // Command items pool
  const items = [
    // Navigation
    {
      id: "nav-projects",
      category: t("navigation_group"),
      label: "Projetos em Destaque",
      icon: <Code2 className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.location.hash = "projetos";
        onClose();
      }
    },
    {
      id: "nav-stack",
      category: t("navigation_group"),
      label: "Stack & Arquitetura",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.location.hash = "stack";
        onClose();
      }
    },
    {
      id: "nav-certs",
      category: t("navigation_group"),
      label: "Certificados & Cursos Técnicos",
      icon: <Award className="w-4 h-4 text-purple-400" />,
      action: () => {
        window.location.hash = "certificados";
        onClose();
      }
    },
    {
      id: "nav-experience",
      category: t("navigation_group"),
      label: "Trajetória & Background",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.hash = "trajetoria";
        onClose();
      }
    },
    {
      id: "nav-contact",
      category: t("navigation_group"),
      label: "Entrar em Contato",
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => {
        window.location.hash = "contato";
        onClose();
      }
    },
    // Projects Live
    ...projectsData.map((p) => ({
      id: `proj-${p.id}`,
      category: t("projects_group"),
      label: p.title,
      icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.open(p.liveUrl, "_blank");
        onClose();
      }
    })),
    // Actions
    {
      id: "act-lang",
      category: t("actions_group"),
      label: t("switch_lang"),
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      action: toggleLanguage
    },
    {
      id: "act-copy",
      category: t("actions_group"),
      label: copied ? "E-mail copiado!" : t("copy_email"),
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />,
      action: copyEmail
    },
    {
      id: "act-github",
      category: t("actions_group"),
      label: t("open_github"),
      icon: <GithubIcon size={16} className="text-zinc-300" />,
      action: () => {
        window.open(siteData.social.github, "_blank");
        onClose();
      }
    },
    {
      id: "act-linkedin",
      category: t("actions_group"),
      label: t("open_linkedin"),
      icon: <LinkedinIcon size={16} className="text-zinc-300" />,
      action: () => {
        window.open(siteData.social.linkedin, "_blank");
        onClose();
      }
    }
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filteredItems[selectedIndex]?.action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-2xl glass-panel border border-white/[0.12] bg-[#0c0c10]/95 shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder={t("placeholder")}
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-xs text-zinc-500 font-mono">
                  {t("no_results")}
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-all ${
                        isSelected
                          ? "bg-amber-400/10 text-white border border-amber-400/30"
                          : "text-zinc-300 hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/[0.04]">
                          {item.icon}
                        </div>
                        <div>
                          <span className="font-medium text-white block">{item.label}</span>
                          <span className="text-[10px] text-zinc-500 font-mono uppercase">{item.category}</span>
                        </div>
                      </div>

                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-amber-400 translate-x-0.5" : "text-zinc-600"}`} />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer shortcuts */}
            <div className="px-4 py-2.5 border-t border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <span>↑↓ Navegar</span>
                <span>↵ Selecionar</span>
                <span>esc Fechar</span>
              </div>
              <span className="text-amber-400/80">Lucas Mol v3</span>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
