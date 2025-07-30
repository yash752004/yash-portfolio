import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiTailwindcss, SiWordpress, SiJavascript, SiTypescript,
  SiVite, SiNextdotjs, SiReact, SiMui, SiNodedotjs, SiExpress, SiMongodb
} from "react-icons/si";
import {
  SiGithub, SiFigma, SiPostman, SiDocker,
  SiAmazon, SiVercel, SiFirebase
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";

const TechStackSection = () => {
  const techStack = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ];

  const tools = [
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAmazon, color: "#232F3E" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ];


  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <BackgroundBeams />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Technologies I work with
          </p>

          {/* Infinite scroll animation */}
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, index) => (
                <motion.div
                  key={`tech-${index}`}
                  className="inline-flex items-center mx-4 px-6 py-3 bg-glass rounded-full border border-border/20 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <tech.icon
                    className="w-6 h-6 mr-3"
                    style={{ color: tech.color }}
                  />
                  <span className="text-base font-semibold text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>






        {/* Tools Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Tools & Platforms
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            My development toolkit
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="bg-glass backdrop-blur-xl rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center gap-3">
                  <tool.icon
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: tool.color }}
                  />
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                    {tool.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default TechStackSection;