import type { Metadata } from "next";
import Link from "next/link";
import { Compass } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHead } from "@/components/shared/section-head";
import { CheckList } from "@/components/shared/check-list";
import { CtaBanner } from "@/components/shared/cta-banner";
import { FadeInView } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import {
  ServiceBlock,
  ServiceTag,
  ServiceVisual,
} from "@/components/servicios/service-block";
import { ProfileGrid } from "@/components/nosotros/profile-card";
import { PillarsGrid } from "@/components/nosotros/pillars-grid";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé la historia, la misión y el equipo detrás de LandiSoft: desarrollo de sistemas de gestión y páginas web a medida.",
};

const WHY_FEATURES = [
  "Atención 100% personalizada",
  "Stack moderno: Next.js, Nest.js, React.js, Node.js y Express.js",
  "Comunicación directa, sin intermediarios",
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Detrás de LandiSoft"
        description="Un emprendimiento de desarrollo de software enfocado en ayudar a negocios a ordenar su operación y mostrarse mejor en internet."
      />

      <section>
        <div className="container-landi">
          <ServiceBlock visual={<ServiceVisual icon={<Compass />} />}>
            <ServiceTag>Nuestra historia</ServiceTag>
            <h2 className="mb-3.5 text-[30px]">
              Nace de la pasión por el desarrollo full stack
            </h2>
            <p className="mb-6 text-gray">
              LandiSoft surge de la idea de que cada negocio, sin importar
              su tamaño, merece herramientas digitales pensadas a su
              medida, sin pagar de más por soluciones genéricas que no se
              ajustan a su forma de trabajar. Combinamos sistemas de
              gestión y desarrollo web bajo un mismo techo, para acompañar
              a emprendimientos y pymes en cada etapa de su crecimiento
              digital.
            </p>
            <Button asChild>
              <Link href="/contacto">Conversemos sobre tu proyecto</Link>
            </Button>
          </ServiceBlock>
        </div>
      </section>

      <section className="border-y border-border bg-white py-24">
        <div className="container-landi">
          <SectionHead
            eyebrow="Quién está detrás"
            title="Un equipo chico, un compromiso total con tu proyecto"
            description="Trabajás directamente con quienes desarrollan tu sistema o tu sitio, sin intermediarios."
          />
          <ProfileGrid />
        </div>
      </section>

      <PillarsGrid />

      <section className="border-y border-border bg-white py-24">
        <div className="container-landi">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeInView>
              <span className="eyebrow">Por qué LandiSoft</span>
              <h2 className="mb-3.5 text-[clamp(28px,3.4vw,40px)] font-bold">
                Un desarrollo cercano, de principio a fin
              </h2>
              <p className="mb-7 text-gray">
                Sin equipos grandes ni procesos largos: hablás directamente
                con quienes programan tu sistema o tu sitio, del primer
                boceto a la puesta en producción.
              </p>
              <Button asChild>
                <Link href="/contacto">Quiero trabajar con LandiSoft</Link>
              </Button>
            </FadeInView>

            <FadeInView className="rounded-3xl border border-border bg-gradient-to-b from-blue-pale-2 to-white p-12 text-left">
              <CheckList items={WHY_FEATURES} />
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-landi">
          <CtaBanner
            title="¿Charlamos sobre tu proyecto?"
            description="Contame tu idea y te ayudo a definir el sistema o sitio ideal para tu negocio."
            primary={{ label: "Hablemos", href: "/contacto" }}
            secondary={{ label: "Ver servicios", href: "/servicios" }}
          />
        </div>
      </section>
    </>
  );
}
