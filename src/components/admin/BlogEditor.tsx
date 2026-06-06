import React, { useState, useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Reorder } from "motion/react";
import { GripVertical, X, Plus, Image as ImageIcon, Check, Eye } from "lucide-react";
import { BlogType } from "@/hooks/useBlogs";

interface BlogEditorProps {
  initialData?: Partial<BlogType>;
  categories: string[];
  onSave: (blog: Omit<BlogType, "id" | "createdAt">) => void;
  onCancel: () => void;
}

// Custom Quill Wrapper Component to bypass React 19 incompatibilities
const QuillEditor = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Compose your trade analysis, strategies, or market thoughts here...",
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            ['clean']
          ]
        }
      });

      // Set initial value
      if (value) {
        quillInstance.current.root.innerHTML = value;
      }

      quillInstance.current.on('text-change', () => {
        onChange(quillInstance.current!.root.innerHTML);
      });
    }
  }, []);

  // Make sure to sync external value changes if needed (e.g. reset)
  useEffect(() => {
    if (quillInstance.current && value !== quillInstance.current.root.innerHTML) {
      if (!value) {
        quillInstance.current.root.innerHTML = '';
      }
    }
  }, [value]);

  return (
    <div className="space-y-2 mb-12">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-bold text-slate-800 dark:text-white block">Description *</label>
        <button 
          onClick={() => window.open("", "_blank")?.document.write(`<html><head><title>Preview</title><style>body { font-family: system-ui; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; } img { max-width: 100%; border-radius: 12px; } table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid #ddd; padding: 8px; }</style></head><body><div>${value}</div></body></html>`)}
          className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1"
        >
          <Eye size={16} /> Preview Published View
        </button>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
        <div ref={editorRef} style={{ minHeight: '350px', fontSize: '15px' }} />
      </div>
    </div>
  );
};

export const BlogEditor = ({ initialData, categories, onSave, onCancel }: BlogEditorProps) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [date, setDate] = useState(initialData?.date || new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState(initialData?.category || categories[0] || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [keyFeatures, setKeyFeatures] = useState<string[]>(initialData?.keyFeatures || []);
  const [newFeature, setNewFeature] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Convert uploaded image to Base64
  const compressImage = (dataUrl: string, maxWidth = 800): Promise<string> => {
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
        resolve(canvas.toDataURL('image/jpeg', 0.6)); // 60% quality JPEG
      };
      img.src = dataUrl;
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const compressed = await compressImage(reader.result as string, 800);
        setImage(compressed);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Key Feature
  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setKeyFeatures([...keyFeatures, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const removeFeature = (idx: number) => {
    setKeyFeatures(keyFeatures.filter((_, i) => i !== idx));
  };

  const handleSubmit = () => {
    onSave({
      title,
      author,
      date,
      category,
      content,
      image,
      keyFeatures,
      isFeatured: initialData?.isFeatured || false
    });
  };

  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-12 shadow-xl border border-slate-100 dark:border-white/10 space-y-8">
      <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {initialData ? "Edit Blog" : "Add New Blog"}
        </h2>
        <div className="flex gap-4">
          <button onClick={onCancel} className="px-6 py-2 rounded-xl text-slate-600 font-medium hover:bg-slate-100 transition-colors">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-6 py-2 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors">
            Save Blog
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Basic Fields */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Author</label>
              <input type="text" value={author} onChange={e => setAuthor(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Category</label>
              <select 
                value={category} 
                onChange={e => setCategory(e.target.value)} 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Key Features Drag & Drop */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Key Features (Drag to reorder)</label>
            <div className="flex gap-2 mb-4">
              <input type="text" value={newFeature} onChange={e => setNewFeature(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddFeature()} placeholder="Add a key feature..." className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <button onClick={handleAddFeature} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors">
                <Plus size={24} />
              </button>
            </div>
            <Reorder.Group axis="y" values={keyFeatures} onReorder={setKeyFeatures} className="space-y-2">
              {keyFeatures.map((feat, idx) => (
                <Reorder.Item key={feat} value={feat} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-grab active:cursor-grabbing">
                  <div className="flex items-center gap-3">
                    <GripVertical size={16} className="text-slate-400" />
                    <span className="text-slate-700 text-sm font-medium">{feat}</span>
                  </div>
                  <button onClick={() => removeFeature(idx)} className="text-red-500 p-1 hover:bg-red-50 rounded-lg transition-colors">
                    <X size={16} />
                  </button>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>

        <div className="space-y-6">
          {/* Cover Image Upload */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Cover Image</label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`w-full aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${image ? 'border-primary-500/50 bg-primary-50/10' : 'border-slate-300 hover:border-primary-400 hover:bg-slate-50'}`}
            >
              {image ? (
                <img src={image} alt="Preview" className="w-full h-full object-cover rounded-2xl" />
              ) : (
                <div className="flex flex-col items-center text-slate-400">
                  <ImageIcon size={32} className="mb-2" />
                  <span>Click to upload cover</span>
                </div>
              )}
            </div>
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
          </div>

        </div>
      </div>

      {/* React Quill Rich Text Editor */}
      <div className="mt-8">
        <QuillEditor value={content} onChange={setContent} />
      </div>

    </div>
  );
};
