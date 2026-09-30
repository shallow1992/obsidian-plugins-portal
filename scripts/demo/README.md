# Page Flow Demo Automation & Recording Guide

本ディレクトリには、`docs/video-production-pipeline.md` の Step 3 に基づく、**macOS ネイティブの AppleScript 自動操作スクリプト**が配置されています。

---

## 📋 準備（Pre-flight Checklist）

1. **Obsidian の準備**:
   * Obsidian を起動し、テスト用ノートを 3〜4 つ同じフォルダ内に用意します（例: `01-Intro`, `02-Feature`, `03-Control`, `04-Summary`）。各ノートには数段落のテキストを入れておきます。
   * **Page Flow プラグインを有効化** しておきます。
2. **Mac の「アクセシビリティ」権限の確認**:
   * AppleScript から Obsidian にキー入力を送信するため、初回実行時に macOS の権限ダイアログが出ます。
   * **システム設定 > プライバシーとセキュリティ > アクセシビリティ** で、お使いのターミナル（Terminal, iTerm2, Antigravity 等）を許可（ON）にしてください。

---

## 🎬 実行方法

ターミナルから以下のコマンドを実行します：

```bash
# 全シーンを一通しで実演（おすすめ）
./scripts/demo/run.sh full

# またはシーンごとに個別実演
./scripts/demo/run.sh scene1   # シーン1: 行き止まり
./scripts/demo/run.sh scene2   # シーン2: スペース滑空
./scripts/demo/run.sh scene3   # シーン3: 逆走 & 急ブレーキ
```

### 録画の流れ
1. コマンドを実行すると、ターミナルで **「3... 2... 1...」のカウントダウン** が始まります。
2. その間に **`Cmd + Shift + 5`** を押し、「選択したウィンドウを収録」で Obsidian のウィンドウをクリックして「収録」を開始します。
3. 自動で Obsidian が最前面に切り替わり、キー入力（Option+Space、Shift+Space、Up矢印等）が自動実行されます。
4. 操作完了後、メニューバーの録画停止ボタン（または `Cmd + Ctrl + Esc`）で収録を終了します。
