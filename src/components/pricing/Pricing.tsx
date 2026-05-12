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
      desc: "Landing page for validating your idea.",
      features: ["Responsive page", "Contact form", "Basic SEO", "Delivery in 1-2 weeks"],
      highlight: false,
    },
    {
      name: "Business",
      price: "$1,500+",
      desc: "Multi-section website ready to convert.",
      features: ["Custom UI", "Performance optimization", "CMS-ready structure", "Analytics integration"],
      highlight: true,
    },
    {
      name: "Pro App",
      price: "$3,000+",
      desc: "Full-stack app with scalable architecture.",
      features: ["Auth + roles", "Database + API", "Production deployment", "Post-launch support"],
      highlight: false,
    },
  ],
  es: [
    {
      name: "Starter",
      price: "$200+",
      desc: "Landing page para validar tu idea.",
      features: ["Página responsive", "Formulario de contacto", "SEO básico", "Entrega en 1-2 semanas"],
      highlight: false,
    },
    {
      name: "Business",
      price: "$1,500+",
      desc: "Sitio multipágina listo para convertir.",
      features: ["UI personalizada", "Optimización de rendimiento", "Estructura lista para CMS", "Integración de analítica"],
      highlight: true,
    },
    {
      name: "Pro App",
      price: "$3,000+",
      desc: "App full-stack con arquitectura escalable.",
      features: ["Auth + roles", "Base de datos + API", "Despliegue en producción", "Soporte post-lanzamiento"],
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
            label={locale === "en" ? "Basic Plans" : "Planes básicos"}
            title={locale === "en" ? "Choose the right start point." : "Elige el punto de inicio correcto."}
            subtitle={locale === "en" ? "Clear scope, clear pricing, clear delivery." : "Alcance claro, precio claro, entrega clara."}
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

                <a href="#contact"
                  className={`mt-8 block text-center py-3.5 rounded-full text-[15px] font-normal transition-all duration-200
                    ${plan.highlight
                      ? "bg-snow dark:bg-obsidian text-obsidian dark:text-snow hover:scale-[1.02]"
                      : "bg-azure text-snow hover:bg-[#0077ED] hover:scale-[1.02]"
                    }`}
                >
                  {locale === "en" ? "Start this plan" : "Empezar este plan"}
                </a>
              </div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
