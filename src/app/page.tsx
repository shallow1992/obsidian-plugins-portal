import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-medium text-purple-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Obsidian Craft Plugins Suite</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elevate your Obsidian vault with{" "}
            <span className="text-gradient-purple">precision tools</span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            Beautifully designed, keyboard-optimized, and deeply integrated Obsidian plugins
            crafted to eliminate friction and keep you in deep flow.
          </p>
        </div>

        {/* Featured Plugin: Page Flow */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-xs uppercase font-bold tracking-widest text-zinc-500 mb-4 px-1">
            Featured Release
          </h2>

          <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      Page Flow
                    </h3>
                    <p className="text-xs text-zinc-400">Smooth Hybrid Note Glider</p>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Scroll page-by-page and seamlessly transition into the next file with single hotkeys.
                  Glide through whole folders without ever touching your mouse.
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                    Keyboard-First
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                    Continuous Momentum
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                    Fly-by Safe
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <Link
                  href="/plugins/page-flow"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/25"
                >
                  <span>Explore Page Flow</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="obsidian://show-plugin?id=page-flow"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 font-medium text-sm border border-zinc-700 transition-all"
                >
                  <span>Install in Obsidian</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-xl space-y-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <h4 className="font-semibold text-white">Pure Performance</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Zero bloat, zero delay. Engineered specifically for massive vaults with thousands of notes.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-xl space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="font-semibold text-white">Local & Private</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your notes never leave your machine. Strictly adhering to Obsidian security guidelines.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-xl space-y-2">
            <Compass className="w-5 h-5 text-purple-400" />
            <h4 className="font-semibold text-white">Frictionless Navigation</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Thoughtful keyboard workflows that keep your hands on the home row.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
