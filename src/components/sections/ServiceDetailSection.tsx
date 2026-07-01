import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check, CheckCircle2, Globe, Smartphone, Server, Cloud, ShoppingCart, Blocks, Sparkles, Code, Package, MessageCircle, Bot, Settings, PenTool, Wrench, ChevronRight, Gamepad2, Glasses, FileSpreadsheet } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import web_img from "../../assets/services/web_dev.svg";
import mobile_img from "../../assets/services/mobile_dev.svg";
import ecommerce_img from "../../assets/services/e_commerce.svg";
import erp_img from "../../assets/services/erp.svg";
import file_img from "../../assets/services/file_management.svg";
import server_img from "../../assets/services/server.svg";

// We augment the services with the detailed fields required by the old layout
export const extendedServiceData = [
  {
    id: "ai",
    icon: Bot,
    tagline: "smart predictive autonomous",
    title: "AI Integration",
    description: "Embedding cutting-edge Artificial Intelligence models into your existing applications to automate complex decision-making.",
    benefits: [
      "AI Product Development",
      "AI Calling Agents",
      "Predictive trend analysis",
      "Natural language processing"
    ],
    imageUrl: file_img,
    delivery: {
      title: "Intelligent Systems",
      description: "Next-generation capabilities for modern apps.",
      features: [
        "Custom LLM fine-tuning",
        "Image & text generation",
        "Automated data insights"
      ],
    }
  },
  {
    id: "custom-software",
    icon: Code,
    tagline: "tailored robust scalable",
    title: "Custom Software Development",
    description: "Tailored software solutions designed from the ground up to perfectly align with your unique business logic and operational needs.",
    benefits: [
      "Perfectly mapped to your workflows",
      "Scalable for future business growth",
      "No recurring licensing fees",
      "AI Integrations"
    ],
    imageUrl: web_img,
    delivery: {
      title: "End-to-End Engineering",
      description: "From concept to deployment, we build software that works for you.",
      features: [
        "Bespoke business logic",
        "Secure cloud deployment",
        "Continuous integration"
      ],
    }
  },
  {
    id: "erp",
    icon: Blocks,
    tagline: "centralize automate grow",
    title: "ERP Solutions",
    description: "Comprehensive Enterprise Resource Planning systems to centralize data, automate workflows, and optimize resource management.",
    benefits: [
      "Unified data access across departments",
      "Automated manual workflows",
      "Real-time business insights",
      "AI Integrations"
    ],
    imageUrl: erp_img,
    delivery: {
      title: "Business OS Blueprint",
      description: "Centralized control for complex business operations.",
      features: [
        "Role-based access control",
        "Financial reporting dashboard",
        "Third-party API integration"
      ],
    }
  },
  {
    id: "inventory",
    icon: Package,
    tagline: "track predict deliver",
    title: "Inventory Management",
    description: "Smart tracking systems to monitor stock levels, predict demand, and streamline your supply chain operations in real-time.",
    benefits: [
      "Prevent stockouts and overstocking",
      "Real-time location tracking",
      "Automated reorder alerts",
      "AI Integrations"
    ],
    imageUrl: ecommerce_img,
    delivery: {
      title: "Smart Supply Chain",
      description: "Complete visibility over your physical assets.",
      features: [
        "Multi-warehouse support",
        "Supplier management portal",
        "Demand forecasting AI"
      ],
    }
  },
  {
    id: "server",
    icon: Server,
    tagline: "secure reliable efficient",
    title: "Server Management",
    description: "Secure setup, monitoring, and maintenance of your server infrastructure ensuring maximum uptime and data protection.",
    benefits: [
      "Guaranteed 99.9% uptime",
      "Proactive security patching",
      "Automated disaster recovery",
      "AI Integrations"
    ],
    imageUrl: server_img,
    delivery: {
      title: "Infrastructure as a Service",
      description: "Rock-solid foundations for digital products.",
      features: [
        "24/7 performance monitoring",
        "Automated daily backups",
        "Load balancing setup"
      ],
    }
  },
  {
    id: "whatsapp",
    icon: SiWhatsapp,
    tagline: "connect engage resolve",
    title: "WhatsApp Integration",
    description: "Automated WhatsApp API solutions for instant customer support, notifications, and interactive chatbot flows.",
    benefits: [
      "Direct channel to customers",
      "Automated support resolution",
      "Rich media message templates",
      "AI Integrations"
    ],
    imageUrl: mobile_img,
    delivery: {
      title: "Conversational Commerce",
      description: "Engage users where they already are.",
      features: [
        "Automated chat flows",
        "Template message broadcasting",
        "Human-handoff capability"
      ],
    }
  },
  {
    id: "mobile",
    icon: Smartphone,
    tagline: "native fluid engaging",
    title: "Mobile App Development",
    description: "High-performance native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    benefits: [
      "Access to device hardware features",
      "Offline functionality capabilities",
      "Push notification engagement",
      "AI Integrations"
    ],
    imageUrl: mobile_img,
    delivery: {
      title: "Mobile First Strategy",
      description: "Putting your business in the user's pocket.",
      features: [
        "React Native / Flutter builds",
        "App Store & Play Store publishing",
        "Secure offline data sync"
      ],
    }
  },
  {
    id: "web",
    icon: Globe,
    tagline: "fast modern scalable",
    title: "Web Development",
    description: "Modern, responsive, and SEO-optimized web applications built to convert visitors and scale seamlessly.",
    benefits: [
      "Enhanced brand credibility",
      "Faster load times & improved SEO",
      "Scalable & maintainable codebase",
      "AI Integrations"
    ],
    imageUrl: web_img,
    delivery: {
      title: "Design with Speed",
      description: "Clean UI, scalable architecture, and performance first engineering.",
      features: [
        "Responsive web apps",
        "SEO-optimized structure",
        "CMS admin panels"
      ],
    }
  },
  {
    id: "cloud",
    icon: Cloud,
    tagline: "agile secure limitless",
    title: "Cloud Solutions",
    description: "Robust cloud architecture setups providing scalable compute power, secure data storage, and efficient CI/CD pipelines.",
    benefits: [
      "Pay-as-you-go cost efficiency",
      "Infinite horizontal scaling",
      "Global content delivery",
      "AI Integrations"
    ],
    imageUrl: file_img,
    delivery: {
      title: "Cloud Native Architecture",
      description: "Deploy faster, scale indefinitely.",
      features: [
        "AWS/GCP/Azure migrations",
        "Kubernetes orchestration",
        "Automated CI/CD pipelines"
      ],
    }
  },
  {
    id: "plc",
    icon: Settings,
    tagline: "connect monitor control",
    title: "PLC Integration",
    description: "Connecting heavy industrial machinery with digital dashboards using Programmable Logic Controllers for IoT monitoring.",
    benefits: [
      "Real-time machine telemetry",
      "Predictive maintenance alerts",
      "Remote operational control",
      "AI Integrations"
    ],
    imageUrl: erp_img,
    delivery: {
      title: "Industrial IoT",
      description: "Bridging the physical and digital factory.",
      features: [
        "Sensor data aggregation",
        "Real-time monitoring dashboards",
        "Automated safety protocols"
      ],
    }
  },
  {
    id: "uiux",
    icon: PenTool,
    tagline: "intuitive beautiful accessible",
    title: "UI/UX Design",
    description: "Crafting intuitive, beautiful, and user-centric interfaces that enhance engagement and simplify complex user journeys.",
    benefits: [
      "Higher user retention rates",
      "Reduced cognitive load",
      "Accessible to all demographics",
      "AI Integrations"
    ],
    imageUrl: web_img,
    delivery: {
      title: "User-Centric Design",
      description: "Experiences people love to use.",
      features: [
        "High-fidelity prototyping",
        "User journey mapping",
        "Comprehensive design systems"
      ],
    }
  },
  {
    id: "support",
    icon: Wrench,
    tagline: "maintain optimize protect",
    title: "Support & Maintenance",
    description: "Reliable ongoing technical support and proactive system maintenance to keep your digital products running flawlessly.",
    benefits: [
      "Peace of mind operations",
      "Continuous performance optimization",
      "Rapid bug resolution",
      "AI Integrations"
    ],
    imageUrl: erp_img,
    delivery: {
      title: "Proactive Care",
      description: "We handle the tech so you can handle business.",
      features: [
        "SLA-backed response times",
        "Monthly health reports",
        "Continuous security scanning"
      ],
    }
  },
  {
    id: "ar-vr",
    icon: Glasses,
    tagline: "immerse visualize train",
    title: "AR/VR Solutions",
    description: "Immersive Augmented and Virtual Reality experiences tailored for training, product visualization, and interactive marketing.",
    benefits: [
      "Engaging product visualizations",
      "Safe virtual training environments",
      "Interactive marketing campaigns",
      "AI Integrations"
    ],
    imageUrl: web_img,
    delivery: {
      title: "Immersive Experiences",
      description: "Bringing your physical world into the digital realm.",
      features: [
        "WebXR & native VR apps",
        "3D modeling & optimization",
        "Cross-platform headset support"
      ],
    }
  },
  {
    id: "gaming",
    icon: Gamepad2,
    tagline: "play engage scale",
    title: "Gaming Development",
    description: "End-to-end game development services creating engaging, performant, and scalable gaming experiences across multiple platforms.",
    benefits: [
      "High-performance rendering",
      "Cross-platform multiplayer architecture",
      "Engaging gameplay mechanics",
      "AI Integrations"
    ],
    imageUrl: mobile_img,
    delivery: {
      title: "Interactive Entertainment",
      description: "Building worlds that captivate players.",
      features: [
        "Unity & Unreal Engine",
        "Backend server infrastructure",
        "Asset creation & animation"
      ],
    }
  },
  {
    id: "excel-automation",
    icon: FileSpreadsheet,
    tagline: "automate migrate optimize",
    title: "Excel to Automation",
    description: "Transforming cumbersome Excel spreadsheets into streamlined, secure, and fully automated web applications or workflows.",
    benefits: [
      "Eliminate manual data entry errors",
      "Secure cloud database storage",
      "Real-time team collaboration",
      "AI Integrations"
    ],
    imageUrl: file_img,
    delivery: {
      title: "Workflow Modernization",
      description: "Turning spreadsheets into powerful software.",
      features: [
        "Data schema migration",
        "Custom analytics dashboards",
        "API integration & webhooks"
      ],
    }
  }
];

