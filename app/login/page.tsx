"use client";

import Link from "next/link";
import { useReveal } from "../hooks/useReveal";

export default function LoginPage() {
  const formRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="relative z-[1] pt-32 pb-16 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
            Ana Sayfa / Giriş Yap
          </span>
          <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] mt-3">
            Giriş
            <br />
            <span className="text-copper">Yap</span>
          </h1>
        </div>
      </section>

      {/* Login Form */}
      <section className="relative z-[1] py-16">
        <div className="max-w-[480px] mx-auto px-7">
          <div ref={formRef} className="reveal">
            <div className="bg-bg-panel border border-hairline rounded-sm p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-copper flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C6813F"
                    strokeWidth="1.5"
                    className="w-7 h-7"
                  >
                    <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
                  </svg>
                </div>
                <h2 className="font-display font-bold uppercase text-cream text-xl">
                  Hesabınıza Giriş Yapın
                </h2>
                <p className="text-cream-dim text-sm mt-2">
                  Klasikarabalar.org topluluğuna erişin
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    Şifre
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="input-field"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-copper bg-bg-panel border-hairline rounded-sm"
                    />
                    <span className="font-mono text-[0.7rem] text-cream-dim">
                      Beni hatırla
                    </span>
                  </label>
                  <Link
                    href="#"
                    className="font-mono text-[0.7rem] text-copper hover:text-[#DE9A57] transition-colors"
                  >
                    Şifremi unuttum
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all"
                >
                  Giriş Yap
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-hairline text-center">
                <span className="font-mono text-[0.7rem] text-cream-dim">
                  Hesabınız yok mu?{" "}
                  <Link
                    href="/register"
                    className="text-copper hover:text-[#DE9A57] transition-colors"
                  >
                    Üye Olun
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
