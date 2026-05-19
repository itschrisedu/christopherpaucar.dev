"use client";

import { useTheme } from "@/context/ThemeContext";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function AnimatedThemeToggler({
  duration = 900,
}: {
  duration?: number;
}) {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [portalOrigin, setPortalOrigin] = useState("50% 50%");

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return;

    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setOrigin({ x, y });
    }

    setIsAnimating(true);
    toggleTheme();

    setTimeout(() => {
      setIsAnimating(false);
    }, duration);
  };

  // Compute portal origin when animation starts (safe to access ref here)
  useEffect(() => {
    if (isAnimating && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPortalOrigin(`${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`);
    }
  }, [isAnimating]);

  // Obtener las coordenadas globales del botón (calculadas cuando se renderiza el portal)

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="relative h-10 w-10 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/10"
        aria-label="Toggle theme"
      >
        {/* Background layer */}
        <div className="absolute inset-0 bg-white dark:bg-[#0b0b0b]" />

        {/* Animated overlay pequeño en el botón */}
        <div
          className="absolute inset-0 bg-[#0b0b0b] dark:bg-white"
          style={{
            transformOrigin: `${origin.x}% ${origin.y}%`,
            transform: isAnimating ? "scale(3)" : "scale(0)",
            opacity: isAnimating ? 1 : 0,
            transition: `transform ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${duration}ms ease-out`,
          }}
        />

        {/* Icon container - siempre visible arriba */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {theme === "light" ? (
            <svg className="h-[18px] w-[18px] text-secondary dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          ) : (
            <svg className="h-[18px] w-[18px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          )}
        </div>
      </button>

      {/* Overlay global que cubre toda la pantalla */}
      {isAnimating &&
        createPortal(
          <div
            className="fixed inset-0 pointer-events-none z-[9999] backdrop-blur-sm"
            style={{
                transformOrigin: portalOrigin,
              }}
          >
            <div
              className="absolute inset-0 bg-[#0b0b0b] dark:bg-white"
              style={{
                transform: `scale(${isAnimating ? 5 : 0})`,
                opacity: isAnimating ? 0.75 : 0,
                transition: `transform ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity ${duration}ms ease-in-out`,
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
}
