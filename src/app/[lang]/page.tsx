import { getDictionary, LOCALES, Locale } from "@/locales";
import PortalView from "@/components/portal/PortalView";

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

interface LangPageProps {
  params: {
    lang: string;
  };
}

export default function LangPortalPage({ params }: LangPageProps) {
  const lang = (params.lang === "ja" ? "ja" : "en") as Locale;
  const dict = getDictionary(lang);

  return <PortalView lang={lang} dict={dict} />;
}
