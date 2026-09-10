import { RULES, EXTRAS, waLink } from "@/lib/site";

export default function Batasan() {
  return (
    <section id="aturan-main" className="border-b-[3px] border-black bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <span className="reveal brutal-sm inline-block rotate-[-1deg] bg-[#FFDE1A] px-3 py-1 text-xs font-bold text-black">
          ★ BACA DULU SEBELUM CHAT
        </span>
        <h2 className="reveal font-display mt-4 text-3xl font-bold md:text-5xl">
          BASIC YA BASIC.
          <br />
          PRO YA PRO.
        </h2>
        <p className="reveal mt-3 max-w-2xl font-medium text-gray-300">
          Supaya sama-sama enak: setiap paket punya jatahnya. Minta di luar
          paket bukan ditolak — tapi dihitung upgrade atau biaya tambahan yang
          disepakati dulu di awal.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RULES.map((r) => (
            <div key={r.no} className="reveal border-[3px] border-white bg-[#1a1a1a] p-4">
              <p className="font-display text-sm font-bold text-[#FFDE1A]">{r.no}</p>
              <h3 className="font-display mt-1 text-lg font-bold leading-tight">
                {r.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-300">{r.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="reveal font-display mt-10 text-2xl font-bold">
          DAFTAR BIAYA TAMBAHAN.
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="reveal w-full min-w-[520px] border-[3px] border-white bg-white text-sm text-black">
            <thead>
              <tr className="bg-[#FFDE1A] font-display font-bold">
                <th className="border-2 border-black px-3 py-2 text-left">PERMINTAAN</th>
                <th className="border-2 border-black px-3 py-2 text-left">SOLUSI</th>
                <th className="border-2 border-black px-3 py-2 text-left">AKSI</th>
              </tr>
            </thead>
            <tbody>
              {EXTRAS.map((e) => (
                <tr key={e.item} className="font-medium">
                  <td className="border-2 border-black px-3 py-2 font-bold">{e.item}</td>
                  <td className="border-2 border-black px-3 py-2">{e.price}</td>
                  <td className="border-2 border-black px-3 py-2">
                    <a
                      href={waLink(e.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-2"
                    >
                      TANYA ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
