import { ChevronRight, Send } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from 'react-router-dom';
import deco_img from "../../assets/2.webp";

const data = {
  title: "At Pinak We Aim,",
  aim_fors: [
    "To be a trusted technology partner, delivering innovative solutions that drive business success.",
    "To empower businesses with cutting-edge web and software development services tailored to their unique needs.",
    "To foster long-term relationships built on transparency, quality, and mutual growth.",
  ]
}

const HomeIntroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="page-section gap-20">
      <div className="absolute -z-1 size-full top-0 left-0">
        <img src={deco_img} alt="" className="relative size-full object-cover -z-5 mix-blend-color"/>
      </div>
      <div className="container m-auto px-6 flex flex-col lg:flex-row justify-start items-stretched gap-12">
        {/* Left: About Me */}
        <div className="w-full lg:w-1/2" >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">At Pinak We Aim,</h2>
          <div className="text-lg md:text-xl dark:text-gray-400 space-y-6">
            {data.aim_fors.map((aim, index) => (
              <div key={index} className="flex items-start gap-4">
                <ChevronRight size={24} className="text-primary-400 shrink-0 mt-1 stroke-3" />
                <p className="text-gray-300">{aim}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden text-white bg-white/70 p-16 shadow-2xl backdrop-blur-md">
          <div className="h-full flex flex-col justify-center items-center gap-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              <span className="text-primary-500">Let's Collaborate and </span><br />
              <span className="text-primary-500">Grow together!</span>
            </h2>

            <p className="text-xl text-gray-800">
              Whether you need a new website, a web application, or an e-commerce platform, I can help you achieve your goals with innovative solutions and a focus on quality.
            </p>
            <p className="text-xl text-gray-800">
              Let's discuss your project and bring your ideas to life with cutting-edge technology and exceptional quality.
            </p>

            <Button type="submit" variant="secondary" onClick={() => navigate('/contact')}>
              <Send className="w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </div>
        {/* <div className="absolute -z-5 w-180 -right-25 -bottom-55">
          <img src="/deco/block_3.png" alt="" className="w-full brightness-120"/>
        </div> */}
      </div>
    </section>
  );
};

export default HomeIntroSection;