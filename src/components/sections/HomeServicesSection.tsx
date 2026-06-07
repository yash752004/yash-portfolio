import { MoveRight } from "lucide-react";
import { serviceData } from "./ServiceDetailSection";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const HomeServiceSection = () => {
  const navigate = useNavigate();

  return (
    <section className="page-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="container gap-16 items-start">
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-500">Services We Provide</h2>
          <p className="text-xl max-w-xl text-gray-700 dark:text-gray-300">Explore our comprehensive suite of development services. Designed to help businesses thrive in the digital landscape.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mx-auto">
          {serviceData.map((service, index) => (
            <article
              key={index}
              className="min-h-80 flex flex-col md:even:flex-col-reverse justify-between bg-white dark:bg-stone-700 group relative rounded-2xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl cursor-pointer p-16"
            >
              {/* Card content */}
              <div className="relative w-full z-10 flex flex-col justify-between rounded-3xl space-y-4">
                <div className="space-y-8">
                  <h3 className="w-full text-3xl font-bold transition-colors duration-300">{service.title}</h3>
                  {/* <div className="absolute bottom-0 right-0 -z-1 opacity-40">
                    <service.icon className="size-50 text-secondary-400 dark:text-secondary-300 opacity-30" />
                  </div> */}
                  <p className="text-lg text-gray-600">{service.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Link className="link link-focus font-semibold text-secondary-500 flex items-center gap-2" to={`/services#${service.id}`}>
                    Know more <MoveRight size={18} className="group-hover:ml-2 transition-all duration-300"/>
                  </Link>
                </div>
              </div>

              {/* Background image */}
              <div className="w-full transition-all duration-300 shrink-0 overflow-clip">
                <img src={service.imageUrl} alt={service.title} className="h-full object-cover group-hover:scale-105 transition-all duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="w-full bg-secondary-100 dark:bg-stone-700 py-16 mt-20">
        <div className="container md:flex-row mx-auto items-start">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="space-y-2">
              <p className="text-md text-gray-600">Not found services you are looking for?</p>
              <h3 className="text-2xl font-bold">We offer More</h3>
            </div>
            <p className="text-xl max-w-3xl text-gray-600 dark:text-gray-300">
              We also offer custom software development, digital tools creation and IT consulting services. Whatever your tech needs, we have the expertise to deliver.
            </p>
            <Button onClick={() => navigate('/contact')} className="w-max">Let's Explore</Button>
          </div>
          {/* <div className="absolute -z-1 w-80 right-5 -bottom-5">
            <img src="/deco/block_2.png" alt="" className="hidden md:block w-full md:brightness-120"/>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;