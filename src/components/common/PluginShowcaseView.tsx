import React from "react";
import Link from "next/link";
import { Download, Github, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { Locale, Dictionary } from "@/locales";
import { PluginMeta } from "@/data/plugins";

interface PluginShowcaseViewProps {
  lang: Locale;
  dict: Dictionary;
  plugin: PluginMeta;
}

export default function PluginShowcaseView({ lang, dict, plugin }: PluginShowcaseViewProps) {
  const isJa = lang === "ja";
  const title = plugin.name;
  const tagline = isJa ? plugin.taglineJa : plugin.tagline;
  const description = isJa ? plugin.descriptionJa : plugin.description;
  const category = isJa ? plugin.categoryJa : plugin.category;

  return (
    <div className="space-y-16 py-12">
      {/* 1. Hero Section */}
      <section className="relative text-center overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-purple-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {/* Badge & Category */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/60 text-xs font-medium text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{category} · {plugin.status}</span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-purple-300 font-medium max-w-2xl mx-auto">
              {tagline}
            </p>
            <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-2">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={plugin.obsidianInstallUri}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{dict.common.installInObsidian}</span>
            </a>

            <a
              href={plugin.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-semibold text-sm transition-all active:scale-95"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>{dict.common.viewOnGithub}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Key Highlights & Features */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-zinc-800/90 space-y-6">
          <h2 className="text-xs uppercase font-bold tracking-widest text-zinc-400">
            {isJa ? "コア機能 ＆ 設計ハイライト" : "Core Capabilities & Highlights"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {plugin.highlights.map((h, i) => (
              <div
                key={i}
                className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-white">{h}</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {isJa
                      ? "Obsidian の思想に沿ったローカル・ハイパフォーマンス設計。"
                      : "Engineered locally for peak performance and zero friction."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA & Navigation */}
      <section className="py-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {isJa ? `${title} を試してみる` : `Ready to try ${title}?`}
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            {isJa
              ? "完全無料・オープンソース。Obsidian コミュニティプラグイン設定または GitHub から入手できます。"
              : "Free, open-source, and local-first. Available via Obsidian Community Plugins or GitHub."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={plugin.obsidianInstallUri}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{dict.common.installInObsidian}</span>
            </a>

            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/80 text-sm font-semibold transition-all active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-400" />
              <span>{dict.pageFlow.cta.backToPortal}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
