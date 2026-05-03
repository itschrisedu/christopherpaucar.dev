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
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "es")) {
      setLocale(saved);
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  // During SSR and initial hydration, always use "en" to match server
  const activeLocale = mounted ? locale : "en";

  return (
    <LanguageContext.Provider value={{ locale: activeLocale, toggleLocale, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
