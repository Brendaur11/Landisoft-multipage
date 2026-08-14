import { Smartphone, Zap, Link2, MessageCircle } from "lucide-react";

import { Card } from "@/components/ui/card";
import { IconBadge } from "@/components/shared/icon-badge";
import { SectionHead } from "@/components/shared/section-head";
import { StaggerGrid, StaggerItem } from "@/components/shared/animated-section";

const FEATURES = [
  {
    icon: <Smartphone />,
    title: "Diseño responsive",
    description: "Tus sistemas y páginas se ven bien en celular, tablet y escritorio.",
  },
  {
    icon: <Zap />,
    title: "Alto rendimiento",
    description: "Código optimizado para que todo cargue rápido, siempre.",
  },
  {
    icon: <Link2 />,
    title: "Integración simple",
    description: "Conectamos tus sistemas con las herramientas que ya usás.",
  },
  {
    icon: <MessageCircle />,
    title: "Soporte ágil",
    description: "Respuesta rápida ante consultas, ajustes y nuevas necesidades.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24">
      <div className="container-landi">
        <SectionHead
          eyebrow="Por qué LandiSoft"
          title="Desarrollo a medida, sin complicaciones"
          description="Un proceso simple y directo, pensado para emprendimientos y pymes que necesitan resultados reales."
        />
        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((item) => (
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
