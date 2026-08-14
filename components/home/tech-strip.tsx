import { FadeInView, StaggerGrid, StaggerItem } from "@/components/shared/animated-section";

const TECHS = ["React.js", "Next.js", "Node.js", "Express.js", "Nest.js"];

export function TechStrip() {
  return (
    <section className="pt-10 pb-20">
      <div className="container-landi">
        <FadeInView>
          <p className="mb-7 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-gray">
            Tecnologías con las que trabajamos
          </p>
        </FadeInView>
        <StaggerGrid
          fast
          className="flex flex-wrap items-center justify-center gap-12"
        >
          {TECHS.map((tech) => (
            <StaggerItem
              small
              key={tech}
              className="font-heading text-lg font-semibold text-[#b7c1d1] transition-colors duration-150 hover:text-navy"
            >
              {tech}
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
