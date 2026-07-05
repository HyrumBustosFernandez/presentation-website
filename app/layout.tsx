import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hyrum Bustos · Ingeniería en Informática",
  description:
    "Estudiante de último año de Ingeniería en Informática (Duoc UC, Chile). Desarrollo full-stack, machine learning y productos de principio a fin.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${inter.variable} font-sans bg-paper text-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
