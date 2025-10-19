import { ProjectDatas } from "@/projects/projectDetails";
import { useNavigate } from "react-router-dom";

const HomeProjectSection = () => {
  const navigate = useNavigate();

  return (
    <section className="page-section pt-0">
      <div className="container flex flex-col md:flex-row justify-between items-start text-left gap-6">
        <h2 className="w-full md:w-1/3 text-4xl md:text-6xl font-bold text-gradient">Our Work</h2>
        <p className="w-full md:w-2/3 text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Discover a diverse range of projects that highlight our dedication to quality and innovation. Each project reflects our commitment to delivering results that make a real difference for businesses and users alike.
        </p>
      </div>

      <div className="container mt-16 md:mt-20 flex flex-col md:flex-row gap-0 items-stretch rounded-2xl overflow-clip">
        <div className="w-full md:w-3/8 shrink-0 overflow-hidden transition-all duration-300 pb-16 md:pb-0 md:pr-8">
          <div className="flex flex-col justify-start h-full text-xl text-gray-700 dark:text-gray-300 bg-primary-700 dark:bg-gray-700 rounded-2xl p-8 gap-8">
            <h3 className="text-3xl text-white">With Passion, We Build</h3>
            <p className="text-gray-200">Explore our portfolio of successful projects showcasing our expertise. See how we've helped businesses thrive.</p>
          </div>
        </div>
        <div className="w-full md:w-5/8 flex flex-col md:flex-row gap-16 md:gap-0 rounded-2xl overflow-clip items-stretch">
          {ProjectDatas.map((proj, index) => (
            <div
              key={index}
              className="relative shadow-lg overflow-hidden min-h-95 w-full md:w-1/5 md:hover:w-[40%] rounded-2xl md:rounded-none transition-all duration-150 group"
              onClick={(e) => navigate(`/projects#${proj.id}`)}
              role='button'
              tabIndex={0}
            >
              <img
                src={proj.verticalThumbnail}
                alt={proj.title}
                className="w-full h-full object-cover md:group-hover:brightness-50 transition-all duration-100"
              />
              <div className="w-full absolute top-0 left-0 text-right h-full flex items-end justify-center p-4 pb-8">
                <h3 className="text-white text-xl font-semibold drop-shadow-lg text-center md:hidden md:group-hover:block">
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
