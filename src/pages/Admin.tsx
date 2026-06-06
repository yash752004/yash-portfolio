import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { LogOut, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { useProjects, ProjectDetailType } from "@/hooks/useProjects";
import { useBlogs, BlogType } from "@/hooks/useBlogs";
import { getProjectConfig, saveProjectConfig, ProjectConfigType } from "@/projects/projectDetails";

import { ProjectsTable } from "@/components/admin/ProjectsTable";
import { ProjectEditor } from "@/components/admin/ProjectEditor";
import { BlogsTable } from "@/components/admin/BlogsTable";
import { BlogEditor } from "@/components/admin/BlogEditor";
import { CategoryManager } from "@/components/admin/CategoryManager";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"projects" | "categories" | "blogs" | "home">("projects");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(() => sessionStorage.getItem("adminAuth") === "true");

  // Firebase Hooks
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const { blogs, addBlog, updateBlog, deleteBlog } = useBlogs();

  // Local config for Categories (should be moved to DB eventually, keeping local for now as per previous logic)
  const [config, setConfig] = useState<ProjectConfigType>(getProjectConfig());

  // Editor States
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [editingProjectData, setEditingProjectData] = useState<ProjectDetailType | null>(null);

  const [isEditingBlog, setIsEditingBlog] = useState(false);
  const [editingBlogData, setEditingBlogData] = useState<BlogType | null>(null);

  // Filter States
  const [projectSearchTerm, setProjectSearchTerm] = useState("");
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("all");

  const filteredAdminProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(projectSearchTerm.toLowerCase());
    const matchesCategory = projectCategoryFilter === "all" || p.category === projectCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "pinak1234") {
      setIsAuthorized(true);
      sessionStorage.setItem("adminAuth", "true");
      toast.success("Login successful");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    sessionStorage.removeItem("adminAuth");
    toast.info("Logged out safely");
    navigate("/login");
  };

  // --- Category Handlers ---
  const handleAddCategory = (name: string) => {
    if (!name || config.categories.includes(name)) return;
    const newConfig = { ...config, categories: [...config.categories, name] };
    setConfig(newConfig);
    saveProjectConfig(newConfig);
    toast.success("Category added");
  };

  const handleDeleteCategory = (name: string) => {
    // Check if category is assigned to any project
    const isAssigned = projects.some(p => p.category === name);
    if (isAssigned) {
      toast.error(`Cannot delete "${name}" because it is assigned to one or more projects.`);
      return;
    }

    const newConfig = { ...config, categories: config.categories.filter(c => c !== name) };
    setConfig(newConfig);
    saveProjectConfig(newConfig);
    toast.success("Category deleted");
  };

  const handleEditCategory = async (oldName: string, newName: string) => {
    if (!newName || newName === oldName || config.categories.includes(newName)) return;
    
    // Update config
    const newCategories = config.categories.map(c => c === oldName ? newName : c);
    const newConfig = { ...config, categories: newCategories };
    setConfig(newConfig);
    saveProjectConfig(newConfig);

    // Update all projects that have the old category
    const affectedProjects = projects.filter(p => p.category === oldName);
    for (const p of affectedProjects) {
      await updateProject(p.id, { category: newName });
    }

    toast.success("Category updated");
  };

  // --- Project Handlers ---
  const handleEditProject = (p: ProjectDetailType) => {
    setEditingProjectData(p);
    setIsEditingProject(true);
  };
  const handleAddNewProject = () => {
    setEditingProjectData(null);
    setIsEditingProject(true);
  };
  const handleSaveProject = async (data: Omit<ProjectDetailType, "id"> | Partial<ProjectDetailType>) => {
    try {
      if (editingProjectData) {
        await updateProject(editingProjectData.id, data);
        toast.success("Project updated!");
      } else {
        await addProject(data as Omit<ProjectDetailType, "id">);
        toast.success("Project created!");
      }
      setIsEditingProject(false);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to save project. Ensure images aren't too large.");
    }
  };
  const handleToggleHomeProject = async (id: string, current: boolean) => {
    const homeCount = projects.filter(p => p.showOnHome).length;
    if (!current && homeCount >= 3) {
      toast.error("You can only show 3 projects on the homepage. Unselect one first.");
      return;
    }
    await updateProject(id, { showOnHome: !current });
  };

  // --- Blog Handlers ---
  const handleEditBlog = (b: BlogType) => {
    setEditingBlogData(b);
    setIsEditingBlog(true);
  };
  const handleAddNewBlog = () => {
    setEditingBlogData(null);
    setIsEditingBlog(true);
  };
  const handleSaveBlog = async (data: Omit<BlogType, "id" | "createdAt">) => {
    try {
      if (editingBlogData) {
        await updateBlog(editingBlogData.id, data);
        toast.success("Blog updated!");
      } else {
        await addBlog({ ...data, createdAt: Date.now() });
        toast.success("Blog created!");
      }
      setIsEditingBlog(false);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to save blog. Ensure images aren't too large.");
    }
  };
  const handleToggleFeaturedBlog = async (id: string) => {
    // Unfeature all others
    for (const b of blogs) {
      if (b.isFeatured && b.id !== id) {
        await updateBlog(b.id, { isFeatured: false });
      }
    }
    const targetBlog = blogs.find(b => b.id === id);
    if (targetBlog) {
      await updateBlog(id, { isFeatured: !targetBlog.isFeatured });
    }
  };
  // Check auth and redirect
  React.useEffect(() => {
    if (!isAuthorized) {
      navigate("/login", { replace: true });
    }
  }, [isAuthorized, navigate]);

  if (!isAuthorized) return null;

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#030712] overflow-hidden">
      {/* Sidebar Layout */}
      <aside className="w-64 bg-white dark:bg-[#111827] border-r border-slate-200 dark:border-white/10 hidden md:flex flex-col justify-between shrink-0">
        <div className="p-6">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-10">
            Pinak<span className="text-primary-600">.</span>
          </h2>
          <nav className="space-y-2 flex flex-col">
            <Button variant={activeTab === "projects" ? "default" : "ghost"} onClick={() => { setActiveTab("projects"); setIsEditingProject(false); }} className={`w-full justify-start text-left font-bold ${activeTab === "projects" ? "bg-primary-600 text-white" : "text-slate-500"}`}>Projects</Button>
            <Button variant={activeTab === "categories" ? "default" : "ghost"} onClick={() => setActiveTab("categories")} className={`w-full justify-start text-left font-bold ${activeTab === "categories" ? "bg-primary-600 text-white" : "text-slate-500"}`}>Categories</Button>
            <Button variant={activeTab === "blogs" ? "default" : "ghost"} onClick={() => { setActiveTab("blogs"); setIsEditingBlog(false); }} className={`w-full justify-start text-left font-bold ${activeTab === "blogs" ? "bg-primary-600 text-white" : "text-slate-500"}`}>Blogs</Button>
            <Button variant={activeTab === "home" ? "default" : "ghost"} onClick={() => setActiveTab("home")} className={`w-full justify-start text-left font-bold ${activeTab === "home" ? "bg-primary-600 text-white" : "text-slate-500"}`}>Homepage Showcase</Button>
          </nav>
        </div>
        <div className="p-6 border-t border-slate-200 dark:border-white/10">
          <Button variant="ghost" onClick={handleLogout} className="w-full justify-start font-bold text-red-500">
            <LogOut size={20} className="mr-2" /> Logout
          </Button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto w-full p-8 md:p-12 max-w-7xl mx-auto space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white capitalize">{activeTab}<span className="text-primary-600">.</span></h1>
          <p className="text-slate-500 mt-2 font-medium">Manage your {activeTab} data and configurations directly connected to Firebase.</p>
        </div>

        {activeTab === "projects" && (
          <div>
            {isEditingProject ? (
              <ProjectEditor
                initialData={editingProjectData || undefined}
                config={config}
                onSave={handleSaveProject}
                onCancel={() => setIsEditingProject(false)}
                onAddCategory={handleAddCategory}
                onDeleteCategory={handleDeleteCategory}
                onEditCategory={handleEditCategory}
              />
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">All Projects</h3>
                  <Button onClick={handleAddNewProject} className="bg-primary-600 hover:bg-primary-700 font-bold rounded-xl px-6">+ Add Project</Button>
                </div>
                
                {/* Filters */}
                <div className="flex gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Search by project name..."
                    className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={projectSearchTerm}
                    onChange={(e) => setProjectSearchTerm(e.target.value)}
                  />
                  <select
                    className="px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[200px]"
                    value={projectCategoryFilter}
                    onChange={(e) => setProjectCategoryFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    {config?.categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <ProjectsTable
                  projects={filteredAdminProjects}
                  onEdit={handleEditProject}
                  onDelete={deleteProject}
                  onToggleHome={handleToggleHomeProject}
                />
              </div>
            )}
          </div>
        )}
        {activeTab === "categories" && (
          <CategoryManager 
            categories={config?.categories || []}
            projects={projects}
            onAddCategory={handleAddCategory}
            onEditCategory={handleEditCategory}
            onDeleteCategory={handleDeleteCategory}
          />
        )}

        {activeTab === "blogs" && (
          <div>
            {isEditingBlog ? (
              <BlogEditor
                initialData={editingBlogData || undefined}
                categories={config?.categories || []}
                onSave={handleSaveBlog}
                onCancel={() => setIsEditingBlog(false)}
              />
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">All Blogs</h3>
                  <Button onClick={handleAddNewBlog} className="bg-primary-600 hover:bg-primary-700 font-bold rounded-xl px-6">+ Add Blog</Button>
                </div>
                <BlogsTable
                  blogs={blogs}
                  onEdit={handleEditBlog}
                  onDelete={deleteBlog}
                  onToggleFeatured={handleToggleFeaturedBlog}
                />
              </div>
            )}
          </div>
        )}

        {/* Keeping simple Category & Home views for now, can be expanded later */}
        {activeTab === "categories" && (
          <div className="bg-white dark:bg-white/5 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Manage Categories</h3>
            <p className="text-slate-500 mb-6">In the future, you can use a Dialog to manage these here. For now, they are managed via ProjectConfig.</p>
            <div className="flex flex-wrap gap-4">
              {config.categories.map(c => (
                <span key={c} className="px-4 py-2 bg-slate-100 dark:bg-white/10 rounded-xl font-medium">{c}</span>
              ))}
            </div>
          </div>
        )}

        {activeTab === "home" && (
          <div className="bg-white dark:bg-white/5 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Homepage Showcase</h3>
            <p className="text-slate-500 mb-6">Go to the Projects tab and check the "Show on Home" box to select which 3 projects appear on the homepage.</p>
          </div>
        )}

      </main>
    </div>
  );
};

export default Admin;
