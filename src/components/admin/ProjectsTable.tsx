import React from "react";
import { ProjectDetailType } from "@/hooks/useProjects";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Edit } from "lucide-react";

interface ProjectsTableProps {
  projects: ProjectDetailType[];
  onEdit: (project: ProjectDetailType) => void;
  onDelete: (id: string) => void;
  onToggleHome: (id: string, currentStatus: boolean) => void;
}

export const ProjectsTable = ({ projects, onEdit, onDelete, onToggleHome }: ProjectsTableProps) => {
  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-medium">
              <th className="py-4 px-6">Thumbnail</th>
              <th className="py-4 px-6">Project Title</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6 text-center">Show on Home</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <td className="py-4 px-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {project.thumbnail && (
                      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-bold text-slate-900 dark:text-white">{project.title}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <Checkbox 
                    checked={project.showOnHome} 
                    onCheckedChange={() => onToggleHome(project.id, project.showOnHome)}
                    className="data-[state=checked]:bg-primary-600"
                  />
                </td>
                <td className="py-4 px-6 text-right space-x-2">
                  <button onClick={() => onEdit(project)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit size={18} />
                  </button>
                  <button 
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete the project "${project.title}"?`)) {
                        onDelete(project.id);
                      }
                    }} 
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-500">
                  No projects found. Add one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
