# Jhojan Manuel Antezana Villegas — Portafolio Personal

[![Build Status](https://img.shields.io/github/actions/workflow/status/JHOJAN-GIT/Mi-portafolio-virtual/node.js.yml?branch=main)](https://github.com/JHOJAN-GIT/Mi-portafolio-virtual/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://mi-portafolio-virtual-theta.vercel.app)

Portafolio personal y profesional de **Jhojan Manuel Antezana Villegas**, estudiante de Ingeniería de Sistemas en la [Universidad Nacional del Centro del Perú (UNCP)](https://www.uncp.edu.pe), con enfoque en desarrollo de software y especial inclinación por el frontend.

**[Ver sitio en vivo →](https://mi-portafolio-virtual-theta.vercel.app)**

---

## Sobre mí

- 📍 Huancayo, Perú — Andes centrales, 3,000+ msnm
- 🎓 Ing. de Sistemas — UNCP (2022 – presente), ciclo 8.°
- 💼 Trabajo en la Dirección de Proyección Social y Extensión Cultural de la UNCP automatizando reportes con Python
- 💻 Programando desde 2019 — C++, Python, PHP, JavaScript, TypeScript, React, Next.js

---

## Proyectos destacados

### Sistema de Gestión Hotelera con Chatbot
Sistema web completo en PHP + MySQL con reservas, check-in/out, panel de administrador, roles de usuario y chatbot integrado para consultas de disponibilidad en tiempo real.

### Sistema de Puntajes en Tiempo Real para Jurados
Plataforma de votación en vivo para eventos académicos. Primera versión en PHP, reescrita en Next.js + WebSockets para actualización instantánea de puntajes sin recarga.

### Automatización de Certificados — UNCP
Script Python que simula el ERP ADESA, descarga planillas de participantes, procesa los datos con Pandas y genera certificados institucionales en PDF automáticamente.

---

## Stack tecnológico

| Área | Tecnologías |
|------|-------------|
| Frontend | React · Next.js 16 · TypeScript · Tailwind CSS · Vite |
| Backend / Scripts | Python · PHP · Node.js |
| Bases de datos | MySQL · PostgreSQL · MongoDB · SQL Server |
| Herramientas | Git · GitHub · VS Code · XAMPP · Pandas · Openpyxl |

---

## Estructura del proyecto

```
personal-site-export/
├── app/                  → Páginas y layouts (App Router de Next.js)
│   ├── about/            → Página "Sobre mí"
│   ├── resume/           → Currículum
│   ├── projects/         → Proyectos
│   ├── cuaderno/         → Cuaderno de aprendizaje DAW — UNCP
│   ├── contact/          → Contacto
│   └── styles/           → Sistema de diseño en CSS tokens
├── src/
│   ├── components/       → Componentes React
│   ├── data/             → Datos del sitio (perfil, proyectos, skills, etc.)
│   └── lib/              → Utilidades
├── public/
│   └── images/           → Imágenes del sitio
└── content/
    └── writing/          → Artículos en Markdown
```

---

## Desarrollo local

Requisitos: [Node.js](https://nodejs.org) (ver `.nvmrc`) y npm.

```bash
git clone https://github.com/JHOJAN-GIT/Mi-portafolio-virtual.git
cd Mi-portafolio-virtual/personal-site-export
npm ci
npm run dev
```

El servidor de desarrollo estará en `http://localhost:3000`.

### Comandos disponibles

```bash
npm run dev          # Servidor de desarrollo con Turbopack
npm run build        # Build de producción (exportación estática)
npm run lint         # Linting con Biome
npm run type-check   # Verificación de tipos TypeScript
npm test             # Tests con Vitest
npm run format       # Formatear con Prettier + Biome
```

---

## Despliegue

El sitio está desplegado en **Vercel** con deploy automático en cada push a `main`.

- **URL de producción:** [mi-portafolio-virtual-theta.vercel.app](https://mi-portafolio-virtual-theta.vercel.app)
- **Root Directory en Vercel:** `personal-site-export`
- **Framework:** Next.js (detectado automáticamente)

---

## Contacto

- **Email:** e_2022200411H@uncp.edu.pe
- **GitHub:** [JHOJAN-GIT](https://github.com/JHOJAN-GIT)
- **LinkedIn:** [jhojan-antezana](https://www.linkedin.com/in/jhojan-antezana-8a22001ab/)
- **Instagram:** [@jhojanantezana2](https://www.instagram.com/jhojanantezana2/)

---

## Licencia

[MIT](./LICENSE) — Basado en el template original de [mldangelo/personal-site](https://github.com/mldangelo/personal-site), adaptado y personalizado completamente.
