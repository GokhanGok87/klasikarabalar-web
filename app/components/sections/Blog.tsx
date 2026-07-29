"use client";

import { useReveal } from "../../hooks/useReveal";

const posts = [
  {
    category: "Restorasyon",
    title: "Orijinal Parça mı, Yeniden Üretim mi? Restorasyonun İnceliği",
    excerpt:
      "Bir klasiği restore ederken değeri koruyan kararlar ile pratik çözümler arasındaki ince çizgiyi inceliyoruz.",
  },
  {
    category: "Miras",
    title: "Anadol'un Hikayesi: 1970'lerin Unutulmaz Türk Otomobili",
    excerpt:
      "Türkiye'nin otomotiv tarihinde bir dönüm noktası olan Anadol'un doğuşu ve mirası.",
  },
  {
    category: "Rehber",
    title: "Klasik Araç Sigortası Alırken Dikkat Edilmesi Gerekenler",
    excerpt:
      "Kilometre sınırı, ekspertiz raporu ve değer tespiti konusunda bilmeniz gereken temel noktalar.",
  },
  {
    category: "Teknoloji",
    title: "Yenilikçi Elektrikli Araçların Geleceği",
    excerpt:
      "Elektrikli araçlar, sürdürülebilir ulaşım çözümleri geliştirmek için ne gibi yenilikler sunuyor?",
  },
];

export function Blog() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="yayin" className="relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          ref={headRef}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-5 mb-9 pt-[70px] border-t border-hairline"
        >
          <div>
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper">
              Yayın
            </span>
            <h2 className="font-display font-bold uppercase text-cream text-[clamp(1.9rem,3.6vw,2.6rem)] mt-2">
              Atölyeden Notlar
            </h2>
          </div>
          <p className="text-cream-dim max-w-[40ch] text-[0.95rem]">
            Restorasyon, bakım ve klasik araç kültürü üzerine yazılar.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => (
            <article
              key={index}
              className="border-t-2 border-copper-dim pt-5 transition-colors hover:border-copper"
            >
              <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper mb-2.5 block">
                {post.category}
              </span>
              <h3 className="font-body font-semibold text-cream text-xl leading-tight mb-2.5">
                {post.title}
              </h3>
              <p className="text-cream-dim text-[0.92rem] mb-3.5">
                {post.excerpt}
              </p>
              <span className="font-mono text-[0.72rem] tracking-widest text-copper">
                Devamını Oku →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
