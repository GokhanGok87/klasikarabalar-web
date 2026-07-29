"use client";

import { useReveal } from "../../hooks/useReveal";

const stats = [
  { value: "2.400+", label: "KAYITLI ÜYE" },
  { value: "640", label: "GALERİDEKİ ARAÇ" },
  { value: "38", label: "ŞEHİRDE TEMSİLCİ" },
  { value: "1955", label: "EN ESKİ MODEL YILI" },
];

const steps = [
  {
    num: "01",
    title: "Üye Ol",
    description:
      "Ücretsiz hesap oluştur. Profil bilgilerini doldur ve tutkunu paylaşmaya başla.",
  },
  {
    num: "02",
    title: "Aracını Ekle",
    description:
      "Klasik aracının fotoğraflarını yükle, özelliklerini gir ve koleksiyonuna davet et.",
  },
  {
    num: "03",
    title: "Topluluğa Katıl",
    description:
      "Buluşmalara katıl, forumlarda tartış, diğer meraklılarla bağlantı kur.",
  },
];

const values = [
  {
    title: "Mirası Koruyoruz",
    description:
      "Klasik otomobiller sadece araç değil, birer kültür mirasıdır. Bu mirası gelecek nesillere taşıyoruz.",
  },
  {
    title: "Bilgiyi Paylaşıyoruz",
    description:
      "Restorasyon teknikleri, bakım ipuçları ve uzman görüşleriyle topluluğumuzu güçlendiriyoruz.",
  },
  {
    title: "Güvenilir Ticaret",
    description:
      "Doğrulanmış üyeler, detaylı araç geçmişi ve şeffaf fiyatlandırma ile güvenli alım-satım.",
  },
  {
    title: "Etkinlikler",
    description:
      "Buluşmalar, konvoylar ve fuarlarla tutkumuzu yaşamaya devam ediyoruz.",
  },
];

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Koleksiyoner · İstanbul",
    text: "1965 Mustang'imi bu toplulukta buldum. Restorasyon sürecinde aldığım destek paha biçilemez.",
  },
  {
    name: "Elif Kaya",
    role: "Restoratör · Ankara",
    text: "Yedek parça bulma konusundaki yardımlaşma inanılmaz. Artık parçalarımı buradan alıyorum.",
  },
  {
    name: "Mehmet Demir",
    role: "Üye · İzmir",
    text: "Yıllardır hayalini kurduğum E-Type'a burada kavuştum. Topluluk gerçekten aile gibi.",
  },
];

export default function ToplulukPage() {
  const headRef = useReveal<HTMLDivElement>();
  const missionRef = useReveal<HTMLDivElement>();
  const stepsRef = useReveal<HTMLDivElement>();
  const valuesRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();
  const testRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="relative z-[1] pt-32 pb-16 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={headRef} className="reveal">
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
              Ana Sayfa / Topluluk
            </span>
            <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] mt-3">
              Bu Mirası
              <br />
              <span className="text-copper">Birlikte Yaşatıyoruz</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-[1] py-16">
        <div className="max-w-[1120px] mx-auto px-7">
          <div
            ref={missionRef}
            className="reveal bg-bg-panel border border-hairline rounded-sm p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-bold uppercase text-cream text-2xl md:text-3xl mb-4">
                  Meraklısından koleksiyonere, herkes için bir yer.
                </h2>
                <p className="text-cream-dim leading-relaxed mb-6">
                  Klasikarabalar.org; restoratörleri, koleksiyonerleri ve bu
                  tutkuya yeni başlayanları bir araya getiren bir topluluktur.
                  Aracını sergile, deneyimini paylaş, güvenilir alım-satım için
                  doğrulanmış üyelerle iletişime geç.
                </p>
                <button className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all">
                  Topluluğa Katıl
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="border-l-2 border-copper pl-4">
                    <b className="font-display text-3xl md:text-4xl text-cream leading-none block">
                      {stat.value}
                    </b>
                    <span className="font-mono text-[0.66rem] text-cream-dim tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="relative z-[1] pb-16">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={stepsRef} className="reveal">
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper mb-3 block">
              Nasıl Başlanır
            </span>
            <h2 className="font-display font-bold uppercase text-cream text-[clamp(1.6rem,3vw,2.2rem)] mb-10">
              Üç Kolay Adım
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="bg-bg-panel border border-hairline rounded-sm p-6 hover:border-copper transition-colors"
                >
                  <span className="font-display text-5xl text-copper/30 font-bold block mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold uppercase text-cream text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-cream-dim text-[0.92rem] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-[1] pb-16">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={valuesRef} className="reveal">
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper mb-3 block">
              Değerlerimiz
            </span>
            <h2 className="font-display font-bold uppercase text-cream text-[clamp(1.6rem,3vw,2.2rem)] mb-10">
              Neden Buradayız
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="border-t-2 border-copper-dim pt-5 hover:border-copper transition-colors"
                >
                  <h3 className="font-display font-bold uppercase text-cream text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-cream-dim text-[0.92rem] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-[1] pb-16">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={testRef} className="reveal">
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper mb-3 block">
              Üye Deneyimleri
            </span>
            <h2 className="font-display font-bold uppercase text-cream text-[clamp(1.6rem,3vw,2.2rem)] mb-10">
              Söyledikleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-bg-panel border border-hairline rounded-sm p-6"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-8 h-8 text-copper/30 mb-4"
                  >
                    <path
                      d="M10 8c-1.1 0-2 .9-2 2v4h4v-4H8c0-1.1.9-2 2-2V6c-2.2 0-4 1.8-4 4v8h8v-8c0-1.1-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2v4h4v-4h-4c0-1.1.9-2 2-2V6c-2.2 0-4 1.8-4 4v8h8v-8c0-1.1-.9-2-2-2z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-cream-dim text-[0.92rem] leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <span className="font-display font-bold text-cream block">
                      {t.name}
                    </span>
                    <span className="font-mono text-[0.66rem] text-chrome tracking-wide">
                      {t.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
