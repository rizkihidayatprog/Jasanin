import { FAQS } from "@/lib/site";

const BASE = "https://jasanin.netlify.app";

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
    </>
  );
}
