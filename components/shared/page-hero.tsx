import { HeroItem, HeroStagger } from "@/components/shared/animated-section";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="pt-14 pb-5 text-center">
      <div className="container-landi">
        <HeroStagger>
          <HeroItem>
            <span className="eyebrow justify-center">{eyebrow}</span>
          </HeroItem>
          <HeroItem>
            <h1 className="mb-4 text-[clamp(32px,4.4vw,46px)]">{title}</h1>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto max-w-[600px] text-[17px] text-gray">
              {description}
            </p>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  );
}
