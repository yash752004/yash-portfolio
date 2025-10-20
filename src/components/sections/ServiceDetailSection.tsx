import { Button } from "@/components/ui/button";
import { Blocks, Check, CircleCheckBig, Cloud, Globe, Server, ShoppingCart, Smartphone, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import web_img from "../../assets/services/web_dev.svg";
import mobile_img from "../../assets/services/mobile_dev.svg";
import ecommerce_img from "../../assets/services/e_commerce.svg";
import erp_img from "../../assets/services/erp.svg";
import file_img from "../../assets/services/file_management.svg";
import server_img from "../../assets/services/server.svg";

export const serviceData = [
  {
    id: "webDevelopment",
    icon: Globe,
    tagline: "fast modern scalable",
    title: "Web Development",
    description: "Get responsive, high performance websites and web apps that reflect your brand, drive engagement, and scale effortlessly as your business grows.",
    benefits: [
      "Enhanced brand credibility",
      "Faster load times & improved SEO",
      "Scalable & maintainable codebase",
      "Consistent cross-device experience"
    ],
    imageUrl: web_img,
    delivery: {
      title: "Design with Speed",
      description: "Clean UI, scalable architecture, and performance first engineering.",
      features: [
        "Responsive website or web app",
        "SEO-optimized structure",
        "CMS or admin panel",
      ],
    }
  },
  {
    id: "mobileDevelopment",
    icon: Smartphone,
    tagline: "Your business in every hand",
    title: "Mobile App Development",
    description: "From native Android and iOS apps to cross-platform solutions, we create intuitive, secure, and user-focused mobile experiences that connect you directly with your audience.",
    benefits: [
      "Broader market reach and engagement",
      "Increased customer retention through convenience",
      "Integration with business tools and databases",
      "Scalable updates and feature expansion",
    ],
    imageUrl: mobile_img,
    delivery: {
      title: "Everywhere Access",
      description: "Seamless access to your services from any device.",
      features: [
        "iOS and Android applications",
        "Admin dashboard and API integration",
        "UI/UX design optimized for mobile",
        "Testing and app store deployment",
      ],
    }
  },
  {
    id: "privateServerManagement",
    icon: Server,
    tagline: "secure reliable efficient",
    title: "Private Server & Infrastructure Management",
    description: "Set up and manage private servers, home or hybrid clouds, and virtualized systems—providing secure hosting, backups, and maintenance for your applications and media.",
    benefits: [
      "Data privacy and ownership",
      "Cost-effective compared to third-party hosting",
      "Customizable and scalable infrastructure",
      "Improved security through isolation and monitoring",
    ],
    imageUrl: server_img,
    delivery: {
      title: "Robust Infrastructure",
      description: "Reliable and secure server solutions tailored to your needs.",
      features: [
        "Server setup (Linux/Proxmox/Docker)",
        "Virtualization and container orchestration",
        "Automated backup and monitoring system",
        "Maintenance and support documentation",
      ],
    }
  },
  {
    id: "mediaFileSystemSolutions",
    icon: Cloud,
    tagline: "Access files anywhere",
    title: "Media & File System Solutions",
    description: "We build private media servers and intelligent file management systems that make storing, streaming, and sharing your digital assets effortless and secure.",
    benefits: [
      "Centralized, private access to your media",
      "Reduced dependency on external storage providers",
      "Faster internal media workflows",
      "Scalability for growing digital assets",
    ],
    imageUrl: file_img,
    delivery: {
      title: "Streamlined Media Access",
      description: "Secure storage. Smart organization. Seamless access.",
      features: [
        "Media server (Plex, Jellyfin, Nextcloud, etc.)",
        "Secure file management interface",
        "Automated backup and transcoding setup",
        "Multi-device access system",
      ],
    }
  },
  {
    id: "ecommerceDevelopment",
    icon: ShoppingCart,
    tagline: "Sell online effortlessly",
    title: "E-Commerce Development & Integration",
    description: "Launch and optimize your online store with custom e-commerce solutions. We create seamless shopping experiences that drive sales, enhance customer satisfaction, and integrate with your existing systems.",
    benefits: [
      "Increased online revenue channels",
      "Streamlined sales and fulfillment processes",
      "Secure, optimized checkout experiences",
      "Scalable foundation for future growth",
    ],
    imageUrl: ecommerce_img,
    delivery: {
      title: "E-Commerce Solutions",
      description: "Sell smarter. Grow faster.",
      features: [
        "Custom e-commerce website or platform integration",
        "Product management system",
        "Payment gateway setup (Stripe, Razorpay, PayPal)",
        "Order tracking and analytics dashboard",
      ],
    }
  },
  {
    id: "customSoftwareDevelopment",
    icon: Blocks,
    tagline: "Automate your business",
    title: "ERP Systems & Business Automation",
    description: "Optimize your operations with custom ERP solutions. We develop integrated systems that automate workflows, manage resources, and provide real-time insights to drive efficiency and growth.",
    benefits: [
      "Improved operational efficiency",
      "Centralized business intelligence",
      "Reduced manual work and errors",
      "Real-time insights for better decision-making",
    ],
    imageUrl: erp_img,
    delivery: {
      title: "ERP with Business Automation",
      description: "Connect, simplify, and scale your operations.",
      features: [
        "Custom ERP or modular system",
        "Role-based dashboards and analytics",
        "API integration with existing tools",
        "Deployment, training, and documentation",
      ],
    }
  },
];

const NarrowPart = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:bg-secondary-100 lg:dark:bg-stone-700 w-full lg:w-125 shrink-0 px-4 lg:px-12 py-0 lg:py-30 flex flex-col gap-8 items-start justify-center">
      {children}
    </div>
  );
};

