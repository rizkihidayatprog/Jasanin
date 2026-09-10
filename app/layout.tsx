import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
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
  openGraph: {
    title: "JASANIN — Website Profesional untuk UMKM",
    description:
      "Website profesional nggak harus mahal. Mulai dari Rp350 ribu.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-[#F5F5F0] text-black antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
