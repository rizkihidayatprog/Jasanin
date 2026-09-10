import { FAQS, PACKAGES } from "@/lib/site";

const BASE = "https://jasanin.netlify.app";

function priceValue(price: string): number | null {
  const digits = price.replace(/[^0-9]/g, "");
  return digits ? Number(digits) : null;
}

export default function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jasanin",
    description:
      "Jasa pembuatan website profesional untuk UMKM di Yogyakarta. Mulai dari Rp350 ribu.",
    url: BASE,
    telephone: "+62-853-2070-5807",
    priceRange: "Rp350rb - Custom",
    areaServed: [
      { "@type": "City", name: "Yogyakarta" },
      { "@type": "Country", name: "Indonesia" },
    ],
    openingHours: "Mo-Sa 09:00-17:00",
    sameAs: [],
  };

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Paket Jasa Pembuatan Website Jasanin",
    itemListElement: PACKAGES.map((p, i) => {
      const value = priceValue(p.price);
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `Jasanin ${p.name} — ${p.tagline}`,
          description: [...p.highlights, ...p.features]
            .filter((f, idx, arr) => arr.indexOf(f) === idx)
            .slice(0, 12)
            .join(", "),
          brand: { "@type": "Brand", name: "Jasanin" },
          ...(value
            ? {
                offers: {
                  "@type": "Offer",
                  priceCurrency: "IDR",
                  price: value,
                  availability: "https://schema.org/InStock",
                  url: `${BASE}/#paket`,
                },
              }
            : {}),
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
    </>
  );
}
