export interface PluginMeta {
  id: string;
  name: string;
  tagline: string;
  taglineJa: string;
  description: string;
  descriptionJa: string;
  category: "Reading" | "Maintenance" | "Capture" | "Sync" | "Utility";
  categoryJa: string;
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
    taglineJa: "滑らかな滑空ハイブリッド閲覧",
    description:
      "Scroll page-by-page and glide seamlessly to the next note using single hotkeys. Continuous momentum and reverse braking for zero-mouse reading.",
    descriptionJa:
      "単一ホットキーでページ単位スクロールし、ノート終端で次のファイルへ滑らかに滑空。モメンタム加速と急ブレーキでマウスを使わない快適な読書・トリアージを実現。",
    category: "Reading",
    categoryJa: "閲覧・読書",
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
    taglineJa: "高精度なVaultクリーンアップ＆衛生管理",
    description:
      "Scan, detect, and safely prune orphaned attachments, broken links, and empty notes. Keep your vault ultra-lean and blazing fast.",
    descriptionJa:
      "孤立した添付ファイルや切れたリンク、空ノートを検出し、安全に整理・削除。Vault を常に軽量・高速に維持します。",
    category: "Maintenance",
    categoryJa: "メンテナンス",
    status: "Stable",
    badgeColor: "bg-emerald-600/20 text-emerald-300 border-emerald-500/40",
    hasDedicatedLandingPage: true,
    landingPageUrl: "/plugins/vault-pruner",
    obsidianInstallUri: "obsidian://show-plugin?id=obsidian-vault-pruner",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-vault-pruner",
    highlights: ["Orphan Detection", "Safe Dry-run", "Attachment Cleaner"]
  },
  {
    id: "chat-notes",
    name: "Chat Notes",
    tagline: "Conversational Quick-Capture Interface",
    taglineJa: "対話型のクイックキャプチャUI",
    description:
      "Capture fleeting thoughts, micro-logs, and memos in an intuitive chat-bubble stream with automatic timestamps and tag indexing.",
    descriptionJa:
      "ふと思いついたアイデアや日々のマイクロログをチャット吹き出し形式で即座に記録。タイムスタンプとタグを自動付与。",
    category: "Capture",
    categoryJa: "クイック記録",
    status: "Stable",
    badgeColor: "bg-blue-600/20 text-blue-300 border-blue-500/40",
    hasDedicatedLandingPage: true,
    landingPageUrl: "/plugins/chat-notes",
    obsidianInstallUri: "obsidian://show-plugin?id=obsidian-chat-notes",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-chat-notes",
    highlights: ["Micro Journaling", "Timestamp Bubbles", "Instant Stream"]
  },
  {
    id: "format-convert",
    name: "Format Convert",
    tagline: "Batch Markdown & HTML Transformer",
    taglineJa: "Markdown＆リッチテキスト一括変換",
    description:
      "Seamlessly convert between Markdown flavors, rich HTML, and clean text with zero formatting regressions.",
    descriptionJa:
      "Webからのコピーや異なるMarkdown方言、リッチHTMLを相互変換。書式崩れなくクリーンなノートへ整形します。",
    category: "Utility",
    categoryJa: "ユーティリティ",
    status: "Stable",
    badgeColor: "bg-amber-600/20 text-amber-300 border-amber-500/40",
    hasDedicatedLandingPage: true,
    landingPageUrl: "/plugins/format-convert",
    obsidianInstallUri: "obsidian://show-plugin?id=obsidian-format-convert",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-format-convert",
    highlights: ["Batch Conversion", "Clean RegEx Engine", "HTML to MD"]
  },
  {
    id: "google-drive-sync",
    name: "Google Drive Sync",
    tagline: "Secure Vault Cloud Synchronizer",
    taglineJa: "安全なVaultクラウド同期",
    description:
      "End-to-end synchronized notes between your Obsidian desktop/mobile and Google Drive without third-party middleman servers.",
    descriptionJa:
      "外部中継サーバーを介さず、お使いの端末とGoogle Drive間でVaultを直接同期。安全でプライベートなバックアップを実現。",
    category: "Sync",
    categoryJa: "同期・バックアップ",
    status: "Stable",
    badgeColor: "bg-indigo-600/20 text-indigo-300 border-indigo-500/40",
    hasDedicatedLandingPage: true,
    landingPageUrl: "/plugins/google-drive-sync",
    obsidianInstallUri: "obsidian://show-plugin?id=obsidian-google-drive-sync",
    githubUrl: "https://github.com/HirotakaAsako/obsidian-google-drive-sync",
    highlights: ["Zero Server", "OAuth2 Encrypted", "Selective Folder Sync"]
  }
];
