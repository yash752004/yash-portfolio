import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from 'react-router-dom';

const IntroductionSection = () => {
  const navigate = useNavigate();

  return (
    <section id="introduction" className="w-full py-20">
      <div className="container m-auto px-6 flex flex-col lg:flex-row items-stretched gap-12">
        {/* Left: About Me */}
        <div className="w-full lg:w-1/2" >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <div className="text-lg md:text-xl leading-relaxed text-[hsl(var(--black))] space-y-6">
            <p>I'm a full-stack web developer focused on delivering end-to-end digital solutions — from concept to deployment. I specialize in building reliable, scalable, and modern web applications tailored to your business needs.</p>
            <p>My skill set spans across frontend and backend development, CMS integration, cloud deployment, and custom API design. I help businesses streamline workflows, enhance performance, and scale effectively with future-ready technology.</p>
            <p>Beyond coding, I'm a creative problem solver who thrives on turning complex challenges into elegant, user-centric solutions. I’m committed to clean code, intuitive UX, and continuous innovation.</p>
          </div>

          {/* <div  className="grid grid-cols-3  text-[hsl(var(--black))] gap-8 mt-12 max-w-xl">
            {[
              { number: "5+", label: "Projects Completed" },
              // { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right: Marquee */}
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden text-white bg-gradient p-8">
          <div className="h-full px-6 flex flex-col justify-center items-center gap-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              <span className="text-white">Let's Collaborate and </span><br />
              <span className="text-white">Grow together!</span>
            </h2>

            <p className="text-xl text-emerald-50">
              Whether you need a new website, a web application, or an e-commerce platform, I can help you achieve your goals with innovative solutions and a focus on quality.
            </p>
            <p className="text-xl text-emerald-50">
              Let's discuss your project and bring your ideas to life with cutting-edge technology and exceptional quality.
            </p>

            <Button
              type="submit"
              className="bg-gradient-repeat-light hover:shadow-xl text-lg py-6 rounded-xl cursor-pointer transition-all"
              onClick={() => navigate('/contact')}
            >
              <div className="flex items-center text-black gap-2">
                <Send className="w-5 h-5" />
                Contact Me
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;