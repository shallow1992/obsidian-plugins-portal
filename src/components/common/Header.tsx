import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { Locale, Dictionary } from "@/locales";

interface HeaderProps {
  lang: Locale;
  dict: Dictionary["nav"];
}

export default function Header({ lang, dict }: HeaderProps) {
  const homePath = `/${lang}`;

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href={homePath}
          className="flex items-center gap-2.5 font-semibold text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-zinc-100">{dict.suiteTitle}</span>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shallow1992/obsidian-plugins-portal"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium hidden sm:flex items-center gap-1.5"
            aria-label="GitHub Repository"
          >
            <span>GitHub</span>
          </a>

          {/* Language Selector */}
          <LanguageSelector currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
