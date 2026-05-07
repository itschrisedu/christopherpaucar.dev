"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();

  const testimonials =
    locale === "en"
      ? [
          {
            quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop",
          },
          {
            quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
          },
          {
            quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1200&auto=format&fit=crop",
          },
          {
            quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=1200&auto=format&fit=crop",
          },
          {
            quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1200&auto=format&fit=crop",
          },
        ]
      : [
          {
            quote: "La atención al detalle y las funciones innovadoras transformaron por completo nuestro flujo de trabajo. Era exactamente lo que buscábamos.",
            name: "Sarah Chen",
            designation: "Product Manager en TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop",
          },
          {
            quote: "La implementación fue fluida y los resultados superaron nuestras expectativas. La flexibilidad de la plataforma es notable.",
            name: "Michael Rodriguez",
            designation: "CTO en InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
          },
          {
            quote: "Esta solución mejoró significativamente la productividad del equipo. La interfaz intuitiva vuelve simples las tareas complejas.",
            name: "Emily Watson",
            designation: "Directora de Operaciones en CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1200&auto=format&fit=crop",
          },
          {
            quote: "Soporte sobresaliente y funcionalidades robustas. Es raro encontrar un producto que cumpla todo lo que promete.",
            name: "James Kim",
            designation: "Engineering Lead en DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=1200&auto=format&fit=crop",
          },
          {
            quote: "La escalabilidad y el rendimiento fueron un cambio total para nuestra organización. Muy recomendado para negocios en crecimiento.",
            name: "Lisa Thompson",
            designation: "VP de Tecnología en FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1200&auto=format&fit=crop",
          },
        ];

  return (
    <section id="testimonials" ref={ref} className="relative -mt-24 pt-6 pb-10 sm:pt-8 sm:pb-12 bg-surface dark:bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <Container>
        <SectionContent>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-6">
            <SectionHeading centered label={t.testimonials.label[locale]} title={t.testimonials.title[locale]} />
          </motion.div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={inView} autoplayIntervalMs={5000} />
        </SectionContent>
      </Container>
    </section>
  );
}
