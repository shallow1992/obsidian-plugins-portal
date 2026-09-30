# Page Flow Demo Video Script (Step 1)
（Page Flow 実機デモ動画 シーン別台本・演出定義書）

本ドキュメントは、`docs/video-production-pipeline.md` の仕様に基づき、**Page Flow** プラグインの内部コマンド・物理演算挙動・ホットキー仕様をファクトチェックして策定された公式デモ動画（約 23.5 秒）の総合定義書です。

---

## 1. 動画メタデータ ＆ プラグイン仕様マッピング (Metadata & Specifications)

* **プロダクト名**: Obsidian Page Flow (`obsidian-page-flow`)
* **想定再生時間**: 約 23〜25 秒
* **アスペクト比**: 16:9 (1920x1080) または 16:10 (1280x800)
* **テーマ**: Obsidian ダークテーマ（フォントサイズ 16px、読みやすいコントラスト）
* **ナレーション推奨ボイス**: `Adam`（低音・落ち着いたテック系）または `Rachel`（明瞭・軽快なチュートリアル系）
* **適用されるプラグイン内部機能**:
  * コマンド `scroll-or-next`: ノート内スクロール（85%）＋末尾到達時のシームレスな次ファイル自動オープン（Flow滑空）
  * コマンド `scroll-or-prev`: ノート内逆スクロール＋先頭到達時の前ファイル逆走オープン
  * 物理演算 `reversal brake`: スクロールアニメーション中の逆方向入力による即時強制停止
  * ナビゲーション設定 `fileSortOrder`: ファイルエクスプローラー順（サイドバーの並び順に従って連続遷移）

---

## 2. 総合サマリー表 (Complete Scene Matrix)

| シーン | 目標尺 | 日本語原稿 (`ja`) | 英語原稿 (`en`) | プラグイン機能 / キー操作 | 画面の想定動作（詳細） |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Scene 1**<br>*(Hook: 課題提起)* | 約 4.5秒 | `Obsidianでノートを読むとき、いちいちサイドバーをクリックしていませんか？` | `Still clicking the sidebar every time you finish reading a note in Obsidian?` | **通常スクロール**<br>*(プラグイン不使用)*<br>`PageDown` / マウス操作 | 縦に長いノートを下までスクロールし、**最下部で行き止まりになる**。次のファイルを開くため、マウスカーソルが左サイドバー（ファイルエクスプローラー）へ迷いながら移動する様子を見せる。 |
| **Scene 2**<br>*(Core: スペース滑空)* | 約 7.5秒 | `Page Flowなら、スペースキーを叩くだけ。ノートの末尾に到達すると、流れるように次のファイルへ滑空します。` | `With Page Flow, just hit Space. Once you reach the bottom, glide effortlessly into the next file.` | **`scroll-or-next`**<br>`Space`<br>*(または `Option + Space`)* | 1. <kbd>Space</kbd> 打鍵で 85% なめらかにページスクロール（文脈保持）。<br>2. ノート末尾到達時、もう一度打鍵すると**ノート境界を越えてシームレスに「次のファイル」へ滑空（Flow）**。<br>3. 連続打鍵により 2〜3 ノートを流れるように連続読破していく軽快さを実演。 |
| **Scene 3**<br>*(Safety: 逆走＆ブレーキ)* | 約 6.5秒 | `戻りたい時は Shift とスペース。いつでも矢印キーでピタッと急ブレーキ。` | `Need to go back? Press Shift + Space. And hit the arrow keys anytime for instant braking.` | **`scroll-or-prev`**<br>`Shift + Space`<br>*(または `Option+Shift+Space`)*<br>＋ **`reversal brake`**<br>`↑` / 逆方向キー | 1. <kbd>Shift</kbd> + <kbd>Space</kbd> 打鍵で直前のノートへ瞬時に逆走遷移。<br>2. 連続前進アニメーションの巡航中に、逆方向キー（<kbd>↑</kbd> 等）を叩くと、**物理演算（Reversal Brake）が発動してその場でピタッと急停止**する様子を実演。暴走しない安心感を訴求。 |
| **Scene 4**<br>*(CTA: 結び)* | 約 5.0秒 | `キーボードだけで思考を止めない読書体験を。Page Flow、Obsidian コミュニティプラグインで今すぐ。` | `Never break your train of thought. Page Flow — available now on Obsidian Community Plugins.` | **インストール画面**<br>＋ **LP ブランドカード** | 1. Obsidian 設定「コミュニティプラグイン」で「Page Flow」を検索・有効化する画面。<br>2. ブランドロゴ、キーバインド一覧、ポータル URL が並ぶ洗練されたエンドカードへクロスフェード。 |

