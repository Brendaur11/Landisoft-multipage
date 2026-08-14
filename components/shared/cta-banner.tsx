import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/shared/animated-section";

export function CtaBanner({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <FadeInView className="cta-gradient rounded-3xl px-6 py-16 text-center text-white sm:px-10 sm:py-20">
      <h2 className="mb-3.5 text-[clamp(26px,3vw,36px)] font-bold text-white">
        {title}
      </h2>
      <p className="mx-auto mb-8 max-w-[520px] text-white/85">{description}</p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <Button asChild variant="cta">
          <Link href={primary.href}>{primary.label}</Link>
        </Button>
        {secondary ? (
          <Button asChild variant="cta-outline">
            <Link href={secondary.href}>{secondary.label}</Link>
          </Button>
        ) : null}
      </div>
    </FadeInView>
  );
}
