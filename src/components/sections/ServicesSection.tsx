import { BACKEND_URL } from "../../../config";
import { Globe, Cloud, Code, Database, Rocket, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  "Web App Development": Globe,
  "Database Development": Database,
  "API Development": Code,
  "Full Stack Development": Rocket,
  "CMS Development": Code2,
  "Cloud Development": Cloud,
};

const colorMap: Record<string, string> = {
  "Web App Development": "from-green-500 to-blue-500",
  "Database Development": "from-red-500 to-pink-500",
  "API Development": "from-indigo-500 to-blue-600",
  "Full Stack Development": "from-teal-500 to-cyan-500",
  "CMS Development": "from-yellow-400 to-orange-500",
  "Cloud Development": "from-purple-500 to-pink-500",
};


const ServicesSection = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/portfoliomy-services?populate=*`
        );
        const json = await response.json();

        const desiredOrder = [
          "Web App Development",
          "Database Development",
          "API Development",
          "Full Stack Development",
          "CMS Development",
          "Cloud Development",
        ];

        // Sort json.data in the order of desiredOrder
        const sortedData = json.data.sort((a, b) => {
          const aName = a.name;
          const bName = b.name;
          return desiredOrder.indexOf(aName) - desiredOrder.indexOf(bName);
        });

        const transformed = sortedData.map((item) => ({
          title: item.name,
          description: item.description,
          features: item.features.map((f) => f.features),
          icon: iconMap[item.name] || Code,
          color: colorMap[item.name] || "from-red-500 to-pink-500",
        }));

        setServices(transformed);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-emerald-50 dark:bg-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 h-18">
            My Services
          </h2>

          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title} className="group relative">
              <div className="relative h-full bg-white dark:bg-zinc-700 rounded-3xl p-8 transition-all duration-250 overflow-hidden hover:shadow-2xl">
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

                  <p className="mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm"
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