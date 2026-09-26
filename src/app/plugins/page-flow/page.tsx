import type { Metadata } from "next";
import Hero from "@/components/page-flow/Hero";
import BentoGrid from "@/components/page-flow/BentoGrid";
import HotkeyTable from "@/components/page-flow/HotkeyTable";
import SettingsWalkthrough from "@/components/page-flow/SettingsWalkthrough";
import BottomCTA from "@/components/page-flow/BottomCTA";

export const metadata: Metadata = {
  title: "Page Flow for Obsidian | Smooth Hybrid Note Glider",
  description:
    "Effortless note reading, inspection, and triage in Obsidian. Scroll page-by-page and glide seamlessly to the next note with single hotkeys.",
};

export default function PageFlowLandingPage() {
  return (
    <div className="space-y-4">
      {/* 1. Hero & Interactive Demo */}
      <Hero />

      {/* 2. Feature Bento Grid */}
      <BentoGrid />

      {/* 3. Hotkeys & Customization */}
      <HotkeyTable />

      {/* 4. Fine-Tuning & Settings */}
      <SettingsWalkthrough />

      {/* 5. Bottom Installation CTA */}
      <BottomCTA />
    </div>
  );
}
