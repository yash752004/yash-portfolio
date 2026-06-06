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

export interface ContactType {
  id: string;
  source: 'Contact Form' | 'Digital Blueprint';
  name: string;
  email: string;
  phone?: string;
  service?: string;       // For Contact Form
  projectType?: string;   // For Digital Blueprint
  timeline?: string;      // For Digital Blueprint
  budget?: string;        // For Digital Blueprint
  message: string;
  createdAt: string;
  status: 'New' | 'Reviewed' | 'Responded';
}

export const useContacts = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const contactsData: ContactType[] = [];
      snapshot.forEach((doc) => {
        contactsData.push({ id: doc.id, ...doc.data() } as ContactType);
      });
      setContacts(contactsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching contacts: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addContact = async (contact: Omit<ContactType, "id" | "status" | "createdAt">) => {
    if (!db) return;
    const newContact = {
      ...contact,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    await addDoc(collection(db, "contacts"), newContact);
  };

  const updateContactStatus = async (id: string, status: ContactType['status']) => {
    if (!db) return;
    const contactRef = doc(db, "contacts", id);
    await updateDoc(contactRef, { status });
  };

  const deleteContact = async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, "contacts", id));
  };

  return { contacts, loading, addContact, updateContactStatus, deleteContact };
};
