import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getProjectDatas,
  getProjectConfig,
  saveProjectDatas,
  saveProjectConfig,
  type ProjectDetailType,
  type ProjectConfigType,
} from "@/projects/projectDetails";
import { FileManifest } from "@/projects/fileManifest";
import { Reorder, motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  GripVertical,
  Image as ImageIcon,
  Save,
  Search,
  Folder,
  ChevronRight,
  File,
  History,
  RotateCcw,
  FileText,
  Undo2,
  CheckCircle2,
  LogOut,
  LayoutGrid,
} from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const resolveImagePath = (path: string) => {
  if (!path) return "";
  if (path.startsWith("@/")) return path.replace("@/", "/src/");
  return path;
};

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(() => {
    return sessionStorage.getItem("adminAuth") === "true";
  });
  const [projects, setProjects] = useState<ProjectDetailType[]>([]);
  const [config, setConfig] = useState<ProjectConfigType | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const [initialProjects, setInitialProjects] = useState<ProjectDetailType[]>(
    [],
  );
  const [initialConfig, setInitialConfig] = useState<ProjectConfigType | null>(
    null,
  );

  type PendingChange = {
    type:
      | "PROJECT_ADDED"
      | "PROJECT_MODIFIED"
      | "PROJECT_DELETED"
      | "CONFIG_MODIFIED";
    label: string;
    id?: string;
    oldValue: ProjectDetailType | ProjectConfigType | null;
    newValue: ProjectDetailType | ProjectConfigType | null;
  };

  useEffect(() => {
    const p = getProjectDatas();
    const c = getProjectConfig();
    setProjects(p);
    setConfig(c);
    setInitialProjects(JSON.parse(JSON.stringify(p)));
    setInitialConfig(JSON.parse(JSON.stringify(c)));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "@pinak1996") {
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
  };

  const updateProject = (id: string, updates: Partial<ProjectDetailType>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    );
  };

  const addProject = () => {
    const newId = `new-project-${Date.now()}`;
    const newProject: ProjectDetailType = {
      id: newId,
      title: "New Project",
      description: "Description here",
      tools: [],
      verticalThumbnail: "",
      thumbnail: "",
      screenshots: [],
      liveLink: "",
      hasLiveLink: false,
      category: config?.categories[0] || "Web Development",
      showOnHome: false,
      showOnProjects: true,
    };
    setProjects((prev) => [...prev, newProject]);
    setSelectedProjectId(newId);
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    if (selectedProjectId === id) setSelectedProjectId(null);
  };

  const addCategory = (name: string) => {
    if (!name || config?.categories.includes(name)) return;
    setConfig((prev) =>
      prev ? { ...prev, categories: [...prev.categories, name] } : null,
    );
  };

  const removeCategory = (name: string) => {
    setConfig((prev) =>
      prev
        ? { ...prev, categories: prev.categories.filter((c) => c !== name) }
        : null,
    );
  };

  const getPendingChanges = () => {
    const changes: PendingChange[] = [];

    // Check for added and modified projects
    projects.forEach((p) => {
      const initial = initialProjects.find((ip) => ip.id === p.id);
      if (!initial) {
        changes.push({
          type: "PROJECT_ADDED",
          label: `New project: ${p.title}`,
          id: p.id,
          oldValue: null,
          newValue: p,
        });
      } else if (JSON.stringify(initial) !== JSON.stringify(p)) {
        changes.push({
          type: "PROJECT_MODIFIED",
          label: `Edits in project: ${p.title}`,
          id: p.id,
          oldValue: initial,
          newValue: p,
        });
      }
    });

    // Check for deleted projects
    initialProjects.forEach((ip) => {
      if (!projects.find((p) => p.id === ip.id)) {
        changes.push({
          type: "PROJECT_DELETED",
          label: `Deleted project: ${ip.title}`,
          id: ip.id,
          oldValue: ip,
          newValue: null,
        });
      }
    });

    // Check for global settings changes
    if (
      config &&
      initialConfig &&
      JSON.stringify(config) !== JSON.stringify(initialConfig)
    ) {
      changes.push({
        type: "CONFIG_MODIFIED",
        label: "Updated Global Settings",
        oldValue: initialConfig,
        newValue: config,
      });
    }

    return changes;
  };

  const revertChange = (change: PendingChange) => {
    switch (change.type) {
      case "PROJECT_ADDED":
        setProjects((prev) => prev.filter((p) => p.id !== change.id));
        if (selectedProjectId === change.id) setSelectedProjectId(null);
        break;
      case "PROJECT_MODIFIED":
        setProjects((prev) =>
          prev.map((p) =>
            p.id === change.id ? (change.oldValue as ProjectDetailType) : p,
          ),
        );
        break;
      case "PROJECT_DELETED":
        setProjects((prev) => [...prev, change.oldValue as ProjectDetailType]);
        break;
      case "CONFIG_MODIFIED":
        setConfig(change.oldValue as ProjectConfigType);
        break;
    }
    toast.info("Change reverted successfully");
  };

  const handleSave = () => {
    if (!config) return;
    saveProjectDatas(projects);
    saveProjectConfig(config);
    setInitialProjects(JSON.parse(JSON.stringify(projects)));
    setInitialConfig(JSON.parse(JSON.stringify(config)));
    toast.success("Changes published successfully!", {
      description: "Everything is now live.",
    });
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen relative flex items-center justify-center bg-slate-950 p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ShootingStars />
          <StarsBackground />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 z-10"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20">
              <ImageIcon className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Admin Console
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Enter your credential to manage portfolio
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500 ml-1">
                Access Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/10 text-white rounded-xl h-12 focus:ring-primary-500/50"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xl py-6 text-lg font-bold bg-primary-600 hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 active:scale-[0.98]"
            >
              Unlock Dashboard
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712]">
      <Header />
      <main className="container pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
        >
          <div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Dashboard<span className="text-primary-600">.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Manage your projects, categories and global performance.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="gap-2 rounded-2xl px-6 h-14 font-bold text-slate-400 hover:text-red-500 transition-colors"
            >
              <LogOut size={20} />
              Logout
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="relative gap-2 rounded-2xl px-8 py-6 text-lg font-bold shadow-xl shadow-primary-500/10 hover:shadow-primary-500/20 transition-all active:scale-95 bg-primary-600 group">
                  <History
                    size={20}
                    className="group-hover:rotate-[-45deg] transition-all"
                  />
                  Publish Changes
                  {getPendingChanges().length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                      {getPendingChanges().length}
                    </span>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl rounded-[2.5rem] p-0 overflow-hidden bg-white dark:bg-[#030712] border-slate-200 dark:border-white/10 shadow-2xl">
                <div className="p-10 border-b border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary-600/10 rounded-2xl flex items-center justify-center text-primary-600">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                        Review Changes
                      </h3>
                      <p className="text-slate-400 font-medium">
                        Verify your edits before making them live.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="max-h-[50vh] overflow-y-auto p-10 space-y-4 custom-scrollbar">
                  {getPendingChanges().length > 0 ? (
                    getPendingChanges().map((change, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-5 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 group hover:border-primary-500/30 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              change.type === "PROJECT_ADDED"
                                ? "bg-green-500/20 text-green-600"
                                : change.type === "PROJECT_DELETED"
                                  ? "bg-red-500/20 text-red-600"
                                  : "bg-blue-500/20 text-blue-600"
                            }`}
                          >
                            {change.type === "PROJECT_ADDED" ? (
                              <Plus size={20} />
                            ) : change.type === "PROJECT_DELETED" ? (
                              <Trash2 size={20} />
                            ) : (
                              <FileText size={20} />
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white">
                              {change.label}
                            </p>
                            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-0.5">
                              {change.type.replace("_", " ")}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            revertChange(change);
                          }}
                          className="opacity-0 group-hover:opacity-100 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-all gap-2"
                        >
                          <Undo2 size={16} />
                          Revert
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto text-slate-300">
                        <CheckCircle2 size={40} />
                      </div>
                      <p className="text-slate-500 font-bold text-lg">
                        No pending changes
                      </p>
                      <p className="text-slate-400 text-sm max-w-xs mx-auto">
                        Your dashboard is up to date with the published site.
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-10 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/10 flex justify-end gap-4">
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="rounded-2xl px-6 h-14 font-bold text-slate-500"
                    >
                      Back to Editing
                    </Button>
                  </DialogTrigger>
                  <DialogTrigger asChild>
                    <Button
                      onClick={handleSave}
                      disabled={getPendingChanges().length === 0}
                      className="rounded-2xl px-10 h-14 bg-primary-600 hover:bg-primary-700 font-black shadow-xl shadow-primary-500/20"
                    >
                      Confirm & Publish
                    </Button>
                  </DialogTrigger>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="bg-white/50 dark:bg-white/5 backdrop-blur-md p-1.5 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10 w-fit">
            <TabsTrigger
              value="projects"
              className="rounded-xl px-10 py-3 data-[state=active]:bg-primary-600 dark:data-[state=active]:bg-primary-600 data-[state=active]:text-white data-[state=active]:shadow-md font-bold transition-all"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="categories"
              className="rounded-xl px-10 py-3 data-[state=active]:bg-primary-600 dark:data-[state=active]:bg-primary-600 data-[state=active]:text-white data-[state=active]:shadow-md font-bold transition-all"
            >
              Categories
            </TabsTrigger>
            <TabsTrigger
              value="home"
              className="rounded-xl px-10 py-3 data-[state=active]:bg-primary-600 dark:data-[state=active]:bg-primary-600 data-[state=active]:text-white data-[state=active]:shadow-md font-bold transition-all"
            >
              Homepage
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="projects"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 ring-0 focus-visible:ring-0"
          >
            {/* Sidebar List */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/10 h-fit">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                    Project List
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={addProject}
                    className="rounded-2xl hover:bg-primary-500/10 text-primary-600 w-10 h-10"
                  >
                    <Plus size={24} />
                  </Button>
                </div>

                <Reorder.Group
                  axis="y"
                  values={projects}
                  onReorder={setProjects}
                  className="space-y-3"
                >
                  {projects.map((proj) => (
                    <Reorder.Item
                      key={proj.id}
                      value={proj}
                      className={`group flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all border ${
                        selectedProjectId === proj.id
                          ? "bg-primary-600 border-primary-500 text-white shadow-xl shadow-primary-600/20 scale-[1.02] z-10"
                          : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-200 dark:hover:border-white/10"
                      }`}
                      onClick={() => setSelectedProjectId(proj.id)}
                    >
                      <GripVertical
                        size={18}
                        className={`${selectedProjectId === proj.id ? "text-white/40" : "text-slate-300 dark:text-slate-600"} cursor-grab`}
                      />
                      <div className="flex-1 truncate">
                        <p className="font-bold truncate leading-tight">
                          {proj.title}
                        </p>
                        <p
                          className={`text-[10px] uppercase tracking-widest font-semibold mt-0.5 ${selectedProjectId === proj.id ? "text-white/60" : "text-slate-400"}`}
                        >
                          {proj.category}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`opacity-0 group-hover:opacity-100 h-8 w-8 rounded-xl transition-all ${selectedProjectId === proj.id ? "hover:bg-black/20 text-white" : "hover:bg-red-50 text-red-500"}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteProject(proj.id);
                        }}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </div>

              {projects.length === 0 && (
                <div className="p-12 text-center bg-slate-50 dark:bg-white/5 rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10">
                  <p className="text-slate-400 font-medium">No projects yet</p>
                  <Button
                    variant="link"
                    onClick={addProject}
                    className="text-primary-600 font-bold p-0 h-auto mt-2"
                  >
                    Create your first
                  </Button>
                </div>
              )}
            </div>

            {/* Editor Area */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {selectedProject ? (
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/10 space-y-10"
                  >
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-2 h-8 bg-primary-600 rounded-full" />
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                          Project Details
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">
                            Project Title
                          </label>
                          <Input
                            value={selectedProject.title}
                            className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10 focus:ring-primary-500/50 text-lg font-bold"
                            onChange={(e) =>
                              updateProject(selectedProject.id, {
                                title: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">
                            Primary Category
                          </label>
                          <select
                            className="flex h-14 w-full rounded-2xl border border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-[#111827] px-4 py-2 text-lg font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 transition-all"
                            value={selectedProject.category}
                            onChange={(e) =>
                              updateProject(selectedProject.id, {
                                category: e.target.value,
                              })
                            }
                          >
                            {config?.categories.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">
                          Project Overview
                        </label>
                        <textarea
                          placeholder="Tell us about the project..."
                          className="flex min-h-[160px] w-full rounded-3xl border border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-5 py-4 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 transition-all leading-relaxed"
                          value={selectedProject.description}
                          onChange={(e) =>
                            updateProject(selectedProject.id, {
                              description: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                          <LayoutGrid size={20} className="text-primary-600" />
                          <h3 className="text-xl font-black text-slate-900 dark:text-white">
                            Visibility & Placement
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div
                            className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all border ${selectedProject.showOnProjects ? "bg-primary-600/10 border-primary-500/30" : "bg-white dark:bg-white/5 border-transparent"}`}
                            onClick={() =>
                              updateProject(selectedProject.id, {
                                showOnProjects: !selectedProject.showOnProjects,
                              })
                            }
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2 rounded-xl ${selectedProject.showOnProjects ? "bg-primary-600 text-white" : "bg-slate-100 dark:bg-white/10 text-slate-400"}`}
                              >
                                <LayoutGrid size={18} />
                              </div>
                              <span
                                className={`font-bold ${selectedProject.showOnProjects ? "text-primary-800 dark:text-primary-200" : "text-slate-500"}`}
                              >
                                Show on Projects Page
                              </span>
                            </div>
                            <Checkbox
                              checked={selectedProject.showOnProjects}
                              onCheckedChange={(val) =>
                                updateProject(selectedProject.id, {
                                  showOnProjects: !!val,
                                })
                              }
                            />
                          </div>

                          <div
                            className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all border ${selectedProject.showOnHome ? "bg-primary-600/10 border-primary-500/30" : "bg-white dark:bg-white/5 border-transparent"}`}
                            onClick={() =>
                              updateProject(selectedProject.id, {
                                showOnHome: !selectedProject.showOnHome,
                              })
                            }
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2 rounded-xl ${selectedProject.showOnHome ? "bg-primary-600 text-white" : "bg-slate-100 dark:bg-white/10 text-slate-400"}`}
                              >
                                <ImageIcon size={18} />
                              </div>
                              <span
                                className={`font-bold ${selectedProject.showOnHome ? "text-primary-800 dark:text-primary-200" : "text-slate-500"}`}
                              >
                                Show on Homepage
                              </span>
                            </div>
                            <Checkbox
                              checked={selectedProject.showOnHome}
                              onCheckedChange={(val) =>
                                updateProject(selectedProject.id, {
                                  showOnHome: !!val,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                        <div className="space-y-4">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">
                            Visual Identity (Thumbnails)
                          </label>
                          <div className="flex gap-6">
                            <ImagePicker
                              label="Web Thumbnail"
                              currentImage={selectedProject.thumbnail}
                              onSelect={(path) =>
                                updateProject(selectedProject.id, {
                                  thumbnail: path,
                                })
                              }
                            />
                            <ImagePicker
                              label="App Preview"
                              currentImage={selectedProject.verticalThumbnail}
                              onSelect={(path) =>
                                updateProject(selectedProject.id, {
                                  verticalThumbnail: path,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="space-y-6">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">
                            Deployment
                          </label>
                          <div className="space-y-4 bg-slate-50 dark:bg-white/5 p-6 rounded-[2rem] border border-slate-100 dark:border-white/10">
                            {/* <div className="flex items-center justify-between">
                              <label htmlFor="home" className="text-base font-bold text-slate-700 dark:text-slate-200 cursor-pointer">
                                Display on Homepage
                              </label>
                              <Checkbox 
                                id="home" 
                                checked={selectedProject.showOnHome} 
                                className="w-6 h-6 rounded-lg data-[state=checked]:bg-primary-600"
                                onCheckedChange={(val) => updateProject(selectedProject.id, { showOnHome: !!val })}
                              />
                            </div> */}
                            {/* <div className="pt-2 border-t border-slate-200 dark:border-white/10" /> */}
                            <div className="flex items-center justify-between">
                              <label
                                htmlFor="live"
                                className="text-base font-bold text-slate-700 dark:text-slate-200 cursor-pointer"
                              >
                                Active Live Preview
                              </label>
                              <Checkbox
                                id="live"
                                checked={selectedProject.hasLiveLink}
                                className="w-6 h-6 rounded-lg data-[state=checked]:bg-primary-600"
                                onCheckedChange={(val) =>
                                  updateProject(selectedProject.id, {
                                    hasLiveLink: !!val,
                                  })
                                }
                              />
                            </div>
                            {selectedProject.hasLiveLink && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="pt-2"
                              >
                                <Input
                                  placeholder="https://your-live-site.com"
                                  className="rounded-xl h-12 bg-white dark:bg-black/20 font-medium"
                                  value={selectedProject.liveLink}
                                  onChange={(e) =>
                                    updateProject(selectedProject.id, {
                                      liveLink: e.target.value,
                                    })
                                  }
                                />
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pt-6">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">
                            Gallery Screenshots
                          </label>
                          <ImagePicker
                            label="Add Screenshots"
                            multiSelect
                            onSelectMultiple={(paths) =>
                              updateProject(selectedProject.id, {
                                screenshots: [
                                  ...selectedProject.screenshots,
                                  ...paths,
                                ],
                              })
                            }
                            trigger={
                              <Button
                                variant="outline"
                                className="gap-2 rounded-xl h-10 px-5 border-primary-500/30 text-primary-600 hover:bg-primary-50 w-fit"
                              >
                                <Plus size={18} />
                                Add Media
                              </Button>
                            }
                          />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {selectedProject.screenshots.map((s, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-white/10 group shadow-lg"
                            >
                              <img
                                src={resolveImagePath(s)}
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() =>
                                  updateProject(selectedProject.id, {
                                    screenshots:
                                      selectedProject.screenshots.filter(
                                        (_, idx) => idx !== i,
                                      ),
                                  })
                                }
                                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-xl active:scale-90"
                              >
                                <Trash2 size={16} />
                              </button>
                            </motion.div>
                          ))}
                          {selectedProject.screenshots.length === 0 && (
                            <div className="col-span-full py-12 text-center bg-slate-50 dark:bg-white/5 rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10">
                              <p className="text-slate-400 font-medium">
                                No screenshots uploaded
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-white/10 rounded-[2.5rem] min-h-[600px] bg-slate-50/50 dark:bg-white/[0.02]">
                    <div className="w-20 h-20 bg-slate-200 dark:bg-white/5 rounded-3xl flex items-center justify-center mb-6 text-slate-400">
                      <Search size={40} />
                    </div>
                    <p className="text-slate-500 text-xl font-bold">
                      Select a project to start
                    </p>
                    <p className="text-slate-400 mt-2">
                      Pick an item from the sidebar to edit its content.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent
            value="categories"
            className="max-w-4xl ring-0 focus-visible:ring-0"
          >
            <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-12 shadow-xl border border-slate-100 dark:border-white/10 space-y-12">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-2 h-8 bg-primary-600 rounded-full" />
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                  Taxonomy Control
                </h2>
              </div>

              <div className="flex items-center justify-between bg-slate-50 dark:bg-white/5 p-8 rounded-[2rem] border border-slate-100 dark:border-white/10">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Public Filtering
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    Allow users to filter your projects by these categories.
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-[#111827] px-6 py-4 rounded-2xl shadow-sm">
                  <label
                    htmlFor="showTabs"
                    className="text-base font-bold text-slate-700 dark:text-slate-200 cursor-pointer"
                  >
                    Enable View
                  </label>
                  <Checkbox
                    id="showTabs"
                    checked={config?.showCategoryTabs}
                    className="w-7 h-7 rounded-lg data-[state=checked]:bg-primary-600"
                    onCheckedChange={(val) =>
                      setConfig((prev) =>
                        prev ? { ...prev, showCategoryTabs: !!val } : null,
                      )
                    }
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white ml-2">
                  Active Categories
                </h3>
                <div className="flex flex-wrap gap-4">
                  {config?.categories.map((cat) => (
                    <motion.div
                      key={cat}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 bg-white dark:bg-white/5 px-6 py-3 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm"
                    >
                      <span className="font-bold text-slate-700 dark:text-white">
                        {cat}
                      </span>
                      <button
                        onClick={() => removeCategory(cat)}
                        className="text-red-400 hover:text-red-600 p-1.5 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))}
                  <CategoryAdd onAdd={addCategory} />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="home"
            className="max-w-4xl ring-0 focus-visible:ring-0"
          >
            <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-12 shadow-xl border border-slate-100 dark:border-white/10 space-y-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-2 h-8 bg-primary-600 rounded-full" />
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                  Homepage Showcase
                </h2>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-2xl">
                The projects selected below will appear in the "Our Work"
                marquee on your landing page.
                <span className="text-primary-600 block mt-2">
                  The display order is synced with your primary Project List.
                </span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className={`flex items-center justify-between p-5 rounded-3xl transition-all border ${
                      proj.showOnHome
                        ? "bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-500/20"
                        : "bg-slate-50 dark:bg-white/5 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md ring-2 ring-white/10">
                        <img
                          src={resolveImagePath(proj.thumbnail)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p
                          className={`font-black leading-tight ${proj.showOnHome ? "text-white" : "text-slate-900 dark:text-white"}`}
                        >
                          {proj.title}
                        </p>
                        <p
                          className={`text-[10px] uppercase tracking-widest font-black mt-1 ${proj.showOnHome ? "text-white/60" : "text-slate-400"}`}
                        >
                          {proj.category}
                        </p>
                      </div>
                    </div>
                    <Checkbox
                      checked={proj.showOnHome}
                      className={`w-7 h-7 rounded-xl border-2 transition-all ${proj.showOnHome ? "bg-white border-white data-[state=checked]:bg-white data-[state=checked]:text-primary-600" : "data-[state=checked]:bg-primary-600"}`}
                      onCheckedChange={(val) =>
                        updateProject(proj.id, { showOnHome: !!val })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

// --- Subcomponents ---

const CategoryAdd = ({ onAdd }: { onAdd: (name: string) => void }) => {
  const [val, setVal] = useState("");
  return (
    <div className="flex gap-3 bg-white dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
      <Input
        placeholder="New Category..."
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="h-10 w-48 rounded-xl bg-transparent border-none focus:ring-0 font-bold"
      />
      <Button
        size="sm"
        onClick={() => {
          onAdd(val);
          setVal("");
        }}
        className="rounded-xl h-10 w-10 p-0 bg-primary-600 hover:bg-primary-700"
      >
        <Plus size={20} />
      </Button>
    </div>
  );
};

const ImagePicker = ({
  label,
  currentImage,
  onSelect,
  onSelectMultiple,
  multiSelect = false,
  trigger,
}: {
  label: string;
  currentImage?: string;
  onSelect?: (path: string) => void;
  onSelectMultiple?: (paths: string[]) => void;
  multiSelect?: boolean;
  trigger?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [selectedPaths, setSelectedPaths] = useState<string[]>([]);

  const folders = useMemo(
    () => [
      ...new Set(
        FileManifest.map((f) => f.path.split("/").slice(0, -1).join("/")),
      ),
    ],
    [],
  );

  const subFolders = useMemo(() => {
    if (!currentFolder) return ["public", "src/assets", "src/projects"];
    return folders.filter((f) => {
      const parts = f.split("/");
      const currentParts = currentFolder.split("/");
      return (
        f.startsWith(currentFolder + "/") &&
        parts.length === currentParts.length + 1
      );
    });
  }, [currentFolder, folders]);

  const currentFiles = useMemo(() => {
    if (!currentFolder) return [];
    return FileManifest.filter((f) => {
      const parentDir = f.path.split("/").slice(0, -1).join("/");
      const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase());
      return parentDir === currentFolder && matchesSearch;
    });
  }, [currentFolder, search]);

  const getFolderName = (path: string) => {
    if (path === "public") return "Public";
    return path.split("/").pop() || path;
  };

  const handleFileClick = (path: string) => {
    const formattedPath = path.startsWith("src/")
      ? path.replace("src/", "/src/")
      : path.replace("public/", "/");

    if (multiSelect) {
      setSelectedPaths((prev) =>
        prev.includes(formattedPath)
          ? prev.filter((p) => p !== formattedPath)
          : [...prev, formattedPath],
      );
    } else {
      onSelect?.(formattedPath);
      setIsOpen(false);
    }
  };

  const handleConfirm = () => {
    onSelectMultiple?.(selectedPaths);
    setSelectedPaths([]);
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) setSelectedPaths([]);
      }}
    >
      <DialogTrigger asChild>
        {trigger || (
          <div className="space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
              {label}
            </span>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-28 h-28 rounded-3xl bg-slate-50 dark:bg-white/5 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-all overflow-hidden group border-2 border-dashed border-slate-200 dark:border-white/10 relative shadow-sm"
            >
              {currentImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={resolveImagePath(currentImage || "")}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ImageIcon className="text-white" size={24} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1 text-slate-400 group-hover:text-primary-600 transition-colors">
                  <Plus size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    Choose
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[85vh] p-0 overflow-hidden flex flex-col bg-white dark:bg-[#030712] border-slate-200 dark:border-white/10 rounded-[3rem] shadow-2xl">
        <div className="px-10 py-8 border-b border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Assets Library
                </h3>
                {currentFolder && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="text-slate-300" />
                    <span className="text-primary-600 font-bold bg-primary-50 dark:bg-primary-600/10 px-3 py-1 rounded-lg text-sm">
                      {getFolderName(currentFolder)}
                    </span>
                  </motion.div>
                )}
              </div>
              <p className="text-slate-400 text-sm font-medium">
                {multiSelect
                  ? `Selected ${selectedPaths.length} items`
                  : "Browse and select image for your project."}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-80 shadow-sm">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <Input
                  placeholder="Find an asset..."
                  className="pl-12 h-12 bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 rounded-2xl font-medium focus:ring-primary-500/50"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {multiSelect && selectedPaths.length > 0 && (
                <Button
                  onClick={handleConfirm}
                  className="h-12 px-8 rounded-2xl bg-primary-600 hover:bg-primary-700 font-bold shadow-lg shadow-primary-500/20"
                >
                  Add {selectedPaths.length}
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {currentFolder && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() =>
                  setCurrentFolder(
                    (prev) => prev?.split("/").slice(0, -1).join("/") || null,
                  )
                }
                className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10 group transition-all"
              >
                <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary-50 transition-all">
                  <ChevronRight
                    size={24}
                    className="rotate-180 text-slate-400 group-hover:text-primary-600"
                  />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Go Back
                </span>
              </motion.button>
            )}

            {subFolders.map((folder) => (
              <motion.button
                key={folder}
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={() => setCurrentFolder(folder)}
                className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-white/5 rounded-[2rem] transition-all hover:shadow-2xl border border-slate-100 dark:border-white/10 group shadow-lg shadow-slate-200/50 dark:shadow-none"
              >
                <div className="w-20 h-20 bg-primary-50 dark:bg-primary-600/10 rounded-[1.75rem] flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-600/20 transition-all">
                  <Folder
                    size={44}
                    className="text-primary-600 fill-primary-600/10"
                  />
                </div>
                <div className="text-center w-full">
                  <p className="text-sm font-black text-slate-900 dark:text-white truncate">
                    {getFolderName(folder)}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                    Directory
                  </p>
                </div>
              </motion.button>
            ))}

            {currentFiles.map((file) => {
              const formattedPath = file.path.startsWith("src/")
                ? file.path.replace("src/", "/src/")
                : file.path.replace("public/", "/");
              const isSelected = selectedPaths.includes(formattedPath);
              const selectionIndex = selectedPaths.indexOf(formattedPath);

              return (
                <motion.button
                  key={file.path}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => handleFileClick(file.path)}
                  className={`flex flex-col items-center gap-3 p-3 rounded-[2rem] transition-all border group shadow-lg shadow-slate-200/50 dark:shadow-none relative ${
                    isSelected
                      ? "bg-primary-500/10 border-primary-500 ring-4 ring-primary-500/20"
                      : "bg-white dark:bg-white/5 border-slate-100 dark:border-white/10 hover:shadow-2xl"
                  }`}
                >
                  <div className="w-full aspect-square rounded-[1.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 relative shadow-inner">
                    <img
                      src={
                        file.path.startsWith("src/")
                          ? file.path.replace("src/", "/src/")
                          : file.path.replace("public/", "/")
                      }
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity flex items-center justify-center ${isSelected ? "bg-primary-600/40 opacity-100" : "bg-primary-600/20 opacity-0 group-hover:opacity-100"}`}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-2xl relative"
                        >
                          <Plus
                            size={28}
                            className="text-primary-600 rotate-45"
                          />
                          <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                            {selectionIndex + 1}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  <div className="text-center w-full px-2 pb-1">
                    <p
                      className={`text-[11px] font-bold truncate ${isSelected ? "text-primary-600" : "text-slate-800 dark:text-slate-200"}`}
                    >
                      {file.name}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {currentFiles.length === 0 && subFolders.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center py-20 text-slate-300">
              <ImageIcon size={64} className="opacity-20 mb-4" />
              <p className="text-xl font-bold">No assets found</p>
              <p className="text-sm font-medium opacity-60">
                Try clearing your search or exploring another folder.
              </p>
            </div>
          )}
        </div>

        {multiSelect && selectedPaths.length > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="p-8 border-t border-slate-100 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-2xl flex flex-col md:flex-row items-center gap-8 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
          >
            <div className="flex-1 flex gap-4 overflow-x-auto pb-2 custom-scrollbar max-w-full">
              {selectedPaths.map((path, idx) => (
                <div key={path} className="relative shrink-0 group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary-500 shadow-lg">
                    <img
                      src={resolveImagePath(path)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() =>
                      setSelectedPaths((prev) => prev.filter((p) => p !== path))
                    }
                    className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all active:scale-90"
                  >
                    <Trash2 size={12} />
                  </button>
                  <div className="absolute -bottom-1 -left-1 bg-primary-600 text-[8px] font-black text-white px-1.5 py-0.5 rounded-md shadow-sm">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 w-full md:w-auto shrink-0 border-l border-slate-100 dark:border-white/10 pl-8">
              <Button
                variant="ghost"
                onClick={() => setSelectedPaths([])}
                className="h-14 px-6 rounded-2xl font-bold text-slate-400 hover:text-red-500 transition-colors"
              >
                Clear All
              </Button>
              <Button
                onClick={handleConfirm}
                className="h-14 px-10 rounded-2xl bg-primary-600 hover:bg-primary-700 font-black shadow-2xl shadow-primary-500/40 text-lg flex gap-3"
              >
                Confirm Selection
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {selectedPaths.length}
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Admin;
