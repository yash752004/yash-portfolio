import React from "react";
import { FolderKanban, Tags, Users, BarChart, FileText } from "lucide-react";
import { ProjectDetailType } from "@/hooks/useProjects";
import { CategoryType } from "@/hooks/useCategories";
import { ContactType } from "@/hooks/useContacts";
import { BlogType } from "@/hooks/useBlogs";

interface DashboardProps {
  projects: ProjectDetailType[];
  categories: CategoryType[];
  contacts: ContactType[];
  blogs: BlogType[];
}

export const Dashboard: React.FC<DashboardProps> = ({ projects, categories, contacts, blogs }) => {
  const newLeads = contacts.filter(c => c.status === 'New').length;
  
  const stats = [
    { label: "Total Projects", value: projects.length, icon: <FolderKanban size={24} className="text-primary-500" />, bg: "bg-primary-50" },
    { label: "Total Categories", value: categories.length, icon: <Tags size={24} className="text-secondary-500" />, bg: "bg-secondary-50" },
    { label: "Total Blogs", value: blogs.length, icon: <FileText size={24} className="text-purple-500" />, bg: "bg-purple-50" },
    { label: "Total Leads", value: contacts.length, icon: <Users size={24} className="text-emerald-500" />, bg: "bg-emerald-50" },
    { label: "New Unread Leads", value: newLeads, icon: <BarChart size={24} className="text-amber-500" />, bg: "bg-amber-50" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard Overview</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.bg} dark:bg-white/5`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <h4 className="text-3xl font-black text-slate-900 dark:text-white mt-1">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm p-6 max-w-4xl">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent Leads</h4>
        {contacts.length === 0 ? (
          <p className="text-slate-500">No leads captured yet.</p>
        ) : (
          <div className="space-y-3">
            {contacts.slice(0, 5).map(c => (
              <div key={c.id} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-white/5">
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-white">{c.name}</h5>
                  <p className="text-sm text-slate-500">{c.email} • {c.source}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  c.status === 'New' ? 'bg-amber-100 text-amber-700' : 
                  c.status === 'Reviewed' ? 'bg-blue-100 text-blue-700' : 
                  'bg-emerald-100 text-emerald-700'
                }`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
