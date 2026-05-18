import type { ComponentType } from "react";
import type { WorldProps } from "@/components/ui/globe";

type WorldComponent = ComponentType<WorldProps>;

let globeModulePromise: Promise<{ World: WorldComponent }> | null = null;

/** Starts downloading the Three.js globe chunk (call during terminal intro). */
export function prefetchHeroGlobe() {
  if (typeof window === "undefined") return globeModulePromise;
  if (!globeModulePromise) {
    globeModulePromise = import("@/components/ui/globe");
  }
  return globeModulePromise;
}

/** Resolves when the World component is ready to render. */
export async function loadHeroGlobeWorld(): Promise<WorldComponent> {
  const mod = await (prefetchHeroGlobe() ?? import("@/components/ui/globe"));
  return mod.World;
}
