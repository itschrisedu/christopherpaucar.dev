"use client";

import * as React from "react";
import countries from "@/data/globe.json";

type LatLng = { lat: number; lng: number };
type Dot = { start: LatLng; end: LatLng };

interface WorldMapProps {
  dots?: Dot[];
  width?: number | string;
  height?: number | string;
  className?: string;
}

type GeoRing = Array<[number, number]>;
type GeoFeature = {
  geometry?: { type?: string; coordinates?: unknown };
};

const VIEW_W = 1200;
const VIEW_H = 600;
const GRID_STEP_LNG = 3;
const GRID_STEP_LAT = 3;

function project(lat: number, lng: number) {
  return {
    x: ((lng + 180) / 360) * VIEW_W,
    y: ((90 - lat) / 180) * VIEW_H,
  };
}

function pointInRing(point: LatLng, ring: GeoRing) {
  let inside = false;
  const x = point.lng;
  const y = point.lat;

  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 0.0000001) + xi;
    if (intersects) inside = !inside;
  }

  return inside;
}

function pointInFeature(point: LatLng, feature: GeoFeature) {
  const geometry = feature.geometry;
  if (!geometry?.type || !geometry.coordinates) return false;

  if (geometry.type === "Polygon") {
    const [outerRing] = geometry.coordinates as GeoRing[];
    return outerRing ? pointInRing(point, outerRing) : false;
  }

  if (geometry.type === "MultiPolygon") {
    return (geometry.coordinates as GeoRing[][]).some((polygon) => {
      const [outerRing] = polygon;
      return outerRing ? pointInRing(point, outerRing) : false;
    });
  }

  return false;
}

function buildLandDots() {
  const features = (countries as { features?: GeoFeature[] }).features ?? [];
  const dots: Array<{ x: number; y: number }> = [];

  for (let lat = -60; lat <= 85; lat += GRID_STEP_LAT) {
    for (let lng = -180; lng <= 180; lng += GRID_STEP_LNG) {
      const point = { lat, lng };
      if (features.some((feature) => pointInFeature(point, feature))) {
        const projected = project(lat, lng);
        dots.push(projected);
      }
    }
  }

  return dots;
}

export default function WorldMap({ dots = [], width = "100%", height = 260, className = "" }: WorldMapProps) {
  const [isDark, setIsDark] = React.useState(false);
  const landDots = React.useMemo(() => buildLandDots(), []);

  React.useEffect(() => {
    const syncTheme = () => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const paths = React.useMemo(() => {
    return dots.map((dot) => {
      const start = project(dot.start.lat, dot.start.lng);
      const end = project(dot.end.lat, dot.end.lng);
      const deltaX = end.x - start.x;
      const deltaY = end.y - start.y;
      const distance = Math.hypot(deltaX, deltaY);
      const lift = Math.min(180, Math.max(90, distance * 0.28));
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2 - lift;
      return {
        start,
        end,
        path: `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`,
      };
    });
  }, [dots]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* 
        viewBox was "0 0 1200 510". 
        By changing to "100 0 1000 510" we crop 100px from the left and 100px from the right (mostly empty ocean),
        which makes the aspect ratio tighter and naturally renders the map taller in the available column width. 
      */}
      <svg viewBox={`100 0 1000 510`} width={width} height={height} preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity={isDark ? 0.8 : 0.58}>
          {landDots.map((dot, index) => (
            <circle key={index} cx={dot.x} cy={dot.y} r="1.18" fill={isDark ? "#ffffff" : "#111111"} />
          ))}
        </g>

        <g filter="url(#mapGlow)">
          {paths.map((item, index) => (
            <g key={index}>
              <path
                id={`world-map-path-${index}`}
                d={item.path}
                fill="none"
                stroke={isDark ? "#7dd3fc" : "#2ea8ff"}
                strokeWidth={2.25}
                strokeLinecap="round"
                opacity={0.95}
              />
              <a href={`https://www.google.com/maps?q=${dots[index].start.lat},${dots[index].start.lng}`} target="_blank" rel="noreferrer">
                <circle cx={item.start.x} cy={item.start.y} r={5} fill={isDark ? "#ffffff" : "#111111"} stroke={isDark ? "#7dd3fc" : "#2ea8ff"} strokeWidth={1.4} />
              </a>
              <a href={`https://www.google.com/maps?q=${dots[index].end.lat},${dots[index].end.lng}`} target="_blank" rel="noreferrer">
                <circle cx={item.end.x} cy={item.end.y} r={5} fill={isDark ? "#ffffff" : "#111111"} stroke={isDark ? "#7dd3fc" : "#2ea8ff"} strokeWidth={1.4} />
              </a>
              <circle r="4" fill={isDark ? "#ffffff" : "#111111"} stroke={isDark ? "#7dd3fc" : "#2ea8ff"} strokeWidth="1.2">
                <animateMotion dur={`${9 + index * 1.5}s`} repeatCount="indefinite" rotate="auto" path={item.path} />
              </circle>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}