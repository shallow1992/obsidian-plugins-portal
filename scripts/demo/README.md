# Page Flow Demo Automation & Recording Guide

本ディレクトリには、`docs/video-production-pipeline.md` の Step 3 に基づく、**macOS ネイティブの AppleScript 自動操作 ＆ 画面収録スクリプト**が配置されています。

---

## 📋 準備（Pre-flight Checklist）

1. **Obsidian の準備**:
   * Obsidian を起動し、テスト用ノートを 3〜4 つ同じフォルダ内に用意します（例: `01-Intro`, `02-Feature`, `03-Control` など、数スクロール分のテキストが入ったもの）。
   * **Page Flow プラグインを有効化** しておきます。
2. **Mac の権限確認**:
   * **アクセシビリティ**: AppleScript からキーストロークを送信するため必要。
   * **画面収録**: 自動録画（`--record`）を使用する場合、ターミナルアプリに画面収録の権限が必要。
   * *設定場所*: **システム設定 > プライバシーとセキュリティ > 「アクセシビリティ」および「画面収録」**

---

## 🎬 実行方法

### 方法 A: 完全自動録画モード（手動録画ボタン不要！）
スクリプトが自動で画面録画を開始し、操作完了後に自動で停止して `raw_recordings/` に `.mov` を保存します。

```bash
# 全シーンを一通しで完全自動録画
./scripts/demo/run.sh full --record

# またはシーンごとに自動録画
./scripts/demo/run.sh scene1 --record
./scripts/demo/run.sh scene2 --record
./scripts/demo/run.sh scene3 --record
```

---

### 方法 B: 手動録画モード（5 秒カウントダウン）
`Cmd + Shift + 5` で自分で録画タイミングを合わせたい場合に使用します。

```bash
./scripts/demo/run.sh full
```

1. コマンドを実行すると、ターミナルに **「5... 4... 3... 2... 1...」** と 5 秒間のカウントダウンが表示されます。
2. その 5 秒の間に `Cmd + Shift + 5` を押し、Obsidian ウィンドウを「収録」開始します。
3. 自動で Obsidian が最前面になり、以下の操作が自動実行されます：
   - **Scene 1**: 通常スクロールで末尾行き止まり
   - **Scene 2**: <kbd>Option</kbd> + <kbd>Space</kbd> で滑らかスクロール ＆ 次ノートへ滑空
   - **Scene 3**: <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> で逆走 ＆ 上矢印キーでピタッと急ブレーキ
4. 動作完了後、メニューバーの停止ボタン（または `Cmd + Ctrl + Esc`）で収録を終了します。
