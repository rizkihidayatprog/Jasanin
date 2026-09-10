export const BRAND = "JASANIN";
export const TAGLINE = "Website Profesional untuk UMKM";
export const WA_NUMBER = "6285320705807";
export const WA_DISPLAY = "0853-2070-5807";

export const WA_PREFILL =
  "Halo Jasanin, saya tertarik membuat website untuk bisnis saya. Boleh bantu rekomendasikan paket yang sesuai?";

export function waLink(message: string = WA_PREFILL) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Pkg = {
  id: string;
  name: string;
  price: string;
  priceShort: string;
  tagline: string;
  highlights: string[];
  cocok: string;
  notFor: string;
  custom?: boolean;
  features: string[];
  excluded?: string[];
  cta: string;
  popular?: boolean;
  note?: string;
  waMessage: string;
};

export const PACKAGES: Pkg[] = [
  {
    id: "basic",
    name: "Basic",
    price: "Rp350.000",
    priceShort: "Rp350K",
    tagline: "WEBSITE SAJA",
    highlights: [
      "1 halaman website",
      "Template profesional",
      "Mobile-friendly",
      "Tombol WhatsApp",
      "Basic SEO",
    ],
    cocok: "Butuh cepat: info usaha simpel 1 halaman.",
    notFor: "Yang mau banyak section / desain custom.",
    features: [
      "1 halaman website",
      "Template profesional",
      "Mobile-friendly",
      "Profil usaha",
      "Produk / layanan",
      "Tombol WhatsApp",
      "Basic SEO",
      "1x revisi",
    ],
    excluded: ["Domain", "Hosting", "Publish"],
    cta: "BUAT WEBSITE",
    note: "Untuk yang sudah punya domain & hosting.",
    waMessage:
      "Halo Jasanin, saya tertarik paket Basic Rp350rb (website saja). Boleh info lebih lanjut?",
  },
  {
    id: "siap-online",
    name: "Siap Online",
    price: "Rp650.000",
    priceShort: "Rp650K",
    tagline: "WEBSITE LANGSUNG ONLINE",
    highlights: [
      "1 halaman website",
      "Publish website",
      "Mobile-friendly",
      "Tombol WhatsApp",
      "Google Maps",
    ],
    cocok: "Mau langsung online tanpa urus hosting.",
    notFor: "Yang butuh domain sendiri / banyak section.",
    features: [
      "1 halaman website",
      "Desain profesional",
      "Mobile-friendly",
      "Profil usaha",
      "Produk / layanan",
      "Tombol WhatsApp",
      "Google Maps",
      "Basic SEO",
      "Publish website",
      "Platform hosting",
      "1x revisi",
    ],
    note: "Domain custom belum termasuk.",
    cta: "MULAI SEKARANG",
    waMessage:
      "Halo Jasanin, saya tertarik paket Siap Online Rp650rb. Boleh info lebih lanjut?",
  },
  {
    id: "hosting",
    name: "Website + Hosting",
    price: "Rp950.000",
    priceShort: "Rp950K",
    tagline: "WEBSITE + HOSTING 1 TAHUN",
    highlights: [
      "Hosting 1 tahun",
      "SSL / HTTPS",
      "Publish",
      "2x revisi",
      "Pendampingan 7 hari",
    ],
    cocok: "Mau website + hosting beres 1 tahun.",
    notFor: "Yang butuh domain & desain custom.",
    features: [
      "Website 1 halaman",
      "Hosting 1 tahun",
      "SSL / HTTPS",
      "Setup hosting",
      "Mobile-friendly",
      "Profil usaha",
      "Produk / layanan",
      "WhatsApp",
      "Google Maps",
      "Basic SEO",
      "Publish",
      "2x revisi",
      "Pendampingan 7 hari",
    ],
    note: "Domain custom belum termasuk.",
    cta: "PILIH PAKET",
    waMessage:
      "Halo Jasanin, saya tertarik paket Website + Hosting Rp950rb. Boleh info lebih lanjut?",
  },
  {
    id: "umkm-pro",
    name: "UMKM Pro",
    price: "Rp1.250.000",
    priceShort: "Rp1,25JT",
    tagline: "WEBSITE PROFESIONAL UNTUK UMKM",
    highlights: [
      "Domain 1 tahun",
      "Hosting 1 tahun",
      "Hingga 5 section",
      "Form kontak",
      "Pendampingan 14 hari",
    ],
    cocok: "UMKM yang mau tampil profesional & lengkap.",
    notFor: "Yang butuh 8+ section (lihat Business Pro).",
    features: [
      "Website custom profesional",
      "Domain 1 tahun",
      "Hosting 1 tahun",
      "SSL / HTTPS",
      "Hingga 5 section",
      "Profil bisnis",
      "Produk / layanan",
      "Galeri",
      "Testimoni",
      "FAQ",
      "WhatsApp CTA",
      "Google Maps",
      "Form kontak",
      "Basic SEO",
      "Mobile-friendly",
      "2x revisi",
      "Publish website",
      "Pendampingan 14 hari",
    ],
    cta: "PILIH UMKM PRO",
    popular: true,
    waMessage:
      "Halo Jasanin, saya tertarik paket UMKM PRO Rp1,25jt. Boleh info lebih lanjut?",
  },
  {
    id: "business-pro",
    name: "Business Pro",
    price: "Rp1.750.000",
    priceShort: "Rp1,75JT",
    tagline: "UNTUK BISNIS YANG BERKEMBANG",
    highlights: [
      "Hingga 8–10 section",
      "Desain custom sesuai kebutuhan",
      "Domain + hosting 1 tahun",
      "3x revisi",
      "Pendampingan 30 hari",
    ],
    cocok: "Bisnis berkembang yang butuh custom.",
    notFor: "Budget di bawah Rp1jt (lihat paket lain).",
    features: [
      "Website custom premium",
      "Domain 1 tahun",
      "Hosting 1 tahun",
      "SSL / HTTPS",
      "Hingga 8–10 section",
      "Desain custom sesuai kebutuhan",
      "Profil bisnis",
      "Produk / layanan",
      "Galeri",
      "Testimoni",
      "FAQ",
      "WhatsApp CTA",
      "Google Maps",
      "Form kontak",
      "Basic SEO",
      "Optimasi mobile",
      "Optimasi kecepatan dasar",
      "Struktur CTA",
      "3x revisi",
      "Publish website",
      "Pendampingan 30 hari",
    ],
    cta: "BANGUN WEBSITE",
    waMessage:
      "Halo Jasanin, saya tertarik paket Business Pro Rp1,75jt. Boleh info lebih lanjut?",
  },
  {
    id: "custom",
    name: "Custom",
    price: "Harga menyesuaikan kebutuhan",
    priceShort: "CUSTOM",
    tagline: "PAYMENT • DATABASE • POS",
    highlights: [],
    cocok: "Bisnis yang butuh sistem: kasir, pembayaran, dan data.",
    notFor: "Yang cukup dengan website company profile.",
    custom: true,
    features: [
      "Payment gateway (QRIS / Midtrans / Xendit)",
      "Database + dashboard admin",
      "Sistem POS / kasir",
      "Integrasi API / sistem yang sudah ada",
      "Fitur sesuai kebutuhan bisnis",
      "Pendampingan + training penggunaan",
    ],
    cta: "MINTA PENAWARAN",
    waMessage:
      "Halo Jasanin, saya butuh website custom (payment gateway / database / POS). Boleh minta penawaran?",
  },
];

