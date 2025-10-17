import { Globe, Cloud, Code, Database, Rocket, Code2, MoveRight } from "lucide-react";
import headerImage from "../../assets/hero-bg.jpg";

const services = [
    {
      icon: Globe,
      title: "Web App Development",
      description: "Modern, responsive web applications using cutting-edge technologies. From simple websites to complex enterprise solutions.",
      features: ["Progressive Web Apps", "Responsive Design", "SEO Optimization"],
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Database,
      title: "Database Development",
      description: "Database design, optimization, and management for high-performance applications. Expertise in SQL and NoSQL databases.",
      features: ["Design", "Administration", "Optimization", "Migration"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Code,
      title: "API Development",
      description: "Custom API development for seamless integration and data exchange. Building secure, scalable APIs for web and mobile applications.",
      features: ["RESTful APIs", "API Documentation", "Authentication/Authorization", "Rate Limiting"],
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: Rocket,
      title: "Full Stack Development",
      description: "End-to-end development solutions covering both frontend and backend. Building robust, scalable applications with modern tech stacks.",
      features: ["Scalable Architecture", "Microservices", "Real-time Applications", "Cross-platform Development"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: "CMS Development",
      description:
        "Custom and headless CMS solutions for scalable, content-driven websites. Empower teams with easy content management workflows.",
      features: ["Contentful", "Headless CMS", "Easy to  Manage", "Custom workflows", "Multi language Support"],
      color: "from-yellow-400 to-secondary-500",
    },
    {
      icon: Cloud,
      title: "Cloud Development",
      description: "Scalable cloud infrastructure and serverless applications. Expertise in AWS, Google Cloud, and Azure for robust deployments.",
      features: ["Cloud Computing", "Cloud Storage", "Serverless Architecture", "CI/CD Pipelines", "Microservices", "Containerization"],
      color: "from-purple-500 to-pink-500",
    },
  ];

const HomeServiceSection = () => {
  return (
    <section className="page-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="container gap-20 items-start">
        <div className="w-full md:w-2/3 space-y-8">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gradient">Services We Provide</h2>
          <p className="text-lg md:text-xl max-w-3xl text-gray-700 dark:text-gray-300">
            Explore our comprehensive suite of development services designed to help businesses thrive in the digital landscape. From web and cloud solutions to robust APIs and scalable databases, we deliver tailored technology that drives real results across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="min-h-100 flex flex-col even:flex-col-reverse justify-between bg-gradient group relative rounded-3xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* Card content */}
              <div className="relative w-full z-10 flex flex-col justify-between p-8 rounded-3xl space-y-4">
                <div className="space-y-6">
                  <h3 className="w-full text-3xl font-bold transition-colors duration-300 text-white">{service.title}</h3>
                  <div className="absolute -bottom-5 right-10 -z-1 opacity-40">
                    <service.icon className="size-50 text-primary-400" />
                  </div>
                  <p className="text-lg text-white">{service.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <a className="font-semibold text-secondary-300 flex items-center gap-2" href={`/service#${service.title.replace(/\s+/g, "-").toLowerCase()}`}>
                    Know more <MoveRight size={18} className="group-hover:ml-2 transition-all duration-300"/>
                  </a>
                </div>
              </div>

              {/* Background image */}
              <div className="w-full transition-all duration-300 shrink-0 overflow-clip">
                <img src={headerImage} alt={service.title} className="h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="w-full bg-secondary-200 py-12 mt-20">
        <div className="container mx-auto items-start">
          <h3 className="text-4xl font-bold">Wait there is more?</h3>
          <p className="text-xl max-w-3xl text-gray-700 dark:text-gray-300">
            We also offer custom software development, mobile app development, e-commerce solutions, and IT consulting services. Whatever your tech needs, we have the expertise to deliver high-quality results that drive your business forward.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary-600 hover:shadow-xl transition-all duration-300"
          >
            Let's Connect To Explore
          </a>
          <div className="absolute z-1 w-80 right-5 -bottom-5">
            <img src="/deco/block_2.png" alt="" className="w-full brightness-120"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;