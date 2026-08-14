import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-[10px] border border-border bg-bg px-4 py-3.5 text-[14.5px] text-navy transition-colors duration-150 ease-out placeholder:text-gray/70 focus:border-blue focus:bg-white focus:outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
