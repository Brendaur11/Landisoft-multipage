import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { ContactInfo } from "@/components/contacto/contact-info";
import { ContactForm } from "@/components/contacto/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a LandiSoft para cotizar tu sistema de gestión o página web a medida. Respuesta rápida por email o WhatsApp.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Hablemos"
        title="Contanos sobre tu proyecto"
        description="Completá el formulario o escribinos directamente. Te respondemos a la brevedad para coordinar los próximos pasos."
      />

      <section className="pb-24 pt-10">
        <div className="container-landi">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
