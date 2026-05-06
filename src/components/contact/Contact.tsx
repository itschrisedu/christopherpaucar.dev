"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";

const EASE = [0.16, 1, 0.3, 1] as const;
const WHATSAPP = "593987964745";
const FORMSPREE_URL = "https://formspree.io/f/xpwrpjqo";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
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

  const waMsg = locale === "en" ? "Hi Christopher, I have a project inquiry." : "Hola Christopher, tengo una consulta de proyecto.";

  const inputClass =
    "w-full rounded-xl border border-border/70 dark:border-white/10 bg-white/95 dark:bg-white/[0.04] px-4 py-3.5 text-[14px] text-primary dark:text-white placeholder:text-muted dark:placeholder:text-gray-500 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300";

  return (
    <section id="contact" ref={ref} className="relative scroll-mt-28 py-24 sm:py-28 bg-white dark:bg-[#0b0b0b] overflow-hidden">
      <Container className="relative">
        <SectionContent>
          <div className="rounded-[28px] border border-border/70 bg-surface/60 p-4 dark:border-white/10 dark:bg-[#0f0f12] sm:p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE }}
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/70 p-8 dark:border-white/10 dark:bg-[#0c0c10] sm:p-10"
              >
                <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-primary dark:text-white sm:text-5xl">
                  {locale === "en" ? "Contact Us" : "Contáctanos"}
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-secondary dark:text-gray-400">{t.contact.subtitle[locale]}</p>

                <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted dark:text-gray-500">
                  <span>chrispaucar49@gmail.com</span>
                  <span className="hidden sm:inline">•</span>
                  <span>+593 98 796 4745</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{t.contact.location[locale]}</span>
                </div>

                <div className="relative mt-12 h-40 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-slate-200/60 to-slate-100/20 dark:border-white/10 dark:from-slate-900/40 dark:to-black/20">
                  <div className="absolute inset-0 opacity-40 dark:opacity-20" style={{ backgroundImage: "linear-gradient(rgba(120,120,120,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,120,0.2) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  <div className="absolute left-[58%] top-[53%] h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_18px_4px_rgba(245,185,66,0.5)]" />
                  <div className="absolute left-[58%] top-[53%] h-14 w-[2px] -translate-x-1/2 -translate-y-full bg-gradient-to-t from-accent to-transparent" />
                  <span className="absolute left-[58%] top-[18%] -translate-x-1/2 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white dark:bg-white/15">
                    {locale === "en" ? "We are here" : "Estamos aquí"}
                  </span>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-[50px] items-center justify-center rounded-xl bg-[#25d366] px-6 text-sm font-semibold text-white shadow-lg shadow-[#25d366]/25 transition hover:brightness-110"
                >
                  {t.contact.whatsapp[locale]}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                className="rounded-3xl border border-border/60 bg-white/75 p-8 dark:border-white/10 dark:bg-[#0c0c10] sm:p-10"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-primary dark:text-white">{locale === "en" ? "Full name" : "Nombre completo"}</label>
                    <input id="name" name="name" type="text" required placeholder={t.contact.namePlaceholder[locale]} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-primary dark:text-white">{locale === "en" ? "Email address" : "Dirección de correo electrónico"}</label>
                    <input id="email" name="email" type="email" required placeholder={t.contact.emailPlaceholder[locale]} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-primary dark:text-white">{locale === "en" ? "Company" : "Compañía"}</label>
                    <input id="subject" name="subject" type="text" required placeholder={t.contact.subjectPlaceholder[locale]} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-primary dark:text-white">{t.contact.message[locale]}</label>
                    <textarea id="message" name="message" required rows={5} placeholder={t.contact.messagePlaceholder[locale]} className={`${inputClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className={`inline-flex h-[50px] items-center justify-center rounded-xl px-7 text-sm font-semibold transition ${
                      status === "sent"
                        ? "bg-green-500 text-white"
                        : status === "error"
                        ? "bg-red-500 text-white"
                        : "bg-accent text-[#0b0b0b] dark:text-white hover:bg-accent-hover"
                    } disabled:opacity-70`}
                  >
                    {status === "sending" && t.contact.sending[locale]}
                    {status === "sent" && t.contact.sent[locale]}
                    {status === "error" && t.contact.error[locale]}
                    {status === "idle" && (locale === "en" ? "Submit" : "Entregar")}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
