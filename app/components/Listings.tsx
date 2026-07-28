"use client";

import { useReveal } from "../hooks/useReveal";

const listings = [
  {
    plate: "34 KA 968",
    title: "Porsche 911",
    meta: "1968 · 145.000 km · Manuel",
    location: "İstanbul",
    price: "Teklif Üzerine",
  },
  {
    plate: "35 KA 959",
    title: "Mercedes-Benz 190 SL",
    meta: "1959 · 88.000 km · Manuel",
    location: "İzmir",
    price: "4.850.000 ₺",
  },
  {
    plate: "06 KA 971",
    title: "Anadol STC-16",
    meta: "1971 · 62.000 km · Manuel",
    location: "Ankara",
    price: "610.000 ₺",
  },
];

export function Listings() {
  const headRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section id="ilanlar" className="relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          ref={headRef}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-5 mb-9 pt-[70px] border-t border-hairline"
        >
          <div>
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper">
              İlanlar
            </span>
            <h2 className="font-display font-bold uppercase text-cream text-[clamp(1.9rem,3.6vw,2.6rem)] mt-2">
              Alım · Satım
            </h2>
          </div>
          <p className="text-cream-dim max-w-[40ch] text-[0.95rem]">
            Doğrulanmış sahiplerden güncel klasik araç ilanları.
          </p>
        </div>

        <div ref={listRef} className="reveal">
          {listings.map((listing, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto_auto] gap-4 md:gap-6 items-center py-5 border-b border-hairline ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <span className="font-mono text-[0.72rem] text-bg bg-cream border border-chrome rounded-sm px-2.5 py-1.5 tracking-wide whitespace-nowrap w-fit">
                {listing.plate}
              </span>
              <div>
                <h3 className="font-body font-semibold text-cream text-lg">
                  {listing.title}
                </h3>
                <span className="font-mono text-xs text-cream-dim">
                  {listing.meta}
                </span>
              </div>
              <span className="font-mono text-sm text-chrome whitespace-nowrap">
                {listing.location}
              </span>
              <span className="font-mono text-sm text-copper whitespace-nowrap">
                {listing.price}
              </span>
              <button className="font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-sm border border-chrome text-cream hover:border-copper hover:text-copper transition-all">
                İlana Git
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}