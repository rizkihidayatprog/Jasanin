import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Masalah, Benefit, SocialProof } from "@/components/Sections";
import Pricing from "@/components/Pricing";
import Batasan from "@/components/Batasan";
import CaraKerja from "@/components/CaraKerja";
import Portfolio from "@/components/Portfolio";
import Faq from "@/components/Faq";
import { FinalCta, Footer, FloatingWA } from "@/components/Closing";
import { RevealInit } from "@/components/Reveal";

export default function Home() {
  return (
    <main id="konten" className="min-h-screen">
      <RevealInit />
      <Navbar />
      <Hero />
      <SocialProof />
      <Masalah />
      <Benefit />
      <Pricing />
      <Batasan />
      <CaraKerja />
      <Portfolio />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWA />
    </main>
  );
}
