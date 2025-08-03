import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  var contactDetails = {
    name: "Yash Patel",
    phone: "+123456",
    email: "yashpatel.dev01@gmail.com",
    github: "https://github.com/yash752004",
    linkedin: "https://www.linkedin.com/in/yash-patel-18a93a230/",
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
              <p className="text-monospace">{contactDetails.email}</p>
            </div>
            <div className="flex gap-4">
              <a href={contactDetails.github} target="_blank" className="hover:bg-gradient"><Github className="w-5 h-5" /></a>
              <a href={contactDetails.linkedin} target="_blank" className="hover:bg-gradient"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-2">
              <a href={contactDetails.linkedin} target="_blank" className="hover:underline hover:text-gray-950">About</a>
              <a href={contactDetails.linkedin} target="_blank" className="hover:underline hover:text-gray-950">Portfolio</a>
              <a href={contactDetails.linkedin} target="_blank" className="hover:underline hover:text-gray-950">Contact</a>
              <a href={contactDetails.github} target="_blank" className="hover:underline hover:text-gray-950">Terms & Conditions</a>
              <a href={contactDetails.linkedin} target="_blank" className="hover:underline hover:text-gray-950">Privacy Policy</a>
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