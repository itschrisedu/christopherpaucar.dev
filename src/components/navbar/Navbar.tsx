"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

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
      className="fixed top-4 left-0 right-0 z-[5000]"
    >
      <Container className="flex justify-center">
      <div className="w-full max-w-5xl flex items-center justify-between rounded-2xl border border-black/20 dark:border-white/20 bg-black dark:bg-white px-3 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        {/* Logo in circle */}
        <a href="#hero" className="flex h-9 w-9 items-center justify-center rounded-full bg-black hover:shadow-lg hover:shadow-black/40 transition-all duration-200">
          <Image src="/assets/icons/logoC.svg" alt="CP" width={26} height={26} className="h-7 w-7 brightness-0 invert" priority />
        </a>

        <div className="h-5 w-px mx-2 bg-white/20 dark:bg-black/20" />

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`
                rounded-xl px-5 py-2.5 text-[13px] font-medium tracking-wide
                transition-all duration-200
                text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10
              `}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden sm:block h-5 w-px mx-2 bg-white/20 dark:bg-black/20" />

        <div className="flex items-center gap-1">
          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="rounded-xl px-3.5 py-2.5 text-[11px] font-mono font-bold tracking-widest cursor-pointer transition-all duration-200 text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>

          {/* Animated Theme toggle */}
          <AnimatedThemeToggler />
        </div>

        <div className="h-5 w-px mx-1 bg-white/20 dark:bg-black/20" />

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-xl px-6 py-2.5 text-[13px] font-semibold bg-white text-black dark:bg-black dark:text-white hover:shadow-lg transition-all duration-200"
        >
          <span className="hidden sm:block">{t.contact.ctaNav[locale]}</span>
          <span className="block sm:hidden text-[12px] font-bold">{locale === "en" ? "Start" : "Iniciar"}</span>
        </a>
      </div>
      </Container>
    </motion.nav>
  );
}
