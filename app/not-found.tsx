import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-7 bg-bg">
      <div className="text-center max-w-md">
        <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
          404
        </span>
        <h1 className="font-display font-bold uppercase text-cream text-4xl mt-4 mb-4">
          Sayfa
          <br />
          <span className="text-copper">Bulunamadı</span>
        </h1>
        <p className="font-body text-cream-dim mb-8">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <Link
          href="/"
          className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}
