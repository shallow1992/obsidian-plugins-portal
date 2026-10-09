import React from "react";
import Link from "next/link";
import { Locale, Dictionary } from "@/locales";

interface FooterProps {
  lang: Locale;
  dict: Dictionary["footer"];
}

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="border-t border-zinc-800/80 py-8 text-center text-sm text-zinc-500 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>{dict.tagline}</p>
        <div className="flex items-center gap-6">
          <Link
            href={`/${lang}`}
            className="hover:text-zinc-400 transition-colors"
          >
            {dict.home}
          </Link>
          <a
            href="https://github.com/shallow1992/obsidian-plugins-portal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            {dict.github}
          </a>
          <a
            href="https://obsidian.md"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            {dict.obsidian}
          </a>
        </div>
      </div>
    </footer>
  );
}
