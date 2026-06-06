import { useState, useEffect } from "react";
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface CategoryType {
  id: string;
  name: string;
  order?: number;
}

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, "categories"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const catData: CategoryType[] = [];
      snapshot.forEach((doc) => {
        catData.push({ id: doc.id, ...doc.data() } as CategoryType);
      });
      
      // Auto-seed default categories if database is completely empty
      if (catData.length === 0) {
        const defaultCategories = ["Mobile Apps", "Websites", "Cloud", "SaaS"];
        defaultCategories.forEach(async (name) => {
          try {
            await addDoc(collection(db, "categories"), { name });
          } catch (e) {
            console.error("Failed to seed category", e);
          }
        });
      }

      // Sort categories alphabetically or by order
      catData.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return a.name.localeCompare(b.name);
      });
      setCategories(catData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching categories: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addCategory = async (category: Omit<CategoryType, "id">) => {
    if (!db) return;
    await addDoc(collection(db, "categories"), category);
  };

  const updateCategory = async (id: string, category: Partial<CategoryType>) => {
    if (!db) return;
    const catRef = doc(db, "categories", id);
    await updateDoc(catRef, category);
  };

  const deleteCategory = async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, "categories", id));
  };

  return { categories, loading, addCategory, updateCategory, deleteCategory };
};
