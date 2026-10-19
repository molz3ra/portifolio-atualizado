"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { siteData } from "@/data/portfolio-data";
import { Mail, Copy, Check, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(siteData.email).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contato" className="py-28 border-t border-white/[0.08] relative bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-4 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest">{t("eyebrow")}</span>
        </div>

        {/* Big Headline */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
          {t("title")}
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10">
          {t("subtitle")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href={`mailto:${siteData.email}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all interactive-tap shadow-[0_0_24px_rgba(245,158,11,0.25)] hover:shadow-[0_0_32px_rgba(245,158,11,0.4)]"
          >
            <Mail className="w-4 h-4" />
            <span>{t("email_btn")}</span>
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.2] text-sm text-zinc-200 transition-all interactive-tap font-mono"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">{siteData.email}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>{t("copy_btn")}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-6 pt-10 border-t border-white/[0.08] mb-12">
          <a
            href={siteData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
          <a
            href={siteData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
          <a
            href={siteData.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <InstagramIcon size={16} />
            <span>Instagram</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-zinc-500 text-xs font-mono leading-relaxed">
          © {new Date().getFullYear()} Lucas Mol. {t("footer_note")}
        </p>

      </div>
    </section>
  );
}
