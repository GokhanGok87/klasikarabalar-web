"use client";

import { useReveal } from "../../hooks/useReveal";

const events = [
  {
    date: "15 Ağustos 2026",
    title: "İstanbul Klasik Otomobil Buluşması",
    description: "Emirgan Korusu — 80'den fazla klasik araç, aile dostu etkinlik.",
  },
  {
    date: "6 Eylül 2026",
    title: "Ankara Retro Araç Festivali",
    description:
      "AOÇ açık alan — teşhir, konvoy ve restorasyon atölyesi standları.",
  },
  {
    date: "20 Eylül 2026",
    title: "Bodrum Sahil Konvoyu",
    description:
      "Gündoğan'dan Yalıkavak'a sahil şeridi boyunca gün batımı konvoyu.",
  },
  {
    date: "11 Ekim 2026",
    title: "İzmir Klasikler Fuarı",
    description: "Kültürpark — alım-satım standları ve yedek parça pazarı.",
  },
  {
    date: "25 Kasım 2026",
    title: "İstanbul Klasik Otomobil Müzayedesi",
    description: "Laleli — nadir klasik araçların açık artırması.",
  },
];

export function Events() {
  const headRef = useReveal<HTMLDivElement>();
  const timelineRef = useReveal<HTMLDivElement>();

  return (
    <section id="etkinlikler" className="relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          ref={headRef}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-5 mb-9 pt-[70px] border-t border-hairline"
        >
          <div>
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper">
              Etkinlikler
            </span>
            <h2 className="font-display font-bold uppercase text-cream text-[clamp(1.9rem,3.6vw,2.6rem)] mt-2">
              Buluşma Takvimi
            </h2>
          </div>
          <p className="text-cream-dim max-w-[40ch] text-[0.95rem]">
            Yaklaşan konvoylar, fuarlar ve klasik araç buluşmaları.
          </p>
        </div>

        <div
          ref={timelineRef}
          className="reveal relative pl-7 border-l border-hairline"
        >
          {events.map((event, index) => (
            <div key={index} className="relative pb-9">
              <div className="absolute -left-[31px] top-1 w-[9px] h-[9px] rounded-full bg-copper shadow-[0_0_0_3px_rgba(198,129,63,0.18)]" />
              <span className="font-mono text-xs text-copper tracking-wide mb-1 block">
                {event.date}
              </span>
              <h3 className="font-body font-semibold text-cream text-lg mb-1">
                {event.title}
              </h3>
              <p className="text-cream-dim text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
