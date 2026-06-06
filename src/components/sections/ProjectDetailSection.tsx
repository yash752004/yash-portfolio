import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { ProjectDetailModel } from "@/components/sections/ProjectDetailModel";
import { 
  getProjectDatas, 
  getProjectConfig, 
  type ProjectDetailType,
  type ProjectConfigType
} from "@/projects/projectDetails";
import { useLocation, useNavigate } from "react-router-dom";


export const ProjectDetailSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetailType | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState<ProjectDetailType[]>([]);
  const [config, setConfig] = useState<ProjectConfigType | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setProjects(getProjectDatas());
    setConfig(getProjectConfig());
  }, []);

  useEffect(() => {
    if (location.hash == '' || location.hash == '#') {
      setSelectedProject(null);
      return;
    }

    const slug = location.hash.substring(1);
    if (slug && slug.length > 0) {
      const project = projects.find(p => p.id === slug);
      if (project) setSelectedProject(project);
    }
  }, [selectedProject, location, projects]);

  const openProject = (e, project: ProjectDetailType) => {
    e.stopPropagation();
    navigate(`/projects#${project.id}`);
  };

  const closeProject = () => {
    setSelectedProject(null);
    navigate('/projects');
  };

  const categories = config ? ["All", ...config.categories] : ["All"];
  const visibleProjects = projects.filter(p => p.showOnProjects !== false);
  const filteredProjects = activeCategory === "All"
    ? visibleProjects
    : visibleProjects.filter(p => p.category === activeCategory);

  const resolveImagePath = (path: string) => {
    if (!path) return "";
    if (path.startsWith("data:image")) return path;
    if (path.startsWith("@/")) return path.replace("@/", "/src/");
    return path;
  };

  return (
    <section className="page-section">
      <main className="container">
        {/* Category Filter */}
        {config?.showCategoryTabs && (
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-8 py-2.5 transition-all duration-300 font-bold border ${
                  activeCategory === category 
                  ? "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/20 scale-105" 
                  : "bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-primary-500/50 text-slate-600 dark:text-slate-400"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-rows-auto" style={{ gridAutoRows: '1fr' }}>
          {filteredProjects?.map((project, index) => (
            <div
              className={`min-h-max rounded-3xl bg-secondary-100 dark:bg-gray-700 overflow-hidden transition-all duration-100 ease-out hover:shadow-2xl md:hover:scale-105 p-6 flex flex-col gap-6 group cursor-pointer`}
              key={project.id}
              onClick={(e) => openProject(e, project)}
              role='button'
              tabIndex={-1}
            >
              <div className="h-1/2 rounded-xl border-primary-200 overflow-hidden">
                <img
                  src={resolveImagePath(project.thumbnail)}
                  alt={project.title}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-500 saturate-0 group-hover:saturate-100"
                />
              </div>

              {/* Content */}
              <div className="h-1/2 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="max-w-md mb-8 line-clamp-3">{project.description}</p>
                </div>

                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </div> */}

                <div className="flex gap-3">
                  <Button onClick={(e) => openProject(e, project)} size="sm" className="rounded-lg mb-3">View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModel projectDetail={selectedProject} OnCloseModel={closeProject} />
    </section>
  );
};