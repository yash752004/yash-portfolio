import {  Globe, Cloud, Code, Database, Rocket, Code2 } from "lucide-react";

const ServicesSection = () => {
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
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Cloud,
      title: "Cloud Development",
      description: "Scalable cloud infrastructure and serverless applications. Expertise in AWS, Google Cloud, and Azure for robust deployments.",
      features: ["Cloud Computing", "Cloud Storage", "Serverless Architecture", "CI/CD Pipelines", "Microservices", "Containerization"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-emerald-50">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 h-18">
            My Services
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title} className="group relative">
              <div className="relative h-full bg-white rounded-3xl p-8 transition-all duration-250 overflow-hidden hover:shadow-2xl">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
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
                      <div
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;