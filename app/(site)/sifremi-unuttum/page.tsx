"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function SifremiUnuttumPage() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step"); // "new-password" = reset sonrası
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Yeni şifre formu
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendResetEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const supabase = createClient();

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?type=recovery`,
    });

    if (resetError) {
      setError("Mail gönderilirken bir hata oluştu. E-posta adresinizi kontrol edin.");
    } else {
      setSuccess("Şifre sıfırlama linki e-posta adresinize gönderildi. Gelen kutunuzu kontrol edin.");
      setEmail("");
    }

    setLoading(false);
  };

  const handleSetNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Şifreler eşleşmiyor");
      return;
    }

    if (newPassword.length < 6) {
      setError("Şifre en az 6 karakter olmalı");
      return;
    }

    setLoading(true);

    const supabase = createClient();

    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      setError("Şifre güncellenirken bir hata oluştu");
    } else {
      setSuccess("Şifreniz başarıyla güncellendi!");
      setNewPassword("");
      setConfirmPassword("");
    }

    setLoading(false);
  };

  return (
    <>
      <section className="relative z-[1] pt-32 pb-16 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
            Ana Sayfa / Şifremi Unuttum
          </span>
          <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] mt-3">
            Şifremi
            <br />
            <span className="text-copper">Unuttum</span>
          </h1>
        </div>
      </section>

      <section className="relative z-[1] py-16">
        <div className="max-w-[480px] mx-auto px-7">
          <div className="bg-bg-panel border border-hairline rounded-sm p-8 md:p-10">
            {step === "new-password" ? (
              <>
                {/* Yeni Şifre Belirleme */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-copper flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C6813F" strokeWidth="1.5" className="w-7 h-7">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <h2 className="font-display font-bold uppercase text-cream text-xl">
                    Yeni Şifre Belirle
                  </h2>
                  <p className="text-cream-dim text-sm mt-2">
                    Lütfen yeni şifrenizi girin
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-sm bg-redline/10 border border-redline/30">
                    <p className="font-mono text-[0.72rem] text-redline text-center">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="mb-6 p-4 rounded-sm bg-[#33473A]/30 border border-[#33473A]">
                    <p className="font-mono text-[0.72rem] text-[#5A9E6F] text-center">{success}</p>
                  </div>
                )}

                <form onSubmit={handleSetNewPassword} className="space-y-5">
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      Yeni Şifre
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="input-field"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      minLength={6}
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
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all disabled:opacity-50"
                  >
                    {loading ? "Güncelleniyor..." : "Şifreyi Güncelle"}
                  </button>
                </form>
              </>
            ) : (
              <>
                {/* Şifre Sıfırlama Maili Gönder */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-copper flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C6813F" strokeWidth="1.5" className="w-7 h-7">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  </div>
                  <h2 className="font-display font-bold uppercase text-cream text-xl">
                    Şifrenizi Sıfırlayın
                  </h2>
                  <p className="text-cream-dim text-sm mt-2">
                    E-posta adresinize şifre sıfırlama linki göndereceğiz
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-sm bg-redline/10 border border-redline/30">
                    <p className="font-mono text-[0.72rem] text-redline text-center">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="mb-6 p-4 rounded-sm bg-[#33473A]/30 border border-[#33473A]">
                    <p className="font-mono text-[0.72rem] text-[#5A9E6F] text-center">{success}</p>
                  </div>
                )}

                <form onSubmit={handleSendResetEmail} className="space-y-5">
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      placeholder="ornek@email.com"
                      className="input-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all disabled:opacity-50"
                  >
                    {loading ? "Gönderiliyor..." : "Sıfırlama Linki Gönder"}
                  </button>
                </form>
              </>
            )}

            <div className="mt-6 pt-6 border-t border-hairline text-center">
              <Link
                href="/login"
                className="font-mono text-[0.7rem] text-copper hover:text-[#DE9A57] transition-colors"
              >
                ← Giriş Sayfasına Dön
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
