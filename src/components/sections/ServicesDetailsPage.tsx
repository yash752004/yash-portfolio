import { Globe, Cloud, Code, Database, Rocket, Code2, Zap, Cpu, Shield, Users, BarChart, Lock } from "lucide-react";

const ServicesDetailsPage = () => {
  const services = [
    {
      icon: Globe,
      title: "Web App Development",
      description: "Modern, responsive web applications using cutting-edge technologies. From simple websites to complex enterprise solutions.",
      color: "from-green-500 to-blue-500",
      subServices: [
        { icon: Zap, name: "Progressive Web Apps", description: "Fast, reliable web apps that work offline" },
        { icon: Cpu, name: "Responsive Design", description: "Perfect display on all devices and screen sizes" },
        { icon: BarChart, name: "SEO Optimization", description: "Rank higher in search engine results" }
      ]
    },
    {
      icon: Database,
      title: "Database Development",
      description: "Database design, optimization, and management for high-performance applications. Expertise in SQL and NoSQL databases.",
      color: "from-red-500 to-pink-500",
      subServices: [
        { icon: Database, name: "Database Design", description: "Optimized schema design for performance" },
        { icon: Cpu, name: "Administration", description: "Complete database management and maintenance" },
        { icon: Zap, name: "Optimization", description: "Query optimization and performance tuning" },
        { icon: Cloud, name: "Migration", description: "Seamless data migration between systems" }
      ]
    },
    {
      icon: Code,
      title: "API Development",
      description: "Custom API development for seamless integration and data exchange. Building secure, scalable APIs for web and mobile applications.",
      color: "from-indigo-500 to-blue-600",
      subServices: [
        { icon: Code, name: "RESTful APIs", description: "Standardized REST API development" },
        { icon: Users, name: "API Documentation", description: "Comprehensive API documentation" },
        { icon: Shield, name: "Authentication/Authorization", description: "Secure access control systems" },
        { icon: Lock, name: "Rate Limiting", description: "API usage control and throttling" }
      ]
    },
    {
      icon: Rocket,
      title: "Full Stack Development",
      description: "End-to-end development solutions covering both frontend and backend. Building robust, scalable applications with modern tech stacks.",
      color: "from-teal-500 to-cyan-500",
      subServices: [
        { icon: Cpu, name: "Scalable Architecture", description: "Systems that grow with your business" },
        { icon: Cloud, name: "Microservices", description: "Modular and maintainable service architecture" },
        { icon: Zap, name: "Real-time Applications", description: "Live data and instant updates" },
        { icon: Globe, name: "Cross-platform Development", description: "Consistent experience across platforms" }
      ]
    },
    {
      icon: Code2,
      title: "CMS Development",
      description: "Custom and headless CMS solutions for scalable, content-driven websites. Empower teams with easy content management workflows.",
      color: "from-yellow-400 to-orange-500",
      subServices: [
        { icon: Cloud, name: "Contentful", description: "Headless CMS implementation" },
        { icon: Code2, name: "Headless CMS", description: "Decoupled content management" },
        { icon: Users, name: "Easy to Manage", description: "User-friendly content editing" },
        { icon: Cpu, name: "Custom Workflows", description: "Tailored content approval processes" },
        { icon: Globe, name: "Multi-language Support", description: "Global content management" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Development",
      description: "Scalable cloud infrastructure and serverless applications. Expertise in AWS, Google Cloud, and Azure for robust deployments.",
      color: "from-purple-500 to-pink-500",
      subServices: [
        { icon: Cpu, name: "Cloud Computing", description: "Scalable computing resources" },
        { icon: Database, name: "Cloud Storage", description: "Secure and redundant storage solutions" },
        { icon: Code, name: "Serverless Architecture", description: "Event-driven serverless applications" },
        { icon: Rocket, name: "CI/CD Pipelines", description: "Automated deployment workflows" },
        { icon: Cloud, name: "Microservices", description: "Cloud-native microservices architecture" },
        { icon: Shield, name: "Containerization", description: "Docker and container orchestration" }
      ]
    },
  ];

  return (
    <section id="services" className="relative pt-32 pb-20 overflow-hidden bg-emerald-50 dark:bg-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="relative z-10 container mx-auto px-6">
        
        {services.map((service, serviceIndex) => (
          <div key={service.title} className="mb-20">
            {/* Service Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center items-center mb-6">
                {/* <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mr-4`}>
                  <service.icon className="w-full h-full text-white" />
                </div> */}
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gradient">
                  {service.title}
                </h2>
              </div>
              <p className="text-xl max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>

            {/* Sub-Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {service.subServices.map((subService, index) => (
                <div key={subService.name} className="group relative">
                  <div className="relative h-full bg-white dark:bg-zinc-700 rounded-2xl p-6 transition-all duration-300 overflow-hidden hover:shadow-xl hover:scale-105">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                    {/* Sub-Service Icon */}
                    <div className="relative z-10 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <subService.icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Sub-Service Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {subService.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {subService.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default ServicesDetailsPage;