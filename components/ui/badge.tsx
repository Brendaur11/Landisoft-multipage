import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-semibold",
  {
    variants: {
      variant: {
        pale: "bg-blue-pale text-blue",
        outline: "border border-border bg-white text-blue shadow-sm",
        solid: "bg-blue text-white",
        top: "bg-blue text-white",
      },
      size: {
        default: "px-3.5 py-1.5 text-[12.5px]",
        sm: "px-2.5 py-1 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "pale",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
