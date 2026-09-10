import { MASALAH, BENEFITS } from "@/lib/site";

export function Masalah() {
  return (
    <section className="border-b-[3px] border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="reveal font-display text-3xl font-bold md:text-5xl">
          KENALAN DULU SAMA MASALAHNYA.
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MASALAH.map((m) => (
            <div key={m.no} className="reveal brutal brutal-card-hover bg-[#F5F5F0] p-4">
              <p className="font-display text-sm font-bold text-gray-600">{m.no}</p>
              <p className="font-display mt-2 text-xl font-bold leading-tight">{m.text}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-6 inline-block -rotate-1 bg-black px-4 py-2 font-display text-xl font-bold text-white md:text-2xl">
          JASANIN PUNYA SOLUSINYA.
        </p>
      </div>
    </section>
  );
}

export function Benefit() {
  return (
    <section className="border-b-[3px] border-black bg-[#F5F5F0]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="reveal font-display text-3xl font-bold md:text-5xl">
          KENAPA PESAN DI <span className="bg-[#FFDE1A] px-2 brutal-sm">JASANIN?</span>
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.no} className="reveal brutal brutal-card-hover bg-white p-5">
              <p className="brutal-sm inline-block bg-black px-2 py-0.5 font-display text-xs font-bold text-white">
                {b.no}
              </p>
              <h3 className="font-display mt-3 text-2xl font-bold">{b.title}</h3>
              <p className="mt-1 font-medium text-gray-700">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  return (
    <section className="border-b-[3px] border-black bg-[#FFDE1A]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="reveal font-display text-2xl font-bold md:text-3xl">
          DIPERCAYA UMKM YANG MAU NAIK LEVEL.
        </h2>
        <p className="reveal mt-2 max-w-2xl font-medium">
          Website yang kami buat sudah online dan dipakai penggunanya.
          Bisnis kamu berikutnya.
        </p>
      </div>
    </section>
  );
}
