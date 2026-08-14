import { LayoutDashboard, Globe, Wrench } from "lucide-react";

import { Card } from "@/components/ui/card";
import { IconBadge } from "@/components/shared/icon-badge";
import { SectionHead } from "@/components/shared/section-head";
import { StaggerGrid, StaggerItem } from "@/components/shared/animated-section";

const SOLUTIONS = [
  {
    icon: <LayoutDashboard />,
    title: "Sistemas de gestión",
    description:
      "Ventas, stock y cuenta corriente en una sola plataforma, adaptada a cómo trabaja tu equipo.",
  },
  {
    icon: <Globe />,
    title: "Páginas web",
    description:
      "Landing pages y sitios multi-page rápidos, responsivos y listos para convertir visitas en clientes.",
  },
  {
    icon: <Wrench />,
    title: "Soporte continuo",
    description:
      "Acompañamos cada proyecto después del lanzamiento, con mejoras y soporte cuando lo necesites.",
  },
];

export function SolutionsGrid() {
  return (
    <section className="border-y border-border bg-white py-24">
      <div className="container-landi">
        <SectionHead
          eyebrow="Soluciones"
          title="Todo lo que tu negocio necesita, en un mismo lugar"
          description="Combinamos sistemas internos y presencia web para que tu operación y tu marca crezcan juntas."
        />
        <StaggerGrid className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((item) => (
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
