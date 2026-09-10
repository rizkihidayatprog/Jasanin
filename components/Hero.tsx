import { waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="border-b-[3px] border-black bg-[#F5F5F0]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
        <div className="reveal">
          <span className="brutal-sm inline-block -rotate-2 bg-white px-3 py-1 text-xs font-bold tracking-wide">
            ★ JASA PEMBUATAN WEBSITE UMKM
          </span>
          <h1 className="font-display mt-4 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            BISNIS KAMU
            <br />
            BUTUH{" "}
            <span className="inline-block bg-[#FFDE1A] px-2 brutal-sm">
              WEBSITE.
            </span>
          </h1>
          <p className="mt-4 max-w-md text-lg font-medium">
            Jasanin bantu UMKM punya website profesional, siap online, dan
            nggak bikin kantong jebol.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn bg-black px-6 py-3 text-center font-display text-lg font-bold text-white"
            >
              CHAT JASANIN ↗
            </a>
            <a
              href="#paket"
              className="brutal-btn bg-white px-6 py-3 text-center font-display text-lg font-bold"
            >
              LIHAT PAKET ↓
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold">
            <span className="brutal-sm bg-white px-2 py-1">MULAI RP350RB</span>
            <span className="brutal-sm bg-white px-2 py-1">3–14 HARI JADI</span>
            <span className="brutal-sm bg-white px-2 py-1">GARANSI REVISI</span>
          </div>
        </div>

        {/* Brutalist mockup */}
        <div className="reveal relative">
          <div className="brutal-lg bg-white">
            <div className="flex items-center gap-1.5 border-b-[3px] border-black bg-[#E5E5E5] px-3 py-2">
              <span className="h-3 w-3 rounded-full border-2 border-black bg-red-400" />
              <span className="h-3 w-3 rounded-full border-2 border-black bg-yellow-300" />
              <span className="h-3 w-3 rounded-full border-2 border-black bg-green-400" />
              <span className="ml-2 border-2 border-black bg-white px-2 text-xs font-bold">
                bisniskamu.id
              </span>
            </div>
            <div className="p-4">
              <div className="h-6 w-2/3 border-2 border-black bg-black" />
              <div className="mt-2 h-4 w-1/2 border-2 border-black bg-[#FFDE1A]" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-16 border-2 border-black bg-[#BEF264]" />
                <div className="h-16 border-2 border-black bg-[#93C5FD]" />
                <div className="h-16 border-2 border-black bg-[#FDA4AF]" />
              </div>
              <div className="mt-3 flex gap-2">
                <div className="h-8 flex-1 border-2 border-black bg-black" />
                <div className="h-8 flex-1 border-2 border-black bg-white" />
              </div>
            </div>
          </div>
          <div className="brutal absolute -bottom-4 -left-2 rotate-[-4deg] bg-[#FFDE1A] px-3 py-1 font-display text-sm font-bold md:-left-6">
            MULAI RP350RB!
          </div>
          <div className="brutal absolute -top-3 right-2 rotate-[5deg] bg-black px-3 py-1 font-display text-sm font-bold text-white">
            SIAP ONLINE ✓
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-t-[3px] border-black bg-black py-2 text-white">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display font-bold">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "WEBSITE PROFESIONAL NGGAK HARUS MAHAL ★",
              "MULAI RP350RB ★",
              "SIAP ONLINE ★",
              "MOBILE FRIENDLY ★",
              "TOMBOL WHATSAPP ★",
            ].map((t, i) => <span key={`${k}-${i}`}>{t}</span>)
          )}
        </div>
      </div>
    </section>
  );
}
