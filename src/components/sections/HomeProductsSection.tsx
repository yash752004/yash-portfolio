import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { productsData } from "@/data/productsData";
import { useProductsImages } from "@/hooks/useProductsImages";
import { GradientSpinner } from "@/components/ui/GradientSpinner";

const HomeProductsSection: React.FC = () => {
  const navigate = useNavigate();
  const { productImages, loading } = useProductsImages();

  return (
    <section id="products" className="py-24 bg-transparent w-full">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              EXPLORE OUR <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                READY-TO-USE SOLUTIONS
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Accelerate your business with our specialized, market-tested software products designed for scale and efficiency.
            </p>
          </div>
        </div>

        {/* Bento grid layout for products */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <GradientSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productsData.map((product) => {
              const images = productImages[product.id];
              return (
                <div 
                  key={product.id}
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="bg-glass-premium border border-slate-200/60 rounded-[32px] overflow-hidden shadow-xl card-hover-effect flex flex-col justify-between cursor-pointer group"
                >
                  {/* Preview image */}
                  <div className="h-44 w-full bg-slate-100/50 flex items-center justify-center p-4 border-b border-slate-100 relative overflow-hidden">
                    {images?.thumbnail ? (
                      <img 
                        src={images.thumbnail} 
                        alt={product.name} 
                        className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-500" 
                      />
                    ) : (
                      <div className="text-slate-400 font-bold text-lg">{product.name}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                          {product.category}
                        </span>
                        <ArrowUpRight className="size-4 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <h3 className="font-extrabold text-slate-800 text-xl leading-tight group-hover:text-emerald-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 line-clamp-2">
                        {product.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <span className="text-xs font-bold text-primary-600">Explore Product →</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeProductsSection;
