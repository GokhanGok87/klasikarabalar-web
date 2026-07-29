import Link from "next/link";

export default function AuthConfirmPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-7 bg-bg">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#33473A]/30 border-2 border-[#33473A] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#5A9E6F" strokeWidth="2" className="w-10 h-10">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-[#5A9E6F]">
          E-posta Doğrulandı
        </span>
        <h1 className="font-display font-bold uppercase text-cream text-3xl mt-4 mb-4">
          Hesabınız
          <br />
          <span className="text-copper">Onaylandı</span>
        </h1>
        <p className="font-body text-cream-dim mb-8">
          Hesabınız başarıyla doğrulandı. Şimdi giriş yapabilirsiniz.
        </p>
        <Link
          href="/login"
          className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all"
        >
          Giriş Yap
        </Link>
      </div>
    </main>
  );
}
