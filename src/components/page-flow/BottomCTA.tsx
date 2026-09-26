import React from "react";
import { Download, Github, Sparkles } from "lucide-react";
import { Dictionary } from "@/locales";

interface BottomCTAProps {
  dict: Dictionary["pageFlow"]["cta"];
}

export default function BottomCTA({ dict }: BottomCTAProps) {
  return (
    <section className="py-20 relative overflow-hidden text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-medium text-purple-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{dict.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {dict.title}
        </h2>

        <p className="text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
          {dict.desc}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="obsidian://show-plugin?id=page-flow"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>{dict.installButton}</span>
          </a>

          <a
            href="https://github.com/HirotakaAsako/obsidian-page-flow"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-semibold text-sm transition-all active:scale-95"
          >
            <Github className="w-4 h-4 text-zinc-400" />
            <span>{dict.githubButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
