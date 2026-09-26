import type { Metadata } from "next";
import { getDictionary, LOCALES, Locale } from "@/locales";
import PageFlowView from "@/components/page-flow/PageFlowView";

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

interface LangPageFlowProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: LangPageFlowProps): Promise<Metadata> {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const isJa = lang === "ja";

  return {
    title: isJa
      ? "Page Flow for Obsidian | ノートを滑らかに滑空するハイブリッド閲覧プラグイン"
      : "Page Flow for Obsidian | Smooth Hybrid Note Glider",
    description: isJa
      ? "Obsidian でのノート読書、点検、トリアージを淀みなく。単一ホットキーでページスクロール＆次ファイルへシームレスに滑空。"
      : "Effortless note reading, inspection, and triage in Obsidian. Scroll page-by-page and glide seamlessly to the next note with single hotkeys.",
    alternates: {
      languages: {
        en: "/en/plugins/page-flow/",
        ja: "/ja/plugins/page-flow/",
      },
    },
  };
}

export default function LangPageFlowPage({ params }: LangPageFlowProps) {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const dict = getDictionary(lang);

  return <PageFlowView lang={lang} dict={dict} />;
}
