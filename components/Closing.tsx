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
          <p className="mt-3 text-sm font-bold">📍 Melayani seluruh Indonesia</p>
          <p className="mt-1 text-sm font-bold">🕘 Senin–Sabtu, 09.00–17.00 WIB</p>
          <p className="mt-1 text-sm font-bold">📱 {WA_DISPLAY}</p>
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
      aria-label="Chat Jasanin via WhatsApp"
      className="brutal-btn fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-2.5 pl-3 pr-4 font-display text-sm font-bold text-white"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      CHAT JASANIN
    </a>
  );
}
