import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Edit2, Plus } from "lucide-react";
import { ProjectDetailType } from "@/hooks/useProjects";

interface CategoryManagerProps {
  categories: string[];
  projects: ProjectDetailType[];
  onAddCategory: (name: string) => void;
  onEditCategory: (oldName: string, newName: string) => void;
  onDeleteCategory: (name: string) => void;
}

export const CategoryManager: React.FC<CategoryManagerProps> = ({ categories, projects, onAddCategory, onEditCategory, onDeleteCategory }) => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editCategoryValue, setEditCategoryValue] = useState("");

  const handleAdd = () => {
    if (newCategoryName.trim()) {
      onAddCategory(newCategoryName.trim());
      setNewCategoryName("");
    }
  };

  const getProjectCount = (categoryName: string) => {
    return projects.filter(p => p.category === categoryName).length;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Categories</h3>
      </div>

      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm max-w-3xl">
        {/* Add Category */}
        <div className="flex gap-4 mb-8">
          <Input 
            placeholder="New category name..." 
            value={newCategoryName}
            onChange={e => setNewCategoryName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
            className="bg-slate-50 dark:bg-slate-900"
          />
          <Button onClick={handleAdd} className="bg-primary-600 hover:bg-primary-700 font-bold shrink-0">
            <Plus size={18} className="mr-2" /> Add Category
          </Button>
        </div>

        {/* Category List */}
        <div className="space-y-3">
          {categories.length === 0 ? (
            <p className="text-slate-500 text-center py-4">No categories defined yet.</p>
          ) : (
            categories.map(cat => {
              const count = getProjectCount(cat);
              const isEditing = editingCategory === cat;

              return (
                <div key={cat} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl transition-colors hover:border-slate-300 dark:hover:border-white/20">
                  
                  {isEditing ? (
                    <div className="flex items-center gap-3 flex-1 mr-4">
                      <Input
                        value={editCategoryValue}
                        onChange={e => setEditCategoryValue(e.target.value)}
                        autoFocus
                        className="bg-white dark:bg-slate-800 border-primary-500"
                      />
                      <Button 
                        size="sm" 
                        className="bg-primary-600 hover:bg-primary-700"
                        onClick={() => {
                          if (editCategoryValue.trim() && editCategoryValue.trim() !== cat) {
                            onEditCategory(cat, editCategoryValue.trim());
                          }
                          setEditingCategory(null);
                        }}
                      >
                        Save
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => setEditingCategory(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">{cat}</span>
                        <span className="text-sm font-medium text-slate-500">
                          {count} {count === 1 ? 'project' : 'projects'} assigned
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingCategory(cat);
                            setEditCategoryValue(cat);
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
                          title="Edit Category"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete category "${cat}"?`)) {
                              onDeleteCategory(cat);
                            }
                          }}
                          className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                          title={count > 0 ? "Cannot delete category with projects" : "Delete Category"}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </>
                  )}

                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
