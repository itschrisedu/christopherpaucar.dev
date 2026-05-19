"use client";
import { useRef, useState, useEffect } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TestimonialModal } from "./TestimonialModal";
import { type TestimonialData } from "./TestimonialForm";

const EASE = [0.16, 1, 0.3, 1] as const;

interface StoredTestimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating?: number;
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();

  // Initial testimonials
  const initialTestimonials = {
    en: [
      {
        quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Johnny Rivera",
        designation: "Product Manager at TechFlow",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Elizabeth Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Alejandro Gonzalez",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "Fernando Maldonado",
        designation: "Engineering Lead at DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=1200&auto=format&fit=crop",
        rating: 4,
      },
      {
        quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "James Vaca",
        designation: "VP of Technology at FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "I loved how fast and professional the delivery was — exceeded my expectations.",
        name: "Viviana Arcos",
        designation: "Head of Product at Nova",
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
    ],
    es: [
      {
        quote: "La atención al detalle y las funciones innovadoras transformaron por completo nuestro flujo de trabajo. Era exactamente lo que buscábamos.",
        name: "Johnny Rivera",
        designation: "Product Manager en TechFlow",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "La implementación fue fluida y los resultados superaron nuestras expectativas. La flexibilidad de la plataforma es notable.",
        name: "Elizabeth Rodriguez",
        designation: "CTO en InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "Esta solución mejoró significativamente la productividad del equipo. La interfaz intuitiva vuelve simples las tareas complejas.",
        name: "Alejandro Gonzalez",
        designation: "Directora de Operaciones en CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "Soporte sobresaliente y funcionalidades robustas. Es raro encontrar un producto que cumpla todo lo que promete.",
        name: "Fernando Maldonado",
        designation: "Engineering Lead en DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=1200&auto=format&fit=crop",
        rating: 4,
      },
      {
        quote: "La escalabilidad y el rendimiento fueron un cambio total para nuestra organización. Muy recomendado para negocios en crecimiento.",
        name: "James Vaca",
        designation: "VP de Tecnología en FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "Me encantó la rapidez y la entrega profesional — superó mis expectativas.",
        name: "Viviana Arcos",
        designation: "Head of Product en Nova",
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
        rating: 5,
      },
    ],
  };

  const [testimonials, setTestimonials] = useState<StoredTestimonial[]>(() =>
    initialTestimonials[locale as keyof typeof initialTestimonials]
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitTestimonial = async (data: TestimonialData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newTestimonial = await response.json();
        setTestimonials([
          {
            quote: newTestimonial.quote,
            name: newTestimonial.name,
            designation: newTestimonial.designation,
            src: newTestimonial.src,
            rating: newTestimonial.rating,
          },
          ...testimonials,
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="testimonials" ref={ref} className="relative bg-snow dark:bg-[#1c1c1e] overflow-hidden">

      <Container>
        <SectionContent>
          <LazyMotion features={domAnimation}>
            <m.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-10 sm:mb-14">
              <SectionHeading centered label={t.testimonials.label[locale]} title={t.testimonials.title[locale]} />
            </m.div>
          </LazyMotion>

          <TestimonialModal onSubmit={handleSubmitTestimonial} />

          <AnimatedTestimonials testimonials={testimonials} autoplay={inView} autoplayIntervalMs={5000} />
        </SectionContent>
      </Container>
    </section>
  );
}
