import React from "react";
import { Zap, ShieldCheck, GitMerge, RotateCcw } from "lucide-react";
import { Dictionary } from "@/locales";

interface BentoGridProps {
  dict: Dictionary["pageFlow"]["bento"];
}

export default function BentoGrid({ dict }: BentoGridProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs uppercase font-bold tracking-widest text-purple-400">
            {dict.badge}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {dict.title}
          </p>
          <p className="text-sm sm:text-base text-zinc-400">
            {dict.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Large Featured - Hybrid Navigation */}
          <div className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="space-y-4 max-w-md relative z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <GitMerge className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {dict.hybrid.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {dict.hybrid.desc}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  {dict.hybrid.tag1}
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  {dict.hybrid.tag2}
                </span>
              </div>
            </div>

            {/* Visual Decorative Diagram */}
            <div className="mt-8 md:mt-0 md:absolute md:right-6 md:bottom-6 w-full md:w-56 h-36 rounded-xl bg-zinc-950/60 border border-zinc-800/80 p-3.5 flex flex-col justify-between text-xs font-mono text-zinc-500">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800 pb-1.5">
                <span>Note_A.md</span>
                <span className="text-purple-400">Scroll (85%)</span>
              </div>
              <div className="py-2 text-center text-zinc-400 text-xs flex items-center justify-center gap-1">
                <span>↓ Bottom Reached</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-emerald-400 bg-purple-950/30 p-1.5 rounded border border-purple-800/40">
                <span>Note_B.md</span>
                <span>Open Next (Top)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Momentum Physics */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                {dict.momentum.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {dict.momentum.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>{dict.momentum.statLabel}</span>
              <span className="text-amber-400 font-bold">{dict.momentum.statVal}</span>
            </div>
          </div>

          {/* Card 3: Instant Direction Brake */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                {dict.brake.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {dict.brake.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>{dict.brake.statLabel}</span>
              <span className="text-red-400 font-bold">{dict.brake.statVal}</span>
            </div>
          </div>

          {/* Card 4: CodeMirror 6 Resistant & Explorer Order */}
          <div className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="space-y-4 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                {dict.shield.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {dict.shield.desc}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  {dict.shield.tag1}
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  {dict.shield.tag2}
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  {dict.shield.tag3}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
