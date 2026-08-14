import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { StaggerGrid, StaggerItem, FadeInView } from "@/components/shared/animated-section";
import { PriceCard } from "@/components/precios/price-card";
import { FaqList } from "@/components/precios/faq-list";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Planes simples en dólares para landing pages y sitios multi-page desarrollados por LandiSoft. Los sistemas de gestión a medida se cotizan por separado.",
};

const PLANS = [
  {
    name: "Plan Start",
    description: "Para emprendedores que arrancan su presencia digital.",
    currency: "USD",
    amount: "200",
    period: "pago único",
    features: [
      "Landing page de 1 página",
      "Hasta 5 secciones",
      "Diseño moderno y responsivo",
      "Botón flotante de WhatsApp",
      "Formulario de contacto",
      "1 ronda de revisiones",
      "Entrega: 5 a 7 días hábiles",
    ],
    cta: { label: "Elegir plan", href: "/contacto" },
  },
  {
    name: "Plan Boost",
    description: "Para negocios en crecimiento que buscan más presencia.",
    currency: "USD",
    amount: "320",
    period: "pago único",
    features: [
      "Landing page o mini sitio",
      "Hasta 8 secciones o 3 páginas",
      "Diseño orientado a conversión",
      "Animaciones y efectos modernos",
      "WhatsApp + integración con redes",
      "Galería de productos o servicios",
      "SEO básico on-page",
      "2 rondas de revisiones",
      "Hosting + dominio incluido (1er año)",
      "Entrega: 10 a 14 días hábiles",
    ],
    cta: { label: "Elegir plan", href: "/contacto" },
  },
  {
    name: "Plan Pro",
    description: "Para marcas que quieren la presencia digital más completa.",
    currency: "USD",
    amount: "450",
    period: "pago único",
    featured: true,
    features: [
      "Sitio multipage completo",
      "Hasta 6 páginas + secciones ilimitadas",
      "Diseño premium con identidad visual",
      "Animaciones y microinteracciones",
      "Estrategia visual y storytelling",
      "SEO on-page completo",
      "3 rondas de revisiones",
      "Soporte post-entrega 30 días",
      "Hosting + dominio incluido (1er año)",
      "Entrega: 20 a 30 días hábiles",
    ],
    cta: { label: "Elegir plan", href: "/contacto" },
  },
];

export default function PreciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Planes"
        title="Precios simples, adaptados a tu proyecto"
        description="Valores en dólares para páginas web. Los sistemas de gestión a medida se cotizan según los módulos que necesites."
      />

      <section className="py-16">
        <div className="container-landi">
          <StaggerGrid className="grid grid-cols-1 items-stretch gap-6 lg:max-w-none lg:grid-cols-3 max-w-[420px] mx-auto">
            {PLANS.map((plan) => (
              <StaggerItem key={plan.name}>
                <PriceCard {...plan} />
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeInView className="mx-auto mt-10 flex max-w-[900px] flex-col items-center gap-5 rounded-3xl border border-border bg-gradient-to-b from-blue-pale-2 to-white p-9 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="mb-1.5 text-lg font-bold">
                ¿Necesitás un sistema de gestión?
              </h3>
              <p className="text-[15px] text-gray">
                Ventas, stock, cuenta corriente y más: cada sistema se cotiza
                a medida según los módulos que tu negocio necesite.
              </p>
            </div>
            <Button asChild className="shrink-0">
              <Link href="/contacto">Consultar</Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      <FaqList />

      <section className="py-24">
        <div className="container-landi">
          <CtaBanner
            title="¿No estás seguro qué plan elegir?"
            description="Contanos tu idea y te recomendamos la mejor opción para tu presupuesto."
            primary={{ label: "Hablar con LandiSoft", href: "/contacto" }}
          />
        </div>
      </section>
    </>
  );
}
