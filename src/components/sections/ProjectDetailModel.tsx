import { AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import { ProjectDetailType } from "@/projects/projectDetails";

export const ProjectDetailModel = ({ projectDetail, OnCloseModel }: { projectDetail: ProjectDetailType, OnCloseModel: () => void }) => {
  return (
    <AnimatePresence>
        {projectDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-2000 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={OnCloseModel}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 shadow-2xl transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold text-gradient">{projectDetail.title}</h2>

                    {projectDetail.hasLiveLink && (
                      <Button asChild className="bg-primary-100 dark:bg-primary-800">
                        <a
                          href={projectDetail.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={OnCloseModel}
                    className="bg-destructive-500 text-white hover:-translate-y-[2px] hover:shadow-md hover:text-destructive cursor-pointer link-focus transition-all duration-150 ease-out"
                  >
                    <X size={10} className="stroke-3" />
                  </Button>
                </div>

                <p className="max-w-3xl text-lg mb-8 leading-relaxed">{projectDetail.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectDetail.tools.map((tool: string) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium shadow-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-12 overflow-y-auto">
                  {projectDetail.screenshots.map((src: string, index: number) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${projectDetail.title} screenshot ${index + 1}`}
                      className="w-full rounded-xl object-contain"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  )
};