import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Sparkles, Compass, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Obsidian Plugins Portal | High-Quality Crafted Plugins",
  description:
    "Discover crafted, keyboard-centric, high-performance Obsidian plugins designed to elevate your note-taking experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 selection:bg-purple-500/30 selection:text-purple-200">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 glass-panel border-b border-zinc-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-semibold text-lg tracking-tight hover:opacity-90 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-zinc-100">Obsidian Suite</span>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              <Link
                href="/plugins/page-flow"
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4 text-purple-400" />
                Page Flow
              </Link>
              <Link
                href="/"
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5"
              >
                <Layers className="w-4 h-4" />
                All Plugins
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-800/80 py-8 text-center text-sm text-zinc-500 bg-[#09090b]">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 Obsidian Plugins Suite. Crafted for seamless note-taking.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/plugins/page-flow"
                className="hover:text-zinc-400 transition-colors"
              >
                Page Flow
              </Link>
              <a
                href="https://obsidian.md"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-400 transition-colors"
              >
                Obsidian.md
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
