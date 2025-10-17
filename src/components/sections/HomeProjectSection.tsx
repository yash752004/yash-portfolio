import { motion } from "framer-motion";

import aitImg from "../../assets/services/service_1.webp";
import pumpImg from "../../assets/services/service_1.webp";
import bananaImg from "../../assets/services/service_1.webp";
import benddaoImg from "../../assets/services/service_1.webp";
import treedefiImg from "../../assets/services/service_1.webp";
import { Link } from "react-router-dom";

const projects = [
  { title: "Shopping Web Site", image: aitImg },
  { title: "Gym Mobile App", image: pumpImg },
  { title: "Gyan Learning App", image: bananaImg },
  { title: "Home Server for Phothos", image: benddaoImg },
  { title: "Fully loaded Private Server", image: treedefiImg },
];

const HomeProjectSection = () => {
  return (
    <section className="page-section pt-0">
      <div className="container flex flex-col md:flex-row justify-between items-start text-left gap-6">
        <h2 className="w-full md:w-1/3 text-2xl md:text-5xl lg:text-6xl font-bold text-gradient">Our Work</h2>
        <p className="w-full md:w-2/3 text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Discover a diverse range of projects that highlight our dedication to quality and innovation. Each project reflects our commitment to delivering results that make a real difference for businesses and users alike.
        </p>
      </div>

      <div className="container mt-20 flex flex-col md:flex-row gap-0 items-stretch rounded-2xl overflow-clip">
        <div className="w-3/8 shrink-0 overflow-hidden transition-all duration-300 pr-8">
          <div className="flex flex-col justify-start h-full text-xl text-gray-700 dark:text-gray-300 bg-gradient rounded-2xl p-8 gap-8">
            <h3 className="text-3xl text-white">With Passion, We Build</h3>
            <p className="text-gray-200">Explore our portfolio of successful projects showcasing our expertise. See how we've helped businesses thrive.</p>
          </div>
        </div>
        <div className="w-5/8 flex flex-col md:flex-row rounded-2xl overflow-clip">
          {projects.map((proj, index) => (
            <div key={index} className="relative shadow-lg overflow-hidden w-1/5 hover:w-[40%] transition-all duration-300">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjectSection;
