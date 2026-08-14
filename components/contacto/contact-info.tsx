import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

import { IconBadge } from "@/components/shared/icon-badge";
import { StaggerGrid, StaggerItem } from "@/components/shared/animated-section";

const INFO = [
  {
    icon: <Mail />,
    title: "Email",
    description: "landisoft.ar@gmail.com",
  },
  {
    icon: <MessageCircle />,
    title: "WhatsApp",
    description: "Respuesta rápida para consultas urgentes",
  },
  {
    icon: <Clock />,
    title: "Horario de atención",
    description: "Lunes a viernes, 9 a 18 hs",
  },
  {
    icon: <MapPin />,
    title: "Modalidad",
    description: "Atención remota para todo tipo de proyectos",
  },
];

export function ContactInfo() {
  return (
    <StaggerGrid className="flex flex-col gap-5">
      {INFO.map((item) => (
        <StaggerItem key={item.title}>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-7">
            <IconBadge icon={item.icon} variant="pale" size="contact" />
            <div>
              <h4 className="mb-1 text-[15px] font-bold">{item.title}</h4>
              <p className="text-[14.5px] text-gray">{item.description}</p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
