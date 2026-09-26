# Hosting & Deployment Guide

本サイトは完全な静的エクスポート (`output: 'export'`) に対応しており、**商用利用可能な無料ホスティング（Cloudflare Pages）** および **リポジトリ内完結ホスティング（GitHub Pages）** の両方に1行のコード変更もなく対応しています。

---

## 1. Cloudflare Pages へのデプロイ（推奨・商用完全対応・最速）

Cloudflare Pages は無料プランでも商用利用（Commercial Use）が公式に認められており、帯域・リクエスト無制限でグローバルエッジ配信されます。

### 手順
1. [Cloudflare ダッシュボード](https://dash.cloudflare.com/) にログイン。
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** を選択。
3. リポジトリ `obsidian-plugins-portal` を選択。
4. ビルド設定を入力：
   - **Framework preset**: `Next.js (Static HTML Export)` または `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js Version**: 環境変数 `NODE_VERSION` に `22` を設定
5. **Save and Deploy** をクリック。
6. 以後、`master` ブランチへの push で自動ビルド＆世界最速エッジ配信が行われます。カスタムドメインの追加も可能です。

---

## 2. GitHub Pages へのデプロイ（GitHub完結）

`.github/workflows/deploy.yml` により、GitHub Actions 経由で完全自動デプロイが可能です。

### 手順
1. GitHub 上で本リポジトリの **Settings** を開く。
2. 左メニューの **Pages** を選択。
3. **Build and deployment** の **Source** を `Deploy from a branch` から **`GitHub Actions`** に変更。
4. `master` ブランチに Push されると、自動的に Actions が走り、`https://<username>.github.io/obsidian-plugins-portal/` に公開されます。
