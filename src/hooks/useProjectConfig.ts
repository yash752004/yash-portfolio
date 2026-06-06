import { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface ProjectConfigType {
  showCategoryFilter: boolean;
}

export const useProjectConfig = () => {
  const [config, setConfig] = useState<ProjectConfigType>({ showCategoryFilter: true });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const configRef = doc(db, "config", "projectConfig");
    const unsubscribe = onSnapshot(configRef, (docSnap) => {
      if (docSnap.exists()) {
        setConfig(docSnap.data() as ProjectConfigType);
      } else {
        // Default values if not set
        setConfig({ showCategoryFilter: true });
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching config: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateConfig = async (newConfig: Partial<ProjectConfigType>) => {
    if (!db) return;
    const configRef = doc(db, "config", "projectConfig");
    await setDoc(configRef, { ...config, ...newConfig }, { merge: true });
  };

  return { config, loading, updateConfig };
};
