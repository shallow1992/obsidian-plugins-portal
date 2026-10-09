# Design System & Engineering Guidelines (design.md)

本ドキュメントは、**Obsidian Plugins Portal** および配下の個別プラグインランディングページ（LP）における、ビジュアルデザイン、レイアウト、タイポグラフィ、UIコンポーネント、インタラクションの一貫性を担保するための公式デザインシステム仕様書です。

人間デザイナー・エンジニアおよび AI エージェント（`web-portal-builder`, `accessibility-ui-auditor` 等）が、既存ページと同等のハイエンドな質感・設計思想を維持したまま、新規ページの追加や既存コンポーネントの改善を行えるよう、厳密なトークン定義、コピペ可能な実装テンプレート、アンチパターン、レビューチェックリストを網羅しています。

---

## 1. デザインフィロソフィー (Design Philosophy)

本サイトのデザインは、**Notebook Navigator** や **Linear**, **Apple Developer** をベンチマークとし、以下の 4 原則に基づいています。

1. **Obsidian-Native Dark Theme**:
   - ベースキャンバスは `#09090b`（亜鉛色ディープダーク）。純黒（`#000000`）の過度な重さやコントラスト疲労を避け、Obsidian のデフォルトダークテーマとシームレスに調和する視覚空間を構築します。
2. **Glassmorphism & Optical Depth (光学的な深みと質感)**:
   - 単調なフラットデザインを廃し、半透明のパネル背景（`rgba(24, 24, 27, 0.65)`）、繊細な境界線（`border border-zinc-800` / `border-white/10`）、背後の微弱なラジアルグロー（紫〜インディゴ）により、階層と奥行きを表現します。
3. **Keyboard & Developer First (道具としての佇まい)**:
   - キーボードバッジ（`<kbd>`）、等幅フォント（`font-mono`）、コード・ターミナルライクなインジケーターを要所に配置し、思考を邪魔しない道具感を体現します。
4. **Interactive Tactility (触感の提示)**:
   - スクリーンショットのみの説明にとどまらず、ブラウザ上でキーを押して体験できるインタラクティブシミュレータや、実機動画プレビューをファーストビュー直下に配置し、製品の「手応え」を即座に伝えます。

---

## 2. カラートークン & サーフェス規約 (Color Tokens & Surfaces)

Tailwind CSS のトークンおよびユーティリティクラスを以下のように標準化します。

### 2.1 背景 & レイヤー階層 (Background & Layering)

```text
[Layer 0: Canvas Base]        #09090b (Tailwind: bg-[#09090b])
    ↓
[Layer -1: Ambient Glow]      bg-purple-600/20 blur-[140px] (絶対配置 -z-10, pointer-events-none)
    ↓
[Layer 1: Glass Panels]       .glass-panel (rgba(24,24,27,0.65) + backdrop-blur-md + border-white/10)
    ↓
[Layer 2: Surface Inset/Deck] #0c0c0e (bg-[#0c0c0e] エディタ内枠・動画プレイヤー領域)
    ↓
[Layer 3: UI Controls & Dock] bg-zinc-900/90 (border-b border-zinc-800 ウィンドウヘッダー・操作ドック)
```

| トークン名 | カラーコード / クラス | 主な用途 |
| :--- | :--- | :--- |
| **Canvas Background** | `#09090b` (`bg-[#09090b]`) | ページ全体の最背面 |
| **Glass Panel** | `rgba(24, 24, 27, 0.65)` (`.glass-panel`) | 主要カード、Bento Grid、モーダル、ヘッダー |
| **Glass Panel Hover** | `rgba(39, 39, 42, 0.65)` (`.glass-panel-hover`) | カードホバー時の背景浮き上がり |
| **Mock Editor Background** | `#0c0c0e` (`bg-[#0c0c0e]`) | シミュレータ・動画枠内部のエディタ再現領域 |
| **Dock / Header Bar** | `bg-zinc-900/90` | ウィンドウ風UIのタイトルバー、下部ドック |
| **Pill Inset Surface** | `bg-zinc-950/60` | 数値・タグ・ステータス表示のインセット背景 |

### 2.2 アクセント & ブランドカラー (Accents & Brand)

