import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { BACKEND_URL } from "../../config";
interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  tools: string[];
  thumbnail: string;
  screenshots: string[];
  liveLink: string;
  hasLiveLink: boolean;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>([]);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/portfolioprojects?populate=*`);
        const projectData = response.data.data;
       
        const transformedProjects = projectData.map((item) => {
          const attributes = item;
          return {
            id: item.id,
            title: attributes.titile,
            description: attributes.description,
            tools: attributes.techtools?.map(tool => tool.techtools) || [],
            thumbnail: `${BACKEND_URL}` + attributes.thumbnail?.url,
            screenshots: attributes.images?.map(img => `${BACKEND_URL}` + img.url) || [],
            liveLink: attributes.liveLink || "",
            hasLiveLink: attributes.hasLiveLink || false,
            category: attributes.category || "Web App",
          };
        });

        setProjectDetails(transformedProjects);
        console.log("Transformed Projects:", transformedProjects);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, []);

  const openProject = (project: ProjectDetails) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.screenshots.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-30 pb-20">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-col gap-2 mb-12">
            <h1 className="w-max h-[3.5rem] text-5xl font-bold text-gradient">My Projects</h1>
            <p className="text-xl">A showcase of my recent work and the technologies I've mastered</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectDetails?.map((project, index) => (
              <div className="shadow-xl rounded-3xl border-green-300 overflow-hidden transition-all duration-100 ease-out hover:shadow-2xl hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {/* <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      {project.category}
                    </span> */}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={() => openProject(project)}
                      variant="outline"
                      size="sm"
                      className="border-none w-full rounded-xl font-bold p-6 bg-gradient-repeat text-white hover:shadow-xl"
                    >
                      View Details
                    </Button>
                    {/* {project.hasLiveLink && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-primary"
                        >
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-2000 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black/50 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex">
                {/* Left side - Details */}
                <div className="flex-1 p-8 pt-16 overflow-y-auto max-h-[90vh] flex items-start text-white">
                  <div className="w-full max-w-xl">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold text-gradient">
                        {selectedProject.title}
                      </h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={closeProject}
                        className="hover:bg-destructive/10 hover:text-destructive "
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Tools */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tools.map((tool: string) => (
                          <span
                            key={tool}
                            className="px-3 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {selectedProject.hasLiveLink && (
                        <Button asChild className="bg-glass">
                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right side - Screenshots */}
                <div className="flex-1 bg-muted/10 p-6 overflow-y-auto max-h-[90vh]">
                  <div className="flex flex-col gap-4">
                    {selectedProject.screenshots.map((src: string, index: number) => (
                      <img
                        key={index}
                        src={src}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="w-full max-h-[400px] rounded-xl object-contain border hover:scale-[1.01] transition-transform duration-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Projects;