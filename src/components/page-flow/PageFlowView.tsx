import React from "react";
import Hero from "@/components/page-flow/Hero";
import BentoGrid from "@/components/page-flow/BentoGrid";
import HotkeyTable from "@/components/page-flow/HotkeyTable";
import SettingsWalkthrough from "@/components/page-flow/SettingsWalkthrough";
import BottomCTA from "@/components/page-flow/BottomCTA";
import { Locale, Dictionary } from "@/locales";

interface PageFlowViewProps {
  lang: Locale;
  dict: Dictionary;
}

export default function PageFlowView({ lang, dict }: PageFlowViewProps) {
  return (
    <div className="space-y-4">
      {/* 1. Hero & Interactive Demo */}
      <Hero dict={dict.pageFlow} commonDict={dict.common} />

      {/* 2. Feature Bento Grid */}
      <BentoGrid dict={dict.pageFlow.bento} />

      {/* 3. Hotkeys & Customization */}
      <HotkeyTable dict={dict.pageFlow.hotkeys} />

      {/* 4. Fine-Tuning & Settings */}
      <SettingsWalkthrough dict={dict.pageFlow.settings} />

      {/* 5. Bottom Installation CTA */}
      <BottomCTA lang={lang} dict={dict.pageFlow.cta} />
    </div>
  );
}