| 用途 | クラス | スタイル |
| :--- | :--- | :--- |
| **見出しグラデーション** | `.text-gradient-purple` | `linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)` |
| **本文グラデーション** | `.text-gradient` | `linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)` |
| **プライマリボタン (CTA)** | `bg-purple-600 hover:bg-purple-500` | シャドウ: `shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40` |
| **セカンダリボタン** | `bg-zinc-900/90 hover:bg-zinc-800` | 境界線: `border border-zinc-700/80 text-zinc-200` |
| **環境光グロー (Radial Glow)** | `bg-purple-600/20 blur-[140px]` | セクション背景の光彩（幅800px・高さ450px） |

### 2.3 セマンティックステータスバッジ (Badges)

各プラグインのカテゴリ・状態バッジには、以下のコントラスト比を遵守した組み合わせを使用します：

- **Featured (注目)**: `bg-purple-600/20 text-purple-300 border-purple-500/40`
- **Stable / Verified (安定・安全)**: `bg-emerald-600/20 text-emerald-300 border-emerald-500/40`
- **Beta / Momentum (加速・注意)**: `bg-amber-600/20 text-amber-300 border-amber-500/40`
- **Utility / Sync (ユーティリティ・同期)**: `bg-blue-600/20 text-blue-300 border-blue-500/40` または `bg-indigo-600/20 text-indigo-300 border-indigo-500/40`

---

## 3. タイポグラフィ規約 (Typography)

フォントファミリーは `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif` を基本とし、数値・キーバインド・メタデータには等幅フォント（`font-mono`）を適用します。

### 3.1 フォント階層ルール

| 階層 | クラス設定 | 適用先 | 例 |
| :--- | :--- | :--- | :--- |
| **Hero H1** | `text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]` | ページの主見出し | `ノートの閲覧・トリアージを 滑らかな滑空体験へ` |
| **Section H2** | `text-3xl sm:text-4xl font-extrabold text-white tracking-tight` | セクション見出し | `読書を「滑空」へと変える4つの柱` |
| **Section Badge** | `text-xs uppercase font-bold tracking-widest text-purple-400` | セクション小見出し | `フローのための緻密な設計` |
| **Card H3** | `text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors` | Bento/カタログカード名 | `ハイブリッド単一キーナビゲーション` |
| **Body (リード文)** | `text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed` | Hero サブコピー | 説明リード文 |
| **Body (通常文)** | `text-sm text-zinc-400 leading-relaxed` | カード内説明・機能詳細 | 機能詳細テキスト |
| **Caption / Mono** | `text-xs text-zinc-500 font-mono` | キー表示、バージョン、タグ | `Space (85%)`, `v1.0.3` |

---

## 4. スペーシング & レイアウトグリッド (Spacing & Layout Grid)

サイト全体の縦のリズムとコンテナ幅を厳格に揃えることで、複数ページを横断したときのブレを防止します。

### 4.1 コンテナ幅規約
- **ポータルトップ (`/[lang]`)**: `max-w-6xl mx-auto px-4 sm:px-6` (幅約 1152px)
- **個別プラグインLP (`/[lang]/plugins/<id>`)**: `max-w-5xl mx-auto px-4 sm:px-6` (幅約 1024px)
- **Hero & CTA テキストブロック**: `max-w-3xl mx-auto` または `max-w-2xl mx-auto` (読みやすい行長に制限)

### 4.2 セクション間余白 (Vertical Rhythm)
- **Hero セクション**: `pt-12 pb-20` (ファーストビューのまとまり)
- **中間セクション (BentoGrid, Hotkeys, Settings)**: `py-20`
- **コンポーネント内余白**:
  - カード内パディング: `p-6 sm:p-8` (小カード) / `p-8 sm:p-10` (大カード)
  - 要素間ギャップ: `space-y-4` (標準ブロック) / `space-y-8` (セクションヘッダーとコンテンツ間)

---

## 5. コンポーネント設計パターン (Component Recipes)

新規コンポーネントを作成する際は、以下の構造パターンに従ってください。

### 5.1 ピル型バッジ (Pill Badge)
セクション冒頭やHero上部に配置するマイクロバッジ：
```tsx
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/60 text-xs font-medium text-purple-300 shadow-inner">
  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
  <span>{dict.badge}</span>
</div>
```

