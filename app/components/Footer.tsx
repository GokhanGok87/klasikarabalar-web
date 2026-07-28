import Link from "next/link";

const footerLinks = [
  { href: "#galeri", label: "Galeri" },
  { href: "#yayin", label: "Yayın" },
  { href: "#ilanlar", label: "İlanlar" },
  { href: "#etkinlikler", label: "Etkinlikler" },
  { href: "#topluluk", label: "Topluluk" },
];

export function Footer() {
  return (
    <footer className="relative z-[1] mt-24 border-t border-hairline py-10">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="font-display font-extrabold text-lg tracking-wide flex items-baseline gap-2">
            KLASİK<span className="text-copper">ARABALAR</span>
          </div>
          <nav className="flex gap-6 font-mono text-xs text-cream-dim tracking-wide">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-copper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="font-mono text-[0.7rem] text-chrome mt-6 text-center md:text-left">
          © 2026 klasikarabalar.org — Bu miras devam ediyor.
        </p>
      </div>
    </footer>
  );
}