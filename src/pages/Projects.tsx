import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ShootingStars}  from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import thumbail1 from "../Assets/carehq/1.png";
import carehq2 from "../Assets/carehq/2.png";
import carehq3 from "../Assets/carehq/3.png";
import carehq4 from "../Assets/carehq/4.png";
import carehq5 from "../Assets/carehq/5.png";
import carehq6 from "../Assets/carehq/6.png";
import carehq7 from "../Assets/carehq/7.png";

import wiretime1 from "../Assets/WireTime/1.jpeg";
import wiretime2 from "../Assets/WireTime/2.jpeg";
import wiretime3 from "../Assets/WireTime/3.png";
import wiretime4 from "../Assets/WireTime/4.png";
import wiretime5 from "../Assets/WireTime/5.png";
import wiretime6 from "../Assets/WireTime/6.png";
import wiretime7 from "../Assets/WireTime/7.jpeg";

import sports1 from "../Assets/sportsportal/1.png";
import sports2 from "../Assets/sportsportal/2.png";
import sports3 from "../Assets/sportsportal/3.png";
import sports4 from "../Assets/sportsportal/4.png";
import sports5 from "../Assets/sportsportal/5.png";

// import inventoryscan1 from "../Assets/inventoryscan/1.png";
// import inventoryscan2 from "../Assets/inventoryscan/2.png";

import gemini1 from "../Assets/chatapp/1.png";
import gemini2 from "../Assets/chatapp/3.png";
import gemini3 from "../Assets/chatapp/7.png";
import gemini4 from "../Assets/chatapp/4.png";
import gemini5 from "../Assets/chatapp/5.png";
import gemini6 from "../Assets/chatapp/6.png";

import ecommerse0 from "../Assets/Ecommerse/0.png";
import ecommerse1 from "../Assets/Ecommerse/1.png";
import ecommerse2 from "../Assets/Ecommerse/2.png";
import ecommerse3 from "../Assets/Ecommerse/3.png";
import ecommerse4 from "../Assets/Ecommerse/4.png";
import ecommerse5 from "../Assets/Ecommerse/5.png";
import ecommerse6 from "../Assets/Ecommerse/6.png";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  thumbnail: string;
  screenshots: string[];
  liveLink?: string;
  hasLiveLink?: boolean;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Jewellery Ecommerce App",
      description: "Developed a comprehensive Ecommerce platform for jewellery, Home page with diffrent diffrent categories.",
      tools: ['Next.JS', 'Tailwind CSS', 'NodeJs', 'Express', 'MongoDB'],
      thumbnail: ecommerse0,
      screenshots: [
        ecommerse1,
        ecommerse2,
        ecommerse3,
        ecommerse4,
        ecommerse5,
        ecommerse6
      ],
      liveLink: "https://jewellery-ecommerce-flax.vercel.app/",
      hasLiveLink: true,
      category: "Web App"
    },
    {
      id: 2,
      title: "Gemini Chat App",
      description: "Built a Gemini-style conversational AI chat application with features like OTP-based authentication, multi-chatroom management, real-time AI message simulation, image uploads, and reverse infinite scroll with pagination. Implements Redux for state management, form validation with React Hook Form + Zod, and a polished, responsive UI using Material UI. Dark mode, scroll-to-bottom, and keyboard accessibility are also integrated for a complete UX.",
      tools: ['React', 'Redux', 'Material UI', 'Zod', 'JavaScript'],
      thumbnail: gemini1,
      screenshots: [
        gemini2,
        gemini3,
        gemini4,
        gemini5,
        gemini6
      ],
      liveLink: "https://gemini-chat-app-gamma.vercel.app/",
      hasLiveLink: true,
      category: "Web App"
    },
    {
      id: 3,
      title: "CareHQ",
      description: "Engineered a health monitoring system CareHQ using Vite, TypeScript, designed for staff operating in hazardous environments. The platform allows uploading of staff profiles and medical records, facilitates consultations, highlights abnormal health conditions, and integrates comprehensive checklists for ambulance preparedness and medicine inventory. This system improves on-site safety compliance and supports proactive health management across the organization.",
      tools: ["react", "vite", 'restApi', "typescript", "docker"],
      thumbnail: thumbail1,
      screenshots: [
        thumbail1,
        carehq2,
        carehq3,
        carehq4,
        carehq5,
        carehq6,
        carehq7
      ],
      hasLiveLink: false,
      category: "Web App"
    },
    {
      id: 4,
      title: "WiReTime",
      description: "Developed a workforce management platform used by 50+ team members to track tasks and time, improving productivity by 40%. WireTime using Vite, TypeScript, React (MUI). The application streamlines task assignment, real-time punch-in/out tracking with geolocation, leave management, and automated email notifications. Additional modules include user profile customization and a dynamic dashboard, empowering managers with clear visibility into project progress and team productivity.",
      tools: ["vite", 'restApi', "typescript", "docker"],
      thumbnail: wiretime1,
      screenshots: [
        wiretime1,
        wiretime2,
        wiretime3,
        wiretime4,
        wiretime5,
        wiretime6,
        wiretime7

      ],

      hasLiveLink: false,
      category: "Web App"
    },
    {
      id: 5,
      title: "Sports Portal",
      description: "Developed an interactive Sports Portal using React, enabling users to explore training batches based on location and age group, choose from multiple packages, and seamlessly complete online payments. The platform features a dynamic landing page for user engagement and streamlines the booking process for sports programs. On the admin side, it supports batch creation, with functionalities to add trainers, configure package pricing, assign time slots, and monitor user activity. This system enhances operational efficiency and provides a unified interface for both users and administrators in managing sports training programs.",
      tools: ["react", 'MUI', 'css', "docker", 'restApi'],
      thumbnail: sports1,
      screenshots: [
        sports1,
        sports2,
        sports3,
        sports4,
        sports5

      ],
      hasLiveLink: false,
      category: "Web App"
    },

  ];

  const openProject = (project: Project) => {
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
      <main className="pt-24 pb-20">
        <BackgroundBeams />
           <ShootingStars />
      <StarsBackground />
        <div className="container mx-auto px-6 ">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10000">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-glass backdrop-blur-xl rounded-2xl overflow-hidden border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
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
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
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
              className="rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex">
                {/* Left side - Details */}
                <div className="flex-1 p-8 overflow-y-auto max-h-[90vh] flex items-center text-white justify-center">
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