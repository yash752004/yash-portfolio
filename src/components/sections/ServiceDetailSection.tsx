import headerImage from "../../assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Check, CircleCheckBig, Cloud, Code, Code2, Database, Globe, Rocket, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const serviceData = [
  {
    id: "webDevelopment",
    icon: Globe,
    tagline: "fast modern scalable",
    title: "Web Development",
    description: "Build fast, modern, and scalable websites. We craft responsive, high-performance websites and web apps that reflect your brand, drive engagement, and scale effortlessly as your business grows.",
    benefits: [
      "Enhanced brand credibility",
      "Faster load times & improved SEO",
      "Scalable & maintainable codebase",
    ],
    imageUrl: headerImage,
    delivery: {
      title: "Design & Architecture",
      description: "Clean UI, scalable architecture, and performance-first engineering.",
      features: [
        "Responsive website or web app",
        "SEO-optimized structure",
        "CMS or admin panel",
      ],
    }
  },
  {
    id: "mobileDevelopment",
    icon: Database,
    tagline: "fast modern scalable",
    title: "Web Development",
    description: "Build fast, modern, and scalable websites. We craft responsive, high-performance websites and web apps that reflect your brand, drive engagement, and scale effortlessly as your business grows.",
    benefits: [
      "Enhanced brand credibility",
      "Faster load times & improved SEO",
      "Scalable & maintainable codebase",
    ],
    imageUrl: headerImage,
    delivery: {
      title: "Design & Architecture",
      description: "Clean UI, scalable architecture, and performance-first engineering.",
      features: [
        "Responsive website or web app",
        "SEO-optimized structure",
        "CMS or admin panel",
      ],
    }
  },
  {
    id: "ecommerceDevelopment",
    icon: Code,
    tagline: "fast modern scalable",
    title: "Web Development",
    description: "Build fast, modern, and scalable websites. We craft responsive, high-performance websites and web apps that reflect your brand, drive engagement, and scale effortlessly as your business grows.",
    benefits: [
      "Enhanced brand credibility",
      "Faster load times & improved SEO",
      "Scalable & maintainable codebase",
    ],
    imageUrl: headerImage,
    delivery: {
      title: "Design & Architecture",
      description: "Clean UI, scalable architecture, and performance-first engineering.",
      features: [
        "Responsive website or web app",
        "SEO-optimized structure",
        "CMS or admin panel",
      ],
    }
  },
  {
    id: "customSoftwareDevelopment",
    icon: Rocket,
    tagline: "fast modern scalable",
    title: "Web Development",
    description: "Build fast, modern, and scalable websites. We craft responsive, high-performance websites and web apps that reflect your brand, drive engagement, and scale effortlessly as your business grows.",
    benefits: [
      "Enhanced brand credibility",
      "Faster load times & improved SEO",
      "Scalable & maintainable codebase",
    ],
    imageUrl: headerImage,
    delivery: {
      title: "Design & Architecture",
      description: "Clean UI, scalable architecture, and performance-first engineering.",
      features: [
        "Responsive website or web app",
        "SEO-optimized structure",
        "CMS or admin panel",
      ],
    }
  },
  {
    id: "cmsDevelopment",
    icon: Code2,
    tagline: "fast modern scalable",
    title: "Web Development",
    description: "Build fast, modern, and scalable websites. We craft responsive, high-performance websites and web apps that reflect your brand, drive engagement, and scale effortlessly as your business grows.",
    benefits: [
      "Enhanced brand credibility",
      "Faster load times & improved SEO",
      "Scalable & maintainable codebase",
    ],
    imageUrl: headerImage,
    delivery: {
      title: "Design & Architecture",
      description: "Clean UI, scalable architecture, and performance-first engineering.",
      features: [
        "Responsive website or web app",
        "SEO-optimized structure",
        "CMS or admin panel",
      ],
    }
  },
  {
    id: "cloudSolutions",
    icon: Cloud,
    tagline: "fast modern scalable",
    title: "Web Development",
    description: "Build fast, modern, and scalable websites. We craft responsive, high-performance websites and web apps that reflect your brand, drive engagement, and scale effortlessly as your business grows.",
    benefits: [
      "Enhanced brand credibility",
      "Faster load times & improved SEO",
      "Scalable & maintainable codebase",
    ],
    imageUrl: headerImage,
    delivery: {
      title: "Design & Architecture",
      description: "Clean UI, scalable architecture, and performance-first engineering.",
      features: [
        "Responsive website or web app",
        "SEO-optimized structure",
        "CMS or admin panel",
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
    <div className="w-full rounded-2xl overflow-hidden shadow-xl">
      <img src={service.imageUrl} alt="img" className="w-full h-80 object-cover" />
      <div className="p-6 bg-primary-500 dark:bg-gray-700 text-white space-y-2">
        <h5 className="text-lg font-semibold">{service.delivery.title}</h5>
        <p className="text-sm opacity-90">{service.delivery.description}</p>
        <ul className="text-sm space-y-2 mt-4">
          {service.delivery.features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <Check size={20} className="stroke-3" />
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
