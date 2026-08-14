import * as React from "react";

import { IconBadge } from "@/components/shared/icon-badge";
import { FadeInView } from "@/components/shared/animated-section";
import { cn } from "@/lib/utils";

export function ServiceBlock({
  reverse = false,
  visual,
  children,
  className,
}: {
  reverse?: boolean;
  visual: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16",
        className
      )}
    >
      {reverse ? (
        <>
          <FadeInView>{visual}</FadeInView>
          <FadeInView>{children}</FadeInView>
        </>
      ) : (
        <>
          <FadeInView>{children}</FadeInView>
          <FadeInView>{visual}</FadeInView>
        </>
      )}
    </div>
  );
}

export function ServiceTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block rounded-full bg-blue-pale px-3.5 py-1.5 text-[12.5px] font-bold text-blue">
      {children}
    </span>
  );
}

export function ServiceVisual({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex min-h-[320px] items-center justify-center rounded-3xl bg-blue-pale p-10">
      <IconBadge icon={icon} variant="gradient-shadow" size="lg" />
    </div>
  );
}
