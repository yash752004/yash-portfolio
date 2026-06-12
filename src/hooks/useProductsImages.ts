import { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface ProductImages {
  thumbnail: string;
  macbookSrc: string;
  screenshots: string[];
}

export type ProductsImagesConfigType = Record<string, ProductImages>;

export const useProductsImages = () => {
  const [productImages, setProductImages] = useState<ProductsImagesConfigType>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const configRef = doc(db, "config", "productsImages");
    const unsubscribe = onSnapshot(configRef, (docSnap) => {
      if (docSnap.exists()) {
        setProductImages(docSnap.data() as ProductsImagesConfigType);
      } else {
        setProductImages({});
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching product images config: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateProductImage = async (productId: string, newImages: Partial<ProductImages>) => {
    if (!db) return;
    const configRef = doc(db, "config", "productsImages");
    
    try {
      const docSnap = await getDoc(configRef);
      const currentData = docSnap.exists() ? docSnap.data() : {};
      
      const updatedProductData = {
        ...(currentData[productId] || { thumbnail: "", macbookSrc: "", screenshots: [] }),
        ...newImages
      };

      await setDoc(configRef, { 
        ...currentData,
        [productId]: updatedProductData
      }, { merge: true });
      
    } catch (error) {
      console.error("Error updating product image: ", error);
      throw error;
    }
  };

  return { productImages, loading, updateProductImage };
};
