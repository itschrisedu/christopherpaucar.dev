"use client";

import React, { useEffect, useMemo, useRef } from "react";

type IconCloudProps = {
  images: string[];
  className?: string;
  /** Pixel size of the sphere radius. */
  radius?: number;
  /** Rotation speed (radians per frame). */
  speed?: number;
};

type Vec3 = { x: number; y: number; z: number };

function fibonacciSpherePoints(n: number): Vec3[] {
  // Even distribution on a sphere surface.
  const points: Vec3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / Math.max(1, n - 1)) * 2; // 1 -> -1
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push({ x, y, z });
  }
  return points;
}

export function IconCloud({ images, className, radius = 150, speed = 0.012 }: IconCloudProps) {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafId = useRef<number | null>(null);

  const basePoints = useMemo(() => fibonacciSpherePoints(images.length), [images.length]);

  useEffect(() => {
    const perspective = 800;
    let angle = 0;

    const tick = () => {
      angle += speed;
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);

      for (let i = 0; i < basePoints.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        // Rotate around Y axis.
        const p = basePoints[i];
        const x = p.x * cos + p.z * sin;
        const z = -p.x * sin + p.z * cos;
        const y = p.y;

        const px = x * radius;
        const py = y * radius;
        const pz = z * radius;

        // Project depth into scale/opacity. Keep translate in 2D for stability.
        const scale = perspective / (perspective - pz);
        const opacity = Math.min(1, Math.max(0.2, (pz / radius + 1) / 2));

        el.style.transform = `translate3d(${px}px, ${py}px, 0px) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${Math.round((pz + radius) * 10)}`;
      }

      rafId.current = window.requestAnimationFrame(tick);
    };

    rafId.current = window.requestAnimationFrame(tick);
    return () => {
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
    };
  }, [basePoints, radius, speed]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 0,
          height: 0,
        }}
      >
        {images.map((src, i) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${src}-${i}`}
              ref={(node) => {
                itemRefs.current[i] = node;
              }}
              style={{
                position: "absolute",
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                willChange: "transform, opacity",
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.14))",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              <img
                src={src}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                draggable={false}
                onError={(e) => {
                  // Hide missing icons (Simple Icons may not have every slug).
                  const wrapper = e.currentTarget.parentElement as HTMLElement | null;
                  if (wrapper) wrapper.style.display = "none";
                }}
                style={{
                  width: 40,
                  height: 40,
                  display: "block",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

