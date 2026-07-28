import Link from "next/link";

const navLinks = [
  { href: "#galeri", label: "Galeri" },
  { href: "#yayin", label: "Yayın" },
  { href: "#ilanlar", label: "İlanlar" },
  { href: "#etkinlikler", label: "Etkinlikler" },
  { href: "#topluluk", label: "Topluluk" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-hairline">
      <div className="flex items-center justify-between px-7 py-4 max-w-[1120px] mx-auto">
        <div className="font-display font-extrabold text-xl tracking-wide flex items-baseline gap-2">
          KLASİK<span className="text-copper">ARABALAR</span>
        </div>
        <nav className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream-dim hover:text-copper transition-colors relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-copper after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}