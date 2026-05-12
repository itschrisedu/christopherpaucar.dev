"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";

const plans = {
  en: [
    {
      name: "Starter",
      price: "$200+",
      desc: "Perfect to launch your idea and start getting clients online.",
      features: [
        "Professional one-page website",
        "Works perfectly on mobile & desktop",
        "Contact form so clients reach you",
        "Ready in 1–2 weeks",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      price: "$1,500+",
      desc: "For businesses ready to stand out and convert visitors into clients.",
      features: [
        "Multi-page website with custom design",
        "Optimized to appear on Google (SEO)",
        "Fast loading — under 2 seconds",
        "Analytics to track your visitors",
        "Easy to update content yourself",
      ],
      highlight: true,
    },
    {
      name: "Scale",
      price: "$3,000+",
      desc: "Custom web application built to automate and grow your business.",
      features: [
        "User login & dashboard",
        "Automated workflows that save you hours",
        "Secure database for your data",
        "Ready for thousands of users",
        "30 days of free support after launch",
      ],
      highlight: false,
    },
  ],
  es: [
    {
      name: "Starter",
      price: "$200+",
      desc: "Perfecto para lanzar tu idea y empezar a conseguir clientes en línea.",
      features: [
        "Sitio web profesional de una página",
        "Se ve perfecto en celular y computadora",
        "Formulario para que tus clientes te contacten",
        "Listo en 1–2 semanas",
      ],
      highlight: false,
    },
    {
      name: "Crecimiento",
      price: "$1,500+",
      desc: "Para negocios que quieren destacar y convertir visitantes en clientes.",
      features: [
        "Sitio multipágina con diseño personalizado",
        "Optimizado para aparecer en Google (SEO)",
        "Carga rápida — menos de 2 segundos",
        "Analítica para ver quién te visita",
        "Fácil de actualizar el contenido tú mismo",
      ],
      highlight: true,
    },
    {
      name: "Escala",
      price: "$3,000+",
      desc: "Aplicación web a medida para automatizar y escalar tu negocio.",
      features: [
        "Login de usuarios y panel de control",
        "Flujos automáticos que te ahorran horas",
        "Base de datos segura para tu información",
        "Preparado para miles de usuarios",
        "30 días de soporte gratis después del lanzamiento",
      ],
      highlight: false,
    },
  ],
} as const;

export default function Pricing() {
  const { locale } = useLanguage();
  const current = plans[locale];

  return (
    <section id="pricing" className="relative bg-snow dark:bg-[#1c1c1e] overflow-hidden">
      <Container>
        <SectionContent>
          <SectionHeading
            centered
            label={locale === "en" ? "Investment" : "Inversión"}
            title={locale === "en" ? "Plans that fit your stage." : "Planes que se adaptan a tu etapa."}
            subtitle={locale === "en" ? "No hidden fees. You know exactly what you get and when." : "Sin costos ocultos. Sabes exactamente qué recibes y cuándo."}
          />

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {current.map((plan) => (
              <div
                key={plan.name}
                className={`h-full rounded-[28px] p-8 flex flex-col
                  ${plan.highlight
                    ? "bg-obsidian dark:bg-snow text-snow dark:text-obsidian"
                    : "bg-fog dark:bg-[#0a0a0a]"
                  }`}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[17px] font-semibold ${plan.highlight ? "text-snow dark:text-obsidian" : "text-ink dark:text-[var(--color-ink)]"}`}>
                      {plan.name}
                    </span>
                    {plan.highlight ? (
                      <span className="rounded-full bg-snow/15 dark:bg-obsidian/15 px-3 py-1 text-[11px] font-semibold">
                        Popular
                      </span>
                    ) : null}
                  </div>
                  <p className={`text-[2.5rem] font-bold tracking-tight ${plan.highlight ? "text-snow dark:text-obsidian" : "text-ink dark:text-[var(--color-ink)]"}`}>
                    {plan.price}
                  </p>
                  <p className={`text-[14px] mt-2 ${plan.highlight ? "text-snow/70 dark:text-obsidian/70" : "text-graphite dark:text-[var(--color-graphite)]"}`}>
                    {plan.desc}
                  </p>
                </div>

                <div className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className={`flex items-start gap-2.5 text-[14px] ${plan.highlight ? "text-snow/80 dark:text-obsidian/80" : "text-graphite dark:text-[var(--color-graphite)]"}`}>
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlight ? "text-[#30d158]" : "text-azure"}`} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("selectPlan", { detail: plan.name }));
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`mt-8 block w-full text-center py-3.5 rounded-full text-[15px] font-normal transition-all duration-200
                    ${plan.highlight
                      ? "bg-snow dark:bg-obsidian text-obsidian dark:text-snow hover:scale-[1.02]"
                      : "bg-azure text-snow hover:bg-[#0077ED] hover:scale-[1.02]"
                    }`}
                >
                  {locale === "en" ? "Start this plan" : "Empezar este plan"}
                </button>
              </div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
