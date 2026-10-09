import { Dictionary } from "./types";

export const ja: Dictionary = {
  common: {
    installInObsidian: "Obsidian でインストール",
    viewOnGithub: "GitHub で見る",
    interactiveShowcase: "インタラクティブ LP",
    explorePageFlow: "Page Flow を体験する",
    readyToGlide: "ノートの閲覧フローを、滑らかな滑空へ。",
    readySubtitle:
      "Obsidian 内から直接、数秒でインストール可能。完全無料・オープンソースであり、ローカル Vault のプライバシーを完全に保護します。"
  },
  nav: {
    suiteTitle: "Obsidian Suite",
    pageFlow: "Page Flow",
    allPlugins: "全プラグイン一覧"
  },
  portal: {
    badge: "Obsidian クラフト・プラグイン群",
    heroTitle: "洗練されたツールで、Obsidian Vault を",
    heroHighlight: "もっと心地よい体験へ",
    heroSubtitle:
      "妥協なきパフォーマンス、完全なオフライン＆プライバシー保護、Obsidian 本来の操作感に溶け込む親和性を備えた、こだわりのプラグインコレクション。",
    featuredBadge: "注目のリリース",
    exploreSuiteTitle: "プラグインスイート",
    exploreSuiteSubtitle: "開発された全プラグインを見る",
    philosophyTitle: "設計思想とこだわり",
    philosophy1: {
      title: "妥協なきパフォーマンス",
      desc: "外部通信ゼロ、レンダリング遅延ゼロ。CodeMirror 6 と Obsidian ネイティブライフサイクル API の上に堅牢に構築。"
    },
    philosophy2: {
      title: "ローカル＆オフライン完結",
      desc: "ノートデータはお手元のマシンから一切外に出ません。ローカル Vault の境界とプライバシーを厳格に保護。"
    },
    philosophy3: {
      title: "Obsidian ネイティブな親和性",
      desc: "複雑な独自UIや過度な設定を強要せず、Obsidian 本来の操作感とワークフローに自然に溶け込む拡張性を追求。"
    }
  },
  pageFlow: {
    hero: {
      badge: "Obsidian コミュニティプラグイン • v1.0.3 公開中",
      title: "ノートの閲覧・トリアージを",
      titleHighlight: "滑らかな滑空体験へ",
      subtitle:
        "単一キーだけでページをスクロールし、ノート終端で次のファイルへシームレスに滑空。電子書籍リーダーや RSS リーダーに着想を得た、高速閲覧のためのプラグイン。",
      tag1: "Obsidian v1.4.0+ 完全対応",
      tag2: "キーボード完結ナビゲーション",
      tag3: "マウス操作への依存ゼロ",
      interactivePlayground: "ブラウザで試せるライブ・シミュレータ",
      videoTab: "実機デモ動画",
      simulatorTab: "インタラクティブ・シミュレータ",
      videoBadge: "Obsidian 実際の操作プレビュー"
    },
    simulator: {
      folder: "リサーチ / PKM",
      keyIndicator: "入力キー",
      speedIndicator: "巡航速度",
      fileExplorer: "ファイル一覧",
      noteOf: "ノート",
      bottomNotice: "最下部に到達しました。次の入力で次のファイルへ自動遷移します。",
      pressHint: "Space キーで下へスクロール＆次のノートへ滑空。Shift + Space で逆スクロール。",
      forwardButton: "前へ滑空 (Forward)",
      backwardButton: "戻る (Backward)",
      notes: [
        {
          title: "01. デジタルガーデンへの招待.md",
          paragraphs: [
            "デジタルガーデンとは、時間の経過とともに育てていく思考の集積です。時系列のブログとは異なり、文脈やリンク、トポロジカルな探索が重視されます。",
            "ノートが数百、数千と蓄積していくにつれ、それらを素早く点検・トリアージすることが最大の摩擦となります。サイドバーをクリックして1つずつファイルを開くのは、集中力を途切れさせます。",
            "Page Flow は、フォルダ全体をひとつの流れるような思考のストリームとして扱います。単一キーの入力だけで、ノート内を滑らかに滑空します。",
            "このノートの最下部に達したとき、もう一度キーを押すだけで、次のノートの冒頭へシームレスに滑空します。"
          ]
        },
        {
          title: "02. 淀みのないノート・トリアージ.md",
          paragraphs: [
            "日々のメモや下書きをトリアージするには、テンポの良い速度感が不可欠です。従来のファイル切り替えではスクロール位置がリセットされ、思考の勢いが途切れてしまいます。",
            "Page Flow のモメンタム物理エンジンにより、キーを連打すると巡航速度が滑らかに加速し、カクつきを感じさせません。",
            "また、急停止したい場合や読み返したい場合も、逆方向キーを押せば即座にブレーキがかかり、行き過ぎることなくその場でピタリと止まります。",
            "2つ目のノートの終端に達しました。もう一度前進キーを押すと、最後のまとめへ進みます。"
          ]
        },
        {
          title: "03. 高性能な作業フロー.md",
          paragraphs: [
            "Page Flow は CodeMirror 6 のビューポート座標系の上に構築されており、数万文字の巨大ノートで発生する動的レイアウトシフトにも強靭です。",
            "Obsidian のファイルエクスプローラーの表示順（五十音順、作成日時順、手動カスタム並び替え）をそのまま正確に追従します。",
            "マウスに持ち替える必要はありません。あなたのアイデアだけに集中できる環境を提供します。",
            "ぜひ、あなた自身の Vault でこの流れるような読書体験を体感してください！"
          ]
        }
      ]
    },
    bento: {
      badge: "フローのための緻密な設計",
      title: "読書を「滑空」へと変える4つの柱",
      subtitle:
        "1ミリ単位のスクロール量、加速度曲線、境界判定のすべてが、目の疲労を最小限に抑え集中を維持できるように調律されています。",
      hybrid: {
        title: "ハイブリッド単一キーナビゲーション",
        desc: "キーを押すとノート内を下へスクロール。ノートの最下部に到達すると、まったく同じキーの次の入力で自動的にフォルダ内の次ノートが開き、冒頭に滑らかに着地します。逆方向も同様に対称的な操作が可能です。",
        tag1: "初期値: 85% ビューポート進行",
        tag2: "10%〜100% の微調整に対応"
      },
      momentum: {
        title: "連続タップ加速度（モメンタム）",
        desc: "キーを素早く連打すると、スクロール速度が滑らかに加速。速度と1打あたりの移動量が同期して拡大するため、カクつきや引っ掛かりを感じさせません。",
        statLabel: "最高加速倍率",
        statVal: "最大 5.0x 巡航"
      },
      brake: {
        title: "逆方向入力時の即座ブレーキ",
        desc: "速度が上がりすぎても安心です。逆方向のキーを一度押すだけで、前進の慣性を瞬時にキャンセルしてその場に急停止（0.0秒停止）。誤ったファイル遷移を未然に防ぎます。",
        statLabel: "慣性キャンセル",
        statVal: "即座 0.0s 停止"
      },
      shield: {
        title: "エクスプローラー順追従 ＆ レイアウト防御",
        desc: "Obsidian の左サイドバーに表示されているファイルの並び順（手動並び替えや各種ソート）を正確に追従します。また、長大なノートで CodeMirror 6 が行う行高再計算によるズレも自動補正します。",
        tag1: "厳格なフォルダ境界ガード",
        tag2: "CM6 仮想座標系補正",
        tag3: "連打時の飛び越し保護"
      }
    },
    hotkeys: {
      badge: "完全カスタマイズ可能なキー設定",
      title: "ホームポジションのまま超速操作",
      subtitle:
        "すべてのコマンドは Obsidian ネイティブのホットキー設定と統合されています。お好みのスタイルを選び、自由なキーを割り当て可能です。",
      colAction: "操作アクション",
      colRecommended: "推奨ホットキー",
      colVim: "Vim / コンパクト風",
      colBehavior: "挙動・動作",
      rows: [
        {
          action: "前進: 下へスクロール または 次のファイルへ",
          recommended: "Alt + Space",
          vimStyle: "Alt + J",
          description: "メインの前進キー。ノート内をスクロールし、終端で次ノート冒頭へ滑空。"
        },
        {
          action: "後退: 上へスクロール または 前のファイルへ",
          recommended: "Alt + Shift + Space",
          vimStyle: "Alt + K",
          description: "対称的な後退キー。上へスクロールし、先頭で前ノート最下部へ滑空。"
        },
        {
          action: "専用: ノート内スクロール（下）のみ",
          recommended: "Space / PageDown",
          vimStyle: "Ctrl + F",
          description: "ファイル遷移を起こさず、ノート内スクロールだけに限定。"
        },
        {
          action: "専用: ノート内スクロール（上）のみ",
          recommended: "Shift + Space / PageUp",
          vimStyle: "Ctrl + B",
          description: "ファイル遷移を起こさず、ノート内逆スクロールだけに限定。"
        },
        {
          action: "専用: スクロール位置に関係なく次ファイルへ",
          recommended: "Alt + Down",
          vimStyle: "Alt + L",
          description: "現在位置に関わらず、即座に次のノートへスキップ。"
        },
        {
          action: "専用: スクロール位置に関係なく前ファイルへ",
          recommended: "Alt + Up",
          vimStyle: "Alt + H",
          description: "現在位置に関わらず、即座に前のノートへスキップ。"
        }
      ]
    },
    settings: {
      badge: "きめ細やかな設定チューニング",
      title: "あなたの読むリズムに合わせて調律",
      subtitle:
        "スクロール量、加速度の伸び、安全装置のキャップまで、設定タブから直感的にカスタマイズできます。",
      percentage: {
        title: "1打あたりのスクロール割合",
        desc: "画面の高さに対して何％スクロールするかを指定。10%刻みの精読モードから、100%のページめくりモードまで自由自在。",
        range: "10% 〜 100%",
        default: "85%"
      },
      momentum: {
        title: "巡航加速度マルチプライヤー",
        desc: "キー連打時の最高速度の倍率。1.0x（等速一定）から、大量のメモを一気に俯瞰する 5.0x（超高速）まで調整可能。",
        range: "1.0x 〜 5.0x",
        default: "2.2x"
      },
      queue: {
        title: "キュー上限（暴走防止キャップ）",
        desc: "高速連打時に蓄積される先行スクロール画面数の上限を設定。キーを離した後の減速がキビキビと止まります。",
        range: "1.0 〜 15.0 画面分",
        default: "5.0 画面"
      }
    },
    cta: {
      badge: "淀みのない読書フローへ",
      title: "ノートを滑空する体験を、今日から。",
      desc: "Obsidian のコミュニティプラグイン設定から直接インストール可能。完全無料、オープンソース、Vault 完全ローカル設計です。",
      installButton: "Obsidian でインストール",
      githubButton: "GitHub リポジトリ",
      backToPortal: "全プラグイン一覧に戻る",
      manualInstallHint: "※ ブラウザから起動しない場合は、Obsidian 設定 > コミュニティプラグイン > 有効化・検索から「Page Flow」を検索してインストールできます。"
    }
  },
  footer: {
    tagline: "© 2026 Obsidian Plugins Suite. 思考を深めるノート体験のために。",
    allPlugins: "全プラグイン一覧",
    github: "GitHub",
    obsidian: "Obsidian.md"
  }
};
