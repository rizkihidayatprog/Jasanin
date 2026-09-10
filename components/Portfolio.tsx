import Image from "next/image";
import { PORTFOLIO } from "@/lib/site";

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b-[3px] border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="reveal font-display text-3xl font-bold md:text-5xl">
          LIHAT YANG SUDAH KAMI BUAT.
        </h2>
        <p className="reveal mt-2 font-medium text-gray-600">
          Klik kartu untuk buka website aslinya.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal brutal brutal-card-hover block overflow-hidden bg-[#F5F5F0]"
            >
              <div className="relative aspect-[4/3] border-b-[3px] border-black">
                <Image
                  src={p.image}
                  alt={`Screenshot website ${p.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="brutal-sm absolute right-2 top-2 bg-[#FFDE1A] px-2 py-0.5 font-display text-xs font-bold">
                  ↗ LIVE
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="text-sm font-bold text-gray-600">{p.type}</p>
                </div>
                <span className="brutal-sm bg-black px-2 py-1 text-sm font-bold text-white">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