---

## 3. シーン別詳細 ＆ HUD 演出仕様 (Scene Details & HUD Overlay)

### Scene 1: Hook（課題提起 / 行き止まり）
* **シーンID**: `scene_01`
* **目標時間**: **約 4.5 秒**
* **プラグイン機能**: 通常挙動（プラグイン無効または末尾到達）
* **画面操作シーケンス**:
  1. 複数段落のノート「01 - Concept Idea」を開いておく。
  2. <kbd>PageDown</kbd>（または通常スクロール）で下方向へスクロール。
  3. フッター末尾で行き止まりになり、画面がガツッと停止。
  4. マウスカーソルがエディタから離れ、左のファイルエクスプローラーへ「次は何だっけ？」と探すように迷いながら移動。
* **演出・HUD**:
  * ファイルエクスプローラー周辺に薄いフォーカス枠（迷い・思考の中断の演出）。

### Scene 2: Core Value（コア体験 / スペースで滑空）
* **シーンID**: `scene_02`
* **目標時間**: **約 7.5 秒**
* **プラグイン機能**: `scroll-or-next` (Hybrid Navigation)
* **画面操作シーケンス**:
  1. 再びノート先頭付近からスタート。
  2. <kbd>Space</kbd> を 1 回打鍵：85% の距離を 280ms の滑らかなイージングでスクロール。
  3. ノート末尾で再度 <kbd>Space</kbd> を打鍵：境界判定（`boundaryThreshold: 10px`）を検知し、ファイルエクスプローラー順で**次のノート「02 - Architecture」がシームレスに開く**。
  4. テンポよく <kbd>Space</kbd> を連打（巡航加速倍率 2.2x）：次のノート「03 - Roadmap」へ次々と滑空。
* **演出・HUD**:
  * 打鍵の瞬間に画面右下にピル型「⎵ Space」HUD バッジをポップアップ表示。
  * ノート遷移の瞬間にエディタ中央へカメラが緩やかにズームイン。

### Scene 3: Control & Safety（安心設計 / 逆走 ＆ 急ブレーキ）
* **シーンID**: `scene_03`
* **目標時間**: **約 6.5 秒**
* **プラグイン機能**: `scroll-or-prev` ＆ `reversal brake`
* **画面操作シーケンス**:
  1. <kbd>Shift</kbd> + <kbd>Space</kbd> を打鍵：先頭到達を検知し、直前のノート「02 - Architecture」へ瞬時に逆走遷移。
  2. 再び前進（<kbd>Space</kbd>）して滑らかな加速スクロールが走っている最中に、すかさず <kbd>↑</kbd>（上矢印キー）を打鍵。
  3. `scroller.ts` の `Reversal brake` が作動し、**慣性アニメーションがその場でピタッと完全停止**。
* **演出・HUD**:
  * 打鍵時に「⇧ + ⎵ Shift+Space」「↑ Brake」HUD バッジを表示。
  * 急停止時に微小なカメラの振動（手応えのあるブレーキ感）を付与。

### Scene 4: Outro & CTA（結び / インストール導線）
* **シーンID**: `scene_04`
* **目標時間**: **約 5.0 秒**
* **プラグイン機能**: 設定・コミュニティプラグイン
* **画面操作シーケンス**:
  1. Obsidian 設定画面の「コミュニティプラグイン」検索画面を開き、「Page Flow」の「インストール」「有効化」ボタンが押される様子。
  2. プラグインロゴ、公式ポータルサイト URL、主要キーバインド表が美しく並ぶエンディングカードへフェード。
* **演出・HUD**:
  * 「Install」「Enable」ボタンへのゴールドハイライト。
  * キャッチコピー「思考を止めない読書体験を」のテロップ。

---

## 4. 次のステップ（Step 2 への受け渡し）

1. **音声の生成**:
   - 上記サマリー表のテキストを ElevenLabs の `Eleven Multilingual v2` に入力し、`assets/audio/scene_01.mp3` 〜 `scene_04.mp3` を生成。
2. **秒数確定と AppleScript への注入**:
   - `ffprobe` で実測秒数を計測し、上記「画面操作シーケンス」の各キー入力待機時間（`delay`）としてスクリプト化。
