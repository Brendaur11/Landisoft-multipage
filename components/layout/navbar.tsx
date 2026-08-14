"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/precios", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-bg/85 backdrop-blur-md">
      <nav className="container-landi relative flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/landisoft-icon.png"
            alt="Logo LandiSoft"
            width={38}
            height={38}
            className="size-[38px] shrink-0"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-[19px] font-bold text-navy">
              LandiSoft
            </span>
            <span className="mt-[3px] text-[8.5px] font-bold tracking-[0.14em] text-blue uppercase">
              Software Development
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "text-[15px] font-medium text-navy-soft transition-colors duration-150 hover:text-blue",
                    isActive && "text-blue"
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3.5">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contacto">Cotizar proyecto</Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center rounded-md p-1.5 text-navy md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open ? (
          <ul className="absolute left-0 right-0 top-full flex flex-col items-start gap-1 border-b border-border bg-white px-6 py-4 md:hidden">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href} className="w-full">
                  <Link
                    href={link.href}
                    className={cn(
                      "block w-full py-2.5 text-[15px] font-medium text-navy-soft",
                      isActive && "text-blue"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 w-full">
              <Button asChild size="sm" className="w-full">
                <Link href="/contacto">Cotizar proyecto</Link>
              </Button>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
