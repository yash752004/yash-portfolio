import {
  SiTailwindcss, SiJavascript, SiTypescript,
  SiVite, SiNextdotjs, SiReact, SiMui, SiNodedotjs,
  SiExpress, SiMongodb, SiRedux, SiMysql, SiShadcnui,
  SiDotnet, SiBlazor, SiFastify, SiKoa, SiPostgresql,
  SiSupabase, SiTurso, SiSqlite, SiGooglecloud, SiVultr,
  SiHostinger, SiStrapi, SiKeystone, SiNginx,
  SiDocker,
  SiGithub,
  SiPostman,
  SiAmazon,
  SiFirebase
} from "react-icons/si";
import { Marquee } from "../ui/marquee";

const logos = [
  [
    { name: "React", icon: <SiReact size={40} color="#61DBFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} color="#68A063" /> },
    { name: "Express", icon: <SiExpress size={40} color="#000000" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
    { name: "Vultr", icon: <SiVultr size={40} color="#007BFC" /> },
    { name: "Hostinger", icon: <SiHostinger size={40} color="#673DE6" /> },
    { name: "Strapi", icon: <SiStrapi size={40} color="#2E7EEA" /> },
    { name: "Keystone", icon: <SiKeystone size={40} color="#3D3D3D" /> },
    { name: "Nginx", icon: <SiNginx size={40} color="#009639" /> },
    { name: "Turso", icon: <SiTurso size={40} color="#333333" /> },
    { name: "Vite", icon: <SiVite size={40} color="#646CFF" /> },
  ],
  [
    { name: "Docker", icon: <SiDocker size={40} color="#2496ED" /> },
    { name: "Nginx", icon: <SiNginx size={40} color="#009639" /> },
    { name: "GitHub", icon: <SiGithub size={40} color="#181717" /> },
    { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" /> },
    { name: "Strapi", icon: <SiStrapi size={40} color="#8E75FF" /> },
    { name: "Keystone", icon: <SiKeystone size={40} color="#2F2F2F" /> },
    { name: "AWS", icon: <SiAmazon size={40} color="#FF9900" /> },
    { name: "GCP", icon: <SiGooglecloud size={40} color="#4285F4" /> },
    { name: "Vultr", icon: <SiVultr size={40} color="#007BFC" /> },
    { name: "Hostinger", icon: <SiHostinger size={40} color="#673DE6" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
    { name: "SQLite", icon: <SiSqlite size={40} color="#003B57" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
    { name: "Turso", icon: <SiTurso size={40} color="#000000" /> },
  ],
  [
    { name: "Supabase", icon: <SiSupabase size={40} color="#3ECF8E" /> },
    { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={40} color="#000000" /> },
    { name: "Fastify", icon: <SiFastify size={40} color="#000000" /> },
    { name: "Koa", icon: <SiKoa size={40} color="#000000" /> },
    { name: ".NET", icon: <SiDotnet size={40} color="#512BD4" /> },
    { name: "Blazor", icon: <SiBlazor size={40} color="#512BD4" /> },
    { name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
    { name: "Material UI", icon: <SiMui size={40} color="#007FFF" /> },
    { name: "Shadcn", icon: <SiShadcnui size={40} color="#FFFFFF" /> },
  ]
];

const marqueeClasses = [
  "marquee-duration-25 marquee-delay-0",
  "marquee-duration-20 marquee-delay-2",
  "marquee-duration-35 marquee-delay-4",
];

const ServiceTechStack = () => {

  return (
    <section className="page-section bg-primary-50">
      <div className="container">
        <div className="absolute top-0 left-0 w-30 h-full bg-gradient-to-r from-primary-50 from-60% to-transparent z-5"></div>
        <div className="absolute top-0 right-0 w-30 h-full bg-gradient-to-l from-primary-50 from-60% to-transparent z-5"></div>

        <Marquee
          containerClassName="flex justify-start"
          conveyorClassName={"flex justify-center items-center " + marqueeClasses[0]}
        >
          {logos[0].map((logo, i) => (
            <div
              key={i}
              className="w-24 h-24 m-3 flex items-center justify-center border border-gray-400 rounded-xl bg-transparent"
              title={logo.name}
            >
              {logo.icon}
            </div>
          ))}
        </Marquee>

        <h1 className="relative z-10 text-6xl/[1.2] font-bold text-gradient text-center">Technology Stack We Rigourously Use</h1>
        <p className="relative z-10 text-xl max-w-3xl mx-auto pt-6 text-center text-gray-700 dark:text-gray-300">We leverage a diverse range of cutting-edge technologies to deliver exceptional solutions tailored to your needs.</p>

        {logos.map((logoSet, index) => {
          if (index > 0) {
            return (
              <Marquee
                key={index}
                containerClassName="flex justify-start"
                conveyorClassName={"flex justify-center items-center " + marqueeClasses[index]}
              >
                {logoSet.map((logo, i) => (
                  <div
                    key={logo.name}
                    className="w-24 h-24 m-3 flex items-center justify-center border border-gray-400 rounded-xl bg-transparent"
                    title={logo.name}
                  >
                    {logo.icon}
                  </div>
                ))}
              </Marquee>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ServiceTechStack;
