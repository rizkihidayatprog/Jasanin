import { STEPS } from "@/lib/site";

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="border-b-[3px] border-black bg-[#F5F5F0]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="reveal font-display text-3xl font-bold md:text-5xl">
          CARA KERJA. <span className="bg-white px-2 brutal-sm">GAMPANG.</span>
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.no}
              className={`reveal brutal brutal-card-hover p-5 ${
                i % 2 === 1 ? "bg-black text-white" : "bg-white"
              } ${i === 5 ? "bg-[#FFDE1A]" : ""}`}
            >
              <p className="font-display text-sm font-bold opacity-70">{s.no}</p>
              <h3 className="font-display mt-1 text-2xl font-bold">{s.title}</h3>
              <p className={`mt-1 font-medium ${i % 2 === 1 && i !== 5 ? "text-gray-300" : "text-gray-700"}`}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
