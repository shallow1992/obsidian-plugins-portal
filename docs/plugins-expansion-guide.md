# Plugin Landing Page Expansion Guide (プラグインLP拡張ガイドライン)

本ドキュメントは、`obsidian-plugins-portal` に新しい Obsidian プラグインを追加・登録し、個別ランディングページ（LP）やショーケースを安全・迅速に構築するための手順書です。人間開発者および AI エージェント（`web-portal-builder` スキル）が参照することを想定しています。

---

## 1. プラグイン拡張の概要

ポータルサイトへのプラグイン追加には、以下の 2 つのレベルがあります：

1. **レベル 1: カタログ登録のみ (Lite)**
   - トップページ（`/[lang]`）のカタロググリッドにプラグインカードを追加し、Obsidian 直接インストールリンク（`obsidian://show-plugin?id=...`）や GitHub リンクを提供。
   - 所要時間: 数分（`src/data/plugins.ts` の編集のみ）。
2. **レベル 2: 専用ランディングページ作成 (Full Showcase)**
   - Page Flow のように、専用のルート（`/[lang]/plugins/<plugin-id>`）とリッチなビジュアルコンポーネント（Hero, BentoGrid, インタラクティブデモ, 実機動画）を作成。
   - 所要時間: 1〜2 時間（コンポーネント作成、多言語辞書同期、動画/静的アセット配置）。

---

## 2. レベル 1: カタログへの新規プラグイン登録手順

1. **`src/data/plugins.ts` にプラグイン情報を追加**:
   ```typescript
   {
     id: "my-plugin",
     name: "My Plugin",
     tagline: "Short Catchphrase in English",
     description: "One or two sentences summarizing value proposition.",
     category: "Utility", // "Reading" | "Maintenance" | "Capture" | "Sync" | "Utility"
     status: "Stable",    // "Featured" | "Stable" | "In Review" | "Beta"
     badgeColor: "bg-blue-600/20 text-blue-300 border-blue-500/40",
     hasDedicatedLandingPage: false,
     obsidianInstallUri: "obsidian://show-plugin?id=my-plugin",
     githubUrl: "https://github.com/HirotakaAsako/my-plugin",
     highlights: ["Feature A", "Feature B", "Feature C"]
   }
   ```
2. **検証**:
   Docker 隔離環境でビルドを実行し、トップページカタログに自動反映されることを確認します。
   ```bash
   docker compose run --rm obsidian-plugins-portal npm run build
   ```

---

## 3. レベル 2: 専用個別LPの作成手順

専用LPを作成する場合、以下のステップを順次実行します。

### ステップ 1: プラグイン登録台帳の更新
`src/data/plugins.ts` で `hasDedicatedLandingPage: true` と `landingPageUrl: "/plugins/<plugin-id>"` を設定します。

### ステップ 2: 多言語辞書（i18n）の定義
1. `src/locales/types.ts` に新規プラグインの型定義を追加します：
   ```typescript
   export interface MyPluginDictionary {
     title: string;
     tagline: string;
     hero: { ... };
     bento: { ... };
   }

   export interface Dictionary {
     // ... 既存
     myPlugin: MyPluginDictionary;
   }
   ```
2. `src/locales/en.ts` および `src/locales/ja.ts` に対応する翻訳テキストを追加します。

### ステップ 3: UI コンポーネント群の作成
`src/components/<plugin-id>/` ディレクトリを作成し、必要なパーツを実装します：
- `src/components/<plugin-id>/<PluginId>View.tsx`: LP 全体のメインコンテナ（Header, Hero, BentoGrid, Demo, CTA, Footer）
- `src/components/<plugin-id>/Hero.tsx`: ファーストビュー・タイトル・インストールCTA
- `src/components/<plugin-id>/BentoGrid.tsx`: 主要機能・仕様カード群
- `src/components/<plugin-id>/InteractiveDemo.tsx`（任意）: ブラウザ上でキー操作等を体感できるシミュレータ

> [!TIP]
> 既存の `src/components/page-flow/` のコンポーネント構成をテンプレートとして活用してください。

### ステップ 4: App Router ページの作成
`src/app/[lang]/plugins/<plugin-id>/page.tsx` を作成します：
```tsx
import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/locales";
import MyPluginView from "@/components/<plugin-id>/<PluginId>View";

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

interface Props {
  params: { lang: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const dict = getDictionary(lang);

  return {
    title: `${dict.myPlugin.title} | Obsidian Community Plugin`,
    description: dict.myPlugin.tagline,
    alternates: {
      languages: {
        en: `/en/plugins/<plugin-id>/`,
        ja: `/ja/plugins/<plugin-id>/`,
      },
    },
  };
}

export default function PluginLandingPage({ params }: Props) {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const dict = getDictionary(lang);

  return <MyPluginView lang={lang} dict={dict} />;
}
```

### ステップ 5: 静的アセット・動画の配置
1. プラグインアイコン・OGP画像: `public/assets/plugins/<plugin-id>/icon.svg`
2. デモ動画（実機収録または自動生成）:
   - `public/assets/plugins/<plugin-id>/demo.mp4`
   - `public/assets/plugins/<plugin-id>/demo.webm`
   - 動画制作は `docs/video-production-pipeline.md` のパイプラインに従って作成します。

---

## 4. エージェント向け品質検証チェックリスト (Quality Checklist)

LP 追加・編集時、AI エージェントは以下のチェックを必ずパスさせる必要があります：

- [ ] **静的エクスポート整合性**:
  - `generateStaticParams()` が実装されており、全言語 (`en`, `ja`) の静的ルートが生成されること。
  - サーバー専用モジュール（`fs`, `process.env` 動的参照等）がクライアントコンポーネントに漏洩していないこと。
- [ ] **多言語辞書同期**:
  - `src/locales/types.ts`、`en.ts`、`ja.ts` のプロパティが完全に一致し、TypeScript 型エラーが発生しないこと。
- [ ] **アクセシビリティ (a11y)**:
  - 画像やアイコンボタンに適切な `alt` または `aria-label` が付与されていること。
  - インタラクティブデモでキー操作イベントリスナーを登録する際、メモリリーク防止のクリーンアップ（`removeEventListener`）が行われていること。
- [ ] **Docker 隔離検証**:
  - `docker compose run --rm obsidian-plugins-portal npm run lint` が 0 エラーであること。
  - `docker compose run --rm obsidian-plugins-portal npm run build` が正常完了し `out/` が正しく生成されること。
