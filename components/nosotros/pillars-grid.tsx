import { Target, Eye, HeartHandshake } from "lucide-react";

import { Card } from "@/components/ui/card";
import { IconBadge } from "@/components/shared/icon-badge";
import { SectionHead } from "@/components/shared/section-head";
import { StaggerGrid, StaggerItem } from "@/components/shared/animated-section";

const PILLARS = [
  {
    icon: <Target />,
    title: "Misión",
    description:
      "Ofrecer sistemas de gestión y páginas web a medida, accesibles y de calidad, para que cualquier negocio pueda digitalizarse sin fricción.",
  },
  {
    icon: <Eye />,
    title: "Visión",
    description:
      "Ser el aliado tecnológico de referencia para emprendimientos y pymes que buscan crecer con herramientas digitales propias.",
  },
  {
    icon: <HeartHandshake />,
    title: "Valores",
    description:
      "Cercanía, transparencia en cada etapa del proyecto y compromiso real con el resultado de cada cliente.",
  },
];

export function PillarsGrid() {
  return (
    <section className="py-24">
      <div className="container-landi">
        <SectionHead
          eyebrow="Nuestros pilares"
          title="Misión, visión y valores"
          description="Los principios que guían cada proyecto que desarrollamos."
        />
        <StaggerGrid className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((item) => (
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
