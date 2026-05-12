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
    badge: { en: "2 spots available this month", es: "2 espacios disponibles este mes" },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    title: {
      en: "Your next web app.\nBuilt to convert,\nnot just to look good.",
      es: "Tu próxima web app.\nHecha para convertir,\nno solo para verse bien.",
    },
    description: {
      en: "I help startups and growing businesses ship full-stack web applications that load fast, convert visitors, and scale without breaking. From database to UI — one developer, zero communication gaps.",
      es: "Ayudo a startups y negocios en crecimiento a lanzar aplicaciones web full-stack que cargan rápido, convierten visitantes y escalan sin romperse. Desde la base de datos hasta la UI — un solo desarrollador, cero brechas de comunicación.",
    },
    cta: { en: "Let's Talk About Your Project", es: "Hablemos de tu proyecto" },
    ctaSecondary: { en: "See My Work", es: "Ver mi trabajo" },
  },

  // ── SHOWCASE (unused but kept for type safety) ──
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
        {
          title: "Life Insurance Platform",
          type: "Full-Stack Web App",
          problem: "An insurance company managed policies, clients, and reimbursements through spreadsheets — error-prone and unscalable.",
          solution: "Built a full-stack platform with Next.js frontend and NestJS backend. JWT authentication, role-based access, PostgreSQL database, Docker deployment, and CI/CD with Jenkins.",
          result: "80 commits of production code. Complete CRUD for policies, clients, contracts, and reimbursements. Deployed with Docker.",
          tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "JWT"],
          github: "https://github.com/itschrisedu/life_insurance_front",
          image: "/assets/projects/insurance.png",
        },
        {
          title: "GeoRutas — Route Optimizer",
          type: "Geolocation App",
          problem: "Transport companies in Ecuador needed to optimize fuel consumption across multiple routes, but had no digital tools.",
          solution: "React + TypeScript frontend with interactive Leaflet maps and Node.js backend. OSRM routing engine for real-time optimization. Ecuador-specific fuel pricing and elevation analysis.",
          result: "Real-time route optimization with fuel cost estimation. Multi-stop support, responsive design, and geolocation.",
          tags: ["React", "TypeScript", "Node.js", "Leaflet", "OSRM"],
          github: "https://github.com/itschrisedu/GeoRutas_-ptimas",
          image: "/assets/projects/georutas.png",
        },
        {
          title: "BioAcces — Biometric Security",
          type: "Security System",
          problem: "University labs needed access control beyond simple keycards to prevent unauthorized entry.",
          solution: "Python-based biometric system with facial recognition and voice authentication. Django backend with JavaScript frontend for real-time validation.",
          result: "Multi-factor biometric authentication deployed in university lab. Zero unauthorized access incidents.",
          tags: ["Python", "Django", "JavaScript", "OpenCV", "Biometrics"],
          github: "https://github.com/itschrisedu/Bioacces",
          image: "/assets/projects/bioacces.png",
        },
        {
          title: "MoviPass — Mobility Platform",
          type: "Angular Web App",
          problem: "An organization needed a digital system for mobility flow management and user information tracking.",
          solution: "Angular 21 frontend with TypeScript, SCSS styling, and modular component architecture for user-facing mobility workflows.",
          result: "Clean, responsive interface with optimized user flow. Scalable component structure for future expansion.",
          tags: ["Angular", "TypeScript", "SCSS", "RxJS"],
          github: "https://github.com/itschrisedu/movipass-frontend",
          image: "/assets/projects/movipass.png",
        },
      ],
      es: [
        {
          title: "Plataforma de Seguros de Vida",
          type: "App Web Full-Stack",
          problem: "Una aseguradora manejaba pólizas, clientes y reembolsos en hojas de cálculo — propenso a errores e inescalable.",
          solution: "Plataforma full-stack con frontend en Next.js y backend en NestJS. Autenticación JWT, acceso por roles, PostgreSQL, despliegue Docker y CI/CD con Jenkins.",
          result: "80 commits de código en producción. CRUD completo para pólizas, clientes, contratos y reembolsos. Desplegado con Docker.",
          tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "JWT"],
          github: "https://github.com/itschrisedu/life_insurance_front",
          image: "/assets/projects/insurance.png",
        },
        {
          title: "GeoRutas — Optimizador de Rutas",
          type: "App de Geolocalización",
          problem: "Empresas de transporte en Ecuador necesitaban optimizar el consumo de combustible en múltiples rutas, pero no tenían herramientas digitales.",
          solution: "Frontend React + TypeScript con mapas interactivos Leaflet y backend Node.js. Motor de rutas OSRM para optimización en tiempo real. Precios de combustible específicos de Ecuador.",
          result: "Optimización de rutas en tiempo real con estimación de costos de combustible. Soporte multi-parada, diseño responsive y geolocalización.",
          tags: ["React", "TypeScript", "Node.js", "Leaflet", "OSRM"],
          github: "https://github.com/itschrisedu/GeoRutas_-ptimas",
          image: "/assets/projects/georutas.png",
        },
        {
          title: "BioAcces — Seguridad Biométrica",
          type: "Sistema de Seguridad",
          problem: "Los laboratorios universitarios necesitaban control de acceso más allá de tarjetas simples para prevenir entradas no autorizadas.",
          solution: "Sistema biométrico en Python con reconocimiento facial y autenticación por voz. Backend Django con frontend JavaScript para validación en tiempo real.",
          result: "Autenticación biométrica multifactor desplegada en laboratorio universitario. Cero incidentes de acceso no autorizado.",
          tags: ["Python", "Django", "JavaScript", "OpenCV", "Biometrics"],
          github: "https://github.com/itschrisedu/Bioacces",
          image: "/assets/projects/bioacces.png",
        },
        {
          title: "MoviPass — Plataforma de Movilidad",
          type: "App Web Angular",
          problem: "Una organización necesitaba un sistema digital para gestión de flujo de movilidad y seguimiento de información de usuarios.",
          solution: "Frontend Angular 21 con TypeScript, estilos SCSS y arquitectura modular de componentes para flujos de movilidad.",
          result: "Interfaz limpia y responsive con flujo de usuario optimizado. Estructura de componentes escalable para expansión futura.",
          tags: ["Angular", "TypeScript", "SCSS", "RxJS"],
          github: "https://github.com/itschrisedu/movipass-frontend",
          image: "/assets/projects/movipass.png",
        },
      ],
    },
  },

  // ── DIFFERENTIAL ──
  differential: {
    label: { en: "Why Me", es: "Por qué yo" },
    title: { en: "What sets me apart.", es: "Qué me diferencia." },
    items: {
      en: [
        { title: "Results-Driven", desc: "Every line of code is written with business impact in mind. No vanity metrics — only solutions that move the needle." },
        { title: "Full Stack Delivery", desc: "From database to UI. One person, one vision, no gaps in communication. Your project moves faster with fewer misunderstandings." },
        { title: "Strategic Interaction", desc: "3D elements and animations are tools, not decoration. Each interactive element is designed to guide users toward conversion." },
        { title: "Technical Depth", desc: "Clean architecture, tested code, Docker deployments, and CI/CD pipelines — not just a pretty frontend, but production-grade systems." },
      ],
      es: [
        { title: "Enfoque en Resultados", desc: "Cada línea de código se escribe pensando en impacto de negocio. Sin métricas de vanidad — solo soluciones que mueven la aguja." },
        { title: "Entrega Full Stack", desc: "Desde la base de datos hasta la UI. Una persona, una visión, sin brechas de comunicación. Tu proyecto avanza más rápido con menos malentendidos." },
        { title: "Interacción Estratégica", desc: "Elementos 3D y animaciones son herramientas, no decoración. Cada elemento interactivo está diseñado para guiar usuarios hacia la conversión." },
        { title: "Profundidad Técnica", desc: "Arquitectura limpia, código testeado, despliegues Docker y pipelines CI/CD — no solo un frontend bonito, sino sistemas de grado productivo." },
      ],
    },
  },

  // ── TESTIMONIALS ──
  testimonials: {
    label: { en: "Testimonials", es: "Testimonios" },
    title: { en: "What clients say.", es: "Lo que dicen los clientes." },
    items: {
      en: [
        { text: "We worked on an initial version of the site and the result was clear and functional. He focused on making everything load fast and be easy to use. Delivered exactly what we needed at this stage.", author: "Early-stage client", role: "Web Project" },
        { text: "We had a basic page and he helped us reorganize the structure and flow. Now it's clearer for users and easier to maintain.", author: "Small business client", role: "Site Improvement" },
        { text: "He supported us on the technical side of the system. He made sure everything worked correctly and left the project well-structured for future development.", author: "Technical project client", role: "Backend System" },
        { text: "Communication was direct and the work was delivered without complications. No delays, and he adapted to the changes we kept requesting.", author: "Collaborative project client", role: "Web Development" },
      ],
      es: [
        { text: "Trabajamos en una versión inicial de la web y el resultado fue claro y funcional. Se enfocó en que todo cargue rápido y sea fácil de usar. Cumplió con lo que necesitábamos en esta etapa.", author: "Cliente de etapa inicial", role: "Proyecto Web" },
        { text: "Teníamos una página básica y nos ayudó a organizar mejor la estructura y el flujo. Ahora es más clara para los usuarios y más fácil de mantener.", author: "Cliente de pequeño negocio", role: "Mejora de Sitio" },
        { text: "Nos apoyó en la parte técnica del sistema. Se encargó de que todo funcione correctamente y dejó el proyecto bien estructurado para seguir trabajando.", author: "Cliente de proyecto técnico", role: "Sistema Backend" },
        { text: "La comunicación fue directa y el trabajo se entregó sin complicaciones. No hubo retrasos y se adaptó a los cambios que fuimos pidiendo.", author: "Cliente de proyecto colaborativo", role: "Desarrollo Web" },
      ],
    },
  },

  // ── FAQ ──
  faq: {
    label: { en: "FAQ", es: "Preguntas frecuentes" },
    title: { en: "Common questions.", es: "Preguntas comunes." },
    items: {
      en: [
        { q: "How much does a project cost?", a: "It depends on scope and complexity. A landing page starts at $200, a multi-page site from $1,500, and a full web application from $3,000. Every project includes discovery, design, development, and post-launch support. I provide a detailed quote after understanding your specific needs." },
        { q: "How long does a project take?", a: "A landing page with contact form: ~2 weeks. A complete website: 3-5 weeks. A full web application with backend: 6-10 weeks. I deliver in phases so you see real progress every week." },
        { q: "What results can I expect?", a: "A website that loads fast, looks professional on any device, and is designed to make your visitors contact you. I don't promise 'triple your sales' — I promise a technically solid product that works for you." },
        { q: "What's your development process?", a: "Discovery → Design → Development → Testing → Deploy. You get weekly updates and access to a staging environment. No surprises." },
        { q: "Do you offer ongoing support?", a: "Yes. I offer maintenance plans after launch, including bug fixes, updates, performance monitoring, and feature additions. Your site doesn't get abandoned after delivery." },
      ],
      es: [
        { q: "¿Cuánto cuesta un proyecto?", a: "Depende del alcance y complejidad. Una landing page desde $200, un sitio multipágina desde $1,500 y una aplicación web completa desde $3,000. Cada proyecto incluye descubrimiento, diseño, desarrollo y soporte post-lanzamiento. Proporciono un presupuesto detallado después de entender tus necesidades." },
        { q: "¿Cuánto tiempo toma un proyecto?", a: "Landing page con formulario: ~2 semanas. Sitio web completo: 3-5 semanas. Aplicación web con backend: 6-10 semanas. Entrego por fases para que veas avance real cada semana." },
        { q: "¿Qué resultados puedo esperar?", a: "Un sitio web que carga rápido, se ve profesional en cualquier dispositivo y está diseñado para que tus visitantes te contacten. No prometo 'triplicar tus ventas' — prometo un producto técnicamente sólido que trabaja por ti." },
        { q: "¿Cuál es tu proceso de desarrollo?", a: "Descubrimiento → Diseño → Desarrollo → Testing → Deploy. Recibes actualizaciones semanales y acceso a un entorno de staging. Sin sorpresas." },
        { q: "¿Ofreces soporte continuo?", a: "Sí. Ofrezco planes de mantenimiento post-lanzamiento, incluyendo corrección de bugs, actualizaciones, monitoreo de rendimiento y adición de funcionalidades. Tu sitio no queda abandonado después de la entrega." },
      ],
    },
  },

  // ── CONTACT ──
  contact: {
    label: { en: "Contact", es: "Contacto" },
    title: { en: "Let's talk about your project.", es: "Hablemos de tu proyecto." },
    subtitle: {
      en: "If you've made it this far, something caught your attention. Tell me what you need — I'll reply within 24 hours.",
      es: "Si llegaste hasta aquí, algo te llamó la atención. Cuéntame qué necesitas — respondo en 24 horas.",
    },
    name: { en: "Name", es: "Nombre" },
    email: { en: "Email", es: "Email" },
    subject: { en: "Subject", es: "Asunto" },
    message: { en: "Message", es: "Mensaje" },
    budget: { en: "Budget Range", es: "Rango de presupuesto" },
    timeline: { en: "Timeline", es: "Plazo" },
    namePlaceholder: { en: "Your name", es: "Tu nombre" },
    emailPlaceholder: { en: "you@company.com", es: "tu@empresa.com" },
    subjectPlaceholder: { en: "Project inquiry", es: "Consulta de proyecto" },
    messagePlaceholder: { en: "Tell me about your project...", es: "Cuéntame sobre tu proyecto..." },
    budgetOptions: {
      en: ["Select budget", "< $1,000", "$1,000 – $3,000", "$3,000 – $5,000", "$5,000+", "Not sure yet"],
      es: ["Seleccionar presupuesto", "< $1,000", "$1,000 – $3,000", "$3,000 – $5,000", "$5,000+", "Aún no sé"],
    },
    timelineOptions: {
      en: ["Select timeline", "< 2 weeks", "2 – 4 weeks", "1 – 2 months", "2 – 4 months", "Not sure yet"],
      es: ["Seleccionar plazo", "< 2 semanas", "2 – 4 semanas", "1 – 2 meses", "2 – 4 meses", "Aún no sé"],
    },
    cta: { en: "Send Project Brief", es: "Enviar brief del proyecto" },
    ctaNav: { en: "Start a Project", es: "Iniciar proyecto" },
    sending: { en: "Sending...", es: "Enviando..." },
    sent: { en: "Message sent ✓", es: "Mensaje enviado ✓" },
    error: { en: "Error sending. Try again.", es: "Error al enviar. Intenta de nuevo." },
    location: { en: "Ecuador — Available remotely worldwide", es: "Ecuador — Disponible remoto a nivel mundial" },
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
