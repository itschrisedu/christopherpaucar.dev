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

  useEffect(() => {
    if (isTouchDevice()) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

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
    <div className="pointer-events-none fixed inset-0 z-[9998] hidden md:block">
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
                className="fill-black dark:fill-white"
            />
        </svg>
      </div>
    </div>
  );
}
