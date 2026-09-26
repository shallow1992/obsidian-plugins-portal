export interface PluginMeta {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "Reading" | "Maintenance" | "Capture" | "Sync" | "Utility";
  status: "Featured" | "Stable" | "In Review" | "Beta";
  badgeColor: string;
  hasDedicatedLandingPage: boolean;
  landingPageUrl?: string;
  obsidianInstallUri: string;
  githubUrl: string;
  highlights: string[];
}

export const PLUGINS_DATA: PluginMeta[] = [
  {
    id: "page-flow",
    name: "Page Flow",
    tagline: "Smooth Hybrid Note Glider",
    description:
      "Scroll page-by-page and glide seamlessly to the next note using single hotkeys. Continuous momentum and reverse braking for zero-mouse reading.",
    category: "Reading",
    status: "Featured",
    badgeColor: "bg-purple-600/20 text-purple-300 border-purple-500/40",
    hasDedicatedLandingPage: true,
    landingPageUrl: "/plugins/page-flow",
    obsidianInstallUri: "obsidian://show-plugin?id=page-flow",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-page-flow",
    highlights: ["Hybrid Scroll", "Continuous Momentum", "Instant Reverse Brake", "Fly-by Safe"]
  },
  {
    id: "vault-pruner",
    name: "Vault Pruner",
    tagline: "Intelligent Vault Cleanup & Maintenance",
    description:
      "Scan, detect, and safely prune orphaned attachments, broken links, and empty notes. Keep your vault ultra-lean and blazing fast.",
    category: "Maintenance",
    status: "Stable",
    badgeColor: "bg-emerald-600/20 text-emerald-300 border-emerald-500/40",
    hasDedicatedLandingPage: false,
    obsidianInstallUri: "obsidian://show-plugin?id=obsidian-vault-pruner",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-vault-pruner",
    highlights: ["Orphan Detection", "Safe Dry-run", "Attachment Cleaner"]
  },
  {
    id: "chat-notes",
    name: "Chat Notes",
    tagline: "Conversational Quick-Capture Interface",
    description:
      "Capture fleeting thoughts, micro-logs, and memos in an intuitive chat-bubble stream with automatic timestamps and tag indexing.",
    category: "Capture",
    status: "Stable",
    badgeColor: "bg-blue-600/20 text-blue-300 border-blue-500/40",
    hasDedicatedLandingPage: false,
    obsidianInstallUri: "obsidian://show-plugin?id=obsidian-chat-notes",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-chat-notes",
    highlights: ["Micro Journaling", "Timestamp Bubbles", "Instant Stream"]
  },
  {
    id: "format-convert",
    name: "Format Convert",
    tagline: "Batch Markdown & HTML Transformer",
    description:
      "Seamlessly convert between Markdown flavors, rich HTML, and clean text with zero formatting regressions.",
    category: "Utility",
    status: "Stable",
    badgeColor: "bg-amber-600/20 text-amber-300 border-amber-500/40",
    hasDedicatedLandingPage: false,
    obsidianInstallUri: "obsidian://show-plugin?id=obsidian-format-convert",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-format-convert",
    highlights: ["Batch Conversion", "Clean RegEx Engine", "HTML to MD"]
  },
  {
    id: "google-drive-sync",
    name: "Google Drive Sync",
    tagline: "Secure Vault Cloud Synchronizer",
    description:
      "End-to-end synchronized notes between your Obsidian desktop/mobile and Google Drive without third-party middleman servers.",
    category: "Sync",
    status: "Stable",
    badgeColor: "bg-indigo-600/20 text-indigo-300 border-indigo-500/40",
    hasDedicatedLandingPage: false,
    obsidianInstallUri: "obsidian://show-plugin?id=obsidian-google-drive-sync",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-google-drive-sync",
    highlights: ["Zero Server", "OAuth2 Encrypted", "Selective Folder Sync"]
  }
];
