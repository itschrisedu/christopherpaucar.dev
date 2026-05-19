"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Locale } from "@/i18n/translations";
import translations from "@/i18n/translations";

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: typeof translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  toggleLocale: () => {},
  t: translations,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved && (saved === "en" || saved === "es")) return saved;
    }
    return "en";
  });

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
