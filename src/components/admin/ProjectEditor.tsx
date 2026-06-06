import React, { useState, useRef } from "react";
import { ProjectDetailType, ProjectConfigType } from "@/hooks/useProjects";
import { X, Plus, Image as ImageIcon, Trash2, GripVertical, Settings, Edit2 } from "lucide-react";
import { Reorder } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProjectEditorProps {
  initialData?: Partial<ProjectDetailType>;
  categories: string[];
  onSave: (project: Omit<ProjectDetailType, "id"> | Partial<ProjectDetailType>) => void;
  onCancel: () => void;
  onAddCategory?: (name: string) => void;
  onDeleteCategory?: (name: string) => void;
  onEditCategory?: (oldName: string, newName: string) => void;
}

export const ProjectEditor = ({ initialData, categories, onSave, onCancel, onAddCategory, onDeleteCategory, onEditCategory }: ProjectEditorProps) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [category, setCategory] = useState(initialData?.category || categories?.[0] || "");
  const [metricsEnabled, setMetricsEnabled] = useState(initialData?.metricsEnabled ?? true);
  const [metricsValue, setMetricsValue] = useState(initialData?.metricsValue || "+140% Growth");
  const [metricsLabel, setMetricsLabel] = useState(initialData?.metricsLabel || "Operations scale");
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || "");
  const [screenshots, setScreenshots] = useState<string[]>(initialData?.screenshots || []);
  
  const [tools, setTools] = useState<string[]>(initialData?.tools || []);
  const [newTool, setNewTool] = useState("");

  const [newCategoryName, setNewCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editCategoryValue, setEditCategoryValue] = useState("");

  const thumbInputRef = useRef<HTMLInputElement>(null);
  const screenshotInputRef = useRef<HTMLInputElement>(null);

  const compressImage = (dataUrl: string, maxWidth = 600): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/webp', 0.5)); // 50% quality WebP for significantly smaller size
      };
      img.src = dataUrl;
    });
  };

  const handleThumbUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const compressed = await compressImage(reader.result as string, 600);
        setThumbnail(compressed);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const compressed = await compressImage(reader.result as string, 800);
          setScreenshots(prev => [...prev, compressed]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeScreenshot = (idx: number) => {
    setScreenshots(screenshots.filter((_, i) => i !== idx));
  };

  const handleAddTool = () => {
    if (newTool.trim() && !tools.includes(newTool.trim())) {
      setTools([...tools, newTool.trim()]);
      setNewTool("");
    }
  };

  const removeTool = (tool: string) => {
    setTools(tools.filter(t => t !== tool));
  };

  const [keyCapabilities, setKeyCapabilities] = useState<string[]>(initialData?.keyCapabilities || []);
  const [newCapability, setNewCapability] = useState("");

  const handleAddCapability = () => {
    if (newCapability.trim()) {
      setKeyCapabilities([...keyCapabilities, newCapability.trim()]);
      setNewCapability("");
    }
  };

  const removeCapability = (idx: number) => {
    setKeyCapabilities(keyCapabilities.filter((_, i) => i !== idx));
  };

  const handleSubmit = async () => {
    // Re-compress existing images if they are too large (e.g., from before the compression fix)
    let finalThumbnail = thumbnail;
    if (thumbnail && thumbnail.length > 150000) {
      try {
        finalThumbnail = await compressImage(thumbnail, 600);
      } catch (e) {
        console.warn("Failed to recompress thumbnail", e);
      }
    }
    
    let finalScreenshots = [];
    for (const shot of screenshots) {
      if (shot.length > 150000) {
        try {
          finalScreenshots.push(await compressImage(shot, 800));
        } catch (e) {
          finalScreenshots.push(shot);
        }
      } else {
        finalScreenshots.push(shot);
      }
    }

    onSave({
      title,
      description,
      category,
      metricsEnabled,
      metricsValue,
      metricsLabel,
      thumbnail: finalThumbnail,
      verticalThumbnail: finalThumbnail, // use same for now
      screenshots: finalScreenshots,
      tools,
      keyCapabilities,
      showOnHome: initialData?.showOnHome ?? false,
      showOnProjects: initialData?.showOnProjects ?? true,
    });
  };

  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-12 shadow-xl border border-slate-100 dark:border-white/10 space-y-8">
      <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {initialData ? "Edit Project" : "Add New Project"}
        </h2>
        <div className="flex gap-4">
          <button onClick={onCancel} className="px-6 py-2 rounded-xl text-slate-600 font-medium hover:bg-slate-100 transition-colors">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-6 py-2 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors">
            Save Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Category</label>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1">
                      <Settings size={14} /> Manage Categories
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">Manage Categories</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="New category name..." 
                          value={newCategoryName} 
                          onChange={(e) => setNewCategoryName(e.target.value)} 
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && newCategoryName.trim() && onAddCategory) {
                              onAddCategory(newCategoryName.trim());
                              setNewCategoryName("");
                            }
                          }}
                          className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" 
                        />
                        <button 
                          onClick={() => {
                            if (newCategoryName.trim() && onAddCategory) {
                              onAddCategory(newCategoryName.trim());
                              setNewCategoryName("");
                            }
                          }} 
                          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors"
                        >
                          Add
                        </button>
                      </div>
                      <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                        {categories?.map(cat => (
                          <div key={cat} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl">
                            {editingCategory === cat ? (
                              <div className="flex items-center gap-2 flex-1 mr-2">
                                <input
                                  type="text"
                                  value={editCategoryValue}
                                  onChange={e => setEditCategoryValue(e.target.value)}
                                  className="flex-1 px-3 py-1 text-sm rounded-lg border border-primary-500 bg-white dark:bg-slate-800 focus:outline-none"
                                  autoFocus
                                />
                                <button
                                  onClick={() => {
                                    if (onEditCategory && editCategoryValue.trim() && editCategoryValue.trim() !== cat) {
                                      onEditCategory(cat, editCategoryValue.trim());
                                    }
                                    setEditingCategory(null);
                                  }}
                                  className="text-xs font-bold text-primary-600 hover:text-primary-700"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditingCategory(null)}
                                  className="text-xs font-medium text-slate-500 hover:text-slate-700"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <>
                                <span className="font-medium text-slate-700 dark:text-slate-300">{cat}</span>
                                <div className="flex gap-1">
                                  <button
                                    onClick={() => {
                                      setEditingCategory(cat);
                                      setEditCategoryValue(cat);
                                    }}
                                    className="p-1.5 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
                                  >
                                    <Edit2 size={16} />
                                  </button>
                                  <button 
                                    onClick={() => {
                                      if (onDeleteCategory && window.confirm(`Delete category "${cat}"?`)) {
                                        onDeleteCategory(cat);
                                      }
                                    }} 
                                    className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500">
                {categories?.map(cat => (
                  <option key={cat} value={cat} className="text-slate-900">{cat}</option>
                ))}
                {!categories?.includes(category) && category && (
                  <option value={category} className="text-slate-900">{category}</option>
                )}
              </select>
            </div>
            <div className="p-4 border border-slate-200 dark:border-white/10 rounded-xl bg-slate-50/50 dark:bg-white/5 space-y-3 mt-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-900 dark:text-white">Business Impact Widget</label>
                <button 
                  onClick={() => setMetricsEnabled(!metricsEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${metricsEnabled ? 'bg-primary-600' : 'bg-slate-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${metricsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              {metricsEnabled && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Impact Metric (e.g., +140% Growth)</label>
                    <input type="text" value={metricsValue} onChange={e => setMetricsValue(e.target.value)} placeholder="+140% Growth" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Impact Label (e.g., Operations scale)</label>
                    <input type="text" value={metricsLabel} onChange={e => setMetricsLabel(e.target.value)} placeholder="Operations scale" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Tools & Technologies</label>
            <div className="flex gap-2 mb-3">
              <input type="text" value={newTool} onChange={e => setNewTool(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddTool()} placeholder="React, Node.js..." className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <button onClick={handleAddTool} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => (
                <div key={tool} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-sm font-medium text-slate-700">{tool}</span>
                  <button onClick={() => removeTool(tool)} className="text-red-400 hover:text-red-600">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Key Capabilities Drag & Drop */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Key Capabilities (Drag to reorder)</label>
            <div className="flex gap-2 mb-4">
              <input type="text" value={newCapability} onChange={e => setNewCapability(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddCapability()} placeholder="Add a key capability..." className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <button onClick={handleAddCapability} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors">
                <Plus size={24} />
              </button>
            </div>
            <Reorder.Group axis="y" values={keyCapabilities} onReorder={setKeyCapabilities} className="space-y-2">
              {keyCapabilities.map((cap, idx) => (
                <Reorder.Item key={cap} value={cap} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-grab active:cursor-grabbing">
                  <div className="flex items-center gap-3">
                    <GripVertical size={16} className="text-slate-400" />
                    <span className="text-slate-700 text-sm font-medium">{cap}</span>
                  </div>
                  <button onClick={() => removeCapability(idx)} className="text-red-500 p-1 hover:bg-red-50 rounded-lg transition-colors">
                    <X size={16} />
                  </button>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Thumbnail / Cover</label>
            <div 
              onClick={() => thumbInputRef.current?.click()}
              className={`w-full aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${thumbnail ? 'border-primary-500/50 bg-primary-50/10' : 'border-slate-300 hover:border-primary-400 hover:bg-slate-50'}`}
            >
              {thumbnail ? (
                <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover rounded-2xl" />
              ) : (
                <div className="flex flex-col items-center text-slate-400">
                  <ImageIcon size={32} className="mb-2" />
                  <span>Upload Main Image</span>
                </div>
              )}
            </div>
            <input type="file" ref={thumbInputRef} onChange={handleThumbUpload} accept="image/*" className="hidden" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Screenshots ({screenshots.length})</label>
              <button onClick={() => screenshotInputRef.current?.click()} className="text-sm font-bold text-primary-600 hover:text-primary-700">
                + Add Screenshots
              </button>
            </div>
            <input type="file" multiple ref={screenshotInputRef} onChange={handleScreenshotUpload} accept="image/*" className="hidden" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {screenshots.map((shot, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden group border border-slate-200">
                  <img src={shot} alt="Screenshot" className="w-full h-full object-cover" />
                  <button onClick={() => removeScreenshot(idx)} className="absolute top-1 right-1 p-1.5 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              {screenshots.length === 0 && (
                <div className="col-span-full py-8 text-center border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm">
                  No screenshots uploaded
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
