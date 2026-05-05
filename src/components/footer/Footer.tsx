import Image from "next/image";

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
    <footer className="border-t border-border dark:border-white/8 bg-surface dark:bg-[#0e0e0e]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-20 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent-orange/10 flex items-center justify-center shadow-sm">
              <Image src="/assets/icons/logoC.svg" alt="Logo" width={22} height={22} className="h-5.5 w-5.5" />
            </div>
            <div>
              <span className="text-[15px] font-bold text-primary block">Christopher Paucar</span>
              <span className="text-[12px] text-muted">Full Stack Developer</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {links.map((l) => (<a key={l.label} href={l.href} className="text-[13px] font-medium text-secondary hover:text-accent transition-colors duration-200">{l.label}</a>))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-xl border border-border dark:border-white/8 text-[12px] font-bold text-secondary hover:text-accent hover:border-accent/25 transition-all duration-200"
              >{s.icon}</a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border dark:border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted">&copy; {new Date().getFullYear()} Christopher Paucar. All rights reserved.</p>
          <p className="text-[12px] text-faint">Built with Next.js, TailwindCSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
