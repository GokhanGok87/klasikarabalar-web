"use client";

import { useReveal } from "../../hooks/useReveal";

const stats = [
  { value: "2.400+", label: "KAYITLI ÜYE" },
  { value: "640", label: "GALERİDEKİ ARAÇ" },
  { value: "38", label: "ŞEHİRDE TEMSİLCİ" },
  { value: "1955", label: "EN ESKİ MODEL YILI" },
  { value: "10", label: "YENİ ÜYE" }, // Added a new stat
];

export function Community() {
  const headRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <section id="topluluk" className="relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          ref={headRef}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-5 mb-9 pt-[70px] border-t border-hairline"
        >
          <div>
            <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper">
              Topluluk
            </span>
            <h2 className="font-display font-bold uppercase text-cream text-[clamp(1.9rem,3.6vw,2.6rem)] mt-2">
              Bu Mirası Birlikte Yaşatıyoruz
            </h2>
          </div>
        </div>

        <div
          ref={cardRef}
          className="reveal bg-bg-panel border border-hairline rounded-sm p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="font-display font-bold uppercase text-cream text-2xl mb-4">
              Meraklısından koleksiyonere, herkes için bir yer.
            </h2>
            <p className="text-cream-dim mb-6">
              Klasikarabalar.org; restoratörleri, koleksiyonerleri ve bu tutkuya
              yeni başlayanları bir araya getiren bir topluluktur. Aracını
              sergile, deneyimini paylaş, güvenilir alım-satım için doğrulanmış
              üyelerle iletişime geç.
            </p>
            <button className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all">
              Topluluğa Katıl
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="border-l-2 border-copper pl-4">
                <b className="font-display text-4xl text-cream leading-none block">
                  {stat.value}
                </b>
                <span className="font-mono text-[0.72rem] text-cream-dim tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
