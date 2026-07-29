"use client";

import { useReveal } from "../../hooks/useReveal";

const eventsByMonth = {
  Ağustos: [
    {
      date: "15 Ağustos 2026",
      title: "İstanbul Klasik Otomobil Buluşması",
      location: "Emirgan Korusu",
      description:
        "80'den fazla klasik araç, aile dostu etkinlik. Tüm gün süren teşhir ve konuşma programları.",
      type: "Buluşma",
    },
  ],
  Eylül: [
    {
      date: "6 Eylül 2026",
      title: "Ankara Retro Araç Festivali",
      location: "AOÇ Açık Alan",
      description:
        "Teşhir, konvoy ve restorasyon atölyesi standları. Tüm gün devam eden etkinlik.",
      type: "Festival",
    },
    {
      date: "20 Eylül 2026",
      title: "Bodrum Sahil Konvoyu",
      location: "Gündoğan → Yalıkavak",
      description:
        "Sahil şeridi boyunca gün batımı konvoyu. Katılımcılar akşam yemeğinde buluşacak.",
      type: "Konvoy",
    },
  ],
  Ekim: [
    {
      date: "11 Ekim 2026",
      title: "İzmir Klasikler Fuarı",
      location: "Kültürpark",
      description:
        "Alım-satım standları ve yedek parça pazarı. 3 gün sürecek fuar etkinliği.",
      type: "Fuar",
    },
  ],
  Kasım: [
    {
      date: "25 Kasım 2026",
      title: "İstanbul Klasik Otomobil Müzayedesi",
      location: "Laleli",
      description:
        "Nadir klasik araçların açık artırması. 20'den fazla özel araç müzayedeye çıkacak.",
      type: "Müzayede",
    },
  ],
};

const typeColors: Record<string, string> = {
  Buluşma: "bg-copper",
  Festival: "bg-[#33473A]",
  Konvoy: "bg-chrome",
  Fuar: "bg-copper-dim",
  Müzayede: "bg-redline",
};

export default function EtkinliklerPage() {
  const headRef = useReveal<HTMLDivElement>();
  const timelineRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="relative z-[1] pt-32 pb-16 border-b border-hairline">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={headRef} className="reveal">
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-chrome">
              Ana Sayfa / Etkinlikler
            </span>
            <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] mt-3">
              Buluşma
              <br />
              <span className="text-copper">Takvimi</span>
            </h1>
            <p className="font-body text-cream-dim text-lg mt-4 max-w-[50ch]">
              Yaklaşan konvoylar, fuarlar ve klasik araç buluşmaları.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-[1] py-12">
        <div className="max-w-[1120px] mx-auto px-7">
          <div ref={timelineRef} className="reveal">
            {Object.entries(eventsByMonth).map(([month, events]) => (
              <div key={month} className="mb-12 last:mb-0">
                {/* Month Label */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display font-bold uppercase text-copper text-2xl">
                    {month}
                  </span>
                  <div className="flex-1 h-px bg-hairline" />
                  <span className="font-mono text-[0.66rem] tracking-widest uppercase text-chrome">
                    {events.length} etkinlik
                  </span>
                </div>

                {/* Events */}
                <div className="relative pl-8 border-l border-hairline">
                  {events.map((event, index) => (
                    <div key={index} className="relative pb-8 last:pb-0">
                      {/* Timeline dot */}
                      <div className="absolute -left-[37px] top-1 w-[11px] h-[11px] rounded-full bg-copper shadow-[0_0_0_4px_rgba(198,129,63,0.15)]" />

                      <div className="bg-bg-panel border border-hairline rounded-sm p-6 hover:border-copper transition-colors">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="font-mono text-xs text-copper tracking-wide">
                            {event.date}
                          </span>
                          <span
                            className={`font-mono text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-sm ${typeColors[event.type] || "bg-copper"} text-bg`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <h3 className="font-display font-bold uppercase text-cream text-xl mb-1">
                          {event.title}
                        </h3>
                        <span className="font-mono text-[0.72rem] text-chrome block mb-3">
                          📍 {event.location}
                        </span>
                        <p className="text-cream-dim text-[0.92rem] leading-relaxed">
                          {event.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-hairline flex items-center justify-between">
                          <span className="font-mono text-[0.66rem] text-chrome">
                            Kontenjan: 200 kişi
                          </span>
                          <button className="font-mono text-[0.66rem] tracking-widest uppercase px-4 py-2 rounded-sm border border-copper text-copper hover:bg-copper hover:text-bg transition-all">
                            Kayıt Ol
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
