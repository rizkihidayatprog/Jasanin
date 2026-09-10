import { BRAND, TAGLINE, WA_DISPLAY, waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="border-b-[3px] border-black bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-20">
        <h2 className="reveal font-display mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          WEBSITE BAGUS.
          <br />
          <span className="inline-block bg-[#FFDE1A] px-3 text-black brutal-sm">
            HARGA MASUK AKAL.
          </span>
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-lg font-medium text-gray-300">
          Ceritain bisnismu, kami rekomendasiin paket yang paling pas. Gratis
          konsultasi.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal brutal-btn mx-auto mt-8 block w-full bg-[#FFDE1A] px-8 py-4 font-display text-2xl font-bold text-black sm:w-auto sm:inline-block"
        >
          CHAT JASANIN ↗
        </a>
        <p className="mt-3 text-sm font-bold text-gray-400">{WA_DISPLAY}</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F5F5F0]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="brutal-sm inline-block bg-black px-2 py-1 font-display text-xl font-bold text-white">
            {BRAND}
          </p>
          <p className="mt-2 font-medium">{TAGLINE}.</p>
        </div>
        <nav className="flex flex-col gap-2 font-bold">
          <a href="#paket" className="hover:underline">Paket</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#cara-kerja" className="hover:underline">Cara Kerja</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:underline">
            WhatsApp
          </a>
        </nav>
        <div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn inline-block bg-[#FFDE1A] px-5 py-3 font-display font-bold"
          >
            CHAT SEKARANG ↗
          </a>
          <p className="mt-3 text-sm font-medium text-gray-600">
            © {new Date().getFullYear()} Jasanin. Website profesional untuk UMKM.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWA() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="brutal-btn fixed bottom-4 right-4 z-50 bg-[#25D366] px-4 py-3 font-display font-bold md:hidden"
    >
      CHAT ↗
    </a>
  );
}
