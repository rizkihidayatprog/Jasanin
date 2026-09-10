import { PACKAGES, waLink } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="paket" className="border-b-[3px] border-black bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="reveal font-display text-4xl font-bold md:text-6xl">
          PILIH SESUAI
          <br />
          KEBUTUHAN.
        </h2>
        <p className="reveal mt-3 max-w-xl text-lg font-medium">
          Website profesional nggak harus mahal.{" "}
          <strong>Mulai dari Rp350 ribu.</strong>
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {PACKAGES.filter((p) => !p.custom).map((p) => {
            const rest = p.features.filter((f) => !p.highlights.includes(f));
            return (
              <article
                key={p.id}
                id={p.popular ? "paket-umkm-pro" : undefined}
                className={`reveal brutal-card-hover relative flex flex-col p-4 ${
                  p.popular
                    ? "brutal-lg bg-[#FFDE1A] lg:-translate-y-3"
                    : "brutal bg-[#F5F5F0]"
                }`}
              >
                {p.popular && (
                  <span className="brutal-sm absolute -top-4 left-3 rotate-[-2deg] bg-black px-2 py-0.5 font-display text-xs font-bold text-white">
                    ★ PALING POPULER
                  </span>
                )}
                <p className="text-[11px] font-bold tracking-widest">{p.tagline}</p>
                <h3 className="font-display mt-1 text-xl font-bold">{p.name}</h3>
                <p className="font-display mt-1 text-3xl font-bold">{p.priceShort}</p>
                <p className="text-xs font-bold text-gray-600">{p.price}</p>
                {p.note && (
                  <p className="mt-2 border-2 border-dashed border-black bg-white/70 px-2 py-1 text-[11px] font-bold">
                    {p.note}
                  </p>
                )}
                <ul className="mt-3 flex flex-col gap-1 text-xs font-medium">
                  <li className="flex gap-1.5">
                    <span className="font-bold">✓</span> {p.cocok}
                  </li>
                  <li className="flex gap-1.5 text-gray-600">
                    <span className="font-bold">✕</span> {p.notFor}
                  </li>
                </ul>
                <ul className="mt-2 flex flex-col gap-1 border-t-2 border-black/20 pt-2 text-xs font-medium">
                  {p.highlights.map((f) => (
                    <li key={f} className="flex gap-1.5">
                      <span className="font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <details className="mt-2 border-t-2 border-black/20 pt-1">
                  <summary className="cursor-pointer py-1 text-[11px] font-bold underline underline-offset-2">
                    LIHAT SEMUA FITUR ↓
                  </summary>
                  <ul className="flex flex-col gap-1 pb-1 text-xs font-medium">
                    {rest.map((f) => (
                      <li key={f} className="flex gap-1.5">
                        <span className="font-bold">✓</span> {f}
                      </li>
                    ))}
                    {p.excluded?.map((f) => (
                      <li key={f} className="flex gap-1.5 text-gray-500 line-through">
                        <span>✕</span> {f}
                      </li>
                    ))}
                  </ul>
                </details>
                <a
                  href={waLink(p.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`brutal-btn mt-3 block w-full px-3 py-2.5 text-center font-display text-sm font-bold ${
                    p.popular ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {p.cta} ↗
                </a>
                {!p.popular && p.id !== "business-pro" && (
                  <a
                    href="#paket-umkm-pro"
                    className="mt-2 block text-center text-[11px] font-bold underline underline-offset-2"
                  >
                    BUTUH LEBIH? → UMKM PRO
                  </a>
                )}
              </article>
            );
          })}
        </div>

        {PACKAGES.filter((p) => p.custom).map((p) => (
          <article
            key={p.id}
            className="reveal brutal-lg brutal-card-hover relative mt-6 bg-black p-6 text-white md:p-8"
          >
            <span className="brutal-sm absolute -top-4 left-4 rotate-[-2deg] bg-[#FFDE1A] px-3 py-1 font-display text-sm font-bold text-black">
              ★ CUSTOM / BISNIS SERIUS
            </span>
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#FFDE1A]">
                  {p.tagline}
                </p>
                <h3 className="font-display mt-1 text-3xl font-bold md:text-4xl">
                  PAKET {p.name.toUpperCase()}
                </h3>
                <p className="font-display mt-1 text-xl font-bold text-gray-300">
                  {p.price}
                </p>
                <ul className="mt-4 grid gap-1.5 text-sm font-medium sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="font-bold text-[#FFDE1A]">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={waLink(p.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-[#FFDE1A] px-8 py-4 text-center font-display text-lg font-bold text-black md:whitespace-nowrap"
              >
                {p.cta} ↗
              </a>
            </div>
          </article>
        ))}
        <p className="reveal mt-6 text-sm font-medium text-gray-600">
          * Domain & hosting tahun berikutnya diperpanjang terpisah sesuai biaya
          yang berlaku. Semua paket mobile-friendly + basic SEO.
        </p>
      </div>
    </section>
  );
}