const ServiceCard: React.FC<{ service: typeof extendedServiceData[0] }> = ({ service }) => {
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <div 
      onClick={() => navigate(`/services/${service.id}`)}
      className="group relative bg-white/80 backdrop-blur-md rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 hover:shadow-primary-500/10 transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        
        {/* Floating Tagline Badge */}
        <div className="mb-6">
          <span className="inline-flex px-3 py-1 bg-primary-50 border border-primary-100 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-600 shadow-sm">
            {service.tagline}
          </span>
        </div>
        
        {/* Title & Icon */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative w-12 h-12 flex-shrink-0 rounded-2xl p-[2px] bg-gradient-to-br from-slate-200/60 to-slate-100 group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-500 shadow-inner">
            <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary-500" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
              {service.title}
            </h2>
          </div>
        </div>

        <p className="text-slate-500 text-xs leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features Grid */}
        <div className="flex flex-col gap-y-2 mb-8 flex-grow">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                <Check className="w-3 h-3 text-emerald-500" strokeWidth={3} />
              </div>
              <span className="text-xs font-bold text-slate-600 leading-tight">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Footer / Action */}
        <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Delivering</span>
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary-500" />
              {service.delivery.title}
            </span>
          </div>
          
          <button 
            onClick={() => navigate(`/services/${service.id}`)}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/20 hover:shadow-secondary-500/30 transition-all group/btn flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export const ServiceDetails: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="py-24 bg-transparent w-full">
      <div className="max-w-[85rem] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full border border-primary-100 mb-6 inline-block">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Engineering Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Modern Enterprises
            </span>
          </h2>
        </div>

        {/* 3 columns per row Dribbble-inspired grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {extendedServiceData.map((service, index) => (
            <div id={service.id} key={index}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
