"use client";

import { useReveal } from "../hooks/useReveal";

const cars = [
  {
    brand: "Ford",
    model: "Mustang Fastback",
    year: "1965 · V8 4.7L",
    tag: "Amerikan · Kas Araba",
    description:
      "Amerikan kas araba döneminin ikonu; orijinal Rangoon Red boyasıyla tam restore.",
    gradient: "linear-gradient(135deg,#3B2A1E,#1C1913)",
  },
  {
    brand: "Chevrolet",
    model: "Bel Air",
    year: "1957 · Turbo-Fire V8",
    tag: "Amerikan · Sedan",
    description:
      "Krom detayları ve iki tonlu boyasıyla 50'lerin Amerikan tasarım dilinin zirvesi.",
    gradient: "linear-gradient(135deg,#2E3A2C,#1C1913)",
  },
  {
    brand: "Jaguar",
    model: "E-Type",
    year: "1963 · 3.8L Straight-6",
    tag: "İngiliz · Spor",
    description:
      'Enzo Ferrari\'nin "en güzel araba" dediği uzun kaputlu İngiliz spor otomobili.',
    gradient: "linear-gradient(135deg,#4A2E22,#1C1913)",
  },
  {
    brand: "Anadol",
    model: "A1",
    year: "1972 · 1.3L",
    tag: "Türk · İlk Yerli Otomobil",
    description:
      "Türkiye'nin ilk seri üretim otomobili; koleksiyonerler için nostaljik bir başlangıç.",
    gradient: "linear-gradient(135deg,#2C3A46,#1C1913)",
  },
  {
    brand: "VW",
    model: "Kaplumbağa",
    year: "1959 · 1.2L Boxer",
    tag: "Alman · Kompakt",
    description:
      "Dünyanın en çok üretilen otomobillerinden biri; sade tasarımıyla zamansız bir klasik.",
    gradient: "linear-gradient(135deg,#3A2820,#1C1913)",
  },
  {
    brand: "Alfa Romeo",
    model: "Giulia Sprint GT",
    year: "1966 · 1.6L Twin-Cam",
    tag: "İtalyan · Spor",
    description:
      "Bertone çizgileriyle İtalyan zarafetinin yol tutuşla buluştuğu bir spor kupa.",
    gradient: "linear-gradient(135deg,#402A2E,#1C1913)",
  },
];

function CarSilhouette() {
  return (
    <svg
      viewBox="0 0 120 50"
      fill="none"
      stroke="#ECE4D3"
      strokeWidth="2"
      className="w-3/5 opacity-90"
    >
      <path
        d="M8 34 L18 18 L46 14 L70 14 L96 24 L112 26 L112 36 L100 36 M20 36 L92 36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="37" r="6" />
      <circle cx="90" cy="37" r="6" />
    </svg>
  );
}

export function Gallery() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="galeri" className="relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          ref={headRef}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-5 mb-9 pt-[70px] border-t border-hairline"
        >
          <div>
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper">
              Galeri
            </span>
            <h2 className="font-display font-bold uppercase text-cream text-[clamp(1.9rem,3.6vw,2.6rem)] mt-2">
              Koleksiyondan Seçmeler
            </h2>
          </div>
          <p className="text-cream-dim max-w-[40ch] text-[0.95rem]">
            Farklı kıtalardan, farklı çağlardan; restore edilmiş ya da orijinal
            haliyle korunmuş klasikler.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cars.map((car) => (
            <article
              key={`${car.brand}-${car.model}`}
              className="bg-bg-panel border border-hairline rounded-sm overflow-hidden transition-all hover:-translate-y-1 hover:border-copper"
            >
              <div
                className="h-[150px] relative flex items-center justify-center border-b border-hairline"
                style={{ background: car.gradient }}
              >
                <CarSilhouette />
              </div>
              <div className="p-5">
                <span className="font-mono text-[0.66rem] tracking-widest uppercase text-copper mb-1.5 block">
                  {car.tag}
                </span>
                <h3 className="font-display font-bold uppercase text-cream text-xl mb-1.5">
                  {car.brand} {car.model}
                </h3>
                <div className="font-mono text-chrome text-xs mb-2.5">
                  {car.year}
                </div>
                <p className="text-cream-dim text-[0.92rem]">
                  {car.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}