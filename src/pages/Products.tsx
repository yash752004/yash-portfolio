import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeProductsSection from "@/components/sections/HomeProductsSection";
import ProductsHeroSection from "@/components/sections/ProductsHeroSection";
import { Helmet } from "react-helmet-async";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-slate-50">
      <Helmet>
        <title>Our Products | Pinak Technology</title>
        <meta name="description" content="Explore our innovative digital products." />
      </Helmet>
      
      {/* Decorative Glow background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <Header />
      
      <main className="relative z-10">
        <ProductsHeroSection />
        <HomeProductsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Products;
