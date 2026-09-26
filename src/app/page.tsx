import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Zap, Sparkles, Download, Github, Layers, CheckCircle2 } from "lucide-react";
import { PLUGINS_DATA } from "@/data/plugins";

export default function HomePage() {
  const featuredPlugin = PLUGINS_DATA.find((p) => p.id === "page-flow")!;
  const otherPlugins = PLUGINS_DATA.filter((p) => p.id !== "page-flow");

  return (
    <div className="relative overflow-hidden py-16 sm:py-24 space-y-24">
      {/* Top Background Glow */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        {/* 1. Portal Brand Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/60 text-xs font-medium text-purple-300 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Obsidian Craft Plugins Suite</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elevate your Obsidian vault with{" "}
            <span className="text-gradient-purple">precision tools</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A curated suite of keyboard-optimized, privacy-first, and deeply integrated Obsidian plugins
            crafted to eliminate friction and keep your thoughts flowing.
          </p>
        </div>

        {/* 2. Featured Spotlight: Page Flow */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs uppercase font-bold tracking-widest text-purple-400">
              Featured Release
            </h2>
            <Link
              href="/plugins/page-flow"
              className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Dedicated Showcase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-panel rounded-2xl p-6 sm:p-10 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <Compass className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {featuredPlugin.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-950 border border-purple-700 text-purple-300">
                        {featuredPlugin.status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400">{featuredPlugin.tagline}</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {featuredPlugin.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  {featuredPlugin.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/80 font-mono text-[11px]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link
                  href="/plugins/page-flow"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-xl shadow-purple-600/25 active:scale-95"
                >
                  <span>Interactive LP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={featuredPlugin.obsidianInstallUri}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-700 transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Install in Obsidian</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. All Plugins Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-1">
            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-zinc-500">
                Complete Plugin Suite
              </h2>
              <p className="text-xl font-bold text-white mt-1">Explore All Crafted Plugins</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherPlugins.map((plugin) => (
              <div
                key={plugin.id}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-zinc-700 bg-zinc-800/80 text-zinc-300">
                      {plugin.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {plugin.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {plugin.name}
                  </h3>
                  <p className="text-xs font-medium text-purple-400">{plugin.tagline}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {plugin.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {plugin.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between gap-3 text-xs">
                  <a
                    href={plugin.obsidianInstallUri}
                    className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white font-medium transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-purple-400" />
                    <span>Install</span>
                  </a>

                  <a
                    href={plugin.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Philosophy & Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="glass-panel p-6 rounded-2xl space-y-3 border border-zinc-800/80">
            <Zap className="w-5 h-5 text-amber-400" />
            <h4 className="font-bold text-white text-base">Pure Performance</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Zero telemetry, zero render blocking. Built directly on top of CodeMirror 6 and native Obsidian lifecycle APIs.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-2xl space-y-3 border border-zinc-800/80">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-white text-base">Local & Offline First</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your notes never leave your personal computer. Every operation respects your local vault boundaries.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-2xl space-y-3 border border-zinc-800/80">
            <Compass className="w-5 h-5 text-purple-400" />
            <h4 className="font-bold text-white text-base">Keyboard Centric</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Designed from the ground up for power users who prefer to keep their hands firmly on the home row.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
