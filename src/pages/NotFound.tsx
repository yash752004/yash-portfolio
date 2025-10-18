import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Ghost } from "lucide-react";
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
    <div className="min-h-screen">
      <Header />
      <section className="page-section pt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container text-gray-400 p-16 max-w-2xl text-center gap-4"
        >
          <div className="flex justify-center mb-4">
            <Ghost className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-7xl font-bold mb-4">404</h1>
          <p className="text-lg mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="link link-focus font-semibold text-primary-500 underline"
          >
            Return Home
          </Link>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
