import type { Metadata } from "next";
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
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
