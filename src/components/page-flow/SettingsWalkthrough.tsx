import React from "react";
import { Gauge, Shield, ArrowDownUp } from "lucide-react";
import { Dictionary } from "@/locales";

interface SettingsWalkthroughProps {
  dict: Dictionary["pageFlow"]["settings"];
}

export default function SettingsWalkthrough({ dict }: SettingsWalkthroughProps) {
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
          <p className="text-sm text-zinc-400">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Setting 1: Scroll Percentage */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <ArrowDownUp className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">{dict.percentage.title}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {dict.percentage.desc}
            </p>
            <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800 text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-zinc-400">
                <span>Range</span>
                <span className="text-purple-300">{dict.percentage.range}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Default</span>
                <span className="text-white font-semibold">{dict.percentage.default}</span>
              </div>
            </div>
          </div>

          {/* Setting 2: Acceleration Multiplier */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Gauge className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">{dict.momentum.title}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {dict.momentum.desc}
            </p>
            <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800 text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-zinc-400">
                <span>Range</span>
                <span className="text-amber-300">{dict.momentum.range}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Default</span>
                <span className="text-white font-semibold">{dict.momentum.default}</span>
              </div>
            </div>
          </div>

          {/* Setting 3: Queue Safety Cap */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">{dict.queue.title}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {dict.queue.desc}
            </p>
            <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800 text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-zinc-400">
                <span>Range</span>
                <span className="text-red-300">{dict.queue.range}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Default</span>
                <span className="text-white font-semibold">{dict.queue.default}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
