import React from "react";
import { BlogType } from "@/hooks/useBlogs";
import { formatDate } from "@/lib/utils";
import { Trash2, Edit, Star } from "lucide-react";

interface BlogsTableProps {
  blogs: BlogType[];
  onEdit: (blog: BlogType) => void;
  onDelete: (id: string) => void;
  onToggleFeatured: (id: string) => void;
}

export const BlogsTable = ({ blogs, onEdit, onDelete, onToggleFeatured }: BlogsTableProps) => {
  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-medium">
              <th className="py-4 px-6">Image</th>
              <th className="py-4 px-6">Blog Title</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6 text-center">Featured</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <td className="py-4 px-6">
                  <div className="w-16 h-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {blog.image && (
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">{blog.title}</div>
                  <div className="text-sm text-slate-500">By {blog.author}</div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                  {formatDate(blog.date)}
                </td>
                <td className="py-4 px-6 text-center">
                  <button 
                    onClick={() => onToggleFeatured(blog.id)}
                    className={`p-2 rounded-full transition-colors ${blog.isFeatured ? 'text-yellow-500 bg-yellow-50' : 'text-slate-300 hover:text-yellow-400'}`}
                  >
                    <Star size={20} fill={blog.isFeatured ? "currentColor" : "none"} />
                  </button>
                </td>
                <td className="py-4 px-6 text-right space-x-2">
                  <button onClick={() => onEdit(blog)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => onDelete(blog.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-500">
                  No blogs found. Add one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
