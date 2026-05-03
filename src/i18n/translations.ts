/* ────────────────────────────────────────────────────────────────
   TRANSLATIONS — ES / EN
   Centralized content for the entire portfolio.
   ──────────────────────────────────────────────────────────────── */

export type Locale = "en" | "es";

const translations = {
  // ── NAVBAR ──
  nav: {
    home: { en: "Home", es: "Inicio" },
    projects: { en: "Projects", es: "Proyectos" },
    about: { en: "About", es: "Acerca" },
    contact: { en: "Contact", es: "Contacto" },
  },

  // ── HERO ──
  hero: {
    badge: { en: "Available for new projects", es: "Disponible para nuevos proyectos" },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    title: {
      en: "I build web applications\nfocused on conversion\nand performance.",
      es: "Desarrollo aplicaciones web\nenfocadas en conversión\ny rendimiento.",
    },
    description: {
      en: "Clean architecture, real results. I help businesses turn complex problems into scalable software that drives growth.",
      es: "Arquitectura limpia, resultados reales. Ayudo a negocios a convertir problemas complejos en software escalable que impulsa el crecimiento.",
    },
    cta: { en: "View Projects", es: "Ver proyectos" },
    ctaSecondary: { en: "Request a Quote", es: "Solicitar propuesta" },
  },

  // ── SHOWCASE ──
  showcase: {
    label: { en: "What I Do", es: "Lo que hago" },
    title: { en: "Show, don't tell.", es: "Demostrar, no decir." },
    subtitle: {
      en: "Real interfaces. Real interactions. Real results.",
      es: "Interfaces reales. Interacciones reales. Resultados reales.",
    },
    items: {
      en: [
        { title: "Responsive Interfaces", desc: "Pixel-perfect layouts that adapt to any screen size and device." },
        { title: "API Integration", desc: "Seamless connection between frontend, backend, and third-party services." },
        { title: "Performance Optimization", desc: "Sub-second load times, optimized bundles, and efficient caching strategies." },
        { title: "Interactive Experiences", desc: "3D elements, microinteractions, and animations that serve a purpose." },
      ],
      es: [
        { title: "Interfaces Responsivas", desc: "Layouts pixel-perfect que se adaptan a cualquier pantalla y dispositivo." },
        { title: "Integración de APIs", desc: "Conexión fluida entre frontend, backend y servicios de terceros." },
        { title: "Optimización de Rendimiento", desc: "Tiempos de carga menores a un segundo, bundles optimizados y caché eficiente." },
        { title: "Experiencias Interactivas", desc: "Elementos 3D, microinteracciones y animaciones con propósito." },
      ],
    },
  },

  // ── PROBLEM → SOLUTION ──
  solution: {
    label: { en: "How I Work", es: "Cómo trabajo" },
    title: { en: "From problem to solution.", es: "Del problema a la solución." },
    steps: {
      en: [
        { title: "Problem", desc: "Your business has a technical challenge that slows growth or costs money." },
        { title: "Friction", desc: "Slow platforms, poor UX, outdated stack, or lack of technical expertise." },
        { title: "Change", desc: "I design and build a tailored solution with modern architecture and clean code." },
        { title: "Result", desc: "Faster performance, higher conversion, lower maintenance costs, and real ROI." },
      ],
      es: [
        { title: "Problema", desc: "Tu negocio tiene un reto técnico que frena el crecimiento o cuesta dinero." },
        { title: "Fricción", desc: "Plataformas lentas, mal UX, stack obsoleto o falta de expertise técnico." },
        { title: "Cambio", desc: "Diseño y construyo una solución a medida con arquitectura moderna y código limpio." },
        { title: "Resultado", desc: "Mejor rendimiento, mayor conversión, menores costos de mantenimiento y ROI real." },
      ],
    },
  },

  // ── PROJECTS ──
  projects: {
    label: { en: "Projects", es: "Proyectos" },
    title: { en: "Selected work.", es: "Trabajo seleccionado." },
    subtitle: {
      en: "Each project solves a real business problem.",
      es: "Cada proyecto resuelve un problema de negocio real.",
    },
    viewProject: { en: "View details", es: "Ver detalles" },
    items: {
      en: [
        { title: "E-Commerce Platform", type: "Web App", problem: "Manual inventory and low online conversion rate.", solution: "Full-stack platform with real-time inventory and optimized checkout.", result: "45% increase in conversion rate, 60% fewer manual tasks.", tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe"] },
        { title: "AI Content Generator", type: "SaaS", problem: "Content creation bottleneck for marketing teams.", solution: "GPT-powered platform with templates, billing, and usage analytics.", result: "10x faster content production, 200+ active users.", tags: ["React", "Node.js", "OpenAI", "Stripe"] },
        { title: "Real-Time Dashboard", type: "Enterprise", problem: "No visibility into operational metrics across departments.", solution: "Live analytics dashboard with WebSocket data and role-based access.", result: "Decisions 3x faster, unified data across 4 departments.", tags: ["Next.js", "D3.js", "WebSockets", "Redis"] },
        { title: "Secure Messenger", type: "Security", problem: "Sensitive communications exposed to interception risks.", solution: "E2E encrypted messaging with AES-256-GCM, voice, and file sharing.", result: "Zero security incidents, adopted by 3 organizations.", tags: ["React", "Supabase", "Web Crypto", "TypeScript"] },
      ],
      es: [
        { title: "Plataforma E-Commerce", type: "Web App", problem: "Inventario manual y baja tasa de conversión online.", solution: "Plataforma full-stack con inventario en tiempo real y checkout optimizado.", result: "45% más conversión, 60% menos tareas manuales.", tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe"] },
        { title: "Generador de Contenido IA", type: "SaaS", problem: "Cuello de botella en creación de contenido para equipos de marketing.", solution: "Plataforma con GPT, plantillas, facturación y analíticas de uso.", result: "Producción de contenido 10x más rápida, 200+ usuarios activos.", tags: ["React", "Node.js", "OpenAI", "Stripe"] },
        { title: "Dashboard en Tiempo Real", type: "Enterprise", problem: "Sin visibilidad de métricas operativas entre departamentos.", solution: "Dashboard analítico con datos en vivo vía WebSocket y acceso por roles.", result: "Decisiones 3x más rápidas, datos unificados en 4 departamentos.", tags: ["Next.js", "D3.js", "WebSockets", "Redis"] },
        { title: "Messenger Seguro", type: "Seguridad", problem: "Comunicaciones sensibles expuestas a riesgos de interceptación.", solution: "Mensajería E2E con AES-256-GCM, voz y compartir archivos.", result: "Cero incidentes de seguridad, adoptado por 3 organizaciones.", tags: ["React", "Supabase", "Web Crypto", "TypeScript"] },
      ],
    },
  },

  // ── DIFFERENTIAL ──
  differential: {
    label: { en: "Why Me", es: "Por qué yo" },
    title: { en: "What sets me apart.", es: "Qué me diferencia." },
    items: {
      en: [
        { title: "Results-Driven", desc: "Every line of code is written with business impact in mind. No vanity metrics." },
        { title: "Full Stack Delivery", desc: "From database to UI. One person, one vision, no gaps in communication." },
        { title: "Strategic Interaction", desc: "3D and animations are tools, not decoration. Each element serves a purpose." },
        { title: "Technical Depth", desc: "Clean architecture, tested code, and scalable systems — not just a pretty frontend." },
      ],
      es: [
        { title: "Enfoque en Resultados", desc: "Cada línea de código se escribe pensando en impacto de negocio. Sin métricas de vanidad." },
        { title: "Entrega Full Stack", desc: "Desde la base de datos hasta la UI. Una persona, una visión, sin brechas de comunicación." },
        { title: "Interacción Estratégica", desc: "3D y animaciones son herramientas, no decoración. Cada elemento tiene un propósito." },
        { title: "Profundidad Técnica", desc: "Arquitectura limpia, código testeado y sistemas escalables — no solo un frontend bonito." },
      ],
    },
  },

  // ── TESTIMONIALS ──
  testimonials: {
    label: { en: "Testimonials", es: "Testimonios" },
    title: { en: "What clients say.", es: "Lo que dicen los clientes." },
  },

  // ── FAQ ──
  faq: {
    label: { en: "FAQ", es: "Preguntas frecuentes" },
    title: { en: "Common questions.", es: "Preguntas comunes." },
    items: {
      en: [
        { q: "How much does a project cost?", a: "It depends on scope. A landing page starts at $500, a full web app from $2,000. I provide a detailed quote after understanding your needs." },
        { q: "How long does a project take?", a: "A landing page: 1-2 weeks. A web application: 4-8 weeks. Complex systems: 2-4 months. I give realistic timelines upfront." },
        { q: "What results can I expect?", a: "Faster load times, better conversion rates, lower maintenance costs, and software that scales with your business." },
        { q: "What's your development process?", a: "Discovery → Design → Development → Testing → Deploy. You get weekly updates and access to a staging environment." },
        { q: "Do you offer ongoing support?", a: "Yes. I offer maintenance plans after launch, including bug fixes, updates, and performance monitoring." },
      ],
      es: [
        { q: "¿Cuánto cuesta un proyecto?", a: "Depende del alcance. Una landing page desde $500, una app web completa desde $2,000. Proporciono un presupuesto detallado después de entender tus necesidades." },
        { q: "¿Cuánto tiempo toma un proyecto?", a: "Landing page: 1-2 semanas. Aplicación web: 4-8 semanas. Sistemas complejos: 2-4 meses. Doy plazos realistas desde el inicio." },
        { q: "¿Qué resultados puedo esperar?", a: "Tiempos de carga más rápidos, mejor tasa de conversión, menores costos de mantenimiento y software que escala con tu negocio." },
        { q: "¿Cuál es tu proceso de desarrollo?", a: "Descubrimiento → Diseño → Desarrollo → Testing → Deploy. Recibes actualizaciones semanales y acceso a un entorno de staging." },
        { q: "¿Ofreces soporte continuo?", a: "Sí. Ofrezco planes de mantenimiento post-lanzamiento, incluyendo corrección de bugs, actualizaciones y monitoreo de rendimiento." },
      ],
    },
  },

  // ── CONTACT ──
  contact: {
    label: { en: "Contact", es: "Contacto" },
    title: { en: "Let's work together.", es: "Trabajemos juntos." },
    subtitle: {
      en: "Have a project in mind? Send me a message and I'll reply within 24 hours.",
      es: "¿Tienes un proyecto en mente? Envíame un mensaje y respondo en 24 horas.",
    },
    name: { en: "Name", es: "Nombre" },
    email: { en: "Email", es: "Email" },
    subject: { en: "Subject", es: "Asunto" },
    message: { en: "Message", es: "Mensaje" },
    namePlaceholder: { en: "Your name", es: "Tu nombre" },
    emailPlaceholder: { en: "you@company.com", es: "tu@empresa.com" },
    subjectPlaceholder: { en: "Project inquiry", es: "Consulta de proyecto" },
    messagePlaceholder: { en: "Tell me about your project...", es: "Cuéntame sobre tu proyecto..." },
    cta: { en: "Request a Quote", es: "Solicitar propuesta" },
    sent: { en: "Message sent ✓", es: "Mensaje enviado ✓" },
    whatsapp: { en: "Chat on WhatsApp", es: "Chatear por WhatsApp" },
    location: { en: "Ecuador — Available remotely", es: "Ecuador — Disponible remoto" },
  },

  // ── FOOTER ──
  footer: {
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
    built: { en: "Built with Next.js, TailwindCSS & Framer Motion", es: "Hecho con Next.js, TailwindCSS & Framer Motion" },
  },
} as const;

export default translations;

/* ── Helper hook type ─────────────────────────────────────────── */
export type Translations = typeof translations;
