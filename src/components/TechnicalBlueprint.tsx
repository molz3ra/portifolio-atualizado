"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { stackCategories } from "@/data/portfolio-data";
import { Cpu, Layers, BarChart3, Database, ShieldCheck, Palette, GitCommit, Sparkles, RefreshCw } from "lucide-react";

// Use ActivityCalendar dynamically to avoid SSR SVG mismatches
const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-[140px] flex items-center justify-center text-xs font-mono text-zinc-500">
        <span className="animate-pulse">Sincronizando commits do GitHub...</span>
      </div>
    ),
  }
);

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function TechnicalBlueprint() {
  const t = useTranslations("Stack");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [totalCount, setTotalCount] = useState<number>(167);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastSync, setLastSync] = useState<string>("Ao vivo");

  const fetchContributions = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/github-contributions?year=2026", {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.activities) && data.activities.length > 0) {
          setActivities(data.activities);
          setTotalCount(data.total || 165);
          setLastSync(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        }
      }
    } catch (e) {
      console.warn("Fallback to existing state", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContributions();

    // Auto-sync polling every 2 minutes for real-time GitHub push updates
    const interval = setInterval(fetchContributions, 120000);

    // Auto-sync immediately when user switches tabs back to the portfolio after pushing to git
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        fetchContributions();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [fetchContributions]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Layers className="w-5 h-5 text-amber-400" />;
      case "backend":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "cloud_sec":
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case "design":
        return <Palette className="w-5 h-5 text-rose-400" />;
      case "business":
        return <BarChart3 className="w-5 h-5 text-amber-300" />;
      default:
        return <Cpu className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section id="stack" className="py-24 border-t border-white/[0.08] relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("eyebrow")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              {t("title")}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light">
            {t("subtitle")}
          </p>
        </div>

        {/* 6 Category Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stackCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="rounded-2xl glass-panel p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-amber-400 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm mb-6 font-light leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 group-hover:border-white/[0.15] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>0{idx + 1} // DOMAIN</span>
                <span className="text-amber-400/80">COMPETENCY READY</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive GitHub Commit Telemetry & Heatmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/[0.08] flex flex-col gap-6"
        >
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <GitCommit className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display font-bold text-white text-base sm:text-lg">
                    {t("github_title")}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active · 100% Sincronizado
                  </span>
                </div>
                <p className="text-zinc-400 text-xs font-light max-w-xl">
                  {t("github_subtitle")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 self-stretch md:self-auto justify-between md:justify-end pt-4 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
              <div className="text-left md:text-right font-mono">
                <span className="block text-xl font-bold text-white">
                  {totalCount}+
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  Commits em 2026
                </span>
              </div>

              <a
                href="https://github.com/molz3ra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-zinc-200 transition-all interactive-tap"
              >
                @molz3ra ↗
              </a>
            </div>
          </div>

          {/* GitHub Heatmap Calendar Section */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col gap-3">
            {/* Top Sub-header matching GitHub UI */}
            <div className="flex items-center justify-between px-1">
              <span className="text-sm font-semibold text-zinc-200 font-mono">
                {totalCount} contributions in 2026
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => fetchContributions()}
                  title="Atualizar agora do GitHub"
                  className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoading ? "animate-spin" : ""}`} />
                  <span>Sync {lastSync}</span>
                </button>
              </div>
            </div>

            {/* GitHub Calendar Grid */}
            <div className="w-full overflow-x-auto flex flex-col p-4 sm:p-6 rounded-xl bg-black/40 border border-white/[0.06]">
              <div className="min-w-[760px] max-w-full flex justify-center text-zinc-200">
                {activities.length > 0 ? (
                  <ActivityCalendar
                    data={activities}
                    showWeekdayLabels={["mon", "wed", "fri"]}
                    weekStart={0}
                    colorScheme="dark"
                    theme={{
                      dark: [
                        "rgba(255,255,255,0.04)",
                        "#0e4429",
                        "#006d32",
                        "#26a641",
                        "#39d353",
                      ],
                    }}
                    fontSize={12}
                    blockSize={12}
                    blockMargin={4}
                    showColorLegend={true}
                    showTotalCount={false}
                  />
                ) : (
                  <div className="h-[130px] flex items-center justify-center text-xs font-mono text-zinc-500">
                    <span className="animate-pulse">Sincronizando commits do GitHub...</span>
                  </div>
                )}
              </div>

              {/* GitHub Authentic Footer */}
              <div className="min-w-[760px] flex items-center justify-between pt-3 mt-2 border-t border-white/[0.04] text-[11px] text-zinc-500 font-sans">
                <a
                  href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 hover:underline transition-colors"
                >
                  Learn how we count contributions
                </a>
                <span className="text-zinc-500 font-mono text-[10px]">
                  Atualização automática via GitHub API
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
