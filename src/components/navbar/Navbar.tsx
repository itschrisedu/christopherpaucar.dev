"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale, t } = useLanguage();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (direction < -0.001) {
        setVisible(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      } else if (direction > 0.001 && scrollYProgress.get() > 0.05) {
        setVisible(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      } else if (scrollYProgress.get() < 0.05 && visible) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setVisible(false);
        }, 5000);
      }
    }
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const navItems = [
    { name: t.nav.home[locale], link: "#hero" },
    { name: t.nav.projects[locale], link: "#projects" },
    { name: t.nav.about[locale], link: "#about" },
    { name: t.nav.contact[locale], link: "#contact" },
  ];

  const navContent = (
    <Container className="flex justify-center">
      <div className="w-full max-w-4xl flex items-center justify-between rounded-full
          border border-silver-mist/60 dark:border-[#38383a]/60
          bg-snow/80 dark:bg-[#1c1c1e]/80
          backdrop-blur-[20px] px-4 py-2
          shadow-[0_2px_20px_rgba(0,0,0,0.06)]">

        {/* Logo */}
        <a href="#hero" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000] hover:scale-105 transition-transform duration-200">
          <Image src="/assets/icons/logoC.svg" alt="CP" width={28} height={28} className="h-7 w-7 brightness-0 invert" priority />
        </a>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="rounded-full px-4 py-2 text-[14px] font-normal tracking-[-0.04px]
                  transition-all duration-200
                  text-ink/80 dark:text-snow/80
                  hover:bg-ink/5 dark:hover:bg-snow/10"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="rounded-full px-3 py-2 text-[11px] font-mono font-semibold tracking-widest cursor-pointer
                transition-all duration-200
                text-graphite dark:text-[var(--color-graphite)]
                hover:bg-ink/5 dark:hover:bg-snow/10"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>

          {/* Theme toggle */}
          <AnimatedThemeToggler />

          {/* Divider */}
          <div className="h-5 w-px mx-1 bg-silver-mist dark:bg-[#38383a]" />

          {/* CTA — Azure pill button */}
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-[14px] font-normal
                bg-azure text-snow
                hover:bg-[#0077ED] transition-all duration-200"
          >
            <span className="hidden sm:block">{t.contact.ctaNav[locale]}</span>
            <span className="block sm:hidden text-[12px] font-medium">{locale === "en" ? "Start" : "Iniciar"}</span>
          </a>
        </div>
      </div>
    </Container>
  );

  if (!hydrated) {
    return (
      <nav className="fixed top-4 left-0 right-0 z-[5000]" suppressHydrationWarning>
        {navContent}
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.344, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-4 left-0 right-0 z-[5000]"
      suppressHydrationWarning
    >
      {navContent}
    </motion.nav>
  );
}
