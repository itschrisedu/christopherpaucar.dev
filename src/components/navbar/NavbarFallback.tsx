import Image from "next/image";

export default function NavbarFallback() {
  const navItems = ["Home", "Projects", "About", "Contact"];

  return (
    <nav className="fixed top-4 left-0 right-0 z-[5000]" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto px-4">
        <div className="w-full max-w-4xl flex items-center justify-between rounded-full
          border border-silver-mist/60 dark:border-[#38383a]/60
          bg-snow/80 dark:bg-[#1c1c1e]/80
          backdrop-blur-[20px] px-4 py-2
          shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
          <a href="#hero" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000]">
            <Image src="/assets/icons/logoC.svg" alt="CP" width={28} height={28} className="h-7 w-7 brightness-0 invert" priority />
          </a>

          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((name) => (
              <a key={name} href="#" className="rounded-full px-4 py-2 text-[14px] font-normal">{name}</a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button className="rounded-full px-3 py-2 text-[11px] font-mono">EN</button>
            <button className="relative h-10 w-10 rounded-xl overflow-hidden" aria-label="Toggle theme">
              <div className="absolute inset-0 bg-white dark:bg-[#0b0b0b]" />
            </button>
            <div className="h-5 w-px mx-1 bg-silver-mist dark:bg-[#38383a]" />
            <a href="#contact" className="rounded-full px-5 py-2 bg-azure text-snow">Start</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
