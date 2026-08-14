import { Atom, Server, Layers, Database } from "lucide-react";

import { Card } from "@/components/ui/card";
import { IconBadge } from "@/components/shared/icon-badge";
import { SectionHead } from "@/components/shared/section-head";
import { StaggerGrid, StaggerItem } from "@/components/shared/animated-section";

const STACK = [
  {
    icon: <Atom />,
    title: "React.js / Next.js",
    description: "Interfaces rápidas, interactivas y con excelente SEO cuando el proyecto lo requiere.",
  },
  {
    icon: <Server />,
    title: "Node.js / Express.js",
    description: "APIs robustas y flexibles para conectar tu sistema con cualquier herramienta.",
  },
  {
    icon: <Layers />,
    title: "Nest.js",
    description: "Arquitectura escalable para sistemas backend más grandes y de largo plazo.",
  },
  {
    icon: <Database />,
    title: "Bases de datos",
    description: "Modelado de datos pensado para crecer junto con tu negocio.",
  },
];

export function TechStackGrid() {
  return (
    <section className="py-24">
      <div className="container-landi">
        <SectionHead
          eyebrow="Stack técnico"
          title="Herramientas modernas para resultados sólidos"
          description="Elegimos tecnología estable y con buen soporte a largo plazo, tanto para el frontend como para el backend."
        />
        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full p-8 hover:-translate-y-1 hover:border-transparent hover:shadow-md">
                <IconBadge icon={item.icon} className="mb-5" />
                <h3 className="mb-2.5 text-lg font-bold">{item.title}</h3>
                <p className="text-[15px] text-gray">{item.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
