"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;
const WHATSAPP = "593987964745";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); };
  const waMsg = locale === "en" ? "Hi Christopher, I have a project inquiry." : "Hola Christopher, tengo una consulta de proyecto.";

  return (
    <section id="contact" ref={ref} className="relative py-32 sm:py-40 bg-white dark:bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }}>
            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-5">{t.contact.label[locale]}</span>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold tracking-[-0.03em] text-primary leading-[1.1]">{t.contact.title[locale]}</h2>
            <p className="mt-6 text-[15px] text-secondary max-w-md leading-[1.8]">{t.contact.subtitle[locale]}</p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-surface dark:bg-[#151515] border border-border dark:border-white/8 hover:border-accent/25 transition-all duration-500">
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-orange/10 flex-shrink-0">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <div><p className="text-[14px] font-bold text-primary">Email</p><p className="text-[13px] text-secondary mt-0.5">hello@christopherpaucar.dev</p></div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-surface dark:bg-[#151515] border border-border dark:border-white/8 hover:border-accent/25 transition-all duration-500">
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-orange/10 flex-shrink-0">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </div>
                <div><p className="text-[14px] font-bold text-primary">{locale === "en" ? "Location" : "Ubicación"}</p><p className="text-[13px] text-secondary mt-0.5">{t.contact.location[locale]}</p></div>
              </div>
            </div>

            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer"
              className="mt-7 inline-flex sm:hidden h-[52px] items-center justify-center gap-3 rounded-2xl bg-[#25d366] px-7 text-[14px] font-bold text-white shadow-xl shadow-[#25d366]/20 hover:shadow-2xl transition-all"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              {t.contact.whatsapp[locale]}
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15, ease: EASE }}>
            <form onSubmit={handleSubmit} className="p-9 sm:p-10 rounded-3xl bg-surface dark:bg-[#151515] border border-border dark:border-white/8 shadow-2xl shadow-black/5 dark:shadow-black/30 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-primary mb-2.5 uppercase tracking-[0.15em]">{t.contact.name[locale]}</label>
                  <input id="name" type="text" required placeholder={t.contact.namePlaceholder[locale]} className="w-full rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#0b0b0b] px-4 py-3.5 text-[14px] text-primary placeholder:text-muted outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-primary mb-2.5 uppercase tracking-[0.15em]">{t.contact.email[locale]}</label>
                  <input id="email" type="email" required placeholder={t.contact.emailPlaceholder[locale]} className="w-full rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#0b0b0b] px-4 py-3.5 text-[14px] text-primary placeholder:text-muted outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-300" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[11px] font-bold text-primary mb-2.5 uppercase tracking-[0.15em]">{t.contact.subject[locale]}</label>
                <input id="subject" type="text" required placeholder={t.contact.subjectPlaceholder[locale]} className="w-full rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#0b0b0b] px-4 py-3.5 text-[14px] text-primary placeholder:text-muted outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-primary mb-2.5 uppercase tracking-[0.15em]">{t.contact.message[locale]}</label>
                <textarea id="message" required rows={5} placeholder={t.contact.messagePlaceholder[locale]} className="w-full rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#0b0b0b] px-4 py-3.5 text-[14px] text-primary placeholder:text-muted outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-300 resize-none" />
              </div>
              <button type="submit" disabled={submitted}
                className="w-full sm:w-auto inline-flex h-[52px] items-center justify-center gap-2 rounded-2xl bg-accent px-10 text-[14px] font-bold text-[#0b0b0b] shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 hover:bg-accent-hover transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >{submitted ? t.contact.sent[locale] : t.contact.cta[locale]}</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
