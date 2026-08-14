import { StaggerGrid, StaggerItem } from "@/components/shared/animated-section";
import { TagPill } from "@/components/shared/tag-pill";

const TEAM = [
  {
    initials: "BU",
    name: "Brenda Urquiza",
    role: "Analista de Sistemas & Programadora Full Stack",
    bio: "Diseña y desarrolla interfaces con React.js y APIs robustas con Node.js y Express.js, incorporando Next.js y Nest.js para entregar proyectos completos y escalables de punta a punta.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
      "Nest.js",
    ],
  },
  {
    initials: "CG",
    name: "Camila Galván",
    role: "Asistente de Desarrollo & Especialista en IA aplicada",
    bio: "Aporta desarrollo web potenciado por Claude Code, integrando inteligencia artificial en cada etapa del proceso: desde el armado de interfaces hasta el control de calidad del código. Su enfoque ágil y su dominio de herramientas de IA aplicada permiten acelerar los tiempos de entrega sin resignar calidad.",
    skills: [
      "Desarrollo web",
      "Claude Code",
      "IA aplicada al desarrollo",
      "Control de calidad",
    ],
  },
];

function ProfileCard({
  initials,
  name,
  role,
  bio,
  skills,
}: {
  initials: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
}) {
  return (
    <div className="mx-auto h-full max-w-[560px] rounded-3xl border border-border bg-white p-11 text-center">
      <div className="font-heading icon-gradient mx-auto mb-[18px] flex size-[92px] items-center justify-center rounded-full text-[30px] font-bold text-white shadow-lg">
        {initials}
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mb-3.5 mt-1 text-sm font-semibold text-blue">{role}</p>
      <p className="mx-auto max-w-[460px] text-[15px] text-gray">{bio}</p>
      <StaggerGrid fast className="mt-[22px] flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <StaggerItem small key={skill}>
            <TagPill>{skill}</TagPill>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}

export function ProfileGrid() {
  return (
    <StaggerGrid className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {TEAM.map((member) => (
        <StaggerItem key={member.name}>
          <ProfileCard {...member} />
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
