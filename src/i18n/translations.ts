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
          caseStudy: {
            overview: "A mid-size insurance company in Ecuador was drowning in spreadsheets. Policy management, client tracking, and reimbursement processing were all manual — leading to errors, lost data, and frustrated staff. They needed a centralized digital platform to run their entire operation.",
            challenge: "The company had zero digital infrastructure. Every policy, every client record, and every reimbursement claim lived in Excel files scattered across employee computers. When an agent needed to check a client's history, they had to search through dozens of files manually. Reimbursement approvals took days because the paperwork had to pass through multiple hands physically. The risk of human error was enormous — and they were losing money because of it.",
            approach: [
              "Discovery & Architecture — Mapped every business process (policy creation, client onboarding, contract management, reimbursement flow) and designed a relational database schema in PostgreSQL to model all relationships.",
              "Backend Development — Built a robust REST API with NestJS, implementing JWT authentication with role-based access control (admin, agent, auditor). Every endpoint was protected and validated.",
              "Frontend Development — Created an intuitive dashboard with Next.js featuring real-time data tables, advanced filters, and form validation. Designed for non-technical users who previously only knew Excel.",
              "DevOps & Deployment — Containerized the entire stack with Docker, set up CI/CD pipelines with Jenkins, and deployed to a production server with automated health checks."
            ],
            techDecisions: "Next.js was chosen for its SSR capabilities and SEO benefits. NestJS provided a scalable, TypeScript-first backend architecture. PostgreSQL handled complex relational data (policies → clients → contracts → reimbursements). Docker ensured consistent environments from development to production.",
            results: [
              { label: "Production Commits", value: "80+" },
              { label: "CRUD Modules", value: "4" },
              { label: "Processing Time Reduction", value: "70%" },
              { label: "Deployment Method", value: "Docker" }
            ],
            lessons: "This project reinforced the importance of understanding the client's actual workflow before writing any code. The initial discovery phase — sitting with agents and watching them work — revealed edge cases that would have been impossible to anticipate from a requirements document alone."
          },
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
          caseStudy: {
            overview: "Transport companies across Ecuador were burning money on inefficient routes. Without digital tools, drivers relied on intuition and outdated paper maps to navigate between cities — wasting fuel, time, and resources on every trip.",
            challenge: "Ecuador's geography is brutal for logistics: coastal lowlands, Andean highlands over 4,000m, and Amazon jungle — all within a few hundred kilometers. Fuel prices vary by region, elevation dramatically affects consumption, and road conditions change constantly. Existing routing tools like Google Maps don't account for Ecuador-specific fuel pricing or elevation-based consumption models.",
            approach: [
              "Research & Data Modeling — Studied Ecuador's fuel pricing structure (subsidized vs. commercial rates by region) and built consumption models that factor in elevation changes, vehicle type, and cargo weight.",
              "Map Integration — Implemented interactive Leaflet maps with custom tile layers showing elevation data. Users can add unlimited stops by clicking on the map or searching addresses.",
              "Routing Engine — Integrated OSRM (Open Source Routing Machine) for real-time route calculation with turn-by-turn directions, distance, and estimated time.",
              "Cost Analysis — Built a fuel cost calculator that combines route distance, elevation profile, vehicle specifications, and regional fuel prices to give accurate cost estimates."
            ],
            techDecisions: "React + TypeScript provided type-safe component development. Leaflet was chosen over Google Maps for its open-source flexibility and custom layer support. OSRM runs on our own server for zero API costs and full control. Node.js backend handles geocoding and fuel price data.",
            results: [
              { label: "Route Optimization", value: "Real-time" },
              { label: "Multi-stop Support", value: "Unlimited" },
              { label: "Fuel Cost Accuracy", value: "±5%" },
              { label: "Response Time", value: "<2s" }
            ],
            lessons: "Building for a specific market (Ecuador) with unique constraints (elevation, subsidized fuel) created a product that generic tools couldn't match. Domain expertise became the competitive advantage — not just technical skills."
          },
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
          caseStudy: {
            overview: "University research labs contain sensitive equipment and data worth millions. A single unauthorized entry could compromise months of research. The existing keycard system was inadequate — cards could be shared, lost, or cloned. The university needed a multi-factor biometric solution.",
            challenge: "Traditional access control systems rely on something you have (a card) or something you know (a PIN). Both can be compromised. The university required something you are — biometric verification that's nearly impossible to fake. The system needed to work in real-time, handle varying lighting conditions for facial recognition, and process voice authentication in noisy hallways.",
            approach: [
              "Biometric Research — Evaluated multiple biometric approaches (fingerprint, iris, facial, voice) and selected facial recognition + voice authentication as the optimal dual-factor combination for the lab environment.",
              "Computer Vision Pipeline — Built a facial recognition system using OpenCV with Haar cascades for face detection and LBPH (Local Binary Patterns Histograms) for recognition. Trained on lab personnel with multiple angles and lighting conditions.",
              "Voice Authentication — Implemented voice-print analysis using frequency spectrum comparison. Each authorized user records voice samples during enrollment, which are stored as encrypted spectrograms.",
              "Dashboard & Logging — Created a Django-powered admin dashboard with JavaScript frontend showing real-time access logs, failed attempt alerts, and user enrollment management."
            ],
            techDecisions: "Python was the natural choice for computer vision and ML workloads. OpenCV provided battle-tested face detection algorithms. Django offered rapid backend development with built-in admin capabilities. SQLite was sufficient for the single-lab deployment scope.",
            results: [
              { label: "Unauthorized Access", value: "0" },
              { label: "Recognition Accuracy", value: "98.5%" },
              { label: "Auth Factors", value: "2" },
              { label: "Processing Time", value: "<3s" }
            ],
            lessons: "Security systems must be both secure AND convenient. If authentication takes too long, users will prop doors open. The <3 second processing time was a hard requirement from the university — speed was as important as accuracy."
          },
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
          caseStudy: {
            overview: "A government-adjacent organization needed to digitize their mobility permit system. Citizens were spending hours in physical queues to request transit passes, and staff processed everything on paper forms. The goal was a modern web platform that streamlined the entire workflow.",
            challenge: "The existing paper-based system was slow, opaque, and frustrating for everyone involved. Citizens had no visibility into their application status, staff couldn't track workload, and management had zero data for decision-making. The new system needed to handle hundreds of concurrent users while remaining intuitive enough for non-technical government employees.",
            approach: [
              "UX Research — Mapped the citizen journey from application to approval, identifying bottlenecks and pain points. Designed user flows that reduced the number of steps by 60%.",
              "Component Architecture — Built a modular Angular architecture with lazy-loaded feature modules, shared UI components, and a centralized state management pattern using RxJS services.",
              "Responsive Design — Implemented a mobile-first design with SCSS using BEM methodology. The interface works seamlessly on phones (for citizens) and desktop (for staff).",
              "Performance Optimization — Implemented virtual scrolling for large lists, aggressive code splitting, and preloading strategies to keep the app fast even on low-end devices."
            ],
            techDecisions: "Angular was selected for its enterprise-grade architecture, built-in dependency injection, and strong typing with TypeScript. RxJS handled complex async workflows like real-time status updates. SCSS with BEM provided maintainable, scalable styling.",
            results: [
              { label: "User Flow Steps", value: "-60%" },
              { label: "Page Load Time", value: "<1.5s" },
              { label: "Mobile Responsive", value: "100%" },
              { label: "Component Reuse", value: "85%" }
            ],
            lessons: "Government projects have unique constraints: accessibility compliance, multi-browser support, and the need for extreme simplicity. Building for the least technical user — not the most technical — forced better design decisions across the board."
          },
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
          caseStudy: {
            overview: "Una aseguradora mediana en Ecuador se ahogaba en hojas de cálculo. La gestión de pólizas, seguimiento de clientes y procesamiento de reembolsos eran completamente manuales — generando errores, datos perdidos y personal frustrado. Necesitaban una plataforma digital centralizada para toda su operación.",
            challenge: "La empresa tenía cero infraestructura digital. Cada póliza, cada registro de cliente y cada reclamo de reembolso vivía en archivos Excel dispersos en las computadoras de los empleados. Cuando un agente necesitaba revisar el historial de un cliente, tenía que buscar manualmente en docenas de archivos. Las aprobaciones de reembolsos tardaban días porque el papeleo debía pasar físicamente por múltiples manos. El riesgo de error humano era enorme — y estaban perdiendo dinero por eso.",
            approach: [
              "Descubrimiento y Arquitectura — Mapeé cada proceso de negocio (creación de pólizas, onboarding de clientes, gestión de contratos, flujo de reembolsos) y diseñé un esquema de base de datos relacional en PostgreSQL.",
              "Desarrollo Backend — Construí una API REST robusta con NestJS, implementando autenticación JWT con control de acceso por roles (admin, agente, auditor). Cada endpoint protegido y validado.",
              "Desarrollo Frontend — Creé un dashboard intuitivo con Next.js con tablas de datos en tiempo real, filtros avanzados y validación de formularios. Diseñado para usuarios no técnicos que antes solo conocían Excel.",
              "DevOps y Despliegue — Contenericé todo el stack con Docker, configuré pipelines CI/CD con Jenkins y desplegué en servidor de producción con health checks automáticos."
            ],
            techDecisions: "Next.js fue elegido por sus capacidades de SSR y beneficios SEO. NestJS proporcionó una arquitectura backend escalable con TypeScript. PostgreSQL manejó datos relacionales complejos (pólizas → clientes → contratos → reembolsos). Docker aseguró ambientes consistentes desde desarrollo hasta producción.",
            results: [
              { label: "Commits en Producción", value: "80+" },
              { label: "Módulos CRUD", value: "4" },
              { label: "Reducción Tiempo Proceso", value: "70%" },
              { label: "Método de Despliegue", value: "Docker" }
            ],
            lessons: "Este proyecto reforzó la importancia de entender el flujo de trabajo real del cliente antes de escribir una sola línea de código. La fase de descubrimiento inicial — sentarme con los agentes y verlos trabajar — reveló casos edge que habrían sido imposibles de anticipar desde un documento de requisitos."
          },
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
          caseStudy: {
            overview: "Las empresas de transporte en Ecuador estaban quemando dinero en rutas ineficientes. Sin herramientas digitales, los conductores se guiaban por intuición y mapas de papel desactualizados — desperdiciando combustible, tiempo y recursos en cada viaje.",
            challenge: "La geografía de Ecuador es brutal para la logística: tierras bajas costeras, altiplanos andinos a más de 4,000m y selva amazónica — todo en unos pocos cientos de kilómetros. Los precios del combustible varían por región, la elevación afecta dramáticamente el consumo, y las condiciones de las carreteras cambian constantemente. Herramientas existentes como Google Maps no consideran los precios de combustible de Ecuador ni modelos de consumo basados en elevación.",
            approach: [
              "Investigación y Modelado de Datos — Estudié la estructura de precios de combustible de Ecuador (subsidiados vs. comerciales por región) y construí modelos de consumo que consideran cambios de elevación, tipo de vehículo y peso de carga.",
              "Integración de Mapas — Implementé mapas interactivos Leaflet con capas de tiles personalizadas mostrando datos de elevación. Los usuarios pueden agregar paradas ilimitadas haciendo clic en el mapa o buscando direcciones.",
              "Motor de Rutas — Integré OSRM (Open Source Routing Machine) para cálculo de rutas en tiempo real con direcciones giro a giro, distancia y tiempo estimado.",
              "Análisis de Costos — Construí una calculadora de costos de combustible que combina distancia de ruta, perfil de elevación, especificaciones del vehículo y precios regionales de combustible."
            ],
            techDecisions: "React + TypeScript proporcionaron desarrollo de componentes con tipado seguro. Leaflet fue elegido sobre Google Maps por su flexibilidad open-source y soporte de capas personalizadas. OSRM corre en nuestro propio servidor para cero costos de API. Backend Node.js maneja geocoding y datos de precios de combustible.",
            results: [
              { label: "Optimización de Rutas", value: "Tiempo real" },
              { label: "Soporte Multi-parada", value: "Ilimitado" },
              { label: "Precisión Costo Combustible", value: "±5%" },
              { label: "Tiempo de Respuesta", value: "<2s" }
            ],
            lessons: "Construir para un mercado específico (Ecuador) con restricciones únicas (elevación, combustible subsidiado) creó un producto que herramientas genéricas no podían igualar. La experiencia de dominio se convirtió en la ventaja competitiva — no solo las habilidades técnicas."
          },
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
          caseStudy: {
            overview: "Los laboratorios de investigación universitarios contienen equipos y datos sensibles que valen millones. Una sola entrada no autorizada podría comprometer meses de investigación. El sistema de tarjetas existente era inadecuado — las tarjetas podían compartirse, perderse o clonarse. La universidad necesitaba una solución biométrica multifactor.",
            challenge: "Los sistemas de control de acceso tradicionales dependen de algo que tienes (una tarjeta) o algo que sabes (un PIN). Ambos pueden comprometerse. La universidad requería algo que eres — verificación biométrica que es casi imposible de falsificar. El sistema debía funcionar en tiempo real, manejar condiciones de iluminación variable para reconocimiento facial, y procesar autenticación de voz en pasillos ruidosos.",
            approach: [
              "Investigación Biométrica — Evalué múltiples enfoques biométricos (huella, iris, facial, voz) y seleccioné reconocimiento facial + autenticación de voz como la combinación dual óptima para el ambiente del laboratorio.",
              "Pipeline de Visión por Computadora — Construí un sistema de reconocimiento facial usando OpenCV con cascadas Haar para detección y LBPH para reconocimiento. Entrenado con personal del laboratorio en múltiples ángulos y condiciones de iluminación.",
              "Autenticación de Voz — Implementé análisis de huella vocal usando comparación de espectro de frecuencias. Cada usuario autorizado graba muestras de voz durante el registro, almacenadas como espectrogramas encriptados.",
              "Dashboard y Registro — Creé un panel de administración con Django y frontend JavaScript mostrando logs de acceso en tiempo real, alertas de intentos fallidos y gestión de usuarios."
            ],
            techDecisions: "Python fue la elección natural para cargas de trabajo de visión por computadora y ML. OpenCV proporcionó algoritmos de detección facial probados en batalla. Django ofreció desarrollo backend rápido con capacidades de admin integradas. SQLite fue suficiente para el alcance de despliegue de un solo laboratorio.",
            results: [
              { label: "Accesos No Autorizados", value: "0" },
              { label: "Precisión Reconocimiento", value: "98.5%" },
              { label: "Factores de Auth", value: "2" },
              { label: "Tiempo de Proceso", value: "<3s" }
            ],
            lessons: "Los sistemas de seguridad deben ser seguros Y convenientes. Si la autenticación tarda demasiado, los usuarios dejarán las puertas abiertas. El tiempo de procesamiento de <3 segundos fue un requisito duro de la universidad — la velocidad era tan importante como la precisión."
          },
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
          caseStudy: {
            overview: "Una organización adyacente al gobierno necesitaba digitalizar su sistema de permisos de movilidad. Los ciudadanos pasaban horas en filas físicas para solicitar pases de tránsito, y el personal procesaba todo en formularios de papel. El objetivo era una plataforma web moderna que agilizara todo el flujo.",
            challenge: "El sistema basado en papel era lento, opaco y frustrante para todos. Los ciudadanos no tenían visibilidad del estado de su solicitud, el personal no podía rastrear la carga de trabajo, y la gerencia tenía cero datos para tomar decisiones. El nuevo sistema necesitaba manejar cientos de usuarios concurrentes siendo intuitivo para empleados gubernamentales no técnicos.",
            approach: [
              "Investigación UX — Mapeé el viaje del ciudadano desde la solicitud hasta la aprobación, identificando cuellos de botella. Diseñé flujos de usuario que redujeron los pasos en un 60%.",
              "Arquitectura de Componentes — Construí una arquitectura Angular modular con módulos de carga lazy, componentes UI compartidos y gestión de estado centralizada usando servicios RxJS.",
              "Diseño Responsive — Implementé un diseño mobile-first con SCSS usando metodología BEM. La interfaz funciona perfectamente en celulares (para ciudadanos) y escritorio (para personal).",
              "Optimización de Rendimiento — Implementé scroll virtual para listas grandes, code splitting agresivo y estrategias de preloading para mantener la app rápida incluso en dispositivos de gama baja."
            ],
            techDecisions: "Angular fue seleccionado por su arquitectura enterprise, inyección de dependencias integrada y tipado fuerte con TypeScript. RxJS manejó flujos async complejos como actualizaciones de estado en tiempo real. SCSS con BEM proporcionó estilos mantenibles y escalables.",
            results: [
              { label: "Pasos del Flujo", value: "-60%" },
              { label: "Tiempo de Carga", value: "<1.5s" },
              { label: "Mobile Responsive", value: "100%" },
              { label: "Reutilización Componentes", value: "85%" }
            ],
            lessons: "Los proyectos gubernamentales tienen restricciones únicas: cumplimiento de accesibilidad, soporte multi-navegador y necesidad de simplicidad extrema. Construir para el usuario menos técnico — no el más técnico — forzó mejores decisiones de diseño en general."
          },
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
      en: "Let's make your idea work. Tell me about your project and let's figure out how I can help. I'll get back to you in less than 24 hours.",
      es: "Hagamos que tu idea funcione. Cuéntame sobre tu proyecto y descubramos cómo puedo ayudarte. Te responderé en menos de 24 horas.",
    },
    name: { en: "Name", es: "Nombre" },
    email: { en: "Email", es: "Email" },
    phone: { en: "Phone", es: "Teléfono" },
    phoneCodePlaceholder: { en: "Code", es: "Cód." },
    phonePlaceholder: { en: "099 999 9999", es: "099 999 9999" },
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
