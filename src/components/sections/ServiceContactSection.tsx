import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const ServiceContactSection = () => {
  const services = [
    "Custom Web & Mobile Applications",
    "Microservices & API Design",
    "Cloud-native Architecture & Migration",
    "Managed DevOps & CI/CD Pipelines",
    "Security-first Development & Audits",
    "Scalable Data & Integration Solutions",
    "Performance Optimization & Monitoring",
    "Ongoing Maintenance & Support",
  ];

  const navigate = useNavigate();

  return (
    <section className="page-section bg-secondary-300 text-black">
      <div className="container max-w-7xl md:flex-row justify-center items-stretch gap-20">
        <div className="max-w-xl flex flex-col justify-start gap-10">
          <h2 className="text-3xl md:text-4xl font-bold">End-to-End Software & Cloud Engineering Services</h2>
          <p className="text-lg leading-relaxed">Build, deploy, and scale modern software with our engineering teams. We cover the full lifecycle — product development, cloud migration, security, and ongoing platform support to help your business grow.</p>
          <Button onClick={() => navigate("/contact")} className="w-max rounded-lg mb-3">Book a Consultation →</Button>
        </div>

        <ul className="w-max space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-black" />
              <span className="text-lg">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceContactSection;
