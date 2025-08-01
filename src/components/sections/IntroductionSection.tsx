import { motion } from "framer-motion";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";


import thumbail1 from "../../Assets/carehq/1.png";
import carehq2 from "../../Assets/carehq/2.png";
import carehq3 from "../../Assets/carehq/3.png";
import carehq4 from "../../Assets/carehq/4.png";
import carehq5 from "../../Assets/carehq/5.png";
import carehq6 from "../../Assets/carehq/6.png";
import carehq7 from "../../Assets/carehq/7.png";

import wiretime1 from "../../Assets/WireTime/1.jpeg";
import wiretime2 from "../../Assets/WireTime/2.jpeg";
import wiretime3 from "../../Assets/WireTime/3.png";

import sports1 from "../../Assets/sportsportal/1.png";
import sports2 from "../../Assets/sportsportal/2.png";
import sports3 from "../../Assets/sportsportal/3.png";
import sports4 from "../../Assets/sportsportal/4.png";
import sports5 from "../../Assets/sportsportal/5.png";

import inventoryscan1 from "../../Assets/inventoryscan/1.png";
import inventoryscan2 from "../../Assets/inventoryscan/2.png";

// import gemini1 from "../../Assets/chatapp/1.png";
// import gemini2 from "../../Assets/chatapp/3.png";
// import gemini3 from "../../Assets/chatapp/7.png";
// import gemini4 from "../../Assets/chatapp/4.png";
// import gemini5 from "../../Assets/chatapp/5.png";
// import gemini6 from "../../Assets/chatapp/6.png";

import ecommerse0 from "../../Assets/Ecommerse/0.png";
import ecommerse1 from "../../Assets/Ecommerse/1.png";
import ecommerse2 from "../../Assets/Ecommerse/2.png";
import ecommerse3 from "../../Assets/Ecommerse/3.png";
import ecommerse4 from "../../Assets/Ecommerse/4.png";
import ecommerse5 from "../../Assets/Ecommerse/5.png";
import ecommerse6 from "../../Assets/Ecommerse/6.png";

const IntroductionSection = () => {

  const images = [

    wiretime1,
    wiretime2,
    wiretime3,

    inventoryscan1,
    inventoryscan2,
    sports1,
    sports2,
    sports3,
    sports4,
    sports5,

    ecommerse0,
    ecommerse1,
    ecommerse2,
    ecommerse3,
    ecommerse4,
    ecommerse5,
    ecommerse6,

    thumbail1,
    carehq2,
    carehq3,
    carehq4,
    carehq5,
    carehq6,
    carehq7,
  ];

  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]; // create a shallow copy to avoid mutating original
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  // Usage
  const shuffledImages = shuffleArray(images);

  return (
    <section id="introduction" className="relative mt-[150px] px-4 md:px-8">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">

        {/* Left: About Me */}
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
           className="text-lg md:text-xl leading-relaxed text-[hsl(var(--black))] space-y-6"

          >
            <p>
              I'm a full-stack web developer focused on delivering end-to-end digital solutions — from concept to deployment. I specialize in building reliable, scalable, and modern web applications tailored to your business needs.
            </p>
            <p>
              My skill set spans across frontend and backend development, CMS integration, cloud deployment, and custom API design. I help businesses streamline workflows, enhance performance, and scale effectively with future-ready technology.
            </p>
            <p>
              Beyond coding, I'm a creative problem solver who thrives on turning complex challenges into elegant, user-centric solutions. I’m committed to clean code, intuitive UX, and continuous innovation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-3  text-[hsl(var(--black))] gap-8 mt-12 max-w-xl"
          >
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
          </motion.div>
        </motion.div>

        {/* Right: Marquee */}
        <div className="w-full lg:w-1/2">
          <ThreeDMarquee images={shuffledImages} />
        </div>

      </div>

    </section>

  );
};

export default IntroductionSection;