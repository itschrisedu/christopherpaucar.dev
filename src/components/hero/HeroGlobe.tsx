"use client";

import { useEffect, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { loadHeroGlobeWorld } from "@/lib/prefetch-hero-globe";
import type { GlobeConfig } from "@/components/ui/globe";

const EASE = [0.16, 1, 0.3, 1] as const;

type Arc = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

interface HeroGlobeProps {
  data: Arc[];
  globeConfig: GlobeConfig;
}

function GlobePlaceholder() {
  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 rounded-full"
      animate={{ opacity: [0.35, 0.55, 0.35] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background:
          "radial-gradient(circle at 38% 38%, rgba(0,113,227,0.45) 0%, rgba(0,51,102,0.35) 42%, rgba(0,34,68,0.15) 68%, transparent 72%)",
        boxShadow: "inset 0 0 80px rgba(0,122,255,0.12)",
      }}
    />
  );
}

export default function HeroGlobe({ data, globeConfig }: HeroGlobeProps) {
  const [World, setWorld] = useState<ComponentType<{ data: Arc[]; globeConfig: GlobeConfig }> | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const mountGlobe = async () => {
      const WorldComponent = await loadHeroGlobeWorld();
      if (cancelled) return;

      // Let hero text paint before WebGL init (keeps transition feeling instant)
      await new Promise<void>((resolve) => {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(() => resolve(), { timeout: 400 });
        } else {
          setTimeout(resolve, 50);
        }
      });
      if (cancelled) return;

      setWorld(() => WorldComponent);
      requestAnimationFrame(() => {
        if (!cancelled) setVisible(true);
      });
    };

    mountGlobe();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div className="relative h-full w-full">
      {!visible && <GlobePlaceholder />}
      {World && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <World data={data} globeConfig={globeConfig} />
        </motion.div>
      )}
    </motion.div>
  );
}
