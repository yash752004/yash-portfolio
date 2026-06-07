import React from "react";
import { ApplicationType } from "@/hooks/useApplications";
import { FileText, Trash2, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApplicationsManagerProps {
  applications: ApplicationType[];
  onUpdateStatus: (id: string, status: ApplicationType['status']) => void;
  onDelete: (id: string) => void;
}

export const ApplicationsManager: React.FC<ApplicationsManagerProps> = ({
  applications,
  onUpdateStatus,
  onDelete
}) => {
  if (applications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-white/10 shadow-sm text-center">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Applications Yet</h3>
        <p className="text-slate-500 max-w-sm">When candidates apply on the Career page, their applications and resumes will appear here.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Candidate</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Resume</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 dark:text-white">{app.name}</span>
                    <a href={`mailto:${app.email}`} className="text-sm text-slate-500 flex items-center gap-1 hover:text-primary-600 mt-1">
                      <Mail className="w-3 h-3" /> {app.email}
                    </a>
                    <a href={`tel:${app.phone}`} className="text-sm text-slate-500 flex items-center gap-1 hover:text-primary-600 mt-0.5">
                      <Phone className="w-3 h-3" /> {app.phone}
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                    {app.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-[250px] line-clamp-3">
                    {app.message || <span className="italic text-slate-400">No message provided</span>}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="font-bold border-slate-200 dark:border-white/10"
                    onClick={() => window.open(app.resumeUrl, "_blank")}
                  >
                    <FileText className="w-4 h-4 mr-2 text-primary-600" />
                    View PDF
                  </Button>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={app.status}
                    onChange={(e) => onUpdateStatus(app.id, e.target.value as ApplicationType['status'])}
                    className={`text-sm font-bold px-3 py-1.5 rounded-lg border-0 cursor-pointer focus:ring-2 focus:ring-primary-500 ${
                      app.status === 'New' ? 'bg-blue-50 text-blue-700' :
                      app.status === 'Reviewed' ? 'bg-amber-50 text-amber-700' :
                      app.status === 'Interviewing' ? 'bg-purple-50 text-purple-700' :
                      app.status === 'Hired' ? 'bg-emerald-50 text-emerald-700' :
                      'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <option value="New">New</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 whitespace-nowrap">
                    <Clock className="w-4 h-4" />
                    {new Date(app.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this application?")) {
                        onDelete(app.id);
                      }
                    }}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
