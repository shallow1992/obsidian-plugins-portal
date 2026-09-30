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
- `/[lang]`: プラグインスイート全体のブランドポータル、哲学、プラグイン一覧カタログ
- `/[lang]/plugins/page-flow`: Page Flow 専用のビジュアルリッチLP（デモ、キーバインド、Bento Grid）
- `/[lang]/plugins/[id]`: 他プラグイン追加時の拡張用ルート（パスベース多言語静的ルーティング）

---

## 5. マルチプラグイン拡張アーキテクチャ (Multi-Plugin Directory Architecture)

本ポータルは単一プラグインのためのサイトではなく、将来的に複数の Obsidian プラグイン（`page-flow`, `vault-pruner`, `chat-notes` 等）を横断管理・ショーケースするためのプラットフォームです。
Web アプリケーション、静的アセット、ドキュメント、動画自動化スクリプトのすべてが、プラグイン ID（`<plugin-id>`）を軸に疎結合に分離・拡張できる構造を採用しています。

```text
obsidian-plugins-portal/
├── src/                                  # 🌐 サイトのソースコード
│   ├── app/                              # Next.js App Router (静的エクスポート)
│   │   ├── [lang]/                       # パスベース多言語ルーティング (/en, /ja)
│   │   │   ├── page.tsx                  # 【トップ】全プラグイン一覧・カタログ画面
│   │   │   └── plugins/
│   │   │       ├── page-flow/page.tsx    # 【個別LP】Page Flow 専用ランディングページ
│   │   │       └── <plugin-id>/page.tsx  # （将来追加）他プラグインの個別LP
│   │   └── layout.tsx                    # ルート共通レイアウト（Header/Footer等）
│   │
│   ├── components/                       # UI コンポーネント群
│   │   ├── common/                       # サイト共通（Header, Footer）
│   │   ├── portal/                       # カタログ一覧用（PluginCard, Filter等）
│   │   └── page-flow/                    # Page Flow 専用LPパーツ（Hero, BentoGrid, Demo等）
│   │       # ※今後他プラグインのLPを作る場合、components/<plugin-id>/ を追加
│   │
│   ├── data/
│   │   └── plugins.ts                    # 全プラグインの登録台帳（メタデータ、URL、カテゴリ等）
│   │
│   └── locales/                          # 日英の静的翻訳辞書
│       ├── en.ts
│       └── ja.ts
│
├── public/                               # 🖼️ Web 公開用静的アセット（Next.js 標準配置）
│   └── assets/
│       └── plugins/
│           ├── page-flow/                # Page Flow 用の公開素材
│           │   ├── demo.mp4              # LPに埋め込む完成版デモ動画
│           │   ├── demo.webm             # WebM フォールバック動画
│           │   └── icon.svg              # プラグインアイコン
│           └── <plugin-id>/              # 今後追加されるプラグインの公開動画・画像
│
├── docs/                                 # 📚 ドキュメント & 仕様書
│   ├── video-production-pipeline.md       # 全プラグイン共通の動画制作パイプライン設計書
│   └── plugins/                            # プラグイン別の台本・演出定義
│       └── page-flow/
│           ├── demo-script.md             # 台本・演出仕様書
│           └── demo-script.json           # シーン別メタデータ
│
├── scripts/                              # 🎬 自動化 ＆ ツール
│   └── demo/
│       ├── run.sh                          # マルチプラグイン対応デモ自動操作ランナー CLI
│       ├── README.md                       # 利用方法 ＆ 新規プラグイン追加ガイド
│       └── plugins/                        # プラグイン別の自動操作スクリプト
│           └── page-flow/
│               └── demo.applescript       # macOS ネイティブ AppleScript
│
└── raw_recordings/                       # 🎥 撮影用一時フッテージ（.gitignore 済）
    └── <plugin-id>/                      # プラグイン別に自動保存される .mov 素材
```

### 設計上のメリット
1. **カタログ自動連携**:
   `src/data/plugins.ts` に新規プラグインのメタデータを追加するだけで、トップのカタログ画面にカードや外部リンクが自動展開されます。
2. **個別LPの完全モジュール化**:
   リッチな個別LPを持つプラグインは `components/<plugin-id>/` に閉じて開発でき、他のプラグインやポータル全体に影響を与えません。
3. **動画制作・アセットパイプラインの統一**:
   動画の台本（`docs/plugins/`）、自動操作スクリプト（`scripts/demo/plugins/`）、録画フッテージ（`raw_recordings/`）、完成アセット（`public/assets/plugins/`）のすべてが同一の `<plugin-id>` 名前空間で統一されています。

