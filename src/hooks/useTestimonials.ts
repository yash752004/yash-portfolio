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

export interface TestimonialType {
  id: string;
  name: string;
  role?: string;
  image: string;
  text: string;
  createdAt?: number;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, "testimonials"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: TestimonialType[] = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as TestimonialType);
      });
      // Sort by creation date if available, or just keep them in order
      data.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setTestimonials(data);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching testimonials: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addTestimonial = async (testimonial: Omit<TestimonialType, "id">) => {
    if (!db) return;
    await addDoc(collection(db, "testimonials"), testimonial);
  };

  const updateTestimonial = async (id: string, testimonial: Partial<TestimonialType>) => {
    if (!db) return;
    const ref = doc(db, "testimonials", id);
    await updateDoc(ref, testimonial);
  };

  const deleteTestimonial = async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, "testimonials", id));
  };

  return { testimonials, loading, addTestimonial, updateTestimonial, deleteTestimonial };
};
