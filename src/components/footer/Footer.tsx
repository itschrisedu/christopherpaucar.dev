"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";

/* ── SVG Icons ─────────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

/* ── Data ──────────────────────────────────────────────────────── */
const socials = [
  { label: "GitHub", href: "https://github.com/itschrisedu", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christopher-paucar-949a32234/", icon: LinkedInIcon },
  { label: "Instagram", href: "https://instagram.com/its.chrisedu", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@its.chrisedu", icon: TikTokIcon },
];

const i18n = {
  en: {
    cta: "Have a project in mind?",
    ctaSub: "Let's build something extraordinary together.",
    ctaButton: "Start a project",
    navTitle: "Navigation",
    navItems: [
      { label: "Home", href: "#hero" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Pricing", href: "#pricing" },
    ],
    servicesTitle: "Services",
    services: ["Web Development", "Full Stack Apps", "UI/UX Design", "SEO & Performance"],
    connectTitle: "Connect",
    email: "chrispaucar49@gmail.com",
    phone: "+593 98 796 4745",
    location: "Ambato, Ecuador",
    rights: "All rights reserved.",
    built: "Designed & developed by",
    status: "Available for projects",
  },
  es: {
    cta: "¿Tienes un proyecto en mente?",
    ctaSub: "Construyamos algo extraordinario juntos.",
    ctaButton: "Iniciar proyecto",
    navTitle: "Navegación",
    navItems: [
      { label: "Inicio", href: "#hero" },
      { label: "Proyectos", href: "#projects" },
      { label: "Acerca", href: "#about" },
      { label: "Precios", href: "#pricing" },
    ],
    servicesTitle: "Servicios",
    services: ["Desarrollo Web", "Apps Full Stack", "Diseño UI/UX", "SEO & Rendimiento"],
    connectTitle: "Conectar",
    email: "chrispaucar49@gmail.com",
    phone: "+593 98 796 4745",
    location: "Ambato, Ecuador",
    rights: "Todos los derechos reservados.",
    built: "Diseñado y desarrollado por",
    status: "Disponible para proyectos",
  },
};

export default function Footer() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <footer className="relative bg-obsidian dark:bg-[#0a0a0a] text-snow overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 0.5px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative z-10">
        <SectionContent>
          {/* ── CTA Section ─────────────────────────────────────── */}
          <div className="pt-20 pb-16 lg:pt-24 lg:pb-20 border-b border-white/10">
            <div className="max-w-3xl">
              <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.07] text-snow">
                {t.cta}
              </h2>
              <p className="mt-4 text-[16px] sm:text-[17px] text-white/50 max-w-xl leading-relaxed">
                {t.ctaSub}
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full
                  bg-azure text-snow text-[15px] font-medium
                  hover:bg-[#0077ED] hover:scale-[1.02]
                  transition-all duration-200"
              >
                {t.ctaButton}
                <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Columns ────────────────────────────────────────── */}
          <div className="py-14 lg:py-16 grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-16">
            {/* Brand column */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-9 w-9 flex items-center justify-center">
                  <Image src="/assets/icons/logoC.svg" alt="CP" width={24} height={24} className="h-6 w-6" priority />
                </div>
                <span className="text-[15px] font-semibold text-snow">C. Paucar</span>
              </div>
              <p className="text-[13px] text-white/40 leading-relaxed max-w-[200px]">
                Full Stack Developer
                <br />
                {t.location}
              </p>

              {/* Status */}
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34c759]" />
                </span>
                <span className="text-[11px] font-medium text-white/50">{t.status}</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
                {t.navTitle}
              </h4>
              <ul className="space-y-3">
                {t.navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-[14px] text-white/60
                        hover:text-snow transition-colors duration-200"
                    >
                      {item.label}
                      <ArrowUpRightIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
                {t.servicesTitle}
              </h4>
              <ul className="space-y-3">
                {t.services.map((s) => (
                  <li key={s} className="text-[14px] text-white/60">{s}</li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
                {t.connectTitle}
              </h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href={`mailto:${t.email}`} className="text-[14px] text-white/60 hover:text-azure transition-colors duration-200">
                    {t.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="text-[14px] text-white/60 hover:text-azure transition-colors duration-200">
                    {t.phone}
                  </a>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-1.5">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center justify-center h-9 w-9 rounded-xl
                        text-white/40 hover:text-snow hover:bg-white/10
                        transition-all duration-200"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ─────────────────────────────────────── */}
          <div className="py-6 border-t border-white/10
            flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-white/30">
              &copy; {new Date().getFullYear()} Christopher Paucar. {t.rights}
            </p>
            <p className="text-[12px] text-white/20">
              {t.built} Christopher Paucar
            </p>
          </div>
        </SectionContent>
      </Container>
    </footer>
  );
}
