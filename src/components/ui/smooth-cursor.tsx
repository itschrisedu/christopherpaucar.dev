"use client";

import { useEffect, useRef } from "react";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export function SmoothCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const currentAngleRef = useRef(0);
  const targetAngleRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isTouchDevice()) return;

    const cursor = cursorRef.current;
    const wrapper = wrapperRef.current;
    if (!cursor || !wrapper) return;

    const handleMove = (event: MouseEvent) => {
      const dx = event.clientX - lastPointerRef.current.x;
      const dy = event.clientY - lastPointerRef.current.y;

      if (dx !== 0 || dy !== 0) {
        targetAngleRef.current = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      }

      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      lastPointerRef.current.x = event.clientX;
      lastPointerRef.current.y = event.clientY;
      cursor.style.opacity = "1";

      /* ── Detect hover over Hero Globe to disable blend mode ── */
      const globe = document.getElementById("hero-globe");
      let isOverGlobe = false;
      if (globe) {
        const rect = globe.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const radius = (rect.width / 2) * 0.95; // 95% of its bounding box to be precise
        const dist = Math.hypot(event.clientX - cx, event.clientY - cy);
        if (dist < radius) {
          isOverGlobe = true;
        }
      }

      if (isOverGlobe) {
        wrapper.classList.remove("mix-blend-difference", "text-white");
        wrapper.classList.add("text-ink", "dark:text-snow");
      } else {
        wrapper.classList.add("mix-blend-difference", "text-white");
        wrapper.classList.remove("text-ink", "dark:text-snow");
      }
    };

    const animate = () => {
      cursorPosRef.current.x += (targetRef.current.x - cursorPosRef.current.x) * 0.5;
      cursorPosRef.current.y += (targetRef.current.y - cursorPosRef.current.y) * 0.5;

      const angleDiff = ((targetAngleRef.current - currentAngleRef.current + 540) % 360) - 180;
      currentAngleRef.current += angleDiff * 0.45;

      cursor.style.transform = `translate3d(${cursorPosRef.current.x}px, ${cursorPosRef.current.y}px, 0) translate(-50%, -50%) rotate(${currentAngleRef.current}deg)`;
      rafRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} className="pointer-events-none fixed inset-0 z-[10000] hidden md:block mix-blend-difference text-white transition-colors duration-150">
      <div
        ref={cursorRef}
        className="smooth-cursor absolute left-0 top-0 h-6 w-5 opacity-0"
      >
        <svg viewBox="0 0 64 64" className="h-full w-full">
            <path
                d="
                M32 6 
                L30 10
                Q32 6 34 10

                L54 54
                Q56 58 52 58

                L34 52
                Q32 50 30 52

                L12 58
                Q8 58 10 54

                Z
                "
                className="fill-current"
            />
        </svg>
      </div>
    </div>
  );
}
