import React from "react";
import { Keyboard, CheckCircle2 } from "lucide-react";
import { Dictionary } from "@/locales";

interface HotkeyTableProps {
  dict: Dictionary["pageFlow"]["hotkeys"];
}

export default function HotkeyTable({ dict }: HotkeyTableProps) {
  return (
    <section className="py-20 relative bg-zinc-950/40 border-y border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-mono text-purple-300">
            <Keyboard className="w-3.5 h-3.5" />
            <span>{dict.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {dict.title}
          </h2>
          <p className="text-sm text-zinc-400">
            {dict.subtitle}
          </p>
        </div>

        {/* Hotkey Table */}
        <div className="rounded-2xl glass-panel border border-zinc-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="bg-zinc-900/90 text-xs uppercase font-mono text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-4 px-6 font-semibold">{dict.colAction}</th>
                  <th className="py-4 px-6 font-semibold">{dict.colRecommended}</th>
                  <th className="py-4 px-6 font-semibold">{dict.colVim}</th>
                  <th className="py-4 px-6 font-semibold hidden md:table-cell">{dict.colBehavior}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/70">
                {dict.rows.map((row, idx) => (
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
