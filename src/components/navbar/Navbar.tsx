"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale, t } = useLanguage();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (direction > 0.001 && scrollYProgress.get() > 0.05) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  const navItems = [
    { name: t.nav.home[locale], link: "#hero" },
    { name: t.nav.projects[locale], link: "#projects" },
    { name: t.nav.about[locale], link: "#about" },
    { name: t.nav.contact[locale], link: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-6 left-0 right-0 z-[5000] flex justify-center px-4"
    >
      <div
        className={`
          flex items-center gap-1 rounded-2xl px-3 py-2
          shadow-2xl shadow-black/15 backdrop-blur-xl
          ${theme === "light"
            ? "bg-[#0b0b0b]/95 border border-white/10"
            : "bg-white/95 border border-black/10"
          }
        `}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center justify-center rounded-xl p-2.5 hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-200">
          <Image src="/assets/icons/logoC.svg" alt="CP" width={26} height={26} className="h-6 w-6" priority />
        </a>

        <div className={`h-5 w-px mx-2 ${theme === "light" ? "bg-white/15" : "bg-black/15"}`} />

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`
                rounded-xl px-5 py-2.5 text-[13px] font-medium tracking-wide
                transition-all duration-200
                ${theme === "light"
                  ? "text-white/60 hover:text-white hover:bg-white/10"
                  : "text-black/50 hover:text-black hover:bg-black/8"
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className={`hidden sm:block h-5 w-px mx-2 ${theme === "light" ? "bg-white/15" : "bg-black/15"}`} />

        {/* Language toggle */}
        <button
          onClick={toggleLocale}
          className={`
            rounded-xl px-3.5 py-2.5 text-[11px] font-mono font-bold tracking-widest cursor-pointer
            transition-all duration-200
            ${theme === "light"
              ? "text-white/50 hover:text-accent hover:bg-white/10"
              : "text-black/40 hover:text-accent hover:bg-black/8"
            }
          `}
        >
          {locale === "en" ? "ES" : "EN"}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className={`
            flex items-center justify-center rounded-xl h-10 w-10 cursor-pointer
            transition-all duration-200
            ${theme === "light"
              ? "text-white/50 hover:text-accent hover:bg-white/10"
              : "text-black/40 hover:text-accent hover:bg-black/8"
            }
          `}
        >
          {theme === "light" ? (
            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
          ) : (
            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
          )}
        </button>

        <div className={`h-5 w-px mx-1 ${theme === "light" ? "bg-white/15" : "bg-black/15"}`} />

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-xl px-6 py-2.5 text-[13px] font-semibold bg-accent text-[#0b0b0b] hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
        >
          <span className="hidden sm:block">{t.contact.ctaNav[locale]}</span>
          <span className="block sm:hidden text-[12px] font-bold">{locale === "en" ? "Start" : "Iniciar"}</span>
        </a>
      </div>
    </motion.nav>
  );
}
