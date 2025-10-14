import { motion } from "framer-motion";

import aitImg from "../../assets/services/service_1.webp";
import pumpImg from "../../assets/services/service_1.webp";
import bananaImg from "../../assets/services/service_1.webp";
import benddaoImg from "../../assets/services/service_1.webp";
import treedefiImg from "../../assets/services/service_1.webp";

const projects = [
  { title: "AIT Protocol Platform", image: aitImg },
  { title: "Pump.Fun Token Development", image: pumpImg },
  { title: "Banana (BNAN) Token Development", image: bananaImg },
  { title: "BendDAO NFT & Decentralized Solutions", image: benddaoImg },
  { title: "Treedefi Blockchain Offset Token Development", image: treedefiImg },
];

const ServiceDetailsPageUi2 = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-emerald-50 dark:bg-zinc-800 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gradient">
        Coin & Token Development Success Stories
      </h2>

      <p className="text-lg md:text-xl max-w-3xl mx-auto pt-6 md:pt-10 text-gray-700 dark:text-gray-300">
        Discover how our coin and token development services have helped visionary
        businesses bring their blockchain ideas to life. Our proven projects
        demonstrate how we’ve turned tokenomics into real-world value across
        DeFi, gaming, finance, and beyond.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 md:px-12">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute bottom-3 left-4 text-left">
              <h3 className="text-white text-sm font-semibold drop-shadow-lg">
                {proj.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ServiceDetailsPageUi2;
