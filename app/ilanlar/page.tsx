"use client";

import { useReveal } from "../hooks/useReveal";

const listings = [
  {
    plate: "34 KA 968",
    brand: "Porsche",
    model: "911",
    year: "1968",
    km: "145.000",
    transmission: "Manuel",
    location: "İstanbul",
    price: "Teklif Üzerine",
    status: "Satılık",
    gradient: "linear-gradient(135deg,#2A2A30,#1C1913)",
  },
  {
    plate: "35 KA 959",
    brand: "Mercedes-Benz",
    model: "190 SL",
    year: "1959",
    km: "88.000",
    transmission: "Manuel",
    location: "İzmir",
    price: "4.850.000 ₺",
    status: "Satılık",
    gradient: "linear-gradient(135deg,#2E2A24,#1C1913)",
  },
  {
    plate: "06 KA 971",
    brand: "Anadol",
    model: "STC-16",
    year: "1971",
    km: "62.000",
    transmission: "Manuel",
    location: "Ankara",
    price: "610.000 ₺",
    status: "Satılık",
    gradient: "linear-gradient(135deg,#2C3A46,#1C1913)",
  },
  {
    plate: "34 FB 123",
    brand: "Ford",
    model: "Mustang Fastback",
    year: "1965",
    km: "78.000",
    transmission: "Manuel",
    location: "İstanbul",
    price: "3.200.000 ₺",
    status: "Satılık",
    gradient: "linear-gradient(135deg,#3B2A1E,#1C1913)",
  },
  {
    plate: "06 AK 456",
    brand: "Chevrolet",
    model: "Bel Air",
    year: "1957",
    km: "52.000",
    transmission: "Manuel",
    location: "Ankara",
    price: "2.750.000 ₺",
    status: "Satılık",
    gradient: "linear-gradient(135deg,#2E3A2C,#1C1913)",
  },
  {
    plate: "35 RA 789",
    brand: "Jaguar",
    model: "E-Type",
    year: "1963",
    km: "91.000",
    transmission: "Manuel",
    location: "İzmir",
    price: "5.400.000 ₺",
    status: "Satılık",
    gradient: "linear-gradient(135deg,#4A2E22,#1C1913)",
  },
  {
    plate: "34 VD 321",
    brand: "VW",
    model: "Kaplumbağa",
    year: "1959",
    km: "120.000",
    transmission: "Manuel",
    location: "İstanbul",
    price: "480.000 ₺",
    status: "Satılık",
    gradient: "linear-gradient(135deg,#3A2820,#1C1913)",
  },
  {
    plate: "06 AL 654",
    brand: "Alfa Romeo",
    model: "Giulia Sprint GT",
    year: "1966",
    km: "67.000",
    transmission: "Manuel",
    location: "Ankara",
    price: "1.900.000 ₺",
    status: "Satılık",
    gradient: "linear-gradient(135deg,#402A2E,#1C1913)",
  },
];

const sortOptions = ["En Yeni", "Fiyat (Artan)", "Fiyat (Azalan)", "Yıl (Eski)"];
const locationOptions = ["Tüm Şehirler", "İstanbul", "Ankara", "İzmir"];

export default function IlanlarPage() {
  const headRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="relative z-[1] pt-32 pb-16 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={headRef} className="reveal">
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
              Ana Sayfa / İlanlar
            </span>
            <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] mt-3">
              Alım ·
              <br />
              <span className="text-copper">Satım</span>
            </h1>
            <p className="font-body text-cream-dim text-lg mt-4 max-w-[50ch]">
              Doğrulanmış sahiplerden güncel klasik araç ilanları.
            </p>
          </div>
        </div>
      </section>

      {/* Sort Bar */}
      <section className="relative z-[1] py-6 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome">
              Sırala:
            </span>
            <div className="flex gap-2 flex-wrap">
              {sortOptions.map((opt, i) => (
                <button
                  key={opt}
                  className={`font-mono text-[0.7rem] tracking-widest uppercase px-4 py-2 rounded-full border transition-all ${
                    i === 0
                      ? "border-copper bg-copper text-bg"
                      : "border-hairline text-cream-dim hover:border-copper hover:text-copper"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <span className="w-px h-5 bg-hairline hidden sm:block" />
            <span className="font-mono text-[0.7rem] tracking-widest uppercase text-chrome hidden sm:block">
              Şehir:
            </span>
            <div className="flex gap-2 flex-wrap">
              {locationOptions.map((opt, i) => (
                <button
                  key={opt}
                  className={`font-mono text-[0.7rem] tracking-widest uppercase px-4 py-2 rounded-full border transition-all ${
                    i === 0
                      ? "border-copper bg-copper text-bg"
                      : "border-hairline text-cream-dim hover:border-copper hover:text-copper"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="relative z-[1] py-12">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={listRef} className="reveal">
            {listings.map((listing, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto_auto] gap-4 md:gap-6 items-center py-6 border-b border-hairline ${
                  index === 0 ? "border-t" : ""
                } hover:bg-bg-panel/50 transition-colors cursor-pointer group`}
              >
                {/* Plaka */}
                <span className="font-mono text-[0.72rem] text-bg bg-cream border border-chrome rounded-sm px-3 py-1.5 tracking-wide whitespace-nowrap w-fit">
                  {listing.plate}
                </span>

                {/* Araç Bilgisi */}
                <div>
                  <h3 className="font-display font-bold uppercase text-cream text-lg group-hover:text-copper transition-colors">
                    {listing.brand} {listing.model}
                  </h3>
                  <div className="flex items-center gap-3 font-mono text-xs text-cream-dim mt-1">
                    <span>{listing.year}</span>
                    <span className="w-px h-3 bg-hairline" />
                    <span>{listing.km} km</span>
                    <span className="w-px h-3 bg-hairline" />
                    <span>{listing.transmission}</span>
                  </div>
                </div>

                {/* Konum */}
                <span className="font-mono text-sm text-chrome whitespace-nowrap">
                  {listing.location}
                </span>

                {/* Fiyat */}
                <span className="font-mono text-sm text-copper whitespace-nowrap font-medium">
                  {listing.price}
                </span>

                {/* Buton */}
                <button className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-2.5 rounded-sm border border-chrome text-cream hover:border-copper hover:text-copper transition-all whitespace-nowrap">
                  İlana Git
                </button>
              </div>
            ))}
          </div>

          {/* Sayfalama */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button className="font-mono text-xs w-9 h-9 flex items-center justify-center rounded-sm border border-hairline text-chrome hover:border-copper hover:text-copper transition-all">
              ←
            </button>
            <button className="font-mono text-xs w-9 h-9 flex items-center justify-center rounded-sm border border-copper bg-copper text-bg">
              1
            </button>
            <button className="font-mono text-xs w-9 h-9 flex items-center justify-center rounded-sm border border-hairline text-chrome hover:border-copper hover:text-copper transition-all">
              2
            </button>
            <button className="font-mono text-xs w-9 h-9 flex items-center justify-center rounded-sm border border-hairline text-chrome hover:border-copper hover:text-copper transition-all">
              3
            </button>
            <button className="font-mono text-xs w-9 h-9 flex items-center justify-center rounded-sm border border-hairline text-chrome hover:border-copper hover:text-copper transition-all">
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
