import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckList } from "@/components/shared/check-list";
import { cn } from "@/lib/utils";

export function PriceCard({
  name,
  description,
  currency,
  amount,
  period,
  features,
  cta,
  featured = false,
}: {
  name: string;
  description: string;
  currency: string;
  amount: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-border bg-white p-9",
        featured && "border-blue shadow-lg lg:scale-[1.03]"
      )}
    >
      {featured ? (
        <Badge
          variant="top"
          className="absolute -top-3.5 left-1/2 -translate-x-1/2"
        >
          Más elegido
        </Badge>
      ) : null}

      <h3 className="mb-1.5 text-[17px] font-bold">{name}</h3>
      <p className="mb-5 text-sm text-gray">{description}</p>

      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-lg font-bold text-navy-soft">{currency}</span>
        <span className="font-heading text-[40px] font-bold">{amount}</span>
        {period ? <span className="text-sm text-gray">{period}</span> : null}
      </div>

      <CheckList items={features} size="sm" className="mb-7 flex-1" />

      <Button
        asChild
        variant={featured ? "primary" : "secondary"}
        size="block"
      >
        <Link href={cta.href}>{cta.label}</Link>
      </Button>
    </div>
  );
}
