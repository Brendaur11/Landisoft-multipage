import { FadeInView } from "@/components/shared/animated-section";
import { cn } from "@/lib/utils";

export function SectionHead({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <FadeInView
      className={cn("mx-auto mb-14 max-w-[640px] text-center", className)}
    >
      <span className="eyebrow justify-center">{eyebrow}</span>
      <h2 className="mb-3.5 text-[clamp(28px,3.4vw,40px)] font-bold">
        {title}
      </h2>
      {description ? (
        <p className="text-[17px] text-gray">{description}</p>
      ) : null}
    </FadeInView>
  );
}
