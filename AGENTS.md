# AI Agent Guidelines (AGENTS.md)

Guidelines, architectural constraints, and operational workflows for AI coding agents (Claude Code, Antigravity, etc.) working on **Obsidian Plugins Portal** (`obsidian-plugins-portal`).

---

## 1. Development Environment & Docker Isolation (Mandatory)

To guarantee clean, reproducible development and prevent host environment pollution:
- **Execute all project commands strictly inside Docker containers**:
  - `docker compose run --rm obsidian-plugins-portal npm run build` (Static export & type check)
  - `docker compose run --rm obsidian-plugins-portal npm run lint` (ESLint & code quality)
  - `docker compose run --rm obsidian-plugins-portal npm install <pkg>` (Dependency management)
  - `docker compose up -d` (Local development preview at `http://localhost:3000`)
- **Zero Host Execution**: Never run Node.js, npm, or build scripts directly on the host machine.
- **Single-Command Execution**: Execute commands individually without chaining (`&&`, `;`, `||`) to preserve command auto-approval allowlists.

---

## 2. Architecture & Technical Constraints

The portal is designed as a fast, accessible, multilingual static showcase:
- **Pure Static Export (`output: 'export'`)**:
  - Must remain 100% statically exportable via `output: 'export'` in `next.config.mjs`.
  - Zero Node.js runtime servers in production (compatible with Cloudflare Pages and GitHub Pages).
- **Path-Based Multilingual Routing (`/[lang]/...`)**:
  - Languages supported: English (`/en/...`) and Japanese (`/ja/...`).
  - Implements static dictionary lookup with strict TypeScript type safety (`src/locales/`).
  - Root `/` automatically detects and performs client-side redirect to default locale (`/en`).

---

## 3. Mandatory Specification Pointers (Documentation Hierarchy)

To guarantee visual, architectural, and workflow consistency, agents **MUST** inspect and comply with the following domain specifications before executing tasks:

| Task Domain | Mandatory Specification Pointer | Purpose & Requirements |
| :--- | :--- | :--- |
| **UI Design, Styling & Component Refactoring** | **[`docs/design.md`](./docs/design.md)** | **Strict Design System Compliance**: Canvas `#09090b`, glassmorphism (`.glass-panel`), typography scales, purple gradient tokens, `<kbd>` styling, and scaffolding templates. Zero arbitrary styles, zero pure black `#000000` canvas, zero hardcoded UI strings. |
| **New Plugin Onboarding & Dedicated LPs** | **[`docs/plugins-expansion-guide.md`](./docs/plugins-expansion-guide.md)** | **Standard Multi-Plugin Workflow**: Step-by-step procedure for Level 1 (catalog registry) and Level 2 (full showcase LP) with bilingual metadata synchronization. |
| **Demo Video Automation & Asset Pipeline** | **[`docs/video-production-pipeline.md`](./docs/video-production-pipeline.md)** | **Audio-First Sync Pipeline**: Scene-split video capture, AppleScript automation, ElevenLabs voice, and Docker ffmpeg compression to `public/assets/plugins/<id>/`. |
| **System Architecture & Tech Stack Rationale** | **[`docs/architecture.md`](./docs/architecture.md)** | **Architectural Blueprint**: In-depth trade-off analyses, container isolation guarantees, and Agent Skills system. |

---

## 4. Git Worktree & Multi-Agent Isolation Workflow

To safely coordinate multiple AI agents operating in the same repository:
- **1 Issue = 1 Branch = 1 Worktree Isolation**:
  - Never perform parallel feature work directly on `master`.
- **Namespace Separation**:
  - **Claude Code**: `<repo>/.claude/worktrees/issue-<number>-<short-desc>/`
  - **Antigravity**: `<repo>/.gemini/worktrees/issue-<number>-<short-desc>/`
- **Creation from Fresh Base**:
  ```bash
  # Example for Antigravity:
  git worktree add -b issue-<num>-<desc> .gemini/worktrees/issue-<num>-<desc> origin/master
  ```
- **Post-Merge Cleanup Protocol**:
  1. Tear down container volumes: `docker compose down -v`
  2. Pull latest master: `git pull --ff-only`
  3. Remove worktree: `git worktree remove .gemini/worktrees/issue-<num>-<desc>`
  4. Delete local branch: `git branch -d issue-<num>-<desc>`
  5. Prune remote tracking: `git fetch --prune`

---

## 5. Conventional Commits & Remote CI Verification

- **Commit Message Format**:
  - Commits and PR titles must adhere to Conventional Commits:
    - `feat:` (New features or pages)
    - `fix:` (Bug fixes or rendering corrections)
    - `docs:` (Documentation and guide updates)
    - `refactor:` (Code structure improvements with no behavior change)
    - `chore:` (Dependencies, configuration, housekeeping)
    - `ci:` (GitHub Actions workflow adjustments)
- **Squash and Merge**:
  - All PRs must be squash-merged into `master` to maintain a clean linear commit graph.
- **Mandatory CI Verification**:
  - Before merging, verify GitHub Actions workflow status (`gh pr checks <PR-number>`). Ensure all builds pass.

---

## 6. Security & Privacy (Zero Leak Policy)

- **Zero Plaintext Secrets**: No tokens, API keys, or private credentials committed to git.
- **Zero Host Environment Leaks**: Never commit machine names, OS usernames, local absolute paths (`/Users/...`), or personal email addresses.
