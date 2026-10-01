"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, FileText, Folder, Sparkles, Terminal } from "lucide-react";
import { Dictionary } from "@/locales";

interface InteractiveDemoProps {
  dict: Dictionary["pageFlow"]["simulator"];
}

export default function InteractiveDemo({ dict }: InteractiveDemoProps) {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>("Space");
  const [consecutiveTaps, setConsecutiveTaps] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const notes = dict.notes;
  const currentNote = notes[currentNoteIndex] || notes[0];

  const handleForward = React.useCallback(() => {
    setLastKeyPressed("Space (Forward)");
    setConsecutiveTaps((prev) => Math.min(prev + 1, 5));

    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;

      if (isAtBottom) {
        if (currentNoteIndex < notes.length - 1) {
          setCurrentNoteIndex((prev) => prev + 1);
          containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setCurrentNoteIndex(0);
          containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        containerRef.current.scrollBy({
          top: clientHeight * 0.75,
          behavior: "smooth"
        });
      }
    }
  }, [currentNoteIndex, notes.length]);

  const handleBackward = React.useCallback(() => {
    setLastKeyPressed("Shift+Space (Backward)");
    setConsecutiveTaps(1);

    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const isAtTop = scrollTop <= 20;

      if (isAtTop) {
        if (currentNoteIndex > 0) {
          setCurrentNoteIndex((prev) => prev - 1);
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth"
              });
            }
          }, 50);
        }
      } else {
        containerRef.current.scrollBy({
          top: -clientHeight * 0.75,
          behavior: "smooth"
        });
      }
    }
  }, [currentNoteIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) return;

      if (e.code === "Space") {
        e.preventDefault();
        if (e.shiftKey) {
          handleBackward();
        } else {
          handleForward();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleBackward, handleForward]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl glass-panel border border-zinc-800 shadow-2xl overflow-hidden text-left">
      {/* Mock Obsidian Window Header */}
      <div className="bg-zinc-900/90 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-zinc-500 font-mono ml-2 flex items-center gap-1.5">
            <Folder className="w-3 h-3 text-purple-400" />
            {dict.folder}
          </span>
        </div>

        {/* Real-time Indicator Badge */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-900/40 border border-purple-700/50 text-[11px] font-mono text-purple-300">
            <Terminal className="w-3 h-3 text-purple-400" />
            <span>
              {dict.keyIndicator}: {lastKeyPressed || "Space"}
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-700">
            {dict.speedIndicator}: {consecutiveTaps}.0x
          </span>
        </div>
      </div>

      {/* Mock Obsidian Editor Body */}
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[360px] bg-[#0c0c0e]">
        {/* Left Mock Sidebar */}
        <div className="hidden md:block col-span-1 border-r border-zinc-800/80 p-3 bg-zinc-950/40 text-xs">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            {dict.fileExplorer}
          </p>
          <div className="space-y-1">
            {notes.map((note, index) => {
              const isActive = index === currentNoteIndex;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-all ${
                    isActive
                      ? "bg-purple-600/20 text-purple-200 border border-purple-500/30 font-medium"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <FileText className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-purple-400" : "text-zinc-500"}`} />
                  <span className="truncate">{note.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note Reader Viewport */}
        <div
          ref={containerRef}
          className="col-span-1 md:col-span-3 p-6 sm:p-8 overflow-y-auto max-h-[360px] scroll-smooth space-y-5"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentNote.title.replace(".md", "")}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
              {dict.noteOf} {currentNoteIndex + 1} / {notes.length}
            </span>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            {currentNote.paragraphs.map((p, idx) => (
              <p key={idx} className="transition-opacity duration-300">
                {p}
              </p>
            ))}
          </div>

          <div className="pt-6 pb-2 text-center text-xs text-purple-400/80 font-mono flex items-center justify-center gap-2 border-t border-dashed border-zinc-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dict.bottomNotice}</span>
          </div>
        </div>
      </div>

      {/* Simulator Control Dock */}
      <div className="bg-zinc-900/90 border-t border-zinc-800 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="text-zinc-400 flex items-center gap-2">
          <span>{dict.pressHint}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleBackward}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors font-medium active:scale-95"
          >
            <ChevronUp className="w-4 h-4 text-zinc-400" />
            {dict.backwardButton}
          </button>
          <button
            onClick={handleForward}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium shadow-md shadow-purple-600/30 transition-all active:scale-95"
          >
            {dict.forwardButton}
            <ChevronDown className="w-4 h-4 text-purple-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
