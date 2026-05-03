import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Christopher Paucar — Full Stack Developer",
  description: "I build web applications focused on conversion and performance. Clean architecture, real results.",
  keywords: ["Christopher Paucar", "Full Stack Developer", "Next.js", "React", "TypeScript", "NestJS", "Portfolio"],
  authors: [{ name: "Christopher Paucar" }],
  openGraph: {
    title: "Christopher Paucar — Full Stack Developer",
    description: "Web applications focused on conversion and performance.",
    url: "https://christopherpaucar.dev",
    siteName: "Christopher Paucar",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Paucar — Full Stack Developer",
    description: "Web applications focused on conversion and performance.",
  },
  icons: {
    icon: "/assets/icons/logoC.svg",
    apple: "/assets/icons/logoC.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
