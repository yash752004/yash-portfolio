import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/aceternity/lamp";

const IntroductionSection = () => {
  return (
    <section id="introduction" className="relative">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            About Me
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 space-y-6"
          >
            <p>
              I'm a passionate full-stack developer with expertise in creating scalable, 
              secure, and high-performance web applications. With years of experience in 
              modern technologies, I transform ideas into digital realities.
            </p>
            
            <p>
              My journey in web development has equipped me with a comprehensive understanding 
              of both frontend and backend technologies, allowing me to deliver complete 
              end-to-end solutions that exceed expectations.
            </p>
            
            <p>
              I believe in writing clean, maintainable code and staying updated with the 
              latest industry trends to provide cutting-edge solutions for every project.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </LampContainer>
    </section>
  );
};

export default IntroductionSection;