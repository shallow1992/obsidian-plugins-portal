export type Locale = "en" | "ja";

export interface Dictionary {
  common: {
    installInObsidian: string;
    viewOnGithub: string;
    interactiveShowcase: string;
    explorePageFlow: string;
    readyToGlide: string;
    readySubtitle: string;
  };
  nav: {
    suiteTitle: string;
    pageFlow: string;
    allPlugins: string;
  };
  portal: {
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    featuredBadge: string;
    exploreSuiteTitle: string;
    exploreSuiteSubtitle: string;
    philosophyTitle: string;
    philosophy1: { title: string; desc: string };
    philosophy2: { title: string; desc: string };
    philosophy3: { title: string; desc: string };
  };
  pageFlow: {
    hero: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      tag1: string;
      tag2: string;
      tag3: string;
      interactivePlayground: string;
      videoTab: string;
      simulatorTab: string;
      videoBadge: string;
    };
    simulator: {
      folder: string;
      keyIndicator: string;
      speedIndicator: string;
      fileExplorer: string;
      noteOf: string;
      bottomNotice: string;
      pressHint: string;
      forwardButton: string;
      backwardButton: string;
      notes: {
        title: string;
        paragraphs: string[];
      }[];
    };
    bento: {
      badge: string;
      title: string;
      subtitle: string;
      hybrid: {
        title: string;
        desc: string;
        tag1: string;
        tag2: string;
      };
      momentum: {
        title: string;
        desc: string;
        statLabel: string;
        statVal: string;
      };
      brake: {
        title: string;
        desc: string;
        statLabel: string;
        statVal: string;
      };
      shield: {
        title: string;
        desc: string;
        tag1: string;
        tag2: string;
        tag3: string;
      };
    };
    hotkeys: {
      badge: string;
      title: string;
      subtitle: string;
      colAction: string;
      colRecommended: string;
      colVim: string;
      colBehavior: string;
      rows: {
        action: string;
        recommended: string;
        vimStyle: string;
        description: string;
      }[];
    };
    settings: {
      badge: string;
      title: string;
      subtitle: string;
      percentage: {
        title: string;
        desc: string;
        range: string;
        default: string;
      };
      momentum: {
        title: string;
        desc: string;
        range: string;
        default: string;
      };
      queue: {
        title: string;
        desc: string;
        range: string;
        default: string;
      };
    };
    cta: {
      badge: string;
      title: string;
      desc: string;
      installButton: string;
      githubButton: string;
    };
  };
  footer: {
    tagline: string;
    allPlugins: string;
    github: string;
    obsidian: string;
  };
}
