import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, LOCALES, Locale } from "@/locales";
import { PLUGINS_DATA } from "@/data/plugins";
import PluginShowcaseView from "@/components/common/PluginShowcaseView";

const DEDICATED_IDS = ["vault-pruner", "chat-notes", "format-convert", "google-drive-sync"];

export function generateStaticParams() {
  const params: { lang: string; pluginId: string }[] = [];
  for (const locale of LOCALES) {
    for (const pluginId of DEDICATED_IDS) {
      params.push({ lang: locale.code, pluginId });
    }
  }
  return params;
}

interface PluginPageProps {
  params: {
    lang: string;
    pluginId: string;
  };
}

export async function generateMetadata({ params }: PluginPageProps): Promise<Metadata> {
  const plugin = PLUGINS_DATA.find((p) => p.id === params.pluginId);
  if (!plugin) return {};

  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const isJa = lang === "ja";
  const title = isJa
    ? `${plugin.name} for Obsidian | ${plugin.taglineJa}`
    : `${plugin.name} for Obsidian | ${plugin.tagline}`;
  const description = isJa ? plugin.descriptionJa : plugin.description;

  return {
    title,
    description,
    alternates: {
      languages: {
        en: `/en/plugins/${plugin.id}/`,
        ja: `/ja/plugins/${plugin.id}/`,
      },
    },
  };
}

export default function GenericPluginPage({ params }: PluginPageProps) {
  const plugin = PLUGINS_DATA.find((p) => p.id === params.pluginId);
  if (!plugin) {
    notFound();
  }

  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const dict = getDictionary(lang);

  return <PluginShowcaseView lang={lang} dict={dict} plugin={plugin} />;
}
