"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-7 bg-bg">
      <div className="text-center max-w-md">
        <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-redline">
          HATA
        </span>
        <h1 className="font-display font-bold uppercase text-cream text-4xl mt-4 mb-4">
          Bir Şeyler
          <br />
          <span className="text-copper">Yanlış Gitti</span>
        </h1>
        <p className="font-body text-cream-dim mb-8">
          Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] transition-all"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-chrome text-cream hover:border-copper hover:text-copper transition-all"
          >
            Ana Sayfa
          </Link>
        </div>
      </div>
    </main>
  );
}
