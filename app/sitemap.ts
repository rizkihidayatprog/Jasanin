import type { MetadataRoute } from "next";
import { PORTFOLIO } from "@/lib/site";

const BASE = "https://jasanin.netlify.app";

// Tanggal rilis Batch SEO — statis agar sinyal freshness tidak jadi noise.
const LAST_MODIFIED = new Date("2026-09-10");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${BASE}/og-image.png`,
        ...PORTFOLIO.map((p) => `${BASE}${p.image}`),
      ],
    },
  ];
}
