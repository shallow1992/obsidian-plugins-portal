"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { LOCALES, Locale } from "@/locales";

interface LanguageSelectorProps {
  currentLang: Locale;
}

export default function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (targetLang: Locale) => {
    setIsOpen(false);
    if (targetLang === currentLang) return;

    // Calculate new path
    // Path structure: /[lang]/... or /...
    let cleanPath = pathname;
    if (cleanPath.startsWith("/en/")) {
      cleanPath = cleanPath.replace(/^\/en/, "");
    } else if (cleanPath === "/en") {
      cleanPath = "/";
    } else if (cleanPath.startsWith("/ja/")) {
      cleanPath = cleanPath.replace(/^\/ja/, "");
    } else if (cleanPath === "/ja") {
      cleanPath = "/";
    }

    // Ensure leading slash
    if (!cleanPath.startsWith("/")) {
      cleanPath = "/" + cleanPath;
    }

    const newPath = `/${targetLang}${cleanPath === "/" ? "" : cleanPath}`;
    router.push(newPath);
  };

  const currentLabel = LOCALES.find((l) => l.code === currentLang)?.label || "English";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 text-xs font-medium transition-all active:scale-95"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-purple-400" />
        <span>{currentLabel}</span>
        <ChevronDown className="w-3 h-3 text-zinc-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl bg-zinc-900 border border-zinc-700/80 shadow-2xl p-1 z-50 animate-in fade-in duration-150">
          {LOCALES.map((locale) => {
            const isSelected = locale.code === currentLang;
            return (
              <button
                key={locale.code}
                onClick={() => switchLanguage(locale.code)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                  isSelected
                    ? "bg-purple-600/20 text-purple-300 font-semibold"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80"
                }`}
              >
                <span>{locale.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-purple-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
