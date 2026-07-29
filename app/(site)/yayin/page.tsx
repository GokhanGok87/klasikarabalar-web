"use client";

import { useReveal } from "../../hooks/useReveal";

const featuredPost = {
  category: "Restorasyon",
  title: "Orijinal Parça mı, Yeniden Üretim mi? Restorasyonun İnceliği",
  excerpt:
    "Bir klasiği restore ederken değeri koruyan kararlar ile pratik çözümler arasındaki ince çizgiyi inceliyoruz. Orijinal parça bulmanın zorlukları, yeniden üretim parçaların avantajları ve koleksiyoner değerini etkileyen faktörler hakkında kapsamlı bir analiz.",
  date: "20 Temmuz 2026",
  readTime: "12 dk",
};

const posts = [
  {
    category: "Miras",
    title: "Anadol'un Hikayesi: 1970'lerin Unutulmaz Türk Otomobili",
    excerpt:
      "Türkiye'nin otomotiv tarihinde bir dönüm noktası olan Anadol'un doğuşu ve mirası.",
    date: "15 Temmuz 2026",
    readTime: "8 dk",
  },
  {
    category: "Rehber",
    title: "Klasik Araç Sigortası Alırken Dikkat Edilmesi Gerekenler",
    excerpt:
      "Kilometre sınırı, ekspertiz raporu ve değer tespiti konusunda bilmeniz gereken temel noktalar.",
    date: "10 Temmuz 2026",
    readTime: "6 dk",
  },
  {
    category: "Teknoloji",
    title: "Yenilikçi Elektrikli Araçların Geleceği",
    excerpt:
      "Elektrikli araçlar, sürdürülebilir ulaşım çözümleri geliştirmek için ne gibi yenilikler sunuyor?",
    date: "5 Temmuz 2026",
    readTime: "10 dk",
  },
  {
    category: "Restorasyon",
    title: "Boya Seçimi: Hangi Renk Klasiklerde Daha Değerli?",
    excerpt:
      "Orijinal renk kodları, nadir renkler ve koleksiyonerlerin tercih ettiği boyama seçenekleri.",
    date: "1 Temmuz 2026",
    readTime: "7 dk",
  },
  {
    category: "Miras",
    title: "İtalyan Spor Otomobillerinin Altın Çağı",
    excerpt:
      "Ferrari, Maserati ve Alfa Romeo'nun 1950-1970 arası dönemdeki efsanevi modelleri.",
    date: "25 Haziran 2026",
    readTime: "11 dk",
  },
  {
    category: "Rehber",
    title: "Klasik Araç Bakımında 10 Altın Kural",
    excerpt:
      "Motor yağı, bujiler, frenler ve daha fazlası: düzenli bakımın püf noktaları.",
    date: "20 Haziran 2026",
    readTime: "5 dk",
  },
];

const categories = [
  "Tümü",
  "Restorasyon",
  "Miras",
  "Rehber",
  "Teknoloji",
];

export default function YayinPage() {
  const headRef = useReveal<HTMLDivElement>();
  const featuredRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="relative z-[1] pt-32 pb-16 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={headRef} className="reveal">
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
              Ana Sayfa / Yayın
            </span>
            <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] mt-3">
              Atölyeden
              <br />
              <span className="text-copper">Notlar</span>
            </h1>
            <p className="font-body text-cream-dim text-lg mt-4 max-w-[50ch]">
              Restorasyon, bakım ve klasik araç kültürü üzerine yazılar.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative z-[1] py-6 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-mono text-[0.7rem] tracking-widest uppercase px-4 py-2 rounded-full border border-hairline text-cream-dim hover:border-copper hover:text-copper transition-all first:border-copper first:bg-copper first:text-bg"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative z-[1] py-12">
        <div className="max-w-[1120px] mx-auto px-7">
          <div
            ref={featuredRef}
            className="reveal bg-bg-panel border border-hairline rounded-sm overflow-hidden hover:border-copper transition-colors cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">
              <div className="h-[200px] md:h-auto bg-gradient-to-br from-[#3B2A1E] to-bg-panel flex items-center justify-center border-b md:border-b-0 md:border-r border-hairline">
                <svg
                  viewBox="0 0 120 80"
                  fill="none"
                  stroke="#C6813F"
                  strokeWidth="1.5"
                  className="w-1/2 opacity-60"
                >
                  <rect
                    x="10"
                    y="10"
                    width="100"
                    height="60"
                    rx="4"
                    strokeDasharray="4 4"
                  />
                  <line x1="10" y1="25" x2="110" y2="25" />
                  <line x1="10" y1="55" x2="110" y2="55" />
                  <circle cx="60" cy="40" r="12" />
                </svg>
              </div>
              <div className="p-8 md:p-10">
                <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper mb-3 block">
                  {featuredPost.category} · Öne Çıkan
                </span>
                <h2 className="font-body font-semibold text-cream text-2xl md:text-3xl leading-tight mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-cream-dim text-[0.95rem] leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[0.7rem] text-chrome">
                    {featuredPost.date}
                  </span>
                  <span className="w-px h-3 bg-hairline" />
                  <span className="font-mono text-[0.7rem] text-chrome">
                    {featuredPost.readTime} okuma
                  </span>
                </div>
                <span className="inline-block mt-6 font-mono text-[0.72rem] tracking-widest text-copper">
                  Devamını Oku →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative z-[1] pb-16">
        <div className="max-w-[1120px] mx-auto px-7">
          <div
            ref={gridRef}
            className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {posts.map((post, index) => (
              <article
                key={index}
                className="border-t-2 border-copper-dim pt-5 transition-colors hover:border-copper cursor-pointer group"
              >
                <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper mb-2.5 block">
                  {post.category}
                </span>
                <h3 className="font-body font-semibold text-cream text-lg leading-tight mb-2.5 group-hover:text-copper transition-colors">
                  {post.title}
                </h3>
                <p className="text-cream-dim text-[0.92rem] mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-mono text-[0.66rem] text-chrome">
                    {post.date}
                  </span>
                  <span className="w-px h-3 bg-hairline" />
                  <span className="font-mono text-[0.66rem] text-chrome">
                    {post.readTime}
                  </span>
                </div>
                <span className="font-mono text-[0.72rem] tracking-widest text-copper group-hover:tracking-[0.3em] transition-all">
                  Devamını Oku →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
