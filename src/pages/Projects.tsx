import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ecommerse0 from "../assets/Ecommerse/0.png";
import ecommerse1 from "../assets/Ecommerse/1.png";
import ecommerse2 from "../assets/Ecommerse/2.png";
import ecommerse3 from "../assets/Ecommerse/3.png";
import ecommerse4 from "../assets/Ecommerse/4.png";
import ecommerse5 from "../assets/Ecommerse/5.png";
import ecommerse6 from "../assets/Ecommerse/6.png";

import gemini1 from "../assets/chatapp/1.png";
import gemini2 from "../assets/chatapp/2.png";
import gemini3 from "../assets/chatapp/3.png";
import gemini4 from "../assets/chatapp/4.png";
import gemini5 from "../assets/chatapp/5.png";
import gemini6 from "../assets/chatapp/6.png";

import thumbail1 from "../assets/CareHQ/1.png";
import carehq2 from "../assets/CareHQ/2.png";
import carehq3 from "../assets/CareHQ/3.png";
import carehq4 from "../assets/CareHQ/4.png";
import carehq5 from "../assets/CareHQ/5.png";
import carehq6 from "../assets/CareHQ/6.png";
import carehq7 from "../assets/CareHQ/7.png";

import wiretime1 from "../assets/WireTime/1.jpeg";
import wiretime2 from "../assets/WireTime/2.jpeg";
import wiretime3 from "../assets/WireTime/3.png";
import wiretime4 from "../assets/WireTime/4.png";
import wiretime5 from "../assets/WireTime/5.png";
import wiretime6 from "../assets/WireTime/6.png";
import wiretime7 from "../assets/WireTime/7.jpeg";

import sports1 from "../assets/sportsportal/1.png";
import sports2 from "../assets/sportsportal/2.png";
import sports3 from "../assets/sportsportal/3.png";
import sports4 from "../assets/sportsportal/4.png";
import sports5 from "../assets/sportsportal/5.png";

import analitics1 from "../assets/analytics/1.png";
import analitics2 from "../assets/analytics/2.png";
import analitics3 from "../assets/analytics/3.png";
import analitics4 from "../assets/analytics/4.png";
import analitics5 from "../assets/analytics/5.png";


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

  // const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>([]);

  const projectDetails = [
    {
      id: 1,
      title: "Jewellery Ecommerce App",
      description: "Developed a comprehensive Ecommerce platform for jewellery, Home page with diffrent diffrent categories.",
      tools: ['Next.JS', 'Tailwind CSS', 'NodeJs', 'Express', 'MongoDB'],
      thumbnail: ecommerse0,
      screenshots: [
        ecommerse0,
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
      liveLink: "",
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
      liveLink: "",
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
      liveLink: "",
      hasLiveLink: false,
      category: "Web App"
    },
    {
      id: 6,
      title: 'Analitics Dashboard',
      description: 'Developed a futuristic analytics dashboard that visualizes business performance through dynamic, interactive charts. Users can upload sales data via CSV, which is then processed through n8n automation workflows and displayed as actionable insights. The dashboard features a responsive, glassmorphic UI with dark mode support, enabling intuitive analysis of KPIs like sales, taxes, stock, and payment trends.',
      tools: ['NexxtJs', 'TypeScript', 'n8n Automation', 'Charts.js', 'Tailwind CSS'],
      thumbnail: analitics1,
      screenshots: [
        analitics1,
        analitics2,
        analitics3,
        analitics4,
        analitics5
      ],
      liveLink: "",
      hasLiveLink: false,
      category: "Web App"
    }



  ];

  const openProject = (project: ProjectDetails) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // const nextImage = () => {
  //   if (selectedProject && currentImageIndex < selectedProject.screenshots.length - 1) {
  //     setCurrentImageIndex(currentImageIndex + 1);
  //   }
  // };

  // const prevImage = () => {
  //   if (currentImageIndex > 0) {
  //     setCurrentImageIndex(currentImageIndex - 1);
  //   }
  // };

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
              <div className="shadow-xl rounded-3xl bg-gray-100 dark:bg-zinc-800 overflow-hidden transition-all duration-100 ease-out hover:shadow-2xl hover:scale-105">
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

                  <p className="text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded">
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
                      className="border-none w-full rounded-xl font-bold p-6 bg-gradient-repeat text-white hover:shadow-xl link-focus"
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
                        className="hover:bg-destructive/10 hover:text-destructive cursor-pointer link-focus"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>

                    <p className="text-lg mb-8 leading-relaxed">
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
                <div className="flex-1 p-6 overflow-y-auto max-h-[90vh]">
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