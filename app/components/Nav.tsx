"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/galeri", label: "Galeri" },
  { href: "/yayin", label: "Yayın" },
  { href: "/ilanlar", label: "İlanlar" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/topluluk", label: "Topluluk" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-hairline">
      <div className="flex items-center justify-between px-7 py-4 max-w-[1120px] mx-auto">
        <Link
          href="/"
          className="font-display font-extrabold text-xl tracking-wide flex items-baseline gap-2"
        >
          KLASİK<span className="text-copper">ARABALAR</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors ${
                  isActive
                    ? "text-copper"
                    : "text-cream-dim hover:text-copper"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:transition-all ${
                  isActive
                    ? "after:w-full after:bg-copper"
                    : "after:w-0 after:bg-copper hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="w-px h-4 bg-hairline" />
          <Link
            href="/login"
            className={`relative pb-1 transition-colors ${
              pathname === "/login"
                ? "text-copper"
                : "text-cream-dim hover:text-copper"
            } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:transition-all ${
              pathname === "/login"
                ? "after:w-full after:bg-copper"
                : "after:w-0 after:bg-copper hover:after:w-full"
            }`}
          >
            Giriş
          </Link>
          <Link
            href="/register"
            className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all"
          >
            Üye Ol
          </Link>
        </nav>
      </div>
    </header>
  );
}
