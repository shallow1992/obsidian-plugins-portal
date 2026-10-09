# Design System & Guidelines (design.md)

本ドキュメントは、**Obsidian Plugins Portal** および配下の個別プラグインランディングページ（LP）における、ビジュアルデザイン、レイアウト、タイポグラフィ、UIコンポーネント、インタラクションの一貫性を担保するための公式デザインシステム仕様書です。

人間デザイナー・エンジニアおよび AI エージェント（`web-portal-builder`, `accessibility-ui-auditor` 等）が、既存ページと同等の品質と世界観を維持したまま、新規ページの追加や既存コンポーネントの改善を行えるよう、厳密なルールと具体的な実装パターンを定義しています。

---

## 1. デザインフィロソフィー (Design Philosophy)

本サイトのデザインは、**Notebook Navigator** や **Linear**, **Apple Developer** をベンチマークとし、以下の基本原則に基づいています。

1. **Obsidian-Native Dark Theme**:
   - 暗黒色（`#09090b`）を基調とし、純黒（`#000000`）の重さを避けつつ、Obsidian のデフォルトダークテーマとシームレスに調和する空間を構築します。
2. **Glassmorphism & Depth (深さと質感)**:
   - 単調なフラットデザインではなく、半透明のパネル背景、繊細な境界線（1px border）、背後の微弱なラジアルグロー（紫〜インディゴ）により、奥行きとハイエンドな質感を表現します。
3. **Keyboard & Developer First**:
   - キーボードバッジ（`<kbd>`）、等幅フォント（`font-mono`）、コード・ターミナルライクなインジケーターを適切に配置し、開発者・パワーユーザーの審美眼に耐えうる意匠にします。
4. **Interactive Tactility (触感の提示)**:
   - 静的な説明にとどまらず、ブラウザ上で実際にキーを押して体験できるインタラクティブシミュレータや、実機動画プレビューをファーストビュー直下に配置し、製品の手応えを即座に伝えます。

---

## 2. カラーパレット & トークン規約 (Color Palette & Tokens)

Tailwind CSS のトークンおよびユーティリティクラスを以下のように標準化します。

### 2.1 背景 & サーフェス (Background & Surface)

| トークン名 | カラーコード / クラス | 用途 |
| :--- | :--- | :--- |
| **Canvas Background** | `#09090b` (`bg-[#09090b]` または `bg-zinc-950`) | ページ全体のベース背景 |
| **Glass Panel** | `rgba(24, 24, 27, 0.65)` (`.glass-panel`) | 主要カード、Bento Grid、モーダル、ヘッダー |
| **Glass Panel Hover** | `rgba(39, 39, 42, 0.65)` (`.glass-panel-hover`) | カードホバー時の背景浮き上がり |
| **Mock Editor Background** | `#0c0c0e` (`bg-[#0c0c0e]`) | シミュレータ・動画枠内部のエディタ再現領域 |
| **Dock / Header Bar** | `bg-zinc-900/90` | ウィンドウ風UIのタイトルバー、下部ドック |

### 2.2 アクセント & ブランドカラー (Accents & Brand)

| 用途 | クラス | スタイル |
| :--- | :--- | :--- |
| **プライマリグラデーション** | `.text-gradient-purple` | `linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)`（見出しのハイライト単語） |
| **プライマリボタン (CTA)** | `bg-purple-600 hover:bg-purple-500` | シャドウ: `shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40` |
| **セカンダリボタン** | `bg-zinc-900/90 hover:bg-zinc-800` | 境界線: `border border-zinc-700/80 text-zinc-200` |
| **環境光グロー (Radial Glow)** | `bg-purple-600/20 blur-[140px]` | セクション背景の光彩（絶対配置 `-z-10`、`pointer-events-none`） |

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

## 4. コンポーネント設計パターン (Component Patterns)

新規コンポーネントを作成する際は、以下の構造パターンに従ってください。

### 4.1 ピル型バッジ (Pill Badge)
セクション冒頭やHero上部に配置するマイクロバッジ：
```tsx
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/60 text-xs font-medium text-purple-300 shadow-inner">
  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
  <span>{dict.badge}</span>
</div>
```

### 4.2 アクションボタン (CTA Buttons)
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

### 4.3 モックウィンドウフレーム (Mock Window Frame)
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
    <div className="text-[11px] font-mono text-purple-300">
      Status Indicator
    </div>
  </div>

  {/* ウィンドウコンテンツ */}
  <div className="p-6 bg-[#0c0c0e]">
    {/* コンテンツ本体 */}
  </div>
</div>
```

### 4.4 Bento Grid (機能紹介グリッド)
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

### 4.5 キーボードバッジ (`<kbd>`)
ホットキー表や操作説明で使用するキーボード打鍵表現：
```tsx
<kbd className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs shadow-sm inline-block">
  Space
</kbd>
```

---

## 5. 新規ページ・LP追加時のレイアウト構造規約

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
   - 4つの柱となるコア機能・設計思想カード
4. Hotkey Matrix Section (該当時):
   - キーバインド一覧テーブル (デフォルト vs Vimスタイル等)
5. Settings / Deep Dive Section:
   - 詳細設定・チューニング項目のウォークスルー
6. Bottom CTA Section:
   - インストールへのリマインドと背景グラデーション
7. Footer (サイト共通)
```

---

## 6. 国際化 (i18n) & テキスト品質ルール

1. **完全辞書化の原則**:
   - UI内のすべての表示テキスト（ボタン名、タグ、説明、テーブルヘッダー、プレースホルダー）は、ハードコードを禁止し、`src/locales/`（`en.ts` および `ja.ts`）に定義します。
2. **日英対称性の維持**:
   - `src/locales/types.ts` で型定義（`Dictionary`）を厳格に管理し、英語・日本語のいずれかでキーが欠落している場合はコンパイルエラーとなる構造を維持します。
3. **自然な翻訳とトーン**:
   - 日本語（`ja`）: 開発者向けに知的で洗練され、体言止めを適度に交えたスムーズな技術日本語（「〜へ」「〜を実現」）。
   - 英語（`en`）: 動詞始まり（Imperative / Action-oriented）で簡潔かつパンチのある表現。

---

## 7. アクセシビリティ & レスポンシブ検証チェックリスト

新しいページやコンポーネントをコミットする前に、以下の項目を点検してください：

- [ ] **カラーコントラスト**:
  - `bg-[#09090b]` 上の本文テキストは最低限 `text-zinc-400`（コントラスト比 4.5:1 以上）を確保すること。`text-zinc-600` 以下は装飾メタデータやボーダーにのみ使用。
- [ ] **フォーカス & キーボード操作**:
  - シミュレータのキーボードイベントは `input`, `textarea` フォーカス中には発火しないようガードすること（`tagName !== "INPUT"`）。
  - すべてのインタラクティブ要素（ボタン、リンク）はキーボード Tab キーで到達可能であること。
- [ ] **レスポンシブ崩れ防止**:
  - モバイル画面（幅 375px〜）において、Bento Grid が 1 カラムに折り返され、横スクロール（Horizontal Overflow）が発生しないこと。
  - テーブルは `overflow-x-auto` でラップされていること。
- [ ] **モーション & パフォーマンス**:
  - ボタンのアクティブ状態に `active:scale-95 transition-all` を付与し、小気味よいクリックフィードバックを提供すること。
  - 重いアニメーションは避け、CSS による軽量なトランジション（`transition-colors`, `transition-all`）で完結させること。
