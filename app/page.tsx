"use client";

import { useEffect, useState } from "react";

type Lang = "es" | "en";

const t = {
  es: {
    nav: { projects: "Proyectos", how: "Cómo trabajo", timeline: "Trayectoria", skills: "Habilidades", contact: "Contacto" },
    heroEyebrow: "Ingeniería en Informática · Duoc UC · Chile",
    heroTitle: "Construyo productos de principio a fin: del código a la conversación con el cliente.",
    heroText:
      "Soy Hyrum Bustos, estudiante de último año de Ingeniería en Informática. Desarrollo aplicaciones web full-stack y proyectos de machine learning, con foco en que la tecnología se entienda y genere valor para quien la usa.",
    heroCtaProjects: "Ver proyectos",
    heroCtaCv: "Descargar CV",
    cvEs: "CV en español (PDF)",
    cvEn: "CV in English (PDF)",
    projectsTitle: "Proyectos destacados",
    projectsIntro:
      "Tres proyectos reales, en producción, contados como los pienso: qué problema había, qué decidí y qué resultado obtuve.",
    problem: "Problema",
    decision: "Solución",
    result: "Resultado",
    visit: "Ver proyecto",
    projects: [
      {
        name: "PaceUp",
        tag: "Producto propio · En producción",
        stack: "Next.js · TypeScript · Tailwind CSS",
        url: "https://paceupacad.vercel.app/",
        problem:
          "Me estaba preparando para rendir certificaciones y no tenía un espacio organizado que registrara mi avance y me dijera qué estudiar cada día para no atrasarme.",
        decision:
          "Diseñé y construí una aplicación de productividad orientada a preparación de certificaciones: planes de estudio por curso, seguimiento de progreso, timer Pomodoro y cuenta regresiva a cada examen. El mayor desafío técnico fue el diseño e implementación del calendario interactivo con tareas, eventos y agenda diaria.",
        result:
          "Aplicación local-first publicada en Vercel con CI/CD, que uso a diario en mi propia preparación y que ha sido revisada y evaluada por terceros. Interfaz bilingüe español/inglés.",
      },
      {
        name: "Risk Office",
        tag: "Gestión de riesgos · Proyecto académico llevado a producto",
        stack: "Next.js · Tailwind CSS · Visualización de datos",
        url: "https://web-app-dashboards.vercel.app/",
        problem:
          "Durante un semestre completo analizamos los riesgos del Sistema de Gestión de Biblioteca (SGB): registro en Excel con categorías, etapas del proyecto, ciclo de vida, fuente, impacto y estimación PERT. Para la evaluación final debíamos presentar el proyecto a la profesora como si fuera un cliente real — y una planilla no comunica.",
        decision:
          "Por iniciativa propia construí una plataforma web que toma el archivo Excel del registro de riesgos y lo transforma en KPIs, matriz de riesgo, gráficos de concentración, estrategias de respuesta y sustento económico PERT, todo pensado para una audiencia no técnica.",
        result:
          "La presentación pasó de una planilla a una experiencia de cliente. Mi mayor aprendizaje: la visualización y presentación de los datos es decisiva para la toma de decisiones y para que una organización entienda el estado real de su proyecto.",
      },
      {
        name: "RainCast Australia",
        tag: "Machine Learning · Panel del cliente",
        stack: "Python · Scikit-learn · CRISP-DM · Dashboard web",
        url: "https://dashboardventaprediccionlluvia.vercel.app/",
        problem:
          "Un modelo de ML que predice si lloverá mañana no sirve de nada si el cliente no lo entiende. El cliente no necesita conocer el código: quiere saber en qué le beneficia y qué puede hacer con él.",
        decision:
          "Entrené y comparé 5 modelos supervisados sobre 142.193 registros diarios de 49 ciudades australianas (CRISP-DM: limpieza, imputación, encoding, escalado). La elección del modelo no se tomó solo por accuracy: comparé múltiples métricas (F1, AUC, precision, recall) y el Árbol de Decisión resultó el mejor balance, con la ventaja de ser 100% explicable en reglas legibles. Luego construí un panel en lenguaje de negocio con simulador interactivo.",
        result:
          "83,5% de exactitud validada sobre 12.707 días no vistos, y un entregable que permite al cliente vivir una experiencia previa con el producto final y entender el proyecto por adelantado, incluyendo un roadmap de mejora.",
      },
    ],
    howTitle: "Cómo trabajo",
    how: [
      {
        title: "Producto completo, no solo código",
        text: "Me hago cargo del ciclo entero: entender el problema, construir la solución, publicarla y presentarla de forma que cualquier persona — técnica o no — la entienda.",
      },
      {
        title: "IA como herramienta profesional",
        text: "Desarrollo apoyándome en herramientas de IA como Claude para construir más rápido y con mejor calidad, manteniendo siempre el criterio, el diseño y las decisiones técnicas de mi lado. Creo que saber usar bien estas herramientas es una habilidad clave del desarrollador actual.",
      },
      {
        title: "Metodología y comunicación",
        text: "Trabajo con Scrum en equipo, CRISP-DM en proyectos de datos y frameworks de gestión de riesgos (PMBOK, PERT). Me interesa especialmente el puente entre el equipo técnico y el cliente.",
      },
    ],
    timelineTitle: "Trayectoria",
    timeline: [
      {
        period: "Educación escolar",
        title: "Colegio Liahona, El Belloto",
        text: "Educación básica y media.",
      },
      {
        period: "Inicio de estudios superiores",
        title: "Ingeniería en Informática · Duoc UC, Viña del Mar",
        text: "Comencé mi formación en desarrollo de software, bases de datos y fundamentos de la ingeniería informática.",
      },
      {
        period: "2024 – 2026",
        title: "Misionero de tiempo completo · La Iglesia de Jesucristo de los Santos de los Últimos Días",
        text: "Pausé mis estudios para servir una misión de tiempo completo, donde desarrollé comunicación, trabajo en equipo y liderazgo, adaptándome a nuevos ambientes y desafíos.",
      },
      {
        period: "Graduación 2026",
        title: "Retorno a Ingeniería en Informática · Duoc UC",
        text: "Retomé la carrera en su etapa final: big data, minería de datos, deep learning y gestión de riesgos, con graduación esperada en 2026.",
      },
    ],
    skillsTitle: "Habilidades",
    skills: [
      { group: "Frontend", items: "React · Next.js · TypeScript · JavaScript · HTML5 · CSS3 · Tailwind CSS · Bootstrap · diseño responsivo" },
      { group: "Backend y APIs", items: "Node.js · JavaScript/TypeScript · diseño de APIs RESTful · autenticación de sistemas" },
      { group: "Bases de datos", items: "Oracle SQL · MySQL · Firebase (Firestore, Authentication) · consultas SQL complejas · JOINs · subconsultas" },
      { group: "Ciencia de Datos y Machine Learning", items: "Python · NumPy · Pandas · TensorFlow · Scikit-learn · arquitecturas MLP, CNN y RNN · procesamiento de datasets · métricas de evaluación de modelos" },
      { group: "Minería de Datos", items: "Metodología CRISP-DM · limpieza de datos · SVM · árboles de decisión · técnicas de clustering" },
      { group: "Big Data", items: "Laboratorios prácticos con Google Cloud Platform: Cloud Storage, BigQuery y Data Studio" },
      { group: "Cloud y DevOps", items: "Firebase · Vercel · Google Cloud Platform (Cloud Storage, BigQuery, Data Studio) · Docker · Git/GitHub · CI/CD" },
      { group: "Gestión de Riesgos", items: "Framework PMBOK · estimación PERT · identificación de riesgos · documentación de estrategias de mitigación" },
      { group: "Otras habilidades", items: "Java (POO) · Agile/Scrum · Cisco Networking: Introducción a la Ciberseguridad y Fundamentos de Redes" },
    ],
    langsTitle: "Idiomas",
    langs: "Español nativo · Inglés intermedio–avanzado",
    contactTitle: "Hablemos",
    contactText:
      "Estoy abierto a oportunidades de desarrollo full-stack y proyectos de datos. La forma más rápida de contactarme es por correo o LinkedIn.",
    footer: "Diseñado y construido por Hyrum Bustos · Next.js + Tailwind CSS, desplegado en Vercel",
  },
  en: {
    nav: { projects: "Projects", how: "How I work", timeline: "Journey", skills: "Skills", contact: "Contact" },
    heroEyebrow: "Computer Science Engineering · Duoc UC · Chile",
    heroTitle: "I build products end to end: from the code to the client conversation.",
    heroText:
      "I'm Hyrum Bustos, a final-year Computer Science Engineering student. I build full-stack web applications and machine learning projects, focused on making technology understandable and valuable for the people who use it.",
    heroCtaProjects: "View projects",
    heroCtaCv: "Download CV",
    cvEs: "CV in Spanish (PDF)",
    cvEn: "Resume in English (PDF)",
    projectsTitle: "Featured projects",
    projectsIntro:
      "Three real projects, live in production, told the way I think about them: what the problem was, what I decided, and what came out of it.",
    problem: "Problem",
    decision: "Solution",
    result: "Outcome",
    visit: "Visit project",
    projects: [
      {
        name: "PaceUp",
        tag: "Personal product · In production",
        stack: "Next.js · TypeScript · Tailwind CSS",
        url: "https://paceupacad.vercel.app/",
        problem:
          "I was preparing for certifications and had no organized space to log my progress and tell me exactly what to study each day to stay on track.",
        decision:
          "I designed and built a productivity app focused on certification prep: course-aware study plans, progress tracking, a Pomodoro timer and exam countdowns. The hardest technical challenge was designing and implementing the interactive calendar with tasks, events and a daily agenda.",
        result:
          "A local-first app deployed on Vercel with CI/CD, which I use daily in my own prep and which has been reviewed and evaluated by others. Bilingual Spanish/English interface.",
      },
      {
        name: "Risk Office",
        tag: "Risk management · Academic project turned product",
        stack: "Next.js · Tailwind CSS · Data visualization",
        url: "https://web-app-dashboards.vercel.app/",
        problem:
          "Over a full semester we analyzed the risks of a Library Management System (SGB): an Excel register with categories, project stages, lifecycle, source, impact and PERT estimation. For the final evaluation we had to present the project to our professor as if she were a real client — and a spreadsheet doesn't communicate.",
        decision:
          "On my own initiative I built a web platform that ingests the risk register Excel file and turns it into KPIs, a risk matrix, concentration charts, response strategies and PERT-based cost justification, all designed for a non-technical audience.",
        result:
          "The presentation went from a spreadsheet to a client experience. My biggest takeaway: data visualization and presentation are decisive for decision-making and for an organization to truly understand the state of its project.",
      },
      {
        name: "RainCast Australia",
        tag: "Machine Learning · Client-facing dashboard",
        stack: "Python · Scikit-learn · CRISP-DM · Web dashboard",
        url: "https://dashboardventaprediccionlluvia.vercel.app/",
        problem:
          "An ML model that predicts tomorrow's rain is useless if the client can't understand it. The client doesn't need to see the code: they want to know how it benefits them and what they can do with it.",
        decision:
          "I trained and compared 5 supervised models on 142,193 daily records from 49 Australian cities (CRISP-DM: cleaning, imputation, encoding, scaling). The model wasn't chosen on accuracy alone: I compared multiple metrics (F1, AUC, precision, recall) and the Decision Tree offered the best balance — with the added advantage of being 100% explainable in readable rules. I then built a business-language dashboard with an interactive simulator.",
        result:
          "83.5% validated accuracy on 12,707 unseen days, and a deliverable that lets the client experience the final product in advance and clearly understand the project, including an improvement roadmap.",
      },
    ],
    howTitle: "How I work",
    how: [
      {
        title: "Whole product, not just code",
        text: "I take ownership of the full cycle: understanding the problem, building the solution, shipping it, and presenting it so anyone — technical or not — can understand it.",
      },
      {
        title: "AI as a professional tool",
        text: "I build with AI tools like Claude to move faster and with higher quality, while keeping the judgment, design and technical decisions on my side. I believe knowing how to use these tools well is a core skill for today's developer.",
      },
      {
        title: "Method and communication",
        text: "I work with Scrum in teams, CRISP-DM in data projects, and risk management frameworks (PMBOK, PERT). I'm especially interested in the bridge between the technical team and the client.",
      },
    ],
    timelineTitle: "Journey",
    timeline: [
      {
        period: "School education",
        title: "Colegio Liahona, El Belloto",
        text: "Primary and secondary education.",
      },
      {
        period: "Start of higher education",
        title: "Computer Science Engineering · Duoc UC, Viña del Mar",
        text: "Began my training in software development, databases and computer engineering fundamentals.",
      },
      {
        period: "2024 – 2026",
        title: "Full-time missionary · The Church of Jesus Christ of Latter-day Saints",
        text: "Paused my studies to serve a full-time mission, where I developed communication, teamwork and leadership skills, adapting to new environments and challenges.",
      },
      {
        period: "Graduating 2026",
        title: "Return to Computer Science Engineering · Duoc UC",
        text: "Resumed the program in its final stage: big data, data mining, deep learning and risk management, with expected graduation in 2026.",
      },
    ],
    skillsTitle: "Skills",
    skills: [
      { group: "Frontend", items: "React · Next.js · TypeScript · JavaScript · HTML5 · CSS3 · Tailwind CSS · Bootstrap · responsive design" },
      { group: "Backend & APIs", items: "Node.js · JavaScript/TypeScript · RESTful API design · authentication systems" },
      { group: "Databases", items: "Oracle SQL · MySQL · Firebase (Firestore, Authentication) · complex SQL queries · JOINs · subqueries" },
      { group: "Data Science & Machine Learning", items: "Python · NumPy · Pandas · TensorFlow · Scikit-learn · MLP, CNN and RNN architectures · dataset processing · model evaluation metrics" },
      { group: "Data Mining", items: "CRISP-DM methodology · data cleaning · SVM · decision trees · clustering techniques" },
      { group: "Big Data", items: "Hands-on labs with Google Cloud Platform: Cloud Storage, BigQuery and Data Studio" },
      { group: "Cloud & DevOps", items: "Firebase · Vercel · Google Cloud Platform (Cloud Storage, BigQuery, Data Studio) · Docker · Git/GitHub · CI/CD" },
      { group: "Risk Management", items: "PMBOK framework · PERT estimation · risk identification · mitigation strategy documentation" },
      { group: "Other skills", items: "Java (OOP) · Agile/Scrum · Cisco Networking: Introduction to Cybersecurity and Networking Fundamentals" },
    ],
    langsTitle: "Languages",
    langs: "Native Spanish · Intermediate–advanced English",
    contactTitle: "Let's talk",
    contactText:
      "I'm open to full-stack development opportunities and data projects. The fastest way to reach me is by email or LinkedIn.",
    footer: "Designed and built by Hyrum Bustos · Next.js + Tailwind CSS, deployed on Vercel",
  },
};

