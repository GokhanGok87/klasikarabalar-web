"use client";

import { useReveal } from "../../hooks/useReveal";

const brands = [
  "Tümü",
  "Ford",
  "Chevrolet",
  "Jaguar",
  "Anadol",
  "VW",
  "Alfa Romeo",
  "Porsche",
  "Mercedes",
];

const cars = [
  {
    brand: "Ford",
    model: "Mustang Fastback",
    year: "1965",
    engine: "V8 4.7L",
    tag: "Amerikan · Kas Araba",
    description:
      "Amerikan kas araba döneminin ikonu; orijinal Rangoon Red boyasıyla tam restore.",
    gradient: "linear-gradient(135deg,#3B2A1E,#1C1913)",
    km: "78.000",
    status: "Satılık",
  },
  {
    brand: "Chevrolet",
    model: "Bel Air",
    year: "1957",
    engine: "Turbo-Fire V8",
    tag: "Amerikan · Sedan",
    description:
      "Krom detayları ve iki tonlu boyasıyla 50'lerin Amerikan tasarım dilinin zirvesi.",
    gradient: "linear-gradient(135deg,#2E3A2C,#1C1913)",
    km: "52.000",
    status: "Koleksiyonda",
  },
  {
    brand: "Jaguar",
    model: "E-Type",
    year: "1963",
    engine: "3.8L Straight-6",
    tag: "İngiliz · Spor",
    description:
      'Enzo Ferrari\'nin "en güzel araba" dediği uzun kaputlu İngiliz spor otomobili.',
    gradient: "linear-gradient(135deg,#4A2E22,#1C1913)",
    km: "91.000",
    status: "Satılık",
  },
  {
    brand: "Anadol",
    model: "A1",
    year: "1972",
    engine: "1.3L",
    tag: "Türk · İlk Yerli Otomobil",
    description:
      "Türkiye'nin ilk seri üretim otomobili; koleksiyonerler için nostaljik bir başlangıç.",
    gradient: "linear-gradient(135deg,#2C3A46,#1C1913)",
    km: "45.000",
    status: "Satılık",
  },
  {
    brand: "VW",
    model: "Kaplumbağa",
    year: "1959",
    engine: "1.2L Boxer",
    tag: "Alman · Kompakt",
    description:
      "Dünyanın en çok üretilen otomobillerinden biri; sade tasarımıyla zamansız bir klasik.",
    gradient: "linear-gradient(135deg,#3A2820,#1C1913)",
    km: "120.000",
    status: "Satılık",
  },
  {
    brand: "Alfa Romeo",
    model: "Giulia Sprint GT",
    year: "1966",
    engine: "1.6L Twin-Cam",
    tag: "İtalyan · Spor",
    description:
      "Bertone çizgileriyle İtalyan zarafetinin yol tutuşla buluştuğu bir spor kupa.",
    gradient: "linear-gradient(135deg,#402A2E,#1C1913)",
    km: "67.000",
    status: "Koleksiyonda",
  },
  {
    brand: "Porsche",
    model: "911",
    year: "1968",
    engine: "2.0L Flat-6",
    tag: "Alman · Spor",
    description:
      "Air-soğutmalı motoruyla Porsche efsanesinin temel taşlarından biri.",
    gradient: "linear-gradient(135deg,#2A2A30,#1C1913)",
    km: "145.000",
    status: "Satılık",
  },
  {
    brand: "Mercedes",
    model: "190 SL",
    year: "1959",
    engine: "1.9L Inline-4",
    tag: "Alman · Cabrio",
    description:
      "Zarif çizgileri ve open-top sürüş keyfiyle 50'lerin lüks spor otomobili.",
    gradient: "linear-gradient(135deg,#2E2A24,#1C1913)",
    km: "88.000",
    status: "Satılık",
  },
  {
    brand: "Ford",
    model: "Bronco",
    year: "1971",
    engine: "5.0L V8",
    tag: "Amerikan · SUV",
    description:
      "Off-road'un babası; sert hatları ve güçlü motoruyla efsanevi arazi aracı.",
    gradient: "linear-gradient(135deg,#342A20,#1C1913)",
    km: "95.000",
    status: "Satılık",
  },
];

function CarSilhouette() {
  return (
    <svg
      viewBox="0 0 120 50"
      fill="none"
      stroke="#ECE4D3"
      strokeWidth="1.5"
      className="w-3/5 opacity-80"
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

export default function GaleriPage() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="relative z-[1] pt-32 pb-16 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={headRef} className="reveal">
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
              Ana Sayfa / Galeri
            </span>
            <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] mt-3">
              Koleksiyondan
              <br />
              <span className="text-copper">Seçmeler</span>
            </h1>
            <p className="font-body text-cream-dim text-lg mt-4 max-w-[50ch]">
              Farklı kıtalardan, farklı çağlardan; restore edilmiş ya da orijinal
              haliyle korunmuş klasikler.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative z-[1] py-6 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="flex gap-2 flex-wrap">
            {brands.map((brand) => (
              <button
                key={brand}
                className="font-mono text-[0.7rem] tracking-widest uppercase px-4 py-2 rounded-full border border-hairline text-cream-dim hover:border-copper hover:text-copper transition-all first:border-copper first:bg-copper first:text-bg"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Grid */}
      <section className="relative z-[1] py-12">
        <div className="max-w-[1120px] mx-auto px-7">
          <div
            ref={gridRef}
            className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cars.map((car) => (
              <article
                key={`${car.brand}-${car.model}`}
                className="bg-bg-panel border border-hairline rounded-sm overflow-hidden transition-all hover:-translate-y-1 hover:border-copper group cursor-pointer"
              >
                <div
                  className="h-[160px] relative flex items-center justify-center border-b border-hairline"
                  style={{ background: car.gradient }}
                >
                  <CarSilhouette />
                  <span className="absolute top-3 right-3 font-mono text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-sm bg-bg/80 text-copper border border-hairline">
                    {car.status}
                  </span>
                </div>
                <div className="p-5">
                  <span className="font-mono text-[0.66rem] tracking-widest uppercase text-copper mb-1.5 block">
                    {car.tag}
                  </span>
                  <h3 className="font-display font-bold uppercase text-cream text-xl mb-1">
                    {car.brand} {car.model}
                  </h3>
                  <div className="flex items-center gap-3 font-mono text-chrome text-xs mb-3">
                    <span>{car.year}</span>
                    <span className="w-px h-3 bg-hairline" />
                    <span>{car.engine}</span>
                    <span className="w-px h-3 bg-hairline" />
                    <span>{car.km} km</span>
                  </div>
                  <p className="text-cream-dim text-[0.88rem] leading-relaxed">
                    {car.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-hairline">
                    <span className="font-mono text-[0.7rem] tracking-widest text-copper group-hover:tracking-[0.3em] transition-all">
                      Detayları İncele →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
