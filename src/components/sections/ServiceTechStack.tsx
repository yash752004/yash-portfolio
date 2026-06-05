import React from "react";
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
    { name: "React", icon: <SiReact color="#61DBFB" className="size-5 md:size-8" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" className="size-5 md:size-8" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" className="size-5 md:size-8" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" className="size-5 md:size-8" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" className="size-5 md:size-8" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#68A063" className="size-5 md:size-8" /> },
    { name: "Express", icon: <SiExpress color="#000000" className="size-5 md:size-8" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" className="size-5 md:size-8" /> },
    { name: "Vultr", icon: <SiVultr color="#007BFC" className="size-5 md:size-8" /> },
    { name: "Hostinger", icon: <SiHostinger color="#673DE6" className="size-5 md:size-8" /> },
    { name: "Strapi", icon: <SiStrapi color="#2E7EEA" className="size-5 md:size-8" /> },
    { name: "Keystone", icon: <SiKeystone color="#3D3D3D" className="size-5 md:size-8" /> },
    { name: "Nginx", icon: <SiNginx color="#009639" className="size-5 md:size-8" /> },
    { name: "Turso", icon: <SiTurso color="#333333" className="size-5 md:size-8" /> },
    { name: "Vite", icon: <SiVite color="#646CFF" className="size-5 md:size-8" /> },
  ],
  [
    { name: "Docker", icon: <SiDocker color="#2496ED" className="size-5 md:size-8" /> },
    { name: "Nginx", icon: <SiNginx color="#009639" className="size-5 md:size-8" /> },
    { name: "GitHub", icon: <SiGithub color="#181717" className="size-5 md:size-8" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" className="size-5 md:size-8" /> },
    { name: "Strapi", icon: <SiStrapi color="#8E75FF" className="size-5 md:size-8" /> },
    { name: "Keystone", icon: <SiKeystone color="#2F2F2F" className="size-5 md:size-8" /> },
    { name: "AWS", icon: <SiAmazon color="#FF9900" className="size-5 md:size-8" /> },
    { name: "GCP", icon: <SiGooglecloud color="#4285F4" className="size-5 md:size-8" /> },
    { name: "Vultr", icon: <SiVultr color="#007BFC" className="size-5 md:size-8" /> },
    { name: "Hostinger", icon: <SiHostinger color="#673DE6" className="size-5 md:size-8" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" className="size-5 md:size-8" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" className="size-5 md:size-8" /> },
    { name: "SQLite", icon: <SiSqlite color="#003B57" className="size-5 md:size-8" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" className="size-5 md:size-8" /> },
    { name: "Turso", icon: <SiTurso color="#000000" className="size-5 md:size-8" /> },
  ],
  [
    { name: "Supabase", icon: <SiSupabase color="#3ECF8E" className="size-5 md:size-8" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" className="size-5 md:size-8" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" className="size-5 md:size-8" /> },
    { name: "Express", icon: <SiExpress color="#000000" className="size-5 md:size-8" /> },
    { name: "Fastify", icon: <SiFastify color="#000000" className="size-5 md:size-8" /> },
    { name: "Koa", icon: <SiKoa color="#000000" className="size-5 md:size-8" /> },
    { name: ".NET", icon: <SiDotnet color="#512BD4" className="size-5 md:size-8" /> },
    { name: "Blazor", icon: <SiBlazor color="#512BD4" className="size-5 md:size-8" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" className="size-5 md:size-8" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" className="size-5 md:size-8" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" className="size-5 md:size-8" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" className="size-5 md:size-8" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" className="size-5 md:size-8" /> },
    { name: "Material UI", icon: <SiMui color="#007FFF" className="size-5 md:size-8" /> },
    { name: "Shadcn", icon: <SiShadcnui color="#000000" className="size-5 md:size-8" /> },
  ]
];

const marqueeClasses = [
  "marquee-duration-25 marquee-delay-0",
  "marquee-duration-20 marquee-delay-2",
  "marquee-duration-35 marquee-delay-4",
];

const ServiceTechStack: React.FC = () => {
  return (
    <section className="py-24 bg-transparent w-full relative overflow-hidden">
      
      {/* Decorative blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-0 w-20 md:w-40 h-full bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute top-[20%] right-0 w-20 md:w-40 h-full bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
            Vetted Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
            TECHNOLOGY STACK WE <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              RIGOROUSLY USE
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We leverage a diverse range of cutting-edge technologies to construct high-ROI digital systems tailored to your technical needs.
          </p>
        </div>

        {/* Marquees list */}
        <div className="space-y-6">
          <Marquee
            containerClassName="flex justify-start overflow-hidden"
            conveyorClassName={"flex justify-center items-center " + marqueeClasses[0]}
          >
            {logos[0].map((logo, i) => (
              <div
                key={i}
                className="size-16 md:size-20 m-2 flex items-center justify-center border border-slate-200/60 rounded-2xl bg-white shadow-sm hover:border-primary-500/20 transition-colors"
                title={logo.name}
              >
                {logo.icon}
              </div>
            ))}
          </Marquee>

          {logos.map((logoSet, index) => {
            if (index > 0) {
              return (
                <Marquee
                  key={index}
                  containerClassName="flex justify-start overflow-hidden"
                  conveyorClassName={"flex justify-center items-center " + marqueeClasses[index]}
                >
                  {logoSet.map((logo, i) => (
                    <div
                      key={logo.name}
                      className="size-16 md:size-20 m-2 flex items-center justify-center border border-slate-200/60 rounded-2xl bg-white shadow-sm hover:border-primary-500/20 transition-colors"
                      title={logo.name}
                    >
                      {logo.icon}
                    </div>
                  ))}
                </Marquee>
              );
            }
            return null;
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceTechStack;
