import { SectionHead } from "@/components/shared/section-head";
import { StaggerGrid, StaggerItem } from "@/components/shared/animated-section";

const STEPS = [
  { num: 1, title: "Relevamiento", description: "Escuchamos tu idea y definimos el alcance del proyecto." },
  { num: 2, title: "Diseño", description: "Proponemos una estructura visual acorde a tu marca." },
  { num: 3, title: "Desarrollo", description: "Construimos el sistema o sitio con entregas parciales." },
  { num: 4, title: "Lanzamiento", description: "Publicamos tu proyecto y brindamos soporte continuo." },
];

export function ProcessSteps() {
  return (
    <section className="border-y border-border bg-white py-24">
      <div className="container-landi">
        <SectionHead
          eyebrow="Cómo trabajamos"
          title="Un proceso simple, de principio a fin"
          description="Sin vueltas: entendemos tu necesidad, diseñamos, desarrollamos y te acompañamos después del lanzamiento."
        />
        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <StaggerItem key={step.num} className="text-center">
              <div className="icon-gradient font-heading mx-auto mb-[18px] flex size-[52px] items-center justify-center rounded-full text-lg font-bold text-white shadow-md">
                {step.num}
              </div>
              <h3 className="mb-2 text-base font-bold">{step.title}</h3>
              <p className="text-sm text-gray">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
