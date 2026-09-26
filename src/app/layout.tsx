import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Obsidian Suite | High-Quality Crafted Plugins",
  description:
    "Discover crafted, keyboard-centric, high-performance Obsidian plugins designed to elevate your note-taking experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 selection:bg-purple-500/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
