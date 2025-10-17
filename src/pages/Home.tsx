import HeroSection from "@/components/sections/HeroSection";
import HomeIntroSection from "@/components/sections/HomeIntroSection";
import HomeServiceSection from "@/components/sections/HomeServicesSection";
import HomeBenefitSection from "@/components/sections/HomeBenefitSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeProjectSection from "@/components/sections/HomeProjectSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HomeBenefitSection />
        <HomeServiceSection />
        <HomeProjectSection />
        <HomeIntroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
