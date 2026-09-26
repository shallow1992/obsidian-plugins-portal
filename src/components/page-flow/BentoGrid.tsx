import React from "react";
import { Zap, ShieldCheck, Compass, GitMerge, RotateCcw, Activity } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs uppercase font-bold tracking-widest text-purple-400">
            Engineered for Flow
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Features that make reading feel like flight
          </p>
          <p className="text-sm sm:text-base text-zinc-400">
            Every millimeter of motion, acceleration curve, and boundary transition is calibrated
            to keep your eyes relaxed and focused.
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
                Hybrid Single-Key Navigation
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Tapping forward scrolls down through your note content. When the bottom is reached,
                the very next tap automatically opens the next note in your folder, placing you
                instantly at the top. Symmetrical backward glide brings you up to the bottom of the previous note.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  Default: 85% Viewport Step
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  Fine-tunable 10% - 100%
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
                Continuous Momentum
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Rapidly tapping your hotkey ramps up cruising speed smoothly. Velocity and distance
                scale in lockstep so you never feel stuttering or sudden pauses.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>Acceleration</span>
              <span className="text-amber-400 font-bold">Up to 5.0x Cruise</span>
            </div>
          </div>

          {/* Card 3: Instant Direction Brake */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                Instant Reverse Brake
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Cruising too fast? Tapping the opposite key immediately cancels all forward momentum
                and halts the viewport on a dime. Zero accidental jumps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>Momentum Cancel</span>
              <span className="text-red-400 font-bold">Instant 0.0s Stop</span>
            </div>
          </div>

          {/* Card 4: CodeMirror 6 Resistant & Explorer Order */}
          <div className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="space-y-4 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                File Explorer Sync &amp; Layout-Shift Shield
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Page Flow accurately mirrors your Obsidian File Explorer order—including manual
                rearrangements and custom sort modes. It is strictly scoped to the active folder
                and resists CodeMirror 6 virtual height recalculations in documents with 50,000+ words.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  Strict Folder Boundary
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  CM6 Viewport Math
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">
                  Fly-by Protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
