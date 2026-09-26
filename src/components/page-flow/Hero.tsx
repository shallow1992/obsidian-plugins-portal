import React from "react";
import Link from "next/link";
import { Compass, Github, Download, Sparkles, ArrowRight } from "lucide-react";
import InteractiveDemo from "./InteractiveDemo";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden text-center">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/60 text-xs font-medium text-purple-300 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Obsidian Community Plugin • v1.0.3 Available</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Turn note reading into a{" "}
            <span className="text-gradient-purple">frictionless flight</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Scroll page-by-page and glide seamlessly to the next note using single hotkeys.
            Inspired by e-book pagers and RSS readers, designed for high-velocity triage.
          </p>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="obsidian://show-plugin?id=page-flow"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Install in Obsidian</span>
          </a>

          <a
            href="https://github.com/HirotakaAsako/obsidian-page-flow"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-semibold text-sm transition-all active:scale-95"
          >
            <Github className="w-4 h-4 text-zinc-400" />
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Dynamic Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Obsidian v1.4.0+ Compatible
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 font-mono">
            Keyboard-First Navigation
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 font-mono">
            Zero Mouse Dependency
          </span>
        </div>

        {/* Live Interactive Simulator Showcase */}
        <div className="pt-8">
          <div className="text-center mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              Interactive Live Playground
            </span>
          </div>
          <InteractiveDemo />
        </div>
      </div>
    </section>
  );
}
