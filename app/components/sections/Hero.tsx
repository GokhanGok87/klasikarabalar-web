import Link from "next/link";
import { SpeedGauge } from "../ui/SpeedGauge";

export function Hero() {
  return (
    <section className="relative z-[1] py-[90px_70px] border-b border-hairline">
      <div className="max-w-[1120px] mx-auto px-7 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-copper">
            klasikarabalar.org
          </span>
          <h1 className="font-display font-bold uppercase text-cream text-[clamp(2.6rem,5.4vw,4.4rem)] leading-[0.98] my-4">
            Motor sesi
            <br />
            <em className="not-italic text-copper">hiç eskimiyor.</em>
          </h1>
          <p className="font-body text-lg text-cream-dim max-w-[46ch] mb-8">
            Restore edilmiş klasikleri keşfet, alım-satım ilanlarına göz at,
            buluşmalara katıl ve bu mirası yaşatan topluluğun bir parçası ol.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/galeri"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-copper bg-copper text-bg hover:bg-[#DE9A57] hover:border-[#DE9A57] transition-all"
            >
              Galeriyi Keşfet
            </Link>
            <Link
              href="/ilanlar"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border border-chrome text-cream hover:border-copper hover:text-copper transition-all"
            >
              İlanlara Bak
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <SpeedGauge />
        </div>
      </div>
    </section>
  );
}
