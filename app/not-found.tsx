import { waLink } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F5F0] px-4">
      <div className="brutal-lg max-w-lg bg-white p-8 text-center">
        <p className="brutal-sm inline-block -rotate-2 bg-[#FFDE1A] px-3 py-1 font-display text-sm font-bold">
          ERROR 404
        </p>
        <h1 className="font-display mt-4 text-5xl font-bold">
          NYASAR, YA?
        </h1>
        <p className="mt-3 font-medium text-gray-700">
          Halaman yang kamu cari tidak ada. Balik ke beranda atau langsung chat
          Jasanin — kami antar sampai tujuan.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="brutal-btn bg-white px-6 py-3 font-display font-bold"
          >
            ← BERANDA
          </a>
          <a
            href={waLink()}
            className="brutal-btn bg-black px-6 py-3 font-display font-bold text-white"
          >
            CHAT JASANIN ↗
          </a>
        </div>
      </div>
    </main>
  );
}
