import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconBadgeVariants = cva(
  "flex shrink-0 items-center justify-center [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        pale: "bg-blue-pale text-blue",
        gradient: "icon-gradient text-white",
        "gradient-shadow": "icon-gradient text-white shadow-lg",
      },
      size: {
        sm: "size-[34px] rounded-[10px] [&_svg]:size-4",
        md: "size-12 rounded-[14px] [&_svg]:size-[22px]",
        panel: "size-10 rounded-xl [&_svg]:size-4",
        contact: "size-11 rounded-xl [&_svg]:size-5",
        lg: "size-24 rounded-[28px] [&_svg]:size-10",
      },
    },
    defaultVariants: {
      variant: "pale",
      size: "md",
    },
  }
);

export interface IconBadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof iconBadgeVariants> {
  icon: React.ReactNode;
}

export function IconBadge({
  icon,
  variant,
  size,
  className,
  ...props
}: IconBadgeProps) {
  return (
    <div
      className={cn(iconBadgeVariants({ variant, size, className }))}
      {...props}
    >
      {icon}
    </div>
  );
}
