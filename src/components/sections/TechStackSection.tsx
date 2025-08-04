import axios from "axios";
import { BACKEND_URL } from "../../../config";
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

const iconMap: Record<string, unknown> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  Shadcn: SiShadcnui,

  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Fastify: SiFastify,
  Koa: SiKoa,
  ".NET": SiDotnet,
  Blazor: SiBlazor,

  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  MongoDB: SiMongodb,
  Turso: SiTurso,
  Supabase: SiSupabase,
  Firebase: SiFirebase,

  AWS: SiAmazon,
  GCP: SiGooglecloud,
  Vultr: SiVultr,
  Hostinger: SiHostinger,

  Strapi: SiStrapi,
  Keystone: SiKeystone,

  Vite: SiVite,
  Docker: SiDocker,
  Nginx: SiNginx,
  GitHub: SiGithub,
  Postman: SiPostman,
};

const TechStackSection = () => {

  const [allStack, setAllStack] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/tech-stack?populate=*`);
        const data = response.data.data;

        const transformedStack = [
          {
            color: "#61DAFB",
            title: "Front End",
            technologies: data.frontEnd.map((tech) => ({
              name: tech.frontEndStack,
              icon: iconMap[tech.frontEndStack] || null,
              color: getColor(tech.frontEndStack),
            })),
          },
          {
            color: "#339933",
            title: "Back End",
            technologies: data.backEnd.map((tech) => ({
              name: tech.backEndStack,
              icon: iconMap[tech.backEndStack] || null,
              color: getColor(tech.backEndStack),
            })),
          },
          {
            color: "#336791",
            title: "Database",
            technologies: data.database.map((tech) => ({
              name: tech.dataBase,
              icon: iconMap[tech.dataBase] || null,
              color: getColor(tech.dataBase),
            })),
          },
          {
            color: "#FF9900",
            title: "Cloud & Hosting",
            technologies: data.cloudev.map((tech) => ({
              name: tech.clouStack,
              icon: iconMap[tech.clouStack] || null,
              color: getColor(tech.clouStack),
            })),
          },
          {
            color: "#8E75FF",
            title: "CMS",
            technologies: data.cms.map((tech) => ({
              name: tech.cms,
              icon: iconMap[tech.cms] || null,
              color: getColor(tech.cms),
            })),
          },
          {
            color: "#181717",
            title: "Build & Deployment",
            technologies: data.build_deployment.map((tech) => ({
              name: tech.build_deployment,
              icon: iconMap[tech.build_deployment] || null,
              color: getColor(tech.build_deployment),
            })),
          },
        ];
        setAllStack(transformedStack);
      } catch (error) {
        console.error("Error fetching tech stack data:", error);
      }
    };

    fetchData();
  }, []);

  const getColor = (name: string): string => {
    const colorMap: Record<string, string> = {
      React: "#61DAFB",
      "Next.js": "#000000",
      JavaScript: "#F7DF1E",
      TypeScript: "#3178C6",
      "Tailwind CSS": "#06B6D4",
      "Material UI": "#007FFF",
      Shadcn: "#FFFFFF",
      "Node.js": "#339933",
      Express: "#000000",
      Fastify: "#000000",
      Koa: "#ffffff",
      ".NET": "#512BD4",
      Blazor: "#512BD4",
      PostgreSQL: "#336791",
      MySQL: "#4479A1",
      SQLite: "#003B57",
      MongoDB: "#47A248",
      Turso: "#000000",
      Supabase: "#3ECF8E",
      Firebase: "#FFCA28",
      AWS: "#FF9900",
      GCP: "#4285F4",
      Vultr: "#007BFC",
      Hostinger: "#673DE6",
      Strapi: "#8E75FF",
      Keystone: "#2F2F2F",
      Vite: "#646CFF",
      Docker: "#2496ED",
      Nginx: "#009639",
      GitHub: "#181717",
      Postman: "#FF6C37",
    };

    return colorMap[name] || "#000000";
  };

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