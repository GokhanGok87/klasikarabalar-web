"use client";

import Link from "next/link";
import { useReveal } from "../hooks/useReveal";

export default function RegisterPage() {
  const formRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="relative z-[1] pt-32 pb-16 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
            Ana Sayfa / Üye Ol
          </span>
          <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] mt-3">
            Üye
            <br />
            <span className="text-copper">Ol</span>
          </h1>
        </div>
      </section>

      {/* Register Form */}
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
                    <line x1="19" y1="8" x2="19" y2="14" />
                    <line x1="16" y1="11" x2="22" y2="11" />
                  </svg>
                </div>
                <h2 className="font-display font-bold uppercase text-cream text-xl">
                  Topluluğa Katılın
                </h2>
                <p className="text-cream-dim text-sm mt-2">
                  Klasik otomobil tutkusunu bizimle paylaşın
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      Ad
                    </label>
                    <input
                      type="text"
                      placeholder="Adınız"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      Soyad
                    </label>
                    <input
                      type="text"
                      placeholder="Soyadınız"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    Kullanıcı Adı
                  </label>
                  <input
                    type="text"
                    placeholder="kullaniciadi"
                    className="input-field"
                  />
                </div>
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
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    Şifre Tekrar
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    Şehir
                  </label>
                  <select className="input-field">
                    <option value="">Şehir seçin</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 accent-copper bg-bg-panel border-hairline rounded-sm"
                  />
                  <span className="font-mono text-[0.66rem] text-cream-dim leading-relaxed">
                    <Link href="#" className="text-copper hover:text-[#DE9A57]">
                      Kullanım şartlarını
                    </Link>{" "}
                    ve{" "}
                    <Link href="#" className="text-copper hover:text-[#DE9A57]">
                      gizlilik politikasını
                    </Link>{" "}
                    okudum, kabul ediyorum.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all"
                >
                  Üye Ol
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-hairline text-center">
                <span className="font-mono text-[0.7rem] text-cream-dim">
                  Zaten hesabınız var mı?{" "}
                  <Link
                    href="/login"
                    className="text-copper hover:text-[#DE9A57] transition-colors"
                  >
                    Giriş Yapın
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
