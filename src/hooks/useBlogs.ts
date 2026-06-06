import { useState, useEffect } from "react";
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query,
  orderBy
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface BlogType {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  image: string; // Base64 or URL
  content: string; // Rich Text HTML
  keyFeatures: string[]; // Drag and drop array
  isFeatured: boolean;
  createdAt: number;
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogData: BlogType[] = [];
      snapshot.forEach((doc) => {
        blogData.push({ id: doc.id, ...doc.data() } as BlogType);
      });
      setBlogs(blogData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching blogs: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addBlog = async (blog: Omit<BlogType, "id">) => {
    if (!db) return;
    await addDoc(collection(db, "blogs"), blog);
  };

  const updateBlog = async (id: string, blog: Partial<BlogType>) => {
    if (!db) return;
    const blogRef = doc(db, "blogs", id);
    await updateDoc(blogRef, blog);
  };

  const deleteBlog = async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, "blogs", id));
  };

  return { blogs, loading, addBlog, updateBlog, deleteBlog };
};
