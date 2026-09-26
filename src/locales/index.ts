import { Locale, Dictionary } from "./types";
import { en } from "./en";
import { ja } from "./ja";

export * from "./types";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
];

export function getDictionary(lang: string): Dictionary {
  if (lang === "ja") return ja;
  return en;
}
