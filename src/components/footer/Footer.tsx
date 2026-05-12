import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
const socials = [
  { label: "GitHub", href: "https://github.com/itschrisedu", icon: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christopher-paucar-949a32234/", icon: "LI" },
];

export default function Footer() {
  return (
    <footer className="border-t border-silver-mist dark:border-[#38383a] bg-fog dark:bg-[#0a0a0a]">
      <Container className="py-16">
        <SectionContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-[#000000] flex items-center justify-center">
                <Image src="/assets/icons/logoC.svg" alt="Logo" width={28} height={28} className="h-7 w-7 brightness-0 invert" />
              </div>
              <div>
                <span className="text-[15px] font-semibold text-ink dark:text-[var(--color-ink)] block">Christopher Paucar</span>
                <span className="text-[12px] text-graphite dark:text-[var(--color-graphite)]">Full Stack Developer</span>
              </div>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-8">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-[13px] font-normal text-graphite dark:text-[var(--color-graphite)] hover:text-cobalt-link dark:hover:text-azure transition-colors duration-200">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-2xl
                    bg-snow dark:bg-[#1c1c1e]
                    text-[12px] font-semibold text-graphite dark:text-[var(--color-graphite)]
                    hover:text-azure hover:bg-azure/8
                    transition-all duration-200"
                >{s.icon}</a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-silver-mist dark:border-[#38383a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-graphite dark:text-[var(--color-graphite)]">&copy; {new Date().getFullYear()} Christopher Paucar. All rights reserved.</p>
            <p className="text-[12px] text-graphite/60 dark:text-[var(--color-graphite)]/60">Built with Next.js, TailwindCSS & Framer Motion</p>
          </div>
        </SectionContent>
      </Container>
    </footer>
  );
}
