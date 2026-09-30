# Multi-Plugin Demo Automation & Recording Guide

本ディレクトリには、`docs/video-production-pipeline.md` に基づく、**Obsidian プラグインのデモ動画 自動操作 ＆ 画面収録ランナー**が配置されています。
ポータルで扱う複数のプラグイン（`page-flow` 等）ごとにスクリプトを分離し、共通のランナーから実行できます。

---

## 📁 ディレクトリ構造

```text
scripts/demo/
├── run.sh                          # 共通ランナー (CLI)
├── README.md                       # 本ガイド
└── plugins/                        # プラグイン別操作スクリプト
    ├── page-flow/
    │   └── demo.applescript       # Page Flow 用操作シナリオ
    └── <plugin-id>/                # 将来追加されるプラグイン
        └── demo.applescript
```

---

## 📋 準備（Pre-flight Checklist）

1. **Obsidian の準備**:
   * Obsidian を起動し、対象プラグインのデモ用ノートを用意します。
   * 対象プラグインを有効化しておきます。
2. **Mac の権限確認**:
   * **アクセシビリティ**: AppleScript からキーストロークを送信するため必要。
   * **画面収録**: 自動録画（`--record`）を使用する場合、ターミナルアプリに画面収録の権限が必要。
   * *設定場所*: **システム設定 > プライバシーとセキュリティ > 「アクセシビリティ」および「画面収録」**

---

## 🎬 実行方法

### 構文
```bash
./scripts/demo/run.sh <plugin-id> [mode] [--record]
```

### 利用可能なプラグインの確認
引数なしまたは `--help` で実行すると、利用可能なプラグイン一覧が表示されます：
```bash
./scripts/demo/run.sh
```

### 方法 A: 完全自動録画モード（推奨）
スクリプトが自動で画面録画を開始し、操作完了後に自動で停止して `raw_recordings/<plugin-id>/` に `.mov` を保存します。

```bash
# Page Flow の全シーンを一通しで完全自動録画
./scripts/demo/run.sh page-flow full --record

# またはシーンごとに自動録画
./scripts/demo/run.sh page-flow scene1 --record
./scripts/demo/run.sh page-flow scene2 --record
./scripts/demo/run.sh page-flow scene3 --record
```

---

### 方法 B: 手動録画モード（5 秒カウントダウン）
`Cmd + Shift + 5` で自分で録画タイミングを合わせたい場合に使用します。

```bash
./scripts/demo/run.sh page-flow full
```

1. コマンドを実行すると、デスクトップ通知およびターミナルで **「5... 4... 3... 2... 1...」** の音声＆カウントダウンが流れます。
2. その 5 秒の間に `Cmd + Shift + 5` で Obsidian ウィンドウの収録を開始します。
3. 自動で Obsidian が最前面になり、プラグインのデモ操作が実行されます。
4. 動作完了通知（チャイム音とデスクトップ通知）が鳴ったら収録を終了します。

---

## ➕ 新しいプラグインのデモを追加する手順

1. `scripts/demo/plugins/<plugin-id>/` ディレクトリを作成。
2. その中に `demo.applescript` を作成し、シーン別ハンドラ（`runScene1`, `runScene2` 等）を実装。
3. `docs/plugins/<plugin-id>/demo-script.md` に台本・演出仕様を記述。
4. `./scripts/demo/run.sh <plugin-id> full --record` で実行可能になります。
