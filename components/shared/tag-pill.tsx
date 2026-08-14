import { cn } from "@/lib/utils";

export function TagPill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "rounded-full bg-blue-pale px-3.5 py-1.5 text-[12.5px] font-semibold text-blue",
        className
      )}
      {...props}
    />
  );
}
