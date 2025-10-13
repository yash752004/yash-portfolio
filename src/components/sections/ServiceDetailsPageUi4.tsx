import {
  SiTailwindcss, SiJavascript, SiTypescript,
  SiVite, SiNextdotjs, SiReact, SiMui, SiNodedotjs,
  SiExpress, SiMongodb, SiRedux, SiMysql, SiShadcnui,
  SiDotnet, SiBlazor, SiFastify, SiKoa, SiPostgresql,
  SiSupabase, SiTurso, SiSqlite, SiGooglecloud, SiVultr,
  SiHostinger, SiStrapi, SiKeystone, SiNginx
} from "react-icons/si";

const ServiceDetailsPageUi4 = () => {
  const logos = [
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
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-emerald-50 dark:bg-zinc-800">
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gradient">
          Advanced Crypto Token Development with Modern Blockchain Technology
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto pt-6 md:pt-10 text-gray-700 dark:text-gray-300">
          Complete crypto token solutions
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="w-24 h-24 flex items-center justify-center border border-gray-400 rounded-xl bg-transparent hover:scale-105 transition-transform"
              title={logo.name}
            >
              {logo.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPageUi4;
