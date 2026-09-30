# Page Flow Demo Video Script (Step 1)
（Page Flow 実機デモ動画 シーン別台本・演出定義書）

本ドキュメントは、`docs/video-production-pipeline.md` の仕様に基づき策定された **Page Flow** 公式デモ動画（約 23.5 秒）のシーン別台本および画面操作仕様です。

---

## 1. 動画メタデータ (Video Metadata)

* **プロダクト名**: Obsidian Page Flow
* **想定再生時間**: 約 23〜25 秒
* **アスペクト比**: 16:9 (1920x1080) または 16:10 (1280x800)
* **テーマ**: Obsidian ダークテーマ（フォントサイズ 16px、読みやすいコントラスト）
* **ナレーション推奨ボイス**: `Adam`（低音・落ち着いたテック系）または `Rachel`（明瞭・軽快なチュートリアル系）
* **出力フォーマット**:
  * Web サイト用: `public/assets/demo.mp4` & `public/assets/demo.webm` (超高圧縮・音声あり/なし両対応)
  * README 用: `assets/demo.gif` (パレット最適化・マイクロループ)

---

## 2. シーン別台本 ＆ 演出定義 (Scene Breakdown)

### Scene 1: Hook（課題提起 / 行き止まり）
* **シーンID**: `scene_01`
* **目標時間**: **約 4.5 秒**
* **ナレーション原稿**:
  * **日本語**: 「Obsidianでノートを読むとき、いちいちサイドバーをクリックしていませんか？」
  * **英語**: "Still clicking the sidebar every time you finish reading a note in Obsidian?"
* **画面操作（Visual Action）**:
  1. Obsidian で数段落あるノートを開き、下方向へスクロール。
  2. ノート末尾（フッター）に到達してスクロールが行き止まりになる。
  3. マウスカーソルが次のノートを開くため、左のファイルエクスプローラーへ遠回りして移動しようと迷う様子。
* **演出・HUD**:
  * 画面左上のファイルエクスプローラーに薄いフォーカス枠（迷いの強調）。

---

### Scene 2: Core Value（コア体験 / スペースで滑空）
* **シーンID**: `scene_02`
* **目標時間**: **約 7.5 秒**
* **ナレーション原稿**:
  * **日本語**: 「Page Flowなら、スペースキーを叩くだけ。ノートの末尾に到達すると、流れるように次のファイルへ滑空します。」
  * **英語**: "With Page Flow, just hit Space. Once you reach the bottom, glide effortlessly into the next file."
* **画面操作（Visual Action）**:
  1. キーボードの <kbd>Space</kbd> をリズミカルに 1 回打鍵（ノート後半へスムーズスクロール）。
  2. もう一度 <kbd>Space</kbd> を打鍵。ノート末尾に到達した瞬間、**画面がシームレスに次のノートへ切り替わる（Flow / 滑空）**。
  3. さらに <kbd>Space</kbd> を打鍵し、次々と連続してノートを読み進めていく軽快な動きを実演。
* **演出・HUD**:
  * <kbd>Space</kbd> 打鍵の瞬間に画面右下にピル型「⎵ Space」HUD バッジをポップ表示。
  * ノート遷移時に画面中央へカメラが緩やかにズームイン。

---

### Scene 3: Control & Safety（安心設計 / 逆走 ＆ 急ブレーキ）
* **シーンID**: `scene_03`
* **目標時間**: **約 6.5 秒**
* **ナレーション原稿**:
  * **日本語**: 「戻りたい時は Shift とスペース。いつでも矢印キーでピタッと急ブレーキ。」
  * **英語**: "Need to go back? Press Shift + Space. And hit the arrow keys anytime for instant braking."
* **画面操作（Visual Action）**:
  1. <kbd>Shift</kbd> + <kbd>Space</kbd> を打鍵。直前のノートへスムーズに逆走して戻る。
  2. 再度 <kbd>Space</kbd> で進み始めた直後に、上矢印キー <kbd>↑</kbd>（または <kbd>↓</kbd>）を打鍵し、**その場でピタッと強制停止（急ブレーキ）**。
  3. 自由自在にコントロールできる安心感をアピール。
* **演出・HUD**:
  * 打鍵時に「⇧ + ⎵ Shift+Space」「↑ Brake」HUD バッジを表示。
  * 急停止の瞬間に、エディタに軽いカメラ振動（微小な手応えエフェクト）または一時停止アイコン。

---

### Scene 4: Outro & CTA（結び / インストール導線）
* **シーンID**: `scene_04`
* **目標時間**: **約 5.0 秒**
* **ナレーション原稿**:
  * **日本語**: 「キーボードだけで思考を止めない読書体験を。Page Flow、Obsidian コミュニティプラグインで今すぐ。」
  * **英語**: "Never break your train of thought. Page Flow — available now on Obsidian Community Plugins."
* **画面操作（Visual Action）**:
  1. Obsidian 設定画面（コミュニティプラグイン）で「Page Flow」を検索・有効化する画面。
  2. プラグインロゴ、公式ポータル URL、キーバインド表が美しく並ぶエンディングカードへフェード。
* **演出・HUD**:
  * 「Install Free」「Community Plugins」ボタンへのハイライト。
  * ロゴと「思考を止めない読書体験を」のキャッチコピー表示。

---

## 3. 次のステップ（Step 2 への受け渡し）

1. **ナレーション音声の生成**:
   - 上記の日本語（または英語）テキストを ElevenLabs の `Eleven Multilingual v2` に入力し、`assets/audio/scene_01.mp3` 〜 `scene_04.mp3` を生成。
2. **正確な再生秒数の計測**:
   - 生成された音声ファイルのミリ秒単位の秒数を `ffprobe` で計測し、Step 3 の AppleScript `delay` 時間を確定。
