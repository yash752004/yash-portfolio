import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Ghost, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative bg-slate-50 flex flex-col">
      <Helmet>
        <title>404: Page Not Found | Pinak Technology</title>
      </Helmet>

      <Header />

      {/* Decorative Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-2xl shadow-primary-500/5 rounded-[40px] p-12 md:p-20 text-center max-w-3xl w-full flex flex-col items-center group">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-primary-100/50 group-hover:scale-110 transition-transform duration-500">
            <Ghost className="w-12 h-12 text-primary-500 drop-shadow-sm" />
          </div>
          
          <h1 className="text-8xl md:text-9xl font-black mb-4 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 drop-shadow-sm">404</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Looks like you're lost in space.
          </h2>
          
          <p className="text-lg text-slate-500 max-w-lg mx-auto mb-12">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white shadow-xl shadow-primary-500/20 hover:shadow-secondary-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
