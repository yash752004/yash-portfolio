import { Check } from "lucide-react";
import deco_img from "../../assets/2.webp";

const data = {
  title: "Tech That Drive Success",
  desc_1: "We design and build technological solutions which empower businesses to achieve their goals, streamline operations, and enhance customer experiences.",
  desc_2: "Our work not only drives innovation but also delivers measurable outcomes with faster launches, rock solid reliability and code that scales with your ambitions. We take ownership of results so you can focus on growth.",
  benefits: [
    { title: "Predictable delivery", desc: "clear milestones and on-time launches." },
    { title: "Performance & security", desc: "systems engineered to handle traffic and threats." },
    { title: "Maintainability", desc: "clean code, tests, and documentation so your team moves faster later." },
    { title: "Business impact", desc: "product-focused engineering that improves retention and conversion." },
  ],
}

const HomeBenefitSection = () => {
  return (
    <section className="page-section text-white">
      <div className="absolute -z-1 size-full top-0 left-0 -scale-y-100">
        <img src={deco_img} alt="" className="relative size-full object-cover -z-5 mix-blend-color"/>
        <div className="absolute bottom-0 right-0 size-full bg-primary-700 dark:bg-gray-700 -z-2 mix-blend-lighten"></div>
        {/* <div className="absolute bottom-10 -right-0 blur-xl w-60 h-30 bg-black/40 rounded-full -rotate-30 -z-2"></div>
        <div className="absolute bottom-20 right-30 blur-xl w-50 h-40 bg-black/40 rounded-full -rotate-30 -z-2"></div> */}
      </div>
      <div className="container flex-col-reverse md:flex-row gap-8 md:gap-16 items-start">
        <ul className="w-full md:w-4/10 flex flex-col items-start justify-center bg-white/60 backdrop-blur-md rounded-2xl text-black p-8 lg:p-16 shadow-2xl text-lg space-y-6">
          {data.benefits.map((benefit, index) => (
            <li key={index} className="flex flex-col md:flex-row items-start gap-6">
              <div className="mt-1 flex-shrink-0 bg-secondary-100 text-secondary-600 rounded-full p-2">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold">{benefit.title}</div>
                <div className="">{benefit.desc}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full md:w-6/10 flex flex-col gap-10 py-16">
          <h3 className="text-3xl md:text-5xl font-extrabold">{data.title}</h3>
          <p className="text-2xl">{data.desc_1}</p>
          <p className="text-2xl">{data.desc_2}</p>
        </div>
      </div>
    </section>
  );
};

export default HomeBenefitSection;
