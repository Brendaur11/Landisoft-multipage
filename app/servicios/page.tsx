import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Globe } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { CheckList } from "@/components/shared/check-list";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Button } from "@/components/ui/button";
import {
  ServiceBlock,
  ServiceTag,
  ServiceVisual,
} from "@/components/servicios/service-block";
import { TechStackGrid } from "@/components/servicios/tech-stack-grid";
import { ProcessSteps } from "@/components/servicios/process-steps";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Sistemas de gestión (ventas, stock, cuenta corriente) y páginas web (landing pages, sitios multi-page) desarrollados a medida por LandiSoft.",
};

const GESTION_FEATURES = [
  "Módulo de ventas y facturación",
  "Control de stock e inventario",
  "Cuenta corriente de clientes y proveedores",
  "Reportes y estadísticas en tiempo real",
  "Usuarios con permisos por rol",
];

const WEB_FEATURES = [
  "Landing pages orientadas a conversión",
  "Sitios multi-page (institucionales, catálogos)",
  "Diseño responsive para todos los dispositivos",
  "Optimización de velocidad y SEO on-page",
  "Formularios de contacto integrados",
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Lo que hacemos"
        title="Dos formas de impulsar tu negocio"
        description="Desarrollamos sistemas de gestión para ordenar tu operación diaria, y páginas web para que tu marca esté donde tus clientes te buscan."
      />

      <section>
        <div className="container-landi">
          <ServiceBlock visual={<ServiceVisual icon={<LayoutDashboard />} />}>
            <ServiceTag>Sistemas de gestión</ServiceTag>
            <h2 className="mb-3.5 text-[30px]">
              Ordená ventas, stock y cuenta corriente en un solo lugar
            </h2>
            <p className="mb-6 text-gray">
              Desarrollamos sistemas a medida para que dejes de depender de
              planillas sueltas. Cada módulo se adapta a cómo trabaja
              realmente tu negocio.
            </p>
            <CheckList items={GESTION_FEATURES} className="mb-7" />
            <Button asChild>
              <Link href="/contacto">Quiero un sistema a medida</Link>
            </Button>
          </ServiceBlock>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="container-landi">
          <ServiceBlock reverse visual={<ServiceVisual icon={<Globe />} />}>
            <ServiceTag>Páginas web</ServiceTag>
            <h2 className="mb-3.5 text-[30px]">
              Landing pages y sitios multi-page que convierten
            </h2>
            <p className="mb-6 text-gray">
              Diseñamos y desarrollamos sitios rápidos, responsivos y
              alineados a tu marca, ya sea una única página de aterrizaje o
              un sitio completo con varias secciones.
            </p>
            <CheckList items={WEB_FEATURES} className="mb-7" />
            <Button asChild>
              <Link href="/contacto">Quiero mi página web</Link>
            </Button>
          </ServiceBlock>
        </div>
      </section>

      <TechStackGrid />
      <ProcessSteps />

      <section className="py-24">
        <div className="container-landi">
          <CtaBanner
            title="Contanos qué necesitás"
            description="Te ayudamos a elegir entre un sistema de gestión, una página web, o ambos."
            primary={{ label: "Solicitar cotización", href: "/contacto" }}
          />
        </div>
      </section>
    </>
  );
}
