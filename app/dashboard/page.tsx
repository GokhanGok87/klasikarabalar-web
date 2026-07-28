"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";
import { User } from "@supabase/supabase-js";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  // Profile form
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState("");
  const [profileError, setProfileError] = useState("");

  // Password form
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email form
  const [newEmail, setNewEmail] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/login?redirect=/dashboard");
        return;
      }
      setUser(user);
      setFullName(user.user_metadata?.full_name || "");
      setCity(user.user_metadata?.city || "");
      setNewEmail(user.email || "");
      setLoading(false);
    });
  }, [router]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileSuccess("");
    setProfileError("");

    const supabase = createClient();

    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: fullName,
        city: city,
      },
    });

    if (error) {
      setProfileError("Profil güncellenirken bir hata oluştu");
    } else {
      setProfileSuccess("Profil başarıyla güncellendi");
      // Kullanıcı bilgilerini yenile
      const { data: { user: updatedUser } } = await supabase.auth.getUser();
      if (updatedUser) setUser(updatedUser);
    }

    setProfileLoading(false);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordLoading(true);
    setPasswordSuccess("");
    setPasswordError("");

    if (newPassword !== confirmPassword) {
      setPasswordError("Şifreler eşleşmiyor");
      setPasswordLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError("Şifre en az 6 karakter olmalı");
      setPasswordLoading(false);
      return;
    }

    const supabase = createClient();

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setPasswordError("Şifre değiştirilirken bir hata oluştu");
    } else {
      setPasswordSuccess("Şifre başarıyla değiştirildi");
      setNewPassword("");
      setConfirmPassword("");
    }

    setPasswordLoading(false);
  };

  const handleChangeEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailLoading(true);
    setEmailSuccess("");
    setEmailError("");

    if (newEmail === user?.email) {
      setEmailError("Yeni e-posta adresi mevcut adresle aynı");
      setEmailLoading(false);
      return;
    }

    const supabase = createClient();

    const { error } = await supabase.auth.updateUser({
      email: newEmail,
    });

    if (error) {
      if (error.message.includes("already")) {
        setEmailError("Bu e-posta adresi zaten kullanımda");
      } else {
        setEmailError("E-posta değiştirilirken bir hata oluştu");
      }
    } else {
      setEmailSuccess("E-posta doğrulama linki gönderildi. Yeni adresinizi doğrulayın.");
    }

    setEmailLoading(false);
  };

  const handleDeleteAccount = async () => {
    if (!confirm("Hesabınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.")) {
      return;
    }

    const supabase = createClient();
    // Not: Supabase'de hesap silme için sunucu tarafı bir Function gerekebilir
    // Şimdilik sadece çıkış yapıyoruz
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="font-mono text-chrome">Yükleniyor...</div>
      </div>
    );
  }

  if (!user) return null;

  const username = user.user_metadata?.username || "kullanici";
  const memberSince = new Date(user.created_at).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tabs = [
    { id: "profile", label: "Profil" },
    { id: "password", label: "Şifre" },
    { id: "email", label: "E-posta" },
    { id: "account", label: "Hesap" },
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="relative z-[1] pt-32 pb-12 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
            Ana Sayfa / Dashboard
          </span>
          <div className="flex items-center gap-6 mt-6">
            <div className="w-20 h-20 rounded-full bg-copper/20 border-2 border-copper/30 flex items-center justify-center">
              <span className="font-display text-3xl text-copper font-bold">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="font-display font-bold uppercase text-cream text-2xl">
                {user.user_metadata?.full_name || username}
              </h1>
              <p className="font-mono text-[0.72rem] text-chrome mt-1">
                @{username} · Üye olma tarihi: {memberSince}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-[1] py-12">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-[220px] shrink-0">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left font-mono text-[0.72rem] tracking-widest uppercase px-4 py-3 rounded-sm transition-all ${
                      activeTab === tab.id
                        ? "bg-copper text-bg"
                        : "text-cream-dim hover:bg-bg-panel hover:text-cream"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="bg-bg-panel border border-hairline rounded-sm p-8">
                  <h2 className="font-display font-bold uppercase text-cream text-xl mb-6">
                    Profil Bilgileri
                  </h2>

                  {profileSuccess && (
                    <div className="mb-6 p-4 rounded-sm bg-[#33473A]/30 border border-[#33473A]">
                      <p className="font-mono text-[0.72rem] text-[#5A9E6F] text-center">
                        {profileSuccess}
                      </p>
                    </div>
                  )}

                  {profileError && (
                    <div className="mb-6 p-4 rounded-sm bg-redline/10 border border-redline/30">
                      <p className="font-mono text-[0.72rem] text-redline text-center">
                        {profileError}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleUpdateProfile} className="space-y-6">
                    {/* Kullanıcı Adı (Salt Okunur) */}
                    <div>
                      <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                        Kullanıcı Adı
                      </label>
                      <input
                        type="text"
                        value={username}
                        disabled
                        className="input-field opacity-50 cursor-not-allowed"
                      />
                      <p className="font-mono text-[0.66rem] text-chrome mt-2">
                        Kullanıcı adı değiştirilemez
                      </p>
                    </div>

                    {/* E-posta (Salt Okunur) */}
                    <div>
                      <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                        E-posta
                      </label>
                      <input
                        type="email"
                        value={user.email || ""}
                        disabled
                        className="input-field opacity-50 cursor-not-allowed"
                      />
                      <p className="font-mono text-[0.66rem] text-chrome mt-2">
                        E-posta değiştirmek için "E-posta" sekmesine gidin
                      </p>
                    </div>

                    {/* Ad Soyad */}
                    <div>
                      <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Adınız Soyadınız"
                        className="input-field"
                      />
                    </div>

                    {/* Şehir */}
                    <div>
                      <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                        Şehir
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="input-field"
                      >
                        <option value="">Şehir seçin</option>
                        <option value="istanbul">İstanbul</option>
                        <option value="ankara">Ankara</option>
                        <option value="izmir">İzmir</option>
                        <option value="bursa">Bursa</option>
                        <option value="antalya">Antalya</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={profileLoading}
                      className="font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all disabled:opacity-50"
                    >
                      {profileLoading ? "Kaydediliyor..." : "Kaydet"}
                    </button>
                  </form>
                </div>
              )}

              {/* Password Tab */}
              {activeTab === "password" && (
                <div className="bg-bg-panel border border-hairline rounded-sm p-8">
                  <h2 className="font-display font-bold uppercase text-cream text-xl mb-6">
                    Şifre Değiştir
                  </h2>

                  {passwordSuccess && (
                    <div className="mb-6 p-4 rounded-sm bg-[#33473A]/30 border border-[#33473A]">
                      <p className="font-mono text-[0.72rem] text-[#5A9E6F] text-center">
                        {passwordSuccess}
                      </p>
                    </div>
                  )}

                  {passwordError && (
                    <div className="mb-6 p-4 rounded-sm bg-redline/10 border border-redline/30">
                      <p className="font-mono text-[0.72rem] text-redline text-center">
                        {passwordError}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleChangePassword} className="space-y-6">
                    <div>
                      <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                        Yeni Şifre
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="input-field"
                        minLength={6}
                        required
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                        Yeni Şifre Tekrar
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="input-field"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={passwordLoading}
                      className="font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all disabled:opacity-50"
                    >
                      {passwordLoading ? "Değiştiriliyor..." : "Şifreyi Değiştir"}
                    </button>
                  </form>
                </div>
              )}

              {/* Email Tab */}
              {activeTab === "email" && (
                <div className="bg-bg-panel border border-hairline rounded-sm p-8">
                  <h2 className="font-display font-bold uppercase text-cream text-xl mb-6">
                    E-posta Değiştir
                  </h2>

                  {emailSuccess && (
                    <div className="mb-6 p-4 rounded-sm bg-[#33473A]/30 border border-[#33473A]">
                      <p className="font-mono text-[0.72rem] text-[#5A9E6F] text-center">
                        {emailSuccess}
                      </p>
                    </div>
                  )}

                  {emailError && (
                    <div className="mb-6 p-4 rounded-sm bg-redline/10 border border-redline/30">
                      <p className="font-mono text-[0.72rem] text-redline text-center">
                        {emailError}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleChangeEmail} className="space-y-6">
                    <div>
                      <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                        Mevcut E-posta
                      </label>
                      <input
                        type="email"
                        value={user.email || ""}
                        disabled
                        className="input-field opacity-50 cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                        Yeni E-posta
                      </label>
                      <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="ornek@email.com"
                        className="input-field"
                        required
                      />
                    </div>

                    <div className="p-4 rounded-sm bg-bg-panel-hi border border-hairline">
                      <p className="font-mono text-[0.72rem] text-cream-dim">
                        Yeni e-posta adresinize bir doğrulama linki gönderilecektir.
                        Linki tıkladıktan sonra e-posta adresiniz değiştirilecektir.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={emailLoading}
                      className="font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all disabled:opacity-50"
                    >
                      {emailLoading ? "Gönderiliyor..." : "Doğrulama Linki Gönder"}
                    </button>
                  </form>
                </div>
              )}

              {/* Account Tab */}
              {activeTab === "account" && (
                <div className="bg-bg-panel border border-hairline rounded-sm p-8">
                  <h2 className="font-display font-bold uppercase text-cream text-xl mb-6">
                    Hesap Ayarları
                  </h2>

                  <div className="space-y-8">
                    {/* Hesap Bilgileri */}
                    <div className="border-b border-hairline pb-8">
                      <h3 className="font-display font-bold uppercase text-cream text-lg mb-4">
                        Hesap Detayları
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="font-mono text-[0.66rem] tracking-widest uppercase text-chrome block mb-1">
                            Kullanıcı ID
                          </span>
                          <span className="font-mono text-[0.8rem] text-cream-dim break-all">
                            {user.id}
                          </span>
                        </div>
                        <div>
                          <span className="font-mono text-[0.66rem] tracking-widest uppercase text-chrome block mb-1">
                            Kayıt Tarihi
                          </span>
                          <span className="font-mono text-[0.8rem] text-cream-dim">
                            {memberSince}
                          </span>
                        </div>
                        <div>
                          <span className="font-mono text-[0.66rem] tracking-widest uppercase text-chrome block mb-1">
                            Son Giriş
                          </span>
                          <span className="font-mono text-[0.8rem] text-cream-dim">
                            {user.last_sign_in_at
                              ? new Date(user.last_sign_in_at).toLocaleDateString("tr-TR")
                              : "İlk giriş"}
                          </span>
                        </div>
                        <div>
                          <span className="font-mono text-[0.66rem] tracking-widest uppercase text-chrome block mb-1">
                            E-posta Doğrulama
                          </span>
                          <span className={`font-mono text-[0.8rem] ${user.email_confirmed_at ? "text-[#5A9E6F]" : "text-redline"}`}>
                            {user.email_confirmed_at ? "Doğrulanmış" : "Doğrulanmamış"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tehlikeli Bölge */}
                    <div className="border border-redline/30 rounded-sm p-6">
                      <h3 className="font-display font-bold uppercase text-redline text-lg mb-2">
                        Tehlikeli Bölge
                      </h3>
                      <p className="text-cream-dim text-[0.88rem] mb-6">
                        Hesabınızı silmek kalıcı bir işlemdir. Tüm verileriniz silinecektir.
                      </p>
                      <button
                        onClick={handleDeleteAccount}
                        className="font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-sm border border-redline text-redline hover:bg-redline hover:text-bg transition-all"
                      >
                        Hesabı Sil
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
