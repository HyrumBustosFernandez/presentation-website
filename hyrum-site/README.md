# Sitio personal — Hyrum Bustos

Next.js 14 + Tailwind CSS, bilingüe ES/EN, listo para Vercel.

## Correr localmente
```bash
npm install
npm run dev
```
Abre http://localhost:3000

## Desplegar en Vercel
1. Sube esta carpeta a un repo nuevo en GitHub (sin node_modules).
2. En vercel.com → Add New Project → importa el repo → Deploy (sin configuración extra).

## Editar contenido
Todo el texto (ES y EN) está en `app/page.tsx`, en el objeto `t` al inicio del archivo.
Los CV descargables están en `public/cv/` — reemplaza los PDF cuando los actualices.