export const FAQS = [
  {
    q: "Apakah sudah termasuk domain?",
    a: "Tergantung paket. Paket UMKM Pro dan Business Pro sudah termasuk domain 1 tahun. Paket Basic, Siap Online, dan Website + Hosting belum termasuk domain custom — tapi kamu bisa pakai domain yang sudah kamu punya.",
  },
  {
    q: "Apakah sudah termasuk hosting?",
    a: "Paket Website + Hosting, UMKM Pro, dan Business Pro sudah termasuk hosting (1 tahun / platform hosting). Paket Basic belum termasuk hosting dan publish — cocok kalau kamu sudah punya domain & hosting sendiri.",
  },
  {
    q: "Berapa lama proses pembuatan?",
    a: "Umumnya 3–14 hari, tergantung paket dan kelengkapan data (logo, foto, info produk). Paket Basic/Siap Online biasanya paling cepat.",
  },
  {
    q: "Apakah bisa request desain?",
    a: "Bisa, terutama untuk paket custom (UMKM Pro & Business Pro). Desain disesuaikan dengan kebutuhan dan karakter bisnismu.",
  },
  {
    q: "Apakah bisa revisi?",
    a: "Bisa. Jumlah revisi mengikuti paket: 1x (Basic & Siap Online), 2x (Website + Hosting & UMKM Pro), 3x (Business Pro).",
  },
  {
    q: "Bagaimana jika sudah punya domain?",
    a: "Bisa dipakai. Domain kamu akan diarahkan ke website Jasanin tanpa ribet — kami bantu setup-nya.",
  },
  {
    q: "Berapa biaya tahun berikutnya?",
    a: "Domain dan hosting diperpanjang terpisah sesuai biaya yang berlaku saat itu. Website-nya tetap milikmu, tidak ada biaya bulanan tersembunyi dari Jasanin.",
  },
  {
    q: "Bisakah tambah fitur di paket Basic?",
    a: "Bisa, tapi dihitung di luar paket: upgrade ke paket di atasnya atau biaya tambahan per item. Estimasi disepakati via chat sebelum pengerjaan — biar sama-sama enak, tidak ada tuntutan di tengah jalan.",
  },
  {
    q: "Apa yang dihitung 1x revisi?",
    a: "1x revisi = 1 putaran perbaikan kecil: teks, warna, foto, atau susunan. Ganti konsep, ganti template, atau tambah section bukan revisi — masuk upgrade paket / biaya tambahan.",
  },
];

