import { motion } from "framer-motion";
import { Smartphone, Globe, Cloud, Code, Database, Rocket, Code2 } from "lucide-react";
// import { Spotlight } from "../ui/spotlight-new";

const ServicesSection = () => {
  const services = [

    {
      icon: Globe,
      title: "Web App Development",
      description: "Modern, responsive web applications using cutting-edge technologies. From simple websites to complex enterprise solutions.",
      features: ["React/Next.js", "Vue.js", "TypeScript", "Progressive Web Apps", "Responsive Design", "SEO Optimization"],
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Code2,
      title: "CMS Development",
      description:
        "Custom and headless CMS solutions for scalable, content-driven websites. Empower teams with easy content management workflows.",
      features: ["WordPress", "Sanity.io", "Strapi", "Contentful", "Headless CMS"],
      color: "from-yellow-400 to-orange-500",
    },
    // {
    //   icon: Smartphone,
    //   title: "Mobile App Development",
    //   description: "Native and cross-platform mobile applications with React Native and Flutter. Creating intuitive user experiences for iOS and Android platforms.",
    //   features: ["React Native", "Flutter", "iOS Development", "Android Development"],
    //   color: "from-blue-500 to-purple-600",
    // },

    {
      icon: Cloud,
      title: "Cloud Development",
      description: "Scalable cloud infrastructure and serverless applications. Expertise in AWS, Google Cloud, and Azure for robust deployments.",
      features: ["AWS/Azure/GCP", "Serverless Architecture", "DevOps", "CI/CD Pipelines", "Microservices", "Containerization"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Database Development",
      description: "Database design, optimization, and management for high-performance applications. Expertise in SQL and NoSQL databases.",
      features: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Database Optimization", "Data Migration"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Full Stack Development",
      description: "End-to-end development solutions covering both frontend and backend. Building robust, scalable applications with modern tech stacks.",
      features: ["MERN Stack", "MEAN Stack", "LAMP Stack", "GraphQL APIs", "RESTful Services"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "API Development",
      description: "Custom API development for seamless integration and data exchange. Building secure, scalable APIs for web and mobile applications.",
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Authentication/Authorization", "Rate Limiting"],
      color: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
     {/* <Spotlight /> */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
            My Services
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-glass backdrop-blur-xl rounded-3xl p-8 border hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.5 }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-glass mr-3" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-glass/5 rounded-full blur-xl group-hover:bg-glass/10 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-glass-glow/5 rounded-full blur-lg group-hover:bg-glass-glow/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-glass rounded-full border">
            <Rocket className="w-6 h-6 text-primary animate-bounce" />
            <span className="text-lg font-semibold">Ready to launch your project?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;