import { ArrowRight } from "lucide-react";
import WireTimeImg from "../../assets/WireTime/1.jpeg";
import CareHqImg from "../../assets/carehq/1.png";
import EcomImg from "../../assets/Ecommerse/1.png";

const projects = [
  {
    title: "WireTime",
    description: "A lightweight time-tracking and collaboration tool with real-time updates.",
    img: WireTimeImg,
    url: "/projects#wiretime",
  },
  {
    title: "CareHQ",
    description: "Healthcare dashboard and appointment management system.",
    img: CareHqImg,
    url: "/projects#carehq",
  },
  {
    title: "E-Commerce Demo",
    description: "End-to-end e-commerce storefront with cart and checkout flows.",
    img: EcomImg,
    url: "/projects#ecom",
  },
];

const ProjectHighlightSection = () => {
  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient">Project Highlights</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            A selection of projects showcasing design, architecture and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              className="group block rounded-2xl overflow-hidden bg-gradient-to-br bg-white dark:bg-zinc-700 shadow-2xl transition-shadow duration-300 outline-emerald-500 outline-0 hover:outline-2"
            >
              <div className="p-4 h-48 md:h-56 w-full relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover rounded-xl overflow-hidden" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm mb-4 text-muted-foreground">{p.description}</p>
                <div className="flex items-center text-primary font-medium">
                  <span>View project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlightSection;
