import { Dictionary } from "./types";

export const en: Dictionary = {
  common: {
    installInObsidian: "Install in Obsidian",
    viewOnGithub: "View on GitHub",
    interactiveShowcase: "Interactive LP",
    explorePageFlow: "Explore Page Flow",
    readyToGlide: "Ready to glide through your notes?",
    readySubtitle:
      "Install Page Flow directly inside Obsidian in seconds. Free, open source, and engineered to respect your local vault."
  },
  nav: {
    suiteTitle: "Obsidian Suite",
    pageFlow: "Page Flow",
    allPlugins: "All Plugins"
  },
  portal: {
    badge: "Obsidian Craft Plugins Suite",
    heroTitle: "Elevate your Obsidian vault with",
    heroHighlight: "precision tools",
    heroSubtitle:
      "A curated suite of high-performance, privacy-first, and natively integrated Obsidian plugins crafted to eliminate friction and keep your thoughts flowing.",
    featuredBadge: "Featured Release",
    exploreSuiteTitle: "Complete Plugin Suite",
    exploreSuiteSubtitle: "Explore All Crafted Plugins",
    philosophyTitle: "Design Philosophy",
    philosophy1: {
      title: "Pure Performance",
      desc: "Zero telemetry, zero render blocking. Built directly on top of CodeMirror 6 and native Obsidian lifecycle APIs."
    },
    philosophy2: {
      title: "Local & Offline First",
      desc: "Your notes never leave your personal computer. Every operation strictly respects your local vault boundaries."
    },
    philosophy3: {
      title: "Native & Frictionless Integration",
      desc: "Designed to blend seamlessly into Obsidian without bloated configurations or workflow disruption. Always in flow, never in the way."
    }
  },
  pageFlow: {
    hero: {
      badge: "Obsidian Community Plugin • v1.0.3 Available",
      title: "Turn note reading into a",
      titleHighlight: "frictionless flight",
      subtitle:
        "Scroll page-by-page and glide seamlessly into the next note using single hotkeys. Inspired by e-book pagers and RSS readers, designed for high-velocity triage.",
      tag1: "Obsidian v1.4.0+ Compatible",
      tag2: "Keyboard-First Navigation",
      tag3: "Zero Mouse Dependency",
      interactivePlayground: "Interactive Live Playground",
      videoTab: "Live Video Demo",
      simulatorTab: "Interactive Simulator",
      videoBadge: "Obsidian Workflow In Action"
    },
    simulator: {
      folder: "Research / PKM",
      keyIndicator: "Key",
      speedIndicator: "Speed",
      fileExplorer: "File Explorer",
      noteOf: "Note",
      bottomNotice: "Bottom reached. Next tap seamlessly transitions to next file.",
      pressHint: "Try pressing Space to scroll & glide forward, Shift + Space for backward.",
      forwardButton: "Forward Glide",
      backwardButton: "Backward",
      notes: [
        {
          title: "01. Introduction to Digital Gardens.md",
          paragraphs: [
            "A digital garden is a collection of evolving ideas that grow over time. Unlike standard chronological blogs, gardens prioritize context, links, and topological exploration.",
            "As notes accumulate into hundreds or thousands, continuous linear inspection becomes the single biggest friction point. Opening files one-by-one by clicking sidebar trees breaks concentration.",
            "Page Flow solves this by treating your folder as a continuous stream of thoughts. With single-key actuation, you glide downward through sections smoothly.",
            "When reaching the bottom of this note, another tap seamlessly glides right into the next note in your folder."
          ]
        },
        {
          title: "02. Fluid Note Triaging.md",
          paragraphs: [
            "Triaging daily fleeting notes requires rapid velocity. Traditional file switching resets your scroll position and breaks reading momentum.",
            "With Page Flow's momentum physics, rapid taps smoothly scale up the cruising speed without stuttering.",
            "And if you ever need to stop abruptly or re-read something, pressing the reverse key immediately applies directional braking, stopping instant overshoot dead in its tracks.",
            "You are now at the end of the second note. Press down once more to reach the final summary."
          ]
        },
        {
          title: "03. High Performance Workflows.md",
          paragraphs: [
            "Page Flow is built strictly on top of CodeMirror 6 viewport coordinates, dynamically resisting virtual layout shifts in massive documents.",
            "It honors your visual Obsidian File Explorer order—whether alphabetical, chronological, or custom manual sorting.",
            "No mouse. No trackpad. Just pure, uninterrupted focus on your ideas.",
            "Experience frictionless reading today inside your own vault!"
          ]
        }
      ]
    },
    bento: {
      badge: "Engineered for Flow",
      title: "Features that make reading feel like flight",
      subtitle:
        "Every millimeter of motion, acceleration curve, and boundary transition is calibrated to keep your eyes relaxed and focused.",
      hybrid: {
        title: "Hybrid Single-Key Navigation",
        desc: "Tapping forward scrolls down through your note content. When the bottom is reached, the very next tap automatically opens the next note in your folder, placing you instantly at the top. Symmetrical backward glide brings you up to the bottom of the previous note.",
        tag1: "Default: 85% Viewport Step",
        tag2: "Fine-tunable 10% - 100%"
      },
      momentum: {
        title: "Continuous Momentum",
        desc: "Rapidly tapping your hotkey ramps up cruising speed smoothly. Velocity and distance scale in lockstep so you never feel stuttering or sudden pauses.",
        statLabel: "Acceleration",
        statVal: "Up to 5.0x Cruise"
      },
      brake: {
        title: "Instant Reverse Brake",
        desc: "Cruising too fast? Tapping the opposite key immediately cancels all forward momentum and halts the viewport on a dime. Zero accidental jumps.",
        statLabel: "Momentum Cancel",
        statVal: "Instant 0.0s Stop"
      },
      shield: {
        title: "File Explorer Sync & Layout-Shift Shield",
        desc: "Page Flow accurately mirrors your Obsidian File Explorer order—including manual rearrangements and custom sort modes. It is strictly scoped to the active folder and resists CodeMirror 6 virtual height recalculations in documents with 50,000+ words.",
        tag1: "Strict Folder Boundary",
        tag2: "CM6 Viewport Math",
        tag3: "Fly-by Protection"
      }
    },
    hotkeys: {
      badge: "Fully Configurable Keybindings",
      title: "Designed for Home Row Speed",
      subtitle:
        "All commands integrate seamlessly with Obsidian’s native hotkey settings. Choose your preferred style or map any custom modifiers.",
      colAction: "Command Action",
      colRecommended: "Recommended Hotkey",
      colVim: "Vim / Compact Style",
      colBehavior: "Behavior",
      rows: [
        {
          action: "Forward: Scroll down or open next file",
          recommended: "Alt + Space",
          vimStyle: "Alt + J",
          description: "Main primary forward glide. Scrolls note, then glides to next file."
        },
        {
          action: "Backward: Scroll up or open previous file",
          recommended: "Alt + Shift + Space",
          vimStyle: "Alt + K",
          description: "Symmetrical reverse glide. Scrolls up, then opens previous file at bottom."
        },
        {
          action: "Dedicated: Scroll page down only",
          recommended: "Space / PageDown",
          vimStyle: "Ctrl + F",
          description: "In-note continuous scroll without file boundary transitions."
        },
        {
          action: "Dedicated: Scroll page up only",
          recommended: "Shift + Space / PageUp",
          vimStyle: "Ctrl + B",
          description: "In-note reverse scroll without file boundary transitions."
        },
        {
          action: "Dedicated: Go to next file immediately",
          recommended: "Alt + Down",
          vimStyle: "Alt + L",
          description: "Instantly switches to the next note regardless of scroll position."
        },
        {
          action: "Dedicated: Go to previous file immediately",
          recommended: "Alt + Up",
          vimStyle: "Alt + H",
          description: "Instantly switches to previous note regardless of scroll position."
        }
      ]
    },
    settings: {
      badge: "Precision Tuning",
      title: "Tailor the glide to your exact reading rhythm",
      subtitle:
        "Configure step sizes, physics curves, and safety caps right from the plugin settings tab.",
      percentage: {
        title: "Scroll Percentage",
        desc: "Controls how much of the viewport height advances per tap. Supports fine-tuning down to 10% for micro-reading up to 100% for full-page flipping.",
        range: "10% — 100%",
        default: "85%"
      },
      momentum: {
        title: "Cruise Acceleration",
        desc: "Tunes top speed when repeatedly tapping. Set to 1.0x for a steady, constant scroll, or up to 5.0x for rapid vault skimming.",
        range: "1.0x — 5.0x",
        default: "2.2x"
      },
      queue: {
        title: "Queue Safety Cap",
        desc: "Limits the maximum number of queued screens during frantic tapping, preventing runaway scroll buffers and ensuring deceleration stays crisp and prompt.",
        range: "1.0 — 15.0 screens",
        default: "5.0 screens"
      }
    },
    cta: {
      badge: "Frictionless Reading Awaits",
      title: "Ready to glide through your notes?",
      desc: "Install Page Flow directly inside Obsidian in seconds. Free, open source, and engineered to respect your local vault.",
      installButton: "Install in Obsidian",
      githubButton: "GitHub Repository",
      backToPortal: "Back to All Plugins",
      manualInstallHint: "* If the direct link does not launch Obsidian, search for 'Page Flow' under Settings > Community plugins."
    }
  },
  footer: {
    tagline: "© 2026 Obsidian Plugins Suite. Crafted for seamless note-taking.",
    home: "Home",
    github: "GitHub",
    obsidian: "Obsidian.md"
  }
};
