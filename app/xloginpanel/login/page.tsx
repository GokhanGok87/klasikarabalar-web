"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("E-posta veya şifre hatalı");
      setLoading(false);
      return;
    }

    // Admin kontrolü
    const user = data.user;
    const ADMIN_EMAILS = [
      "admin@klasikarabalar.org",
      "gokhangok@icloud.com",
    ];

    const isUserAdmin =
      ADMIN_EMAILS.includes(user.email || "") ||
      user.user_metadata?.role === "admin";

    if (!isUserAdmin) {
      await supabase.auth.signOut();
      setError("Bu alana erişim yetkiniz bulunmuyor");
      setLoading(false);
      return;
    }

    router.push("/xloginpanel");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-7">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-copper flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C6813F"
              strokeWidth="1.5"
              className="w-9 h-9"
            >
              <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>
          <h1 className="font-display font-bold uppercase text-cream text-2xl tracking-wide">
            Yönetim Paneli
          </h1>
          <p className="font-mono text-[0.7rem] text-chrome tracking-widest mt-2">
            KLASİKARABALAR.ORG
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-bg-panel border border-hairline rounded-sm p-8">
          {error && (
            <div className="mb-6 p-4 rounded-sm bg-redline/10 border border-redline/30">
              <p className="font-mono text-[0.72rem] text-redline text-center">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                E-posta
              </label>
              <input
                type="email"
                placeholder="admin@ornek.com"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
              <span className="font-mono text-[0.7rem] text-copper cursor-pointer hover:text-[#DE9A57]">
                Şifremi unuttum
              </span>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>
        </div>

        {/* Back to site */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="font-mono text-[0.7rem] text-chrome hover:text-copper transition-colors"
          >
            ← Siteye Dön
          </a>
        </div>
      </div>
    </div>
  );
}
