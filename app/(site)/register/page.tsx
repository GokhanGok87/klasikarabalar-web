"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useReveal } from "../../hooks/useReveal";
import { createClient } from "../../lib/supabase/client";

export default function RegisterPage() {
  const formRef = useReveal<HTMLDivElement>();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Şifreler eşleşmiyor");
      return;
    }

    if (formData.password.length < 6) {
      setError("Şifre en az 6 karakter olmalı");
      return;
    }

    setLoading(true);

    const supabase = createClient();

    const { error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          username: formData.username,
          full_name: `${formData.firstName} ${formData.lastName}`.trim(),
          city: formData.city,
        },
      },
    });

    if (authError) {
      if (authError.message.includes("already registered")) {
        setError("Bu e-posta adresi zaten kayıtlı");
      } else if (authError.message.includes("unique")) {
        setError("Bu kullanıcı adı zaten alınmış");
      } else {
        setError("Kayıt sırasında bir hata oluştu");
      }
      setLoading(false);
      return;
    }

    // Başarılı kayıt - giriş sayfasına yönlendir
    router.push("/login?registered=true");
  };

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

              {error && (
                <div className="mb-6 p-4 rounded-sm bg-redline/10 border border-redline/30">
                  <p className="font-mono text-[0.72rem] text-redline text-center">
                    {error}
                  </p>
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      Ad
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Adınız"
                      className="input-field"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      Soyad
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Soyadınız"
                      className="input-field"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    Kullanıcı Adı
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="kullaniciadi"
                    className="input-field"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ornek@email.com"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    Şifre
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="input-field"
                    value={formData.password}
                    onChange={handleChange}
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
                    name="confirmPassword"
                    placeholder="••••••••"
                    className="input-field"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                    Şehir
                  </label>
                  <select
                    name="city"
                    className="input-field"
                    value={formData.city}
                    onChange={handleChange}
                  >
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
                    required
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
                  disabled={loading}
                  className="w-full font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Kayıt Yapılıyor..." : "Üye Ol"}
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
