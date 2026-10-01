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

---

## 3. Webサイト制作ツールの技術選定 (Tech Stack Rationale)

| レイヤー | 採用技術 | 選定根拠 (Why) | 代替候補との比較・トレードオフ |
| :--- | :--- | :--- | :--- |
| **フレームワーク** | **Next.js (App Router)** | ・`output: 'export'` による完全静的HTML/CSS/JS出力<br>・React Server Components (RSC) のビルド時事前レンダリング<br>・TypeScript との最高水準の型安全性 | **Astro**: 静的出力に優れるが、ブラウザ上で動作する複雑なインタラクティブシミュレータ（Page Flowキーバインドシミュレータ等）の実装・コンポーネントエコシステムにおいて Next.js + React が勝る。<br>**Vite (SPA)**: 初期ロードSEOやSNSカード/OGPの静的事前生成に難があり、App Routerの静的メタデータ生成（`generateMetadata`）が優位。 |
| **UI / スタイリング** | **Tailwind CSS + Lucide Icons** | ・Apple/Linear 風のダークテーマ・グラスモーフィズム (`glass-panel`) をユーティリティクラスで高速・一貫構築<br>・未使用スタイルを自動パージし、ビルド成果物のCSSを極小化<br>・`lucide-react` による軽量で統一感のあるSVGアイコン | **CSS Modules / Styled Components**: クラス命名のオーバーヘッドやランタイムCSS注入コストが発生。Tailwind はゼロランタイムで静的配信に最適。 |
| **開発隔離基盤** | **Docker Compose** | ・ホストマシンの Node.js バージョンや環境汚染から完全に隔離（Zero Host Execution）<br>・名前空間付きボリューム（`obsidian_plugins_portal_node_modules`）により依存関係の競合を防止 | **ローカル直接実行**: 開発者や複数エージェント間でのNode.js/npmバージョン差異による再現性低下やホスト環境破壊リスクを排除。 |
| **多言語基盤 (i18n)** | **静的型安全ディクショナリ (`src/locales/`)** | ・`generateStaticParams` と連携した `/[lang]/...` パスベース静的ルーティング<br>・TypeScript の `Dictionary` 型定義により、キー欠落や型不一致をコンパイル時に検知<br>・ランタイム翻訳ライブラリ不要でゼロオーバーヘッド | **next-intl / i18next (ランタイム解決)**: 静的エクスポート (`output: 'export'`) においてミドルウェアやサーバー側リクエストヘッダ判定が利用できない制約があるため、TypeScriptディクショナリによる完全静的解決が最も堅牢。 |
| **ホスティング & CDN** | **Cloudflare Pages / GitHub Pages** | ・**Cloudflare Pages**: 商用利用完全対応、無制限帯域・リクエスト、世界最速水準のエッジネットワーク<br>・**GitHub Pages**: `.github/workflows/deploy.yml` によるリポジトリ完結の自動CI/CD<br>・ベンダーロックインなし（純粋な `out/` 静的資産） | **Vercel**: 商用利用時のホスティングプラン制約や過剰なサーバーレス課金リスクを回避。静的エクスポートのためエッジCDNで十分かつ最安（無料）。 |

---

## 4. エージェントスキル（Agent Skills）選定 & 協調アーキテクチャ

複数エージェント（Antigravity, Claude Code 等）および開発者が協調して、ポータルの品質維持・プラグインLPの自動生成・機能拡張を行うためのスキル体系を定義します。

### 4.1 スキル体系一覧

| スキル / ロール名 | 主な責務・実行内容 | 想定ツール / コマンド |
| :--- | :--- | :--- |
| **`web-portal-builder`**<br>(新規プラグインLP生成) | ・新規プラグインのメタデータを `src/data/plugins.ts` に登録<br>・`src/components/<plugin-id>/` にLP専用パーツ（Hero, BentoGrid, Demo）を足場掛け<br>・日英辞書（`src/locales/{en,ja}.ts`）への翻訳キー追加<br>・`src/app/[lang]/plugins/<plugin-id>/page.tsx` の生成 | テンプレート生成、ファイル作成、型定義同期 |
| **`static-export-validator`**<br>(静的整合性検証) | ・`output: 'export'` 制約への適合性検証（Node.js API/サーバーコンポーネント動的APIの混入防止）<br>・Docker 隔離環境での静的ビルド検証 (`npm run build`)<br>・`generateStaticParams` の網羅性チェック | `docker compose run --rm obsidian-plugins-portal npm run build` |
| **`i18n-dictionary-syncer`**<br>(多言語同期・品質チェック) | ・`src/locales/types.ts` と `en.ts` / `ja.ts` の同期チェック<br>・キーの漏れ（missing translation key）の静的検出<br>・自然な専門用語（Obsidianエコシステム用語）の日英翻訳整合性維持 | TypeScript 型チェック、ESLint |
| **`accessibility-ui-auditor`**<br>(a11y & UI品質検証) | ・WCAG 2.1 AA 準拠のコントラスト比検証（ダークモード背景とテキスト）<br>・キーボード操作シミュレータのフォーカス管理・アクセシビリティ担保<br>・レスポンシブ崩れ・モバイルビューの確認 | ESLint (`eslint-plugin-jsx-a11y`), ビルド時静的解析 |

### 4.2 エージェント協調ルール & 開発フロー
1. **Worktree 隔離**: 各 Issue に対して `.gemini/worktrees/issue-<num>-<desc>` または `.claude/worktrees/...` を作成して作業。
2. **Docker 内完結**: コマンド実行（ビルド・リント）はすべて `docker compose run --rm obsidian-plugins-portal ...` で実行。
3. **静的エクスポート担保**: `output: 'export'` を壊すライブラリや動的ルーティングの混入を PR 前に必ず検証。

---

## 5. サイトマップとルーティング
- `/[lang]`: プラグインスイート全体のブランドポータル、哲学、プラグイン一覧カタログ (`/en`, `/ja`)
- `/[lang]/plugins/page-flow`: Page Flow 専用のビジュアルリッチLP（デモ、キーバインド、Bento Grid）
- `/[lang]/plugins/[id]`: 他プラグイン追加時の拡張用ルート（パスベース多言語静的ルーティング）
- `/`: クライアント側で言語判定を行いデフォルトロケール (`/en` または `/ja`) へリダイレクト

---

## 6. マルチプラグイン拡張アーキテクチャ (Multi-Plugin Directory Architecture)

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
│       ├── types.ts                      # 辞書型定義 (Dictionary interface)
│       ├── index.ts                      # 言語解決ヘルパー
│       ├── en.ts                         # 英語辞書
│       └── ja.ts                         # 日本語辞書
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
│   ├── architecture.md                   # 全体アーキテクチャ & 技術選定根拠 (本ドキュメント)
│   ├── plugins-expansion-guide.md        # プラグインLP拡張ガイドライン
│   ├── video-production-pipeline.md      # 全プラグイン共通の動画制作パイプライン設計書
│   └── plugins/                          # プラグイン別の台本・演出定義
│       └── page-flow/
│           ├── demo-script.md            # 台本・演出仕様書
│           └── demo-script.json          # シーン別メタデータ
│
├── scripts/                              # 🎬 自動化 ＆ ツール
│   └── demo/
│       ├── run.sh                        # マルチプラグイン対応デモ自動操作ランナー CLI
│       ├── README.md                     # 利用方法 ＆ 新規プラグイン追加ガイド
│       └── plugins/                      # プラグイン別の自動操作スクリプト
│           └── page-flow/
│               └── demo.applescript      # macOS ネイティブ AppleScript
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