### 5.2 アクションボタン (CTA Buttons)
主要CTA（Obsidian直接インストール）およびセカンダリCTA（GitHub）：
```tsx
{/* プライマリ: Obsidian インストール */}
<a
  href="obsidian://show-plugin?id=<plugin-id>"
  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40 transition-all active:scale-95"
>
  <Download className="w-4 h-4" />
  <span>{dict.installInObsidian}</span>
</a>

{/* セカンダリ: GitHub リポジトリ */}
<a
  href="https://github.com/..."
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-semibold text-sm transition-all active:scale-95"
>
  <Github className="w-4 h-4 text-zinc-400" />
  <span>{dict.viewOnGithub}</span>
</a>
```

### 5.3 モックウィンドウフレーム (Mock Window Frame)
シミュレータ、デモ動画、コードブロックを囲む macOS / Obsidian 風のウィンドウ枠：
```tsx
<div className="w-full max-w-4xl mx-auto rounded-2xl glass-panel border border-zinc-800 shadow-2xl overflow-hidden text-left">
  {/* ウィンドウヘッダー */}
  <div className="bg-zinc-900/90 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
      <span className="text-xs text-zinc-400 font-mono ml-2 flex items-center gap-1.5">
        filename.md
      </span>
    </div>
    {/* 右側インジケーター */}
    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-900/40 border border-purple-700/50 text-[11px] font-mono text-purple-300">
      Status Indicator
    </div>
  </div>

  {/* ウィンドウコンテンツ */}
  <div className="p-6 bg-[#0c0c0e]">
    {/* コンテンツ本体 */}
  </div>
</div>
```

### 5.4 Bento Grid (機能紹介グリッド)
3カラム構成を基準とし、重要機能は `md:col-span-2` でワイド表示します：
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* ワイドカード (注目機能) */}
  <div className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all">
    <div className="space-y-4 max-w-md">
      <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  </div>

  {/* 通常カード (物理特性・仕様) */}
  <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all flex flex-col justify-between">
    <div className="space-y-4">
      <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
        <Zap className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
    <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex justify-between">
      <span>{metricLabel}</span>
      <span className="text-amber-400 font-bold">{metricValue}</span>
    </div>
  </div>
</div>
```

### 5.5 キーボードバッジ (`<kbd>`)
ホットキー表や操作説明で使用するキーボード打鍵表現：
```tsx
<kbd className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs shadow-sm inline-block">
  Space
</kbd>
```

---

## 6. 新規プラグイン個別LPの標準セクション構造規約

新しいプラグインの専用LP（`src/app/[lang]/plugins/<plugin-id>/page.tsx`）を作成する場合、以下の**標準セクション順序**を踏襲してください：

```text
1. Header (サイト共通、多言語切替含む)
2. Hero Section:
   - バッジ (バージョン情報等)
   - タイトル (H1 + text-gradient-purple) & リード文
   - 主CTA (Obsidian直接インストール + GitHub)
   - メタデータタグ行 (対応バージョン、特徴等)
   - 実機ショーケース (動画プレビュー ＆ インタラクティブシミュレータのタブ切替)
3. Bento Grid Section:
   - 4つの柱となるコア機能・設計思想カード (2カラムワイド ＋ 1カラム通常 × 2)
4. Hotkey Matrix Section (該当時):
   - キーバインド一覧テーブル (デフォルト vs Vimスタイル等)
5. Settings / Deep Dive Section:
   - 詳細設定・チューニング項目のウォークスルー (3カラムカード)
6. Bottom CTA Section:
   - インストールへのリマインドと背景グラデーション
7. Footer (サイト共通)
```

---

## 7. 新規プラグイン個別LP スキャフォールディング雛形 (Scaffolding Template)

AI エージェントまたは開発者が新しいプラグイン専用LP（例: `vault-pruner`）を即座に作成できるように、完成形の雛形テンプレートを提供します。

### 7.1 View コンテナ雛形 (`src/components/<plugin-id>/<PluginId>View.tsx`)
```tsx
import React from "react";
import Hero from "@/components/<plugin-id>/Hero";
import BentoGrid from "@/components/<plugin-id>/BentoGrid";
import BottomCTA from "@/components/<plugin-id>/BottomCTA";
import { Locale, Dictionary } from "@/locales";

interface Props {
  lang: Locale;
  dict: Dictionary;
}

