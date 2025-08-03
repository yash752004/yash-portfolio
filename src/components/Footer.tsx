import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../features/contact/contactSlice';
import type { RootState, AppDispatch } from '../store/store';
import { useEffect } from "react";

const Footer = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.contact);



  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // if (loading) return <p>Loading contact info...</p>;
  // if (error) return <p>Error: {error}</p>;
  if (!data || Array.isArray(data)) return null;
  
  const { name, Email, phone, location, githubURL, linkdinURL } = data as {
    name?: string;
    Email?: string;
    phone?: string;
    location?: string;
    githubURL?: string;
    linkdinURL?: string;
  };

  const contactDetails = {
    name,
    phone,
    location,
    Email,
    githubURL,
    linkdinURL,

  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between text-gray-600">
          <div className="flex flex-col gap-4">
            <div className="text-sm text-monospace">// Developed by</div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold text-gray-950">{contactDetails.name}</p>
              <p className="text-monospace">{contactDetails.phone}</p>
              <p className="text-monospace">{contactDetails.Email}</p>
            </div>
            <div className="flex gap-4">
              <a href={contactDetails.githubURL} target="_blank" className="hover:bg-gradient"><Github className="w-5 h-5" /></a>
              <a href={contactDetails.linkdinURL} target="_blank" className="hover:bg-gradient"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-2">
            <a href='/' target="_blank" className="hover:underline hover:text-gray-950">About</a>
            <a href='/projects' target="_blank" className="hover:underline hover:text-gray-950">Portfolio</a>
            <a href='/contact' target="_blank" className="hover:underline hover:text-gray-950">Contact</a>
            <a href="/terms" target="_blank" className="hover:underline hover:text-gray-950">Terms & Conditions</a>
            <a href='/privacy-policy' target="_blank" className="hover:underline hover:text-gray-950">Privacy Policy</a>
          </div>
        </div>
        <div className="container mx-auto text-center mt-6 text-gray-500">
          &copy; 2025 All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;