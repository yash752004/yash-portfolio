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
    { name: "React", icon: <SiReact color="#61DBFB" className="size-5 md:size-10" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" className="size-5 md:size-10" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" className="size-5 md:size-10" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" className="size-5 md:size-10" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" className="size-5 md:size-10" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#68A063" className="size-5 md:size-10" /> },
    { name: "Express", icon: <SiExpress color="#000000" className="size-5 md:size-10" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" className="size-5 md:size-10" /> },
    { name: "Vultr", icon: <SiVultr color="#007BFC" className="size-5 md:size-10" /> },
    { name: "Hostinger", icon: <SiHostinger color="#673DE6" className="size-5 md:size-10" /> },
    { name: "Strapi", icon: <SiStrapi color="#2E7EEA" className="size-5 md:size-10" /> },
    { name: "Keystone", icon: <SiKeystone color="#3D3D3D" className="size-5 md:size-10" /> },
    { name: "Nginx", icon: <SiNginx color="#009639" className="size-5 md:size-10" /> },
    { name: "Turso", icon: <SiTurso color="#333333" className="size-5 md:size-10" /> },
    { name: "Vite", icon: <SiVite color="#646CFF" className="size-5 md:size-10" /> },
  ],
  [
    { name: "Docker", icon: <SiDocker color="#2496ED" className="size-5 md:size-10" /> },
    { name: "Nginx", icon: <SiNginx color="#009639" className="size-5 md:size-10" /> },
    { name: "GitHub", icon: <SiGithub color="#181717" className="size-5 md:size-10" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" className="size-5 md:size-10" /> },
    { name: "Strapi", icon: <SiStrapi color="#8E75FF" className="size-5 md:size-10" /> },
    { name: "Keystone", icon: <SiKeystone color="#2F2F2F" className="size-5 md:size-10" /> },
    { name: "AWS", icon: <SiAmazon color="#FF9900" className="size-5 md:size-10" /> },
    { name: "GCP", icon: <SiGooglecloud color="#4285F4" className="size-5 md:size-10" /> },
    { name: "Vultr", icon: <SiVultr color="#007BFC" className="size-5 md:size-10" /> },
    { name: "Hostinger", icon: <SiHostinger color="#673DE6" className="size-5 md:size-10" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" className="size-5 md:size-10" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" className="size-5 md:size-10" /> },
    { name: "SQLite", icon: <SiSqlite color="#003B57" className="size-5 md:size-10" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" className="size-5 md:size-10" /> },
    { name: "Turso", icon: <SiTurso color="#000000" className="size-5 md:size-10" /> },
  ],
  [
    { name: "Supabase", icon: <SiSupabase color="#3ECF8E" className="size-5 md:size-10" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" className="size-5 md:size-10" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" className="size-5 md:size-10" /> },
    { name: "Express", icon: <SiExpress color="#000000" className="size-5 md:size-10" /> },
    { name: "Fastify", icon: <SiFastify color="#000000" className="size-5 md:size-10" /> },
    { name: "Koa", icon: <SiKoa color="#000000" className="size-5 md:size-10" /> },
    { name: ".NET", icon: <SiDotnet color="#512BD4" className="size-5 md:size-10" /> },
    { name: "Blazor", icon: <SiBlazor color="#512BD4" className="size-5 md:size-10" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" className="size-5 md:size-10" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" className="size-5 md:size-10" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" className="size-5 md:size-10" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" className="size-5 md:size-10" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" className="size-5 md:size-10" /> },
    { name: "Material UI", icon: <SiMui color="#007FFF" className="size-5 md:size-10" /> },
    { name: "Shadcn", icon: <SiShadcnui color="#FFFFFF" className="size-5 md:size-10" /> },
  ]
];

const marqueeClasses = [
  "marquee-duration-25 marquee-delay-0",
  "marquee-duration-20 marquee-delay-2",
  "marquee-duration-35 marquee-delay-4",
];

const ServiceTechStack = () => {

  return (
    <section className="page-section bg-primary-50 dark:bg-gray-800">
      <div className="container gap-4 md:gap-8">
        <div className="absolute top-0 left-0 w-10 md:w-30 h-full bg-gradient-to-r from-primary-50 dark:from-gray-800 from-60% to-transparent z-5"></div>
        <div className="absolute top-0 right-0 w-10 md:w-30 h-full bg-gradient-to-l from-primary-50 dark:from-gray-800 from-60% to-transparent z-5"></div>

        <Marquee
          containerClassName="flex justify-start"
          conveyorClassName={"flex justify-center items-center " + marqueeClasses[0]}
        >
          {logos[0].map((logo, i) => (
            <div
              key={i}
              className="size-12 md:size-24 m-3 flex items-center justify-center border border-gray-400 rounded-xl bg-transparent"
              title={logo.name}
            >
              {logo.icon}
            </div>
          ))}
        </Marquee>

        <h1 className="relative z-10 text-4xl md:text-6xl/[1.2] font-bold text-primary-500 dark:text-secondary-500 text-center">Technology Stack We Rigourously Use</h1>
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
                    className="size-12 md:size-24 m-3 flex items-center justify-center border border-gray-400 rounded-xl bg-transparent"
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
