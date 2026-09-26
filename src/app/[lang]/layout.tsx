import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary, LOCALES, Locale } from "@/locales";

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const isJa = lang === "ja";

  return {
    title: isJa
      ? "Obsidian Suite | 思考を止めないクラフト・プラグイン群"
      : "Obsidian Plugins Portal | High-Quality Crafted Plugins",
    description: isJa
      ? "キーボード中心、高パフォーマンス、完全プライバシー保護。Obsidian での執筆と読書を加速する洗練されたプラグインコレクション。"
      : "Discover crafted, keyboard-centric, high-performance Obsidian plugins designed to elevate your note-taking experience.",
    alternates: {
      languages: {
        en: "/en/",
        ja: "/ja/",
      },
    },
  };
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 selection:bg-purple-500/30 selection:text-purple-200">
      <Header lang={lang} dict={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  );
}
