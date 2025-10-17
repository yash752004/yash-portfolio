import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectDetailSection } from "@/components/sections/ProjectDetailSection";

const ProjectHeroSection = () => {
  return (
    <section className="page-section pt-50 pb-0">
      <div className="container items-start lg:px-24">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-6xl/[1.2] font-bold text-gradient max-w-3xl">Our Projects Showcase</h2>
          <p className="text-xl pt-6 text-gray-700 dark:text-gray-300 max-w-3xl">Explore a curated selection of our recent projects, demonstrating our expertise in delivering innovative software solutions across various industries and technologies.</p>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProjectHeroSection />
      <ProjectDetailSection />
      <Footer />
    </div>
  );
};

export default Projects;