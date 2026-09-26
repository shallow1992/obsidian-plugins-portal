import type { Metadata } from "next";
import { getDictionary } from "@/locales";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageFlowView from "@/components/page-flow/PageFlowView";

export const metadata: Metadata = {
  title: "Page Flow for Obsidian | Smooth Hybrid Note Glider",
  description:
    "Effortless note reading, inspection, and triage in Obsidian. Scroll page-by-page and glide seamlessly to the next note with single hotkeys.",
};

export default function DefaultPageFlowPage() {
  const lang = "en";
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} dict={dict.nav} />
      <main className="flex-1">
        <PageFlowView lang={lang} dict={dict} />
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  );
}
