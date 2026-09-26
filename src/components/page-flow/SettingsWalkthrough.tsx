import React from "react";
import { Sliders, Gauge, Shield, ArrowDownUp } from "lucide-react";

export default function SettingsWalkthrough() {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs uppercase font-bold tracking-widest text-purple-400">
            Precision Tuning
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailor the glide to your exact reading rhythm
          </p>
          <p className="text-sm text-zinc-400">
            Configure step sizes, physics curves, and safety caps right from the plugin settings tab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Setting 1: Scroll Percentage */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <ArrowDownUp className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">Scroll Percentage</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Controls how much of the viewport height advances per tap. Supports fine-tuning down to
              10% for micro-reading up to 100% for full-page flipping.
            </p>
            <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800 text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-zinc-400">
                <span>Range</span>
                <span className="text-purple-300">10% — 100%</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Default</span>
                <span className="text-white font-semibold">85%</span>
              </div>
            </div>
          </div>

          {/* Setting 2: Acceleration Multiplier */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Gauge className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">Cruise Acceleration</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Tunes top speed when repeatedly tapping. Set to 1.0x for a steady, constant scroll,
              or up to 5.0x for ultra-fast document skimming.
            </p>
            <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800 text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-zinc-400">
                <span>Range</span>
                <span className="text-amber-300">1.0x — 5.0x</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Default</span>
                <span className="text-white font-semibold">2.2x</span>
              </div>
            </div>
          </div>

          {/* Setting 3: Queue Safety Cap */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-base">Queue Safety Cap</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Limits the maximum number of queued screens during frantic tapping, preventing runaway
              scroll buffers and ensuring deceleration stays crisp and prompt.
            </p>
            <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800 text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-zinc-400">
                <span>Range</span>
                <span className="text-red-300">1.0 — 15.0 screens</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Default</span>
                <span className="text-white font-semibold">5.0 screens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
