import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { InstagramIcon, LinkedinIcon } from "@/components/shared/social-icons";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/planes", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
];

const SERVICE_LINKS = [
  { href: "/servicios", label: "Sistemas de gestión" },
  { href: "/servicios", label: "Landing pages" },
  { href: "/servicios", label: "Sitios multi-page" },
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-navy pt-16 pb-7 text-white/70">
      <div className="container-landi">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/landisoft-icon.png"
                alt="Logo LandiSoft"
                width={38}
                height={38}
                className="size-[38px] shrink-0"
              />
              <span className="flex flex-col leading-none">
                <span className="font-heading text-[19px] font-bold text-white">
                  LandiSoft
                </span>
                <span className="mt-[3px] text-[8.5px] font-bold tracking-[0.14em] text-blue uppercase">
                  Software Development
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-[280px] text-sm text-white/60">
              Sistemas de gestión y páginas web a medida para emprendimientos
              y pymes.
            </p>
          </div>

          <div>
            <h4 className="mb-[18px] text-sm text-white">Navegación</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-white/65 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px] text-sm text-white">Servicios</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-white/65 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px] text-sm text-white">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:urquizabrenda11@gmail.com"
                  className="text-[14.5px] text-white/65 transition-colors duration-150 hover:text-white"
                >
                  urquizabrenda11@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-[14.5px] text-white/65 transition-colors duration-150 hover:text-white"
                >
                  Enviar mensaje
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px]">
          <span>© 2026 LandiSoft. Todos los derechos reservados.</span>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex size-[34px] items-center justify-center rounded-full border border-white/15"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex size-[34px] items-center justify-center rounded-full border border-white/15"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex size-[34px] items-center justify-center rounded-full border border-white/15"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
