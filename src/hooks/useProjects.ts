import { useState, useEffect } from "react";
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  setDoc,
  query,
  where,
  limit
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface ProjectDetailType {
  id: string;
  title: string;
  description: string;
  tools: string[];
  keyCapabilities?: string[];
  verticalThumbnail: string;
  thumbnail: string;
  screenshots: string[];
  metricsEnabled: boolean;
  metricsValue: string;
  metricsLabel: string;
  category: string;
  showOnHome: boolean;
  showOnProjects: boolean;
  order?: number;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectDetailType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projData: ProjectDetailType[] = [];
      snapshot.forEach((doc) => {
        projData.push({ id: doc.id, ...doc.data() } as ProjectDetailType);
      });
      // Sort projects by order ascending, fallback to 0
      projData.sort((a, b) => (a.order || 0) - (b.order || 0));
      setProjects(projData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching projects: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addProject = async (project: Omit<ProjectDetailType, "id">) => {
    if (!db) return;
    await addDoc(collection(db, "projects"), project);
  };

  const updateProject = async (id: string, project: Partial<ProjectDetailType>) => {
    if (!db) return;
    const projectRef = doc(db, "projects", id);
    await updateDoc(projectRef, project);
  };

  const deleteProject = async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, "projects", id));
  };

  return { projects, loading, addProject, updateProject, deleteProject };
};

export const useHomeProjects = () => {
  const [homeProjects, setHomeProjects] = useState<ProjectDetailType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, "projects"), where("showOnHome", "==", true), limit(3));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projData: ProjectDetailType[] = [];
      snapshot.forEach((doc) => {
        projData.push({ id: doc.id, ...doc.data() } as ProjectDetailType);
      });
      // Sort projects by order ascending, fallback to 0
      projData.sort((a, b) => (a.order || 0) - (b.order || 0));
      setHomeProjects(projData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { homeProjects, loading };
};
