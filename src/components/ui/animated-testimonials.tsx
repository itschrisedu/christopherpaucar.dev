"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  autoplay?: boolean;
  autoplayIntervalMs?: number;
};

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  autoplayIntervalMs = 4500,
}: AnimatedTestimonialsProps) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const total = testimonials.length;
  const prev = () => setIndex((v) => (v - 1 + total) % total);
  const next = () => setIndex((v) => (v + 1) % total);

  const miniList = useMemo(() => testimonials, [testimonials]);

  useEffect(() => {
    if (!autoplay || total <= 1) return;

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setIndex((v) => (v + 1) % total);
      }
    }, autoplayIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [autoplay, autoplayIntervalMs, total]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 dark:border-white/10 dark:bg-[#131313]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="relative h-[420px] overflow-hidden rounded-2xl"
          >
            <Image src={current.src} alt={current.name} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-black/55 p-4 backdrop-blur-sm">
              <p className="text-lg font-semibold text-white">{current.name}</p>
              <p className="text-sm text-white/80">{current.designation}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 dark:border-white/10 dark:bg-[#131313] sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.name}-quote`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
          >
            <p className="text-3xl leading-none text-accent/35">&ldquo;</p>
            <p className="mt-4 text-[17px] leading-relaxed text-secondary dark:text-gray-400">{current.quote}</p>
            <p className="mt-8 text-lg font-semibold text-primary dark:text-white">{current.name}</p>
            <p className="text-sm text-muted dark:text-gray-500">{current.designation}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between gap-3">
          <div className="flex -space-x-2">
            {miniList.map((item) => (
              <button
                key={item.src}
                onClick={() => setIndex(testimonials.findIndex((t) => t.src === item.src))}
                className={`h-10 w-10 overflow-hidden rounded-full border-2 ${item.src === current.src ? "border-accent" : "border-white/70 dark:border-black/40"}`}
                aria-label={`Show testimonial from ${item.name}`}
              >
                <Image src={item.src} alt={item.name} width={40} height={40} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} className="rounded-lg border border-border p-2 text-secondary dark:text-gray-400 hover:text-accent dark:border-white/10" aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} className="rounded-lg border border-border p-2 text-secondary dark:text-gray-400 hover:text-accent dark:border-white/10" aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
