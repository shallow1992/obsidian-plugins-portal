# 🌌 Obsidian Plugins Portal

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Container_Isolated-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

Official showcase portal and interactive landing pages for the curated suite of Obsidian productivity and workflow plugins.

---

## 🚀 Overview

The **Obsidian Plugins Portal** provides a visual showcase benchmarked against modern, design-forward plugins like *Notebook Navigator*. It features interactive in-browser simulators, rich Bento Grid feature highlights, keybinding matrices, and direct Obsidian URI installation.

### Featured Plugins

| Plugin | Category | Key Feature | Showcase Page |
| :--- | :--- | :--- | :--- |
| **Page Flow** | Reading / Navigation | Smooth continuous page scrolling & seamless note gliding on Space | [`/plugins/page-flow`](https://shallow1992.github.io/obsidian-plugins-portal/en/plugins/page-flow) |
| **Vault Pruner** | Maintenance / Hygiene | Automated orphan file & attachment detection and cleanup | *(Coming Soon)* |
| **Chat Notes** | AI / Knowledge | Natural conversational interface directly over your local vault notes | *(Coming Soon)* |
| **Format Convert** | Formatting | Universal markdown syntax normalization & batch cleaning | *(Coming Soon)* |
| **Google Drive Sync**| Cloud / Sync | Effortless, secure cloud backup without proprietary lock-in | *(Coming Soon)* |

---

## 🌟 Core Features

- **Pure Static Export (`output: 'export'`)**:
  - Compiles into 100% static HTML/CSS/JS with zero Node.js server dependencies.
  - Zero-cost, edge-portable hosting across Cloudflare Pages, GitHub Pages, or any static object storage.
- **Multilingual Routing (`/[lang]/...`)**:
  - Path-based static routing supporting English (`/en/...`) and Japanese (`/ja/...`).
  - Strict compile-time TypeScript type safety across translation dictionaries.
- **Live Simulator & Obsidian CTA**:
  - Interactive keyboard simulation letting users experience Space-key gliding directly in the browser before installing.
  - One-click `obsidian://show-plugin?id=<id>` deep links for instant local installation.
- **Docker-Isolated Engineering**:
  - All development, linting, and build verification runs 100% isolated inside Docker containers.

---

## 📁 Project Architecture & Multi-Plugin Directory Structure

The portal is designed with a scalable, modular architecture supporting both the unified plugins marketplace catalog and dedicated visual landing pages for each plugin:

```text
obsidian-plugins-portal/
├── src/                                  # 🌐 Application Source Code
│   ├── app/                              # Next.js App Router (Static Export)
│   │   ├── [lang]/                       # Path-based i18n routing (/en, /ja)
│   │   │   ├── page.tsx                  # [Catalog] Unified showcase of all plugins
│   │   │   └── plugins/
│   │   │       ├── page-flow/page.tsx    # [LP] Dedicated landing page for Page Flow
│   │   │       └── <plugin-id>/page.tsx  # (Extensible) Future dedicated plugin LPs
│   │   └── layout.tsx                    # Shared root layout (Header, Footer, Theme)
│   │
│   ├── components/                       # UI Component Modules
│   │   ├── common/                       # Site-wide components (Header, Footer)
│   │   ├── portal/                       # Unified catalog components (Grid, Filter, Cards)
│   │   └── page-flow/                    # Page Flow LP components (Hero, Bento, Simulator)
│   │       # Future plugins add components/<plugin-id>/
│   │
│   ├── data/
│   │   └── plugins.ts                    # Master registry of all plugins (metadata, URLs, categories)
│   │
│   └── locales/                          # Type-safe i18n translation dictionaries
│       ├── en.ts
│       └── ja.ts
│
├── public/                               # 🖼️ Static Web Assets (Next.js public root)
│   └── assets/
│       └── plugins/
│           ├── page-flow/                # Page Flow production assets
│           │   ├── demo.mp4              # Compressed web demo video for hero
│           │   ├── demo.webm             # WebM video fallback
│           │   └── icon.svg              # Plugin branding icon
│           └── <plugin-id>/              # Production assets for future plugins
│
├── docs/                                 # 📚 Documentation & Specifications
│   ├── video-production-pipeline.md       # Generic AI video production pipeline specification
│   └── plugins/                            # Plugin-specific scripts and scene metadata
│       └── page-flow/
│           ├── demo-script.md             # Narration script & visual storyboard
│           └── demo-script.json           # Structured scene definitions
│
├── scripts/                              # 🎬 Automation & Tooling
│   └── demo/
│       ├── run.sh                          # Multi-plugin demo automation runner CLI
│       └── plugins/                        # Plugin-specific automation scripts
│           └── page-flow/
│               └── demo.applescript       # Native macOS AppleScript interaction scenario
│
└── raw_recordings/                       # 🎥 Raw Screen Captures (Git-ignored)
    └── <plugin-id>/                      # Plugin-segregated footage from screencapture
```

---

## 🛠️ Local Development (Docker Isolated)

All project execution is containerized. No local Node.js installation is required.

```bash
# 1. Start development server (with hot reload at http://localhost:3000)
docker compose up -d

# 2. View container logs
docker compose logs -f obsidian-plugins-portal

# 3. Run production static build verification
docker compose run --rm obsidian-plugins-portal npm run build

# 4. Run ESLint code quality checks
docker compose run --rm obsidian-plugins-portal npm run lint

# 5. Stop containers
docker compose down
```

---

## 🚢 Deployment Architecture

- **GitHub Pages**: Automated on pushes to `master` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
- **Cloudflare Pages**: Connect git repository with Build Command `npm run build` and Build Output Directory `out`.
- Detailed deployment steps are documented in [`docs/deployment.md`](docs/deployment.md).

---

## 📚 Governance & Guidelines

- **AI Agent Guidelines**: See [`AGENTS.md`](AGENTS.md) for architectural constraints, multi-agent worktree protocols, and security rules.
- **Design System & Guidelines**: See [`docs/design.md`](docs/design.md) for visual rules, color tokens, typography, and component patterns.
- **Architecture & Tech Stack Rationale**: See [`docs/architecture.md`](docs/architecture.md) for detailed tool selection, agent skills matrix, and multi-plugin design.
- **Plugin LP Expansion Guide**: See [`docs/plugins-expansion-guide.md`](docs/plugins-expansion-guide.md) for step-by-step instructions on onboarding new plugins and creating dedicated landing pages.
- **Video Production Pipeline**: See [`docs/video-production-pipeline.md`](docs/video-production-pipeline.md) for the audio-first screen recording and editing pipeline.

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
