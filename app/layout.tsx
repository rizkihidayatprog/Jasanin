import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasanin.netlify.app"),
  title: "JASANIN — Website Profesional untuk UMKM, Mulai Rp350rb",
  description:
    "Jasanin bantu UMKM punya website profesional, siap online, dan nggak bikin kantong jebol. Mulai dari Rp350 ribu. Pilih sesuai kebutuhan bisnis kamu.",
  keywords: ["jasa pembuatan website", "website UMKM", "jasanin", "website murah"],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "JASANIN — Website Profesional untuk UMKM",
    description:
      "Website profesional nggak harus mahal. Mulai dari Rp350 ribu.",
    url: "/",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasanin — Jasa Pembuatan Website untuk UMKM, Mulai Rp350rb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JASANIN — Website Profesional untuk UMKM",
    description:
      "Website profesional nggak harus mahal. Mulai dari Rp350 ribu.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFDE1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-[#F5F5F0] text-black antialiased">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-[3px] focus:border-black focus:bg-[#FFDE1A] focus:px-4 focus:py-2 focus:font-bold"
        >
          Lewati ke konten
        </a>
        <Analytics />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
