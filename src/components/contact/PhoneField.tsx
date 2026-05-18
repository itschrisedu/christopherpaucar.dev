"use client";

import { useState, useRef, useEffect } from "react";
import CountryFlag from "./CountryFlag";

/* ── Country data (id is unique; iso is for flag images) ───────── */
const countries = [
  { id: "ec", iso: "ec", code: "+593", name: "Ecuador" },
  { id: "us", iso: "us", code: "+1", name: "Estados Unidos" },
  { id: "mx", iso: "mx", code: "+52", name: "México" },
  { id: "co", iso: "co", code: "+57", name: "Colombia" },
  { id: "pe", iso: "pe", code: "+51", name: "Perú" },
  { id: "ar", iso: "ar", code: "+54", name: "Argentina" },
  { id: "cl", iso: "cl", code: "+56", name: "Chile" },
  { id: "br", iso: "br", code: "+55", name: "Brasil" },
  { id: "ve", iso: "ve", code: "+58", name: "Venezuela" },
  { id: "bo", iso: "bo", code: "+591", name: "Bolivia" },
  { id: "py", iso: "py", code: "+595", name: "Paraguay" },
  { id: "uy", iso: "uy", code: "+598", name: "Uruguay" },
  { id: "pa", iso: "pa", code: "+507", name: "Panamá" },
  { id: "cr", iso: "cr", code: "+506", name: "Costa Rica" },
  { id: "gt", iso: "gt", code: "+502", name: "Guatemala" },
  { id: "sv", iso: "sv", code: "+503", name: "El Salvador" },
  { id: "hn", iso: "hn", code: "+504", name: "Honduras" },
  { id: "es", iso: "es", code: "+34", name: "España" },
  { id: "gb", iso: "gb", code: "+44", name: "Reino Unido" },
  { id: "de", iso: "de", code: "+49", name: "Alemania" },
  { id: "fr", iso: "fr", code: "+33", name: "Francia" },
  { id: "it", iso: "it", code: "+39", name: "Italia" },
  { id: "jp", iso: "jp", code: "+81", name: "Japón" },
  { id: "cn", iso: "cn", code: "+86", name: "China" },
  { id: "in", iso: "in", code: "+91", name: "India" },
  { id: "au", iso: "au", code: "+61", name: "Australia" },
  { id: "kr", iso: "kr", code: "+82", name: "Corea del Sur" },
  { id: "ca", iso: "ca", code: "+1", name: "Canadá" },
  { id: "pt", iso: "pt", code: "+351", name: "Portugal" },
] as const;

type Country = (typeof countries)[number];

/* ── Types ─────────────────────────────────────────────────────── */
interface PhoneFieldProps {
  locale: string;
  phoneCountryId: string;
  phone: string;
  onCountryChange: (country: Country) => void;
  onPhoneChange: (phone: string) => void;
  label: string;
  placeholder: string;
  inputClass: string;
}

export default function PhoneField({
  phoneCountryId,
  phone,
  onCountryChange,
  onPhoneChange,
  label,
  placeholder,
  inputClass,
}: PhoneFieldProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = countries.find((c) => c.id === phoneCountryId) ?? countries[0];

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
            <CountryFlag iso={selected.iso} />
            <span className="text-ink dark:text-[var(--color-ink)]" style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "14px" }}>
              {selected.name}
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
              <div style={{ padding: "8px", borderBottom: "1px solid var(--color-border)", position: "sticky", top: 0 }} className="bg-snow dark:bg-[#1c1c1e]">
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
                    key={country.id}
                    type="button"
                    onClick={() => {
                      onCountryChange(country);
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
                      background: phoneCountryId === country.id ? "var(--color-accent, #0071e3)" : "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 150ms",
                    }}
                    className={phoneCountryId === country.id
                      ? "text-snow"
                      : "text-ink dark:text-[var(--color-ink)] hover:bg-fog dark:hover:bg-[#2c2c2e]"
                    }
                    onMouseEnter={(e) => {
                      if (phoneCountryId !== country.id) {
                        (e.currentTarget as HTMLButtonElement).style.background = "";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (phoneCountryId !== country.id) {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      }
                    }}
                  >
                    <CountryFlag iso={country.iso} />
                    <span style={{ flex: 1, fontSize: "14px" }}>{country.name}</span>
                    <span style={{ fontSize: "12px", opacity: 0.5 }}>{country.code}</span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p style={{ padding: "12px", textAlign: "center", fontSize: "13px", opacity: 0.5 }}>
                    No results
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
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
    </div>
  );
}
