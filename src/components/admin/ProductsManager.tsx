import React, { useRef } from "react";
import { productsData } from "@/data/productsData";
import { useProductsImages } from "@/hooks/useProductsImages";
import { GradientSpinner } from "@/components/ui/GradientSpinner";
import { Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

export const ProductsManager = () => {
  const { productImages, loading, updateProductImage } = useProductsImages();

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
        resolve(canvas.toDataURL('image/webp', 0.5));
      };
      img.src = dataUrl;
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, productId: string, field: "thumbnail" | "macbookSrc" | "screenshots") => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      if (field === "screenshots") {
        const newScreenshots = [...(productImages[productId]?.screenshots || [])];
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          const p = new Promise<string>((resolve) => {
            reader.onloadend = async () => {
              const compressed = await compressImage(reader.result as string, 800);
              resolve(compressed);
            };
          });
          reader.readAsDataURL(files[i]);
          newScreenshots.push(await p);
        }
        await updateProductImage(productId, { screenshots: newScreenshots });
        toast.success("Screenshots updated!");
      } else {
        const file = files[0];
        const reader = new FileReader();
        reader.onloadend = async () => {
          const compressed = await compressImage(reader.result as string, field === "thumbnail" ? 600 : 1200);
          await updateProductImage(productId, { [field]: compressed });
          toast.success(`${field} updated!`);
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image. It might be too large.");
    }
  };

  const removeScreenshot = async (productId: string, idx: number) => {
    try {
      const newScreenshots = [...(productImages[productId]?.screenshots || [])];
      newScreenshots.splice(idx, 1);
      await updateProductImage(productId, { screenshots: newScreenshots });
      toast.success("Screenshot removed!");
    } catch (error) {
      toast.error("Failed to remove screenshot.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-white/10 shadow-sm">
        <GradientSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Products Images</h3>
          <p className="text-slate-500 mt-1">Upload images for the hardcoded products to display on the Home and Product pages.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {productsData.map((product) => {
          const images = productImages[product.id] || { thumbnail: "", macbookSrc: "", screenshots: [] };

          return (
            <div key={product.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[32px] p-8 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                {product.name}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Thumbnail */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Home Page Thumbnail</label>
                  <label className="cursor-pointer">
                    <div className={`w-full aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all ${images.thumbnail ? 'border-primary-500/50 bg-primary-50/10' : 'border-slate-300 hover:border-primary-400 hover:bg-slate-50'}`}>
                      {images.thumbnail ? (
                        <img src={images.thumbnail} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
                      ) : (
                        <div className="flex flex-col items-center text-slate-400">
                          <ImageIcon size={32} className="mb-2" />
                          <span className="text-sm font-medium">Upload Thumbnail</span>
                        </div>
                      )}
                    </div>
                    <input type="file" onChange={(e) => handleImageUpload(e, product.id, "thumbnail")} accept="image/*" className="hidden" />
                  </label>
                </div>

                {/* Macbook Mockup */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Macbook Scroll Mockup Image</label>
                  <label className="cursor-pointer">
                    <div className={`w-full aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all ${images.macbookSrc ? 'border-primary-500/50 bg-primary-50/10' : 'border-slate-300 hover:border-primary-400 hover:bg-slate-50'}`}>
                      {images.macbookSrc ? (
                        <img src={images.macbookSrc} alt={`${product.name} Mockup`} className="w-full h-full object-cover rounded-2xl" />
                      ) : (
                        <div className="flex flex-col items-center text-slate-400">
                          <ImageIcon size={32} className="mb-2" />
                          <span className="text-sm font-medium">Upload Mockup</span>
                        </div>
                      )}
                    </div>
                    <input type="file" onChange={(e) => handleImageUpload(e, product.id, "macbookSrc")} accept="image/*" className="hidden" />
                  </label>
                </div>

                {/* Screenshots */}
                <div className="md:col-span-2 mt-4 pt-6 border-t border-slate-100 dark:border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Marquee Screenshots ({images.screenshots.length})</label>
                    <label className="cursor-pointer text-sm font-bold text-primary-600 hover:text-primary-700 bg-primary-50 dark:bg-primary-500/10 px-4 py-2 rounded-xl">
                      + Add Screenshots
                      <input type="file" multiple onChange={(e) => handleImageUpload(e, product.id, "screenshots")} accept="image/*" className="hidden" />
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {images.screenshots.map((shot, idx) => (
                      <div key={idx} className="relative aspect-video rounded-xl overflow-hidden group border border-slate-200">
                        <img src={shot} alt="Screenshot" className="w-full h-full object-cover" />
                        <button 
                          onClick={() => removeScreenshot(product.id, idx)} 
                          className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    {images.screenshots.length === 0 && (
                      <div className="col-span-full py-8 text-center border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm">
                        No screenshots uploaded
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
