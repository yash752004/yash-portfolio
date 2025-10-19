import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { ProjectDetailModel } from "@/components/sections/ProjectDetailModel";
import { ProjectDatas, type ProjectDetailType } from "@/projects/projectDetails";
import { useLocation, useNavigate } from "react-router-dom";


export const ProjectDetailSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetailType | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash == '' || location.hash == '#') {
      setSelectedProject(null);
      return;
    }

    const slug = location.hash.substring(1);
    if (slug && slug.length > 0) {
      const project = ProjectDatas.find(p => p.id === slug);
      if (project) setSelectedProject(project);
    }
  }, [selectedProject, location]);

  const openProject = (e, project: ProjectDetailType) => {
    e.stopPropagation();
    navigate(`/projects#${project.id}`);
  };

  const closeProject = () => {
    setSelectedProject(null);
    navigate('/projects');
  };

  return (
    <section className="page-section">
      <main className="container">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-rows-auto">
          {ProjectDatas?.map((project, index) => (
            <div
              className="rounded-3xl bg-secondary-50 dark:bg-gray-800 overflow-hidden transition-all duration-100 ease-out hover:bg-secondary-100 hover:shadow-2xl md:hover:scale-105 p-6 flex flex-col gap-6 group cursor-pointer" key={index}
              onClick={(e) => openProject(e, project)}
              role='button'
              tabIndex={0}
            >
              <div className="h-1/2 rounded-xl border-primary-200 overflow-hidden">
                <img
                  src={project.thumbnail}
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