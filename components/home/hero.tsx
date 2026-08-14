import Link from "next/link";
import { Rocket, LayoutDashboard, Laptop, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/shared/icon-badge";
import { HeroItem, HeroStagger } from "@/components/shared/animated-section";

export function Hero() {
  return (
    <section className="pt-16 pb-10">
      <div className="hero-inner-bg relative mx-auto w-[calc(100%-40px)] max-w-[1760px] overflow-hidden rounded-3xl px-6 pt-[72px] text-center sm:px-10">
        <div className="container-landi !px-0 sm:!px-10">
          <HeroStagger>
            <HeroItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-[18px] py-2 text-[13px] font-semibold text-blue shadow-sm mb-7">
                <Rocket className="size-4" strokeWidth={2.2} />
                Desarrollando con Next.js y Nest.js
              </span>
            </HeroItem>

            <HeroItem>
              <h1 className="mx-auto mb-[22px] max-w-[780px] text-[clamp(34px,5.4vw,58px)] font-bold">
                Software a medida para{" "}
                <span className="text-blue">hacer crecer</span> tu negocio
              </h1>
            </HeroItem>

            <HeroItem>
              <p className="mx-auto mb-9 max-w-[560px] text-lg text-gray">
                Creamos sistemas de gestión y páginas web pensados para tu
                empresa: desde el control de ventas y stock hasta el sitio
                que presenta tu marca al mundo.
              </p>
            </HeroItem>

            <HeroItem className="mb-14 flex flex-wrap justify-center gap-3.5">
              <Button asChild variant="primary">
                <Link href="/contacto">Solicitar cotización</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/servicios">Ver servicios</Link>
              </Button>
            </HeroItem>

            <HeroItem>
              <div className="mx-auto max-w-[920px] translate-y-px rounded-t-2xl border border-border bg-white px-5 pt-5 shadow-[0_-20px_60px_rgba(22,86,224,0.1)]">
                <div className="flex items-center gap-1.5 pb-4">
                  <span className="size-[10px] rounded-full bg-border" />
                  <span className="size-[10px] rounded-full bg-border" />
                  <span className="size-[10px] rounded-full bg-border" />
                </div>
                <div className="grid grid-cols-1 gap-3.5 pb-5 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="flex min-h-[200px] flex-col justify-center gap-3 rounded-t-[10px] bg-blue-pale-2 p-5">
                    <IconBadge
                      icon={<LayoutDashboard />}
                      variant="gradient"
                      size="panel"
                    />
                    <span className="h-2.5 w-[80%] rounded-md bg-blue/12" />
                    <span className="h-2.5 w-[60%] rounded-md bg-blue/12" />
                    <span className="h-2.5 w-[40%] rounded-md bg-blue/12" />
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <div className="flex flex-1 flex-col justify-center gap-2 rounded-t-[10px] bg-blue-pale-2 p-4">
                      <IconBadge icon={<Laptop />} variant="gradient" size="sm" />
                      <span className="h-2.5 w-[60%] rounded-md bg-blue/12" />
                    </div>
                    <div className="flex flex-1 flex-col justify-center gap-2 rounded-t-[10px] bg-blue-pale-2 p-4">
                      <IconBadge icon={<Package />} variant="gradient" size="sm" />
                      <span className="h-2.5 w-[60%] rounded-md bg-blue/12" />
                    </div>
                  </div>
                </div>
              </div>
            </HeroItem>
          </HeroStagger>
        </div>
      </div>
    </section>
  );
}
