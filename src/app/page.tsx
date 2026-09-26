import { getDictionary } from "@/locales";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PortalView from "@/components/portal/PortalView";

export default function DefaultPortalPage() {
  const lang = "en";
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} dict={dict.nav} />
      <main className="flex-1">
        <PortalView lang={lang} dict={dict} />
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </div>
  );
}
