"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";

const plans = {
  en: [
    {
      name: "Starter",
      price: "$800+",
      desc: "Landing page for validating your idea.",
      features: ["Responsive page", "Contact form", "Basic SEO", "Delivery in 1-2 weeks"],
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
    },
  ],
  es: [
    {
      name: "Starter",
      price: "$800+",
      desc: "Landing page para validar tu idea.",
      features: ["Página responsive", "Formulario de contacto", "SEO básico", "Entrega en 1-2 semanas"],
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
    },
  ],
} as const;

export default function Pricing() {
  const { locale } = useLanguage();
  const current = plans[locale];

  return (
    <section id="pricing" className="relative -mt-24 pt-6 pb-10 sm:pt-8 sm:pb-12 bg-white dark:bg-[#0b0b0b] overflow-hidden">
      <Container>
        <SectionContent>
          <SectionHeading
            centered
            label={locale === "en" ? "Basic Plans" : "Planes básicos"}
            title={locale === "en" ? "Choose the right start point." : "Elige el punto de inicio correcto."}
            subtitle={locale === "en" ? "Clear scope, clear pricing, clear delivery." : "Alcance claro, precio claro, entrega clara."}
          />

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {current.map((plan) => (
              <Card
                key={plan.name}
                className={`h-full border-border dark:border-white/10 ${
                  plan.highlight ? "ring-2 ring-accent/40 shadow-xl shadow-accent/10" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{plan.name}</span>
                    {plan.highlight ? <span className="rounded-full bg-accent/15 px-2 py-1 text-xs text-accent">Popular</span> : null}
                  </CardTitle>
                  <p className="text-3xl font-bold text-primary dark:text-white">{plan.price}</p>
                  <p className="text-sm text-secondary dark:text-gray-400">{plan.desc}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-secondary dark:text-gray-400">
                      <Check className="mt-0.5 h-4 w-4 text-accent" />
                      <span>{f}</span>
                    </div>
                  ))}
                  <Button asChild className="mt-5 w-full">
                    <a href="#contact">{locale === "en" ? "Start this plan" : "Empezar este plan"}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
