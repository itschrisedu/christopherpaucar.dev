"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { Button } from "@/components/ui/stateful-button";
import WorldMap from "@/components/ui/world-map";

const EASE = [0.16, 1, 0.3, 1] as const;
const FORMSPREE_URL = "https://formspree.io/f/xpwrpjqo";

const ecuador = { lat: -0.1807, lng: -78.4678 }; // Quito, Ecuador

const worldMapDots = [
  { start: ecuador, end: { lat: 41.8781, lng: -87.6298 } },  // Chicago (Center of North America)
  { start: ecuador, end: { lat: 52.5200, lng: 13.4050 } },   // Berlin (Center of Europe)
  { start: ecuador, end: { lat: -1.2921, lng: 36.8219 } },   // Nairobi (Center of Africa)
  { start: ecuador, end: { lat: 39.9042, lng: 116.4074 } },  // Beijing (Center of Asia)
  { start: ecuador, end: { lat: -23.6980, lng: 133.8807 } }, // Alice Springs (Center of Australia)
];

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleSelectPlan = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const planName = customEvent.detail;
      setFormData((current) => ({
        ...current,
        message: locale === "en" 
          ? `Hi Christopher, I am interested in the ${planName} plan.\n\n`
          : `Hola Christopher, estoy interesado en el plan ${planName}.\n\n`
      }));
    };

    window.addEventListener("selectPlan", handleSelectPlan);
    return () => window.removeEventListener("selectPlan", handleSelectPlan);
  }, [locale]);

  /* ── Security: sanitize input to prevent XSS / injection ──────── */
  const sanitize = (str: string) =>
    str.replace(/<[^>]*>/g, "").replace(/[<>]/g, "").trim();

  /* ── Rate limiting: prevent spam (5s cooldown) ────────────────── */
  const lastSubmitRef = React.useRef(0);

  /* ── Honeypot: invisible field to catch bots ──────────────────── */
  const [honeypot, setHoneypot] = React.useState("");

  const handleSubmit = async () => {
    // Bot check: if honeypot is filled, silently reject
    if (honeypot) { setStatus("sent"); return; }

    // Rate limit: minimum 5s between submissions
    const now = Date.now();
    if (now - lastSubmitRef.current < 5000) return;
    lastSubmitRef.current = now;

    // Sanitize all inputs
    const clean = {
      name: sanitize(formData.name),
      email: sanitize(formData.email),
      subject: sanitize(formData.subject),
      message: sanitize(formData.message),
    };

    // Validate required fields
    if (!clean.name || !clean.email || !clean.message) return;

    const payload = new FormData();
    payload.set("name", clean.name);
    payload.set("email", clean.email);
    payload.set("subject", clean.subject);
    payload.set("message", clean.message);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-silver-mist dark:border-[#38383a] bg-fog dark:bg-[#0a0a0a] px-5 py-4 text-[15px] text-ink dark:text-[var(--color-ink)] placeholder:text-graphite/50 dark:placeholder:text-[var(--color-graphite)]/50 outline-none focus:border-azure focus:ring-2 focus:ring-azure/15 transition-all duration-344";

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void handleSubmit();
  };

  return (
    <section id="contact" ref={ref} className="relative bg-fog dark:bg-[#0a0a0a] overflow-hidden">
      <Container className="relative">
        <SectionContent>
          <div className="rounded-[28px] bg-snow dark:bg-[#1c1c1e] p-5 sm:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE }}
                className="relative overflow-hidden rounded-[28px] bg-fog dark:bg-[#0a0a0a] p-8 sm:p-10"
              >
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-azure/10 text-azure">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>

                <h2 className="text-[2.5rem] sm:text-[3rem] font-bold tracking-[-0.03em] text-ink dark:text-[var(--color-ink)] leading-[1.07]">
                  {locale === "en" ? "Contact Us" : "Contáctanos"}
                </h2>
                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-graphite dark:text-[var(--color-graphite)]">{t.contact.subtitle[locale]}</p>

                <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-graphite dark:text-[var(--color-graphite)]">
                  <span>chrispaucar49@gmail.com</span>
                  <span className="hidden sm:inline text-silver-mist">•</span>
                  <span>+593 98 796 4745</span>
                  <span className="hidden sm:inline text-silver-mist">•</span>
                  <span>{t.contact.location[locale]}</span>
                </div>

                <div className="mt-8 w-full">
                  <WorldMap dots={worldMapDots} />
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                className="rounded-[28px] bg-fog dark:bg-[#0a0a0a] p-8 sm:p-10"
              >
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Honeypot — invisible to users, catches bots */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div>
                    <label htmlFor="name" className="mb-2 block text-[14px] font-semibold text-ink dark:text-[var(--color-ink)]">{locale === "en" ? "Full name" : "Nombre completo"}</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))}
                      placeholder={t.contact.namePlaceholder[locale]}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-[14px] font-semibold text-ink dark:text-[var(--color-ink)]">{locale === "en" ? "Email address" : "Dirección de correo electrónico"}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))}
                      placeholder={t.contact.emailPlaceholder[locale]}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-[14px] font-semibold text-ink dark:text-[var(--color-ink)]">{locale === "en" ? "Company" : "Compañía"}</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData((current) => ({ ...current, subject: e.target.value }))}
                      placeholder={t.contact.subjectPlaceholder[locale]}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-[14px] font-semibold text-ink dark:text-[var(--color-ink)]">{t.contact.message[locale]}</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData((current) => ({ ...current, message: e.target.value }))}
                      placeholder={t.contact.messagePlaceholder[locale]}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  {status === "sent" && (
                    <div className="rounded-2xl bg-[#34c759]/10 px-4 py-3 text-[14px] text-[#34c759]">
                      {t.contact.sent[locale]}
                    </div>
                  )}
                  {status === "error" && (
                    <div className="rounded-2xl bg-[#ff375f]/10 px-4 py-3 text-[14px] text-[#ff375f]">
                      {t.contact.error[locale]}
                    </div>
                  )}
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    loadingText={t.contact.sending[locale]}
                    className="inline-flex h-[52px] items-center justify-center rounded-full px-8 text-[15px] font-normal bg-azure text-snow hover:bg-[#0077ED] transition-all duration-200"
                  >
                    {t.contact.cta[locale]}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
