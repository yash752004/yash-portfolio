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
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

export interface ApplicationType {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
  resumeUrl: string; // The URL to the stored PDF/Docx
  createdAt: string;
  status: 'New' | 'Reviewed' | 'Interviewing' | 'Rejected' | 'Hired';
}

export const useApplications = () => {
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, "job_applications"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const appsData: ApplicationType[] = [];
      snapshot.forEach((doc) => {
        appsData.push({ id: doc.id, ...doc.data() } as ApplicationType);
      });
      setApplications(appsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching applications: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addApplication = async (
    data: Omit<ApplicationType, "id" | "status" | "createdAt" | "resumeUrl">, 
    resumeFile: File
  ) => {
    if (!db || !storage) throw new Error("Firebase not initialized");

    // Upload resume to Firebase Storage
    const fileRef = ref(storage, `resumes/${Date.now()}_${resumeFile.name}`);
    const uploadResult = await uploadBytes(fileRef, resumeFile);
    const resumeUrl = await getDownloadURL(uploadResult.ref);

    // Save application to Firestore
    const newApplication = {
      ...data,
      resumeUrl,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    
    await addDoc(collection(db, "job_applications"), newApplication);
  };

  const updateApplicationStatus = async (id: string, status: ApplicationType['status']) => {
    if (!db) return;
    const appRef = doc(db, "job_applications", id);
    await updateDoc(appRef, { status });
  };

  const deleteApplication = async (id: string) => {
    if (!db) return;
    // Note: We are not currently deleting the resume from Storage here, 
    // but in a production app, we should delete the file from Storage as well.
    await deleteDoc(doc(db, "job_applications", id));
  };

  return { applications, loading, addApplication, updateApplicationStatus, deleteApplication };
};
