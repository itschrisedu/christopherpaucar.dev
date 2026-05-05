"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#38bdf8",
  trailColor = "#0ea5e9",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const getRandomStartPoint = useCallback(() => {
    const side = Math.random() < 0.5 ? "top" : "right";
    if (side === "top") {
      return { x: Math.random() * window.innerWidth, y: 0, angle: 45 + Math.random() * 45 };
    }
    return { x: window.innerWidth, y: Math.random() * window.innerHeight, angle: 135 + Math.random() * 45 };
  }, []);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
        distance: 0,
      };
      setStar(newStar);

      const duration = 1000;
      const startTime = performance.now();

      const moveStar = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = elapsed / duration;

        if (progress < 1) {
          const radians = (newStar.angle * Math.PI) / 180;
          const dist = newStar.speed * elapsed * 0.05;
          setStar((prev) =>
            prev
              ? {
                  ...prev,
                  x: newStar.x + Math.cos(radians) * dist,
                  y: newStar.y + Math.sin(radians) * dist,
                  scale: 1 - progress * 0.5,
                  distance: dist,
                }
              : null
          );
          requestAnimationFrame(moveStar);
        } else {
          setStar(null);
        }
      };

      requestAnimationFrame(moveStar);
    };

    const scheduleNextStar = () => {
      const delay = minDelay + Math.random() * (maxDelay - minDelay);
      return setTimeout(() => {
        createStar();
        const id = scheduleNextStar();
        return id;
      }, delay);
    };

    createStar();
    const id = scheduleNextStar();
    return () => clearTimeout(id);
  }, [minSpeed, maxSpeed, minDelay, maxDelay, getRandomStartPoint]);

  return (
    <svg ref={svgRef} className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#star-gradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
