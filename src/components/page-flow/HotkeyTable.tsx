import React from "react";
import { Keyboard, Sliders, CheckCircle2 } from "lucide-react";

interface HotkeyRow {
  action: string;
  recommended: string;
  vimStyle: string;
  description: string;
}

const HOTKEYS: HotkeyRow[] = [
  {
    action: "Forward: Scroll down or open next file",
    recommended: "Alt + Space",
    vimStyle: "Alt + J",
    description: "Main primary forward glide. Scrolls note, then glides to next file."
  },
  {
    action: "Backward: Scroll up or open previous file",
    recommended: "Alt + Shift + Space",
    vimStyle: "Alt + K",
    description: "Symmetrical reverse glide. Scrolls up, then opens previous file at bottom."
  },
  {
    action: "Dedicated: Scroll page down only",
    recommended: "Space / PageDown",
    vimStyle: "Ctrl + F",
    description: "In-note continuous scroll without file boundary transitions."
  },
  {
    action: "Dedicated: Scroll page up only",
    recommended: "Shift + Space / PageUp",
    vimStyle: "Ctrl + B",
    description: "In-note reverse scroll without file boundary transitions."
  },
  {
    action: "Dedicated: Go to next file immediately",
    recommended: "Alt + Down",
    vimStyle: "Alt + L",
    description: "Instantly switches to the next note regardless of scroll position."
  },
  {
    action: "Dedicated: Go to previous file immediately",
    recommended: "Alt + Up",
    vimStyle: "Alt + H",
    description: "Instantly switches to previous note regardless of scroll position."
  }
];

export default function HotkeyTable() {
  return (
    <section className="py-20 relative bg-zinc-950/40 border-y border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-mono text-purple-300">
            <Keyboard className="w-3.5 h-3.5" />
            <span>Fully Configurable Keybindings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Home Row Speed
          </h2>
          <p className="text-sm text-zinc-400">
            All commands integrate seamlessly with Obsidian’s native hotkey settings.
            Choose your preferred style or map any custom modifiers.
          </p>
        </div>

        {/* Hotkey Table */}
        <div className="rounded-2xl glass-panel border border-zinc-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="bg-zinc-900/90 text-xs uppercase font-mono text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-4 px-6 font-semibold">Command Action</th>
                  <th className="py-4 px-6 font-semibold">Recommended Hotkey</th>
                  <th className="py-4 px-6 font-semibold">Vim / Compact Style</th>
                  <th className="py-4 px-6 font-semibold hidden md:table-cell">Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/70">
                {HOTKEYS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{row.action}</span>
                    </td>
                    <td className="py-4 px-6">
                      <kbd className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs shadow-sm inline-block">
                        {row.recommended}
                      </kbd>
                    </td>
                    <td className="py-4 px-6">
                      <kbd className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700/60 text-purple-300 font-mono text-xs shadow-sm inline-block">
                        {row.vimStyle}
                      </kbd>
                    </td>
                    <td className="py-4 px-6 text-xs text-zinc-400 hidden md:table-cell leading-relaxed">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