function useReveal() {
  useEffect(() => {
    // El contenido es visible por defecto (ver globals.css); esto solo
    // agrega una animación sutil de entrada la primera vez que aparece.
    const els = document.querySelectorAll(".reveal:not(.animate-in)");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("es");
  const s = t[lang];
  useReveal();

  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-lg font-semibold text-ink">
            Hyrum Bustos
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#projects" className="hover:text-accent">{s.nav.projects}</a>
            <a href="#how" className="hover:text-accent">{s.nav.how}</a>
            <a href="#timeline" className="hover:text-accent">{s.nav.timeline}</a>
            <a href="#skills" className="hover:text-accent">{s.nav.skills}</a>
            <a href="#contact" className="hover:text-accent">{s.nav.contact}</a>
          </nav>
          <div className="flex overflow-hidden rounded-full border border-line text-xs font-medium">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  lang === l ? "bg-ink text-white" : "bg-white text-body hover:bg-accentSoft"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-20 md:pt-28">
        <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {s.heroEyebrow}
        </p>
        <h1 className="reveal max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          {s.heroTitle}
        </h1>
        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed">{s.heroText}</p>
        <div className="reveal mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink"
          >
            {s.heroCtaProjects}
          </a>
          <a
            href={lang === "es" ? "/cv/CV_Hyrum_Bustos_ES.pdf" : "/cv/CV_Hyrum_Bustos_EN.pdf"}
            download
            className="rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {s.heroCtaCv}
          </a>
          <div className="flex gap-4 pl-1 text-sm">
            <a className="underline decoration-line underline-offset-4 hover:text-accent" href="https://github.com/HyrumBustosFernandez" target="_blank" rel="noreferrer">GitHub</a>
            <a className="underline decoration-line underline-offset-4 hover:text-accent" href="https://www.linkedin.com/in/hyrum-bustos-6a102727b/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-line bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="reveal font-display text-2xl font-semibold text-ink md:text-3xl">{s.projectsTitle}</h2>
          <p className="reveal mt-3 max-w-2xl">{s.projectsIntro}</p>
          <div className="mt-12 space-y-12">
            {s.projects.map((p) => (
              <article key={p.name} className="reveal rounded-2xl border border-line bg-paper p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{p.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">{p.tag}</p>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.visit} ↗
                  </a>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {[
                    [s.problem, p.problem],
                    [s.decision, p.decision],
                    [s.result, p.result],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink">{label}</p>
                      <p className="mt-2 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-line pt-4 text-xs text-body/70">{p.stack}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section id="how" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="reveal font-display text-2xl font-semibold text-ink md:text-3xl">{s.howTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {s.how.map((h) => (
              <div key={h.title} className="reveal rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-base font-semibold text-ink">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="border-t border-line bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="reveal font-display text-2xl font-semibold text-ink md:text-3xl">{s.timelineTitle}</h2>
          <ol className="mt-10 space-y-0 border-l-2 border-accentSoft">
            {s.timeline.map((item) => (
              <li key={item.title} className="reveal relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white" />
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{item.period}</p>
                <h3 className="mt-1 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="reveal font-display text-2xl font-semibold text-ink md:text-3xl">{s.skillsTitle}</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {s.skills.map((g) => (
              <div key={g.group} className="reveal">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink">{g.group}</h3>
                <p className="mt-2 text-sm leading-relaxed">{g.items}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink">{s.langsTitle}: </span>
            {s.langs}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line bg-ink text-white">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="reveal font-display text-2xl font-semibold md:text-3xl">{s.contactTitle}</h2>
          <p className="reveal mt-3 max-w-2xl text-white/80">{s.contactText}</p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href="mailto:hyrum.bustos@gmail.com" className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90">
              hyrum.bustos@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/hyrum-bustos-6a102727b/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10">
              LinkedIn
            </a>
            <a href="https://github.com/HyrumBustosFernandez" target="_blank" rel="noreferrer" className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10">
              GitHub
            </a>
          </div>
          <div className="reveal mt-6 flex flex-wrap gap-4 text-sm text-white/70">
            <a href="/cv/CV_Hyrum_Bustos_ES.pdf" download className="underline underline-offset-4 hover:text-white">{s.cvEs}</a>
            <a href="/cv/CV_Hyrum_Bustos_EN.pdf" download className="underline underline-offset-4 hover:text-white">{s.cvEn}</a>
          </div>
          <p className="mt-14 border-t border-white/10 pt-6 text-xs text-white/50">© 2026 Hyrum Bustos · {s.footer}</p>
        </div>
      </section>
    </main>
  );
}
