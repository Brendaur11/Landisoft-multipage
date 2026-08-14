import { SectionHead } from "@/components/shared/section-head";
import { FadeInView } from "@/components/shared/animated-section";

const FAQS = [
  {
    question: "¿Los precios incluyen el hosting y el dominio?",
    answer:
      "El Plan Start no los incluye, pero te asesoramos para elegir la opción más conveniente. Los planes Boost y Pro incluyen hosting y dominio durante el primer año.",
  },
  {
    question: "¿Cuánto cuesta un sistema de gestión?",
    answer:
      "Los sistemas de gestión (ventas, stock, cuenta corriente, etc.) se cotizan aparte según los módulos que necesite tu negocio. Escribinos y te armamos un presupuesto a medida.",
  },
  {
    question: "¿Puedo pedir un plan combinado (web + sistema)?",
    answer:
      "Sí, muchos clientes combinan una página web con un sistema de gestión. Cotizamos el conjunto con un valor especial.",
  },
  {
    question: "¿Ofrecen mantenimiento después de la entrega?",
    answer:
      "Sí, ofrecemos soporte continuo y planes de mantenimiento mensual opcionales para ajustes, mejoras y nuevas funciones.",
  },
  {
    question: "¿Cómo es la forma de pago?",
    answer:
      "Trabajamos con un anticipo para comenzar el proyecto y el saldo restante contra la entrega final, o en cuotas según el tamaño del proyecto.",
  },
];

export function FaqList() {
  return (
    <section className="border-y border-border bg-white py-24">
      <div className="container-landi">
        <SectionHead
          eyebrow="Preguntas frecuentes"
          title="Dudas comunes sobre los planes"
        />
        <div className="mx-auto max-w-[760px]">
          {FAQS.map((faq) => (
            <FadeInView
              key={faq.question}
              className="mb-3.5 rounded-2xl border border-border bg-white p-6"
            >
              <h4 className="mb-2 text-[15.5px] font-bold">{faq.question}</h4>
              <p className="text-[14.5px] text-gray">{faq.answer}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
