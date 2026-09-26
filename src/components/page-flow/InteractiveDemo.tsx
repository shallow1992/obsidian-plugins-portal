"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, FileText, Folder, Sparkles, Terminal } from "lucide-react";

interface Note {
  id: string;
  title: string;
  folder: string;
  paragraphs: string[];
}

const SAMPLE_NOTES: Note[] = [
  {
    id: "note-1",
    title: "01. Introduction to Digital Gardens.md",
    folder: "Research / PKM",
    paragraphs: [
      "A digital garden is a collection of evolving ideas that grow over time. Unlike standard chronological blogs, gardens prioritize context, links, and topological exploration.",
      "As notes accumulate into hundreds or thousands, continuous linear inspection becomes the single biggest friction point. Opening files one-by-one by clicking sidebar trees breaks concentration.",
      "Page Flow solves this by treating your folder as a continuous stream of thoughts. With single-key actuation, you glide downward through sections smoothly.",
      "When reaching the bottom of this note, another tap seamlessly glides right into the next note in your folder."
    ]
  },
  {
    id: "note-2",
    title: "02. Fluid Note Triaging.md",
    folder: "Research / PKM",
    paragraphs: [
      "Triaging daily fleeting notes requires rapid velocity. Traditional file switching resets your scroll position and breaks reading momentum.",
      "With Page Flow's momentum physics, rapid taps smoothly scale up the cruising speed without stuttering.",
      "And if you ever need to stop abruptly or re-read something, pressing the reverse key immediately applies directional braking, stopping instant overshoot dead in its tracks.",
      "You are now at the end of the second note. Press down once more to reach the final summary."
    ]
  },
  {
    id: "note-3",
    title: "03. High Performance Workflows.md",
    folder: "Research / PKM",
    paragraphs: [
      "Page Flow is built strictly on top of CodeMirror 6 viewport coordinates, dynamically resisting virtual layout shifts in massive documents.",
      "It honors your visual Obsidian File Explorer order—whether alphabetical, chronological, or custom manual sorting.",
      "No mouse. No trackpad. Just pure, uninterrupted focus on your ideas.",
      "Experience frictionless reading today inside your own vault!"
    ]
  }
];

export default function InteractiveDemo() {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>("Space");
  const [consecutiveTaps, setConsecutiveTaps] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentNote = SAMPLE_NOTES[currentNoteIndex];

  // Handle simulated action
  const handleForward = () => {
    setLastKeyPressed("Space (Forward)");
    setConsecutiveTaps((prev) => Math.min(prev + 1, 5));

    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;

      if (isAtBottom) {
        // Transition to next note
        if (currentNoteIndex < SAMPLE_NOTES.length - 1) {
          setCurrentNoteIndex((prev) => prev + 1);
          containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // Loop back for demo purpose
          setCurrentNoteIndex(0);
          containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // Scroll down 75%
        containerRef.current.scrollBy({
          top: clientHeight * 0.75,
          behavior: "smooth"
        });
      }
    }
  };

  const handleBackward = () => {
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
        // Scroll up 75%
        containerRef.current.scrollBy({
          top: -clientHeight * 0.75,
          behavior: "smooth"
        });
      }
    }
  };

  // Keyboard event listener for interactive experience
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is focusing an input
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
  }, [currentNoteIndex]);

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
            {currentNote.folder}
          </span>
        </div>

        {/* Real-time Indicator Badge */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-900/40 border border-purple-700/50 text-[11px] font-mono text-purple-300">
            <Terminal className="w-3 h-3 text-purple-400" />
            <span>Key: {lastKeyPressed || "Press Space"}</span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-700">
            Speed: {consecutiveTaps}.0x
          </span>
        </div>
      </div>

      {/* Mock Obsidian Editor Body */}
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[360px] bg-[#0c0c0e]">
        {/* Left Mock Sidebar (File Explorer) */}
        <div className="hidden md:block col-span-1 border-r border-zinc-800/80 p-3 bg-zinc-950/40 text-xs">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            File Explorer
          </p>
          <div className="space-y-1">
            {SAMPLE_NOTES.map((note, index) => {
              const isActive = index === currentNoteIndex;
              return (
                <div
                  key={note.id}
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
              Note {currentNoteIndex + 1} of {SAMPLE_NOTES.length}
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
            <span>Bottom reached. Next tap seamlessly transitions to next file.</span>
          </div>
        </div>
      </div>

      {/* Simulator Control Dock */}
      <div className="bg-zinc-900/90 border-t border-zinc-800 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="text-zinc-400 flex items-center gap-2">
          <span className="hidden sm:inline">Try pressing</span>
          <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-200 font-mono shadow-sm">
            Space
          </kbd>
          <span>to scroll & glide forward,</span>
          <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-200 font-mono shadow-sm">
            Shift + Space
          </kbd>
          <span>for backward.</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleBackward}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors font-medium active:scale-95"
          >
            <ChevronUp className="w-4 h-4 text-zinc-400" />
            Backward
          </button>
          <button
            onClick={handleForward}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium shadow-md shadow-purple-600/30 transition-all active:scale-95"
          >
            Forward Glide
            <ChevronDown className="w-4 h-4 text-purple-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
