import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export function CheckList({
  items,
  size = "default",
  className,
}: {
  items: string[];
  size?: "default" | "sm";
  className?: string;
}) {
  return (
    <ul className={cn("space-y-0", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-3 text-navy-soft",
            size === "default"
              ? "mb-4 text-[15.5px]"
              : "mb-[13px] text-[14.5px]"
          )}
        >
          <span
            className={cn(
              "mt-0.5 flex shrink-0 items-center justify-center rounded-full bg-blue-pale text-blue",
              size === "default" ? "size-5 [&_svg]:size-[11px]" : "size-[18px] [&_svg]:size-[10px]"
            )}
          >
            <Check strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
