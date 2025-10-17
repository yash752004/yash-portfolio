import { Server, Cloud, Zap } from "lucide-react";

const services = [
  {
    title: "Professional Analysis",
    description:
      "We provide comprehensive analysis to understand your business needs and technical requirements, ensuring tailored solutions that drive success.",
    icon: Server,
  },
  {
    title: "Accurate Cost Estimation",
    description:
      "We deliver precise cost estimations for your projects, helping you budget effectively and avoid unexpected expenses.",
    icon: Cloud,
  },
  {
    title: "On Time Delivery",
    description:
      "We ensure timely delivery of projects through efficient planning, agile methodologies, and clear communication, keeping your business on track.",
    icon: Zap,
  },
];

const ServiceHeroSection = () => {
  return (
    <section className="page-section py-50">
      {/* Heading */}
      <div className="container items-start lg:px-24">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-6xl/[1.2] font-bold text-gradient max-w-3xl">
            Modern Web & Cloud Engineering
          </h2>

          <p className="text-lg md:text-xl pt-6 text-gray-700 dark:text-gray-300 max-w-3xl">
            We design and build robust, secure, and scalable software — web apps, APIs, cloud platforms, and managed services — to accelerate product delivery and business outcomes.
          </p>
        </div>
        <div className="w-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col items-start text-left space-y-4 bg-primary-50 rounded-2xl p-8">
                {/* Icon */}
                <div className="rounded-full p-3 bg-secondary-100 text-secondary-500 dark:text-white">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-primary-500 dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
