# Architecture & Design Rationale (Why)

## 1. 目的とスコープ
本リポジトリ `obsidian-plugins-portal` は、Obsidian コミュニティプラグイン群の公式Webショーケースおよび個別ランディングページ（LP）を提供する静的Webサイトプロジェクトです。

## 2. ベンチマーク分析 (Notebook Navigator)
人気プラグイン **Notebook Navigator** (`notebooknavigator.com` / `johansan/notebook-navigator`) をベンチマークとし、以下の設計思想を抽出・採用しています。

- **シームレスなObsidian連携**:
  - `obsidian://show-plugin?id=<plugin-id>` スキームを活用した 1 クリック直接インストール導線。
- **ハイエンドなビジュアルアイデンティティ**:
  - Apple / Linear を想起させるダークモード基調、紫〜インディゴのアクセントグラデーション、グラスモーフィズムパネル。
- **Bento Grid による機能解説**:
  - 複雑な技術仕様やキーバインドを、直感的な視覚カード群で分かりやすく提示。
- **ポータブルな配信アーキテクチャ**:
  - プラットフォームロックインを避け、Cloudflare Pages / GitHub Pages のどちらでも追加設定なしで動作する静的エクスポート (`output: 'export'`)。

## 3. 技術選定とアーキテクチャ (Rationale)

### 3.1 Next.js (App Router) + TypeScript + Tailwind CSS
- **静的エクスポート (`output: 'export'`)**:
  - サーバーランタイムを不要とし、ビルド成果物を純粋な HTML/CSS/JS (`out/` ディレクトリ) として出力。
  - **Cloudflare Pages**: 商用利用完全対応、無制限のリクエスト/帯域幅、世界最速クラスのCDNエッジ配信。
  - **GitHub Pages**: 追加のアカウント不要、GitHub Actions を通じたリポジトリ内完結デプロイ。
- **Tailwind CSS**:
  - ダークモードとグラスモーフィズムスタイルを高効率で構築。

### 3.2 完全コンテナ隔離 (Docker)
- `/dev/GEMINI.md` に従い、ホストマシンをクリーンに保つため、依存関係のインストール、ビルド、検証はすべて Docker コンテナ内で実行。
- サービス名 `obsidian-plugins-portal` および ボリューム名 `obsidian_plugins_portal_node_modules` により、他プロジェクトとの名前空間衝突を完全に防止。

## 4. サイトマップとルーティング
- `/`: プラグインスイート全体のブランドポータル、哲学、プラグイン一覧
- `/plugins/page-flow`: Page Flow 専用のビジュアルリッチLP（デモ、キーバインド、Bento Grid）
- `/plugins/[id]`: 他プラグイン追加時の拡張用ルート
