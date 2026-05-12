import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import NavbarClient from "@/components/navbar/NavbarClient";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Christopher Paucar — Full Stack Developer | Web Apps That Convert",
  description: "I help startups and growing businesses ship full-stack web applications that load fast, convert visitors, and scale. Next.js, NestJS, TypeScript, PostgreSQL.",
  keywords: ["Christopher Paucar", "Full Stack Developer", "Next.js", "React", "TypeScript", "NestJS", "Web Development", "Ecuador", "Freelance Developer"],
  authors: [{ name: "Christopher Paucar" }],
  openGraph: {
    title: "Christopher Paucar — Full Stack Developer",
    description: "Web applications built to convert, not just to look good. From database to UI — one developer, zero gaps.",
    url: "https://christopherpaucar.dev",
    siteName: "Christopher Paucar",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_EC",
  },
  alternates: {
    canonical: "https://christopherpaucar.dev",
    languages: {
      "en-US": "/",
      "es-EC": "/?lng=es",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Christopher Paucar — Full Stack Developer",
    description: "Web applications built to convert, not just to look good.",
  },
  icons: {
    icon: "/assets/icons/logoC.svg",
    apple: "/assets/icons/logoC.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://christopherpaucar.dev" />
        <link rel="alternate" href="https://christopherpaucar.dev" hrefLang="en-US" />
        <link rel="alternate" href="https://christopherpaucar.dev/?lng=es" hrefLang="es-EC" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f7" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0a0a" />
      </head>
      <body className="min-h-full w-full flex flex-col font-sans cursor-none" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <SmoothCursor />
            <NavbarClient />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
