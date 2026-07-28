"use client";

import { useState } from "react";

export default function XLoginPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-7">
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
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  placeholder="admin"
                  className="input-field"
                  defaultValue="admin"
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
                  defaultValue="admin"
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
                className="w-full font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all"
              >
                Giriş Yap
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

  // Dashboard
  const stats = [
    { label: "TOPLAM ARAÇ", value: "640", change: "+12", color: "text-copper" },
    { label: "AKTİF İLAN", value: "89", change: "+5", color: "text-copper" },
    { label: "ÜYE SAYISI", value: "2.400", change: "+156", color: "text-copper" },
    { label: "BUGÜNKİ ZİYARET", value: "1.847", change: "+324", color: "text-copper" },
  ];

  const recentListings = [
    { plate: "34 KA 968", car: "Porsche 911", status: "Onaylı", date: "2 saat önce" },
    { plate: "35 KA 959", car: "Mercedes 190 SL", status: "Beklemede", date: "4 saat önce" },
    { plate: "06 KA 971", car: "Anadol STC-16", status: "Onaylı", date: "6 saat önce" },
    { plate: "34 FB 123", car: "Ford Mustang", status: "Beklemede", date: "1 gün önce" },
    { plate: "35 RA 789", car: "Jaguar E-Type", status: "Onaylı", date: "2 gün önce" },
  ];

  const pendingApprovals = [
    { type: "İlan", title: "1972 Chevrolet Camaro", user: "ahmet_yilmaz", date: "1 saat önce" },
    { type: "Üye", title: "mehmet_demir", user: "Yeni kayıt", date: "3 saat önce" },
    { type: "İlan", title: "1965 Ford Bronco", user: "eli_kaya", date: "5 saat önce" },
  ];

  const tabs = [
    { id: "dashboard", label: "Gösterge Paneli" },
    { id: "listings", label: "İlanlar" },
    { id: "users", label: "Üyeler" },
    { id: "events", label: "Etkinlikler" },
    { id: "settings", label: "Ayarlar" },
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-bg-panel border-b border-hairline sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-7 flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <div className="font-display font-extrabold text-lg tracking-wide flex items-baseline gap-2">
              KLASİK<span className="text-copper">ARABALAR</span>
            </div>
            <span className="font-mono text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-sm bg-copper/20 text-copper border border-copper/30">
              ADMIN
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-copper/20 border border-copper/30 flex items-center justify-center">
                <span className="font-mono text-[0.66rem] text-copper">A</span>
              </div>
              <span className="font-mono text-xs text-cream-dim hidden sm:block">
                Admin
              </span>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="font-mono text-[0.7rem] tracking-widest uppercase px-4 py-2 rounded-sm border border-hairline text-chrome hover:border-redline hover:text-redline transition-all"
            >
              Çıkış
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-7 py-8">
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
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-bg-panel border border-hairline rounded-sm p-5"
                    >
                      <span className="font-mono text-[0.66rem] tracking-widest text-chrome block mb-2">
                        {stat.label}
                      </span>
                      <div className="flex items-end justify-between">
                        <span className={`font-display text-3xl font-bold ${stat.color}`}>
                          {stat.value}
                        </span>
                        <span className="font-mono text-[0.66rem] text-[#33473A]">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
                  {/* Recent Listings */}
                  <div className="bg-bg-panel border border-hairline rounded-sm">
                    <div className="px-5 py-4 border-b border-hairline flex items-center justify-between">
                      <h2 className="font-display font-bold uppercase text-cream text-sm">
                        Son İlanlar
                      </h2>
                      <span className="font-mono text-[0.66rem] text-chrome">
                        {recentListings.length} ilan
                      </span>
                    </div>
                    <div className="divide-y divide-hairline">
                      {recentListings.map((listing, i) => (
                        <div
                          key={i}
                          className="px-5 py-3 flex items-center justify-between hover:bg-bg-panel-hi transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-[0.66rem] text-bg bg-cream px-2 py-1 rounded-sm">
                              {listing.plate}
                            </span>
                            <span className="font-body text-sm text-cream">
                              {listing.car}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span
                              className={`font-mono text-[0.6rem] tracking-widest uppercase px-2 py-1 rounded-sm ${
                                listing.status === "Onaylı"
                                  ? "bg-[#33473A] text-[#5A9E6F]"
                                  : "bg-copper/20 text-copper"
                              }`}
                            >
                              {listing.status}
                            </span>
                            <span className="font-mono text-[0.66rem] text-chrome hidden sm:block">
                              {listing.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pending Approvals */}
                  <div className="bg-bg-panel border border-hairline rounded-sm">
                    <div className="px-5 py-4 border-b border-hairline flex items-center justify-between">
                      <h2 className="font-display font-bold uppercase text-cream text-sm">
                        Onay Bekleyen
                      </h2>
                      <span className="font-mono text-[0.66rem] text-redline">
                        {pendingApprovals.length} bekleyen
                      </span>
                    </div>
                    <div className="divide-y divide-hairline">
                      {pendingApprovals.map((item, i) => (
                        <div key={i} className="px-5 py-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-copper">
                              {item.type}
                            </span>
                            <span className="font-mono text-[0.6rem] text-chrome">
                              {item.date}
                            </span>
                          </div>
                          <span className="font-body text-sm text-cream block mb-2">
                            {item.title}
                          </span>
                          <div className="flex gap-2">
                            <button className="font-mono text-[0.6rem] tracking-widest uppercase px-3 py-1.5 rounded-sm bg-[#33473A] text-[#5A9E6F] hover:bg-[#3D5545] transition-colors">
                              Onayla
                            </button>
                            <button className="font-mono text-[0.6rem] tracking-widest uppercase px-3 py-1.5 rounded-sm border border-hairline text-chrome hover:border-redline hover:text-redline transition-all">
                              Reddet
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-bg-panel border border-hairline rounded-sm p-5">
                  <h2 className="font-display font-bold uppercase text-cream text-sm mb-4">
                    Hızlı İşlemler
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <button className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-2.5 rounded-sm border border-copper text-copper hover:bg-copper hover:text-bg transition-all">
                      + Yeni İlan Ekle
                    </button>
                    <button className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-2.5 rounded-sm border border-hairline text-cream-dim hover:border-copper hover:text-copper transition-all">
                      Etkinlik Oluştur
                    </button>
                    <button className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-2.5 rounded-sm border border-hairline text-cream-dim hover:border-copper hover:text-copper transition-all">
                      Duyuru Yap
                    </button>
                    <button className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-2.5 rounded-sm border border-hairline text-cream-dim hover:border-copper hover:text-copper transition-all">
                      Rapor İndir
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "listings" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-display font-bold uppercase text-cream text-xl">
                    İlan Yönetimi
                  </h1>
                  <button className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-2.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all">
                    + Yeni İlan
                  </button>
                </div>
                <div className="bg-bg-panel border border-hairline rounded-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-hairline flex items-center gap-4">
                    <input
                      type="text"
                      placeholder="İlan ara..."
                      className="input-field max-w-[300px]"
                    />
                    <select className="input-field max-w-[150px]">
                      <option>Tüm Durumlar</option>
                      <option>Onaylı</option>
                      <option>Beklemede</option>
                      <option>Reddedilen</option>
                    </select>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-hairline">
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3">
                          Plaka
                        </th>
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3">
                          Araç
                        </th>
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3 hidden sm:table-cell">
                          Fiyat
                        </th>
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3">
                          Durum
                        </th>
                        <th className="text-right font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3">
                          İşlem
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {recentListings.map((listing, i) => (
                        <tr key={i} className="hover:bg-bg-panel-hi transition-colors">
                          <td className="px-5 py-3">
                            <span className="font-mono text-[0.66rem] text-bg bg-cream px-2 py-1 rounded-sm">
                              {listing.plate}
                            </span>
                          </td>
                          <td className="px-5 py-3 font-body text-sm text-cream">
                            {listing.car}
                          </td>
                          <td className="px-5 py-3 font-mono text-sm text-copper hidden sm:table-cell">
                            Teklif Üzerine
                          </td>
                          <td className="px-5 py-3">
                            <span
                              className={`font-mono text-[0.6rem] tracking-widest uppercase px-2 py-1 rounded-sm ${
                                listing.status === "Onaylı"
                                  ? "bg-[#33473A] text-[#5A9E6F]"
                                  : "bg-copper/20 text-copper"
                              }`}
                            >
                              {listing.status}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-right">
                            <button className="font-mono text-[0.66rem] text-chrome hover:text-copper transition-colors">
                              Düzenle
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-display font-bold uppercase text-cream text-xl">
                    Üye Yönetimi
                  </h1>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Üye ara..."
                      className="input-field max-w-[250px]"
                    />
                    <button className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-2.5 rounded-sm border border-hairline text-cream-dim hover:border-copper hover:text-copper transition-all">
                      Dışa Aktar
                    </button>
                  </div>
                </div>
                <div className="bg-bg-panel border border-hairline rounded-sm overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-hairline">
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3">
                          Kullanıcı
                        </th>
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3 hidden sm:table-cell">
                          E-posta
                        </th>
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3">
                          Şehir
                        </th>
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3">
                          Araç Sayısı
                        </th>
                        <th className="text-left font-mono text-[0.66rem] tracking-widest uppercase text-chrome px-5 py-3">
                          Durum
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { name: "Ahmet Yılmaz", email: "ahmet@mail.com", city: "İstanbul", cars: 3, active: true },
                        { name: "Elif Kaya", email: "elif@mail.com", city: "Ankara", cars: 2, active: true },
                        { name: "Mehmet Demir", email: "mehmet@mail.com", city: "İzmir", cars: 1, active: true },
                        { name: "Ayşe Çelik", email: "ayse@mail.com", city: "İstanbul", cars: 0, active: false },
                      ].map((user, i) => (
                        <tr key={i} className="hover:bg-bg-panel-hi transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-copper/20 border border-copper/30 flex items-center justify-center">
                                <span className="font-mono text-[0.6rem] text-copper">
                                  {user.name.charAt(0)}
                                </span>
                              </div>
                              <span className="font-body text-sm text-cream">
                                {user.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-5 py-3 font-mono text-xs text-chrome hidden sm:table-cell">
                            {user.email}
                          </td>
                          <td className="px-5 py-3 font-mono text-xs text-cream-dim">
                            {user.city}
                          </td>
                          <td className="px-5 py-3 font-mono text-sm text-copper">
                            {user.cars}
                          </td>
                          <td className="px-5 py-3">
                            <span
                              className={`font-mono text-[0.6rem] tracking-widest uppercase px-2 py-1 rounded-sm ${
                                user.active
                                  ? "bg-[#33473A] text-[#5A9E6F]"
                                  : "bg-redline/20 text-redline"
                              }`}
                            >
                              {user.active ? "Aktif" : "Pasif"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "events" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-display font-bold uppercase text-cream text-xl">
                    Etkinlik Yönetimi
                  </h1>
                  <button className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-2.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all">
                    + Yeni Etkinlik
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "İstanbul Klasik Otomobil Buluşması", date: "15 Ağustos 2026", location: "Emirgan Korusu", attendees: 156 },
                    { title: "Ankara Retro Araç Festivali", date: "6 Eylül 2026", location: "AOÇ Açık Alan", attendees: 89 },
                    { title: "Bodrum Sahil Konvoyu", date: "20 Eylül 2026", location: "Gündoğan → Yalıkavak", attendees: 45 },
                  ].map((event, i) => (
                    <div
                      key={i}
                      className="bg-bg-panel border border-hairline rounded-sm p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <h3 className="font-display font-bold uppercase text-cream text-lg mb-1">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-4 font-mono text-xs text-chrome">
                          <span>{event.date}</span>
                          <span className="w-px h-3 bg-hairline" />
                          <span>{event.location}</span>
                          <span className="w-px h-3 bg-hairline" />
                          <span>{event.attendees} katılımcı</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="font-mono text-[0.66rem] tracking-widest uppercase px-4 py-2 rounded-sm border border-hairline text-cream-dim hover:border-copper hover:text-copper transition-all">
                          Düzenle
                        </button>
                        <button className="font-mono text-[0.66rem] tracking-widest uppercase px-4 py-2 rounded-sm border border-hairline text-chrome hover:border-redline hover:text-redline transition-all">
                          Sil
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h1 className="font-display font-bold uppercase text-cream text-xl">
                  Site Ayarları
                </h1>
                <div className="bg-bg-panel border border-hairline rounded-sm p-6 space-y-6">
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      Site Başlığı
                    </label>
                    <input
                      type="text"
                      defaultValue="Klasik Arabalar — Miras Devam Ediyor"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      Site Açıklaması
                    </label>
                    <textarea
                      defaultValue="Restore edilmiş klasikleri keşfet, alım-satım ilanlarına göz at, buluşmalara katıl ve bu mirası yaşatan topluluğun bir parçası ol."
                      className="input-field min-h-[100px] resize-y"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome block mb-2">
                      İletişim E-postası
                    </label>
                    <input
                      type="email"
                      defaultValue="info@klasikarabalar.org"
                      className="input-field"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-hairline">
                    <span className="font-mono text-[0.7rem] text-cream-dim">
                      Bakım modu
                    </span>
                    <button className="w-12 h-6 rounded-full bg-hairline relative transition-colors hover:bg-copper/50">
                      <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-chrome transition-transform" />
                    </button>
                  </div>
                  <button className="font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all">
                    Kaydet
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
