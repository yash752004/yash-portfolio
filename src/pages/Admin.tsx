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
import { useCategories } from "@/hooks/useCategories";
import { useContacts } from "@/hooks/useContacts";
import { useProjectConfig } from "@/hooks/useProjectConfig";

import { ProjectsTable } from "@/components/admin/ProjectsTable";
import { ProjectEditor } from "@/components/admin/ProjectEditor";
import { BlogsTable } from "@/components/admin/BlogsTable";
import { BlogEditor } from "@/components/admin/BlogEditor";
import { CategoryManager } from "@/components/admin/CategoryManager";
import { Dashboard } from "@/components/admin/Dashboard";
import { ContactsManager } from "@/components/admin/ContactsManager";
import { ApplicationsManager } from "@/components/admin/ApplicationsManager";
import { TestimonialsManager } from "@/components/admin/TestimonialsManager";
import { SitemapViewer } from "@/components/admin/SitemapViewer";
import { ProductsManager } from "@/components/admin/ProductsManager";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GradientSpinner } from "@/components/ui/GradientSpinner";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"dashboard" | "projects" | "products" | "categories" | "blogs" | "leads" | "testimonials" | "sitemap">("dashboard");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(() => sessionStorage.getItem("adminAuth") === "true");

  // Firebase Hooks
  const { projects, loading: projectsLoading, addProject, updateProject, deleteProject } = useProjects();
  const { categories, addCategory, updateCategory, deleteCategory } = useCategories();
  const { blogs, addBlog, updateBlog, deleteBlog } = useBlogs();
  const { contacts, updateContactStatus, deleteContact } = useContacts();
  const { config, updateConfig } = useProjectConfig();
  
  const categoryNames = React.useMemo(() => categories.map(c => c.name), [categories]);

  // Editor States
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [editingProjectData, setEditingProjectData] = useState<ProjectDetailType | null>(null);

  const [isEditingBlog, setIsEditingBlog] = useState(false);
  const [editingBlogData, setEditingBlogData] = useState<BlogType | null>(null);

  // Filter States
  const [projectSearchTerm, setProjectSearchTerm] = useState("");
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("all");

  const isFiltersActive = projectSearchTerm !== "" || projectCategoryFilter !== "all";

  const filteredAdminProjects = React.useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(projectSearchTerm.toLowerCase());
      const matchesCategory = projectCategoryFilter === "all" || (p.category || "").toLowerCase() === projectCategoryFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [projects, projectSearchTerm, projectCategoryFilter]);

  // Local admin projects for drag-and-drop
  const [localAdminProjects, setLocalAdminProjects] = useState<ProjectDetailType[]>([]);
  const [isOrderChanged, setIsOrderChanged] = useState(false);

  React.useEffect(() => {
    if (!isOrderChanged) {
      setLocalAdminProjects(filteredAdminProjects);
    }
  }, [filteredAdminProjects, isOrderChanged]);

  const handleReorderProjects = (newOrder: ProjectDetailType[]) => {
    setLocalAdminProjects(newOrder);
    setIsOrderChanged(true);
  };

  const handleSaveProjectOrder = async () => {
    try {
      const promises = localAdminProjects.map((proj, index) => {
        if (proj.order !== index) {
          return updateProject(proj.id, { order: index });
        }
        return Promise.resolve();
      });
      await Promise.all(promises);
      toast.success("Project order saved successfully!");
      setIsOrderChanged(false);
    } catch (err: any) {
      toast.error("Failed to save project order.");
      console.error(err);
    }
  };

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
  const handleAddCategory = async (name: string) => {
    if (!name || categoryNames.includes(name)) return;
    await addCategory({ name });
    toast.success("Category added");
  };

  const handleDeleteCategory = async (name: string) => {
    // Check if category is assigned to any project
    const isAssigned = projects.some(p => p.category === name);
    if (isAssigned) {
      toast.error(`Cannot delete "${name}" because it is assigned to one or more projects.`);
      return;
    }

    const cat = categories.find(c => c.name === name);
    if (cat) {
      await deleteCategory(cat.id);
      toast.success("Category deleted");
    }
  };

  const handleEditCategory = async (oldName: string, newName: string) => {
    if (!newName || newName === oldName || categoryNames.includes(newName)) return;
    
    const cat = categories.find(c => c.name === oldName);
    if (cat) {
      await updateCategory(cat.id, { name: newName });
    }

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

  const handleToggleProjectsPageProject = async (id: string, current: boolean) => {
    await updateProject(id, { showOnProjects: !current });
    toast.success(`Project ${!current ? 'will now' : 'will no longer'} appear on the Userside Projects page.`);
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
            <Button variant={activeTab === "dashboard" ? "default" : "ghost"} onClick={() => setActiveTab("dashboard")} className={`w-full justify-start text-left font-bold ${activeTab === "dashboard" ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md" : "text-slate-500"}`}>Dashboard</Button>
            <Button variant={activeTab === "projects" ? "default" : "ghost"} onClick={() => { setActiveTab("projects"); setIsEditingProject(false); setIsOrderChanged(false); }} className={`w-full justify-start text-left font-bold ${activeTab === "projects" ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md" : "text-slate-500"}`}>Projects</Button>
            <Button variant={activeTab === "products" ? "default" : "ghost"} onClick={() => setActiveTab("products")} className={`w-full justify-start text-left font-bold ${activeTab === "products" ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md" : "text-slate-500"}`}>Products</Button>
            <Button variant={activeTab === "categories" ? "default" : "ghost"} onClick={() => setActiveTab("categories")} className={`w-full justify-start text-left font-bold ${activeTab === "categories" ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md" : "text-slate-500"}`}>Categories</Button>
            <Button variant={activeTab === "blogs" ? "default" : "ghost"} onClick={() => { setActiveTab("blogs"); setIsEditingBlog(false); }} className={`w-full justify-start text-left font-bold ${activeTab === "blogs" ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md" : "text-slate-500"}`}>Blogs</Button>
            <Button variant={activeTab === "leads" ? "default" : "ghost"} onClick={() => setActiveTab("leads")} className={`w-full justify-start text-left font-bold ${activeTab === "leads" ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md" : "text-slate-500"}`}>Leads & Contacts</Button>
            <Button variant={activeTab === "testimonials" ? "default" : "ghost"} onClick={() => setActiveTab("testimonials")} className={`w-full justify-start text-left font-bold ${activeTab === "testimonials" ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md" : "text-slate-500"}`}>Testimonials</Button>
            <Button variant={activeTab === "sitemap" ? "default" : "ghost"} onClick={() => setActiveTab("sitemap")} className={`w-full justify-start text-left font-bold ${activeTab === "sitemap" ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md" : "text-slate-500"}`}>SEO & Sitemap</Button>
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

        {activeTab === "dashboard" && (
          <Dashboard 
            projects={projects}
            categories={categories}
            contacts={contacts}
            blogs={blogs}
          />
        )}
        {activeTab === "projects" && (
          <div>
            {isEditingProject ? (
              <ProjectEditor
                initialData={editingProjectData || undefined}
                categories={categoryNames}
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
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2 mr-4 bg-slate-100 px-4 py-2 rounded-xl">
                      <input 
                        type="checkbox" 
                        id="showCategoryFilter"
                        checked={config.showCategoryFilter}
                        onChange={(e) => updateConfig({ showCategoryFilter: e.target.checked })}
                        className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="showCategoryFilter" className="text-sm font-bold text-slate-700 cursor-pointer">
                        Show Category Filters on User Side
                      </label>
                    </div>
                    {isOrderChanged && (
                      <Button onClick={handleSaveProjectOrder} className="bg-emerald-600 hover:bg-emerald-700 font-bold rounded-xl px-6">Save Order</Button>
                    )}
                    <Button onClick={handleAddNewProject} className="bg-primary-600 hover:bg-primary-700 font-bold rounded-xl px-6">+ Add Project</Button>
                  </div>
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
                    {categoryNames.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {projectsLoading ? (
                  <div className="flex justify-center items-center py-20 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-white/10 shadow-sm">
                    <GradientSpinner />
                  </div>
                ) : (
                  <ProjectsTable
                    projects={localAdminProjects}
                    onEdit={handleEditProject}
                    onDelete={deleteProject}
                    onToggleHome={handleToggleHomeProject}
                    onToggleProjectsPage={handleToggleProjectsPageProject}
                    isReorderable={!isFiltersActive}
                    onReorder={handleReorderProjects}
                  />
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === "products" && (
          <ProductsManager />
        )}

        {activeTab === "categories" && (
          <CategoryManager 
            categories={categoryNames}
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
                categories={categoryNames}
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

        {activeTab === "leads" && (
          <ContactsManager 
            contacts={contacts}
            onUpdateStatus={updateContactStatus}
            onDelete={deleteContact}
          />
        )}

        {activeTab === "testimonials" && (
          <TestimonialsManager />
        )}

        {activeTab === "sitemap" && (
          <SitemapViewer />
        )}

      </main>
    </div>
  );
};

export default Admin;
