import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowUpRight, 
  Layers, 
  Globe, 
  Cloud, 
  Sparkles,
  Zap,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Importing local high-fidelity assets
import img1 from "@/assets/1.webp";
import img2 from "@/assets/2.webp";
import img3 from "@/assets/3.webp";
import img4 from "@/assets/4.webp";
import shopImg from "@/assets/services/e_commerce.svg";
import cloudImg from "@/assets/services/server.svg";
import erpImg from "@/assets/services/erp.svg";
import fileImg from "@/assets/services/file_management.svg";
import webImg from "@/assets/services/web_dev.svg";

interface Project {
  id: string;
  title: string;
  category: "saas" | "web" | "cloud";
  categoryLabel: string;
  desc: string;
  metrics: string;
  metricsLabel: string;
  tech: string[];
  features: string[];
  image: string;
  imagesGrid: string[]; // Multiple images for the right-hand modal grid
}

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "saas" | "web" | "cloud">("all");
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "crm",
      title: "Enterprise SaaS CRM Platform",
      category: "saas",
      categoryLabel: "SaaS Platform",
      desc: "A multi-tenant customer relationship platform with custom pipeline drag-drop boards, automated email triggers, and high-performance charts.",
      metrics: "+140% speed optimization",
      metricsLabel: "Operations speedup",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      features: ["Drag-and-drop pipelines", "Real-time client telemetry", "Automatic webhook triggers"],
      image: img1,
      imagesGrid: [img1, img2, img3, img4]
    },
    {
      id: "shop",
      title: "High-Volume B2B E-Commerce Suite",
      category: "web",
      categoryLabel: "Web Application",
      desc: "Lightning fast shopping experience with instant catalog queries, elastic search integration, and automated inventory sync networks.",
      metrics: "3.2x conversion growth",
      metricsLabel: "Conversion velocity increase",
      tech: ["Next.js", "Tailwind CSS", "Redis", "Elasticsearch"],
      features: ["Instant checkouts", "Inventory auto-syncing", "Aggregated search filters"],
      image: shopImg,
      imagesGrid: [shopImg, webImg, img2, fileImg]
    },
    {
      id: "monitor",
      title: "Hardened AWS Cloud Monitoring Engine",
      category: "cloud",
      categoryLabel: "Cloud Architecture",
      desc: "Infrastructure as Code blueprints deploying self-healing web node pools with integrated real-time cost anomaly alarms.",
      metrics: "99.99% operational uptime",
      metricsLabel: "Production guarantee Uptime",
      tech: ["AWS", "Terraform", "Docker", "Kubernetes"],
      features: ["Auto-healing deployments", "Cost logging anomalies", "Prompt CI/CD releases"],
      image: cloudImg,
      imagesGrid: [cloudImg, erpImg, fileImg, img4]
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen relative bg-slate-50">
      <Header />

      {/* Decorative Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Title */}
          <div className="text-center mb-16 space-y-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
              Our Works
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">
              DELIVERED AGENCY <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                PRODUCT CASE STUDIES
              </span>
            </h1>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Explore custom systems, production platforms, and scalable cloud structures built by Pinak Technology.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {(["all", "saas", "web", "cloud"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all ${
                    filter === cat 
                      ? "bg-slate-900 border-slate-900 text-white shadow-sm" 
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  {cat === "all" ? "All Works" : cat === "saas" ? "SaaS platforms" : cat === "web" ? "Web apps" : "Cloud ops"}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className="bg-glass-premium border border-slate-200/60 rounded-[32px] overflow-hidden shadow-xl card-hover-effect flex flex-col justify-between cursor-pointer group"
              >
                {/* Project Image Header */}
                <div className="h-48 w-full overflow-hidden bg-slate-100/50 relative flex items-center justify-center p-6 border-b border-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="max-h-full max-w-full object-contain group-hover:scale-[1.05] transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
                </div>

                {/* Content details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {project.categoryLabel}
                      </span>
                      <ArrowUpRight className="size-4 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    
                    <h3 className="font-extrabold text-slate-800 text-lg leading-tight group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[9px] font-extrabold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 bg-slate-50/50 rounded-2xl border border-slate-100 flex items-center justify-between">
                      <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">Metrics Proven</span>
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-0.5">
                        <TrendingUp className="size-3.5 text-primary-500" /> {project.metrics}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Floating Detailed Overlay Modal - Dribbble Style Case Study */}
      {activeProject && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8 z-[9999] animate-fadeIn">
          {projects.filter(p => p.id === activeProject).map((project) => (
            <div key={project.id} className="bg-white rounded-[2rem] w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
              
              {/* Close Button */}
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 size-10 rounded-full bg-white/90 backdrop-blur shadow-sm hover:bg-slate-100 text-slate-600 hover:text-slate-900 font-extrabold flex items-center justify-center transition-all z-20"
              >
                <span className="sr-only">Close</span>
                ✕
              </button>

              {/* Dribbble Style Hero */}
              <div className="w-full h-[35vh] md:h-[45vh] bg-slate-50 relative flex items-center justify-center overflow-hidden border-b border-slate-100">
                 {/* Blurred Background */}
                 <div className="absolute inset-0 z-0">
                   <img src={project.imagesGrid[0]} alt="Background blur" className="w-full h-full object-cover blur-2xl opacity-30 scale-110" />
                 </div>
                 {/* Hero Image */}
                 <img src={project.imagesGrid[0]} alt={project.title} className="max-w-[90%] max-h-[85%] object-contain relative z-10 drop-shadow-2xl rounded-2xl transition-transform duration-700 hover:scale-105" />
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
                 
                 {/* Left: Info & Story (Sticky) */}
                 <div className="lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-8 h-fit">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full border border-primary-100 mb-6 inline-block">
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-4">{project.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{project.desc}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block mb-3">Technologies Used</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                           <span key={i} className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                             {t}
                           </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics ROI */}
                    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 rounded-3xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <TrendingUp className="size-20" />
                      </div>
                      <span className="text-[10px] text-primary-500 font-extrabold uppercase tracking-wider block mb-2 relative z-10">Business Impact</span>
                      <span className="text-3xl font-black text-slate-800 block relative z-10 mb-1">{project.metrics}</span>
                      <span className="text-sm text-slate-500 font-medium relative z-10">{project.metricsLabel}</span>
                    </div>

                    <button 
                      onClick={() => {
                        setActiveProject(null);
                        navigate('/contact');
                      }}
                      className="w-full py-4 bg-slate-900 hover:bg-primary-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Start a Similar Project <ArrowUpRight className="size-4" />
                    </button>
                 </div>

                 {/* Right: Detailed Features & Visual Gallery */}
                 <div className="lg:w-2/3 flex flex-col gap-12">
                    
                    {/* Platform Highlights (Bento Grid Style) */}
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Key Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-4 text-sm text-slate-700 font-medium bg-slate-50/50 hover:bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-colors">
                            <CheckCircle className="size-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Visual Gallery */}
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Visual Blueprints</h4>
                      <div className="flex flex-col gap-8">
                         {project.imagesGrid.map((img, index) => (
                            <div key={index} className="w-full bg-slate-50 rounded-[2rem] border border-slate-100 p-4 sm:p-8 flex items-center justify-center overflow-hidden group">
                               <img src={img} alt={`Gallery ${index + 1}`} className="max-w-full rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                         ))}
                      </div>
                    </div>

                 </div>
              </div>

            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;