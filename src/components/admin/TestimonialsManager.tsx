import React, { useState, useRef } from "react";
import { useTestimonials, TestimonialType } from "@/hooks/useTestimonials";
import { Edit2, Trash2, Plus, Image as ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GradientSpinner } from "@/components/ui/GradientSpinner";

export const TestimonialsManager = () => {
  const { testimonials, loading, addTestimonial, updateTestimonial, deleteTestimonial } = useTestimonials();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingData, setEditingData] = useState<TestimonialType | null>(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setName("");
    setRole("");
    setText("");
    setImage("");
    setEditingData(null);
  };

  const handleOpenEdit = (t: TestimonialType) => {
    setEditingData(t);
    setName(t.name);
    setRole(t.role || "");
    setText(t.text);
    setImage(t.image);
    setIsDialogOpen(true);
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const compressImage = (dataUrl: string, maxWidth = 300): Promise<string> => {
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
        resolve(canvas.toDataURL('image/webp', 0.6));
      };
      img.src = dataUrl;
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const compressed = await compressImage(reader.result as string, 300);
        setImage(compressed);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!name || !text || !image) {
      alert("Name, text, and image are required!");
      return;
    }

    try {
      if (editingData) {
        await updateTestimonial(editingData.id, { name, role, text, image });
      } else {
        await addTestimonial({ name, role, text, image, createdAt: Date.now() });
      }
      setIsDialogOpen(false);
      resetForm();
    } catch (e) {
      console.error(e);
      alert("Failed to save testimonial.");
    }
  };

  const handleDelete = async (id: string, tName: string) => {
    if (window.confirm(`Are you sure you want to delete ${tName}'s testimonial?`)) {
      await deleteTestimonial(id);
    }
  };

  if (loading) return <div className="flex justify-center p-12"><GradientSpinner /></div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">All Testimonials</h3>
        <button onClick={handleOpenAdd} className="bg-primary-600 hover:bg-primary-700 font-bold text-white rounded-xl px-6 py-2 transition-colors">
          + Add Testimonial
        </button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
              {editingData ? "Edit Testimonial" : "Add Testimonial"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="e.g. Yash Patel" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Role (Optional)</label>
                <input type="text" value={role} onChange={e => setRole(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="e.g. CEO, Product Manager" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Testimonial Text</label>
              <textarea value={text} onChange={e => setText(e.target.value)} rows={4} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Their review..." />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Profile Image (Upload or URL)</label>
              <div className="flex gap-4 items-center">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-20 h-20 rounded-full border-2 border-dashed border-slate-300 hover:border-primary-400 flex items-center justify-center cursor-pointer overflow-hidden bg-slate-50 flex-shrink-0"
                >
                  {image ? (
                    <img src={image} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <ImageIcon className="text-slate-400" size={24} />
                  )}
                </div>
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                
                <div className="flex-1">
                  <input type="text" value={image} onChange={e => setImage(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm" placeholder="Or paste image URL here..." />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-white/10">
              <button onClick={() => setIsDialogOpen(false)} className="px-6 py-2 rounded-xl text-slate-600 font-medium hover:bg-slate-100 transition-colors">
                Cancel
              </button>
              <button onClick={handleSave} className="px-6 py-2 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors">
                Save Testimonial
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
              <th className="p-4 text-sm font-bold text-slate-900 dark:text-white">Profile</th>
              <th className="p-4 text-sm font-bold text-slate-900 dark:text-white">Name & Role</th>
              <th className="p-4 text-sm font-bold text-slate-900 dark:text-white">Review</th>
              <th className="p-4 text-sm font-bold text-slate-900 dark:text-white text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((t) => (
              <tr key={t.id} className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                </td>
                <td className="p-4">
                  <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                  {t.role && <div className="text-xs text-slate-500 mt-1">{t.role}</div>}
                </td>
                <td className="p-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">
                  {t.text}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => handleOpenEdit(t)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button onClick={() => handleDelete(t.id, t.name)} className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {testimonials.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">
                  No testimonials found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
