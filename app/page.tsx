import type { Metadata } from "next";

import { Hero } from "@/components/home/hero";
import { TechStrip } from "@/components/home/tech-strip";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { FeaturesGrid } from "@/components/home/features-grid";
import { PerformanceSection } from "@/components/home/performance-section";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "LandiSoft — Sistemas de gestión y páginas web a medida",
  description:
    "LandiSoft desarrolla sistemas de gestión (ventas, stock, cuenta corriente) y páginas web (landing pages, sitios multi-page) a medida para tu negocio.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <SolutionsGrid />
      <FeaturesGrid />
      <PerformanceSection />
      <section className="py-24">
        <div className="container-landi">
          <CtaBanner
            title="¿Tenés un proyecto en mente?"
            description="Contanos qué necesitás y te ayudamos a definir el sistema o sitio ideal para tu negocio."
            primary={{ label: "Hablemos", href: "/contacto" }}
            secondary={{ label: "Conocer servicios", href: "/servicios" }}
          />
        </div>
      </section>
    </>
  );
}
