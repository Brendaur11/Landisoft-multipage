import { CheckList } from "@/components/shared/check-list";
import { FadeInView } from "@/components/shared/animated-section";

const ITEMS = [
  "Frontend con React.js y Next.js",
  "Backend con Node.js, Express.js y Nest.js",
  "Hosting optimizado y buenas prácticas de seguridad",
  "Código mantenible pensado para crecer con tu negocio",
];

export function PerformanceSection() {
  return (
    <section className="border-y border-border bg-white py-24">
      <div className="container-landi">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeInView>
            <span className="eyebrow">Rendimiento</span>
            <h2 className="mb-3.5 text-[clamp(28px,3.4vw,40px)] font-bold">
              Construido para la velocidad
            </h2>
            <p className="mb-7 text-gray">
              Usamos tecnologías modernas del ecosistema JavaScript para que
              cada sistema y cada página cargue en segundos, no en minutos.
            </p>
            <CheckList items={ITEMS} />
          </FadeInView>

          <FadeInView className="rounded-3xl border border-border bg-gradient-to-b from-blue-pale-2 to-white p-12 text-center">
            <svg
              viewBox="0 0 200 110"
              width="220"
              height="120"
              className="mx-auto"
            >
              <path
                d="M20,100 A80,80 0 0 1 180,100"
                fill="none"
                stroke="#e3e9f3"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M20,100 A80,80 0 0 1 180,100"
                fill="none"
                stroke="url(#gaugeGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray="231 251"
              />
              <defs>
                <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3e7cf0" />
                  <stop offset="100%" stopColor="#1656e0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="font-heading -mt-[18px] text-[42px] font-bold text-blue">
              92/100
            </div>
            <div className="mt-1 text-sm text-gray">
              Puntaje de rendimiento promedio
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
