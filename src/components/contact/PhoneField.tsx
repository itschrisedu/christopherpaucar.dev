"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/* ── Country data ──────────────────────────────────────────────── */
const countries = [
  { code: "+593", name: "Ecuador", iso: "ec" },
  { code: "+1", name: "Estados Unidos", iso: "us" },
  { code: "+52", name: "México", iso: "mx" },
  { code: "+57", name: "Colombia", iso: "co" },
  { code: "+51", name: "Perú", iso: "pe" },
  { code: "+54", name: "Argentina", iso: "ar" },
  { code: "+56", name: "Chile", iso: "cl" },
  { code: "+55", name: "Brasil", iso: "br" },
  { code: "+58", name: "Venezuela", iso: "ve" },
  { code: "+591", name: "Bolivia", iso: "bo" },
  { code: "+595", name: "Paraguay", iso: "py" },
  { code: "+598", name: "Uruguay", iso: "uy" },
  { code: "+507", name: "Panamá", iso: "pa" },
  { code: "+506", name: "Costa Rica", iso: "cr" },
  { code: "+502", name: "Guatemala", iso: "gt" },
  { code: "+503", name: "El Salvador", iso: "sv" },
  { code: "+504", name: "Honduras", iso: "hn" },
  { code: "+34", name: "España", iso: "es" },
  { code: "+44", name: "Reino Unido", iso: "gb" },
  { code: "+49", name: "Alemania", iso: "de" },
  { code: "+33", name: "Francia", iso: "fr" },
  { code: "+39", name: "Italia", iso: "it" },
  { code: "+81", name: "Japón", iso: "jp" },
  { code: "+86", name: "China", iso: "cn" },
  { code: "+91", name: "India", iso: "in" },
  { code: "+61", name: "Australia", iso: "au" },
  { code: "+82", name: "Corea del Sur", iso: "kr" },
  { code: "+1", name: "Canadá", iso: "ca" },
  { code: "+351", name: "Portugal", iso: "pt" },
] as const;

function FlagIcon({ iso, alt }: { iso: string; alt: string }) {
  return (
    <div style={{ width: 20, height: 15, position: "relative", flexShrink: 0, overflow: "hidden", borderRadius: "2px", border: "1px solid rgba(128,128,128,0.2)" }}>
      <Image
        src={`https://flagcdn.com/w40/${iso}.png`}
        alt={alt}
        fill
        sizes="20px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

/* ── Types ─────────────────────────────────────────────────────── */
interface PhoneFieldProps {
  locale: string;
  phoneCode: string;
  phone: string;
  onPhoneCodeChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  label: string;
  placeholder: string;
  inputClass: string;
}

export default function PhoneField({
  phoneCode,
  phone,
  onPhoneCodeChange,
  onPhoneChange,
  label,
  placeholder,
  inputClass,
}: PhoneFieldProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = countries.find((c) => c.code === phoneCode) ?? countries[0];

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Focus search when opened */
  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open]);

  const filtered = search
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.code.includes(search)
      )
    : countries;

  return (
    <div>
      <label htmlFor="phone" className="mb-2 block text-[14px] font-semibold text-ink dark:text-[var(--color-ink)]">
        {label}
      </label>
      <div style={{ display: "flex", gap: "8px" }}>
        {/* Country picker */}
        <div ref={wrapperRef} style={{ position: "relative", flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={inputClass}
            style={{
              width: "140px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              textAlign: "left",
              fontSize: "14px",
            }}
          >
            <FlagIcon iso={selected.iso} alt={selected.name} />
            <span className="text-ink dark:text-[var(--color-ink)]" style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "14px" }}>
              {selected.code}
            </span>
            <svg
              style={{ width: "12px", height: "12px", flexShrink: 0, opacity: 0.4, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {/* Dropdown */}
          {open && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 4px)",
                left: 0,
                width: "260px",
                maxHeight: "280px",
                zIndex: 100,
                overflowY: "auto",
                borderRadius: "16px",
                border: "1px solid var(--color-border)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
              }}
              className="bg-snow dark:bg-[#1c1c1e]"
            >
              {/* Search */}
              <div style={{ padding: "8px", borderBottom: "1px solid var(--color-border)", position: "sticky", top: 0, zIndex: 2 }} className="bg-snow dark:bg-[#1c1c1e]">
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar país..."
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    border: "1px solid var(--color-border)",
                    outline: "none",
                    fontSize: "13px",
                    background: "var(--color-surface)",
                  }}
                  className="text-ink dark:text-[var(--color-ink)] placeholder:text-graphite/50"
                />
              </div>

              {/* Options */}
              <div style={{ padding: "4px" }}>
                {filtered.map((country) => (
                  <button
                    key={`${country.code}-${country.name}`}
                    type="button"
                    onClick={() => {
                      onPhoneCodeChange(country.code);
                      setOpen(false);
                      setSearch("");
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      border: "none",
                      background: phoneCode === country.code ? "var(--color-accent, #0071e3)" : "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 150ms",
                    }}
                    className={phoneCode === country.code
                      ? "text-snow"
                      : "text-ink dark:text-[var(--color-ink)] hover:bg-fog dark:hover:bg-[#2c2c2e]"
                    }
                    onMouseEnter={(e) => {
                      if (phoneCode !== country.code) {
                        (e.currentTarget as HTMLButtonElement).style.background = "";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (phoneCode !== country.code) {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      }
                    }}
                  >
                    <FlagIcon iso={country.iso} alt={country.name} />
                    <span style={{ flex: 1, fontSize: "14px" }}>{country.name}</span>
                    <span style={{ fontSize: "12px", opacity: 0.5 }}>{country.code}</span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p style={{ padding: "12px", textAlign: "center", fontSize: "13px", opacity: 0.5 }}>
                    No se encontraron resultados
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Phone number input */}
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => {
            // Allow only digits in the phone input; preserve cursor behavior by sending digits-only
            const digits = e.target.value.replace(/\D+/g, "");
            onPhoneChange(digits);
          }}
          placeholder={placeholder}
          className={inputClass}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
    </div>
  );
}