export const RULES = [
  {
    no: "01",
    title: "REVISI = PERBAIKAN KECIL",
    desc: "Teks, warna, foto, susunan. Ganti konsep atau ganti template total bukan revisi.",
  },
  {
    no: "02",
    title: "TEMPLATE ≠ CUSTOM",
    desc: "Basic, Siap Online, dan Website + Hosting pakai template profesional. Desain custom hanya di UMKM Pro & Business Pro.",
  },
  {
    no: "03",
    title: "TAMBAH = UPGRADE",
    desc: "Tambah section, halaman, atau fitur di luar paket berarti naik paket atau kena biaya tambahan — disepakati dulu via chat.",
  },
  {
    no: "04",
    title: "JATAH REVISI MENGIKAT",
    desc: "1x / 2x / 3x sesuai paket. Revisi ekstra di luar jatah dikenakan biaya tambahan.",
  },
];

export const EXTRAS = [
  {
    item: "Tambah 1 section / halaman",
    price: "Estimasi via chat",
    wa: "Halo Jasanin, saya mau tanya estimasi biaya tambah section/halaman di luar paket.",
  },
  {
    item: "Revisi ekstra di luar jatah",
    price: "Estimasi via chat",
    wa: "Halo Jasanin, saya mau tanya estimasi biaya revisi tambahan.",
  },
  {
    item: "Desain custom di paket non-Pro",
    price: "Upgrade ke UMKM Pro",
    wa: "Halo Jasanin, saya mau upgrade ke paket UMKM Pro untuk desain custom.",
  },
  {
    item: "Domain custom (.com/.id)",
    price: "Estimasi via chat",
    wa: "Halo Jasanin, saya mau tanya estimasi biaya domain custom.",
  },
];

export const STEPS = [
  { no: "01", title: "CHAT", desc: "Konsultasikan kebutuhan website." },
  { no: "02", title: "PILIH", desc: "Pilih paket yang sesuai." },
  {
    no: "03",
    title: "KIRIM DATA",
    desc: "Kirim logo, foto, produk, dan informasi bisnis.",
  },
  { no: "04", title: "KERJA", desc: "Jasanin mulai membuat website." },
  { no: "05", title: "REVISI", desc: "Perbaikan sesuai paket." },
  { no: "06", title: "GO LIVE", desc: "Website siap digunakan." },
];

export const MASALAH = [
  { no: "01", text: "Cuma punya Instagram?" },
  { no: "02", text: "Pelanggan susah cari info?" },
  { no: "03", text: "Bisnis terlihat kurang profesional?" },
  { no: "04", text: "Belum punya website?" },
];

export const BENEFITS = [
  { no: "01", title: "PROFESIONAL", desc: "Bikin bisnis terlihat lebih terpercaya." },
  { no: "02", title: "SIAP ONLINE", desc: "Website bisa diakses pelanggan kapan saja." },
  { no: "03", title: "MOBILE FRIENDLY", desc: "Nyaman digunakan dari HP." },
  {
    no: "04",
    title: "WHATSAPP",
    desc: "Pelanggan bisa langsung menghubungi bisnis.",
  },
  { no: "05", title: "TERJANGKAU", desc: "Paket disesuaikan dengan kebutuhan UMKM." },
  { no: "06", title: "DIBANTU", desc: "Tidak perlu pusing dengan proses teknis." },
];

export type PortfolioItem = {
  name: string;
  type: string;
  color: string;
  image: string;
  url: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    name: "Examigo",
    type: "Platform Ujian Online",
    color: "#93C5FD",
    image: "/portfolio/examigo.png",
    url: "https://examigo.my.id",
  },
  {
    name: "TixLuaa",
    type: "Website Tiket Event",
    color: "#C4B5FD",
    image: "/portfolio/tixluaa.png",
    url: "https://tixluaa.com",
  },
  {
    name: "Rima Konveksi",
    type: "Katalog & Lacak Pesanan Konveksi",
    color: "#FDBA74",
    image: "/portfolio/rima-konveksi.png",
    url: "https://rimakonveksi.tixluaa.com",
  },
];
