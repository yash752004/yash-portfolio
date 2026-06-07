import React from "react";
import { 
  Code, Blocks, Package, Server, MessageCircle, Bot, 
  Smartphone, Globe, Cloud, Settings, PenTool, Wrench,
  Gamepad2, Glasses, FileSpreadsheet
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export interface ServiceData {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  points: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    desc: "Tailored software solutions designed from the ground up to perfectly align with your unique business logic and operational needs.",
    icon: <Code className="size-6 text-primary-500" />,
    points: ["Scalable architectures", "Bespoke business logic", "End-to-end delivery"]
  },
  {
    id: "erp",
    title: "ERP Solutions",
    desc: "Comprehensive Enterprise Resource Planning systems to centralize data, automate workflows, and optimize resource management.",
    icon: <Blocks className="size-6 text-secondary-500" />,
    points: ["Workflow automation", "Centralized dashboards", "Data synchronization"]
  },
  {
    id: "inventory",
    title: "Inventory Management",
    desc: "As a specialized warehouse management software development company, we build smart tracking systems to monitor stock levels, predict demand, and streamline supply chains.",
    icon: <Package className="size-6 text-cyan-500" />,
    points: ["Real-time stock tracking", "Demand forecasting", "Supplier integrations"]
  },
  {
    id: "server",
    title: "Server Management",
    desc: "Secure setup, monitoring, and maintenance of your server infrastructure ensuring maximum uptime and data protection.",
    icon: <Server className="size-6 text-emerald-500" />,
    points: ["24/7 monitoring", "Automated backups", "Security patching"]
  },
  {
    id: "whatsapp",
    title: "WhatsApp Integration",
    desc: "Automated WhatsApp API solutions for instant customer support, notifications, and interactive chatbot flows.",
    icon: <SiWhatsapp className="size-6 text-green-500" />,
    points: ["Automated notifications", "Customer support bots", "API integrations"]
  },
  {
    id: "ai",
    title: "AI Integration",
    desc: "Embedding cutting-edge Artificial Intelligence models into your existing applications to automate complex decision-making.",
    icon: <Bot className="size-6 text-indigo-500" />,
    points: ["Predictive analytics", "LLM integrations", "Automated insights"]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    desc: "High-performance native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    icon: <Smartphone className="size-6 text-rose-500" />,
    points: ["iOS & Android apps", "Cross-platform tech", "App store deployment"]
  },
  {
    id: "web",
    title: "Web Development",
    desc: "Modern, responsive, and SEO-optimized web applications built to convert visitors and scale seamlessly.",
    icon: <Globe className="size-6 text-blue-500" />,
    points: ["React & Next.js", "SEO optimized", "High conversion UI"]
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    desc: "Robust cloud architecture setups providing scalable compute power, secure data storage, and efficient CI/CD pipelines.",
    icon: <Cloud className="size-6 text-sky-500" />,
    points: ["AWS / Azure / GCP", "Auto-scaling infrastructure", "DevOps pipelines"]
  },
  {
    id: "plc",
    title: "PLC Integration (Heavy Machine)",
    desc: "Connecting heavy industrial machinery with digital dashboards using Programmable Logic Controllers for IoT monitoring.",
    icon: <Settings className="size-6 text-slate-600" />,
    points: ["IoT monitoring", "Real-time hardware data", "Industrial automation"]
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    desc: "Crafting intuitive, beautiful, and user-centric interfaces that enhance engagement and simplify complex user journeys.",
    icon: <PenTool className="size-6 text-fuchsia-500" />,
    points: ["Wireframing & Prototyping", "User research", "Pixel-perfect design"]
  },
  {
    id: "support",
    title: "Support & Maintenance",
    desc: "Reliable ongoing technical support and proactive system maintenance to keep your digital products running flawlessly.",
    icon: <Wrench className="size-6 text-amber-500" />,
    points: ["Bug fixes & updates", "Performance tuning", "24/7 technical support"]
  },
  {
    id: "ar-vr",
    title: "AR/VR Solutions",
    desc: "Immersive Augmented and Virtual Reality experiences tailored for training, product visualization, and interactive marketing.",
    icon: <Glasses className="size-6 text-purple-500" />,
    points: ["Immersive experiences", "Product visualization", "Virtual training"]
  },
  {
    id: "gaming",
    title: "Gaming Development",
    desc: "End-to-end game development services creating engaging, performant, and scalable gaming experiences across multiple platforms.",
    icon: <Gamepad2 className="size-6 text-red-500" />,
    points: ["Unity & Unreal Engine", "Multiplayer architectures", "Cross-platform"]
  },
  {
    id: "excel-automation",
    title: "Excel to Automation",
    desc: "Transforming cumbersome Excel spreadsheets into streamlined, secure, and fully automated web applications or workflows.",
    icon: <FileSpreadsheet className="size-6 text-green-600" />,
    points: ["Data migration", "Workflow automation", "Custom dashboards"]
  }
];