export default function PluginView({ lang, dict }: Props) {
  return (
    <div className="space-y-4">
      <Hero dict={dict.<pluginId>} commonDict={dict.common} />
      <BentoGrid dict={dict.<pluginId>.bento} />
      <BottomCTA dict={dict.<pluginId>.cta} />
    </div>
  );
}
```

### 7.2 App Router ページ雛形 (`src/app/[lang]/plugins/<plugin-id>/page.tsx`)
```tsx
import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/locales";
import PluginView from "@/components/<plugin-id>/<PluginId>View";

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const dict = getDictionary(lang);

  return {
    title: `${dict.<pluginId>.hero.title} | Obsidian Community Plugin`,
    description: dict.<pluginId>.hero.subtitle,
    alternates: {
      languages: {
        en: `/en/plugins/<plugin-id>/`,
        ja: `/ja/plugins/<plugin-id>/`,
      },
    },
  };
}

export default function PluginLandingPage({ params }: PageProps) {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const dict = getDictionary(lang);

  return <PluginView lang={lang} dict={dict} />;
}
```

---

## 8. 国際化 (i18n) & テキスト品質ルール

1. **完全辞書化の原則**:
   - UI内のすべての表示テキスト（ボタン名、タグ、説明、テーブルヘッダー、プレースホルダー）は、ハードコードを禁止し、`src/locales/`（`en.ts` および `ja.ts`）に定義します。
2. **日英対称性の維持**:
   - `src/locales/types.ts` で型定義（`Dictionary`）を厳格に管理し、英語・日本語のいずれかでキーが欠落している場合はコンパイルエラーとなる構造を維持します。
3. **自然な翻訳とトーン**:
   - 日本語（`ja`）: 開発者向けに知的で洗練され、体言止めを適度に交えたスムーズな技術日本語（「〜へ」「〜を実現」）。
   - 英語（`en`）: 動詞始まり（Imperative / Action-oriented）で簡潔かつパンチのある表現。

---

## 9. アンチパターン集 (Design Anti-Patterns: これをやってはいけない)

デザイン破綻を未然に防ぐため、以下の実装を禁止します：

- ❌ **純黒 `#000000` を背景ベタ塗りすること**:
  - 必ず `#09090b` または `.glass-panel` を使用してください。純黒はコントラストが強すぎて視覚疲労を引き起こします。
- ❌ **低コントラストなテキスト色 (`text-zinc-600` 以下) を本文に使うこと**:
  - 暗色背景上での可読性を担保するため、本文は `text-zinc-300` または `text-zinc-400` を使用してください。
- ❌ **派手すぎるマルチカラーの乱用**:
  - 主調色はパープル〜インディゴ（`purple-600` / `indigo-600`）。アクセントとしてのアンバー（注意・モメンタム）やエメラルド（安全性）は要所（1カード1色）に限定してください。
- ❌ **コンポーネント内への文言ハードコード**:
  - 例: `<span>Install in Obsidian</span>` と直書きせず、必ず `dict.installInObsidian` を参照してください。
- ❌ **ホスト依存の重いライブラリの追加**:
  - 静的エクスポート (`output: 'export'`) との互換性がないサーバーサイドライブラリや過剰なアニメーションライブラリ（Framer Motion の過度な利用等）は導入せず、Tailwind CSS の `transition-all` や CSS アニメーションを優先してください。

---

## 10. エージェント向け品質検証チェックリスト (Design PR Checklist)

新しいページやコンポーネントを追加・修正した際、AI エージェントおよび開発者は以下のチェックをパスする必要があります：

- [ ] **ビジュアル & カラートークン**:
  - 背景、パネル、ボーダーが `.glass-panel` および指定トークンに準拠しているか。
  - セクション上部に環境光（Radial Glow）が配置されているか。
- [ ] **タイポグラフィ & コントラスト**:
  - H1 に `.text-gradient-purple` が適用されているか。
  - 本文テキストのコントラスト比が 4.5:1 以上（`text-zinc-400` 以上）を確保しているか。
- [ ] **インタラクション & a11y**:
  - すべてのボタン・リンクに `active:scale-95 transition-all` が設定されているか。
  - インタラクティブ要素（キーボードシミュレータ）のイベント発火時、`input`/`textarea` 入力中が除外されているか。
- [ ] **多言語 (i18n) 整合性**:
  - 画面内の全テキストが `src/locales/` に定義され、`types.ts`、`en.ts`、`ja.ts` が 100% 同期しているか。
- [ ] **Docker 隔離 & ビルド検証**:
  - `docker compose run --rm obsidian-plugins-portal npm run lint` が 0 errors / 0 warnings であるか。
  - `docker compose run --rm obsidian-plugins-portal npm run build` が静的エクスポート (`out/`) を正常生成できるか。
