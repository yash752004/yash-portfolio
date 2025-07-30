import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      tools: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
      ],
      liveLink: "https://ecommerce-demo.com",
      hasLiveLink: true,
      category: "Web App"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      tools: ["Vue.js", "Firebase", "TypeScript", "Vuetify"],
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
      ],
      liveLink: null,
      hasLiveLink: false,
      category: "Web App"
    },
    {
      id: 3,
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native for cross-platform compatibility.",
      tools: ["React Native", "OpenWeather API", "Maps", "Redux"],
      thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
      ],
      liveLink: "https://weather-app-demo.com",
      hasLiveLink: true,
      category: "Mobile App"
    },
    {
      id: 4,
      title: "Cloud Analytics Dashboard",
      description: "A comprehensive analytics dashboard deployed on AWS with real-time data processing, interactive charts, and automated reporting features.",
      tools: ["React", "AWS", "D3.js", "Lambda", "DynamoDB"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      liveLink: null,
      hasLiveLink: false,
      category: "Cloud App"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "A modern social media platform with real-time messaging, content sharing, and advanced privacy controls. Built with scalable architecture.",
      tools: ["Next.js", "PostgreSQL", "Socket.io", "AWS S3"],
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop"
      ],
      liveLink: "https://social-platform-demo.com",
      hasLiveLink: true,
      category: "Web App"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking mobile application with workout plans, nutrition tracking, and progress analytics. Integrates with wearable devices.",
      tools: ["Flutter", "Node.js", "MongoDB", "HealthKit"],
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=600&fit=crop"
      ],
      liveLink: null,
      hasLiveLink: false,
      category: "Mobile App"
    }
  ];

  const openProject = (project: any) => {
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and the technologies I've mastered
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-glass backdrop-blur-xl rounded-2xl overflow-hidden border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  {/* Thumbnail */}
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
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                        {project.category}
                      </span>
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
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      {project.hasLiveLink && (
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
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex">
                {/* Left side - Details */}
                <div className="flex-1 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gradient">
                      {selectedProject.title}
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={closeProject}
                      className="hover:bg-destructive/10 hover:text-destructive"
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
                      <Button
                        asChild
                        className="bg-gradient-primary"
                      >
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
                    <Button variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>

                {/* Right side - Screenshots */}
                <div className="flex-1 bg-muted/10 relative">
                  <div className="relative h-full">
                    <img
                      src={selectedProject.screenshots[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Navigation buttons */}
                    {selectedProject.screenshots.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={prevImage}
                          disabled={currentImageIndex === 0}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={nextImage}
                          disabled={currentImageIndex === selectedProject.screenshots.length - 1}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Button>

                        {/* Dots indicator */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {selectedProject.screenshots.map((_: any, index: number) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? "bg-white" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
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