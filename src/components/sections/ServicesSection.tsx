import { motion } from "framer-motion";
import { Smartphone, Globe, Cloud, Code, Database, Rocket, Code2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "CMS Developer",
      description:
        "Custom and headless CMS solutions for scalable, content-driven websites. Empower teams with easy content management workflows.",
      features: ["WordPress", "Sanity.io", "Strapi", "Contentful", "Headless CMS"],
      color: "from-yellow-400 to-orange-500",
    },
    // {
    //   icon: Smartphone,
    //   title: "Mobile App Developer",
    //   description: "Native and cross-platform mobile applications with React Native and Flutter. Creating intuitive user experiences for iOS and Android platforms.",
    //   features: ["React Native", "Flutter", "iOS Development", "Android Development"],
    //   color: "from-blue-500 to-purple-600",
    // },
    {
      icon: Globe,
      title: "Web App Developer",
      description: "Modern, responsive web applications using cutting-edge technologies. From simple websites to complex enterprise solutions.",
      features: ["React/Next.js", "Vue.js", "TypeScript", "Progressive Web Apps", "Responsive Design", "SEO Optimization"],
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Cloud,
      title: "Cloud Developer",
      description: "Scalable cloud infrastructure and serverless applications. Expertise in AWS, Google Cloud, and Azure for robust deployments.",
      features: ["AWS/Azure/GCP", "Serverless Architecture", "DevOps", "CI/CD Pipelines", "Microservices", "Containerization"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
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
              <div className="relative bg-glass backdrop-blur-xl rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-500 overflow-hidden">
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
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
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
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary-glow/5 rounded-full blur-lg group-hover:bg-primary-glow/10 transition-colors duration-500" />
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
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-glass rounded-full border border-border/20">
            <Rocket className="w-6 h-6 text-primary animate-bounce" />
            <span className="text-lg font-semibold text-foreground">Ready to launch your project?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;