const WidePart = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full py-0 lg:py-20 px-4 lg:pl-6 flex flex-col justify-center gap-4">
      {children}
    </div>
  );
}

const ImagePart = ({ service }: { service: typeof serviceData[0] }) => {
  return (
    <div className="w-full overflow-hidden">
      <img src={service.imageUrl} alt="img" className="w-full h-80 object-contain" />
      <div className="p-6 rounded-2xl bg-primary-500 dark:bg-gray-700 text-white space-y-2">
        <h3 className="text-xl font-semibold">{service.delivery.title}</h3>
        <p className="opacity-90">{service.delivery.description}</p>
        <ul className="space-y-2 mt-4">
          {service.delivery.features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <Check size={20} className="text-secondary-300 stroke-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DetailPart = ({ service }: { service: typeof serviceData[0] }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove '#'
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div id={service.id} className="flex items-center gap-3 text-primary-600 dark:text-primary-300">
        <div className="rounded-full bg-white p-2 dark:bg-stone-500">
          <Sparkles className="w-6 h-6" />
        </div>
        <span className="text-sm font-medium uppercase tracking-wider">{service.tagline}</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">{service.title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">{service.description}</p>

      <div className="w-full">
        <ul className="text-gray-600 dark:text-gray-300 space-y-2">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex gap-2">
              <CircleCheckBig size={20} className="stroke-3 text-emerald-500" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <p className=" text-gray-600 dark:text-gray-300 hover:text-primary-600">Contact Us And</p>
        <Button size="sm" onClick={() => navigate("/contact")}>Get a Quote</Button>
      </div>
    </>
  );
};

export const ServiceDetails = () => {
  return (
    <section className="page-section p-0 gap-30 lg:gap-0 mb-20 lg:mb-0">
      {/* Decorative blurred shapes */}
      {/* <div className="absolute -left-24 -top-24 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl pointer-events-none dark:bg-primary-700/20" />
      <div className="absolute -right-28 -bottom-28 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl pointer-events-none dark:bg-purple-900/20" /> */}

      {serviceData.map((service, index) => (
        <div key={index} className="container flex-col-reverse even:flex-col lg:flex-row lg:even:flex-row gap-8 p-0 justify-between items-stretch">
          {index % 2 === 0
            ? <>
              <WidePart><ImagePart service={service} /></WidePart>
              <NarrowPart><DetailPart service={service} /></NarrowPart>
            </>
            : <>
              <WidePart><DetailPart service={service} /></WidePart>
              <NarrowPart><ImagePart service={service} /></NarrowPart>
            </>
          }
        </div>
      ))}
    </section>
  );
};
