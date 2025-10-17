import headerImage from "../../assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Check, CircleCheckBig, Sparkles } from "lucide-react";
import { title } from "process";

const data = [
  {
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
    <div className="bg-secondary-100 w-125 shrink-0 px-8 md:px-12 py-30 flex flex-col gap-8 items-start justify-center">
      {children}
    </div>
  );
};

const WidePart = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full py-20 pl-6 flex flex-col justify-center gap-4">
      {children}
    </div>
  );
}

const ImagePart = ({ service }: { service: typeof data[0] }) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl">
      <img src={service.imageUrl} alt="img" className="w-full h-80 object-cover" />
      <div className="p-6 bg-primary-500 text-white space-y-2">
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

const DetailPart = ({ service }: { service: typeof data[0] }) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-full bg-white p-2 dark:bg-primary-800">
          <Sparkles className="w-6 h-6 text-primary-600" />
        </div>
        <span className="text-sm font-medium uppercase tracking-wider text-primary-600">{service.tagline}</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-zinc-900 dark:text-white">{service.title}</h2>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">{service.description}</p>

      <div className="w-full mb-4">
        <ul className="text-zinc-600 dark:text-zinc-300 space-y-2">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex gap-2">
              <CircleCheckBig size={20} className="stroke-3 text-emerald-500" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Button className="bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl">Get a quote</Button>
        <a href="/contact" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary-600">Or contact us</a>
      </div>
    </>
  );
};

export const ServiceDetails = () => {
  return (
    <section className="page-section p-0">
      {/* Decorative blurred shapes */}
      <div className="absolute -left-24 -top-24 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl pointer-events-none dark:bg-primary-700/20" />
      <div className="absolute -right-28 -bottom-28 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl pointer-events-none dark:bg-purple-900/20" />

      {data.map((service, index) => (
        <div key={index} className="container md:flex-row gap-8 p-0 justify-between items-stretch">
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
