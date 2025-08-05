import { useState, useEffect } from "react";
import {
  SiTailwindcss, SiJavascript, SiTypescript,
  SiVite, SiNextdotjs, SiReact, SiMui, SiNodedotjs, SiExpress, SiMongodb, SiRedux,
  SiMysql, SiShadcnui, SiDotnet,
  SiBlazor,
  SiFastify,
  SiKoa,
  SiPostgresql,
  SiSupabase,
  SiTurso,
  SiSqlite,
  SiGooglecloud,
  SiVultr,
  SiHostinger,
  SiStrapi,
  SiKeystone,
  SiNginx
} from "react-icons/si";
import {
  SiGithub, SiPostman, SiDocker,
  SiAmazon, SiFirebase
} from "react-icons/si";
import { Link } from "react-router-dom";


const TechStackSection = () => {

const frontendTechStack = {
    color: "#61DAFB",
    title: "Front End",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Shadcn", icon: SiShadcnui, color: "#FFFFFF" },
    ],
  };

  const backendTechStack = {
    color: "#339933",
    title: "Back End",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Fastify", icon: SiFastify, color: "#000000" },
      { name: "Koa", icon: SiKoa, color: "#000000" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "Blazor", icon: SiBlazor, color: "#512BD4" },
    ],
  };

  const databaseTechStack = {
    color: "#336791",
    title: "Database",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Turso", icon: SiTurso, color: "#000000" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  };

  const cloudTechStack = {
    color: "#FF9900",
    title: "Cloud & Hosting",
    technologies: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Vultr", icon: SiVultr, color: "#007BFC" },
      { name: "Hostinger", icon: SiHostinger, color: "#673DE6" },
    ],
  };
  
  const cmsTechStack = {
    color: "#8E75FF",
    title: "CMS",
    technologies: [
      { name: "Strapi", icon: SiStrapi, color: "#8E75FF" },
      { name: "Keystone", icon: SiKeystone, color: "#2F2F2F" },
    ],
  };
  
  const buildToolsTechStack = {
    color: "#646CFF",
    title: "Build & Deployment",
    technologies: [
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  };

const allStack = [
  frontendTechStack,
  backendTechStack,
  databaseTechStack,
  cloudTechStack,
  cmsTechStack,
  buildToolsTechStack,
];

  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden bg-gradient">
      <div className="container mx-auto px-6">
        <div className="bg-gray-950/70 rounded-3xl p-6 text-monospace shadow-2xl">
          <h2 className="font-bold text-white"># Tech Stack //</h2>
          <p className="font-bold text-yellow-400">Technologies I am comfortable working with. <span className="text-cyan-700">(Non exhaustive list)</span></p>
          <p>&nbsp;</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-6">
            {allStack.map((stack, index) => (
              <div key={index} className="text-monospace flex flex-col items-start" style={{ color: stack.color }}>
                <h2>## {stack.title}</h2>
                <p className="text-white">------------</p>
                <div className="flex flex-col gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="inline-flex items-center">-
                      {tech.icon && (
                        <tech.icon className="w-4 h-4 mx-3" style={{ color: tech.color }} />
                      )}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p className="text-emerald-400">Auto updates enabled. List will update automatically.</p>
          <p className="text-emerald-600">Learning, improving, and discovering new things every day.</p>
          <p>&nbsp;</p>
          <Link to="/projects" className="text-blue-500 underline hover:text-blue-300">Click here for more Information --&gt;</Link>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;